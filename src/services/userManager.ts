import { Request, Response, NextFunction } from "express";
import mysql, { Connection, MysqlError } from 'mysql';

export default class UserManagerOperations {
    public mySqlConnection
    constructor() {
        this.mySqlConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'users',
            multipleStatements: true
        });
        this.init();
    }

    private async init() {
        try {
            this.mySqlConnection.connect((err) => {
                if (!err)
                    console.log('Connection Established Successfully');
                else
                    console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    public get(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let query = `SELECT * FROM USERS WHERE id = '${req.params.id}';`
            let response = this.mySqlConnection.query(query, (err, rows, fields) => {
                if (!err)
                    res.send(rows);
                else
                    console.log(err);
            })
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }

    public post(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let user = req.body;
            let query = `INSERT INTO USERS (id, name, email) VALUES (${user.id}, ${user.name}. ${user.email});`
            let response = this.mySqlConnection.query(query, (err, rows, fields) => {
                if (!err)
                    res.send(rows);
                else
                    console.log(err);
            })
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }

    public delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let query = `DELETE FROM USERS WHERE id = '${req.params.id}';`
            let response = this.mySqlConnection.query(query, (err, rows, fields) => {
                if (!err)
                    res.send(rows);
                else
                    console.log(err);
            })
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
}