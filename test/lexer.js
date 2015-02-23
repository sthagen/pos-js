var should = require('should');
var lexer = new (require('../lexer'))();

describe('Lexer#lex', function(){
  it('should tokenize dollar sign', function(){
    lexer
      .lex("I made $5.42 today.")
      .should.eql(['I', 'made', '$', '5.42', 'today', '.']);
  });
});
