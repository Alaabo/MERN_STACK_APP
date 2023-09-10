import Express from 'express';

import  {login , registerUser , getAllusers , deleteUser , updateUser , verifyuser}  from '../controller/userController.js'




const userRouter = Express.Router()

userRouter.post("/login" , login )

userRouter.get("/all" , getAllusers )

userRouter.post("/new", verifyuser , registerUser)

userRouter.delete ("/delete/:id" ,verifyuser, deleteUser)

userRouter.post("/update/:id" , verifyuser , updateUser)

export default userRouter