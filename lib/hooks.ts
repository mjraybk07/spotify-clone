import useSWR from 'swr';
import fetcher from './fetcher';

// hook to get user
export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

// hook to get playlist for sidebar
export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}