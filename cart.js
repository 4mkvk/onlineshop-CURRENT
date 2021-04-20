let cart = JSON.parse(localStorage.getItem("cart"))

let cartBlock = $("#cart")
let overall = document.getElementById("overall")
let count = 0

for (let i = 0; i < cart.length; i++) {
    cartBlock.append(`
    
        <div class="cart_items">
            <img src="${cart[i]['_imageUrl']}" alt="">
            <div class="text-items">
                <p><span class="title-items">Название:</span>${cart[i]['_itemName']}</p>
                <p><span class="title-items">Цена:</span>${cart[i]['_price']}</p>
                <p><span class="title-items">Описание:</span>${cart[i]['_description']}</p>
                <button class="submit_zakaz" onclick = "zakaz()" >Подтвердите покупку</button>
            </div>
        </div>
    `)
    count += cart[i]['_price']
}
overall.innerText = count

let zakaz = () => {
    alert('Поздравляю! Вы оформили заказ на сумму ' + count + ' тэнгэ')
}