import jwt from "jsonwebtoken"

const authMiddleware = (req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({message:"No Token Provided"})
        }
        const  token = authHeader.split(" ")[1];
        console.log("Header",authHeader);
        console.log("Token",token);
        const decoded = jwt.verify(
            token,
            "mysecretkey"
        );
        req.user = decoded;
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({
            message:"Inavlid token"
        })
    }
}


export default authMiddleware