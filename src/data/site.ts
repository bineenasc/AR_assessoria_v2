// Todo o conteúdo do site sai deste arquivo. (O endereço público fica em /site.config.mjs)
export const site = {
  name: 'AR Assessoria Cerimonial',
  description: 'Assessoria e cerimonial para casamentos, festas e debutantes em Nova Resende (MG) e região. Organização completa para você viver cada momento.',
  city: 'Nova Resende', state: 'MG',
  owners: 'Amanda e Regina',
  instagram: 'https://www.instagram.com/ar_assessoriacerimonial/',
  instagramHandle: '@ar_assessoriacerimonial',
  whatsapp: '5535999234761',
  phoneDisplay: '(35) 99923-4761',
  whatsappMessage: 'Olá! Vi o site da AR Assessoria Cerimonial e gostaria de agendar uma conversa.',
};
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const ticker = ['Casamentos', 'Debutantes', 'Festas', 'Aniversários', 'Assessoria', 'Cerimonial'];

export const roteiro = {
  title: 'Roteiro do dia',
  note: 'Cada minuto combinado, cada fornecedor no seu horário.',
  items: [
    { time: '15h00', label: 'Equipe no local, última conferência' },
    { time: '16h30', label: 'Entrada dos convidados' },
    { time: '17h00', label: 'Cerimônia' },
    { time: '18h30', label: 'Recepção e jantar' },
    { time: '20h00', label: 'Primeira dança' },
  ],
};

export const pillars = [
  { title: 'Escuta', text: 'Começamos entendendo sua história, seu estilo e a emoção que você quer sentir.' },
  { title: 'Planejamento', text: 'Cronograma, checklist e fornecedores alinhados antes de qualquer imprevisto.' },
  { title: 'Presença', text: 'No grande dia, a equipe está no local do primeiro ao último minuto.' },
];

// Revise: são sugestões de como a AR pode apresentar os serviços.
export const services = [
  { tag: 'Do começo ao fim', title: 'Assessoria completa', photo: 'servico-completa', text: 'Acompanhamento integral, do primeiro planejamento até o último brinde.',
    list: ['Cronograma e checklist completos', 'Alinhamento com cada fornecedor', 'Reuniões de acompanhamento', 'Equipe presente no evento'] },
  { tag: 'Já começou?', title: 'Assessoria parcial', photo: 'servico-parcial', text: 'Para quem já iniciou o planejamento e precisa de apoio para organizar a reta final.',
    list: ['Revisão do que já foi contratado', 'Ajuste do cronograma', 'Suporte até o grande dia', 'Coordenação no dia'] },
  { tag: 'No grande dia', title: 'Cerimonial do dia', photo: 'servico-dia', text: 'Você contratou tudo e quer tranquilidade: assumimos a coordenação do evento.',
    list: ['Reunião de alinhamento prévia', 'Roteiro executivo do evento', 'Coordenação de fornecedores', 'Equipe do início ao fim'] },
  { tag: 'Festas sociais', title: 'Debutantes e festas', photo: 'servico-festas', text: 'Debutantes, aniversários e comemorações com cada momento no horário certo.',
    list: ['Protocolo, valsa e homenagens', 'Organização de convidados', 'Apoio à família no dia', 'Cronograma de cada momento'] },
];

export const steps = [
  { title: 'Primeiro contato', text: 'Conversamos sobre o seu evento, o estilo e o que é importante para você.' },
  { title: 'Planejamento', text: 'Organizamos cronograma, fornecedores e cada detalhe.' },
  { title: 'Alinhamento final', text: 'Ensaio, confirmação de horários e um roteiro que todos seguem.' },
  { title: 'O grande dia', text: 'Coordenamos tudo no local para você aproveitar sem preocupações.' },
];

