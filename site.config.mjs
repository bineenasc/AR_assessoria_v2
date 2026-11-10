// ENDEREÇO PÚBLICO DO SITE (único lugar para alterar).
// Troque pelo endereço definitivo *.pages.dev (ou domínio próprio) quando o projeto for criado na Cloudflare.
// Também pode ser definido pela variável de ambiente SITE_URL no painel da Cloudflare.
// Importante: não use o endereço da versão atualmente publicada.
const DEFAULT_URL = 'https://ar-cerimonial-v2.pages.dev';

export const SITE_URL = (process.env.SITE_URL || DEFAULT_URL).replace(/\/+$/, '');
