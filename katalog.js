localStorage.setItem("cart", JSON.stringify([]))

let cardsBlock = $(".blocks")

class Base {
    _itemName;
    _price;
    constructor(newName, newPrice) {
        this._itemName = newName;
        this._price = newPrice
    }

    get itemName() {
        return this._itemName
    }

    set login(newName) {
        this._itemName = newName
    }

    get price() {
        return this._price
    }

    set password(newPrice) {
        this._price = newPrice
    }
}

class Item extends Base {
    _description
    constructor(newName, newPrice, newDescription) {
        super(newName, newPrice)
        this._description = newDescription
    }

    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }
}

// let itemsArray = [
//     new Item("Iphone X", 2000, "Mobile phone"),
// ]



function addToCart(name, price, description) {
    // логика добавления item в корзину

    let item = new Item(name, price, description)

    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.push(item)

    localStorage.setItem("cart", JSON.stringify(cart))
}



let items = {
    sport: [
        {
            title: "Скакалка",
            description: "Скакалка для занятий физическими упражнениями",
            price: "2500",
            podCategory: "Environments",
            imageUrl: "img/skakalka2.png"
        },
        {
            title: "Бейсболки",
            description: "Бейсболка надежно защищает от солнца",
            price: "15500",
            podCategory: "Uniforms",
            imageUrl: "img/kepka2.png"
        },
        {
            title: "Штанга",
            description: "Штанга идеально подойдет для упражнений",
            price: "20000",
            podCategory: "Environments",
            imageUrl: "img/shtanga.png"
        },
        {
            title: "Баскетбольный мяч",
            description: "Баскетбольный мяч для игр",
            price: "5500",
            podCategory: "Balls",
            imageUrl: "img/ball.png"
        },

    ],
    wear: [
        {
            title: "Куртка",
            description: "Куртка идеально подойдет для холодной погоды",
            price: "25000",
            podCategory: "Women",
            imageUrl: "img/kurtka.png"
        },
        {
            title: "Штаны",
            description: "Штаны идеально подойдет для прогулки",
            price: "10000",
            podCategory: "Women",
            imageUrl: "img/shtany.png"
        },
        {
            title: "Футболка",
            description: "Футболка идеально подойдет для лета",
            price: "5000",
            podCategory: "Men",
            imageUrl: "img/footbolka.png"
        },
        {
            title: "Кофта",
            description: "Кофта идеально подойдет для холодной погоды",
            price: "2500",
            podCategory: "Children",
            imageUrl: "img/kofta.png"
        },

    ],
    tech: [
        {
            title: "ASUS 231",
            description: "ASUS идеально подойдет для работы",
            price: "250000",
            podCategory: "Laptops",
            imageUrl: "img/asus.png"
        },
        {
            title: "Samsung S20",
            description: "Samsung идеально подойдет для связи",
            price: "100000",
            podCategory: "Phones",
            imageUrl: "img/samsung.png"
        },
        {
            title: "LG телевизор",
            description: "LG телевизор идеально подойдет для дома",
            price: "300000",
            podCategory: "TVs",
            imageUrl: "img/lgtele.png"
        },
        {
            title: "Nikon",
            description: "Nikon идеально подойдет для снятия",
            price: "150000",
            podCategory: "TVs",
            imageUrl: "img/nikon.png"
        },
    ],
    chancellery: [
        {
            title: "Папки",
            description: "Папки идеально подойдет для работы",
            price: "500",
            podCategory: "Office stationery",
            imageUrl: "img/asus.png"
        },
        {
            title: "Циркуль",
            description: "Циркуль идеально подойдет для школьников",
            price: "1000",
            podCategory: "School stationery",
            imageUrl: "img/Samsung.png"
        },
        {
            title: "Альбом для рисования",
            description: "Альбом для рисования идеально подойдет для творчества",
            price: "5000",
            podCategory: "Products for creativity and hobbies",
            imageUrl: "img/LG.png"
        },
        {
            title: "Цветные карандаши",
            description: "Цветные карандаши идеально подойдет для творчества",
            price: "6000",
            podCategory: "Products for creativity and hobbies",
            imageUrl: "img/Nikon.png"
        },
    ],
    cosmetics: [
        {
            title: "BB и СС крема",
            description: "BB и СС крема идеально подойдет для тональной основы",
            price: "10000",
            podCategory: "Skin care",
            imageUrl: "img/asus.png"
        },
        {
            title: "Губная помада",
            description: "Губная помада идеально подойдет для губ",
            price: "5000",
            podCategory: "Makeup",
            imageUrl: "img/Samsung.png"
        },
        {
            title: "Карандаши для губ",
            description: "Карандаши для губ идеально подойдет для контуринга губ",
            price: "4000",
            podCategory: "Makeup",
            imageUrl: "img/LG.png"
        },
        {
            title: "Сухие шампуни",
            description: "Сухие шампуни идеально подойдет для волос",
            price: "8000",
            podCategory: "Hair care",
            imageUrl: "img/Nikon.png"
        },
    ]

}

