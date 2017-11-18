import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Observable } from 'rxjs/Rx';

import { getComics, getOffset, getTotalComics } from '../store/reducers';
import { fetchComics, cancelRequests } from '../store/actions';
import { getDumpingIds } from '../store/reducers/comics';
import ComicItem from './components/ComicItem';


const isScrollAtPercent = (position, percent) =>
  ((position.sT + position.cH) / position.sH) >= (percent / 100);

const getPositions = ({ target }) => ({
  sT: target.scrollTop,
  sH: target.scrollHeight,
  cH: target.clientHeight
});

export class Comics extends Component {
  subscriptions = [];

  componentDidMount() {
    const { fetchComics, offset } = this.props;

    fetchComics(offset);
    this.reactiveScroll();
  }

  componentWillUnmount() {
    this.props.cancelRequests();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  reactiveScroll = () => {
    const wrapper = document.getElementById('marvel-comic-list');
    const scroll =
      Observable.fromEvent(wrapper, 'scroll')
        .debounceTime(500)
        .map(getPositions)
        .filter(positions => isScrollAtPercent(positions, 99.5) && this.props.canFetchMore)
        .map(() => this.props.fetchComics(this.props.offset))
        .subscribe();

      this.subscriptions.push(scroll);
  }

  render() {
    return (
      <div id="marvel-comic-list" className="container marvel-comics-comic-list">
        {this.props.comics.map(comic => (
          <ComicItem key={comic.id} comic={comic} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  comics: getComics(state),
  offset: getOffset(state),
  canFetchMore: (getDumpingIds(state.comics).length < getTotalComics(state)) && ownProps.location.pathname === '/',
});

const mapDispatchToProps = (dispatch) => ({
  fetchComics: (offset) => dispatch(fetchComics(offset)),
  cancelRequests: () => dispatch(cancelRequests()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comics);
