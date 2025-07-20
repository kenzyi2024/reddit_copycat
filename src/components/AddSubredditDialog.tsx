"use client"

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface AddSubredditDialogProps {
  onAddSubreddit: (subreddit: string) => void
}

export function AddSubredditDialog({ onAddSubreddit }: AddSubredditDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [newSubreddit, setNewSubreddit] = useState('')

  const handleAddSubreddit = () => {
    if (newSubreddit) {
      onAddSubreddit(newSubreddit)
      setNewSubreddit('')
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Subreddit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter the name of the subreddit</DialogTitle>
        </DialogHeader>
        <Input
          value={newSubreddit}
          onChange={(e) => setNewSubreddit(e.target.value)}
          placeholder="e.g., AskReddit"
        />
        <Button variant={'secondary'} onClick={handleAddSubreddit}>Add Subreddit</Button>
      </DialogContent>
    </Dialog>
  )
}