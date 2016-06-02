/**
* Eventos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'camejalMySQL',
  tableName: 'evento',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
    nombre:{
       type: 'string',
       size: 45,
       required: true
    },
    tema:{
       type: 'text',
       required: true
    },
    numero_asistentes:{
       type: 'integer',
       required: true
    },
    ciudad_id:{
       model: 'Ciudades'
    },
    institucion_id:{
       model: 'Instituciones'
    },
    funcionario_id:{
       model: 'Funcionarios'
    },
    participacion_id:{
       model: 'TipoParticipacion'
    },
    tipo_evento_id:{
       model: 'TipoEvento'
    },
    fecha:{
       type: 'datetime',
       defaultsTo: function (){ return new Date(); },
       columnName: 'fecha',
       required: true
    }/*,
    MaterialEventos :{
      collection : 'MaterialEvento',
      via  : 'evento_id'
    }*/ 
  }
};

