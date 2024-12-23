import { Provider, Wallet } from 'fuels';
import { Contracts } from './out/index';
import { contractId } from './contract.json';

const main = async () => {
  if (!process.env.FUEL_PROVIDER_URL || !process.env.FUEL_PRIVATE_KEY) {
    throw new Error('FUEL_PROVIDER_URL or FUEL_PRIVATE_KEY is not set');
  }

  const provider = await Provider.create(process.env.FUEL_PROVIDER_URL);
  const wallet = Wallet.fromPrivateKey(process.env.FUEL_PRIVATE_KEY, provider);

  const contract = new Contracts(contractId, wallet);

  const utf8Bytes = new Uint8Array(
    Buffer.from(
      `The gods envy us. They envy us because we're mortal, because any moment might be our last. Everything is more beautiful because we're doomed.`,
      'utf8'
    )
  );
  console.log('number of bytes:', utf8Bytes.length);

  const { transactionId, waitForResult } = await contract.functions
    .log_data(utf8Bytes)
    .call();

  const { transactionResult } = await waitForResult();

  console.log('Transaction ID:', transactionId);

  if (transactionResult.status === 'success') {
    const logs = transactionResult.logs;

    if (logs && logs.length > 0) {
      const log = logs[0] as Array<number>;
      const buffer = Buffer.from(log);
      console.log('Log:', buffer.toString('utf8'));
    } else {
      console.error('No logs found in transaction');
    }
  } else {
    console.error('Transaction Failed:', transactionResult);
  }
};

main();
