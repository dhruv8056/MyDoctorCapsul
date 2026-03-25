export interface HeaderViewProps {
  // Auth routes — show sign in / sign up
  handleSignInNavigate: () => void;
  handleSignUpNavigate: () => void;
  // Search bar
  showSearch: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}
