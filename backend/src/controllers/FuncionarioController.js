const connection = require('../database/connection');

module.exports = {
  
  async create(request, response) {
    const {nome, telefone, contato_emergencia, CPF, RG, data_nascimento, senha, email} = request.body;
  
    await connection('funcionario').insert({
      nome, 
      telefone, 
      contato_emergencia, 
      CPF, 
      RG, 
      data_nascimento, 
      senha, 
      email
    })
    return response.json({nome, telefone, contato_emergencia, CPF, RG, data_nascimento, senha, email});
  },
  
  async index(request, response){
    const funcionarios = await connection('funcionario').select('*');
  
  return response.json(funcionarios);
  }
  
};