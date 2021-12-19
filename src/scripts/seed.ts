import { signupAnonymous, signupEmail } from '../services/auth.service';
import faker from 'faker';
import { execSync } from 'child_process';

faker.seed(444);

async function seed() {
  execSync('yarn prisma migrate reset', { stdio: 'inherit' });

  // Generate email users
  for (let count = 0; count < 15; count++) {
    const email = faker.internet.email();
    await signupEmail({
      email,
      password: email,
    });
  }

  // Generate anonymous users
  for (let count = 0; count < 15; count++) {
    const email = faker.internet.email();
    await signupAnonymous({
      password: email,
    });
  }
}

seed();
