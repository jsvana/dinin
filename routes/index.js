var alfred = require('../helpers/alfred');
/*
 * GET home page.
 */

exports.index = function(req, res){
  alfred.request('MTU.Dining', null, function(data) {
    var time = data.data.time;
    var breakfast = data.data.breakfast.replace(/,([^\s])/g, ', $1').replace(/([A-Z][^\s]+?)([A-Z][^\s]+)/g, '$1 $2').split(', ');
    var lunch = data.data.lunch.replace(/,([^\s])/g, ', $1').replace(/([A-Z][^\s]+?)([A-Z][^\s]+)/g, '$1 $2').split(', ');
    var dinner = data.data.dinner.replace(/,([^\s])/g, ', $1').replace(/([A-Z][^\s]+?)([A-Z][^\s]+)/g, '$1 $2').split(', ');
    var date = new Date(Date.parse(data.data.time));
    console.log(date.getFullYear());
    res.render('index', {
      title: 'Dining',
      time: time,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner
    });
  });
};
