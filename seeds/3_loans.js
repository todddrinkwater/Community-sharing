
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('loans').del()
    .then(function () {
      // Inserts seed entries
      return knex('loans').insert([
        {loan_id: 2004, lenders_id: 7005, borrowers_id: 7013, item_id: 12003, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2005, lenders_id: 7006, borrowers_id: 7005, item_id: 12004, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2006, lenders_id: 7008, borrowers_id: 7006, item_id: 12006, pickup: '2017-04-20 11:00:00', dropoff: '2017-05-20 10:00:00'},
        {loan_id: 2007, lenders_id: 7007, borrowers_id: 7005, item_id: 12005, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2008, lenders_id: 7008, borrowers_id: 7010, item_id: 12006, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2009, lenders_id: 7009, borrowers_id: 7007, item_id: 12007, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2010, lenders_id: 7010, borrowers_id: 7013, item_id: 12008, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2011, lenders_id: 7011, borrowers_id: 7012, item_id: 12009, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2012, lenders_id: 7012, borrowers_id: 7009, item_id: 12010, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2013, lenders_id: 7013, borrowers_id: 7008, item_id: 12011, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2014, lenders_id: 7014, borrowers_id: 7011, item_id: 12012, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2015, lenders_id: 7006, borrowers_id: 7008, item_id: 12004, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2016, lenders_id: 7008, borrowers_id: 7012, item_id: 12006, pickup: '2017-04-20 11:00:00', dropoff: '2017-05-20 10:00:00'},
        {loan_id: 2018, lenders_id: 7008, borrowers_id: 7009, item_id: 12006, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2020, lenders_id: 7010, borrowers_id: 7006, item_id: 12008, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2021, lenders_id: 7011, borrowers_id: 7014, item_id: 12009, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2022, lenders_id: 7012, borrowers_id: 7013, item_id: 12010, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2023, lenders_id: 7013, borrowers_id: 7012, item_id: 12011, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'},
        {loan_id: 2025, lenders_id: 7005, borrowers_id: 7008, item_id: 12013, pickup: '2017-04-25 14:12:22', dropoff: '2017-04-30 10:00:00'}
      ])
    })
}
