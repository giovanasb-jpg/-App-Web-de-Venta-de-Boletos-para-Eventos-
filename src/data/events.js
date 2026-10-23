const ticketProData = {
  categories: [
    { name: 'Películas', icon: '🎬' },
    { name: 'Teatro', icon: '🎭' },
    { name: 'Conciertos', icon: '🎵' },
    { name: 'Deportes', icon: '⚽' },
    { name: 'Comedia', icon: '🎤' },
    { name: 'Stand Up', icon: '✨' },
    { name: 'Arte y Cultura', icon: '🎨' },
    { name: 'Eventos Especiales', icon: '🎟️' }
  ],
  posterEvents: [
    {
      title: 'Voces del desierto',
      genre: 'Concierto',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Luna en vivo',
      genre: 'Festival',
      image:
        'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Teatro nocturno',
      genre: 'Teatro',
      image:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Clásicos en escena',
      genre: 'Arte',
      image:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Noche de deporte',
      genre: 'Deportes',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Risas en directo',
      genre: 'Stand Up',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    }
  ],
  ticketEvents: [
    {
      category: 'Cine',
      name: 'Dune: Parte dos',
      date: '12 ago 2026',
      venue: 'Cinemex Centro Histórico',
      priceLabel: 'Precio especial',
      price: '$420 MXN',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Película',
      name: 'La caída de la ballena',
      originalTitle: 'Whalefall',
      synopsis: 'Un buzo queda atrapado dentro de una ballena y lucha por sobrevivir.',
      duration: 'Por confirmar',
      releaseDate: 'Por confirmar',
      director: 'Por confirmar',
      cast: 'Por confirmar',
      date: 'Por confirmar',
      venue: 'Cines participantes',
      priceLabel: 'Precio por confirmar',
      price: 'Por confirmar',
      posterSearchUrl:
        'https://www.google.com/search?tbm=isch&q=La+ca%C3%ADda+de+la+ballena+Whalefall',
      image:
        'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Teatro',
      name: 'La reina del espejo',
      date: '18 ago 2026',
      venue: 'Teatro Metropolitano',
      priceLabel: 'Precio medio',
      price: '$680 MXN',
      image:
        'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Concierto',
      name: 'Nocturna Live',
      date: '25 ago 2026',
      venue: 'Auditorio Nacional',
      priceLabel: 'Precio alto',
      price: '$980 MXN',
      image:
        'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Deportes',
      name: 'Liga de verano',
      date: '02 sep 2026',
      venue: 'Estadio Monumental',
      priceLabel: 'Precio especial',
      price: '$540 MXN',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Concierto',
      genre: 'Concierto',
      name: 'Morat — México 2026',
      date: '8-14 de noviembre de 2026',
      venue: 'Palacio de los Deportes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/morat-ciudad-de-mexico-08-11-2026/event/14006482BB9B7DA4',
      image: 'https://images.openai.com/static-rsc-4/iJjEuREzXGpC6I2DzrGvUBf-1XW9LL7yoN5VEs3JAPgT6miVzVyLhzUkSOdaQHLgjXtjWCcjRgByahmofT6VePrbDaTvpEkKqyT7Tf9homxcR4L7eO9AIdv5lvK2l-M7pGNkywxxdXHRSCcgAnd2hp53tTGsHDxdzunuxN0CSRU?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Concierto',
      name: 'Karol G',
      date: '13-15 de noviembre de 2026',
      venue: 'Estadio GNP Seguros, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/karol-g-viajando-por-el-mundo-ciudad-de-mexico-13-11-2026/event/1400646A812D2A08',
      image: 'https://images.openai.com/static-rsc-4/x9zHHJFHMNyotBuFZbWZ9GDrbwM_hiG6Zz9s24n2AfgFerKZwD2Qk-c0iFWcS64yQ2Ya04TUJvMwgdL7NouPPvvU6maiHthNJ6Plpv8eH0ylM062evU3eRVDORx23MsRAML5x9kt-NcymZMXFOSp9zliW1eDPIEIhI5o5L6H83Y?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Pop internacional',
      name: 'Bruno Mars',
      date: '3-8 de diciembre de 2026',
      venue: 'Estadio GNP Seguros, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/bruno-mars-the-romantic-tour-ciudad-de-mexico-03-12-2026/event/14006453B3E6C5F7',
      image: 'https://images.openai.com/static-rsc-4/Bor0ZpQ51Rpk_QSUHTMHJYaslyTWr8X0rM0O0tjyngeRJvV2qMWo6cF0eLzUxKeZl6PX5F_8NEOETYY_oAju8MqLHp7sLlJZtnELR5PnsSzGyc8SmkejIBBRr9Uq9yxt3NbfNDBGNDbzEnGA1MPdsq0ofAwz-lvON02P_sW5Rrs?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Concierto urbano',
      name: 'Omar Courtz',
      date: '28 de octubre de 2026',
      venue: 'Palacio de los Deportes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/omar-courtz-ciudad-de-mexico-28-10-2026/event/140064DEC19B99D4',
      image: 'https://images.openai.com/static-rsc-4/uxD1qwhbYmhBafsMueDsd6C69LtoGYtGQ3kdb7uYMvenEqbdHwv49UZonVdDXuvv04ij6IUUxyJl1ZVo1wAVd-jkab1zhYVQhT8L8-Ra9jR2WX3R4Qh3R-B7le6AZ8NB1dG6jOxdn5ap68anYtjdymYGbLjMqIUhw0BGNY9xYOw?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Rock',
      name: 'Fobia',
      date: '24 de octubre de 2026',
      venue: 'Palacio de los Deportes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/fobia-ciudad-de-mexico-24-10-2026/event/14006473F5266309',
      image: 'https://images.openai.com/static-rsc-4/CjDkBe8THsILAme-SW39cQMCn6HoNIrL4xVLuPFw3DNhwQriN3pyqqr6vgUyLpHm5lXr1OHAg3XBBaFrtCjTTT7OKSm7w6x9umGlWu0ymTUI7HoldTrHDPhMuEVUYQD4-MdjBKNyqEKLiCOsTBQR8VOWtOlXZh9NBktIZWdp9dg?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Cumbia',
      name: 'Los Angeles Azules — Monterrey',
      date: '23-24 de octubre de 2026',
      venue: 'Monterrey, NL',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/okcWpKL1XaeXVjKl7rvg5-F3wbV5ZJAiCvBubO4hp5PoeRACo4TjPkZcRB_CBOhaL25E35S7rMd-Mj9wv1LSnS-ZZf7llgW--VGpfmUKsFGG831k7kEcv_I3Gtek3AJCCAAz_6S6Ut0Gk0D_sE-3t-9rOEVIx0kzHrMUnZb-oPo?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Pop',
      name: 'Matisse',
      date: '23 de octubre de 2026',
      venue: 'La Maraka, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/Ri3UgLwI4yZAWLujh5Cbwi6-hvTRCXJ3JTPsHTG8fMZzUEPkCHiPef7m5uv9IUJ92BrlONFPVHRlakBJJAi4oibW9ZvGbZjSG79UQnrv5BUYpPJtcTjn0gsoRt7RQiBmQZlBtm9eS9nFdQmw3EfNLDnveAPj1ZThqCGt5NMgIIc?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Balada',
      name: 'Edith Marquez',
      date: '22 de octubre de 2026',
      venue: 'Auditorio Nacional, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/XXMIJgFD9mKMCue3vY-dQdE_s1rq4rHZlbCgPaEx4CJhrvyIz3iFya6onSDZobroEXA1wTqPWTSte__H-o-FkeslHZZNfEz09i7ogI4Q8DMDZxhyJo3jKwrbVAdUdDHi-PrYpR_poOm5Ut5WeKI8zF3qPaAhKwC6N6UFlMYdaYQ?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Pop',
      name: 'Aitana',
      date: '6 de noviembre de 2026',
      venue: 'Auditorio Nacional, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/Rh6Wazy0Bod-NERr8MhbakeNo-XpaAPMU4v2IVBS3B1mv_QV2hsdGqDhmvtWI0kpwnTb2Lfv7UF_VH4tRBDd806uUo3Gr4b6OPuKAnYXqMTVWWVArHgfhWZ7uLvm0towS3DhOtfdbEdBuk84Mr9ft6L_KbRtE5eBeenKyGEz7e0?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Concierto internacional',
      name: 'Dimash Qudaibergen',
      date: '19-20 de noviembre de 2026',
      venue: 'Palacio de los Deportes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/YR41Wknn5NJzq-W_hPl2ngCdsM_-vzGA0mi2XoytDl4Sx_p7L_Y4QSVvbCcwWYdFlWl4ZrdhwtF-rECc7G5Bt-tq0CjuIOa8pIHkO159qKfW0CqvwVkLTH6SaITam_AuBat75_xcz1jpJ3jI9TYBPjEh5SQDS9e28MnbTx3geTc?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Musica mexicana',
      name: 'Lila Downs',
      date: '1 de noviembre de 2026',
      venue: 'Auditorio Nacional, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/qaPLEl8CV29LL4-6gfzpysGM8UzeT7BYY6OqEt52RLtJ67ANEkDY5lUGBkt9uYFaaf8RKqg92OdbVD2Ap00dpoK_RqzPs_YeEbIVojQSEd3PZmX6uRp3vVghiHF3Yjr_iSLC6y_iO_EST_8Vc8YdV3XUbDEOBl31r0__LQj9ITA?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Cumbia',
      name: 'Los Angeles Azules — CDMX',
      date: '20-21 de noviembre de 2026',
      venue: 'Auditorio Nacional, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/BC6XnCQvriMo4o9biazDyONlhCpeDKvrj2EF-uKwTLiK6mqwt8XRSiLfnR_1-WNY1pe3QKB6JMyilDpNRbyhlCpBiOYwWXWOTX9Kf164rL-5UE3PqOcA92kWqIgDUbSl9EeAtEPpeyCRD_YwhCsD1r3CTVsX1LEROKnQ5QiVoiU?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Pop',
      name: 'Aitana — Guadalajara',
      date: '30 de octubre de 2026',
      venue: 'Auditorio Telmex, Zapopan',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/87FQjmuI2vLLwWiaaxjxhGQ9qdKjtXKbNjEexXilg2ousXi-eEm4S1L5NDnK08cCRMT5xnS8Sn624wMoXjsFigzFl_mtL2kRFQLOV9mTojOUweyBcsd7sLsXtt-xlEthGAOdjUL_2ZiKz8MUn-lHRbQLQr9wQh_F8gOdGQWOXs8?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Indie rock',
      name: 'Love of Lesbian',
      date: '24 de noviembre de 2026',
      venue: 'Teatro Metropólitan, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/p-FVY9SmvMKJhbsstZy_XTd3qF9h0drElmj29F6BtTZIpHifW6mtYnWtlq1SnhZclaQ0dq6MnREyVoung8rFpsGhKEHKIyDW1l4NpJMGF_gjy0HwOGCSAzQWt-WS6g6oRNMuctVi1Dz5CShBGDsIAuPeiHZdCiLNPsVC3W3TBL4?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Musica alternativa',
      name: 'La Bruja de Texcoco',
      date: '28 de noviembre de 2026',
      venue: 'Teatro de la Ciudad Esperanza Iris, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/ftDXxOukM3Ds3lOH_SayTNxCPPcSeVwbFjGen7mHPlO_W3nCTJhUJ1yIHoy-LoJrM5yBP4JHYqNxfk9JFfPAtFwTwZv4zXuFAU6Fa56aKB4BSqEZk6bSQdcJcSfObCfQf3D8BfW1yUy45eu2ACO58aOn2cHIOGjAUV8DpNEJ1O4?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Musica regional',
      name: 'Eslabon Armado',
      date: '2 de diciembre de 2026',
      venue: 'Teatro Metropólitan, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/tHZTSzy_bR4QEYeWSjzkLMaRIVR5OSi5ZKz8QP_lJcK9A_ZM3NudMVZnascmjX6yD2x4oGJcJYsYfCdMZbbClx5-BZMNHfW0OPCcsn8gYsiW9fVaGi2o8r0mN6GKdrODh2d3l0-tKeoyMflvLJ3hjmJCgJazLLPSS-4nesFHmzY?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Banda',
      name: 'Banda Machos',
      date: '5 de diciembre de 2026',
      venue: 'Plaza de Toros México, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/S4ReMvHcEyFmbL00CHsSZzvvEH3Cqw3S6sjZ73dg6V_B6E_k7v1eRNuS6NXzYjITRz0rYr8b7cOtXGkbD3wsWGIenGy-9E8r2rXWEXMWD9MaZz5Mgl1JBtLaB8VS64aNqSx_DMomjqPyw3j8IhfJoKGMBNro54Q_qiEYT1W4Ohk?purpose=inline'
    },
    {
      category: 'Concierto',
      genre: 'Pop internacional',
      name: 'Bruno Mars — fechas de diciembre',
      date: '3-8 de diciembre de 2026',
      venue: 'CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/FMys7h0NwXz2EXIQLizLFB-yNlbL0rcGWAMcH7_g2Y2ZcbQrMTQSRWXnIG4aaQwJtX9r9sdohigzysLXLTSyqis0Sx_AI-jW08e9uDOkJicsa2FNZMVnHKyY236xr_7TtKaG2GhSFYJ8y4E2mk4yMownkTQmAe60YvJJr0lx_x8?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Musical',
      name: 'El Rey León',
      date: '22 de octubre de 2026',
      venue: 'Teatro Telcel, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/el-rey-leon-mexico-22-10-2026/event/3D0064F6847213F0',
      image: 'https://images.openai.com/static-rsc-4/Wh2BHD8oC-cCCreTH_PoKBrWOY0vmmEGi3oyTwg0Bm34eu1jSr9EbUsMKNESVrnWLupVxIgFS12Tq-I11be1-e7JzXGV_HUV4APTmj36mRBW0_hhYc8QIlyN6_y5BPC032lO3As8Sf0O9y5xabBCiTT4rWKKzAlxnBxtf8eQAO4?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Teatro musical',
      name: 'Mentidrags',
      date: '22 de octubre de 2026',
      venue: 'Teatro Aldama, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/s5cFBVqEJUolniKM5Blnz0ukJhfq7ogmAqJsvQcIpUBcIRaGwRjU9wWjpZUvXYu9h201oTX2Rtv93UCA0-TXTm0hG3MRoVaSV13YKBsJ2NTPIibq5Ik3K5RCxgBvR4hH_TozknxvEO0jJY-lssgTiRLRNyqZnZIdvztS3TZgvZE?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Musical',
      name: 'Mentiras, el Musical',
      date: '23 de octubre de 2026',
      venue: 'Teatro Aldama, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/mentiras-el-musical-mexico-23-10-2026/event/3D006506B7B84FD8',
      image: 'https://images.openai.com/static-rsc-4/CB3W8fCJ6ThXFckpUH525cgTymkiXSfOYhqLAi-YBnBjehrJruzOe1jHNaRCSn9fYQmSmtxzx-8SpKxRURtQoar3YBJtxnQc5HwxtMJyWZWibMUkNmtSCwCXcrtxr5t9LgvZhQhaKeEhbYxvgGEXYqosBgcqnCGK5PkkYla9Xj0?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Teatro de suspenso',
      name: 'La Dama de Negro',
      date: '23 de octubre de 2026',
      venue: 'Teatro 11 de Julio, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/gWGhIPHwwLP3TiR3aedYsbkRKcSbXUTw1apaF_D8CBjJdtF0jasroaQFjgDIqWrxIBWPFiegVsaro3bouEWQwOum5i-2HzwQqb1OT4YD8m3eHYjQoOLkz-sLbTn5m4wUoxS75WE9a8Rz4D4VQDDsR49JGoYUEOOLst35QJMKNhM?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Teatro musical',
      name: 'Perfume de Gardenia',
      date: '23 de octubre de 2026',
      venue: 'Teatro San Rafael, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/km1PHe5hDG4PsL5_IvxVUfMcQoMAluWGplXyBIkLuAWj2KPHz3E26-y4Rmz1CeNEO6oQR1hXRBAB65xE9NO87KE43cEDPk0Ka6_DRnMRcXTzqHVqE8S-VDeyyOUIOZ0mD2vRkHO8prtvGyxgx1Q2HThl2C0f65djh2xBbiJQb0w?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Familiar',
      name: 'Coco, el Musical',
      date: '29 de octubre de 2026',
      venue: 'Teatro José María Morelos, Morelia',
      priceLabel: 'Precio desde',
      price: '$250 MXN',
      ticketUrl: 'https://accessblack.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/xFgGa8hFHgpW-zGzaUKrG_XRPzOj4JGeYMCgs4mS4z4XJwNETwvG5DT6KWgoZuyB7x-RFUiUk0We-rZiRsHo6CdNS9EJq-0To-4lZloH95PNcu30wRDdUqVdst08EmcXX9QwFFSdO1JBqqnERr_hfIBQKNs8EWZdniFfV8vom9E?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Teatro',
      name: 'La Llorona en Morelia',
      date: '29 de octubre de 2026',
      venue: 'Teatro José María Morelos, Morelia',
      priceLabel: 'Precio desde',
      price: '$450 MXN',
      ticketUrl: 'https://accessblack.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/KnWMC8YcR4mVIBp0tf2g61hsI6JDOvE_NDyy-sxF3FGyiLKDlZKa3mU44zXCa09TYhc68uGWZxLypsiXO13uFrPMp62nn5s1LhQ-gUfzgdW8ownz7J-8Xm84YHHxkMLWe4WFNHqLKsCd4QHYLoDbaoImnyrGeZPi3M8dnlNiLGk?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Teatro',
      name: 'Los monólogos de la vagina',
      date: '20 de noviembre de 2026',
      venue: 'Lagos de Moreno, Jalisco',
      priceLabel: 'Precio desde',
      price: '$400 MXN',
      ticketUrl: 'https://accessblack.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/d8lDsEtWsIGWlgJc2kAM5AI4OkCkDGqORqkHuw1PgpgCKNdPJtjjl5Tky-hXbU3zqRXiDwuXHDr20FnOE1lKI5LWaHx-13t_FmK124_ipP-aOFdc9deiSOwju1Edw84J3IyIukmpZG4qOO9jL4RWCezRCIMd5EEgNWUlar68McQ?purpose=inline'
    },
    {
      category: 'Teatro',
      genre: 'Espectaculo teatral',
      name: "Slava's Snowshow",
      date: 'Funciones de octubre de 2026',
      venue: 'Teatro Hidalgo, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/z2Xk60YcoEviXTuW6ZYMsoCLE43KrdTJWkjSaApmOamrJ_ZBseGdfeZ9cf3Z3IkT7WM8tlbVEe2qsIs1w4791Fz53-ftluD39ISAcSWdtaRwZNBITXsvfFMK96mPGmaWGYZteOcvE2lmRUpXTneJ_AGscjLrbRCPCV0hgcGbZr4?purpose=inline'
    },
    {
      category: 'Comedia',
      genre: 'Comedia',
      name: 'Andreas Zanetti',
      date: '24 de octubre de 2026',
      venue: 'Teatro de la Ciudad, Hermosillo',
      priceLabel: 'Precio desde',
      price: '$400 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/mqBSNq_8hwyaG6Vp3D0i6_tdPSXdxqjRktwfXZwH9Uo7-PXYKzKk-s9TWsa_Kr6b6tRFm1saCuYq9AIJdjpadilL1AAEr9oesTUkRnhp94pjrDKjAQK03afCCbE5tonwLFsXCwjd5Fn6k6hf-8wym_LHqRHjziDEHsoT7PTWI_o?purpose=inline'
    },
    {
      category: 'Comedia',
      genre: 'Show en vivo',
      name: 'Cesar Lozano — Mujeres difíciles, hombres complicados',
      date: '29 de octubre de 2026',
      venue: 'Teatro Silvia Pinal, CDMX',
      priceLabel: 'Precio desde',
      price: '$699 MXN',
      ticketUrl: 'https://yqueplan.com/',
      image: 'https://images.openai.com/static-rsc-4/_tRNWzdNX3lnXLWoB9_Y7lLg4jp8xUyiN6PnIuegpJqNC-70h_N-DK7L9cGU-XESyKZQMb8ou-PdSAskKsm0j8x-Y99Xnv4nV2ZkJs1kpJHegXxMZZRx61Lqp3C6zV18q6PkCQi2g0tg1aVyOhxl5pLqfEMLIwzI60BIahDFiiE?purpose=inline'
    },
    {
      category: 'Comedia',
      genre: 'Comedia',
      name: 'EnParejaDOS',
      date: '24 de octubre de 2026',
      venue: 'London Pub, Hermosillo',
      priceLabel: 'Precio desde',
      price: '$250 MXN',
      ticketUrl: 'https://www.xticket.mx/comprar/enparejados-hermosillo',
      image: 'https://images.openai.com/static-rsc-4/fOfoGOp9zlw6QHEo9ZulgMStenmIswLOCgPsPgPVvsZrRetspzq7rm53cJxAK0kX1dDzqInF9f6ikrNKxc4snVLcWx4Agw9Lg4bPm-xqNaYQnz0KSSWJONDojKI9H_9zWSJdKp-P7b42MK_YQM7buV8qHdNsjzeX0V9kaOeUBZc?purpose=inline'
    },
    {
      category: 'Comedia',
      genre: 'Comedia teatral',
      name: 'Una Eva y Tres Galanes',
      date: '5 de noviembre de 2026',
      venue: 'Zapopan, Jalisco',
      priceLabel: 'Precio publicado (Luneta 4)',
      price: '$590 MXN',
      ticketUrl: 'https://www.xticket.mx/comprar/una-eva-y-tres-galanes-zapopan-9pm',
      image: 'https://images.openai.com/static-rsc-4/O5Aj6Xifzbt4PHEkvqh9s26z9rYkMNAX8hxv4qTgt_KK3WIAA69owTwR1pSTwWrWG7t9zL1MBuTL43-Gj-DktN8T3bsGi0dXLVfc73xx7OcoAoaEEt5a4vLmg9m5uBEU7h3wZK0ZlxOUF8mIX0GF7NG8Hnik8GOZsv2DVoanCl4?purpose=inline'
    },
    {
      category: 'Comedia',
      genre: 'Show en vivo',
      name: 'Jose Ramones',
      date: '6 de noviembre de 2026',
      venue: 'Cineteca Alameda, San Luis Potosí',
      priceLabel: 'Precio desde',
      price: '$710 MXN',
      ticketUrl: 'https://yqueplan.com/',
      image: 'https://images.openai.com/static-rsc-4/d-I41oOy7qQH_XbZmdTBVWek3mv1O4vMfXxu_n0BqVFa7PE0_t0Nel3QJRujw8dhI3RDxqxl2HS3A1PfmZ-TJr5vuFKDLRsFt-0xHOmkmkmYJPMBaIo5MZOaXifeH4W51xVyG6zc06dUvoQaaD4NyLRMufWl_xFDsUHsApPNKhI?purpose=inline'
    },
    {
      category: 'Deportes',
      genre: 'Futbol',
      name: 'Pumas vs. Tigres',
      date: '24 de octubre de 2026',
      venue: 'Estadio Olímpico Universitario, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/pumas-v-tigres-j14-torneo-apertura-mexico-24-10-2026/event/3D006529B7CD5417',
      image: 'https://images.openai.com/static-rsc-4/527z6NSyYnF2C4jRBXUuppJmF8sVg2G5xHYN42t-VOnC3_vkFqtxLR3x8IrhPxyfS042AWPLvGNEiLRuo_dZQChqVD2z_TxeHWi9tR8CBvAYziJ6i4gTAo7iRS7lnFfwxaIT9gmlphbkE_YcJK5E-PXZxsbZBLvSS5H50AWuRQ0?purpose=inline'
    },
    {
      category: 'Deportes',
      genre: 'Lucha libre',
      name: 'Martes Populares de Lucha Libre CMLL',
      date: 'Cartelera de octubre de 2026',
      venue: 'Arena México, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/8oV35dufNTkWqFMq6xUSlKEHZLJ3cSVXtzVVLIP3lxwmKpmjg0bDAJEf2lw2Mt9NVL-ZcI20pn4w_EEPK05WnFql4vgnY438lsifeDODS4ogpxiLYrc7ZvaY0Y67dwOvtkbuXFzGc2oVmxT1uHh3g4h84prWSAEMoC1xp5u494g?purpose=inline'
    },
    {
      category: 'Deportes',
      genre: 'Lucha libre',
      name: 'AAA Lucha Border — Yecapixtla',
      date: '25 de octubre de 2026',
      venue: 'Plaza de Toros La Corraleta',
      priceLabel: 'Precio desde',
      price: '$340 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/jiH82z3RIVGaxkDVF7MR8Bho472AcZDD9fmbvkYyjt74mGsYJj5WLk5mUMx8Pn5OoIVSkiqoO5nduYg-s8qovWZXSZm8g-XyAiMJ6Z7TNNm3Q1UAosJrYuxHqAGd9XLk9dA2efN-xT6O00gczLi3wds_XHPKvrWcp0sXtHIoAHk?purpose=inline'
    },
    {
      category: 'Deportes',
      genre: 'Lucha libre',
      name: 'AAA Lucha Border — Acapulco',
      date: '29 de octubre de 2026',
      venue: 'Arena Coliseo, Acapulco',
      priceLabel: 'Precio desde',
      price: '$340 MXN',
      ticketUrl: 'https://www.xticket.mx/comprar/aaa-lucha-border-acapulco',
      image: '/images/aaa-lucha-border-acapulco.jpg'
    },
    {
      category: 'Deportes',
      genre: 'Lucha libre',
      name: 'AAA Lucha Border — Ciudad Obregon',
      date: '31 de octubre de 2026',
      venue: 'Gimnasio Municipal, Ciudad Obregon',
      priceLabel: 'Precio desde',
      price: '$385 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/4vqIakXYE5x99keMlmZ0d0CxpMmi62tyreSLLjtlDFdqa7DBjLkNwRg583jzJAshb2k8vcJkjJf9PadKuX3q-K8_1U9m0rRymM1DtbuSw7P2RRltyrqLTLh-ItnWAPbh52o47WZquicQzWqT9uZySJh5wlDL_xuiDzlH6o_sl20?purpose=inline'
    },
    {
      category: 'Deportes',
      genre: 'Lucha libre',
      name: 'AAA Lucha Border — Hermosillo',
      date: '1 de noviembre de 2026',
      venue: 'Arena Sonora, Hermosillo',
      priceLabel: 'Precio desde',
      price: '$330 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/lUcpsssh2dlTdpcy1YapjhtplaZgT6JucW0EViI0KuGRQfq5f1WfAGfFEhbIGKQBW5NZcUIUuWuyl9E30WtiZWyZvAQsdFcZpfYmS3Xte02JaHnp8Px9THcfEACsRZDe9OuQ77DjLOuMit4nIVjY3kIniub3bVgRM_oG_BItpdE?purpose=inline'
    },
    {
      category: 'Arte y Cultura',
      genre: 'Danza',
      name: 'Ballet Folklorico de Mexico',
      date: 'Funciones de octubre de 2026',
      venue: 'Palacio de Bellas Artes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/KMYmX1YkInoltiHsLzLstv1ZFmPVBJKcG-fHA2gT6m0qnYtcxuVZwW00jVBEt65KASPIbx85Pj-RgtNuI8nKrwD3ihO0ta7NLBL3xcZSTdIEfr5LVX6J6mNIEvzVa0xvrVSX01gafpmdRfTSUgCH7GMUlCgMW3fKUb34C4nhFuc?purpose=inline'
    },
    {
      category: 'Arte y Cultura',
      genre: 'Musica clasica',
      name: 'Orquesta Sinfonica Nacional',
      date: 'Temporada septiembre-diciembre de 2026',
      venue: 'Palacio de Bellas Artes, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/K33P2r1aD6-jAPtAMO6r-KdnbzxI4aLv4czqt500hiy2XUIQyksXh2z1webd_7n7kJJ7D_23qIV_fwwPK-CeX53Mvt8gmX6PFKjU4hRh2nutkO6pYEFWiTnN1C-0rTMjjypISGWR4ln6oa3GFCKmsfTr7vhzztc9f7v2OV0R24g?purpose=inline'
    },
    {
      category: 'Arte y Cultura',
      genre: 'Musica y cultura',
      name: 'Jarocho Son',
      date: '22 de octubre de 2026',
      venue: 'Teatro de la Ciudad Esperanza Iris, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/PptXBsqexvyBRg-YBEDsygoMN0bZgPeqfSn3N6U8g22cnWoPgqg2Ngpm8ywSbNCdHrKVxBy2DYGrJEOZwKV5M68UaiyzhdQFF0mmAKEk6l9dO1xwBwlp0Dvpmd8rXB8ci7pK1oRNDV7OXZvSfT7SrRWWXqt8O7_u33xziwICOkM?purpose=inline'
    },
    {
      category: 'Arte y Cultura',
      genre: 'Musica tradicional',
      name: 'Tuna Espana',
      date: '26 de octubre de 2026',
      venue: 'Teatro de la Ciudad Esperanza Iris, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/a_PaLHlY3No-NJtAlyt00M3JObX7SEsKfeG1NSp1ZOAtuDemnOEuElDC5UzaoZonem8yr2vWviBoSNzJ66-jtNX9iL_ZTFlrDWEERxula96oyUA_Ed7ts9A289nSEJm1Fr6LK0ucD2YM4I8Fke0JcuVxUQ6veD-s3up3aWyImgQ?purpose=inline'
    },
    {
      category: 'Arte y Cultura',
      genre: 'Concierto cultural',
      name: 'Orquesta Mondragon — 50 aniversario',
      date: '12 de noviembre de 2026',
      venue: 'Teatro de la Ciudad Esperanza Iris, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/discover/arts-theater',
      image: 'https://images.openai.com/static-rsc-4/bHU_84g5RriEJlsYWw3-hBqfbiFflf9M07AKIFJxTGEDVOmseGfZiRv72oR-XN5gFar3zK4EaV-p2PZOZY6a86jOjURoF6hkWSyxxdBBgrEOOTBxEUP1jsSesn4SUCBrMS2_dFQ3Y8rTsWYcRq9R5nGV5Nd7xnwpRhnSaHmcGDw?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Cine',
      name: 'Funcion de estreno en cine',
      date: 'Octubre-noviembre de 2026',
      venue: 'Complejo de cine por confirmar',
      priceLabel: 'Precio',
      price: 'Consultar complejo',
      ticketUrl: 'https://cinepolis.com/',
      image: 'https://images.openai.com/static-rsc-4/YJ7zU0gAjzefk1qRAuk_oZZmpD3DsAjfahE-UQ6woyMoUYHIQOpBfCZNSeNWZdr1M0Sx07Lq9e62ssYE8nXedMWiKbZMj6BLCzXFpHCDar7rLyzsn7x1texfL0BFYteiwV14GRtoClCTpmFFvBloRebJJmwNU901BSTB3-fLtDc?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Cine de temporada',
      name: 'Funcion especial de terror',
      date: 'Octubre de 2026',
      venue: 'Fecha y complejo por confirmar',
      priceLabel: 'Precio',
      price: 'Consultar complejo',
      ticketUrl: 'https://cinepolis.com/',
      image: 'https://images.openai.com/static-rsc-4/6d1fQ4ZiBSWAltaxoRa-gyr0Dk8XTlUT8HM99cnCMdftC6wHR9AY4xTNlMvTH_hsdt-BzejQJywhKW0TGXe1qHJnYh5iuJN0TYvXTtRBbYxjQanVPmR3Y_DAF25u547vPaaJ4ae11mp4ubHYR6spIMKb2ThtpLl_R-zKsJZrpoQ?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Feria y exposicion',
      name: 'Expo Cerveza Mexico',
      date: '22 de octubre de 2026',
      venue: 'WTC, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar organizador',
      ticketUrl: 'https://parkeo.mx/eventos/lista',
      image: 'https://images.openai.com/static-rsc-4/SpZ9ezI-DAN5IZrw2QOxtQ0cRH3xfQk6yTLyRXan8FFmUbRFonphfoKEijw4mrxolCA3RNpv32sNwwnd43C71hBGLOFEmtEUJapXeqWVnAaYd8Zd2U2pnU-aScNnC-YOcNXE1XGS4CtMEX3bnRAUxSuZXT-zN2EBmfjODnWYQHQ?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Congreso',
      name: 'Foro Mundial de Energia Solar',
      date: '21 de octubre de 2026',
      venue: 'Villa Toscana, Hermosillo',
      priceLabel: 'Precio desde',
      price: '$560 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/jaiOegLIwUxkvd6-v49leWrhP5BcGoSghd8ghwqhRh-rZ_-Wj-7Ye-wBTtnQTMawvRf3Wvq-cgfmMHhpRZ1LHsC5LDVUSSa2uIHG-_kUaA-YPlgC3PBmKIXJVznE71kJQJC6klz9TQ2hlpl2MSZopm_ewIX4eRVdOQya8VTKJjU?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Espectaculo',
      name: 'Cirque du Soleil: ECHO',
      date: 'Cartelera de octubre de 2026',
      venue: 'Plaza Patria, Guadalajara',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/cirque-du-soleil-echo-guadalajara-22-10-2026/event/3D0064963C14F4B2',
      image: 'https://images.openai.com/static-rsc-4/YWa5HoakNqy5-aA5axRbM7TJ6SRgM6uusCVBRyrikgQvIPgCCdDcseuw_8cHCK7YIs3COOVXHLOsM9Y6E8YdfIg_m6XfOKdB98NBQT13xzgcn9RTyve4_4hcHJtiZTJmW2y8b3yL7AFKq1N1nsFJ0au18qDMy4ccLq3D4w_zPik?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Evento especial',
      name: 'Mi Fiesta de Halloween con Todos Mis Amigos — Regulo Caro',
      date: '31 de octubre de 2026',
      venue: 'Parque La Ruina, Hermosillo',
      priceLabel: 'Precio desde',
      price: '$448 MXN',
      ticketUrl: 'https://www.xticket.mx/',
      image: 'https://images.openai.com/static-rsc-4/xb9XXVhmfoMhUF6NTLVH1ZbXMenC5r8gKgkciEJPyq8TrY0twiBJOOU84A-_qXQWchl_FlF2vOZ9wDc5x3jb0lhuDWRqOt0djdxNAkFgzlmipiz_KEmUtYtfBb9vq96iFwsP8ZkbDnYuisRQNrUyVth9n-ZZmNrO8CpTZrUkBQ4?purpose=inline'
    },
    {
      category: 'Eventos Especiales',
      genre: 'Festival musical',
      name: 'The Best of I Love Dance',
      date: '5 de diciembre de 2026',
      venue: 'Estadio Alfredo Harp Helu, CDMX',
      priceLabel: 'Precio',
      price: 'Consultar boletera',
      ticketUrl: 'https://www.ticketmaster.com.mx/',
      image: 'https://images.openai.com/static-rsc-4/86NjuqbBdpunPR3DHcfhyVLYIchb10uL7q8pUpbHqajuEy4vkVLclY8bAKSjj4Y6jCVOGWn-LFFl20PLKo26UD29J8m1pt4MYJEBh406Nr55TospLqeV6TEkrIVVUCbJJRl1R7VkpuGLnUlOWisl01cx98UNgWQTrdSMcjME0kg?purpose=inline'
    }
  ]
};

