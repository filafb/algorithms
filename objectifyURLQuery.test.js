const convertQueryToMap = require('./objectifyURLQuery');

const query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
const queryToObj = {
  user: {
    name: {
      firstname: 'Bob',
      lastname: 'Smith'
    },
    favoritecolor: 'Light Blue'
  }
}
const query2 = 'a=a%26b%3Dc%3F';
const query2ToObj = {
  a: 'a&b=c?'
}

const query3 = 'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie';
const query3ToObj = {
  user:
  {
    '1': { name: 'Alice' },
    '2': { name: 'Bob' },
    '3': { name: 'Charles' },
    '4': { name: 'Debbie' }
  }
}

describe('Convert Query to Map', () => {
  it('returns an object based on a query-ish string', () => {
    expect(convertQueryToMap(query)).toEqual(queryToObj);
    expect(convertQueryToMap(query2)).toEqual(query2ToObj);
    expect(convertQueryToMap(query3)).toEqual(query3ToObj);
  })
})

