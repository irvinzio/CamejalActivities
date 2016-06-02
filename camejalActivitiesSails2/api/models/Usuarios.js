/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'camejalMySQL',
  tableName: 'usuario',
  autoCreatedAt: false,
  autoUpdatedAt: false, 
  attributes: {
    id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
    nombres:{
       type: 'string',
       size: 45,
       required: true
    },
    apellido_paterno:{
       type: 'string',
       size: 45,
       required: true
    },
    apellido_materno:{
       type: 'string',
       size: 45,
       required: true
    },
    correo:{
       type: 'string',
       size: 100,
       required: true
    },
    password:{
       type: 'string',
       size: 100,
       required: true
    },
    rol:{
       type: 'string',
       size: 1,
       enum: ['c', 'a'],
       defaultsTo: 'c',
       required: true
    }
  }
};


