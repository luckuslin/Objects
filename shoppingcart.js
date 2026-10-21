const items = [
  {
    name: "Big Mac",
    cost: 5,
    calories: 580,
    catergory: "Burger",
  },
  {
    name: "Quarter Pounder With Cheese",
    cost: 5,
    calories: 520,
    catergory: "Burger",
  },
  {
    name: "Double Quarter Pounder with Cheese",
    cost: 5.5,
    calories: 740,
    catergory: "Burger",
  },
  {
    name: "McDouble",
    cost: 4.5,
    calories: 390,
    catergory: "Burger",
  },
  {
    name: "CheeseBurger",
    cost: 3,
    calories: 300,
    catergory: "Burger",
  },
  {
    name: "Hamburger",
    cost: 2.5,
    calories: 250,
    catergory: "Burger",
  },
  {
    name: "Filet O Fish",
    cost: 5,
    calories: 380,
    catergory: "Burger",
  },
  {
    name: "McCrispy",
    cost: 4,
    calories: 470,
    catergory: "Chicken",
  },
  {
    name: "McChicken",
    cost: 3,
    calories: 390,
    catergory: "Chicken",
  },
  {
    name: "4 Piece Chicken Nuggets",
    cost: 3,
    calories: 170,
    catergory: "Chicken",
  },
  {
    name: "10 Piece Chicken Nuggets",
    cost: 5,
    calories: 410,
    catergory: "Chicken",
  },
  {
    name: "20 Piece Chicken Nuggets",
    cost: 8,
    calories: 830,
    catergory: "Chicken",
  },
  {
    name: "Small Fries",
    cost: 2.5,
    calories: 230,
    catergory: "Fries",
  },
  {
    name: "Medium Fries",
    cost: 3.5,
    calories: 320,
    catergory: "Fries",
  },
  {
    name: "Large Fries",
    cost: 4.5,
    calories: 480,
    catergory: "Fries",
  },
  {
    name: "Happy Meal",
    cost: 5.5,
    calories: 475,
    catergory: "Happy Meal",
  },
  {
    name: "McFlurry",
    cost: 4,
    calories: 410,
    catergory: "Dessert",
  },
  {
    name: "Vanilla Cone",
    cost: 3,
    calories: 200,
    catergory: "Dessert",
  },
  {
    name: "Cookie",
    cost: 1.5,
    calories: 170,
    catergory: "Dessert",
  },
  {
    name: "Small Soda",
    cost: 2.5,
    calories: 200,
    catergory: "Drinks",
  },
  {
    name: "Medium Soda",
    cost: 3.5,
    calories: 270,
    catergory: "Drinks",
  },
  {
    name: "Large Soda",
    cost: 4.5,
    calories: 380,
    catergory: "Drinks",
  },
  {
    name: "Coffee",
    cost: 3,
    calories: 190,
    catergory: "Drinks",
  },
  {
    name: "Egg McMuffin",
    cost: 3.5,
    calories: 310,
    catergory: "Breakfast",
  },
  {
    name: "Sausage McMuffin",
    cost: 3.5,
    calories: 400,
    catergory: "Breakfast",
  },
  {
    name: "Bacon Egg And Cheese McGriddle",
    cost: 4,
    calories: 430,
    catergory: "Breakfast",
  },
  {
    name: "HashBrowns",
    cost: 1,
    calories: 140,
    catergory: "Breakfast",
  },
  {
    name: "HotCakes",
    cost: 4,
    calories: 580,
    catergory: "Breakfast",
  },
];
function shop() {
  items.forEach((item) => console.log(`${item.name}, ${item.cost}$`));
}

shop();

function addtocart() {
  let cart = [];
  cart.push(items[0].name, items[1].name);
  let price = [];
  price.push(items[0].cost + items[1].cost);
  console.log(cart);
  console.log(price);
  let discount = "DISCOUNT";
  if (discount === "DISCOUNT") {
    console.log(price * 0.7);
  } else if (discount != "DISCOUNT") {
    console.log("Invalid Code");
  }
}
addtocart();
