"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, AlertCircle } from "lucide-react";

interface FaqItem {
  id?: number;
  question: string;
  answer: string;
}

export default function AdminFaqPage() {
  const [existingFaqs, setExistingFaqs] = useState<FaqItem[]>([]);
  const [newFaqs, setNewFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await fetch("/api/admin/faq");
      const data = await res.json();
      setExistingFaqs(data);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch FAQs:", error);
      setError("Failed to load FAQs. Please refresh the page.");
    }
  };

  const handleNewChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const updated = [...newFaqs];
    updated[index][field] = value;
    setNewFaqs(updated);
  };

  const addNewFaq = () =>
    setNewFaqs([...newFaqs, { question: "", answer: "" }]);

  const saveNewFaq = async (index: number) => {
    const faq = newFaqs[index];
    if (!faq.question.trim() || !faq.answer.trim()) {
      setError("Both question and answer are required.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await fetch("/api/admin/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faq),
      });
      setNewFaqs(newFaqs.filter((_, i) => i !== index));
      await fetchFaqs();
    } catch (error) {
      console.error("Failed to save new FAQ:", error);
      setError("Failed to save FAQ. Please try again.");
    }
    setLoading(false);
  };

  const deleteFaq = async (id?: number, index?: number, isNew?: boolean) => {
    if (isNew) {
      setNewFaqs(newFaqs.filter((_, i) => i !== index));
    } else if (id) {
      setError(null);
      try {
        await fetch("/api/admin/faq", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        await fetchFaqs();
      } catch (error) {
        console.error("Failed to delete FAQ:", error);
        setError("Failed to delete FAQ. Please try again.");
      }
    }
  };

  return (
    <div className="w-full mx-auto px-10 py-5 space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          FAQ Management
        </h1>
        <p className="mt-2 text-gray-600">
          Manage frequently asked questions for your users
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Published FAQs
          </h2>
          <span className="text-sm text-gray-500">
            {existingFaqs.length} {existingFaqs.length === 1 ? "item" : "items"}
          </span>
        </div>

        {existingFaqs.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-500">
              No FAQs published yet. Add your first FAQ below.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {existingFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Question
                      </p>
                      <p className="text-gray-900 font-medium">{faq.question}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Answer
                      </p>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteFaq(faq.id)}
                    className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                    title="Delete FAQ"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 pt-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Add New FAQ</h2>

        {newFaqs.length === 0 ? (
          <button
            type="button"
            onClick={addNewFaq}
            className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 hover:bg-emerald-50 transition-colors group"
          >
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 mx-auto mb-2" />
            <p className="text-gray-600 group-hover:text-emerald-700 font-medium">
              Add New FAQ
            </p>
          </button>
        ) : (
          <div className="space-y-4">
            {newFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-emerald-200 rounded-lg p-5 space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the question"
                    value={faq.question}
                    onChange={(e) =>
                      handleNewChange(index, "question", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Answer
                  </label>
                  <textarea
                    placeholder="Enter the answer"
                    value={faq.answer}
                    onChange={(e) =>
                      handleNewChange(index, "answer", e.target.value)
                    }
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    disabled={loading || !faq.question.trim() || !faq.answer.trim()}
                    onClick={() => saveNewFaq(index)}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? "Saving..." : "Save FAQ"}
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteFaq(undefined, index, true)}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 px-4 py-2.5 rounded-lg hover:bg-red-50 transition-colors font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addNewFaq}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Another FAQ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
