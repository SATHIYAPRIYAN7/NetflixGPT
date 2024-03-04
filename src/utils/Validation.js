export function validation(email, password) {
    
  const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,16}$/.test(password);
    if (!emailValidation) return "Please enter a valid email address";
    if (!passwordValidation) return "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be between 6 and 16 characters long";
  
    return null;
  }


  
  