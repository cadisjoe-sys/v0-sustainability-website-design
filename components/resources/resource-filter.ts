const filterGroups = {
  contentType: ["Articles", "Guides", "Podcasts", "Reports", "Videos"],
  topics: [
    "Carbon",
    "Circular Economy",
    "Climate Action",
    "Climate Justice",
    "Electrification",
    "ESG Reporting",
    "EV",
    "Food Systems",
    "Forest Management",
    "Innovation",
    "Policy",
    "Regulation",
    "Renewable Energy",
    "Supply Chain",
    "Waste",
  ],
  industries: [
    "Agriculture",
    "Consumer Products",
    "Energy",
    "Finance",
    "Green Buildings",
    "Healthcare",
    "Manufacturing",
    "Plastics",
    "Retail",
    "Technology",
    "Textiles & Fashion",
  ],
}

const normalizedGroups = Object.values(filterGroups).map((group) => group.map((value) => value.toLowerCase()))

export function matchesResourceFilters(
  searchText: string,
  tags: string[],
  searchQuery: string,
  activeFilters: string[],
): boolean {
  const normalizedTags = tags.map((tag) => tag.toLowerCase())
  const haystack = `${searchText} ${tags.join(" ")}`.toLowerCase()
  const query = searchQuery.trim().toLowerCase()

  if (query && !haystack.includes(query)) return false
  if (!activeFilters.length) return true

  const normalizedFilters = activeFilters.map((filter) => filter.toLowerCase())
  const groupedMatches = normalizedGroups.every((group) => {
    const selectedInGroup = normalizedFilters.filter((filter) => group.includes(filter))
    return selectedInGroup.length === 0 || selectedInGroup.some((filter) => normalizedTags.includes(filter))
  })
  const knownFilters = new Set(normalizedGroups.flat())
  const selectedOther = normalizedFilters.filter((filter) => !knownFilters.has(filter))
  const otherMatches = selectedOther.length === 0 || selectedOther.some((filter) => normalizedTags.includes(filter))

  return groupedMatches && otherMatches
}
