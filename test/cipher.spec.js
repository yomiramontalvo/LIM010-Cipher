describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG'); 
    });
    
    it('debería retornar "KLMNOPQRSTUVWXYZABCDEFGHIJ" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 10', () =>{
      assert.equal(cipher.encode(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'KLMNOPQRSTUVWXYZABCDEFGHIJ'); 
    }); 
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33npm test', () =>{
      assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg'); 
    }); 
    it('debería retornar "klmnopqrstuvwxyzabcdefghij" para "abcdefghijklmnopqrstuvwxyz" con offset 10', () =>{
      assert.equal(cipher.encode(10, 'abcdefghijklmnopqrstuvwxyz'), 'klmnopqrstuvwxyzabcdefghij'); 
    }); 
    it('debería retornar " " para " " con offset 10', () =>{
      assert.equal(cipher.encode(10, ' '), ' '); 
    }); 


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "KLMNOPQRSTUVWXYZABCDEFGHIJ" con offset 10', () =>{
      assert.equal(cipher.decode(10, 'KLMNOPQRSTUVWXYZABCDEFGHIJ'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
    }); 
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () =>{
      assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz'); 
    }); 
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "klmnopqrstuvwxyzabcdefghij" con offset 10', () =>{
      assert.equal(cipher.decode(10, 'klmnopqrstuvwxyzabcdefghij'), 'abcdefghijklmnopqrstuvwxyz'); 
    }); 
    it('debería retornar " " para " " con offset 10', () =>{
      assert.equal(cipher.decode(10, ' '), ' '); 
    }); 

});
})