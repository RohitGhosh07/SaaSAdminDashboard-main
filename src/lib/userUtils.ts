/**
 * Utility functions for user-related operations
 */

/**
 * Generates initials from a user's name
 * @param name - The user's full name
 * @returns The initials (max 2 characters)
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const nameParts = name.trim().split(' ').filter(part => part.length > 0);
  
  if (nameParts.length === 0) return '';
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
  
  // Get first letter of first name and first letter of last name
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Generates a color based on the user's name for consistent avatar backgrounds
 * @param name - The user's name
 * @returns A CSS color string
 */
export const getAvatarColor = (name: string): string => {
  if (!name) return '#6B7280'; // Default gray
  
  const colors = [
    '#EF4444', // Red
    '#F97316', // Orange
    '#F59E0B', // Amber
    '#84CC16', // Lime
    '#10B981', // Emerald
    '#06B6D4', // Cyan
    '#3B82F6', // Blue
    '#6366F1', // Indigo
    '#8B5CF6', // Violet
    '#EC4899', // Pink
  ];
  
  // Simple hash function to get consistent color based on name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return colors[Math.abs(hash) % colors.length];
};