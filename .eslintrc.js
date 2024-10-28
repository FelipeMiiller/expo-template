// https://docs.expo.dev/guides/using-eslint/
// https://github.com/expo/expo/tree/main/packages/eslint-config-universe#customizing-prettier
module.exports = {
  extends: ["universe", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],

  ignorePatterns: [".expo", "**/node_modules/**", "**/packages/cli/dist/**"],
}
