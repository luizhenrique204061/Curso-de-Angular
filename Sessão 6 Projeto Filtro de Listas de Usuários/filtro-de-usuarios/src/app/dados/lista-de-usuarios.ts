import { Endereco } from "../classes/endereco";
import { StatusUsuario } from "../classes/status-usuario";
import { Usuario } from "../classes/usuario";

export const ListaDeUsuariosDaAplicacao: Usuario[] = [
    new Usuario(
        "João Silva",
        "joao.silva@example.com",
        "senha-segura-123",
        30,
        new Endereco("Rua das Flores", 42, "São Paulo", "SP", "Brasil"),
        "11912345678",
        true,
        "Desenvolvedor",
        "2023-08-01T09:00:00.000Z",
        new StatusUsuario(true, true, true, "2023-08-02T09:00:00.000Z")
    ),
    new Usuario(
        "Maria Fernandes",
        "maria.fernandes@example.com",
        "Maria123",
        25,
        new Endereco("Avenida do Sol", 100, "Rio de Janeiro", "RJ", "Brasil"),
        "21956789101",
        false,
        "Designer",
        "2023-08-05T09:00:00.000Z",
        new StatusUsuario(false, false, false, "2023-08-06T09:00:00.000Z")
    ),
    new Usuario(
        "Carlos Pereira",
        "carlos.pereira@example.com",
        "Carlos456",
        40,
        new Endereco("Praça da Liberdade", 5, "Belo Horizonte", "MG", "Brasil"),
        "31911121314",
        true,
        "Gerente",
        "2023-08-10T09:00:00.000Z",
        new StatusUsuario(false, true, false, "2023-08-12T09:00:00.000Z")
    ),
    new Usuario(
        "Ana Sousa",
        "ana.sousa@example.com",
        "Ana789",
        22,
        new Endereco("Rua das Pedras", 80, "Porto Alegre", "RS", "Brasil"),
        "51915161718",
        false,
        "Analista",
        "2023-08-15T09:00:00.000Z",
        new StatusUsuario(true, false, true, "2023-08-18T09:00:00.000Z")
    ),
    new Usuario(
        "Pedro Mendes",
        "pedro.mendes@example.com",
        "Pedro012",
        35,
        new Endereco("Boulevard Central", 60, "Recife", "PE", "Brasil"),
        "81919202122",
        true,
        "Diretor",
        "2023-08-20T09:00:00.000Z",
        new StatusUsuario(false, true, false, "2023-08-25T09:00:00.000Z")
    )
];