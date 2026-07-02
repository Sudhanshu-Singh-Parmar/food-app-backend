import JWT from 'jsonwebtoken'

export default async (req, res, next) => {
    try {
        // get token from request
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error) {
                console.log('error occurred while verifying token:', error);
                return res.status(401).json({
                    success: false,
                    message: 'unauthorized user',
                    error
                })
            }
            else {
                if (!req.body) req.body = {};
                req.body.id = decoded.id;
                next();
            }
        });

        
    } catch (error) {
        console.log('error in authMiddleware:', error);
        res.status(500).json({
            success: false,
            message: 'error in authMiddleware',
            error
        })
    }
}