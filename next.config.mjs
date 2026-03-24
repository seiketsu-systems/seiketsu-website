/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://widgets.leadconnectorhq.com https://link.msgsndr.com https://elevenlabs.io https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "frame-src 'self' https://api.leadconnectorhq.com https://*.leadconnectorhq.com https://app.gohighlevel.com https://*.gohighlevel.com https://link.msgsndr.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
