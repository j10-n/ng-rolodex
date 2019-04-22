exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments("id");
    table.string("username");
    table.string("name");
    table.string("email");
    table.string("address");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
