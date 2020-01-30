const { tbl_messages, tbl_users, tbl_chats } = require('../../src/models')

const checkIfIDExists = async(model, searchObject) => {
    const quantity = await model.count({where: searchObject})
    return quantity === 0 ? true : false
}

const generateRandomString = (numberOfDigits)  => {
    let result = ''
    const caracters = 'aZ85bT7_c2O4dEeIf3gJhCiBjK96kAl1-DmFnGoHpLqP0rWsStYuXvNVwQxURyMz'
    const caractersLength = caracters.length
    for(let digit=0; digit<numberOfDigits; digit++){
        result+= caracters.charAt(Math.floor(Math.random() * caractersLength))
    }
    return result
}

module.exports = async(model) => {
    let numberOfDigits
    let idModel
    switch(model){
        case tbl_messages:
            numberOfDigits = 7
            idModel = 'id_message'
            break
        case tbl_users:
            numberOfDigits = 3
            idModel = 'id_user'
            break
        case tbl_chats:
            numberOfDigits = 4
            idModel = 'id_chat'
            break
        default:
            return null
    }
    let exists = false
    let string = ""
    while(!exists){
        string = generateRandomString(numberOfDigits)
        const searchModel = {}
        searchModel[idModel] = string
        exists = await checkIfIDExists(model, searchModel)
    }
    return string
}