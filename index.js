// create the dom elements across both test and production
document.body.onLoad = addBrand();
document.body.onLoad = addListTitle();
document.body.onload = addApp();
document.body.onload = addForm();

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

function addForm(){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "#note/new");
  form.setAttribute("id", "text-form");
  var textarea = document.createElement("textarea");
  textarea.setAttribute("rows", "4");
  textarea.setAttribute("cols", "50");
  textarea.setAttribute("id", "textarea");
  form.appendChild(textarea);
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  submit.setAttribute("id", "submit");
  form.appendChild(submit);
  document.body.appendChild(form);
};
