// create the dom elements across both test and production
document.body.onLoad = addBrand();
document.body.onLoad = addListTitle();
document.body.onload = addApp();

function addBrand() {
 var brand = document.createElement("h1");
 var brandName = document.createTextNode("Notes App");
 brand.appendChild(brandName);
 brand.setAttribute("id", "brand");
 document.body.appendChild(brand);
};

function addListTitle() {
 var title = document.createElement("h2");
 var titleName = document.createTextNode("Notes");
 title.appendChild(titleName);
 title.setAttribute("id", "list-title");
 document.body.appendChild(title);
};

function addApp(){
  var app = document.createElement("div");
  app.setAttribute("id", "app");
  document.body.appendChild(app);
};
