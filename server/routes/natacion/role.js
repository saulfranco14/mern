const express           = require('express');
const router            = express.Router();
const roleController    = require('../../controllers//natacion/roleController');

// get 
router.get('/',
    roleController.getRoles
)


// POST
router.post('/', 
    roleController.createRole
);

module.exports = router;