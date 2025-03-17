import { apiRequest } from "./queryClient";

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  service?: string;
  message?: string;
}

export interface SubscribeFormData {
  email: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await apiRequest("POST", "/api/contact", data);
  return response.json();
};

export const submitLeadForm = async (data: LeadFormData) => {
  const response = await apiRequest("POST", "/api/leads", data);
  return response.json();
};

export const subscribeToNewsletter = async (data: SubscribeFormData) => {
  const response = await apiRequest("POST", "/api/subscribe", data);
  return response.json();
};
