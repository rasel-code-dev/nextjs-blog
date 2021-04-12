

module.exports = (phase, { defaultConfig }) => {
  return {
    /* config options here */
    // useFileSystemPublicRoutes: false,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }
}