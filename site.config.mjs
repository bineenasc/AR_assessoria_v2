// ENDEREÇO OFICIAL DA AR ASSESSORIA CERIMONIAL
// Versão definitiva do site.

const DEFAULT_URL = 'https://arcerimonial.pages.dev';

export const SITE_URL = (
    process.env.SITE_URL || DEFAULT_URL
).replace(/\/+$/, '');