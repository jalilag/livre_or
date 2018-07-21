import * as express from "express"
import * as bodyParser from "body-parser"
import routes from "./routes_test"

class Server {
	public app
	constructor () {
		this.app = express()
		this.load_configuration()
		this.load_middleware()
		this.load_routes()
	}

	private load_configuration():void {
		this.app.set('views','./views')
		this.app.set('view engine','pug')
	}

	private load_middleware() :void {
		this.app.use(express.static('public'));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended:false}));
	}

	private load_routes() :void {
		this.app.use('/index',routes)
		// // this.app.get()
		// this.app.get('/' ,(request,response) => {
		// 	console.log(response.locals)
		// 	response.render('index',{title:"kaka",message:"kaka2"});
		// })
	}

	public start_server(port?:number) {
		if (!port) port = 8080
		this.app.listen(port)
	}
}

var s = new Server()
s.start_server()
