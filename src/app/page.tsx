'use client';

import { useEffect, useRef, useState } from 'react';
import { SubredditLane } from '@/components/SubredditLane';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AddSubredditDialog } from '@/components/AddSubredditDialog';

const LOCAL_STORAGE_KEY = 'subreddits';

export default function Home() {
  const [subreddits, setSubreddits] = useState<string[]>([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      const storedSubreddits = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedSubreddits) {
        setSubreddits(JSON.parse(storedSubreddits));
      }
      initializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (initializedRef.current) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subreddits));
    }
  }, [subreddits]);

  const addSubreddit = (newSubreddit: string) => {
    if (newSubreddit && !subreddits.includes(newSubreddit)) {
      setSubreddits((prevSubreddits) => [...prevSubreddits, newSubreddit]);
    }
  };

  const removeSubreddit = (subredditToRemove: string) => {
    setSubreddits((prevSubreddits) =>
      prevSubreddits.filter((subreddit) => subreddit !== subredditToRemove)
    );
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <h1 className="text-2xl font-bold mb-4 underline underline-offset-4 decoration-primary">
        ./<span className="text-primary under">Redd</span>view
      </h1>
      <div className="w-80 flex justify-between">
        <AddSubredditDialog onAddSubreddit={addSubreddit} />
        <ThemeToggle />
      </div>
      <div className="mt-4 flex space-x-4 overflow-x-auto">
        {subreddits.map((subreddit) => (
          <SubredditLane
            key={subreddit}
            subreddit={subreddit}
            onRemove={removeSubreddit}
          />
        ))}
      </div>
    </div>
  );
}
