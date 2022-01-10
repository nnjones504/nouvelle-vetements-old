const baseURL = `http://localhost:4004/api`;

const errCallback = (error) => console.log(error.response.data);
const productsContainer = document.querySelector("#productsContainer");
const footerContainer = document.querySelector(".footerContainer");
const bagCount = document.getElementById("bagCount");

const getQuote = () => {
  axios
    .get(`${baseURL}/quote`)
    .then(function (response) {
      const quote = response.data;
      createQuoteFooter(quote);
    })
    .catch(errCallback);
};
const getAllProducts = () => {
  axios
    .get(baseURL)
    .then((res) => {
      arr = res.data;
      displayProducts(arr)
    })
    .catch(errCallback);
};

const getBag = () => {
  axios
    .get(`${baseURL}/bag`)
    .then((res) => {
      arr = res.data;
      displayProducts(arr)
    })
    .catch(errCallback);
};

const addToBag = (productId) => {
  let id = { id: productId };
  axios
    .post(`${baseURL}/bag`, id)
    .then((res) => {
      console.log(JSON.stringify(res.data));
    })
    .catch(errCallback);
  
};

const createQuoteFooter = (str) => {
  footerContainer.innerHTML += `<p>${str}</p>`;
};

// const getBag = () => {
//   axios
//     .get(`${baseURL}/bag`)
//     .then((res) => {
//       //console.log(`BAG(${res.data})`)
//     })
//     .catch(errCallback);
// };

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("productCard");

  productCard.innerHTML = `<img src=${product.image} class="productImage"/>
    <p class="productName">${product.name}</p>
    <div class="btns-container">
        <button onclick="updateProduct(${product.id}, 'minus')">-</button>
        <button onclick="updateProduct(${product.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteProduct(${product.id})">delete</button>
    `;

  productsContainer.appendChild(productCard);
}

function displayBag(arr) {
  bagCount.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createProductCard(arr[i]);
  }
}

//getAllProducts();
getQuote();
///getBag();

//init buttons
let addToBag1 = document.querySelector("#addToBag1");
let addToBag2 = document.querySelector("#addToBag2");
let addToBag3 = document.querySelector("#addToBag3");
let addToBag4 = document.querySelector("#addToBag4");
let addToBag5 = document.querySelector("#addToBag5");
let addToBag6 = document.querySelector("#addToBag6");
let addToBag7 = document.querySelector("#addToBag7");
let addToBag8 = document.querySelector("#addToBag8");
let addToBag9 = document.querySelector("#addToBag9");

//button functionality
addToBag1.addEventListener("click", () => {
  addToBag(1);
});
addToBag2.addEventListener("click", () => {
  addToBag(2);
});
addToBag3.addEventListener("click", () => {
  addToBag(3);
});
addToBag4.addEventListener("click", () => {
  addToBag(4);
});
addToBag5.addEventListener("click", () => {
  addToBag(5);
});
addToBag6.addEventListener("click", () => {
  addToBag(6);
});
addToBag7.addEventListener("click", () => {
  addToBag(7);
});
addToBag8.addEventListener("click", () => {
  addToBag(8);
});
addToBag9.addEventListener("click", () => {
  addToBag(9);
});
