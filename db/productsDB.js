 /*jshint esversion: 6*/
module.exports = (function(){

  //stores all of the products
  catalog = [];
  let id = 0;

  function createProduct(body){
    catalog.push({'name': body.name,
                  'price': body.price,
                  'inventory': body.inventory,
                  'id': ++id
                });
    console.log(catalog);
    return catalog;
  }





  return {
    createProduct: createProduct
  };

})();