export interface EmailTemplate {
  id: string;
  name: string;
  category: 'articleship' | 'job_application' | 'sales' | 'executive' | 'investor' | 'partnership' | 'agency' | 'followup';
  categoryLabel: string;
  description: string;
  subject: string;
  body: string;
  tags: string[];
  recommendedAttachments?: string;
  badge?: string;
}

export const CA_ARTICLESHIP_DEMO_TEMPLATE: EmailTemplate = {
  id: 'ca-articleship-statutory-audit',
  name: 'CA Articleship - Statutory Audit (Initial)',
  category: 'articleship',
  categoryLabel: 'Articleship Application',
  description: 'Official format for CA Intermediate qualified students applying for Articleship in Statutory Audit.',
  subject: 'Application for CA Articleship- Statutory Audit | CA Intermediate Qualified',
  body: `Dear Recruitment Team,

I hope you are doing well.

I recently cleared the CA Intermediate examination in my first attempt and am seeking an Articleship opportunity in the Statutory Audit practice at your firm.

Please find my resume attached for your kind consideration. I would be grateful if you could consider my application for a suitable Articleship opportunity. I am eager to learn, contribute, and develop a strong foundation under the guidance of experienced professionals.

Thank you for your time and consideration. I look forward to the opportunity to discuss my application further.

Kind regards,

[Your Name]
CA Intermediate Qualified
[Phone Number]
[Gmail ID] 
LinkedIn:`,
  tags: ['CA Articleship', 'Statutory Audit', 'Recommended Demo', 'Initial Application'],
  recommendedAttachments: 'Updated Resume (PDF) & Marksheets',
  badge: 'Main Template',
};

export const CA_ARTICLESHIP_FOLLOWUP_TEMPLATE: EmailTemplate = {
  id: 'followup-gentle-bump',
  name: 'CA Articleship - Follow-Up (Polite Check-In)',
  category: 'followup',
  categoryLabel: 'Follow-Up Sequence',
  description: 'Official polite follow-up format for CA Articleship applications, aligned with the main application template.',
  subject: 'Re: Application for CA Articleship- Statutory Audit | CA Intermediate Qualified',
  body: `Dear Recruitment Team,

I hope you are doing well.

I am writing to respectfully follow up on my previous application regarding an Articleship opportunity in the Statutory Audit practice at {{company}}.

Having cleared the CA Intermediate examination in my first attempt, I remain very keen to contribute and develop a strong foundation under the guidance of your esteemed team. My resume and credentials remain attached for your kind consideration.

I would be truly grateful if you could consider my profile for any current or upcoming vacancies. Thank you once again for your time and consideration.

Kind regards,

[Your Name]
CA Intermediate Qualified
[Phone Number]
[Gmail ID] 
LinkedIn:`,
  tags: ['CA Articleship', 'Follow-Up', 'Statutory Audit', 'Recommended'],
  recommendedAttachments: 'Updated Resume (PDF) & Marksheets',
  badge: 'Follow-Up Format',
};

export const CA_ARTICLESHIP_VALUE_FOLLOWUP_TEMPLATE: EmailTemplate = {
  id: 'followup-value-add',
  name: 'CA Articleship - Follow-Up (Credentials & Intent)',
  category: 'followup',
  categoryLabel: 'Follow-Up Sequence',
  description: 'Detailed follow-up highlighting CA Intermediate first-attempt clearance and dedication to statutory audit engagements.',
  subject: 'Re: Application for CA Articleship- Statutory Audit | CA Intermediate Qualified',
  body: `Dear Recruitment Team,

I hope you are doing well.

Further to my previous email regarding the CA Articleship position in Statutory Audit at {{company}}, I wanted to reiterate my strong enthusiasm for joining your practice.

With a first-attempt clearance in CA Intermediate, I am eager to apply my technical knowledge to statutory audit procedures, compliance work, and financial statement review while learning from experienced professionals at your firm.

My resume and marksheets remain attached for your kind perusal. I would welcome the opportunity to discuss my application at your convenience.

Thank you for your continued consideration.

Kind regards,

[Your Name]
CA Intermediate Qualified
[Phone Number]
[Gmail ID] 
LinkedIn:`,
  tags: ['CA Articleship', 'Follow-Up', 'Credentials'],
  recommendedAttachments: 'Updated Resume (PDF) & Marksheets',
  badge: 'Follow-Up Format',
};

export const CA_ARTICLESHIP_FINAL_FOLLOWUP_TEMPLATE: EmailTemplate = {
  id: 'followup-polite-breakup',
  name: 'CA Articleship - Follow-Up (Final Courteous Check-In)',
  category: 'followup',
  categoryLabel: 'Follow-Up Sequence',
  description: 'Courteous final follow-up requesting to keep resume and candidate profile on file for future vacancies.',
  subject: 'Re: Application for CA Articleship- Statutory Audit | CA Intermediate Qualified',
  body: `Dear Recruitment Team,

I hope you are doing well.

I am writing a final brief follow-up regarding my application for a CA Articleship opportunity in Statutory Audit at {{company}}.

I understand that your recruitment schedule during this period is very busy. If there are no current openings available, I would be deeply grateful if you could keep my resume and profile on file for future articleship vacancies.

Thank you very much for your time, consideration, and guidance.

Kind regards,

[Your Name]
CA Intermediate Qualified
[Phone Number]
[Gmail ID] 
LinkedIn:`,
  tags: ['CA Articleship', 'Follow-Up', 'Final Check-In'],
  recommendedAttachments: 'Updated Resume (PDF) & Marksheets',
  badge: 'Follow-Up Format',
};

export const PROFESSIONAL_EMAIL_TEMPLATES: EmailTemplate[] = [
  CA_ARTICLESHIP_DEMO_TEMPLATE,
  CA_ARTICLESHIP_FOLLOWUP_TEMPLATE,
  CA_ARTICLESHIP_VALUE_FOLLOWUP_TEMPLATE,
  CA_ARTICLESHIP_FINAL_FOLLOWUP_TEMPLATE,
];
