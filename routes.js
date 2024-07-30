const express = require('express');
const router = express.Router();

// Importa los controladores adecuados
const customerHandler = require('./app/handlers/customer.handler');
const productController = require('./app/handlers/productos.handler');
const categoryController = require('./app/handlers/categorias.handler');
const reviewController = require('./app/handlers/reviews.handler');
const orderController = require('./app/handlers/orders.handler');

// Rutas para clientes (customers)
router.get('/customers', customerHandler.listCustomer);
router.post('/customers', customerHandler.insertCustomer);
router.put('/customers/:id', customerHandler.updateCustomer);
router.delete('/customers/:id', customerHandler.deleteCustomer);

// Rutas para productos (products)
router.get('/products', productController.listProducts);
router.post('/products', productController.insertProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// Rutas para categorías (categories)
router.get('/categories', categoryController.listCategories);
router.post('/categories', categoryController.insertCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

// Rutas para reviews
router.get('/reviews', reviewController.listReviews);
router.post('/reviews', reviewController.createReview);
router.put('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);

// Rutas para órdenes (orders)
router.get('/orders', orderController.listOrders);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
