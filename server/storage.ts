import { 
  ContactSubmission, 
  InsertContactSubmission, 
  NewsletterSubscription, 
  InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private contactSubmissionId: number;
  private newsletterSubscriptionId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.contactSubmissionId = 1;
    this.newsletterSubscriptionId = 1;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const now = new Date();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: now,
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === subscription.email
    );
    
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const id = this.newsletterSubscriptionId++;
    const now = new Date();
    const newsletterSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      createdAt: now,
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
