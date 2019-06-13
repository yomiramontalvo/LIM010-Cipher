
window.cipher = {
  encode: (offset, string) => {
    const enc = string.split('').map(c => {
      let mayus = (c === c.toUpperCase()) ? true : false;
      let valorEntero = c.toLowerCase().charCodeAt(0);
      if (valorEntero >= 97 && valorEntero <= 122) {
        let valorDesplazamiento = parseInt(offset);
        
        if(valorDesplazamiento<27){
          if (valorEntero + valorDesplazamiento > 122){
          valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
          }
          else
          valorEntero = valorEntero + valorDesplazamiento;
        }
        else
        { 
          valorDesplazamiento=valorDesplazamiento%26; 
          if (valorEntero + valorDesplazamiento > 122){
          valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
          }else
          valorEntero = valorEntero + valorDesplazamiento;
        }
      }
      let cifrado = String.fromCharCode(valorEntero);
      return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
    return enc;
  },

  decode: (offset, string) => {
    const dec = string.split('').map(c => {
      let mayus = (c === c.toUpperCase()) ? true : false;
      let valorEntero = c.toLowerCase().charCodeAt(0);
      if (valorEntero >= 97 && valorEntero <= 122) {
        let valorDesplazamiento = parseInt(offset);
        if(valorDesplazamiento<27){
        if (valorEntero - valorDesplazamiento < 97){
          valorEntero = 122 - (97-valorEntero) - valorDesplazamiento + 1;
        }
        else
          valorEntero = valorEntero - valorDesplazamiento;
      }
      else{
        valorDesplazamiento=valorDesplazamiento%26;
        if (valorEntero - valorDesplazamiento < 97){
          valorEntero = 122 - (97-valorEntero) - valorDesplazamiento + 1;
        }
        else
          valorEntero = valorEntero - valorDesplazamiento;
      }
    }
      let descifrado = String.fromCharCode(valorEntero);
      return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
    return dec;
  }
};
