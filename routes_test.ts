
import * as express from "express"

var router = express.Router()

router.get('/index' ,(request,response) => {
	response.render('index',{title:"kaka",message:"kaka2"})
})

export default router
