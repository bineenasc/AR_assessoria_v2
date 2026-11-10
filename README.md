# AR Assessoria Cerimonial - Site V2 (Astro, estático, Cloudflare Pages)

Landing page estática (SSG). Esta é a **versão 2**, independente da versão já publicada.

## Requisitos
- Node.js **24.22.2** (arquivo `.node-version`) e npm
- VS Code (recomendado: extensão "Astro")

## Rodar no Windows
```powershell
npm.cmd install        # 1ª vez: baixa dependências e CRIA o package-lock.json
npm.cmd run dev        # http://localhost:4321 (atualiza ao salvar)
npm.cmd run build      # gera a pasta dist/
npm.cmd run preview    # serve o dist/ (rode o build antes)
```
> O `package-lock.json` não veio no ZIP (foi gerado sem acesso ao npm). Depois do primeiro `npm.cmd install`
> ele aparece na pasta: **faça commit dele** junto com o resto.

## Onde editar
| O quê | Onde |
|---|---|
| Textos, WhatsApp, serviços, depoimentos, roteiro, FAQ | `src/data/site.ts` |
| **Endereço público do site** (canonical, sitemap, robots, Open Graph) | `site.config.mjs` (ou variável `SITE_URL` na Cloudflare) |
| Fotos | `src/assets/images/` (nomes em `LEIA-ME.txt`; o Astro otimiza sozinho) |
| Logos e imagem de compartilhamento | `public/images/` |
| Cores, fontes, efeitos dourados | `src/styles/global.css` |

## Estrutura
```
src/components/  src/layouts/  src/pages/  src/styles/  src/data/  src/assets/images/
public/images/  public/_headers  astro.config.mjs  site.config.mjs  package.json  .node-version
```

## GitHub
```powershell
git init
git add .
git commit -m "Site V2"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```
Use um **repositório novo** (ou uma branch separada) para não afetar a versão publicada.

## Cloudflare Pages (novo projeto, separado do atual)
Workers & Pages > Create > Pages > Connect to Git:
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- (Opcional) Variável `SITE_URL` = endereço final do projeto, ex. `https://nome-do-projeto.pages.dev`

Se o log de build reclamar da versão do Node, defina a variável `NODE_VERSION` com `24` no painel.
