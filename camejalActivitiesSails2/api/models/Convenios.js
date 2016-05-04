/**
* Convenios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMongo',
  tableName: 'convenio',
  autoCreatedAt: true,
  autoUpdatedAt: false, 
  attributes: {
    nombre:{
       type: 'string',
       size: 45,
       required: true
    },
    createdAt:{
       type: 'datetime',
       defaultsTo: function (){ return new Date(); },
       columnName: 'fecha',
       required: true
    },
    autoridad:{
       type: 'string',
       size: 45,
       required: true
    },
    institucion_id:{
       model: 'Instituciones'
    }
  }
};