let categories = [
    {
        name: "Sport",
        value: "sport"
    },
    {
        name: "Tech",
        value: "tech"
    },
    {
        name: "Wear",
        value: "wear"
    },
    {
        name: "Сhancellery",
        value: "chancellery"
    },
    {
        name: "Сosmetics",
        value: "cosmetics"
    },
];

let subCategories = [
    {
        name: "Laptops",
        category: "tech"
    },
    {
        name: "TVs",
        category: "tech"
    },
    {
        name: "Phones",
        category: "tech"
    },
    {
        name: "Uniforms",
        category: "sport"
    },
    {
        name: "Balls",
        category: "sport"
    },
    {
        name: "Environments",
        category: "sport"
    },
    {
        name: "Women",
        category: "wear"
    },
    {
        name: "Men",
        category: "wear"
    },
    {
        name: "Children",
        category: "wear"
    },
    {
        name: "Office stationery",
        category: "chancellery"
    },
    {
        name: "School stationery",
        category: "chancellery"
    },
    {
        name: "Products for creativity and hobbies",
        category: "chancellery"
    },
    {
        name: "Hair care",
        category: "cosmetics"
    },
    {
        name: "Makeup",
        category: "cosmetics"
    },
    {
        name: "Skin care",
        category: "cosmetics"
    },
];

for (let i = 0; i < categories.length; i++) {
    $("#category1").append(`
    < option value = "${categories[i].value}" > ${categories[i].name}</option >
    `);
}

for (let i = 0; i < subCategories.length; i++) {
    $("#category2").append(`
  < option value = "${subCategories[i].category}" > ${subCategories[i].name}</option >
  `);
}


function category1Change() {
    let category = $("#category1").val();
    $("#category2").empty();

    for (let i = 0; i < subCategories.length; i++) {
        if (subCategories[i].category === category) {
            $("#category2").append(`
  < option value = "${subCategories[i].name}" > ${subCategories[i].name}</option >
  `);
        }
    }
}

$("#button").click(function () {
    $("#cards1").empty();
    let category = $("#category1").val();
    let subCategory = $("#category2").val();
    let maxPrice = Number($("#priceAll").val());
    console.log("Choosen category: " + category);
    console.log("Choosen subcategory: " + subCategory);
    for (let c in items) {
        if (c === category) {
            for (let i = 0; i < items[c].length; i++) {
                if (items[c][i]['podCategory'] === subCategory && Number(items[c][i]['price']) < maxPrice) {
                    drawCard(
                        items[c][i]['title'],
                        items[c][i]['description'],
                        items[c][i]['price'],
                        items[c][i]['imageUrl'],
                        items[c][i]['podCategory']
                    );
                }

            }
        }
    }
});


function drawCard(imageUrl, name, price, description, color) {
    cardsBlock.append(`
        <div class="item">
            <img class = 'itemImage' src ="${imageUrl}">
    
            <div class="itemText">
                    <h3 class = 'h3'>${name}</h3>
                    <p><span>Цена: </span>${price}</p>
                    <p><span>Характеристики: </span>${description}</p>
                    <p><span>Цвет: </span>${color}</p>
            </div>
            <button onclick='addToCart("${name}", ${price}, "${description}")'>Add to cart</button>
        </div>
    `)

}

for (let i = 0; i < items.length; i++) {
    drawCard(items.product[i].imageUrl, items.product[i].name, items.product[i].price, items.product[i].description, items.product[i].color)
}
console.log(items.length)