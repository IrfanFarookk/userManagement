import express from "express";
import Routes from "./routes";


class UserService {
    public app: express.Application;
    
    constructor(){
        this.app = express();
    }

    public async init() {
        this.startServer();
        new Routes(this.app);
    }


    private startServer() : void {
        console.log('starting server');
        const port = 3000;
        this.app.listen(port, () => console.log(`server running on port ${port} !`));
    }
}

(async ()=> {
    const userService = new UserService();
    await userService.init();
});

export default new UserService().app;