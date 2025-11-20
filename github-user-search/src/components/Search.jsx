import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await advancedUserSearch(username, location, minRepos);
      setResults(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Advanced GitHub User Search
      </h2>

      {/* ======= SEARCH FORM ======= */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white p-4 shadow rounded-lg"
      >
        <input
          type="text"
          placeholder="Username (optional)"
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="border p-2 rounded w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          className="border p-2 rounded w-full"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* ======= STATE HANDLING ======= */}
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* ======= RESULTS ======= */}
      <div className="mt-6">
        {results.length > 0 &&
          results.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow mb-3"
            >
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p>Score: {user.score}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
