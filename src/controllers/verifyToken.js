import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {
    const token = req.headers['auth']
    if (!token) {
        res.status(401).json(
            {
                auth: false,
                message: 'No Token Provided!'
            }
        )
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.userId = decoded.id
    console.log(req.userId)
    res.status(200).json({currentUser: req.userId })
    next()
}

