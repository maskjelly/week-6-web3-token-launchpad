import { getMinimumBalanceForRentExemptAccount } from "@solana/spl-token";
import { MINT_SIZE } from "@solana/spl-token/lib/types";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export function TokenLaunchpad() {
  const waller = useWallet();
  const {connection } = useConnection();
  async function createToken() {
    const name = document.getElementById("name").value;
    const symbol = document.getElementById("symbol").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const intialSupply = document.getElementById("intialSupply").value;

    const lamports = await getMinimumBalanceForRentExemptAccount(connection);
    const keypair = Keypair.generate();

    const transaction = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey : payer.publicKey,
            newAccountPubkey : keypair.publicKey,
            space : MINT_SIZE , 
            lamports,
            programId
        })
    )

}
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#00ffcc",
          textShadow: "0 0 10px rgba(0, 255, 204, 0.5)",
        }}
      >
        Solana Token Launchpad
      </h1>
      <input
        id="name"
        className="inputText"
        type="text"
        placeholder="Name"
        style={{ border: "1px solid #00ffcc", borderRadius: "5px" }}
      ></input>{" "}
      <br />
      <input
        id="symbol"
        className="inputText"
        type="text"
        placeholder="Symbol"
        style={{ border: "1px solid #00ffcc", borderRadius: "5px" }}
      ></input>{" "}
      <br />
      <input
        id="imageUrl"
        className="inputText"
        type="text"
        placeholder="Image URL"
        style={{ border: "1px solid #00ffcc", borderRadius: "5px" }}
      ></input>{" "}
      <br />
      <input
        id="intialSupply"
        className="inputText"
        type="text"
        placeholder="Initial Supply"
        style={{ border: "1px solid #00ffcc", borderRadius: "5px" }}
      ></input>{" "}
      <br />
      <button
        onClick={createToken}
        className="btn"
        style={{
          backgroundColor: "#00ffcc",
          color: "#000",
          transition: "background-color 0.3s",
        }}
      >
        Create a token
      </button>
    </div>
  );
}
