export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return 'Yesterday';
  }
  
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }
  
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks}w ago`;
  }
  
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months}mo ago`;
  }
  
  const years = Math.floor(diffInDays / 365);
  return `${years}y ago`;
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
} 