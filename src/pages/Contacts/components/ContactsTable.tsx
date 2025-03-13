// src/pages/Contacts/components/ContactsTable.tsx
import React from "react";
import { Contact } from "../../../types/contacts.types";

interface ContactsTableProps {
  contacts: Contact[];
  selectedContacts: string[];
  onContactSelect: (contactId: string) => void;
  onSelectAll: () => void;
  allContactsSelected: boolean;
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  selectedContacts,
  onContactSelect,
  onSelectAll,
  allContactsSelected,
}) => {
  return (
    <div className="contacts-table">
      <table>
        <thead>
          <tr>
            <th className="checkbox-col">
              <input
                type="checkbox"
                checked={allContactsSelected}
                onChange={onSelectAll}
              />
            </th>
            <th className="name-col">Nom du contact</th>
            <th className="email-col">Email</th>
            <th className="phone-col">Téléphone</th>
            <th className="opportunity-col">Opportunité</th>
            <th className="owner-col">Responsable</th>
            <th className="tags-col">Étiquettes</th>
            <th className="actions-col"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="contact-row">
              <td className="checkbox-col">
                <input
                  type="checkbox"
                  checked={selectedContacts.includes(contact.id)}
                  onChange={() => onContactSelect(contact.id)}
                />
              </td>
              <td className="name-col">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-type">{contact.type}</div>
              </td>
              <td className="email-col">
                <div className="email-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {contact.email}
              </td>
              <td className="phone-col">
                <div className="phone-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {contact.phone}
              </td>
              <td className="opportunity-col">{contact.opportunity}</td>
              <td className="owner-col">
                <div className="owner">
                  {contact.owner.avatar ? (
                    <img
                      src={contact.owner.avatar}
                      alt={`${contact.owner.name} Avatar`}
                      className="owner-avatar"
                    />
                  ) : (
                    <div className="owner-avatar-placeholder">
                      {contact.owner.name.charAt(0)}
                    </div>
                  )}
                  <span>{contact.owner.name}</span>
                </div>
              </td>
              <td className="tags-col">
                <div className="tags">
                  {contact.tags.map((tag) => (
                    <span key={tag} className={`tag ${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="actions-col">
                <button className="edit-button">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="delete-button">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
