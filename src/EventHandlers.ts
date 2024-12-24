/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ChatContract,
  ChatContract_Vec,
  ChatContract_Transfer,
  ChatContract_Mint,
  ChatContract_Burn,
  ChatContract_Call,
} from "generated";

ChatContract.Vec.handler(async ({ event, context }) => {

  const entity: ChatContract_Vec = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    message: event.params,
    height: event.block.height,
  };

  context.ChatContract_Vec.set(entity);
});

ChatContract.Transfer.handler(async ({ event, context }) => {
  const entity: ChatContract_Transfer = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.ChatContract_Transfer.set(entity);
});

ChatContract.Mint.handler(async ({ event, context }) => {
  const entity: ChatContract_Mint = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.ChatContract_Mint.set(entity);
});

ChatContract.Burn.handler(async ({ event, context }) => {
  const entity: ChatContract_Burn = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
  };

  context.ChatContract_Burn.set(entity);
});

// ChatContract.Call.handler(async ({ event, context }) => {
//   const entity: ChatContract_Call = {
//     id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
//   };

//   context.ChatContract_Call.set(entity);
// });
