const FormValidation = {
    validateFullName: (fullName) => {
      const fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      return fullNameRegex.test(fullName);
    },

    validateEmail: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  };

  export default ValidationUtils;
