"use client";

import { ReactNode } from "react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DynamicContextProvider
			settings={{
				// Find your environment id at https://app.dynamic.xyz/dashboard/developer
				environmentId: "18f28dba-a643-49d8-a58e-05043e3bb303",
				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			{children}
		</DynamicContextProvider>
	);
};

export default DynamicProvider;
