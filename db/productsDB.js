 /*jshint esversion: 6*/
module.exports = (function(){

  //stores all of the products
  let catalog = [];

  //stores a single product
  let product;

  //sets the id value for each product
  let id = 0;

  //gets all of the products
  function getProducts(){
    return catalog;
  }

  //gets a single product by ID
  function idProduct(id){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].id === parseInt(id)){
        product = catalog[i];
      }
    }
    console.log(product);
    return product;
  }

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

  //deletes a product
  function deleteProduct(query){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].id === parseInt(query)){
        catalog = catalog.splice(catalog[i], 1);
      }
    }
    console.log(catalog);
    return catalog;
  }


  return {
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    getProducts: getProducts,
    idProduct: idProduct
  };

})();