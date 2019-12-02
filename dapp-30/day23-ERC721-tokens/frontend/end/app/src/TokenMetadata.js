import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData, ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
    <div className="App">
      <div>
        <h2>Name</h2>
        <ContractData
          drizzle={drizzle}
          drizzleState={state}
          contract="ERC721Token"
          method="admin"
        />
      </div>
      <div>
        <h2>Symbol</h2>
        <ContractForm
          drizzle={drizzle}
          contract="ERC721Token"
          method="ownerOf"
        />
      </div>
    </div>
  );
};
