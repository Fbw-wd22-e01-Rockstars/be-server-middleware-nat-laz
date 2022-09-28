  //===================  CAPITALIZE FIRST LETTER IN FIRS|LAST NAME ===================
export const capitalizeName = (req, res, next) =>{
    try {
        const user = req.body
        
        user.firstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
        user.lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)
        
       next()
    } catch (error) {
        console.log(error)
    }
}

 //===================  CONVERT AGE|CLASS NR - IN NUMBER ===================
export const convertInNum = (req, res, next)=>{
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

