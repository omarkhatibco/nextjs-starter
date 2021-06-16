module.exports = {
  rewrites: () => [
    {
      source: "/backend/:path*",
      destination: "http://localhost:5000/:path*",
    },
  ],
};
