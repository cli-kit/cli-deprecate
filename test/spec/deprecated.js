var expect = require('chai').expect
  , deprecate = require('../..');

describe('cli-deprecate:', function() {
  var warn = console.warn;
  var called = 0;

  before(function(done) {
    console.warn = function() {
      called++;
    }
    done();
  })

  after(function(done) {
    console.warn = warn;
    done();
  })

  it('should ignore warning in test', function(done) {
    deprecate('will not print');
    done();
  });

  it('should print warning', function(done) {
    process.env.NODE_ENV = 'devel';
    deprecate('module deprecated');
    expect(called).to.eql(1);
    done();
  });

  it('should use replacement parameters', function(done) {
    deprecate('%s deprecated', ['module']);
    expect(called).to.eql(2);
    done();
  });

  it('should use replacement parameters and prefix', function(done) {
    deprecate('%s deprecated', ['module'], '');
    expect(called).to.eql(3);
    done();
  });
})
