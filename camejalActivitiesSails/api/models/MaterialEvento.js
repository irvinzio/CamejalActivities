/**
* MaterialEvento.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMySQL',
  tableName: 'material_evento',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id:{
        type: 'integer',
        primaryKey: true, 
        autoIncrement: true
    },
    cantidad:{
       type: 'integer',
       required: true
    },
    material_didactico_id:{
       model: 'MaterialDidactico'
    },
    evento_id:{
       model: 'Eventos'
    }
  }
};

