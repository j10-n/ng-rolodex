exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Kookie Monsta",
          email: "kookiemonsta@gmail.com",
          mobile: "808-555-1234",
          address: "310 Baker St."
        },
        {
          name: "Oscar Philipe",
          email: "iamtrash@gmail.com",
          mobile: "808-555-4321",
          address: "841 Dumpster Ave."
        }
      ]);
    });
};
