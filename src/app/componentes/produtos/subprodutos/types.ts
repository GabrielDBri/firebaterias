// types.ts
export interface Produto {
    codigo: string;
    imagem: string;
    dimensoes: string;
    capacidade_c100?: string;  // Opcional
    capacidade_c20: string;
    capacidade_c10?: string;    // Opcional
    garantia: string;
    terminal: string;
    peso: string;
    manutencao: string;
    modeloId: string;
  }
  
  export interface Modelo {
    id: string;
    titulo: string;
    descricao: string;
    imagem: string;
    produtos: Produto[];
  }
  
  export interface Bateria {
    tipo: string;
    modelos: Modelo[];
  }
  
  export interface ProdutosData {
    baterias: Bateria[];
  }
  