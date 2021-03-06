import Sequelize from 'sequelize';

import Users from '../app/models/User';

import databaseConfig from '../config/database';

const models = [ Users ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.conection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.conection))
            // .map(model => model.associate && model.associate(this.conection.models));
    }
}

export default new Database();
