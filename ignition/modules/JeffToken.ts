import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("TokenModule", (m) => {

  const token = m.contract("JeffToken");

  return { token };
});

export default LockModule;
