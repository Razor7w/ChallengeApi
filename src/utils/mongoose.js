const mongoose = require("mongoose");

mongoose.connect(process.env.CONFIG_DEV_DB_NAME, {
  user: process.env.CONFIG_DEV_DB_USER,
  pass: process.env.CONFIG_DEV_DB_PASS, 
}).then(()=>{
  console.log('[Api] - MongoDB Connected ✓')
}).catch((error)=>{
  console.log('[Api] - MongoDB Error x', error)
})