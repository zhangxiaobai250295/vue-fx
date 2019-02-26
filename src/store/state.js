// 使用本地存储保存分类页的数据
// let defaultData = [];
// let data = JSON.parse(localStorage.categoryList);
// defaultData = data;
// const state = {
//   categoryList: defaultData
// };
let defaultData = {};
let data = JSON.parse(localStorage.categoryList);
defaultData = data;
const state = {
  categoryList: defaultData
};

export default state;
