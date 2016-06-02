/**
* Funcionarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'camejalMySQL',
  tableName: 'funcionario',
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
    cargo_id:{
       model: 'Cargos'
    }
  }
};

