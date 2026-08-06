import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"

interface ResourceEmptyStateProps {
  description: string
  onClearFilters?: () => void
}

export function ResourceEmptyState({ description, onClearFilters }: ResourceEmptyStateProps) {
  return (
    <Empty className="rounded-[40px_10px_40px_40px] border border-deep-ocean/10 bg-white/60">
      <EmptyHeader>
        <EmptyTitle className="text-deep-ocean">No matching resources</EmptyTitle>
        <EmptyDescription className="text-deep-ocean/60">{description}</EmptyDescription>
      </EmptyHeader>
      {onClearFilters && (
        <EmptyContent>
          <Button type="button" variant="outline" onClick={onClearFilters}>
            <RotateCcw data-icon="inline-start" aria-hidden="true" />
            Clear search and filters
          </Button>
        </EmptyContent>
      )}
    </Empty>
  )
}
