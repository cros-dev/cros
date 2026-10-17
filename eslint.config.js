import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const cleanCodePlugin = {
  rules: {
    "no-narrative-comments": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Proibe comentarios narrativos de linha; permite apenas blocos TSDoc, diretivas de compilador/linter e citacoes formais PQA/Demanda.",
        },
        messages: {
          noNarrativeComments:
            "Comentarios narrativos no codigo sao proibidos pelas diretrizes de Clean Code. O codigo deve ser autoexplicativo.",
        },
      },
      create(context) {
        const sourceCode = context.sourceCode;
        return {
          Program() {
            const comments = sourceCode.getAllComments();
            for (const comment of comments) {
              const text = comment.value.trim();
              if (comment.type === "Block" && comment.value.startsWith("*")) {
                continue;
              }
              if (
                text.startsWith("eslint-disable") ||
                text.startsWith("@ts-") ||
                text.startsWith("vite-ignore")
              ) {
                continue;
              }
              if (text.startsWith("PQA-") || text.startsWith("Demanda #")) {
                continue;
              }
              context.report({
                loc: comment.loc,
                messageId: "noNarrativeComments",
              });
            }
          },
        };
      },
    },
  },
};

export default tseslint.config(
  {
    ignores: ["build/", ".react-router/", "node_modules/", "**/.*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "clean-code": cleanCodePlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-inline-comments": "error",
      "spaced-comment": ["error", "always", { markers: ["/"] }],
      "clean-code/no-narrative-comments": "error",
      "max-depth": ["error", 4],
      "max-params": ["error", 4],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      complexity: ["error", 15],
      "max-statements": ["error", 30],
    },
  },
  {
    files: ["src/**/*.tsx"],
    rules: {
      complexity: ["error", 40],
      "max-statements": ["error", 55],
    },
  },
  {
    files: ["src/**/*.test.{ts,tsx}"],
    rules: {
      complexity: "off",
      "max-statements": "off",
    },
  },
);
