export const getUser = (req, res, next) => {
    console.log("Hello from getUser");
    res.status(200).json({
        success: true,
        message: 'user get succeddfull'
    })
}