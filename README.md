# Reddview

A Reddit client that allows users to view recent posts from multiple subreddits simultaneously.

Built to satisfy the requirements of the [Reddit Client](https://roadmap.sh/projects/reddit-client) project on roadmaps.sh.

## Features

- Add and remove subreddits dynamically
- View recent posts from multiple subreddits in separate lanes
- Persistent storage of subreddit selections using localStorage
- Real-time updates with refresh functionality

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/akinghill/reddview.git
   cd reddview
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Click the "Add Subreddit" button to open the dialog.
2. Enter the name of a subreddit you want to follow.
3. Click "Add Subreddit" in the dialog to add it to your view.
4. Scroll horizontally to view multiple subreddit lanes.
5. Use the refresh button on each lane to update the posts.
6. Click the X button to remove a subreddit from your view.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
