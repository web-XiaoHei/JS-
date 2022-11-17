let skus = [
    {
        "id": 1,
        "salePrice": "221.52",
        "spaceJson": { '甜度': '无糖', "杯型": "超大杯" }
    },
    {
        "id": 2,
        "salePrice": "109.20",
        "spaceJson": { '甜度': '七分糖', "杯型": "超大杯" }
    },
    {
        "id": 3,
        "salePrice": "224.32",
        "spaceJson": { '甜度': '全糖', "杯型": "中杯" }
    },
]
// 1.组合成商品详情中常见的选择规格形式，形如
/*
    let specs = [
        {name:'甜度'，options:['无糖','七分糖','全糖']},
        {name:'杯型'，options:['超大杯','中杯']},
    ]
*/
let specs = skus.map(r => r.spaceJson)
console.log(Object.keys(specs[0]).map(name => {
    return {
        name,
        options: []
    }
}));

// 2.当选择甜度和杯型的组合时，获取当前sku的价格，形如
// getSku({ '甜度': '全糖', "杯型": "中杯" })  =>244.32