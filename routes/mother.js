let express = require('express');
let router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('mother',{
        title: 'my mother'
    })
});

module.exports = router;