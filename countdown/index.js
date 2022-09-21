



function updateCountDown(){
    const hoursLeft = document.getElementById("hours")
    const minutesLeft = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")    
 const currentdate = new Date()
 const giveawaydate = new Date(2022,8,21,11,30)
 const diff = giveawaydate.getTime() - currentdate.getTime()
 const d = diff/1000/60/60/24
 const h = diff/1000/60/60 % 24
 const m = diff/1000/60 % 60
 const s = diff/1000 % 60

 hoursLeft.textContent = Math.round(h)
 minutesLeft.textContent = Math.round(m)
 seconds.textContent = Math.floor(s)


}

setInterval(updateCountDown,1000)


