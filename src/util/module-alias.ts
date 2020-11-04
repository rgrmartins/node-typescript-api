import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

// Adicionando ALis para src e test, facilitando os imports
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@text': path.join(files, 'test'),
});
