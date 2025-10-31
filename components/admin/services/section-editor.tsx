"use client"

import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface Paragraph {
  text: string
}

interface ListItem {
  text: string
}

interface Section {
  title: string
  paragraphs: Paragraph[]
  listItems: ListItem[]
}

interface SectionEditorProps {
  section: Section
  index: number
  onUpdate: (index: number, section: Section) => void
  onRemove: (index: number) => void
}

export default function SectionEditor({ section, index, onUpdate, onRemove }: SectionEditorProps) {
  const handleTitleChange = (value: string) => {
    onUpdate(index, { ...section, title: value })
  }

  const addParagraph = () => {
    onUpdate(index, {
      ...section,
      paragraphs: [...section.paragraphs, { text: "" }],
    })
  }

  const updateParagraph = (pIndex: number, text: string) => {
    const newParagraphs = [...section.paragraphs]
    newParagraphs[pIndex].text = text
    onUpdate(index, { ...section, paragraphs: newParagraphs })
  }

  const removeParagraph = (pIndex: number) => {
    const newParagraphs = section.paragraphs.filter((_, i) => i !== pIndex)
    onUpdate(index, { ...section, paragraphs: newParagraphs })
  }

  const addListItem = () => {
    onUpdate(index, {
      ...section,
      listItems: [...section.listItems, { text: "" }],
    })
  }

  const updateListItem = (lIndex: number, text: string) => {
    const newItems = [...section.listItems]
    newItems[lIndex].text = text
    onUpdate(index, { ...section, listItems: newItems })
  }

  const removeListItem = (lIndex: number) => {
    const newItems = section.listItems.filter((_, i) => i !== lIndex)
    onUpdate(index, { ...section, listItems: newItems })
  }

  return (
    <Card className="p-4 space-y-4 border border-border">
      {/* Section Title */}
      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <label className="text-sm font-medium text-foreground block mb-1">Section Title</label>
          <Input
            placeholder="Section title"
            value={section.title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>
        <Button variant="destructive" size="sm" onClick={() => onRemove(index)} className="gap-2">
          <Trash2 className="w-4 h-4" />
          Remove
        </Button>
      </div>

      {/* Paragraphs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">Paragraphs</label>
          <Button onClick={addParagraph} variant="outline" size="sm" className="gap-1 bg-transparent">
            <Plus className="w-3 h-3" />
            Add
          </Button>
        </div>
        <div className="space-y-2">
          {section.paragraphs.map((para, pIndex) => (
            <div key={pIndex} className="flex gap-2 items-start">
              <Textarea
                placeholder="Enter paragraph text"
                value={para.text}
                onChange={(e) => updateParagraph(pIndex, e.target.value)}
                rows={2}
                className="flex-1"
              />
              {section.paragraphs.length > 1 && (
                <Button variant="ghost" size="sm" onClick={() => removeParagraph(pIndex)} className="mt-1">
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* List Items */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">List Items</label>
          <Button onClick={addListItem} variant="outline" size="sm" className="gap-1 bg-transparent">
            <Plus className="w-3 h-3" />
            Add
          </Button>
        </div>
        <div className="space-y-2">
          {section.listItems.map((item, lIndex) => (
            <div key={lIndex} className="flex gap-2 items-center">
              <Input
                placeholder="Enter list item"
                value={item.text}
                onChange={(e) => updateListItem(lIndex, e.target.value)}
              />
              {section.listItems.length > 1 && (
                <Button variant="ghost" size="sm" onClick={() => removeListItem(lIndex)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
