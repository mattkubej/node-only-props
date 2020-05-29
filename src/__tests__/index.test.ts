import only from '../';

const obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345',
};

const expected = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
};

describe('only(obj, keys', function() {
  describe('given an array', function() {
    it('should return only the whitelisted properties', function() {
      expect(only(obj, ['name', 'email', 'last'])).toMatchObject(expected);
    });
  });

  describe('given a string', function() {
    it('should return only the whitelisted properties', function() {
      expect(only(obj, 'name email last')).toMatchObject(expected);
    });
  });

  it('should omit undefineds', function() {
    expect(only({}, 'foo bar baz')).toMatchObject({});
  });
});
