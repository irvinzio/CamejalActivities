/**
* Cargos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'camejalMySQL',
    tableName: 'cargo',
    autoCreatedAt: false,
    autoUpdatedAt: false,    
    attributes: {
        id:{
            type: 'integer',
            primaryKey: true, 
            autoIncrement: true
        },
        tipo:{
           type: 'string',
           size: 45,
           required: true
        }
    }
};

