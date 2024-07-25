export const checkValidateData =(Email, Password, FullName)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    const isFullnameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(FullName);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is incorrect";
    if(!isFullnameValid) return "Name is Incorrect"

    return null;
};