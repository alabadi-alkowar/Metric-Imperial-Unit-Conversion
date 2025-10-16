const button = document.getElementById("convert")
const length = document.getElementById("length")

button.addEventListener("click" , ()=>{
    const length = document.getElementById("length")
    const Volume = document.getElementById("Volume")
    const Mass = document.getElementById("Mass")
    const Input_Value = document.getElementById("input").value
    const meters = Input_Value * 0.3048 
    const feet = Input_Value *  3.28084 
    const gal = Input_Value *   0.264172
    const liters = Input_Value *  3.78541
    const lb = Input_Value *  0.453592
    const kg = Input_Value * 2.20462

    length.innerHTML =  `${Input_Value} meters = ${feet.toFixed(3)} feet | ${Input_Value} feet = ${meters.toFixed(3)} meters`
    Volume.innerHTML = `${Input_Value} liters = ${gal.toFixed(3)} gallons | 20 gallons = ${liters.toFixed(3)} liters`
    Mass.innerHTML = `${Input_Value} kilos = ${kg.toFixed(3)} pounds | ${Input_Value} pounds = ${lb.toFixed(3)}} kilos`
    

})