
const arr = [ 
   {id: 7,
    title: "Ergonomic Wooden Tuna", 
   price: "$743",
   description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
   image_url: "https://i.imgur.com/mp3rUty.jpeg",
   product_order: "Buy Now",
 },
   {
     id: 9,
     title: "Electronic Bronze Chips",
     price: "$808",
     description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
     image_url: "https://i.imgur.com/R3iobJA.jpeg",
     product_order: "Buy Now",
 
 },
 {
   id: 11,
   title: "Awesome Bronze Car",
   price: "$382",
   description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
   image_url: "https://i.imgur.com/cBuLvBi.jpeg",
   product_order: "Buy Now"
   },
 
   {
     id: 12,
     title: "Recycled Rubber Cheese",
     price: "$30",
     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
     image_url: "https://i.imgur.com/KeqG6r4.jpeg", 
     product_order: "Buy Now",
     }
 
 
 ];
 
   const cardsContainer = document.getElementById("cards-container");
   for (let i = 0; i < arr.length; i++) {
     cardsContainer.innerHTML += `
       <div class="card" style="width: 18rem">
         <img src="${arr[i].image_url}" class="card-img-top" alt="...">
         ${arr[i].id}
         <div class="card-body">
           <h5 class="card-title">${arr[i].title}</h5>
           <p class="card-text">${arr[i].description}</p>
           ${arr[i].price}
          <a href="#" class="btn btn-primary">${arr[i].product_order}</a>
         </div>
       </div>`;
 }
 