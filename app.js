



const arry4 = [  
{  "id": 4,
"title": "newTitle",
"price": 205,
"description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
"image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
}]

const hello4 = document.getElementById("cards-container");

arry4.forEach((product,index) => {
 
  const {id,title,price,description,image_url,product_order } = product;
     
//    console.log(students,index);
  
 hello4.innerHTML +=  `
<div class="card" style="width: 18rem">
<img src="${image_url}" class="card-img-top" alt="...">
${id}
<div class="card-body">
<h5 class="card-title">${title}</h5>
<p class="card-text">${description}</p>
${price}
<a href="#" class="btn btn-primary">${product_order}</a>
</div>
</div>`
})





const arry3 = [  
  {"id": 7,
  "title": "Ergonomic Wooden Tuna",
  "price": 743,
  "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  "image_url": "https://i.imgur.com/mp3rUty.jpeg"
  }]


const hello3 = document.getElementById("cards-container");

arry3.forEach((product,index) => {
 
  const {id,title,price,description,image_url,product_order } = product;
     
//    console.log(students,index);
  
 hello3.innerHTML +=  `
<div class="card" style="width: 18rem">
<img src="${image_url}" class="card-img-top" alt="...">
${id}
<div class="card-body">
<h5 class="card-title">${title}</h5>
<p class="card-text">${description}</p>
${price}
<a href="#" class="btn btn-primary">${product_order}</a>
</div>
</div>`
})






const arry2 = [  
  {
  "id": 9,
"title": "Electronic Bronze Chips",
"price": 808,
"description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
"image_url": "https://i.imgur.com/R3iobJA.jpeg"
}]


const hello2 = document.getElementById("cards-container");

arry2.forEach((product,index) => {
 
  const {id,title,price,description,image_url,product_order } = product;
     
//    console.log(students,index);
  
 hello2.innerHTML +=  `
<div class="card" style="width: 18rem">
<img src="${image_url}" class="card-img-top" alt="...">
${id}
<div class="card-body">
<h5 class="card-title">${title}</h5>
<p class="card-text">${description}</p>
${price}
<a href="#" class="btn btn-primary">${product_order}</a>
</div>
</div>`
})


const arry1 = [  
  {
    "id": 11,
"title": "Awesome Bronze Car",
"price": 382,
"description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
"image_url": "https://i.imgur.com/cBuLvBi.jpeg"
}];

const hello1 = document.getElementById("cards-container");

arry1.forEach((product,index) => {
 
  const {id,title,price,description,image_url,product_order } = product;
     
//    console.log(students,index);
  
 hello1.innerHTML +=  `
<div class="card" style="width: 18rem">
<img src="${image_url}" class="card-img-top" alt="...">
${id}
<div class="card-body">
<h5 class="card-title">${title}</h5>
<p class="card-text">${description}</p>
${price}
<a href="#" class="btn btn-primary">${product_order}</a>
</div>
</div>`
})

 const arry = [  
    {
      id: 12,
      title: "Recycled Rubber Cheese",
      price: "$30",
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      image_url: "https://i.imgur.com/KeqG6r4.jpeg", 
      product_order: "Buy Now",
    }];

    
const hello = document.getElementById("cards-container");

arry.forEach((product,index) => {
   
    const {id,title,price,description,image_url,product_order } = product;
       
//    console.log(students,index);
    
   hello.innerHTML +=  `
<div class="card" style="width: 18rem">
<img src="${image_url}" class="card-img-top" alt="...">
${id}
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  ${price}
 <a href="#" class="btn btn-primary">${product_order}</a>
</div>
</div>`
})










// --------------------------------------------------MAP METHOD --------------------------------------------------------------------------------------------------




























const arr1 = [
  {
    "id": 4,
"title": "newTitle",
"price": 205,
"description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
"image_url": "https://i.imgur.com/R2PN9Wq.jpeg",
product_order: "Buy Now",
}];

const cardsContainer1 = document.getElementById("cards-container");

const cardElements1 = arr1.map((student, index) => {
  const { id, price, product_order, description, title, image_url } = student;

  hello.innerHTML +=    `
    <div class="card" style="width: 18rem">
      <img src="${image_url}" class="card-img-top" alt="...">
      ${id}
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        ${price}
        <a href="#" class="btn btn-primary">${product_order}</a>
      </div>
    </div>
  `;
})

  const arr = [
    {
      id: 7,
      title: "Recycled Rubber Cheese",
      price: "$484",
      image_url: "https://i.imgur.com/mp3rUty.jpeg",
      description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      product_order: "Buy Now",
    }
  ];

  const cardsContainer = document.getElementById("cards-container");

  const cardElements = arr.map((student, index) => {
    const { id, price, product_order, description, title, image_url } = student;

    hello.innerHTML +=    `
      <div class="card" style="width: 18rem">
        <img src="${image_url}" class="card-img-top" alt="...">
        ${id}
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          ${price}
          <a href="#" class="btn btn-primary">${product_order}</a>
        </div>
      </div>
    `;
  });


  const arr2 = [
    {
      "id": 9,
      "title": "Electronic Bronze Chips",
      "price": 808,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four  wheel drive",
      "image_url": "https://i.imgur.com/R3iobJA.jpeg",
      "product_order" : "Buy Now",
  }];
  
  const cardsContainer2 = document.getElementById("cards-container");
  
  const cardElements2 = arr2.map((student, index) => {
    const { id, price, product_order, description, title, image_url } = student;
  
    hello.innerHTML +=    `
      <div class="card" style="width: 18rem">
        <img src="${image_url}" class="card-img-top" alt="...">
        ${id}
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          ${price}
          <a href="#" class="btn btn-primary">${product_order}</a>
        </div>
      </div>
    `;
  })









  const arr3 = [
    {
      "id": 11,
      "title": "Awesome Bronze Car",
      "price": 382,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "image_url": "https://i.imgur.com/cBuLvBi.jpeg",
      "product_order" : "Buy Now",
  }];
  
  const cardsContainer3 = document.getElementById("cards-container");
  
  const cardElements3 = arr3.map((student, index) => {
    const { id, price, product_order, description, title, image_url } = student;
  
    hello.innerHTML +=    `
      <div class="card" style="width: 18rem">
        <img src="${image_url}" class="card-img-top" alt="...">
        ${id}
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          ${price}
          <a href="#" class="btn btn-primary">${product_order}</a>
        </div>
      </div>
    `;
  })




  const arr4 = [
    {
      "id": 12,
      "title": "Recycled Rubber Cheese",
      "price": 30,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image_url": "https://i.imgur.com/KeqG6r4.jpeg",
      "product_order" : "Buy Now",
  }];
  
  const cardsContainer4 = document.getElementById("cards-container");
  
  const cardElements4 = arr4.map((student, index) => {
    const { id, price, product_order, description, title, image_url } = student;
  
    hello.innerHTML +=    `
      <div class="card" style="width: 18rem">
        <img src="${image_url}" class="card-img-top" alt="...">
        ${id}
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          ${price}
          <a href="#" class="btn btn-primary">${product_order}</a>
        </div>
      </div>
    `;
  })

