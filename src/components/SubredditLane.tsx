'use client';

import { useState, useEffect, useCallback } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchSubredditPosts } from '@/app/api';
import { SubredditItem } from './SubredditItem';

interface Post {
  id: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  url: string;
}

interface SubredditLaneProps {
  subreddit: string;
  onRemove: (subreddit: string) => void;
}

export function SubredditLane({ subreddit, onRemove }: SubredditLaneProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedPosts = await fetchSubredditPosts(subreddit);
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [subreddit]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <div className="flex-shrink-0 w-80 bg-card rounded-lg shadow-lg p-4 h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">r/{subreddit}</h2>
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={loadPosts}
            aria-label="Refresh posts"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onRemove(subreddit)}
            aria-label="Remove subreddit"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : error ? (
        <p className="text-destructive">{error}</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <SubredditItem post={post} key={post.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
