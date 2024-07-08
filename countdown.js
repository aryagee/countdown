const enddate='22 sep 2024 12:00 AM'
document.querySelector('#endate').innerText=enddate;
const inputs= document.querySelectorAll('input')
const tittle=document.querySelector('.title1')
const timebox=document.querySelector('.box_row')
const msgs=document.querySelector('.msg')

function clock(){
    const end= new Date(enddate)
    const now = new Date()
    let diff = (end - now) / 1000;
    console.log(diff) 
    let difff=Math.floor(diff)
    if(difff<0){
        
        return showBirthday(difff); 
    }

    inputs[0].value=Math.floor(diff / 3600/24)
    inputs[1].value=Math.floor(diff / 3600)%24
    inputs[2].value=Math.floor(diff / 60)%60
    inputs[3].value=Math.floor(diff)%60
// inputs[0].value =Math.floor(diff / (3600 * 24))
// inputs[1].value=Math.floor((diff % (3600 * 24)) / 3600)
// inputs[2].value=Math.floor((diff % 3600) / 60)
// inputs[3].value=Math.floor(diff % 60)
 
   
}
showBirthday=(difff)=>{
    if(difff==-1){
        console.log('happy birthday!')
        tittle.classList.add('hide1')
        timebox.classList.add('hide2')
        msgs.classList.remove('hide3')
    
    }
}

setInterval(()=>{
    clock();
},1000
)