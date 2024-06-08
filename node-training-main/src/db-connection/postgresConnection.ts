import {Pool} from 'pg'

export default class ConnPooler{
    instance: Pool

    constructor() {
        this.instance = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: '1234',
            port: 5432
        })
    }
}

