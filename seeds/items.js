
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_id: 12003, category: 'Tools',item_name: 'lawnmower',description: 'Makita petrol 140cc',available: true,image_url: '',owner_id: 7005},
        {item_id: 12004, category: 'Sport and Recreation',item_name: 'Kyak',description: 'Viking Profish',available: true,image_url: '',owner_id: 7006},
        {item_id: 12005, category: 'Other',item_name: 'Hovercraft',description: 'home made, single saet',available: false,image_url: '',owner_id: 7007},
        {item_id: 12006, category: 'Musical Instruments',item_name: 'Guitar',description: 'childs size claassical style',available: true,image_url: '',owner_id: 7008}
      ]);
    });
};
