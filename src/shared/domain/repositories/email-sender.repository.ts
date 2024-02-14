export interface EmailSenderRepository {
    sendEmail(email: string, subject: string, message: string): Promise<void>;
}