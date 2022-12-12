const jwt = require('jsonwebtoken');
const config = require('config');

const customarAuth = (req,res,next) => {
  const token = req.header('virtual_customar_token');
  if(!token) return res.status(401).send("You are not authenticated!");
  try{
    const decoded = jwt.verify(token,config.get('jwtPrivatekey'));
    req.customar = decoded;
    next()
  }catch(e){
    if(e) return res.status(400).send("inValid token")
  }
}

module.exports = customarAuth;
