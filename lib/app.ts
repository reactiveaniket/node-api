import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://aniket:12345@cluster0-8wkqb.mongodb.net/mydb?retryWrites=true';
    
    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);   
        this.mongoSetup();  
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{ useNewUrlParser: true });    
    }


    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;