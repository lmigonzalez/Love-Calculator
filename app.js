const btn = document.querySelector('.btn');
let number =  document.querySelector('.number');

let count1 = 1;


btn.addEventListener('click',(e)=>{
    const mname = document.querySelector('.mname');
    const fname = document.querySelector('.fname');
    const mnameValue = mname.value;
    const fnameValue = fname.value;


    const config = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1d18daafe8msha705f48890ca5c4p1ed968jsnf59eb7ea8127",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com"
        }
    }



    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${mnameValue}&sname=${fnameValue}`, config)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        
      const number1 = setInterval(()=>{
            
            number.innerHTML = `${count1}%`;
            count1++;
            console.log(number)
            
            if(count1 == data.percentage || count1 == 100){
                clearInterval(number1);
                if(count1 <= 50){
                    document.querySelector(".p-bar").style.background = "red";
                }
                else if( count1 > 50 && count1 < 75){
                    document.querySelector(".p-bar").style.background = "orange";
                }
                else{
                    document.querySelector(".p-bar").style.background = "green";
                }
            }

        }, 100);

        
    
        
    })
    e.preventDefault();
});



// const number = setInterval(function projectDone(){
        //     let count1 = 2;
            
        //     document.querySelector('.number').innerHTML = `${count1}%`;
        
        //     const countMatch = dataReturn();
        
        //     if(count1 == countMatch){
        //         clearInterval();
        //     }
        
        //     count1++;
        // }, 100);