const bigCategoriesLi = document.querySelectorAll('#categories .item');

bigCategoriesLi.forEach(element => {
    console.log(`Number of categories: ${bigCategoriesLi.length}`);
    
});

bigCategoriesLi.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
