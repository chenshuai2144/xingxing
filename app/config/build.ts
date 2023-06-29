export const getBuildConfig = () => {
  if (typeof process === "undefined") {
    throw Error(
      "[Server Config] you are importing a nodejs-only module outside of nodejs",
    );
  }

  return {
    commitId: "latest",
    buildMode: process.env.BUILD_MODE ?? "standalone",
    isApp: !!process.env.BUILD_APP,
  };
};

export type BuildConfig = ReturnType<typeof getBuildConfig>;
