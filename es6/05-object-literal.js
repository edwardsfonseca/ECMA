//enhanced object literals
function newUser(user,age,country,uId){
    return {
        user,age,country,id:uId
    }
}
console.log(newUser("Edwards",34,"MX",1))