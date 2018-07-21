
import * as express from "express"

export = ( () => {
	var router = express.Router()
	router.get('/' ,(request,response) => {
		response.render('index',{title:"kaka",message:"kaka2"})
		})
	return router
})

