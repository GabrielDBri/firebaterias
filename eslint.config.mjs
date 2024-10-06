{
  "files"; ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  "parser"; "@typescript-eslint/parser",  // Use o parser para arquivos TypeScript
  "languageOptions"; {
    "globals"; {
      "browser"; true
    }
  };
  "extends"; [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Regras recomendadas para TypeScript
    "plugin:react/recommended"
  ],
  "rules"; {
    "react/react-in-jsx-scope": "off",  // Desabilita a regra de React em escopo
    "@typescript-eslint/semi": ["error", "always"], // Exemplo de regra para pontos e vírgula em TypeScript
    "@typescript-eslint/no-unused-vars": ["warn"]  // Aviso para variáveis não utilizadas
  };
  "settings"; {
    "react"; {
      "version"; "detect" // Detecta automaticamente a versão do React
    }
  }
}
