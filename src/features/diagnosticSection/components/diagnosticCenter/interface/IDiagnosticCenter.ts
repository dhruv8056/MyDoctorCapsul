export interface DiagnosticCenterViewProps {
  diagnosticCenter: DiagnosticCenter[];
  onCall?: (phone: string) => void;
  onDirections?: (mapsUrl: string) => void;
}
export interface DiagnosticCenter {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  timing: string;
  deliveryTag: string;
  phone: string;
  mapsUrl: string;
}
