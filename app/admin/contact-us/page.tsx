"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, AlertCircle, XCircle } from "lucide-react";

interface ContactItem {
  id?: number;
  label: string;
  value: string;
  icon?: string;
}

const AdminContactPage = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [newContact, setNewContact] = useState<ContactItem>({
    label: "",
    value: "",
    icon: "",
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contact-info");
      const data = await res.json();
      setContacts(data);
      setError(null);
    } catch {
      setError("Failed to load contact information.");
    }
  };

  const handleChange = (id: number, field: string, value: string) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleDeleteConfirm = async () => {
    if (!confirmDeleteId) return;
    setLoading(true);

    try {
      await fetch("/api/admin/contact-info", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: confirmDeleteId }),
      });
      setContacts((prev) => prev.filter((c) => c.id !== confirmDeleteId));
      setConfirmDeleteId(null);
      setSuccess("Contact deleted successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch {
      setError("Failed to delete contact.");
    }

    setLoading(false);
  };

  const handleAdd = () => {
    if (!newContact.label.trim() || !newContact.value.trim()) {
      setError("Label and value are required.");
      return;
    }

    setContacts((prev) => [
      ...prev,
      { ...newContact, id: Date.now() }, // temporary ID for UI
    ]);
    setNewContact({ label: "", value: "", icon: "" });
    setShowAddModal(false);
  };

  const handleSaveAll = async () => {
    setLoading(true);
    setError(null);

    try {
      await fetch("/api/admin/contact-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacts }),
      });

      setSuccess("All contact information updated successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch {
      setError("Failed to save contact information.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full mx-auto px-10 py-5 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Contact Information
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your contact details displayed on the website
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Contact
        </button>
      </div>

      {/* Alerts */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      {success && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-800 text-sm">
          ✓ {success}
        </div>
      )}

      {/* Contact List */}
      {contacts.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-500">No contact information added yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white border border-gray-200 rounded-lg p-6 space-y-5 hover:shadow-sm transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Label
                  </label>
                  <input
                    type="text"
                    value={contact.label}
                    onChange={(e) =>
                      handleChange(contact.id!, "label", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Value
                  </label>
                  <input
                    type="text"
                    value={contact.value}
                    onChange={(e) =>
                      handleChange(contact.id!, "value", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon (optional)
                </label>
                <input
                  type="text"
                  value={contact.icon || ""}
                  onChange={(e) =>
                    handleChange(contact.id!, "icon", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="e.g., Phone, Mail, MapPin"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setConfirmDeleteId(contact.id!)}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 px-4 py-2.5 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Final Save All Button */}
      {contacts.length > 0 && (
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            onClick={handleSaveAll}
            disabled={loading}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors"
          >
            <Save className="w-4 h-4" />
            {loading ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      )}

      {/* Add New Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 space-y-6 relative animate-fadeIn">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-semibold text-gray-900">
              Add New Contact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Label
                </label>
                <input
                  type="text"
                  placeholder="e.g., Phone, Email, Address"
                  value={newContact.label}
                  onChange={(e) =>
                    setNewContact({ ...newContact, label: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value
                </label>
                <input
                  type="text"
                  placeholder="e.g., +1 (555) 000-0000"
                  value={newContact.value}
                  onChange={(e) =>
                    setNewContact({ ...newContact, value: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icon (optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Phone, Mail, MapPin"
                value={newContact.icon}
                onChange={(e) =>
                  setNewContact({ ...newContact, icon: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-700 hover:text-gray-900 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 space-y-4 text-center animate-fadeIn">
            <XCircle className="w-12 h-12 text-red-600 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">
              Delete this contact?
            </h3>
            <p className="text-gray-600 text-sm">
              This action cannot be undone. The contact will be permanently removed.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={loading}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow-sm transition"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContactPage;
