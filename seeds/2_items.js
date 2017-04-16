
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_id: 12003, item_name: 'Lawnmower', category: 'Tools', description: 'Makita petrol 140cc', location:'Karori', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381181/mower_vlcqxf.jpg', owner_id: 7005, available: true},
        {item_id: 12004, item_name: 'Kayak', category: 'Sport and Recreation', description: 'Viking Profish', location:'Kapiti', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381333/kayak_eyxe3r.jpg',owner_id: 7006, available: true, },
        {item_id: 12005, item_name: 'Hovercraft', category: 'Other', description: 'Home made, single seat', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381486/hovercraft_qsuldd.jpg',owner_id: 7007, available: true,},
        {item_id: 12006, item_name: 'Guitar', category: 'Musical Instruments', description: 'Childs size classical style', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381578/guitar_lox9qk.png',owner_id: 7008, available: true},
        {item_id: 12007, item_name: 'Hedge Trimmer', category: 'Tools', description: 'Petrol hedge trimmer, perfect for all you hedge trimming needs', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381742/hedge-trimmer_imkmln.jpg',owner_id: 7009, available: true},
        {item_id: 12008, item_name: 'BMX Bike', category: 'Sport and Recreation', description: 'Enjoy you weekend with my awesome BMX bike, will let you perform some sweet tricks and show off to your friends!', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492381947/bmx_i6zpaa.jpg',owner_id: 7010, available: true},
        {item_id: 12009, item_name: 'Small Trailer', category: 'Other', description: 'Moving Flat? Need to haul something? This is the perfect trailer for you!', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492382152/trailer_ogfcrk.jpg',owner_id: 7011, available: true},
        {item_id: 12010, item_name: 'MixMaster 5000', category: 'Musical Instruments', description: 'Need to spin some phat beats for your next party? The twin turntables on the MixMaster 5000 will allow you to DJ like a pro and get the party cranking!', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492382264/djdeck_mqtcow.jpg',owner_id: 7012, available: true},
        {item_id: 12011, item_name: 'Tree Cutter 4 Chainsaw', category: 'Tools', description: 'Petrol Powered with sharp teeth, will allow you to cut down any tree', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492382497/chainsaw_ac2k1j.jpg',owner_id: 7013, available: true},
        {item_id: 12012, item_name: 'Sky Buzzer Drone', category: 'Other', description: '4 blades and a 40 minute battery life. Bilt in HD camera that takes 1920x1080 video', location:'Wellington', image_url: 'http://res.cloudinary.com/hpyyiawap/image/upload/v1492382710/drone_hscbun.jpg',owner_id: 7014, available: true}
      ]);
    });
};
