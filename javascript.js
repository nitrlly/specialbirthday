const bday = new Date("Jul 30, 2022 00:00:00");

function updateCoundown(){ 

    let time = bday.getTime();
    var now = new Date().getTime();

    var days = document.getElementById("days");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    var countdown = time-now;

    if(countdown <= 0){
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        document.getElementById("body").innerHTML='<img id="salad2" src="Images/salad.jpg" alt="salad"></img>' + '<p class="text">HAPPY BIRTHDAY</p>';
        setTimeout(function(){
           location.href = "https://www.youtube.com/watch?v=qhA7r4FJx1w";
        }, 5000);
        return;
  }

    const d = Math.floor(countdown/1000/60/60/24);
    const h = Math.floor(countdown/1000/60/60) % 24;
    const m = Math.floor(countdown/1000/60) % 60;
    const s = Math.floor(countdown/1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCoundown, 1000);
