
function formatDate(d) {
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    //return [year, month, day].join('-');
    return [month, day].join('-');
}

function nextPrayer(d, today) {
    var hour = d.getHours(),
	mins = d.getMinutes();
    var prayers = ['Fejr', 'Dohr', 'Asr', 'Maghreb', 'Icha'];
    var x = parseInt(london[today]['Fejr'].split(":")[0]);
    var m = parseInt(london[today]['Fejr'].split(":")[1]);
    if ((hour < x) || (hour == x && mins <= m)){
	return "fejr-card";
    }
    x = parseInt(london[today]['Dohr'].split(":")[0]);
    if (x < 10)
	x += 12;
    if ((hour < x) || (hour == x && mins <= m)){
	return "dohr-card";
    }
    x = 12 + parseInt(london[today]['Asr'].split(":")[0]);
    if ((hour < x) || (hour == x && mins <= m)){
	return "asr-card";
    }
    x = 12 + parseInt(london[today]['Maghreb'].split(":")[0]);
    if ((hour < x) || (hour == x && mins <= m)){
	return "maghreb-card";
    }
    x = 12 + parseInt(london[today]['Icha'].split(":")[0]);
    if ((hour < x) || (hour == x && mins <= m)){
	return "icha-card";
    }
    return "fejr-card";
}

function update_card_activation(active_card){
	$(".prayer-card").removeClass("bg-success text-white").addClass("bg-light");
	$('#' + active_card).removeClass("bg-light").addClass("bg-success text-white");
	
}

var ddate = new Date();
var today = formatDate(ddate);
var active_card = nextPrayer(ddate, today);

$('#date-today').text(ddate.toDateString());
$('#time-fejr').text(london[today]['Fejr']);
$('#time-sunrise').text(london[today]['Sunrise']);
$('#time-dohr').text(london[today]['Dohr']);
$('#time-asr').text(london[today]['Asr']);
$('#time-maghreb').text(london[today]['Maghreb']);
$('#time-icha').text(london[today]['Icha']);

update_card_activation(active_card);

// register ServiceWorker, remember to use absolute path!
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/Nsalli/sw.js', {scope: '/Nsalli/'})
  }
