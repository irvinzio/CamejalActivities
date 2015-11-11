/**
* Instituciones.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMySQL',
  tableName: 'institucion',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id:{
        type: 'integer',
        primaryKey: true, 
        autoIncrement: true
    },
    nombre:{
       type: 'string',
       size: 45,
       required: true
    }
  }
};

