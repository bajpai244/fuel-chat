if(!process.env.ENVION_INDEXER_URL) {
    throw new Error('ENVION_INDEXER_URL is not set');
}

/*
This is an example snippet - you should consider tailoring it
to your service.
*/

const fetchGraphQL = async (operationsDoc: string, operationName: string, variables: any) => {
    const result = await fetch(
      process.env.ENVION_INDEXER_URL as string,
      {
        method: "POST",
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQuery {
      ChatContract_Vec(order_by: {height: desc}, limit: 50) {
        message
      }
    }
  `;
  
  const fetchMyQuery = async () => {
    return fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
  const main = async () => {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
  // do something great with this precious data
  console.log(data);
};

  main();