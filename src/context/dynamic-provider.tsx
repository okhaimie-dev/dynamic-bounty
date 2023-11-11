"use client";

import { ReactNode } from "react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DynamicContextProvider
			settings={{
				// Find your environment id at https://app.dynamic.xyz/dashboard/developer
				environmentId: "xxxxxx-xxxx-xxx-xxxxx",
				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			{children}
		</DynamicContextProvider>
	);
};

export default DynamicProvider;
