module.exports = function(app) {

  app.get('/',function(req,res){
    if(req.query.index >= 0)
      return res.send ({"message": "success!", "details": getFibonacci(req.query.index)})
    
    else
      return res.send ({"message": "Error!", "details": "Not a valid index"})
    
  })
}

function getFibonacci(index){
  if (index <= 1)
    return index
  return getFibonacci(index-1) + getFibonacci(index-2)
}