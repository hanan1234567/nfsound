const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                 'btn-primary-bg':'#000',
                 "@input-border-color":"#D7C189",
                  "@input-hover-border-color":"#D7C189", 
                  "@checkbox-check-color": "#fff",
                  "@checkbox-color": "#D7C189",
                  "@select-item-active-bg": "#D7C189",
                  "@select-border-color": "#D7C189",
                  'progress-steps-item-bg':'#D7C189',
                  "@radio-dot-color": '#D7C189',
                  "@radio-solid-checked-color": '#D7C189',
                  '@form-item-margin-bottom':'0px',
                  '@input-placeholder-color':'#000',
                  '@radio-dot-color':'#000',
                  '@radio-solid-checked-color':'#D6C086',
                  '@radio-dot-size':'12px',
                  
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};