const  jwt = require('jsonwebtoken')
const { prisma } = require('../prisma/prisma-client')

const auth = async (req, res, next) => {

    try {
        let token = req.headers.authorization?.split(' ')[1]
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret)

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        })

        req.user = user
        next()

    } catch (error) {
        return res.status(401).json({ message: 'Не авторизован' })
    }

}

module.exports = {
    auth
}