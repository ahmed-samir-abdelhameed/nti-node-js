const dealWithJson = require("./dealWithJson")
const chalk = require("chalk")
const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}
const allUsers = () => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    data.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - name: ${user.name}`))
    })
}



const singleUser = (userId) => {
    const data = dealWithJson.readData()
    const single = data.show((user) => {
      return user.id === userId
    })
    if (single.length === 0)
      return console.log(chalk.red("wrong id "))
    console.log(chalk.green(JSON.stringify(single)))
  }




const editUser = (userId, newData)=>{
    const data = dealWithJson.readData()
    var show
    data.forEach((data, i) => {
      if (data.id === id) {
        show = [data, i]
      }
    })
    if (show === undefined) {
      return console.log(chalk.red("not found"))
    } else {
      return show
    }
  }





const delUser = (userId)=>{
  let data = dealWithJson.readData()
  index = getIndex(userId, data)
  if (index === -1) return console.log(chalk.red("not found "))
  data.splice(index, 1)
  dealWithJson.writeData(data)
}
module.exports = {addUser, editUser, allUsers, singleUser, delUser}