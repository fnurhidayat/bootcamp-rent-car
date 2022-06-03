const { Order, Car, User } = require('../../models');

class OrderController {
    static async addOrder(req, res) {
        try {
            const { start_rent_at, finish_rent_at, car_id } = req.body
            const total_day = (new Date(finish_rent_at) - new Date(start_rent_at)) / 86400000
            const car = await Car.findByPk(car_id)
            if (!car) {
                res.status(404).json({ name: 'Not Found', message: `Car with id = ${car_id} is not Found` })
            }
            
            const total_price = (total_day + 1) * car.price
            const newOrder = await Order.create({ start_rent_at, finish_rent_at, UserId: req.client.id, CarId: car.id, total_price })
            res.status(201).json(newOrder)

        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getOrders(req, res) {
        try {
            const orders = await Order.findAll({
                where: {
                    UserId: req.client.id
                }
            }, {
                include: [{
                    model: User, attributes: {
                        exclude: ['id', 'password', 'createdAt', 'updatedAt']
                    }
                }, {
                    model: Car, attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                    }
                }]
            })
            res.status(200).json(orders)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async getOrderById(req, res) {
        try {
            const id = req.params.id
            const order = await Order.findByPk(id, {
                include: [{
                    model: User, attributes: {
                        exclude: ['id', 'password', 'createdAt', 'updatedAt']
                    }
                }, {
                    model: Car, attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt']
                    }
                }]
            })
            res.status(200).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async updateOrder(req, res) {
        try {
            const id = req.params.id
            const { start_rent_at, finish_rent_at, car_id } = req.body
            const total_day = (new Date(finish_rent_at) - new Date(start_rent_at)) / 86400000
            const car = await Car.findByPk(car_id)
        
            const total_price = (total_day + 1) * car.price
            const updateOrder = await Order.update({
                start_rent_at,
                finish_rent_at,
                UserId: req.client.id,
                CarId: car.id,
                total_price
            }, {
                where: {
                    id
                },
                returning: 1
            })
            res.status(200).json(updateOrder[1][0])
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteOrder(req, res) {
        try {
            const id = req.params.id
            const data = await Order.destroy({
                where: {
                    id
                }
            })
            if (data) {
                res.status(200).json({ name: 'Delete Success', message: `Order with id = ${id} has been delete` })
            } else {
                res.status(400).json({ name: 'Not Found', message: `Order with id = ${id} is not Found` })
            }
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = OrderController