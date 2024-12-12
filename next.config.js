module.exports = {
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version || ''
    },
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        if (!isServer) {
            config.externals = {
                ...config.externals,
                react: 'react',
                'react-dom': 'react-dom',
            };
        }

        return config;
    },
    async redirects() {
        return [
            {
                source: '/setup',
                destination: '/installation',
                permanent: true
            }
        ];
    }
};
