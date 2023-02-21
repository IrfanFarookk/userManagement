import { Application } from "express";
import UserManagerOperations from "./services/userManager"

export default class Routes {
    private user : UserManagerOperations;
    constructor(app : Application){
        this.initializeApp(app);
    }


    public initializeApp(app : Application){
        app.route('/users/:id').get(this.user.get.bind(app));
        app.route('/users').post(this.user.post.bind(app));
        app.route('/users/:id').delete(this.user.delete.bind(app));
    }
}