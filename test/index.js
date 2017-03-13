var emailsInString = require('../');
var assert = require('assert');

describe('emails-in-string', function() {
  it('is a function', function() {
    assert.equal('function', typeof(emailsInString));
  });

  it('should return unique emails', function() {
    assert.deepEqual(['test1@test.com', 'test2@test.com'], emailsInString('test1@test.com, test2@test.com, test1@test.com, test2@test.com'));
  });

  it('should return lowercase emails', function() {
    assert.deepEqual(['test1@test.com'], emailsInString('TEST1@TEST.COM'));
  });

  it('should return an empty array when no text is provided', function() {
    assert.deepEqual([], emailsInString());
  });

  it('should return an empty array when no emails are provided', function() {
    assert.deepEqual([], emailsInString('there are no email addresses in this string'));
  });

  it('should filter out twitter usernames', function() {
    assert.deepEqual([], emailsInString('this is my @twitterusername'));
  });

  it('should filter out email addresses with 2 "." characters', function() {
    assert.deepEqual([], emailsInString('test1@test..com'));
  });

  it('should filter out email addresses with 2 "@" characters', function() {
    assert.deepEqual([], emailsInString('test1@@test.com'));
  });

  it('allows email addresses with a "+" character', function() {
    assert.deepEqual(['test+1@test.com'], emailsInString('test+1@test.com'));
  });
});
