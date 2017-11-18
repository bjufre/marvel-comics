import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { ConnectedRouter } from "react-router-redux";

import { getIsFetching } from "../store/reducers";
import Header from "./components/Header";
import Loading from "./components/Loading";

const Core = ({ history, isDetail, isFetching, children }) => (
  <ConnectedRouter history={history}>
    <div className={cn({ "marvel-app": true, detail: isDetail || isFetching })}>
      <Header detail={isDetail} />

      {children}
      <Loading loading={isFetching} />
    </div>
  </ConnectedRouter>
);

const mapStateToProps = (state, ownProps) => {
  const location = state.router.location;

  return {
    isFetching: getIsFetching(state),
    isDetail: location ? location.pathname !== "/" : false
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Core);
