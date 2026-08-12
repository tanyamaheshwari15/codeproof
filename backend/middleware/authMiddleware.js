import jwt from "jsonwebtoken";
import "dotenv/config";

export const isloggedin = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch(error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};