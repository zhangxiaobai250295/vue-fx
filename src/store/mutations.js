const mutations = {
  addData (state, payload) {
    state.categoryList = payload;
    let obj = JSON.stringify(payload);
    localStorage.categoryList = obj;
  }
};

export default mutations;
