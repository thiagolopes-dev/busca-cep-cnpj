export interface CNPJData {
    uf: string;
    cep: string;
    qsa: QSA[];
    cnpj: string;
    pais: string;
    email: string | null;
    porte: string;
    bairro: string;
    numero: string;
    ddd_fax: string;
    municipio: string;
    logradouro: string;
    cnae_fiscal: number;
    codigo_pais: number;
    complemento: string;
    codigo_porte: number;
    razao_social: string;
    nome_fantasia: string;
    capital_social: number;
    ddd_telefone_1: string;
    ddd_telefone_2: string;
    opcao_pelo_mei: boolean;
    descricao_porte: string;
    codigo_municipio: number;
    cnaes_secundarios: CNAESecundario[]; // Aqui definimos a propriedade cnaes_secundarios
    natureza_juridica: string;
    situacao_especial: string;
    opcao_pelo_simples: boolean;
    situacao_cadastral: number;
    data_opcao_pelo_mei: string | null;
    data_exclusao_do_mei: string | null;
    cnae_fiscal_descricao: string;
    codigo_municipio_ibge: number;
    data_inicio_atividade: string;
    data_situacao_especial: string | null;
    data_opcao_pelo_simples: string;
    data_situacao_cadastral: string;
    nome_cidade_no_exterior: string;
    codigo_natureza_juridica: number;
    data_exclusao_do_simples: string | null;
    motivo_situacao_cadastral: number;
    ente_federativo_responsavel: string;
    identificador_matriz_filial: number;
    qualificacao_do_responsavel: number;
    descricao_situacao_cadastral: string;
    descricao_tipo_de_logradouro: string;
    descricao_motivo_situacao_cadastral: string;
    descricao_identificador_matriz_filial: string;
  }
  
  export interface CNAESecundario {
    codigo: number;
    descricao: string;
  }
  
  export interface QSA {
    pais: string | null;
    nome_socio: string;
    codigo_pais: number | null;
    faixa_etaria: string;
    cnpj_cpf_do_socio: string;
    qualificacao_socio: string;
    codigo_faixa_etaria: number;
    data_entrada_sociedade: string;
    identificador_de_socio: number;
    cpf_representante_legal: string;
    nome_representante_legal: string;
    codigo_qualificacao_socio: number;
    qualificacao_representante_legal: string;
    codigo_qualificacao_representante_legal: number;
  }