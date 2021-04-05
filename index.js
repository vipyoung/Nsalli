
function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    //return [year, month, day].join('-');
    return [month, day].join('-');
}



// register ServiceWorker, remember to use absolute path!
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/Nsalli/sw.js', {scope: '/Nsalli/'})
  }
var today = formatDate();
$('#date-today').text(new Date());
$('#time-fejr').text(london[today]['Fejr']);
$('#time-sunrise').text(london[today]['Sunrise']);
$('#time-dohr').text(london[today]['Dohr']);
$('#time-asr').text(london[today]['Asr']);
$('#time-maghreb').text(london[today]['Maghreb']);
$('#time-icha').text(london[today]['Icha']);