// constant values
const meter = 0.01;
const inch = 0.394;

// Elements Bmi Calculation Selectors
const AgeInput = document.querySelector("#Age-dob");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height-cm");
const calculateBtn = document.querySelector(".calculate-btn");
// BMI data inserted Selectors
const bmi_display = document.querySelector(".bmi-num-part");
const body_state = document.querySelector(".state");
const Age_section = document.querySelector(".Age");
const body_height = document.querySelector(".height-inch-meter");
const gender_female_input = document.querySelector("#female_input");
const gender_male_input = document.querySelector("#male_input");

// Body Weight state innerHTML's 
const Underweight_boy=`Underweight <img class="bmi_image" src="images/boyThin.png">`;
const Underweight_girl=`Underweight <img class="bmi_image" src="images/girlThin.png">`;
const Healthy_boy=`Healthy weight <img class="bmi_image" src="images/boyFit.png">`;
const Healthy_girl=`Healthy weight <img class="bmi_image" src="images/girlFit.png">`;
const Overweight_boy=`Over weight <img class="bmi_image" src="images/boyFat.png">`;
const Overweight_girl=`Over weight <img class="bmi_image" src="images/girlFat.png">`;
const Obesity_boy=`Obesity <img class="bmi_image" src="images/boyFat.png">`;
const Obesity_girl=`Obesity <img class="bmi_image" src="images/girlFat.png">`;

// Functions Starts
// Bmi calculation function.
const Bmicalculate = () => {
    const height_In_meter = Number.parseFloat(heightInput.value) * meter;
    const result = (Number.parseFloat(weightInput.value) / (Math.pow(height_In_meter, 2)));
    return result.toFixed(2);
}
// Inner htmls
const Inserting_html=()=>{
    Age_section.innerHTML=`Age:${AgeInputfun()}`;
    body_height.innerHTML=`Height: ${heightcal()}<span style="color:#f00;">/</span> ${heightInput.value/100} Meter`;
}
// Age calculation function.
const AgeInputfun = () => {
    const date = new Date();
    const AgeInput_Value=AgeInput.value.slice(0,4);
    const Yearcal = (date.getFullYear() - Number.parseFloat(AgeInput_Value));
    return Yearcal;
    // Not to do below apporach
    // const ageArray = Array.from(AgeInput.value);
    // const userAgeyear = ageArray.slice(0, 4);
    // alert(typeof userAgeyear);
    // const Yearstr = userAgeyear.toString().replaceAll(",", "");
    // const newarray = [];
    // newarray.push(Yearstr);
    // const Yearcal = (date.getFullYear() - newarray[0]);   
}

// Height calculation function.
const heightcal = () => {   
        const realFeet = ((heightInput.value * 0.393700) / 12);
        const feet = Math.floor(realFeet);
        const inches = Math.floor((realFeet - feet) * 12);
        return `${feet}.${inches}`;
}

// Calculate button function start
calculateBtn.addEventListener("click", (value) => {
    value.preventDefault();

 if((AgeInput.value && weightInput.valuer && heightInput.valuer && (gender_female_input.checked || gender_male_input.checked)) !="" ){

    const cal_part=document.querySelector("#calculate-partId").classList;
    cal_part.remove("d-none");
    cal_part.add("calculate-part")
    bmi_display.innerHTML = `${Bmicalculate()} <sub>BMI</sub>`;
    Inserting_html();
        if (Bmicalculate() < 18.5) {
        gender_male_input.checked == true ? body_state.innerHTML = Underweight_boy : body_state.innerHTML = Underweight_girl;
        }
        else if (Bmicalculate() >= 18.5 && Bmicalculate() < 24.9) {
        gender_male_input.checked == true ? body_state.innerHTML = Healthy_boy : body_state.innerHTML = Healthy_girl;

    }
        else if (Bmicalculate() >= 25.0 && Bmicalculate() < 29.9) {        
        gender_male_input.checked == true ? body_state.innerHTML = Overweight_boy : body_state.innerHTML = Overweight_girl;

    }
        else {        
        gender_male_input.checked == true ? body_state.innerHTML = Obesity_boy : body_state.innerHTML = Obesity_girl;

    }
}
     else{
    alert("Fill all required bmi inputs");
 }
});


