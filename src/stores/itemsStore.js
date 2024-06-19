import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
    persist(
        (set) => ({
            items: initialItems,
            setItems: (newItemText) => {
              const newItem = {
                id: new Date().getTime(),
                name: newItemText,
                packed: false,
              };
      
              set((state) => ({ items: [...state.items, newItem] }));
            },


            handleDeleteItem: (id) => {
                set((state) => {
                    const newItems = state.items.filter((item) => item.id !== id);
                    return { items: newItems };
                });
            },


            markChecked: (id) => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        if (item.id === id) {
                            return { ...item, packed: !item.packed };
                        }

                        return item;
                    });
                    return { items: newItems };
                });
            },



            handleDeleteAll: () => {
                set(() => {

                    return { items: [] };
                }
                );
            },

            resetAll: () => {
                set(() => {
                    return { items: initialItems }
                }
                )
            },



            markAllComplete: () => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        return { ...item, packed: true };
                    });

                    return { items: newItems };
                });
            },


            markAllIncomplete: () => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        return { ...item, packed: false };
                    });

                    return { items: newItems };
                });
            },
        }),
        {
            name: "items",
        }
    )
);