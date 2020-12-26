import { expect } from 'chai';
import { Platform } from "./index";
import 'mocha';

describe('Xazab - Platform', () => {

  it('should provide expected class', function () {
    expect(Platform.name).to.be.equal('Platform')
    expect(Platform.constructor.name).to.be.equal('Function')
  });
});
