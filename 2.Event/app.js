const EventEmitter = require("events");

// Create an EventEmitter (like a waiter taking orders)
const restaurant = new EventEmitter();

// Chef listens for the "food_ordered" event
restaurant.on("food_ordered", (dish) => {
  console.log(`👨‍🍳 Chef: Cooking ${dish}...`);

  // After some time, food is ready
  setTimeout(() => {
    restaurant.emit("food_ready", dish);
  }, 3000); // Simulating cooking time
});

// Waiter listens for the "food_ready" event
restaurant.on("food_ready", (dish) => {
  console.log(`🍽️ Waiter: Serving ${dish} to the customer.`);
});

// Customer orders food (emitting an event)
console.log("🧑‍💼 Customer: I want a burger!");
restaurant.emit("food_ordered", "Burger");
