export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f92a8f5e7fbadb55453d45",
                  title: "Sanity Studio",
                  name: "a-tester-blog-studio",
                  apiId: "64d28c47-542d-4df6-8761-35cdb0d77aa5",
                },
                {
                  buildHookId: "61f92a8fbf9f47bbfd6d0fdd",
                  title: "Blog Website",
                  name: "a-tester-blog",
                  apiId: "97810a0d-87a1-44a0-9f36-d0b1c2cc93cb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/robbiejdunne/a-tester-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://a-tester-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
