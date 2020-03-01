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
      title: "Futureswap Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo-green.svg",
        href: "/welcome"
      },
      links: [
        {
          to: "http://futureswap.com",
          label: "Home",
          position: "right"
        },
        {
          to: "https://discord.gg/dH4X89F",
          label: "Community",
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
  stylesheets: [    
         {
      href: "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,700&display=swap",
      type: 'text/css',
    },
  ],
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
