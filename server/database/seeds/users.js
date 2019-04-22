exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "oogabooga",
          name: "Kookie Monsta",
          email: "kookiemonsta@gmail.com",
          address: "310 Baker St."
        },
        {
          username: "trashnocan",
          name: "Oscar Philipe",
          email: "iamtrash@gmail.com",
          address: "841 Dumpster Ave."
        }
      ]);
    });
};
