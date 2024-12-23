import { Provider, Wallet } from 'fuels';
import { ContractsFactory } from '../out/index';
import { writeFileSync } from 'node:fs';

const main = async () => {
  if (!process.env.FUEL_PROVIDER_URL || !process.env.FUEL_PRIVATE_KEY) {
    throw new Error('FUEL_PROVIDER_URL or FUEL_PRIVATE_KEY is not set');
  }

  const provider = await Provider.create(process.env.FUEL_PROVIDER_URL);
  const wallet = Wallet.fromPrivateKey(process.env.FUEL_PRIVATE_KEY, provider);

  console.log('Deploying contract...');

  const { contract } = await (
    await ContractsFactory.deploy(wallet)
  ).waitForResult();

  console.log('Contract deployed at:', contract.id);

  writeFileSync(
    'contract.json',
    JSON.stringify({ contractId: contract.id.toB256() }, null, 2)
  );
};

main();
