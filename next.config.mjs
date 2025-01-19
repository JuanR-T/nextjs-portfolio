import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.join(__dirname, "src"),
        };
        return config;
    },
};

export default withNextIntl(nextConfig);
