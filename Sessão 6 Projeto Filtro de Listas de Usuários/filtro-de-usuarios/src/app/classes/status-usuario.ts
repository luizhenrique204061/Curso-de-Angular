export class StatusUsuario {
  online: boolean;
  verificado: boolean;
  assinaturaAtiva: boolean;
  ultimoAcesso: string;

  constructor(online: boolean, verificado: boolean, assinaturaAtiva: boolean, ultimoAcesso: string) {
    this.online = online;
    this.verificado = verificado;
    this.assinaturaAtiva = assinaturaAtiva;
    this.ultimoAcesso = ultimoAcesso;
  }
}