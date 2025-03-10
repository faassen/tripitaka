const { match } = require('assert');
const { Level, processors: { human } } = require('../..');

describe('human', () => {

  it('should work out of the box', () => {
    const fn = human();
    const result = fn({ record: { level: Level.INFO.name, message: 'How blissful it is, for one who has nothing' } });
    match(result, /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \[INFO\] How blissful it is, for one who has nothing$/);
  });

  it('should work with errors out of the box', () => {
    const fn = human();
    const error = new Error('Oooh, Demons!');
    const result = fn({ record: { level: Level.ERROR.name, message: 'I forbid it!', error: { message: error.message, stack: error.stack } } });
    match(result, /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \[ERROR\] Oooh, Demons!/);
    match(result, /Error: Oooh, Demons!/);
  });
});