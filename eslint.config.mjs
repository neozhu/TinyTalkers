import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    files: ["components/ui/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
  {
    rules: {
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
