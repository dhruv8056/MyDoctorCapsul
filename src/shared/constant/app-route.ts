export const APP_ROUTE = {
  SIGNIN: '/signin',
  SIGN_UP: '/signup',
  FORGET_PASSWORD: '/forget-password',

  HOME: '/',

  // Common Routes
  HOSPITALS: '/hospitals',
  CLINICS: '/clinics',
  AMBULANCES: '/ambulances',
  DOCTOR: '/doctor',
  MEDICINE: '/medicine',
  PHARMACY: '/pharmacy',
  USER: '/user',
  SUPER_ADMINS: '/superadmin',
  DIAGNOSTIC_CENTRE: '/centre',
  PRODUCT: '/product',
  DETAILS: '/details',

  // healthcare-services
  HEALTHCARE_SERVICES: '/healthcare-services',

  //healthcare-INFORMATION
  HEALTHCARE_INFORMATION: '/healthcare-information',

  //medicine section
  MEDICINE_SECTION: '/medicine-section',

  //diagnostic section
  DIAGNOSTIC_SECTION: '/diagnostic-section',
  DIAGNOSTIC_CATEGORIES: '/categories',
  DIAGNOSTIC_DETAILS: '/details',

  // emergency doctor
  EMERGENCY_DOCTOR: '/emergency-doctor',

  //DEMO ROUTES
  SHOP: '/shop',
  CATEGORY: '/category',
  BOOKS: '/books',
  BOOK_PDF: '/book-pdf',
  CHECKLIST: '/checklist',
  WISHLIST: '/wishlist',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin-dashboard',
  ADMIN_CATEGORY_LIST: '/category-list',
  ADMIN_AUTHOR: '/author',
  ADMIN_BOOK: '/book',

  //book routes
  BOOK_MANAGE: '/book-management',
  TAX_MANAGE: '/tax-management',
  CUSTOMERS: '/customers',
  ORDER_MANAGE: '/order-management',
  REPORTING: '/reporting'
} as const;
