const alexHeight =1.75;
const brianHeight =1.82;

const alexWeight =75;
const brianWeight =82;

const calculateBMI = function(weight,height){
    return weight / (height * height);
}

const alexBMI = calculateBMI(alexWeight, alexHeight);
const brianBMI = calculateBMI(brianWeight, brianHeight);


const CompareBMI= function(alex,brian){
    return alexBMIHigher = alexBMI > brianBMI;
}
console.log(CompareBMI(alexBMI,brianBMI));