export const APP_ROUTE = {
  SIGNIN: '/signin',
  SIGN_UP: '/signup',
  FORGET_PASSWORD: '/forget-password',
  DASHBOARD: '/dashboard',

  //ROLES WISE ROUTE
  PHARMACY: '/pharmacy',
  USER: '/user',
  DOCTOR: '/doctor',
  SUPER_ADMINS: '/superadmin',
  DIAGNOSTIC_CENTRE: '/diagnostic-centre',


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
  BOOK_MANAGE:'/book-management',
  TAX_MANAGE:'/tax-management',
  CUSTOMERS:'/customers',
  ORDER_MANAGE:'/order-management',
  REPORTING:'/reporting'
} as const;
