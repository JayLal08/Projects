const generateOTP = () => {
    const length = 6;
    let otp = "";

    //Loop through the length of the otp and add 
    // random number between 0 and 9 to otp string

    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}
console.log(generateOTP());

