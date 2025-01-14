/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Vec } from "./common";

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "struct std::vec::Vec<u8>",
      "concreteTypeId": "27a0fb3d3a821e04e7a3f17ab6a617f0eb10f11e6eeb0f2c0ff9e6237207319e",
      "metadataTypeId": 3,
      "typeArguments": [
        "c89951a24c6ca28c13fd1cfdc646b2b656d69e61a92b91023be7eb58eb914b6b"
      ]
    },
    {
      "type": "u8",
      "concreteTypeId": "c89951a24c6ca28c13fd1cfdc646b2b656d69e61a92b91023be7eb58eb914b6b"
    }
  ],
  "metadataTypes": [
    {
      "type": "generic T",
      "metadataTypeId": 0
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 1
    },
    {
      "type": "struct std::vec::RawVec",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "ptr",
          "typeId": 1
        },
        {
          "name": "cap",
          "typeId": 4
        }
      ],
      "typeParameters": [
        0
      ]
    },
    {
      "type": "struct std::vec::Vec",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "buf",
          "typeId": 2,
          "typeArguments": [
            {
              "name": "",
              "typeId": 0
            }
          ]
        },
        {
          "name": "len",
          "typeId": 4
        }
      ],
      "typeParameters": [
        0
      ]
    },
    {
      "type": "u64",
      "metadataTypeId": 4
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "data",
          "concreteTypeId": "27a0fb3d3a821e04e7a3f17ab6a617f0eb10f11e6eeb0f2c0ff9e6237207319e"
        }
      ],
      "name": "log_data",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": null
    }
  ],
  "loggedTypes": [
    {
      "logId": "2855558404146077188",
      "concreteTypeId": "27a0fb3d3a821e04e7a3f17ab6a617f0eb10f11e6eeb0f2c0ff9e6237207319e"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [];

export class ContractsInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    log_data: FunctionFragment;
  };
}

export class Contracts extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: ContractsInterface;
  declare functions: {
    log_data: InvokeFunction<[data: Vec<BigNumberish>], boolean>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
