export type Role = 'customer' | 'provider' | 'admin'

export type Category = {
  id: string
  name: string
  icon: string
  description: string
  basePrice: number
  demand: number
}

export type Provider = {
  id: string
  name: string
  businessName: string
  category: string
  rating: number
  reviews: number
  verified: boolean
  locality: string
  priceRange: string
  serviceAreas: string[]
  availability: string[]
  description: string
  skills: string[]
  experience: string
  phone: string
}

export type Booking = {
  id: string
  customerName: string
  providerId: string
  providerName: string
  category: string
  status: 'pending' | 'accepted' | 'rejected' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'disputed'
  scheduledAt: string
  locality: string
  amount: number
  notes: string
}

export type ServiceRequest = {
  id: string
  title: string
  category: string
  description: string
  locality: string
  status: 'draft' | 'published' | 'matched' | 'fulfilled'
  createdAt: string
}

export type CommunityPost = {
  id: string
  title: string
  category: string
  description: string
  locality: string
  createdAt: string
  type: 'recommendation' | 'lost-found' | 'help' | 'announcement'
}

export type Notification = {
  id: string
  type: 'booking' | 'message' | 'system'
  title: string
  text: string
  read: boolean
}

export type UserProfile = {
  id: string
  role: Role
  name: string
  phone: string
  locality: string
  language: 'English' | 'Hindi' | 'Hinglish'
}

export type AppStore = {
  users: UserProfile[]
  categories: Category[]
  providers: Provider[]
  bookings: Booking[]
  serviceRequests: ServiceRequest[]
  communityPosts: CommunityPost[]
  notifications: Notification[]
  currentUserId: string
}
