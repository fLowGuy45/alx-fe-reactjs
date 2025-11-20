import axios from "axios";

// Advanced user search using GitHub Search API
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query.trim()}`;

  const response = await axios.get(url);
  return response.data.items; // return array of users
};
