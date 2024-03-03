module.exports = class User {
  constructor() {
    this.nome = '';
    this.login = '';
    this.senha = '';
  }

  static login(login, senha) {
    return login === 'nobredev' && senha === '0357';
  }

  static todos() {
    return [
      { nome: 'Franciel', login: 'franciel', senha: '1234' },
      { nome: 'José', login: 'jose', senha: '1234' },
      { nome: 'Maria', login: 'maria', senha: '1234' },
    ];
  }
};
