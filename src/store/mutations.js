const mutations = {
  addDetailData (state, payload) {
    state.detailData = payload;
    // state.detailData.comments = [].concat(payload.comments);
    // let obj = JSON.stringify(payload);
    // localStorage.detailData = obj;
    // console.log(payload);
  },
  filters (state, payload) {
    // console.log(payload);
    payload.data = [].concat(state.commentsCopy);
    // console.log(payload.data);
    console.log(payload.change);
    // console.log(payload.info);

    console.log(Object.keys(payload.change));
    Object.keys(payload.change).forEach((key) => {
      // console.log(key);
      payload.data = payload.data.filter((item) => {
        return item.allComment.indexOf(key) >= 0;
      });
    });
  }
};

export default mutations;
