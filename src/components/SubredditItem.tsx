import Link from 'next/link';
import { ChevronUp, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';

interface Post {
  id: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  url: string;
}

interface SubredditItemProps {
  post: Post;
}

export function SubredditItem({ post }: SubredditItemProps) {
  return (
    <li>
      <Link
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start"
      >
        <Card className="flex items-start p-4 w-full rounded-lg transition-transform transform hover:scale-105">
          <div className="flex flex-col items-start mr-3 w-16">
            <div className="flex items-center w-full mb-3">
              <ChevronUp className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-xs font-medium text-muted-foreground">
                {post.score}
              </span>
            </div>
            <div className="flex items-center w-full">
              <MessageSquare className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-xs font-medium text-muted-foreground">
                {post.num_comments}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium line-clamp-2 mb-1">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground truncate">
              Posted by {post.author}
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
}
