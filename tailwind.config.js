tailwind.config = {
  theme: {
    extend:{
      fontFamily:{
        'sf-ui-display':['sf-ui-display'],
        'roboto':['Roboto']
      },
      fontSize:{
        "display-xs":['.625rem', "1rem"],
        'display-2xl':['1.75rem',],
        'display-3xl':['2rem', '2.4rem'],
        'display-4xl':['2.625rem'],
        'display-5xl':['3.5rem', '4.2rem'],
      },
      colors:{
        brand:{
          blue:{
            50:"#111827",
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
            40:"#959CB8",
            50:"#F9FAFF",
            60:"#DCDEEA",
            100:"#f7f8fd",
            150:'#F6F6FF',
            200:"#56586F",
            300:"#F7F8FF",
            400:"#D7D8DE",
            500:"#687588",
            600:"#DCDCDC",
          },
          red:{
            100:"#FFEBEB",
            500:"#FF2C2C",
          },
          yellow:{
            100:"#FFF9ED",
            200:"#FFA500",
          },
          green:"#3FC044",
          'green-100':"#2DAE00"
          
        }
      },
      boxShadow:{
        '4xl':"0px 3px 4px 0px #5B6CE3",
        '5xl':"0px 1px 0.1px 0px rgba(0, 0, 0, 0.25)"
      },
      backgroundImage:{
        'base':"linear-gradient(90deg, #457EF8 -8.46%, #5E69DF 113.08%)",
        "gr":"linear-gradient(90deg, #07123F -8.46%, #5E69DF 113.08%)"
      },
    },
  }
}

