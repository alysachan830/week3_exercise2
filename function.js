for(let i=3; i<16; i++){
    for(let num=1; num<16; num++){
    console.log(`${i} * ${num} = ${i*num}`)
    }
}


function calculateBMI(height,weight){
    const BMI = (weight / ((height/100)**2)).toFixed(1);
    console.log(BMI)
}

calculateBMI(178,70)