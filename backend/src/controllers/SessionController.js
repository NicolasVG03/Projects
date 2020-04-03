const connection = require('../database/connection');

module.exports = {
  
  async create(request, response) {
    const { id } = request.body;
    
    const funcionario = await connection('funcionario').where('id_funcionario', id).select('nome').first();
    
    if(!funcionario){
      return response.status(400).json({ error: 'Nenhum fumcionário com esse id'});
    }
    
    return response.json(funcionario)
  }
};