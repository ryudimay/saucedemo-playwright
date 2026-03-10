# e2e-playwright-ts

Projeto de automação de testes E2E com [Playwright](https://playwright.dev/) e TypeScript.

---

## 🧪 Testes disponíveis

| Arquivo | Site | Fluxo |
|---|---|---|
| `saucedemo-cart.ts` | SauceDemo | Login → Adicionar ao carrinho → Remover → Logout |

---

## 🛠️ Tecnologias

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js

---

## 🚀 Como rodar

**1. Instalar dependências**
```bash
npm install
npx playwright install chromium
```

**2. Rodar todos os testes**
```bash
npx playwright test
```

**3. Rodar um teste específico**
```bash
npx playwright test saucedemo-cart.ts
```

**4. Ver relatório após execução**
```bash
npx playwright show-report
```

---

## 🔐 Credenciais de teste (SauceDemo)

| Usuário | Senha |
|---|---|
| `standard_user` | `secret_sauce` |

> Credenciais públicas fornecidas pelo próprio site para fins de teste.

---

## 📁 Estrutura do projeto

```
e2e-playwright-ts/
├── saucedemo-cart.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```
