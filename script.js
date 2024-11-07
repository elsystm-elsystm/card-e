var x = setInterval(function(){
    var now = new Date();
    //var currentTime = now.toLocaleTimeString()
    //var currentDate = now.toLocaleDateString().split('/').reverse().join('-');
    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    var currentDate = year+'-'+month+'-'+day;
    
    var second = now.getSeconds();
    var minute = now.getMinutes()+1;
    var hour = now.getHours();
    var currentTime = hour+':'+minute+':'+second;
    
    document.getElementById('date').innerHTML = currentDate;
    document.getElementById('time').innerHTML = currentTime;
    
  } )
