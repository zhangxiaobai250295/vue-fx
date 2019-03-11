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
  }
};

export default getters;
