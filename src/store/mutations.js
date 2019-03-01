const mutations = {
  addDetailData (state, payload) {
    state.detailData = payload;
    // let obj = JSON.stringify(payload);
    // localStorage.detailData = obj;
    console.log(payload);
  }
};

export default mutations;
