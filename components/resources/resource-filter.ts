// Shared matching logic for the Resource Hub search + filter chips.
//
// An item is shown when it matches the free-text search (if any) AND
// matches at least one active filter chip (if any are selected).
//
// - `searchText` is the combined searchable text for an item (title, description, etc.)
//   and is matched loosely via substring so search stays forgiving.
// - `tags` are the item's explicit tags/categories and are matched against the
//   active filter chips using exact (case-insensitive) equality. This prevents
//   false positives like the "EV" chip matching the word "every".
export function matchesResourceFilters(
  searchText: string,
  tags: string[],
  searchQuery: string,
  activeFilters: string[],
): boolean {
  const haystack = `${searchText} ${tags.join(" ")}`.toLowerCase()
  const normalizedTags = tags.map((t) => t.toLowerCase())

  const matchesSearch = !searchQuery || haystack.includes(searchQuery.toLowerCase())

  const matchesFilters =
    !activeFilters ||
    activeFilters.length === 0 ||
    activeFilters.some((f) => normalizedTags.includes(f.toLowerCase()))

  return matchesSearch && matchesFilters
}
