/**
 * Incrementando os tipos do global, compondo para que o global reconheça
 * Estamos sobreescrevendo o global para add o testRequest
 * import inline (para que reconheça como global)
 */

declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
