
export const passwordValidate = password => {
   if (/[^\w.-]/gi.test(password)) {
      return Promise.reject(new Error('The password format is invalid.'));
   }
   if (password && password.length < 8) {
      return Promise.reject(new Error('The password must be at least 8 characters.'));
   }
   return Promise.resolve();
}