const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.db_name,
    process.env.db_user,
    process.env.db_password,
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
);


module.exports = sequelize;