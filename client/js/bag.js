const baseURL = `http://localhost:4004/api`;

const errCallback = (error) => console.log(error.response.data);
const productsContainer = document.querySelector("#productsContainer");
const footerContainer = document.querySelector(".footerContainer");
const bagCount = document.getElementById("bagCount");
const submitBtn = document.querySelector("#submitInfo");

const getQuote = () => {
  axios
    .get(`${baseURL}/quote`)
    .then(function (response) {
      const quote = response.data;
      createQuoteFooter(quote);
    })
    .catch(errCallback);
};

const createQuoteFooter = (str) => {
  footerContainer.innerHTML += `<p>${str}</p>`;
};

//   function createProductCard(product) {
//     let productCard = document.createElement("div");
//     productCard.classList.add("productCard");

//     productCard.innerHTML = `<img src=${product.image} class="productImage"/>
//       <p class="productName">${product.name}</p>
//       <div class="btns-container">
//           <button onclick="updateProduct(${product.id}, 'minus')">-</button>
//           <button onclick="updateProduct(${product.id}, 'plus')">+</button>
//       </div>
//       <button onclick="deleteProduct(${product.id})">delete</button>
//       `;

//     productsContainer.appendChild(productCard);
//   }
function displayBag(arr) {
  bagCount.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createProductCard(arr[i]);
  }
}
const getBag = () => {
  axios
    .get(`${baseURL}/bag`)
    .then((res) => {
      arr = res.data;
      displayProducts(arr);
    })
    .catch(errCallback);
};

const bagContents = ()=> {
    axios
      .get(`${baseURL}/bag`)
      .then((res) => {
       submitForm(res.data)
      })
    }

////////
const createProductCard = (product) => {
  //   let productCard = document.createElement("div");
  //   productCard.classList.add("column");
  //   //productCard.innerHTML =
  return `
  <div class="column">
      <img src=${product.image} />
      <h2>${product.name}</h2>
      <div class="btns-container">
          <button onclick="deleteProduct(${product.id})">delete</button>
      </div>
      </div>
      `;
};
//  <button type="button" onclick="addToBag(${product})">add to bag</button>
const createRows = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.id = `row${num}`;
      num += 1;
      productsContainer.appendChild(row);
    }
  }
};

const displayProducts = (arr) => {
  createRows(arr);
  let x = 0;
  const rowClass = document.getElementsByClassName("row");

  for (let i = 0; i < rowClass.length; i++) {
    let row = document.querySelector(`#row${i}`);
    for (x; x < arr.length; x++) {
      if (row.childElementCount === 3) {
        break;
      }
      row.innerHTML += createProductCard(arr[x]);
    }
  }
};

const submitForm = (bag) => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  axios
    .post(`${baseURL}/reservation`, {
      userInput: [fname, lname, number, email]
    })
    .then((response) => {
    //let bag = JSON.parse(bag)
    console.log(bag);
    let order = ``;
    for (let i = 0; i < bag.length;i++){
        order += `\n-${bag[i].name}`
    }
      alert(`
      Thank you ${fname} you're on the list!
      Your fitting reservation of: ${order}
      We will contact you at ${number} about times available.`)
    })
    .catch(errCallback);
};
const deleteProduct = ((id) => {
  axios.delete(`${baseURL}/bag/${id}`).then(location.reload()).catch(errCallback);
})
getQuote();
getBag();

//const submitBtn = document.getElementById("submitInfo");
//submitBtn.addEventListener("click", submitForm)