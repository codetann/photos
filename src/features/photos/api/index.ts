import { useApi } from "@hooks";

export function useCuratedPhotos(page = 1, perPage = 10) {
  return useApi(`curated?page=${page}&per_page=${perPage}`);
}

export function usePhotoById(id: string) {
  return useApi(`photos/${id}`);
}

export function usePhotosByCategory(category: string, page = 1, perPage = 10) {
  return useApi(`search/${category}?page=${page}&per_page=${perPage}`);
}
