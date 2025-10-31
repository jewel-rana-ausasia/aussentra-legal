"use client"

import { Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  title: string
  slug: string
  image?: string
  page?: {
    title: string
    description: string
    heroImage?: string
  }
}

interface ServiceCardProps {
  service: Service
  onEdit: (service: Service) => void
  onDelete: (slug: string, title: string) => void
}

export default function ServiceCard({ service, onEdit, onDelete }: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={service.image || "/placeholder.svg?height=200&width=400&query=service"}
          alt={service.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-48">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">{service.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">/{service.slug}</p>
          {service.page?.description && (
            <p className="text-sm text-foreground/70 mt-2 line-clamp-2">{service.page.description}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-border">
          <Button variant="outline" size="sm" onClick={() => onEdit(service)} className="flex-1 gap-2">
            <Edit2 className="w-4 h-4" />
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(service.slug, service.title)}
            className="flex-1 gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
