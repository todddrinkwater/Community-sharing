
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 7005, fname: 'Jon',lname: 'Bennett',email: 'jb@email.com',phone: '027 111 2222',location: 'Karori',hash: ''},
        {user_id: 7006, fname: 'Pou',lname: 'Kupenga',email: 'pk@email.com',phone: '022 333 4444',location: 'Kapiti',hash: ''},
        {user_id: 7007, fname: 'Dan',lname: 'Blake',email: 'db@email.com',phone: '029 444 5555 ',location: 'Wellington',hash: ''},
        {user_id: 7008, fname: 'Todd',lname: 'Drinkwater',email: 'td@email.com',phone: '027 555 6666',location: 'Wellington',hash: ''}
      ]);
    });
};
