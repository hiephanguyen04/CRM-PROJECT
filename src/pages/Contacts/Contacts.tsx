// src/pages/Contacts/Contacts.tsx
import React, { useEffect, useState } from "react";
import {
  Contact,
  ContactsState,
  List,
  TabType,
  Tag,
} from "../../types/contacts.types";

import {
  contactsData,
  filterOptions,
  listsData,
  tagsData,
} from "@/config/mockData";
import "./Contacts.css";
import ActionBar from "./components/ActionBar";
import ContactsTable from "./components/ContactsTable";
import Pagination from "./components/Pagination";
import AddListModal from "./modals/AddListModal";
import AddTagModal from "./modals/AddTagModal";
import EditListModal from "./modals/EditListModal";
import EditTagModal from "./modals/EditTagModal";
import ExportModal from "./modals/ExportModal";
import ListsModal from "./modals/ListsModal";
import TagsModal from "./modals/TagsModal";

const Contacts: React.FC = () => {
  // Initialize state
  const [state, setState] = useState<ContactsState>({
    selectedContacts: [],
    activeTab: "contacts",
    searchTerm: "",
    filterOptions: {
      primary: "",
      owner: "",
    },
    showListsModal: false,
    showTagsModal: false,
    showAddListModal: false,
    showEditListModal: false,
    showAddTagModal: false,
    showEditTagModal: false,
    showExportModal: false,
    currentPage: 1,
    itemsPerPage: 25,
    totalItems: contactsData.length,
  });

  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [lists, setLists] = useState<List[]>(listsData);
  const [tags, setTags] = useState<Tag[]>(tagsData);
  const [activeMenuItem, setActiveMenuItem] = useState<string>("contacts");

  // Filter contacts based on search term
  useEffect(() => {
    const filtered = contactsData.filter(
      (contact) =>
        contact.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        contact.phone.includes(state.searchTerm)
    );
    setContacts(filtered);
  }, [state.searchTerm]);

  // Handle tab changes
  const handleTabChange = (tab: TabType) => {
    setState({ ...state, activeTab: tab });
  };

  // Handle contact selection
  const handleContactSelect = (contactId: string) => {
    setState((prevState) => {
      if (prevState.selectedContacts.includes(contactId)) {
        return {
          ...prevState,
          selectedContacts: prevState.selectedContacts.filter(
            (id) => id !== contactId
          ),
        };
      } else {
        return {
          ...prevState,
          selectedContacts: [...prevState.selectedContacts, contactId],
        };
      }
    });
  };

  // Handle select all contacts
  const handleSelectAll = () => {
    setState((prevState) => {
      if (prevState.selectedContacts.length === contacts.length) {
        return { ...prevState, selectedContacts: [] };
      } else {
        return {
          ...prevState,
          selectedContacts: contacts.map((contact) => contact.id),
        };
      }
    });
  };

  // Handle search
  const handleSearch = (term: string) => {
    setState({ ...state, searchTerm: term });
  };

  // Handle filter changes
  const handleFilterChange = (type: "primary" | "owner", value: string) => {
    setState({
      ...state,
      filterOptions: {
        ...state.filterOptions,
        [type]: value,
      },
    });
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setState({ ...state, currentPage: page });
  };

  // Handle items per page change
  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setState({ ...state, itemsPerPage: itemsPerPage, currentPage: 1 });
  };

  // Calculate pagination
  const indexOfLastContact = state.currentPage * state.itemsPerPage;
  const indexOfFirstContact = indexOfLastContact - state.itemsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  // Modal toggle functions
  const toggleListsModal = () => {
    setState({ ...state, showListsModal: !state.showListsModal });
  };

  const toggleTagsModal = () => {
    setState({ ...state, showTagsModal: !state.showTagsModal });
  };

  const toggleAddListModal = () => {
    setState({
      ...state,
      showAddListModal: !state.showAddListModal,
      showListsModal: false,
    });
  };

  const toggleEditListModal = () => {
    setState({
      ...state,
      showEditListModal: !state.showEditListModal,
      showListsModal: false,
    });
  };

  const toggleAddTagModal = () => {
    setState({
      ...state,
      showAddTagModal: !state.showAddTagModal,
      showTagsModal: false,
    });
  };

  const toggleEditTagModal = () => {
    setState({
      ...state,
      showEditTagModal: !state.showEditTagModal,
      showTagsModal: false,
    });
  };

  const toggleExportModal = () => {
    setState({ ...state, showExportModal: !state.showExportModal });
  };

  return (
    <div className="app-container">
      {/* <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} /> */}

      <div className="content-wrapper">
        {/* <Header username="Sébastien Hanouna" role="CEO, Admin" /> */}

        <main>
          {/* <div className="main-content"> */}
          <ActionBar
            contactsCount={contacts.length}
            onSearch={handleSearch}
            searchTerm={state.searchTerm}
            filterOptions={filterOptions}
            selectedFilters={state.filterOptions}
            onFilterChange={handleFilterChange}
            onExportClick={toggleExportModal}
            onAddListClick={toggleListsModal}
            onAddTagClick={toggleTagsModal}
          />

          <ContactsTable
            contacts={currentContacts}
            selectedContacts={state.selectedContacts}
            onContactSelect={handleContactSelect}
            onSelectAll={handleSelectAll}
            allContactsSelected={
              state.selectedContacts.length === contacts.length &&
              contacts.length > 0
            }
          />

          <Pagination
            currentPage={state.currentPage}
            itemsPerPage={state.itemsPerPage}
            totalItems={contacts.length}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
          {/* </div> */}
        </main>
      </div>

      {/* Modals */}
      {state.showListsModal && (
        <ListsModal
          lists={lists}
          onClose={toggleListsModal}
          onAddList={toggleAddListModal}
          onEditList={toggleEditListModal}
        />
      )}

      {state.showTagsModal && (
        <TagsModal
          tags={tags}
          onClose={toggleTagsModal}
          onAddTag={toggleAddTagModal}
          onEditTag={toggleEditTagModal}
        />
      )}

      {state.showAddListModal && (
        <AddListModal
          onClose={toggleAddListModal}
          onSave={(name) => {
            const newList = {
              id: `list-${lists.length + 1}`,
              name,
              contactCount: 0,
            };
            setLists([...lists, newList]);
            toggleAddListModal();
          }}
        />
      )}

      {state.showEditListModal && (
        <EditListModal
          list={lists[0]}
          onClose={toggleEditListModal}
          onSave={(id, name) => {
            const updatedLists = lists.map((list) =>
              list.id === id ? { ...list, name } : list
            );
            setLists(updatedLists);
            toggleEditListModal();
          }}
        />
      )}

      {state.showAddTagModal && (
        <AddTagModal
          onClose={toggleAddTagModal}
          onSave={(name, color) => {
            const newTag = {
              id: `tag-${tags.length + 1}`,
              name,
              color,
              contactCount: 0,
            };
            setTags([...tags, newTag]);
            toggleAddTagModal();
          }}
        />
      )}

      {state.showEditTagModal && (
        <EditTagModal
          tag={tags[0]}
          onClose={toggleEditTagModal}
          onSave={(id, name) => {
            const updatedTags = tags.map((tag) =>
              tag.id === id ? { ...tag, name } : tag
            );
            setTags(updatedTags);
            toggleEditTagModal();
          }}
        />
      )}

      {state.showExportModal && (
        <ExportModal
          onClose={toggleExportModal}
          onExport={(format, filename, options) => {
            console.log(`Exporting ${format} with filename ${filename}`);
            console.log("Options:", options);
            toggleExportModal();
          }}
        />
      )}
    </div>
  );
};

export default Contacts;
