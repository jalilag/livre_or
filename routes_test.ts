
import * as express from "express"

var router = express.Router()

router.get('/' ,(request,response) => {
	response.render('index',{title:"kaka",message:"kaka2"})
})

export default router
