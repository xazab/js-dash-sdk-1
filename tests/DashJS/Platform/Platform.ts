import { expect } from 'chai';
import {Platform} from "../../../src/DashJS/Platform";
import 'mocha';

describe('DashJS - Platform', () => {

  it('should provide expected class', function () {
    expect(Platform.name).to.be.equal('Platform')
    expect(Platform.constructor.name).to.be.equal('Function')
  });
});
