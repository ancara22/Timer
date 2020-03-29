
    //Timer

let finish = '2020-03-30'; //Finish date

function timer(elemId, deadline) {

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60) %60),
            hours = Math.floor((t/(1000*60*60))); 

        /* 
            hours = Math.floor((t/1000/60/60) % 24 ),
            days = Math.floor((t/(1000*60*60*24))); 
        */
        
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds 
            };
    }

    function addZero(numb, source) {     //00-00-00
        let res = source + '' ;
        if(res.length < numb) {
            res = '0' + res;
        }
        return res;
    }

    function setClock(id,endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock,1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                if( Date.parse(endtime) > (Date.parse( new Date() ))) {
                           
                     hours.textContent = addZero(2,t.hours);
                     minutes.textContent = addZero(2,t.minutes);
                     seconds.textContent = addZero(2,t.seconds);
                            
                }else  {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                    clearInterval(timeInterval);
                } 
            }
    }
    setClock(elemId, deadline);
}

//Example of use
timer('timer', finish);