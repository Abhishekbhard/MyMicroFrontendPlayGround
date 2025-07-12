// Standardized API error format
export interface ApiError {
  status: number;
  code: string;
  message: string;
  details?: {
    field?: string;
    messages?: string[];
    [key: string]: unknown;
  }[];
  data?: unknown;
  timestamp?: string;
}
