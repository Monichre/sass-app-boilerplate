import { initConfig } from '../config/init';
import { runCommand } from '../lib/runCommand';
import { assertDockerIsRunning } from '../lib/docker';
import { BaseCommand } from '../baseCommand';

export default class Down extends BaseCommand<typeof Down> {
  static description = 'Starts both backend and frontend';

  static examples = [`$ <%= config.bin %> <%= command.id %>`];

  async run(): Promise<void> {
    await initConfig(this, { requireLocalEnvStage: true });
    await assertDockerIsRunning();

    await runCommand('pnpm', ['nx', 'run', 'core:docker-compose:down']);
  }
}
