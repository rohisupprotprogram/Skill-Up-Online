
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  schedule: string;
  fee: string;
  icon: string;
  image: string;
}

export interface EnrollmentData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  courseId: string;
  photo: File | null;
  cv: File | null;
  paymentConsent: boolean;
}

export interface BankDetails {
  bankName: string;
  accountTitle: string;
  iban: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  website: string;
  facebook: string;
  linkedin: string;
}
