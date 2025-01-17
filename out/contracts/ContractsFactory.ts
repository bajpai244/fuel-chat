/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions } from "fuels";

import { Contracts } from "./Contracts";

const bytecode = decompressBytecode("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");

export class ContractsFactory extends ContractFactory<Contracts> {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(
      bytecode,
      Contracts.abi,
      accountOrProvider,
      Contracts.storageSlots
    );
  }

  static deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ) {
    const factory = new ContractsFactory(wallet);
    return factory.deploy(options);
  }
}
