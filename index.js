// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
    {
      id: 1,
      title: "Vanilla cake",
      category: "Anniversary",
      price: 299,
      img: "./images/item-1.jpeg",
      desc: `This Eggless vanilla cake . It’s delicious to enjoy. Here you’ll find my vanilla cake for your next celebration. `,
    },
    {
      id: 2,
      title: "Black Forest Cake",
      category: "Anniversary",
      price: 295,
      img: "./images/item-2.jpeg",
      desc: `Beautiful Black Forest Cake covered in whipped cream and chocolate. This two layer chocolate cake is coated in a sweet cherry syrup, whipped cream`,
    },
    {
      id: 3,
      title: "Red Velvet Cake",
      category: "Anniversary",
      price: 249,
      img: "./images/item-3.jpeg",
      desc: `Three moist layers of stunning Red Velvet filled and topped silky cream cheese icing and finished with melt-in-your-mouth white and dark chocolate shavings and white chocolate drizzle; this cake is sure to be your new favourite..`,
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "birthday",
      price: 195,
      img: "./images/item-4.jpeg",
      desc: `The perfect Chocolate Fudge Cake covered in a creamy real chocolate buttercream. Two layers of buttery chocolate cake that sticks to your fork, paired with the ultimate chocolate frosting – heaven!  `,
    },
    {
      id: 5,
      title: "Pineapple Cake",
      category: "birthday",
      price: 295,
      img: "./images/item-5.jpeg",
      desc: `This Pineapple Cake is the BEST! Moist homemade yellow cake layers with a flavorful pineapple and cream filling and cream cheese`,
    },
    {
      id: 6,
      title: "Chocolate Truffle Cake",
      category: "birthday",
      price: 200,
      img: "./images/item-6.jpeg",
      desc: `Chocolate Truffle Cake is a thick, moist chocolate layer cake. The frosting is made of silky chocolate and has a garnish of chocolate flakes. Glossy and dark`,
    },
    {
      id: 7,
      title: "Colour Splash Cake",
      category: "Party",
      price: 250,
      img: "./images/item-7.jpeg",
      desc: `Our special colour splash cake contains all the pretty colours of the rainbow. Made with freshly baked sponge layers and decorated with edible coloured`,
    },
    {
      id: 8,
      title: "Orange Cake",
      category: "Party",
      price: 260,
      img: "./images/item-8.jpeg",
      desc: `Sweet, soft, moist, and tasty Orange Cake made with fresh orange juice. This cake is healthy and includes whole wheat flour. A lovely eggless orange cake that is suitable for both vegetarians and vegans alike! `,
    },
    {
      id: 9,
      title: "Straberry Cake",
      category: "Party",
      price: 300,
      img: "./images/item-9.jpeg",
      desc: `This strawberry cake recipe is layer after delicious layer of fresh strawberries, a lightly sweet cream cheese frosting, and moisture.`,
    },
    {
      id: 10,
      title: "Fruit Cake",
      category: "Wedding",
      price: 399,
      img: "./images/item-10.jpeg",
      desc: `Fruit cake is a rich dense cake packed with dry fruits and nuts flavoured with spices.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
      })
      .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  