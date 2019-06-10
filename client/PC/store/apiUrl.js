const host = `http://127.0.0.1:8083`

const apiUrl = {
    
    login:`${host}/PC/login`,
    revg:`${host}/PC/revg`,
    addProduct:`${host}/PC/addProduct`,
    removeProduct:`${host}/PC/addProduct`,
    updateProduct:`${host}/PC/updateProduct`,
    getProducts:`${host}/PC/getProducts`,

    /** 订单 */
    getOrders:`${host}/Order/getOrders`,
    fahuoOrder:`${host}/Order/fahuoOrder`,
    removeOrder:`${host}/Order/removeOrder`,
    addOrder:`${host}/Order/addOrder`,
    updateOrder:`${host}/Order/updateOrder`,

    /** 商品管理 */
    getSellProducts:`${host}/PC/SellProduct/getProducts`,
    removeSellProduct:`${host}/PC/SellProduct/removeProduct`,
    updateSellProduct:`${host}/PC/SellProduct/updateProduct`,

    /** 库存管理 */
    addStorgaeProduct:`${host}/PC/StorageProduct/addProduct`,
    removeStorgaeProduct:`${host}/PC/StorageProduct/removeProduct`,
    updateStorgaeProduct:`${host}/PC/StorageProduct/updateProduct`,
    getStorgaeProducts:`${host}/PC/StorageProduct/getProducts`,
}
export default apiUrl