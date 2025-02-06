import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
		config.externals.push({
			harperdb: 'commonjs harperdb',
		});

		config.resolve.alias = {
			...config.resolve.alias,
			"sharp$": false,
			"onnxruntime-node$": false,
		};

		return config;
	},
	experimental: {
		serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
	},
};

export default nextConfig;
