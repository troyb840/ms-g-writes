"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookCard, type BookCardData, PLACEHOLDER_BOOKS } from "./BookCard";

const TABS = [
  { value: "all", label: "All Books" },
  { value: "children-6-8", label: "Ages 6–8" },
  { value: "children-9-12", label: "Ages 9–12" },
  { value: "young-adult", label: "Young Adult" },
  { value: "adult", label: "Adult" },
];

type Props = {
  books: BookCardData[];
};

export function BooksGrid({ books }: Props) {
  const [activeTab, setActiveTab] = useState("all");

  const displayBooks = books.length > 0 ? books : PLACEHOLDER_BOOKS;

  const filtered =
    activeTab === "all"
      ? displayBooks
      : displayBooks.filter((b) => b.audience === activeTab);

  // Only show tabs that have at least one book, plus "All"
  const audiencesWithBooks = new Set(displayBooks.map((b) => b.audience));
  const visibleTabs = TABS.filter(
    (t) => t.value === "all" || audiencesWithBooks.has(t.value)
  );

  return (
    <div>
      {/* Filter tabs */}
      {visibleTabs.length > 2 && (
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {visibleTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-pill px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-coral text-cream shadow-warm"
                  : "bg-peach-100 text-terracotta/70 hover:bg-peach-200 hover:text-terracotta"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.length > 0 ? (
            filtered.map((book) => <BookCard key={book._id} book={book} />)
          ) : (
            <p className="col-span-full py-12 text-center text-sm text-terracotta/50">
              No books in this category yet — check back soon!
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
