module.exports = {
  title: "Futureswap Docs",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Futureswap", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Futureswap",
      logo: {
        alt: "My Site Logo",
        src: "img/logo-green.svg",
        href: "http://futureswap.com"
      },
      links: [
        { to: "/welcome", label: "Docs", position: "left" },
        {
          href: "https://github.com/futureswap/docs",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
      darkTheme: require("prism-react-renderer/themes/nightOwl")
    },
    sidebarCollapsible: false
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/futureswap/docs/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
}
