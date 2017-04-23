 /*jshint esversion: 6*/
module.exports = (function(){

  //stores all of the articles
  let catalog = [];

  //stores a single article
  let article;

  //error messages to be served by templates
  function error(key){
    let obj = {
      'newArticleError': 'Oops, a new article could not be created. Try again',
      'editArticleError': 'Oops, that article cannot be edited'
    };
    return {error: obj[key]};
  }

  //success messages to be served by templates
  function success(){
    return {
      deleteSuccess: 'Great, you deleted an item!'
    };
  }

  function checkTitle(title){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].title === title){
        return true;
      }
    }
  }

  //gets all of the articles
  function getArticles(){
    return catalog;
  }

  //gets a single product by title
  function titleArticle(title){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].title === title){
        article = catalog[i];
      }
    }
    console.log(article);
    return article;
  }

  //creates an article
  function createArticle(body){
    catalog.push({'title': body.title,
                  'body': body.body,
                  'author': body.author,
                  'urlTitle': encodeURI(body.title)
                });
    console.log(catalog);
    return catalog;
  }

  //edits a product
  function editArticle(body, title){
    for(let i = 0; i < catalog.length; i++){
      if(catalog[i].title === title){
        catalog[i].title = body.title;
      }
    }
    console.log(catalog);
    return catalog;
  }

  //deletes a product
  function deleteArticle(title){
    let deleted = catalog.splice(catalog.indexOf(title, 1));
    console.log('deleted', deleted);
    return deleted;
  }


  return {
    getArticles: getArticles,
    createArticle: createArticle,
    error: error,
    success: success,
    checkTitle: checkTitle,
    titleArticle: titleArticle,
    editArticle: editArticle,
    deleteArticle: deleteArticle

  };

})();