const shopList = [
  {
    img: 'hanbao.png',
    title: '汉堡大大',
    subTitle: '叫我汉堡大大，还你多彩口味',
    price: '28',
    oldPrice: '39',
    distance: '120m',
    number: '389',
    id: Math.random().toString().slice(2),
  },
  {
    img: 'kaiyuan.png',
    title: '北京开源饭店',
    subTitle: '[望京]自助晚餐',
    price: '98',
    distance: '140m',
    number: '689',
    id: Math.random().toString().slice(2),
  },
  {
    img: 'fuzhuang.png',
    title: '服装定制',
    subTitle: '原价xx元，现价xx元，可修改一次,原价xx元，现价xx元，可修改一次',
    price: '1980',
    oldPrice: '2088',
    distance: '160',
    number: '106',
    id: Math.random().toString().slice(2),
  },
  {
    img: 'hunsha.png',
    title: '婚纱摄影',
    subTitle: '免费试穿，拍照留念',
    price: '2899',
    oldPrice: '3099',
    distance: '1.6km',
    number: '58',
    id: Math.random().toString().slice(2),
  },
  {
    img: 'chuanchuan.png',
    title: '麻辣串串烧',
    subTitle: '双人免费套餐等你抢购',
    price: '0',
    distance: '160',
    number: '1426',
    id: Math.random().toString().slice(2),
  },
]

module.exports = {
  shopList,
}
