module.exports =  function(arrayAsString){
    return arrayAsString.split(',').map(item => item.trim())
}