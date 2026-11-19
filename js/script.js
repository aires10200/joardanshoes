
const products = [
  {
    name: "Air Jordan 1 Mid Dutch Green",
    category: "Tênis Air Jordan",
    price: 1199.99,
    image: "img/tenis-1.png",
  },
  {
    name: "Air Jordan 1 High Zoom CMFT Tropical Twist",
    category: "Tênis Air Jordan",
    price: 1049.0,
    image: "img/tenis-2.png",
  },
  {
    name: "Air Jordan 1 Mid Dutch Green",
    category: "Tênis Air Jordan",
    price: 1350.0,
    image: "img/tenis-3.png",
  },
  {
    name: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
    category: "Tênis Air Jordan",
    price: 1585.0,
    image: "img/tenis-4.png",
  },
  {
    name: "Air Jordan 1 Mid SE Bright Citrus",
    category: "Tênis Air Jordan",
    price: 949.99,
    image: "img/tenis-5.png",
  },
  {
    name: "Air Jordan 1 Mid Grey Camo",
    category: "Tênis Air Jordan",
    price: 999.99,
    image: "img/tenis-6.png",
  },
];

const formatPrice = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function createCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name.replace(/"/g, "&quot;")}" loading="lazy">
    </div>
    <h3 class="product-name"></h3>
    <span class="product-category"></span>
    <strong class="product-price"></strong>
  `;

  // textContent evita problemas com aspas e caracteres especiais nos nomes
  card.querySelector(".product-name").textContent = product.name;
  card.querySelector(".product-category").textContent = product.category;
  card.querySelector(".product-price").textContent = formatPrice(product.price);

  // Se a imagem não existir ainda, esconde o ícone de imagem quebrada
  card.querySelector("img").addEventListener("error", (e) => {
    e.target.style.visibility = "hidden";
  });

  return card;
}

const container = document.getElementById("products");
products.forEach((product) => container.appendChild(createCard(product)));
