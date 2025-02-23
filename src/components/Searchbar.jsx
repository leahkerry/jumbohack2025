import { useState } from "react";
// import { Input } from "@/components/ui/input.tsx";
// import { Button } from "@/components/ui/button.tsx";
// import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_self");
    }
  };

  return (
    <div className="flex items-center gap-2 border p-2 rounded-xl shadow-sm w-full max-w-md">
      <input
        type="text"
        placeholder="Search on Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 gap-2 border p-2 rounded-xl shadow-sm w-full max-w-md"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        id="searchbar"
      />
      {/* <button onClick={handleSearch} variant="outline">
        <Search className="w-5 h-5" />
      </button> */}
    </div>
  );
}
