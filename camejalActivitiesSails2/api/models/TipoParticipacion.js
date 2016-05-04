/**
* TipoParticipacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMongo',
  tableName: 'participacion',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    tipo:{
       type: 'string',
       size: 45,
       required: true
    }
  }
};

