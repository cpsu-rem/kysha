import { useState, useEffect } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      setQuotes(data.quotes);
    };

    fetchQuotes();
  }, []);

  return (
    <div className="bg-gray-50 w-full min-h-screen p-6 relative pt-32">
      <h1 className="text-3xl font-bold text-gray-800 text-left mb-8">
        Quotes
        <hr />
      </h1>
      <div className="space-y-6">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 p-4"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Author: {quote.author}
            </h2>
            <p className="text-sm text-gray-600 italic">"{quote.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
