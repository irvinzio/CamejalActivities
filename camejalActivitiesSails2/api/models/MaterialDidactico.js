/**
* MaterialDidactico.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMySQL',
  tableName: 'material_didactico',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
    tipo:{
       type: 'string',
       size: 45,
       required: true
    }/*,
    // Add a reference to material Evento
    materiales: {
      model: 'materialEvento'
    }
    */
  }
};

