import assert from "assert";
import { 
  TestHelpers,
  ChatContract_Vec
} from "generated";
const { MockDb, ChatContract } = TestHelpers;

describe("ChatContract contract Vec event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ChatContract contract Vec event
  const event = ChatContract.Vec.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  it("ChatContract_Vec is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ChatContract.Vec.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualChatContractVec = mockDbUpdated.entities.ChatContract_Vec.get(
      `${event.chainId}_${event.block.height}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedChatContractVec: ChatContract_Vec = {
      id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualChatContractVec, expectedChatContractVec, "Actual ChatContractVec should be the same as the expectedChatContractVec");
  });
});
