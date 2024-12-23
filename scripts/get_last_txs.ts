import { Provider } from 'fuels';
import { contractId } from "../contract.json"

const main = async () => {
  if (!process.env.FUEL_PROVIDER_URL) {
    throw new Error('FUEL_PROVIDER_URL is not set');
  }

  const provider = await Provider.create(process.env.FUEL_PROVIDER_URL);

  const contract = await provider.getContract(contractId);
  if(!contract) {
    throw new Error('Contract not found');
  }

};

main();
