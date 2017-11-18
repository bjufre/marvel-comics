import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getComic } from '../store/reducers';
import { fetchComic } from '../store/actions';
import ComicDetailComponent from './components/ComicDetail';


export class ComicDetail extends Component {
  componentDidMount() {
    const { comicId, fetchComic } = this.props;

    fetchComic(comicId);
  }

  componentDidUpdate(nextProps) {
    const { fetchComic } = this.props;

    if (nextProps.comicId !== this.props.comicId) {
      return fetchComic(nextProps.comicId);
    }
  }

  render() {
    return <ComicDetailComponent {...this.props} />
  }
}

const mapStateToProps = (state, { match: { params }}) => ({
  comicId: params.id,
  comic: getComic(state, params.id) || {},
});

const mapDispatchToProps = (dispatch) => ({
  fetchComic: (comicId) => dispatch(fetchComic(comicId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicDetail));
