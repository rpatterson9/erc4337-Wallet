/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20,
  IERC20Interface,
} from "../../../contracts/SmartWallet.sol/IERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20Interface {
    return new utils.Interface(_abi) as IERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IERC20 {
    return new Contract(address, _abi, signerOrProvider) as IERC20;
  }
}
