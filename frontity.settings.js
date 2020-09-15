const settings = {
  "name": "frontity-test",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/in-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://admin.image-nation.org/wp-json",
          
          "postTypes": [
            {
              type: "video",
              endpoint: "video",
              archive: "/videos",
            },
          ],
          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
