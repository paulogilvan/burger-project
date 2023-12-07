const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFiltering = document.querySelector('.filtering-all')

function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  return newValue
}

function showAll(productsArray) {
  let myLi = ''

  productsArray.forEach((product) => {
    myLi += `
      <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">${formatCurrency(product.price)}</p>
      </li>
     `  
  })

  list.innerHTML = myLi
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, // dar 10% desconto
  }))

  showAll(newPrices)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
    <li>
      <p>O Valor Total do Itens é: ${formatCurrency(totalValue)}</p>
    </li>
    `
  }

  function filteringItems() {
    const filteredProducts = menuOptions.filter((product) => product.vegan === true)

    showAll(filteredProducts)
  }

buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonMapAll.addEventListener('click', mapAllItems)

buttonSumAll.addEventListener('click', sumAllItems)
buttonFiltering.addEventListener('click', () => filteringItems(menuOptions))