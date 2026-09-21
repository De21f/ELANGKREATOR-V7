import jwt from "jsonwebtoken";
export function requireAdmin(req,res,next){const t=req.cookies?.admin_token;if(!t)return res.status(401).json({error:"ADMIN_AUTH_REQUIRED"});try{const u=jwt.verify(t,process.env.JWT_SECRET);if(u.role!=="admin")throw new Error();req.admin=u;next()}catch{return res.status(401).json({error:"INVALID_ADMIN_SESSION"})}}
