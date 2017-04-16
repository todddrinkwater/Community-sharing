
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 7005, fname: 'Jon',lname: 'Bennett',email: 'jb@email.com',phone: '027 111 2222', hash: '', address: '8 Drummond Road', suburb: 'Karori', town_city: 'Wellington', postcode: '6023', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378542/jon_diojve.jpg'},
        {user_id: 7006, fname: 'Pou',lname: 'Kupenga',email: 'pk@email.com',phone: '022 333 4444', hash: '', address: '5 Kakapo Street', suburb: 'Paraparaumu', town_city: 'Paraparaumu', postcode: '6050', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378603/pou_fwdf1r.jpg'},
        {user_id: 7007, fname: 'Dan',lname: 'Blake',email: 'db@email.com',phone: '029 444 5555 ', hash: '', address: 'Flat 3/25 Taranaki Street', suburb: 'Wellington', town_city: 'Wellington', postcode: '6021', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378698/danb_wro9ti.jpg'},
        {user_id: 7008, fname: 'Todd',lname: 'Drinkwater',email: 'td@email.com',phone: '027 555 6666', hash: '', address: '5 Aro Valley', suburb: 'Aro Valley', town_city: 'Wellington', postcode: '6015', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492378866/todd_lrk0b5.jpg'},
        {user_id: 7009, fname: 'Aiden',lname: 'Nairn',email: 'an@email.com',phone: '027 555 7777', hash: '', address: '24 Village Road', suburb: 'Happy Valley', town_city: 'Wellington', postcode: '6025', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379023/aiden_qi5qwm.jpg'},
        {user_id: 7010, fname: 'Alice',lname: 'Youngquest',email: 'ay@email.com',phone: '027 555 8888', hash: '', address: '6 The Terrace', suburb: 'Wellington Central', town_city: 'Wellington', postcode: '6000', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379180/alice_jcn9na.jpg'},
        {user_id: 7011, fname: 'Dan',lname: 'Reason',email: 'dr@email.com',phone: '027 555 9999', hash: '', address: '69 Hood Street', suburb: 'Island Bay', town_city: 'Wellington', postcode: '4500', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379248/danr_x0wdqn.jpg'},
        {user_id: 7012, fname: 'Jeremy',lname: 'Liss',email: 'jl@email.com',phone: '027 666 0000', hash: '', address: '12 Garden Road', suburb: 'Karori', town_city: 'Wellington', postcode: '1230', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379415/jeremy_v0twed.jpg'},
        {user_id: 7013, fname: 'Kat',lname: 'Robbie',email: 'kr@email.com',phone: '027 666 1111', hash: '', address: '36 Bay Road', suburb: 'Island Bay', town_city: 'Wellington', postcode: '8362', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379530/kat_w1alkn.jpg'},
        {user_id: 7014, fname: 'Pauline',lname: 'Stokes-Calvert',email: 'ps@email.com',phone: '027 666 2222', hash: '', address: '18 Willis', suburb: 'Wellington CBD', town_city: 'Wellington', postcode: '6000', user_image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492379637/pauline_ni0ga8.jpg'}
      ]);
    });
};
