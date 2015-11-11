/**
* Ciudades.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMySQL',
  tableName: 'ciudad',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id:{
        type: 'integer',
        primaryKey: true, 
        autoIncrement: true
    },
    nombre:{
       type: 'nombre',
       size: 45,
       required: true
    },
    estado_id:{
       model: 'Estados'
    }
  }
};

