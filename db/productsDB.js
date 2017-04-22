 /*jshint esversion: 6*/
module.exports = (function(){

  //stores all of the products
  let catalog = [];

  //stores a single product
  let product;

  //sets the id value for each product
  let id = 0;

  //error messages to be served by templates
  function error(keyy){
    let obj = {
      'newProductError': 'Oops, a new product could not be created. Try again',
      'editProductError': 'Oops, that product cannot be edited'
    };
    console.log(obj[keyy]);
    return {error: obj[keyy]};
  }

  //success messages to be served by templates
  function success(){
    return {
      deleteSuccess: 'Great, you deleted an item!'
    };
  }

  function checkID(id){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].id === parseInt(id)){
        return true;
      }
    }
  }

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
  function editProduct(body, id){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].id === parseInt(id)){
        catalog[i].name = body.name;
      }
    }
    console.log(catalog);
    return catalog;
  }

  //deletes a product
  function deleteProduct(id){
    let deleted = catalog.splice(catalog.indexOf(parseInt(id)), 1);
    console.log('deleted', deleted);
    return deleted;
  }


  return {
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    getProducts: getProducts,
    idProduct: idProduct,
    error: error,
    checkID: checkID,
    success: success
  };

})();