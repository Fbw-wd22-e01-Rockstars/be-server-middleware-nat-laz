  //===================  CAPITALIZE FIRST LETTER IN FIRS|LAST NAME ===================
export const sanitizeName = (req, res, next) =>{
    try {
        const user = req.body
        const {firstName, lastName} = req.body
        user.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        user.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        
       next()
    } catch (error) {
        console.log(error)
    }
}

 //===================  CONVERT AGE|CLASS: STRING --> IN NUMBER ===================
export const stringToNumbers = (req, res, next)=>{
    try {
        const user = req.body
        user.age = +user.age;
        user.fbw = +user.fbw
        next()
    } catch (error) {
        console.log(error)
    }
}

 //===================  SORT ALPHABETICAL FAVORITE BANDS ===================
export const sortFavBands = (req, res, next) => {
    try {
        const user = req.body
        user.favoriteBands = user.favoriteBands.sort()
        next()
    } catch (error) {
        console.log(error)
    }
}

