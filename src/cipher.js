
window.cipher = {
  encode: (offset, string) => {
    const enc = string.split('').map(c => {     /*El string.split(''), split es un método, convierte mi string en un array(vector) de cadenas*/
     let mayus = (c === c.toUpperCase()) ? true : false; /*El método map() crea un nuevo array, con los resultados de la función indicada*/
      let valueWhole = c.toLowerCase().charCodeAt(0);
      if (valueWhole >= 97 && valueWhole <= 122) {
        let valueDisplacement = parseInt(offset);
        
        if(valueDisplacement<27){
          if (valueWhole + valueDisplacement > 122){
          valueWhole = 97 + (valueWhole - 122) + valueDisplacement - 1;
          }
          else
          valueWhole = valueWhole + valueDisplacement;
        }
        else
        { 
          valueDisplacement=valueDisplacement%26; 
          if (valueWhole + valueDisplacement > 122){
          valueWhole = 97 + (valueWhole - 122) + valueDisplacement - 1;
          }else
          valueWhole = valueWhole + valueDisplacement;
        }
      }
      let cifrado = String.fromCharCode(valueWhole);
      return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
    return enc;
  },

  decode: (offset, string) => {
    const dec = string.split('').map(c => {
      let mayus = (c === c.toUpperCase()) ? true : false;
      let valueWhole = c.toLowerCase().charCodeAt(0);
      if (valueWhole >= 97 && valueWhole <= 122) {
        let valueDisplacement = parseInt(offset);
        if(valueDisplacement<27){
        if (valueWhole - valueDisplacement < 97){
          valueWhole = 122 - (97-valueWhole) - valueDisplacement + 1;
        }
        else
          valueWhole = valueWhole - valueDisplacement;
      }
      else{
        valueDisplacement=valueDisplacement%26;
        if (valueWhole - valueDisplacement < 97){
          valueWhole = 122 - (97-valueWhole) - valueDisplacement + 1;
        }
        else
          valueWhole = valueWhole - valueDisplacement;
      }
    }
      let descifrado = String.fromCharCode(valueWhole);
      return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
    return dec;
  }
};
