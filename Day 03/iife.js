// Named IIFE
(function chai() {
  console.log(`DataBase Connected`);
})();

// Unnamed with arrow function

((user) => {
  console.log(`DataBase Connected Two ${user} `);
})("Done");