export const gallery = [
  { name: 'Gabriel e Gisele', kind: 'Casamento', file: 'gabriel-gisele', ratio: '4/5' },
  { name: 'Bruno e Aline', kind: 'Casamento', file: 'bruno-aline', ratio: '4/5' },
  { name: 'Kauanny e Mateus', kind: 'Casamento', file: 'kauanny-mateus', ratio: '4/5' },
  { name: 'Heloísa', kind: 'Debutante', file: 'heloisa-debutante', ratio: '4/5' },
  { name: 'Amanda e Marcos', kind: 'Casamento', file: 'amanda-marcos', ratio: '4/5' },
  { name: 'Maria Clara', kind: 'Aniversário de 10 anos', file: 'maria-clara-10-anos', ratio: '4/5' },
  { name: 'Vitória e Elizandro', kind: 'Casamento', file: 'vitoria-elizandro', ratio: '4/5' },
];

export const testimonials = [
  { text: 'Vocês foram incríveis na preparação do nosso casamento. Cada dúvida nossa respondida colaborou muito para que ficasse tudo perfeito. No dia, foram muito dedicadas, atenciosas e precisas.', author: 'Amanda e Marcos', kind: 'Casamento', instagram: 'amandacmadeira' },
  { text: 'Fiquei super tranquila no dia da cerimônia por saber que vocês estariam lá cuidando de tudo. Nos auxiliaram do começo ao fim e saiu tudo perfeito.', author: 'Kauanny e Mateus', kind: 'Casamento', instagram: 'kauanny_terra00' },
  { text: 'Muito obrigada por todo carinho, cuidado e dedicação no nosso casamento. Vocês foram essenciais para que tudo acontecesse tão lindo!', author: 'Aline e Bruno', kind: 'Casamento', instagram: 'alinefelis_' },
  { text: 'Sem vocês nada disso seria possível. Vocês foram excepcionais! Indico de olhos fechados.', author: 'Letícia e Erik', kind: 'Casamento', instagram: 'leticia_mariiaaa' },
  { text: 'Um agradecimento especial às cerimonialistas, que fizeram tudo acontecer com tanto carinho, organização e dedicação. Cada detalhe ficou lindo!', author: 'Família da Heloísa', kind: 'Debutante', instagram: 'heloisa.v2011' },
  { text: 'Nunca tinha conseguido participar de um aniversário da minha filha sem estar preocupada. Com elas à frente de tudo, consegui aproveitar. São excepcionais!', author: 'Dani, mãe da Maria Clara', kind: 'Aniversário de 10 anos', instagram: 'dani.baquiao' },
];

export const faqs = [
  { q: 'Qual a diferença entre assessoria e cerimonial?', a: 'A assessoria acompanha o planejamento nos meses anteriores. O cerimonial coordena o dia do evento. Você pode contratar só o cerimonial ou o pacote completo.' },
  { q: 'Vocês atendem fora de Nova Resende?', a: 'Sim. Atuamos em Nova Resende e região. Fale com a gente informando a cidade e a data.' },
  { q: 'Com quanto tempo de antecedência devo contratar?', a: 'Para casamentos, o ideal é a partir de 6 a 12 meses antes. Festas e debutantes podem ser organizadas em menos tempo, conforme a agenda.' },
  { q: 'Como peço um orçamento?', a: 'Chame pelo WhatsApp ou Instagram com o tipo de evento, data prevista, cidade e número aproximado de convidados.' },
];

export const instagramPosts = [
  {
    image: 'insta-1',
    url: 'https://www.instagram.com/p/DYCn_pXkz6H/'
  },
  {
    image: 'insta-2',
    url: 'https://www.instagram.com/p/DfUeIU2zS5u/'
  },
  {
    image: 'insta-3',
    url: 'https://www.instagram.com/p/DfUX2SoTMWy/'
  },
  {
    image: 'insta-4',
    url: 'https://www.instagram.com/p/DfUT5qtz9H3/'
  },
  {
    image: 'insta-5',
    url: 'https://www.instagram.com/p/DfUSPPIzMh7/'
  },
  {
    image: 'insta-6',
    url: 'https://www.instagram.com/p/DKm-6EaROrm/'
  }
];