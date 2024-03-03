const db = require('../config/db');
module.exports = class User {
  constructor() {
    this.nome = '';
    this.login = '';
    this.senha = '';
  }

  static login(login, senha) {
    return login === 'nobredev' && senha === '0357';
  }

  static async todos() {
    return await db.exec(
      'SELECT nome, login, senha from users order by id desc limit 100',
    );
  }
};
