import { useEffect } from 'react';

/**
 * A custom hook to set the document title with a specified format.
 * @param title - The page-specific part of the title (will be formatted as "title | John Paul Varde")
 * @param prevailOnUnmount - If true, the title won't be reset when component unmounts
 */
export const useDocumentTitle = (title: string, prevailOnUnmount = false) => {
  const defaultTitle = 'John Paul Varde | Portfolio';
  
  useEffect(() => {
    // Set the new title when component mounts
    const newTitle = title ? `${title} | John Paul Varde` : defaultTitle;
    document.title = newTitle;

    // Optionally restore the default title when component unmounts
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle;
      }
    };
  }, [title, prevailOnUnmount]);
};

export default useDocumentTitle;