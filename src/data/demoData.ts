import { type AppStore, type Category, type CommunityPost, type Notification, type Provider, type ServiceRequest, type UserProfile } from '../types'

export const demoCategories: Category[] = [
  { id: 'plumbing', name: 'Plumbing', icon: '🔧', description: 'Tap leak, pipe repair, bathroom fittings', basePrice: 499, demand: 92 },
  { id: 'electrical', name: 'Electrical', icon: '💡', description: 'Wiring, switch repair, light fixtures', basePrice: 599, demand: 86 },
  { id: 'carpentry', name: 'Carpentry', icon: '🪵', description: 'Furniture repair and custom woodwork', basePrice: 699, demand: 62 },
  { id: 'cleaning', name: 'Cleaning', icon: '🧼', description: 'Home cleaning and deep sanitation', basePrice: 499, demand: 74 },
  { id: 'tutoring', name: 'Tutoring', icon: '📚', description: 'School support and exam preparation', basePrice: 399, demand: 81 },
  { id: 'ac-repair', name: 'AC & Appliance', icon: '❄️', description: 'AC repair, RO and appliance services', basePrice: 799, demand: 70 }
]

export const demoUsers: UserProfile[] = [
  { id: 'customer-1', role: 'customer', name: 'Amit Verma', phone: '9876543210', locality: 'Jaunpur City', language: 'Hindi' },
  { id: 'provider-1', role: 'provider', name: 'Rakesh Kumar', phone: '9876000011', locality: 'Jaunpur City', language: 'Hindi' },
  { id: 'admin-1', role: 'admin', name: 'ApnaLocal Admin', phone: '9876540000', locality: 'Jaunpur City', language: 'English' }
]

export const demoProviders: Provider[] = [
  {
    id: 'provider-1',
    name: 'Rakesh Kumar',
    businessName: 'Rakesh Plumbing & Fix',
    category: 'Plumbing',
    rating: 4.8,
    reviews: 126,
    verified: true,
    locality: 'Civil Lines',
    priceRange: '₹399 - ₹899',
    serviceAreas: ['Civil Lines', 'Madhopur', 'Saraiya'],
    availability: ['Mon-Sat 9am-7pm'],
    description: 'Trusted plumber for taps, sinks, bathroom fittings and emergency leaks.',
    skills: ['Tap leakage', 'Bathroom fitting', 'Pipe repair'],
    experience: '8 years',
    phone: '9876000011'
  },
  {
    id: 'provider-2',
    name: 'Neha Singh',
    businessName: 'Singh Electrical Care',
    category: 'Electrical',
    rating: 4.7,
    reviews: 98,
    verified: true,
    locality: 'Shahganj',
    priceRange: '₹499 - ₹999',
    serviceAreas: ['Shahganj', 'Madanpur', 'Gopalpur'],
    availability: ['Mon-Sun 8am-8pm'],
    description: 'Electrician for switch boards, fans, wiring and home electrical repair.',
    skills: ['Wiring', 'Fans', 'Switch boards'],
    experience: '6 years',
    phone: '9876000022'
  },
  {
    id: 'provider-3',
    name: 'Sanjay Yadav',
    businessName: 'Yadav Carpentry Studio',
    category: 'Carpentry',
    rating: 4.9,
    reviews: 142,
    verified: true,
    locality: 'Maharajganj',
    priceRange: '₹599 - ₹1499',
    serviceAreas: ['Maharajganj', 'Nathupur', 'Tindwari'],
    availability: ['Tue-Sun 10am-6pm'],
    description: 'Custom furniture repairs, chair repair and household carpentry support.',
    skills: ['Furniture repair', 'Chair fix', 'Custom woodwork'],
    experience: '10 years',
    phone: '9876000033'
  }
]

export const demoBookings = [
  {
    id: 'booking-1',
    customerName: 'Amit Verma',
    providerId: 'provider-1',
    providerName: 'Rakesh Kumar',
    category: 'Plumbing',
    status: 'accepted',
    scheduledAt: '2026-10-25T18:00:00+05:30',
    locality: 'Jaunpur City',
    amount: 699,
    notes: 'Kitchen tap leaking under sink.'
  },
  {
    id: 'booking-2',
    customerName: 'Amit Verma',
    providerId: 'provider-2',
    providerName: 'Neha Singh',
    category: 'Electrical',
    status: 'pending',
    scheduledAt: '2026-10-28T15:00:00+05:30',
    locality: 'Shahganj',
    amount: 799,
    notes: 'Power issue in bedroom switch.'
  }
]

export const demoServiceRequests: ServiceRequest[] = [
  {
    id: 'sr-1',
    title: 'Kitchen tap leak',
    category: 'Plumbing',
    description: 'Water leaking from kitchen sink pipe and water pressure is weak.',
    locality: 'Civil Lines',
    status: 'published',
    createdAt: '2026-10-22T11:00:00+05:30'
  }
]

export const demoCommunityPosts: CommunityPost[] = [
  {
    id: 'post-1',
    title: 'Looking for good tuition for Class 8 Math',
    category: 'Tutoring',
    description: 'Need a patient local tutor near Civil Lines for preparation next month.',
    locality: 'Civil Lines',
    createdAt: '2026-10-20T09:00:00+05:30',
    type: 'help'
  },
  {
    id: 'post-2',
    title: 'Lost blue scooter key near bus stand',
    category: 'Lost & Found',
    description: 'If found, please call or message. Please do not share personal data publicly.',
    locality: 'Bus Stand',
    createdAt: '2026-10-23T18:00:00+05:30',
    type: 'lost-found'
  }
]

export const demoNotifications: Notification[] = [
  { id: 'n-1', type: 'booking', title: 'Booking accepted', text: 'Rakesh Kumar accepted your plumbing service request.', read: false },
  { id: 'n-2', type: 'message', title: 'New message', text: 'Provider shared a new time slot for your appointment.', read: false },
  { id: 'n-3', type: 'system', title: 'Safety reminder', text: 'Never share OTP or payment details outside the app.', read: true }
]

export const seedStore: AppStore = {
  users: demoUsers,
  categories: demoCategories,
  providers: demoProviders,
  bookings: demoBookings,
  serviceRequests: demoServiceRequests,
  communityPosts: demoCommunityPosts,
  notifications: demoNotifications,
  currentUserId: 'customer-1'
}

export const safeLocalStorage = {
  get: () => {
    const raw = localStorage.getItem('apnalocal-demo-store')
    if (!raw) return seedStore
    try {
      return JSON.parse(raw) as AppStore
    } catch {
      return seedStore
    }
  },
  set: (value: AppStore) => {
    localStorage.setItem('apnalocal-demo-store', JSON.stringify(value))
  }
}
