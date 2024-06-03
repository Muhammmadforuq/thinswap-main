tailwind.config = {
  theme: {
    extend:{
      fontFamily:{
        'sf-ui-display':['sf-ui-display'],
        'roboto':['Roboto']
      },
      fontSize:{
        'display-2xl':['1.75rem',],
        'display-3xl':['2rem', '2.4rem'],
        'display-4xl':['2.625rem'],
        'display-5xl':['3.5rem', '4.2rem'],
      },
      colors:{
        brand:{
          blue:{
            100:"#313A7A",
            200:"#0C0D1B",
            300:"#5B6CE3",
            400:"#457EF8",
            500:"#1B2344",
            600:"#5E69DF",
            700:"#07123F",
          },
          gray:{
            10:"#F1F2F4",
            20:"#FAFAFF",
            30:"#F3F4FA",
            50:"#F9FAFF",
            60:"#DCDEEA",
            100:"#f7f8fd",
            150:'#F6F6FF',
            200:"#56586F",
            300:"#F7F8FF",
            400:"#D7D8DE",
            500:"#687588"
          },
          red:{
            100:"#FFEBEB",
            500:"#FF2C2C",
          },
          green:"#3FC044"
        }
      },
      boxShadow:{
        '4xl':"0px 3px 4px 0px #5B6CE3"
      },
      backgroundImage:{
        'base':"linear-gradient(90deg, #457EF8 -8.46%, #5E69DF 113.08%)"
      },
    },
  }
}

