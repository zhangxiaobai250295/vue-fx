import Vue from 'vue';
const mutations = {
  addDetailData (state, payload) {
    state.detailData = payload;
    state.commentsCopy = [].concat(payload.comments);
    // state.detailData.comments = [].concat(payload.comments);
    // let obj = JSON.stringify(payload);
    // localStorage.detailData = obj;
    // console.log(payload);
  },
  filters (state, payload) {
    // console.log(payload);
    // payload.data = [].concat(state.commentsCopy);
    // console.log(payload.data);
    // console.log(payload.change);
    // console.log(payload.info);
    let commentData = [].concat(state.commentsCopy);
    let result = [];

    // console.log(Object.keys(payload.change));
    // Object.keys(payload.change).forEach((key) => {
    //   // console.log(key);
    //   payload.data = payload.data.filter((item) => {
    //     return item.allComment.indexOf(key) >= 0;
    //   });
    // });
    Object.keys(payload.change).forEach((key) => {
      const filtResult = commentData.filter((item) => {
        return item.allComment.indexOf(key) >= 0;
      });
      result = result.concat(filtResult);
    });
    state.detailData.comments = result;
  },
  addShopcart (state, obj) {
    let haveData = false;
    state.shopcartData.forEach(item => {
      if (item.id === obj.data.id) {
        haveData = true;
        item.count += obj.num;
      }
    });
    if (!haveData) {
      Vue.set(obj.data, 'count', obj.num);
      state.shopcartData.push(obj.data);
    }
    console.log(state.shopcartData);
  },
  increaseShopcart (state, id) {
    state.shopcartData.forEach(item => {
      if (item.id === id) {
        item.count++;
      }
    });
  },
  reduceShopcart (state, id) {
    state.shopcartData.forEach(item => {
      if (item.id === id && item.count > 1) {
        item.count--;
      }
    });
    // console.log(111);
  },
  delShopcart (state, id) {
    state.shopcartData.forEach((item, index) => {
      if (item.id === id) {
        state.shopcartData.splice(index, 1);
      }
    });
  }
};

export default mutations;
