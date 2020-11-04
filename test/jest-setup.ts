// Arquivo responsável pela instância dos testes
import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();

  //Configs globais dos testes
  global.testRequest = supertest(server.getApp());
});
