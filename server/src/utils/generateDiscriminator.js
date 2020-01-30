const {tbl_users} = require('../../src/models')

const checkIfExists = async (searchObject) =>{
    const exists =  await tbl_users.count({where: searchObject})
    return exists === 0 ? true : false
}

const generateDiscriminator = () => {
    let personNumber = ''
    const caracters = '0123456789'
    for(let i = 0; i < 4; i++){
        personNumber += caracters.charAt(Math.floor(Math.random() * caracters.length))
    }
    return personNumber
}

module.exports = async(username) => {

    let exists = false
    let numberPerson
    while(!exists){
        numberPerson = generateDiscriminator()
        const searchModel = {}
        searchModel.username = username
        searchModel.person_number = numberPerson
        exists = await checkIfExists(searchModel)
    }
    return numberPerson
}