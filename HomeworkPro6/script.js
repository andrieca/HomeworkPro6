const form = document.querySelector(".form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");

const products = [];

form.onsubmit = (e) => {
  e.preventDefault();
  products.push({
    title: title.value,
    price: price.value,
  });

  createNode(title.value, price.value);

  title.value = "";
  price.value = "";
};

function createNode(title, price) {
  let div = document.createElement("div");
  div.classList.add("product");

  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

  div.append(titleP, priceP);
  sectionProducts.append(div);
}

function newProducts () {
    sectionProducts.innerHTML = "";
    for (let i = 0; i < products.length;i++){
        createNode(products[i].title, products[i].price);
    }
}

let sumBt = document.querySelector(".sumBt");
sumBt.onclick = ()=> {
  let sum = 0;
  for(let i = 0; i<products.length; i++){
    sum += +products[i].price;
  }
  alert(sum);
}

const password = document.querySelector(".password");
const pass = document.querySelector("#pass");
const pBt = document.querySelector(".pBt");

pBt.onclick =(e) =>{
   e.preventDefault();
   const text = pass.getAttribute("type");
   if(text === "text"){
    pass.setAttribute("type","password")

   }
   else{
    pass.setAttribute("type","text")
   }
}