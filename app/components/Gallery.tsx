"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  desc: string;
  url: string;
  span: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Dark Charcoal Refinish",
    desc: "Stunning charcoal stain with high-gloss finish",
    url: "/floor-charcoal.jpg",
    span: "md:col-span-2 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    title: "Herringbone Pattern",
    desc: "Custom intricate herringbone design in progress",
    url: "/floor-herringbone.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 3,
    title: "Natural Oak Install",
    desc: "Wide-plank natural oak with white stair railing",
    url: "/floor-oak.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    title: "Walnut Staircase",
    desc: "Rich walnut floors with iron baluster staircase",
    url: "/floor-walnut-stairs.jpg",
    span: "md:col-span-2 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    title: "Charcoal Detail",
    desc: "Gleaming dark floor reflecting natural light",
    url: "/floor-charcoal.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    title: "Herringbone Close-Up",
    desc: "Precision craftsmanship on curved wall layout",
    url: "/floor-herringbone.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    title: "Oak Open Floor Plan",
    desc: "Flowing natural oak through open living space",
    url: "/floor-oak.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
];

// ── Modal ──────────────────────────────────────────────────────────────────
function GalleryModal({
  selectedItem,
  onClose,
  setSelectedItem,
  items,
}: {
  selectedItem: MediaItem;
  onClose: () => void;
  setSelectedItem: (item: MediaItem) => void;
  items: MediaItem[];
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-4 sm:inset-8 md:inset-16 z-50 rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Close button */}
        <motion.button
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-4 h-4" />
        </motion.button>

        {/* Main image */}
        <div className="flex-1 flex items-center justify-center p-6 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className="relative w-full h-full max-w-3xl rounded-xl overflow-hidden shadow-2xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-display), serif" }}>
                  {selectedItem.title}
                </h3>
                <p className="text-white/70 text-sm mt-0.5" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                  {selectedItem.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail dock */}
        <div className="flex-shrink-0 p-4 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {items.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  selectedItem.id === item.id
                    ? "ring-2 ring-amber-400 scale-110"
                    : "opacity-50 hover:opacity-100 hover:scale-105"
                }`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

// ── Main Gallery ────────────────────────────────────────────────────────────
export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section
      id="gallery"
      style={{
        background: "var(--bg-page)",
        padding: "5rem 2rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <span className="section-eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>Our Work</span>
          <h2 className="section-heading" style={{ margin: "0 auto" }}>Completed Projects</h2>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              fontWeight: 300,
              marginTop: "0.75rem",
            }}
          >
            Click any photo to explore · Drag to rearrange
          </p>
        </div>

        {/* Bento grid */}
        <AnimatePresence mode="wait">
          {!selectedItem && (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[80px]"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
              }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`media-${item.id}`}
                  className={`relative overflow-hidden rounded-xl cursor-pointer ${item.span}`}
                  onClick={() => !isDragging && setSelectedItem(item)}
                  variants={{
                    hidden: { y: 30, opacity: 0, scale: 0.95 },
                    visible: {
                      y: 0, opacity: 1, scale: 1,
                      transition: { type: "spring", stiffness: 350, damping: 25, delay: index * 0.04 },
                    },
                  }}
                  whileHover={{ scale: 1.02 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.8}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(_, info) => {
                    setIsDragging(false);
                    const dist = info.offset.x + info.offset.y;
                    if (Math.abs(dist) > 50) {
                      const newItems = [...items];
                      const dragged = newItems.splice(index, 1)[0];
                      const target = dist > 0
                        ? Math.min(index + 1, items.length - 1)
                        : Math.max(index - 1, 0);
                      newItems.splice(target, 0, dragged);
                      setItems(newItems);
                    }
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-3"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <h3 className="relative text-white text-xs sm:text-sm font-semibold line-clamp-1" style={{ fontFamily: "var(--font-display), serif" }}>
                      {item.title}
                    </h3>
                    <p className="relative text-white/70 text-[10px] sm:text-xs mt-0.5 line-clamp-1" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <GalleryModal
              selectedItem={selectedItem}
              onClose={() => setSelectedItem(null)}
              setSelectedItem={setSelectedItem}
              items={items}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
