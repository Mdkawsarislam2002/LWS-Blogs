/* eslint-disable no-case-declarations */
// eslint-disable-next-line react/prop-types
const sortBy = (savedBlogs, sortValue) => {
  // "newest"
  // "most_liked"
  // "default"

  switch (sortValue) {
    case "newest":
      let result = [];
      let temp = 0;
      for (let z = 0; z < savedBlogs.length; z++) {
        const dates = new Date(savedBlogs[z]?.createdAt);
        if (dates > temp) {
          temp = dates;
          result.push(savedBlogs[z]);
        }
      }

      return result.reverse();

    case "most_liked":
      let res = [];
      let counter = 0;
      for (let i = 0; i < savedBlogs.length; i++) {
        if (savedBlogs[i].likes > counter) {
          res.push(savedBlogs[i]);
          counter = savedBlogs[i].likes;
        }
      }

      return res.reverse();
    case "default":
      return savedBlogs;

    default:
      return savedBlogs;
  }
};

export default sortBy;
