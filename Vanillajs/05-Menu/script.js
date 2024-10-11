const menu = [
    {
        "id": 1,
        "name": "Classic Pancakes",
        "image": "https://bing.com/th?id=OSK.dd4aa6431b95df89261a9298b86371f0",
        "price": 7.99,
        "type": "breakfast",
        "description": "Fluffy pancakes served with butter and maple syrup."
    },
    {
        "id": 2,
        "name": "Cheese Omelette",
        "image": "https://bing.com/th?id=OSK.02b4faeca1fa5f00f7cedf8c8d0b83d4",
        "price": 6.49,
        "type": "breakfast",
        "description": "A three-egg omelette with melted cheddar cheese, served with toast."
    },
    {
        "id": 3,
        "name": "Avocado Toast",
        "image": "https://bing.com/th?id=OSK.b6ef3beee8e6d3fd6be902a6cab4b3eb",
        "price": 5.99,
        "type": "breakfast",
        "description": "Toasted sourdough bread topped with mashed avocado, cherry tomatoes, and a sprinkle of chili flakes."
    },
    {
        "id": 4,
        "name": "French Toast",
        "image": "https://bing.com/th?id=OSK.ba50ccad21007e164845f55b9a227902",
        "price": 8.49,
        "type": "breakfast",
        "description": "Golden-brown French toast served with fresh berries and a dusting of powdered sugar."
    },
    {
        "id": 5,
        "name": "Breakfast Burrito",
        "image": "https://bing.com/th?id=OSK.ba50ccad21007e164845f55b9a227902",
        "price": 9.49,
        "type": "breakfast",
        "description": "Scrambled eggs, cheese, and sausage wrapped in a warm flour tortilla."
    },
    {
        "id": 6,
        "name": "Granola Parfait",
        "image": "https://bing.com/th?id=OSK.aac275b9e536ddd1bfc35e4cad97a64e",
        "price": 4.99,
        "type": "breakfast",
        "description": "Greek yogurt layered with granola, honey, and fresh berries."
    },
    {
        "id": 7,
        "name": "Eggs Benedict",
        "image": "https://bing.com/th?id=OSK.02b4faeca1fa5f00f7cedf8c8d0b83d4",
        "price": 10.49,
        "type": "breakfast",
        "description": "Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce."
    },
    {
        "id": 8,
        "name": "Smoked Salmon Bagel",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 8.99,
        "type": "breakfast",
        "description": "A toasted bagel topped with cream cheese, smoked salmon, and capers."
    },
    {
        "id": 9,
        "name": "Blueberry Muffin",
        "image": "https://bing.com/th?id=OSK.aac275b9e536ddd1bfc35e4cad97a64e",
        "price": 3.49,
        "type": "breakfast",
        "description": "Freshly baked blueberry muffin with a soft, fluffy center and golden top."
    },
    {
        "id": 10,
        "name": "Chicken Caesar Salad",
        "image": "https://bing.com/th?id=OSK.f8932ddd8db8be1a3715e9c46d5e48dc",
        "price": 10.99,
        "type": "lunch",
        "description": "Crisp romaine lettuce, grilled chicken, croutons, parmesan cheese, and Caesar dressing."
    },
    {
        "id": 11,
        "name": "BBQ Burger",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 12.99,
        "type": "lunch",
        "description": "Juicy beef patty topped with BBQ sauce, cheddar cheese, and onion rings, served with fries."
    },
    {
        "id": 12,
        "name": "Margherita Pizza",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 11.99,
        "type": "lunch",
        "description": "Classic pizza with fresh mozzarella, basil, and a rich tomato sauce."
    },
    {
        "id": 13,
        "name": "Spaghetti Carbonara",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 13.49,
        "type": "lunch",
        "description": "Spaghetti pasta tossed with creamy egg sauce, pancetta, and parmesan."
    },
    {
        "id": 14,
        "name": "Grilled Chicken Sandwich",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 9.99,
        "type": "lunch",
        "description": "Grilled chicken breast with lettuce, tomato, and mayo, served on a toasted bun."
    },
    {
        "id": 15,
        "name": "Tuna Salad Wrap",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 8.99,
        "type": "lunch",
        "description": "Tuna salad wrapped in a flour tortilla with fresh lettuce and tomatoes."
    },
    {
        "id": 16,
        "name": "Vegetable Stir-Fry",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 9.49,
        "type": "lunch",
        "description": "Mixed vegetables stir-fried in a savory sauce, served over rice."
    },
    {
        "id": 17,
        "name": "Fish Tacos",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 11.99,
        "type": "lunch",
        "description": "Grilled fish served in soft tortillas with cabbage slaw and chipotle sauce."
    },
    {
        "id": 18,
        "name": "Steak Fajitas",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 14.99,
        "type": "lunch",
        "description": "Sizzling steak fajitas served with peppers, onions, and tortillas."
    },
    {
        "id": 19,
        "name": "Turkey Club Sandwich",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 10.49,
        "type": "lunch",
        "description": "Triple-decker sandwich with turkey, bacon, lettuce, and tomato."
    },
    {
        "id": 20,
        "name": "Beef Tacos",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 9.99,
        "type": "lunch",
        "description": "Soft tacos filled with seasoned beef, lettuce, cheese, and salsa."
    },
    {
        "id": 21,
        "name": "Greek Salad",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 8.99,
        "type": "lunch",
        "description": "A mix of cucumbers, tomatoes, olives, and feta cheese, tossed in a lemon-oregano dressing."
    },
    {
        "id": 22,
        "name": "Quinoa Bowl",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 12.49,
        "type": "lunch",
        "description": "A nutritious bowl of quinoa, roasted vegetables, and a tahini dressing."
    },
    {
        "id": 23,
        "name": "Shrimp Scampi",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 15.49,
        "type": "lunch",
        "description": "Succulent shrimp sautéed in garlic butter, served over linguine."
    },
    {
        "id": 24,
        "name": "Mango Smoothie",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 4.99,
        "type": "shakes",
        "description": "A refreshing blend of ripe mango, yogurt, and a touch of honey."
    },
    {
        "id": 25,
        "name": "Strawberry Milkshake",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.49,
        "type": "shakes",
        "description": "A thick and creamy shake made with fresh strawberries and vanilla ice cream."
    },
    {
        "id": 26,
        "name": "Chocolate Frappe",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.99,
        "type": "shakes",
        "description": "Iced coffee blended with chocolate syrup, milk, and topped with whipped cream."
    },
    {
        "id": 27,
        "name": "Vanilla Milkshake",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 4.99,
        "type": "shakes",
        "description": "A smooth vanilla milkshake made with real vanilla ice cream and topped with whipped cream."
    },
    {
        "id": 28,
        "name": "Banana Smoothie",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 4.49,
        "type": "shakes",
        "description": "A creamy smoothie made with fresh bananas and a hint of honey."
    },
    {
        "id": 29,
        "name": "Mocha Frappe",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.99,
        "type": "shakes",
        "description": "Blended iced coffee with rich chocolate and whipped cream."
    },
    {
        "id": 30,
        "name": "Peach Smoothie",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.49,
        "type": "shakes",
        "description": "A refreshing smoothie made with ripe peaches and yogurt."
    },
    {
        "id": 31,
        "name": "Oreo Milkshake",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.49,
        "type": "shakes",
        "description": "A rich milkshake made with crushed Oreo cookies and vanilla ice cream."
    },
    {
        "id": 32,
        "name": "Pineapple Smoothie",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 4.99,
        "type": "shakes",
        "description": "A tropical smoothie with fresh pineapple, coconut milk, and a touch of lime."
    },
    {
        "id": 33,
        "name": "Caramel Frappe",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.99,
        "type": "shakes",
        "description": "Iced coffee blended with caramel syrup and topped with whipped cream."
    },
    {
        "id": 34,
        "name": "Berry Blast Smoothie",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.49,
        "type": "shakes",
        "description": "A smoothie packed with strawberries, blueberries, and raspberries."
    },
    {
        "id": 35,
        "name": "Chocolate Peanut Butter Shake",
        "image": "https://bing.com/th?id=OSK.7837ece2068c44a4e10417f19ec1aadd",
        "price": 5.99,
        "type": "shakes",
        "description": "A creamy milkshake made with chocolate ice cream and peanut butter."
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const allMenus = document.querySelectorAll('.menu');

    // Display menu items on load
    menu.forEach(item => addMenuItem(item));

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset active class on buttons
            buttons.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');

            // Hide all menus
            allMenus.forEach(menu => menu.classList.remove('active'));

            // Show relevant menu
            const filter = btn.getAttribute('data-filter');
            document.querySelector(`.menu-${filter}`).classList.add('active');
        });
    });
});

function addMenuItem(dish) {
    const menuContainer = document.querySelector(`.menu-${capitalizeFirstLetter(dish.type)}`);

    const dishElement = document.createElement('div');
    dishElement.className = 'dish';

    dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="image">
        <div class="content">
            <div class="heading">
                <h4 class="name">${dish.name}</h4>
                <h4 class="price">$${dish.price.toFixed(2)}</h4>
            </div>
            <p class="description">${dish.description}</p>
        </div>
    `;

    menuContainer.appendChild(dishElement);
    document.querySelector('.menu-All').appendChild(dishElement.cloneNode(true));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
