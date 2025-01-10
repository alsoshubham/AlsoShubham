import axios from "axios";

export async function getRepos() {
  try {
    let result = await axios
      .get(
        "https://api.github.com/search/repositories?q=user:alsoshubham&sort=updated&order=desc&per_page=5"
      )
      .then((res) => res.data);

    result = result.items.map((item) => ({
      id: item.id,
      title: item.name,
      description: item.description,
      image: `https://raw.githubusercontent.com/alsoshubham/${item.name}/main/thumbnail.png`,
      tag: ["All", "Web"],
      gitUrl: item.html_url,
      previewUrl: item.html_url,
    }));

    return result;
  } catch (error) {
    return error;
  }
}
