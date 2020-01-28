const getCatch = (err) => {
    if(err.hasOwnProperty('errors')){
        return err.errors[0].message
    }else if(err.hasOwnProperty('parent')){
        return err.parent.sqlMessage
    }
}

module.exports = getCatch