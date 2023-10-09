import { PrismaClient } from '@prisma/client';
import { initialize, defineUserFactory } from '../fabbrica/index';

const prisma = new PrismaClient();
initialize({ prisma });

async function seed() {
  const UserFactory = defineUserFactory();
  await UserFactory.create();
  await UserFactory.create({ email: 'matsui.kosuke@arsaga.jp' });
  console.log(await prisma.user.count()); // -> 3
}
seed();
