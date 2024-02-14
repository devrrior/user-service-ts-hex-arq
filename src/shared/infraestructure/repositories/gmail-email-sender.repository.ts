import {EmailSenderRepository} from "../../domain/repositories/email-sender.repository";
import nodemailer from "nodemailer";
import config from "../../../config";

export class GmailEmailSenderRepository implements EmailSenderRepository {
    private static _instance: GmailEmailSenderRepository;
    private _transporter: nodemailer.Transporter;

    constructor() {
        this._transporter = nodemailer.createTransport({
            host: config.smtp.gmail.host,
            port: config.smtp.gmail.port,
            secure: true,
            auth: {
                user: config.smtp.gmail.user,
                pass: config.smtp.gmail.password,
            },
        });
    }

    public static getInstance(): GmailEmailSenderRepository {
        if (!GmailEmailSenderRepository._instance) {
            GmailEmailSenderRepository._instance = new GmailEmailSenderRepository();
        }
        return GmailEmailSenderRepository._instance;
    }

    async sendEmail(email: string, subject: string, message: string): Promise<void> {
        await this._transporter.sendMail({
            from: config.smtp.gmail.user,
            to: email,
            subject: subject,
            text: message,
        });
    }

}