import Sequelize from 'sequelize';
import { DatabaseConnect } from '../Config';

//Import Model
import USER from './Model/User';

//Connect Database
const Connect = new Sequelize(
  DatabaseConnect.database,
  DatabaseConnect.username,
  DatabaseConnect.password,
  {
    dialect: DatabaseConnect.dialect,
    host: DatabaseConnect.host,
  }
);

//Test connect database
Connect.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

//Create table User
const User = Connect.define('Users', USER);

//force: true will drop the table if it already exists
User.sync().then(() => {

  //Query Example
  // const query = User.build({
  //   firstName: 'Nguyen Thanh',
  //   lastName: 'Tu',
  //   email: 'thanhtu.dev@gmail.com'
  // });

  User.findAll({ raw: true }).then((data) => {
    console.log(data);
  });

  //Save
  //query.save().then(() => {
    //Update
    //query.update({
    //  firstName: 'Nguyen Thanh',
    //  lastName: 'Tu DJ',
    //  email: 'thanhtu.dev@gmail.com'
    //});

    //Delete
    // User.destroy({
    //   where: {
    //     email: 'thanhtu.dev@gmail.com'
    //   }
    // });
  //});

  //Delete
  // User.destroy({
  //   where: {
  //     email: 'thanhtu.dev@gmail.com'
  //   }
  // });
});

export default Connect;
