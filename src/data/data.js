module.exports = {
  SiteTitle: "Vichea",
  Sitelogo: "#",
  SiteLogoText: "Vichea Nath",
  SiteAuthor: "Vichea Nath",
  SiteDescription: "UX/UI Designer & Web Developer",
  defaultDescription: "Software engineer!",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    twitter: "",
    github: "https://github.com/vicheanath",
    linkedin: "https://www.linkedin.com/in/vicheanath",
  },
  SiteAddress: {
    city: "Phnom Phenh",
    region: "Khmer",
    country: "Cambodia",
    zipCode: "1200",
  },
  SiteContact: {
    email: "nathvichea1@gmail.com",
    phone: "+(855)96 63 33 109",
  },
  SiteCopyright: "2021",
}
