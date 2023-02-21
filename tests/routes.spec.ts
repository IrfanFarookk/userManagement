import Routes from '../src/routes'
import {Application, NextFunction} from 'express'
jest.mock("express");

describe('Verify routes', ()=> {
    let mockReq: any;
    let app: Application;

    beforeAll(async ()=> {
        mockReq = {};
        app = {} as Application;
        app.route = jest.fn().mockImplementation(()=> {
            return {
                post: jest.fn(),
                get: jest.fn(),
                delete: jest.fn()
            }
        })
    });

    test('should invoke the api request', async () => {
        try{
            const routes = new Routes(app);
            const resp = await routes.initializeApp(mockReq);
        }catch (err){

        }
    })
})