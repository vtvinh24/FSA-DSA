import { useState, useEffect } from 'react';

const useTextFile = (day, id, fileName) => {
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchTextFile = async () => {
      try {
        const response = await fetch(`/data/${day}/${id}/${fileName}`);  // Directly reference the file in public/data

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const fileText = await response.text();
        setText(fileText);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTextFile();
  }, [day, id]);

  return { text, loading, error };
};

export default useTextFile;
