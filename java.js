setInterval(function() {
    let dates = new Date();
    let time=dates.getHours() + ":"+dates.getMinutes()+":"+dates.getSeconds();
    document.getElementById('date').innerHTML =time ; 
}, 1000);

