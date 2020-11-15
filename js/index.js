// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = Number(product.querySelector('.price span').innerText);
    console.log(price);
    const quantity = product.querySelector('.quantity input').valueAsNumber;
    console.log(quantity);

    const subtotal = price * quantity;
    console.log(subtotal);

    product.querySelector('.subtotal span').innerText = subtotal;

    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const products = document.querySelectorAll('.product');
    // updateSubtotal(products[0]);
    // updateSubtotal(products[1]);
    // end of test

    // ITERATION 2
    //... your code goes here

    // const products = document.querySelectorAll('tr.product');

    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += updateSubtotal(products[i]);
    }
    // ITERATION 3
    //... your code goes here

    document.getElementById('total-value').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    const table = target.parentNode.parentNode.parentNode;

    const elementToRemove = target.parentNode.parentNode;

    table.removeChild(elementToRemove);
}

// ITERATION 5

function createProduct() {
    const prodName = document.getElementById('newProd').value;
    const price = document.getElementById('newProdPrice').value;

    console.log(prodName, price);

    let newProduct = document.createElement('tr');
    newProduct.setAttribute('class', 'product');
    newProduct.innerHTML = `<td class="name">
        <span>${prodName}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>`;

    let remvBtnContainer = document.createElement('td');
    remvBtnContainer.setAttribute('class', 'action');
    let remvBtn = document.createElement('button');
    remvBtn.setAttribute('class', 'btn btn-remove');
    remvBtn.innerText = 'Remove';
    remvBtn.addEventListener('click', removeProduct);
    remvBtnContainer.appendChild(remvBtn);

    newProduct.appendChild(remvBtnContainer);

    const tableBody = document.querySelector('tbody');
    console.log(tableBody, newProduct);

    tableBody.appendChild(newProduct);

    document.getElementById('newProd').value = '';
    document.getElementById('newProdPrice').value = '';
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeButtons = document.getElementsByClassName('btn-remove');

    //console.log(removeButtons);
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = removeProduct;
    }

    const createBtn = document.getElementById('create');
    createBtn.addEventListener('click', createProduct);
});