const estimatedPrices = {
  'Morat — México 2026': '$1,200 MXN',
  'Karol G': '$1,500 MXN',
  'Bruno Mars': '$1,800 MXN',
  'Omar Courtz': '$900 MXN',
  Fobia: '$850 MXN',
  'Los Angeles Azules — Monterrey': '$650 MXN',
  Matisse: '$600 MXN',
  'Edith Marquez': '$700 MXN',
  Aitana: '$950 MXN',
  'Dimash Qudaibergen': '$1,200 MXN',
  'Lila Downs': '$650 MXN',
  'Los Angeles Azules — CDMX': '$800 MXN',
  'Aitana — Guadalajara': '$850 MXN',
  'Love of Lesbian': '$850 MXN',
  'La Bruja de Texcoco': '$400 MXN',
  'Eslabon Armado': '$700 MXN',
  'Banda Machos': '$500 MXN',
  'Bruno Mars — fechas de diciembre': '$1,800 MXN',
  'El Rey León': '$1,200 MXN',
  Mentidrags: '$500 MXN',
  'Mentiras, el Musical': '$500 MXN',
  'La Dama de Negro': '$450 MXN',
  'Perfume de Gardenia': '$500 MXN',
  "Slava's Snowshow": '$600 MXN',
  'Pumas vs. Tigres': '$450 MXN',
  'Martes Populares de Lucha Libre CMLL': '$250 MXN',
  'Ballet Folklorico de Mexico': '$350 MXN',
  'Orquesta Sinfonica Nacional': '$250 MXN',
  'Jarocho Son': '$300 MXN',
  'Tuna Espana': '$250 MXN',
  'Orquesta Mondragon — 50 aniversario': '$350 MXN',
  'Funcion de estreno en cine': '$100 MXN',
  'Funcion especial de terror': '$120 MXN',
  'Expo Cerveza Mexico': '$350 MXN',
  'Cirque du Soleil: ECHO': '$1,100 MXN',
  'The Best of I Love Dance': '$600 MXN'
};

ticketProData.ticketEvents = ticketProData.ticketEvents.map((event) => {
  const estimatedPrice = estimatedPrices[event.name];
  if (!estimatedPrice || !/consultar/i.test(event.price)) return event;

  return {
    ...event,
    priceLabel: 'Estimado desde',
    price: estimatedPrice,
    priceIsEstimate: true
  };
});

export const { categories, posterEvents, ticketEvents } = ticketProData;

export const normalizeSearchText = (value = '') =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

window.TicketProData = ticketProData;
