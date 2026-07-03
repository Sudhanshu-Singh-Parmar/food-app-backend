const validateENVs = () => {
    const requiredEnv = ["PORT", "MONGO_URL", "JWT_SECRET"];
    requiredEnv.forEach( value => {
        if(!process.env[value]) throw new Error(`missing enviroment variable: ${value}`);        
    })
}

export default validateENVs