let express = require('express');
let router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('me',{
        title: 'me'
    })
});

module.exports = router;