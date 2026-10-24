import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { safeLocalStorage, seedStore } from '../data/demoData'
import type { AppStore, Booking, Notification, Provider, ServiceRequest, UserProfile } from '../types'

type AppContextValue = {
  store: AppStore
  currentUser: UserProfile | undefined
  categories: AppStore['categories']
  providers: Provider[]
  bookings: Booking[]
  notifications: Notification[]
  serviceRequests: ServiceRequest[]
  setCurrentUserId: (id: string) => void
  addBooking: (booking: Booking) => void
  updateBookingStatus: (id: string, status: Booking['status']) => void
  addServiceRequest: (request: ServiceRequest) => void
  addNotification: (item: Notification) => void
  approveVerification: (providerId: string) => void
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, setStore] = useState<AppStore>(() => safeLocalStorage.get())

  useEffect(() => {
    safeLocalStorage.set(store)
  }, [store])

  const currentUser = useMemo(
    () => store.users.find((u) => u.id === store.currentUserId),
    [store.currentUserId, store.users]
  )

  const value = useMemo<AppContextValue>(
    () => ({
      store,
      currentUser,
      categories: store.categories,
      providers: store.providers,
      bookings: store.bookings,
      notifications: store.notifications,
      serviceRequests: store.serviceRequests,
      setCurrentUserId: (id) => setStore((prev) => ({ ...prev, currentUserId: id })),
      addBooking: (booking) => setStore((prev) => ({ ...prev, bookings: [booking, ...prev.bookings] })),
      updateBookingStatus: (id, status) =>
        setStore((prev) => ({
          ...prev,
          bookings: prev.bookings.map((booking) => (booking.id === id ? { ...booking, status } : booking))
        })),
      addServiceRequest: (request) =>
        setStore((prev) => ({
          ...prev,
          serviceRequests: [request, ...prev.serviceRequests]
        })),
      addNotification: (item) =>
        setStore((prev) => ({
          ...prev,
          notifications: [item, ...prev.notifications]
        })),
      approveVerification: (providerId) =>
        setStore((prev) => ({
          ...prev,
          providers: prev.providers.map((provider) =>
            provider.id === providerId ? { ...provider, verified: true } : provider
          )
        }))
    }),
    [currentUser, store]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used inside AppProvider')
  return ctx
}

export const resetDemoStore = () => {
  localStorage.setItem('apnalocal-demo-store', JSON.stringify(seedStore))
}
