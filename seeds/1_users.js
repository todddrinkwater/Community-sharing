
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 7005, fname: 'Jon',lname: 'Bennett',email: 'jb@email.com',phone: '027 111 2222', hash: '', address: '8 Drummond Road', suburb: 'Karori', town_city: 'Wellington', postcode: '6023', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378542/jon_diojve.jpg'},
        {user_id: 7006, fname: 'Pou',lname: 'Kupenga',email: 'pk@email.com',phone: '022 333 4444', hash: '', address: '5 Kakapo Street', suburb: 'Paraparaumu', town_city: 'Paraparaumu', postcode: '6050', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378603/pou_fwdf1r.jpg'},
        {user_id: 7007, fname: 'Dan',lname: 'Blake',email: 'db@email.com',phone: '029 444 5555 ', hash: '', address: 'Flat 3/25 Taranaki Street', suburb: 'Wellington', town_city: 'Wellington', postcode: '6021', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378698/danb_wro9ti.jpg'},
        {user_id: 7008, fname: 'Todd',lname: 'Drinkwater',email: 'td@email.com',phone: '027 555 6666', hash: '', address: '5 Aro Valley', suburb: 'Aro Valley', town_city: 'Wellington', postcode: '6015', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378866/todd_lrk0b5.jpg'}
      ]);
    });
};
