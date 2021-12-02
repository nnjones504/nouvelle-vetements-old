const baseURL = `http://localhost:4004/api`;

const errCallback = (error) => console.log(error.response.data);
const productsContainer = document.querySelector("#productsContainer");

const getQuote = () => {
  axios
    .get(`${baseURL}/quote`)
    .then(function (response) {
      const quote = response.data;
      console.log(quote);
    })
    .catch(errCallback);
};
const getAllProducts = () => {
  axios
    .get(baseURL)
    .then((res) => {
      const arr = res.data;
      displayProducts(arr);
    })
    .catch(errCallback);
};

const createProductCard = (product) => {
  return `<div class="column">
    <img src=${product.image} />
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    </div>`;
};

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
    let row = document.getElementById(`row${i}`);
    for (x; x < arr.length; x++) {
      if (row.childElementCount === 3) {
        break;
      }
      row.innerHTML += createProductCard(arr[x]);
    }
  }
};

getAllProducts();
