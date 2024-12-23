import { Provider, Wallet } from 'fuels';
import { ContractsFactory } from './out/index';

const main = async () => {
  if (!process.env.FUEL_PROVIDER_URL || !process.env.FUEL_PRIVATE_KEY) {
    throw new Error('FUEL_PROVIDER_URL or FUEL_PRIVATE_KEY is not set');
  }

  const provider = await Provider.create(process.env.FUEL_PROVIDER_URL);
  const wallet = Wallet.fromPrivateKey(process.env.FUEL_PRIVATE_KEY, provider);

  const contract = ContractsFactory.deployContract(wallet, 'ChatContract');
};

main();
