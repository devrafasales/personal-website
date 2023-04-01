module.exports = {
  email: 'devrafasales@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/devrafasales',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/devrafasales',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/devrafasales',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/RP2XB32ZHOVDI1',
    },
  ],

  navLinks: [
    {
      name: 'Sobre',
      url: '/#about',
    },
    {
      name: 'Experiência',
      url: '/#skills',
    },
    {
      name: 'Projetos',
      url: '/#projects',
    },
    {
      name: 'Contato',
      url: '/#contact',
    },
  ],

  colors: {
    secondary: '#39bded',
    primary: '#161421',
    darkPrimary: '#0e0c10',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
