module.exports = () => {
    const controller = {};
  
    controller.hello = (req, res) => res.status(200).json({'message':'conectado com sucesso!'});
  
    return controller;
  }