const getters = {
  totalGoodsPrice (state) {
    let total = 0;
    state.shopcartData.forEach(item => {
      total += (item.count * item.goodsPrice);
    });
    return total;
  },
  shopcartTotal (state) {
    let total = 0;
    state.shopcartData.forEach(item => {
      total += item.count;
    });
    return total;
  },
  shopGoodsList (state) {
    let arr = [];
    state.shopcartData.forEach(item => {
      let list = item.goodsName + 'x' + item.count;
      arr.push(list);
    });
    // console.log(arr);
    let str = arr.join(',');
    return str;
  }
};

export default getters;
