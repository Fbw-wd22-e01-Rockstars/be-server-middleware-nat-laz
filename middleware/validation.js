  //===================  CHECK USER DETAILS FROM FIELDS ===================
export const checkValues = (req, res, next) => {
    try {
      
      // console.log(req.body);
      const { firstName, lastName, age, fbw, email } = req.body;
  
      if (!firstName || !lastName || !age || !fbw || !email) {
        const error = new Error("Some fields are missing");
        next(error);
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  //===================  CHECK AGE ===================
  export const isAdult = (req, res, next) => {
    try {
      const { age } = req.body;
  
      if (+age < 18){
          const error = new Error("We can not validate your user. They are  below 18 years of age")
          next(error)
      } 
      next();
    } catch (error) {
      console.log(error);
    }
  };
  