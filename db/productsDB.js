 /*jshint esversion: 6*/
module.exports = (function(){

  //stores all of the products
  catalog = [];

  //sets the id value of each product
  let id = 0;

  //creates a product
  function createProduct(body){
    catalog.push({'name': body.name,
                  'price': body.price,
                  'inventory': body.inventory,
                  'id': ++id
                });
    console.log(catalog);
    return catalog;
  }

  //edits a product
  function editProduct(body){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].id === parseInt(body.id)){
        catalog[i].name = body.name;
      }
    }
    console.log(catalog);
    return catalog;
  }



  return {
    createProduct: createProduct,
    editProduct: editProduct
  };

})();