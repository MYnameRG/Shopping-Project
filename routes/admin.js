const express = require('express');
const { fetchAdminPage, addTheProduct, getProducts, editTheProduct, fetchEditProduct, deleteTheProduct } = require('../controllers/admin');
const router = express.Router();

router.get('/add-products', fetchAdminPage);
router.post('/add-products', addTheProduct);

router.get('/edit-products/:id', fetchEditProduct);
router.post('/edit-products', editTheProduct);

router.post('/delete-products/:id', deleteTheProduct);

router.get('/avail-products', getProducts);

module.exports = router;