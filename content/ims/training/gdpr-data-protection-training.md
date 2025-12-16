---
document_id: SW-IMS-TRN-004
title: GDPR and Data Protection Training
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: DPO
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 27001
  - GDPR
related_documents:
  - SW-ISMS-POL-001
  - SW-IMS-ROLE-006
  - SW-IMS-PRO-008
training:
  course_id: gdpr-data-protection
  duration: 60
  target_audience: [all_staff]
  required_for: [new_hire, annual_refresh]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
  validity_period: 12
---

# GDPR and Data Protection Training

**Duration**: 60 minutes
**Target**: All Swedwise staff (mandatory annual training)
**Document ID**: SW-IMS-TRN-004

## Why This Matters

**30-Second Version**: As an IT consultancy handling customer data and operating SaaS services, Swedwise processes personal data every day. GDPR isn't just a legal requirement - it's about respecting people's privacy and protecting their information. Getting it wrong can result in fines up to 20 million EUR or 4% of annual turnover, plus serious damage to our reputation.

**Your Role**: Whether you're a consultant at a client site, developing SaaS features, or working in HR - you handle personal data. This training ensures you know how to do it right.

---

## Part 1: Introduction to Data Protection

### What is GDPR?

The **General Data Protection Regulation (GDPR)** is EU law that governs how organizations collect, use, store, and protect personal data. It has applied across the EU (including Sweden) since May 25, 2018.

**Key Facts**:
- Applies to ANY organization processing personal data of EU residents
- Applies regardless of where the organization is located
- Gives individuals ("data subjects") strong rights over their data
- Requires organizations to demonstrate compliance ("accountability")
- Enforced by national data protection authorities (in Sweden: Integritetsskyddsmyndigheten - IMY)

### Swedwise's Dual Role

Swedwise acts as both a **data controller** and a **data processor**:

| Role | Definition | Swedwise Examples |
|------|------------|-------------------|
| **Data Controller** | Decides WHY and HOW personal data is processed | - Processing employee data (HR)<br>- Marketing to prospects<br>- Managing customer relationships<br>- Operating our website |
| **Data Processor** | Processes data on behalf of a controller | - SaaS services (processing customer data)<br>- Consulting work at client sites<br>- Using cloud services (we become controller, vendor is processor) |

**Important**: Our responsibilities differ depending on our role. As a processor, we must follow the controller's instructions. As a controller, we make the decisions.

### Consequences of Non-Compliance

**Regulatory Fines**:
- Up to 10 million EUR or 2% of turnover (lesser violations)
- Up to 20 million EUR or 4% of turnover (serious violations)
- Sweden's IMY actively enforces and has issued significant fines

**Business Impact**:
- Loss of customer trust and contracts
- Reputational damage (breaches become public)
- Legal claims from affected individuals
- Exclusion from public procurement opportunities
- Personal liability for directors in serious cases

**Real Example**: In 2023, a Swedish municipality was fined 300,000 SEK for inadequate access controls to student data. The violation affected only a small number of individuals, but demonstrated inadequate security measures.

---

## Part 2: Key GDPR Principles

The GDPR is built on seven fundamental principles. Every time you process personal data, these principles apply:

### 1. Lawfulness, Fairness, and Transparency

**Lawfulness**: You must have a legal basis to process personal data (see Part 3)

**Fairness**: Don't process data in ways people wouldn't reasonably expect

**Transparency**: Be open about what you're doing with personal data

**In Practice**:
- Clear privacy notices that people actually understand
- No "hidden" processing or unexpected uses
- Honest communication about data use

### 2. Purpose Limitation

**Principle**: Collect data for specific, explicit purposes - and don't use it for other things without new justification

**Example**:
- ✓ Collect email for sending invoices → Use it to send invoices
- ✗ Collect email for sending invoices → Use it for marketing (without consent)

**In Practice**:
- Be clear about WHY you're collecting data
- Don't repurpose data without checking with the DPO
- Document the purpose when collecting data

### 3. Data Minimization

**Principle**: Only collect and process data that's actually necessary

**The "Need to Know" Test**: Before collecting any personal data, ask:
- Do I actually need this information?
- Could I achieve the same goal with less data?
- Could I use anonymized or aggregated data instead?

**Example**:
- ✓ Collect name and email for a newsletter subscription
- ✗ Collect name, email, phone, address, date of birth, job title for a newsletter

### 4. Accuracy

**Principle**: Keep personal data accurate and up to date

**In Practice**:
- Provide ways for people to correct their information
- Update records when you become aware of inaccuracies
- Verify data when accuracy is critical (e.g., contact information)
- Delete or correct inaccurate data promptly

### 5. Storage Limitation

**Principle**: Don't keep personal data longer than necessary

**In Practice**:
- Follow Swedwise's data retention schedules
- Delete or anonymize data when the purpose is fulfilled
- Review old data regularly (annual minimum)
- Don't keep data "just in case" - have a documented reason

**Example**:
- Customer contracts → Retain for 7 years after contract end (legal requirement)
- Job applications (unsuccessful) → Delete after 2 years
- Marketing lists → Review annually, remove inactive contacts

### 6. Integrity and Confidentiality (Security)

**Principle**: Protect personal data with appropriate security measures

**This means**:
- Encryption for sensitive data (in transit and at rest)
- Access controls (only authorized people)
- Protection against unauthorized access, loss, destruction
- Regular security testing and updates

**See also**: Information Security training (SW-IMS-TRN-003)

### 7. Accountability

**Principle**: You must be able to DEMONSTRATE compliance, not just claim it

**In Practice**:
- Document processing activities (Records of Processing Activities - ROPA)
- Maintain evidence of compliance (consent records, policies, training)
- Conduct Data Protection Impact Assessments (DPIAs) for risky processing
- Keep records of data breaches and how they were handled
- Regular audits and reviews

**Bottom Line**: "If it's not documented, it didn't happen"

---

## Part 3: Lawful Basis for Processing

Every time you process personal data, you need a **lawful basis** (legal justification). The GDPR provides six options:

### The Six Lawful Bases

| Lawful Basis | When It Applies | Swedwise Examples |
|--------------|-----------------|-------------------|
| **Consent** | Individual has given clear, informed agreement | Marketing emails (opt-in)<br>Cookies on website<br>Optional features in SaaS |
| **Contract** | Processing is necessary to fulfill a contract | Processing customer data to deliver consulting services<br>Processing employee data for payroll |
| **Legal Obligation** | Required by law | Tax reporting<br>Accounting records<br>Some HR records |
| **Vital Interests** | Necessary to protect someone's life | Medical emergency situations (rare in our context) |
| **Public Task** | Performing official functions (public authorities) | Not typically applicable to Swedwise |
| **Legitimate Interests** | Necessary for legitimate business purposes (balanced against individual rights) | Fraud prevention<br>Network security<br>Internal administration |

### Understanding Consent

Consent is often misunderstood. For consent to be valid under GDPR:

**Requirements**:
- ✓ **Freely given**: Real choice, no pressure
- ✓ **Specific**: Clear about what you're consenting to
- ✓ **Informed**: Knows what they're agreeing to
- ✓ **Unambiguous**: Positive action required (not pre-ticked boxes)
- ✓ **Withdrawable**: Easy to withdraw as it was to give

**Examples**:
- ✗ Pre-ticked checkbox: "I agree to receive marketing"
- ✗ Bundled consent: "I agree to the terms and to receive marketing" (two different things)
- ✓ Clear checkbox: "I would like to receive monthly product updates by email"

**Important**: Consent is NOT required for most business-to-business processing. When working with customer data in consulting or SaaS, we typically rely on **Contract** or **Legitimate Interests**, not consent.

### Swedwise's Typical Lawful Bases

| Processing Activity | Data Controller | Lawful Basis | Why |
|---------------------|-----------------|--------------|-----|
| Employee HR data | Swedwise | Contract + Legal Obligation | Necessary for employment contract and legal requirements |
| Consulting services delivery | Customer (client) | Contract | We process on their behalf per contract |
| SaaS service delivery | Swedwise | Contract | Necessary to deliver the service |
| SaaS customer support | Swedwise | Contract | Part of service delivery |
| Marketing to prospects | Swedwise | Consent (B2C) or Legitimate Interests (B2B) | Depends on context |
| Website analytics | Swedwise | Consent (cookies) | Requires cookie consent banner |
| Security monitoring | Swedwise | Legitimate Interests | Protecting systems and data |

**When Unsure**: Contact the DPO before processing. Choosing the wrong lawful basis can invalidate your processing.

---

## Part 4: Data Subject Rights

GDPR gives individuals strong rights over their personal data. You need to know these rights and how to handle requests:

### 1. Right of Access (Article 15)

**What It Means**: People can ask "What data do you have about me?"

**What We Must Provide**:
- Copy of their personal data
- Information about how we use it
- Who we share it with
- How long we'll keep it
- Where we got it from (if not from them)

**Response Time**: 1 month (can extend to 3 months if complex)

**Cost**: Free for the first request (can charge for repetitive/excessive requests)

### 2. Right to Rectification (Article 16)

**What It Means**: People can ask us to correct inaccurate data

**What We Must Do**:
- Correct inaccurate information
- Complete incomplete data
- Notify third parties if we've shared the data

**Response Time**: 1 month

### 3. Right to Erasure / "Right to be Forgotten" (Article 17)

**What It Means**: People can ask us to delete their data

**When It Applies**:
- Data no longer needed for original purpose
- They withdraw consent (and we have no other lawful basis)
- They object and we have no overriding legitimate grounds
- Data was processed unlawfully
- Legal obligation to delete

**When We Can Refuse**:
- Legal obligation to keep the data (e.g., accounting records)
- Legal claims (litigation)
- Archiving/research in public interest

**Most Common at Swedwise**: Marketing unsubscribes, former employees after retention period

### 4. Right to Data Portability (Article 20)

**What It Means**: People can get their data in a machine-readable format and transfer it to another provider

**When It Applies**:
- Processing is based on consent or contract
- Processing is automated

**Example**: Customer wants to export their SaaS data to migrate to a competitor

### 5. Right to Object (Article 21)

**What It Means**: People can object to processing based on legitimate interests or for direct marketing

**Direct Marketing**: Must always stop if someone objects (absolute right)

**Other Processing**: We can refuse if we demonstrate compelling legitimate grounds

### 6. Right to Restrict Processing (Article 18)

**What It Means**: People can ask us to keep their data but not use it

**When It Applies**:
- They contest accuracy (while we verify)
- Processing is unlawful but they don't want deletion
- We no longer need it but they need it for legal claims
- They've objected (while we verify overriding grounds)

**In Practice**: Mark the data as "restricted" - don't delete, but don't process (except storage)

### Handling Data Subject Requests

**If you receive a data subject rights request**:

1. **Don't ignore it** - Forward immediately to the DPO
2. **Don't delay** - We have strict deadlines (typically 1 month)
3. **Don't handle it yourself** - The DPO coordinates the response
4. **Verify identity** - Ensure it's the actual data subject (DPO will guide)

**How to Forward**:
- Email: [DPO email - TBD]
- Include: Original request, date received, any context
- Mark as: "URGENT: Data Subject Rights Request"

---

## Part 5: Handling Personal Data in Practice

### What is Personal Data?

**Definition**: Any information that can identify a living individual, directly or indirectly

**Direct Identifiers**:
- Name
- Email address
- Phone number
- Personal identification number (personnummer)
- Photo
- Employee number

**Indirect Identifiers** (combination can identify):
- IP address
- Location data
- Job title + company + department
- Device identifiers
- Username

**Also Personal Data**:
- Opinions about an individual
- Data that reveals identity through context
- Pseudonymized data (if you can re-identify)

**Not Personal Data**:
- Fully anonymized data (impossible to re-identify)
- Data about companies (unless it identifies individuals)
- Public statistics

### Special Categories of Personal Data

Some data is **extra sensitive** and requires additional protection:

**Special Categories** (Article 9):
- Racial or ethnic origin
- Political opinions
- Religious or philosophical beliefs
- Trade union membership
- Genetic data
- Biometric data (for identification)
- Health data
- Sex life or sexual orientation

**At Swedwise, Minimize Collection**: We should rarely need special category data. If you encounter a situation requiring it, contact the DPO immediately.

**Extra Requirements**:
- Usually requires explicit consent
- Or specific legal basis (e.g., employment law, vital interests)
- Heightened security measures
- Document the necessity

### Customer Data vs. Employee Data

| Aspect | Customer Data | Employee Data |
|--------|---------------|---------------|
| **Controller** | Often customer (we're processor) | Swedwise |
| **Lawful Basis** | Contract (service delivery) | Contract + Legal Obligation |
| **Instructions** | Follow customer's documented instructions | Swedwise determines purposes |
| **Security** | Per customer contract + our ISMS | Per our ISMS + Swedish employment law |
| **Retention** | Per customer policy + contract | Per Swedish law + retention schedule |
| **Breach Notification** | Notify customer immediately | Notify IMY (if required) + employees |

**At Client Sites**: When consulting, you're processing customer data as part of Swedwise (processor). Follow BOTH Swedwise policies AND customer instructions.

### Data Minimization in Practice

**Before Collecting Data, Ask**:
1. Do I need this data for a specific purpose?
2. Can I achieve the goal without it?
3. Am I collecting too much "just in case"?
4. Could I use less identifiable data?

**Examples**:

**Scenario**: Setting up a project tracking system

❌ **Over-Collection**:
- Full name
- Personal email
- Work email
- Phone number
- Date of birth
- Home address
- Emergency contact

✅ **Minimized**:
- Name (or initials if sufficient)
- Work email
- (That's it - the rest isn't needed for project tracking)

**Scenario**: Website analytics

❌ **Over-Collection**:
- Full IP address
- User login data
- Session recordings with personal info

✅ **Minimized**:
- Anonymized IP (last octet removed)
- Aggregated statistics
- Anonymized behavioral data

### Secure Storage and Transmission

**Storage Requirements**:
- Store personal data in approved systems only
- Use access controls (least privilege)
- Encrypt sensitive personal data
- Regular backups (with same security)
- Secure deletion when no longer needed

**Transmission Requirements**:
- Use encrypted channels (TLS/HTTPS)
- Verify recipient before sending
- Password-protect sensitive files
- Use secure file transfer, not regular email (for bulk data)
- Check you're sending to the right person

**Common Mistakes to Avoid**:
- ❌ Storing customer data on personal devices
- ❌ Emailing unencrypted spreadsheets with personal data
- ❌ Using personal cloud storage (Dropbox, Google Drive) for work data
- ❌ Leaving paper documents on desks
- ❌ Discussing data subjects in public places

**Do This Instead**:
- ✓ Use Swedwise-approved systems and storage
- ✓ Encrypt sensitive files before emailing
- ✓ Use company-managed cloud storage
- ✓ Lock documents away when not in use
- ✓ Have sensitive conversations in private

---

## Part 6: Data Breaches

### What Constitutes a Breach?

**GDPR Definition**: A breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data

**Not Just Hacking**: A breach can be:
- Cyberattack or hacking incident
- Lost or stolen laptop/phone/USB drive
- Email sent to wrong recipient
- Unauthorized access by employee
- Paper documents in the trash
- Ransomware attack
- System misconfiguration exposing data
- Third-party breach affecting our data

**Examples**:

**Scenario 1**: You accidentally email a spreadsheet containing customer contact information to the wrong recipient.
**Verdict**: ✓ Data Breach (unauthorized disclosure)

**Scenario 2**: Your laptop is stolen from your car, containing unencrypted customer data.
**Verdict**: ✓ Data Breach (loss of personal data)

**Scenario 3**: You realize you've had access to HR files you shouldn't have had for the past 6 months, but haven't opened them.
**Verdict**: ✓ Potential Breach (unauthorized access, even if not viewed)

**Scenario 4**: A phishing attack on an employee exposes login credentials, but no data was accessed.
**Verdict**: ⚠️ Security Incident (may become breach if credentials used)

### The 72-Hour Rule

**Legal Requirement**: If a breach is likely to result in a risk to individuals' rights and freedoms, we must notify the supervisory authority (IMY) within **72 hours** of becoming aware of it.

**High-Risk Breaches**: If the breach poses a HIGH risk to individuals, we must also notify the affected individuals without undue delay.

**The Clock Starts**: When we become aware of the breach (not when it occurred)

**Why This Matters**: Missing the 72-hour deadline can result in fines. We need immediate reporting internally to meet external deadlines.

### Internal Reporting Procedure

**If You Discover or Suspect a Breach**:

**Step 1: Contain** (if safe to do so)
- Don't make it worse
- If you can safely stop data exposure, do so
- Example: Wrong email sent? Ask recipient not to open/delete it

**Step 2: Report Immediately**
- **Email**: [DPO Email - TBD] + [CISO Email - TBD]
- **Subject**: "URGENT: Potential Data Breach"
- **Phone**: [DPO Phone - TBD] (for serious incidents)
- **After Hours**: [Emergency Contact - TBD]

**Step 3: Document**
- What happened?
- What data was affected?
- How many individuals?
- When did it happen?
- How did you discover it?

**Step 4: Don't**
- ❌ Don't delay reporting "to investigate first"
- ❌ Don't assume someone else will report it
- ❌ Don't wait until you have all the details
- ❌ Don't try to fix it without reporting (unless containing)

**What Happens Next**:
1. DPO and CISO assess the breach
2. Breach response team activated
3. Investigation and containment
4. Notification to IMY (if required - within 72 hours)
5. Notification to affected individuals (if high risk)
6. Documentation and lessons learned
7. Follow-up actions to prevent recurrence

### Breach Notification to Data Subjects

**When Required**: If the breach poses a HIGH risk to individuals

**What "High Risk" Means**:
- Financial loss likely
- Identity theft risk
- Reputational damage
- Special category data exposed
- Large-scale breach
- Vulnerable individuals affected

**What We Must Tell Them**:
- Nature of the breach
- Likely consequences
- Measures taken to address it
- Contact point (DPO)
- Recommendations to mitigate harm

**Example Notification**:

> We are writing to inform you of a security incident affecting your personal data. On [date], [brief description of what happened]. The incident affected [type of data]. We have taken immediate action to [containment measures]. We are notifying you because [reason/risk]. We recommend you [protective actions]. If you have questions, please contact our Data Protection Officer at [contact].

---

## Part 7: Privacy by Design

### What is Privacy by Design?

**Principle**: Build privacy protections into systems and processes from the start, not as an afterthought

**GDPR Requirement** (Article 25):
- **Privacy by Design**: Implement technical and organizational measures to protect data
- **Privacy by Default**: Process only the data necessary for each purpose

### Embedding Privacy in Projects

**For Everyone Involved in Projects**:

**At Project Start**:
- Will this involve personal data?
- What data do we actually need?
- Do we need a DPIA? (Ask the DPO)
- How will we secure the data?

**During Development**:
- Use pseudonymization/anonymization where possible
- Build in access controls
- Enable data export (portability)
- Enable data deletion
- Log access to personal data
- Encrypt sensitive data

**Before Launch**:
- Review with DPO
- Update privacy notices
- Test data subject rights procedures
- Security testing
- Document processing in ROPA

### Data Protection Impact Assessments (DPIA)

**What It Is**: A systematic assessment of privacy risks for high-risk processing

**When Required**:
- Large-scale processing of special category data
- Systematic monitoring (e.g., tracking)
- Automated decision-making with significant effects
- New technologies with privacy implications
- Combining datasets in new ways
- Processing vulnerable individuals' data

**Swedwise Examples Likely Requiring DPIA**:
- Launching new SaaS service features processing personal data
- Implementing new HR systems
- Large-scale monitoring or analytics
- AI/machine learning using personal data

**Who Conducts It**: DPO coordinates, with input from:
- Project team
- CISO
- Legal (if needed)
- Data subjects or their representatives (sometimes)

**Process**:
1. Describe the processing
2. Assess necessity and proportionality
3. Identify risks to individuals
4. Identify measures to address risks
5. DPO reviews and advises
6. Document the assessment
7. Consult IMY if high risk remains

**Your Role**: If you're involved in a project requiring DPIA, cooperate with the DPO and provide accurate information about the processing.

### Third-Party Data Sharing

**Before Sharing Personal Data with Anyone**:

1. **Do I have a lawful basis?**
2. **Did we tell the data subject we'd share it?** (Check privacy notice)
3. **Is there a contract in place?** (Data Processing Agreement - DPA)
4. **Is the recipient in the EU/EEA?** (If not, extra requirements apply)
5. **Does the recipient have adequate security?**

**Third-Party Categories**:

| Category | Example | Requirements |
|----------|---------|--------------|
| **Processors** (process on our behalf) | Cloud hosting, email service, payroll provider | Data Processing Agreement (DPA) required |
| **Joint Controllers** (shared purposes) | Rare - partner sharing marketing data | Joint Controller Agreement required |
| **Separate Controllers** (their own purposes) | Regulatory authorities, business partners | Must be lawful and transparent |

**Data Processing Agreements (DPAs)**:
- Required when using processors
- Specifies what they can/can't do with data
- Defines security requirements
- Includes audit rights
- Clarifies liability

**At Swedwise**: Procurement and Legal coordinate DPAs. Don't sign up for new services without checking.

### International Data Transfers

**The Rule**: Personal data can only be transferred outside the EU/EEA if adequate protections are in place

**Safe Destinations**:
- EU/EEA countries (no extra requirements)
- Countries with "adequacy decision" (e.g., UK, Switzerland, some others)

**Other Destinations** (e.g., USA, India, many others):
- Requires transfer mechanism (Standard Contractual Clauses - SCCs)
- Must assess if protections are adequate in practice
- Document the transfer

**At Swedwise**:
- SaaS infrastructure: Swedish data center (Entiros) - No issue
- Cloud services: Review carefully - many are US-based
- Consulting: Customer data usually stays in their systems

**If You're Unsure**: Contact the DPO before transferring data internationally

---

## Part 8: Your Responsibilities

### Daily Data Protection Practices

**For Everyone**:

1. **Think Before You Process**
   - Do I need this data?
   - Am I allowed to use it this way?
   - Is it secure?

2. **Protect Access Credentials**
   - Strong, unique passwords
   - Enable MFA everywhere possible
   - Never share credentials
   - Lock your screen when away

3. **Handle Data Appropriately**
   - Follow classification guidelines
   - Use approved systems
   - Encrypt when required
   - Secure deletion

4. **Report Incidents**
   - Immediately report breaches or suspected breaches
   - Report near-misses
   - Report security concerns

5. **Respect Data Subject Rights**
   - Forward requests to DPO
   - Don't ignore or delay
   - Maintain confidentiality

6. **Keep Learning**
   - Complete required training
   - Stay aware of policy updates
   - Ask questions

### Role-Specific Responsibilities

**Consultants at Client Sites**:
- Follow both Swedwise and customer data protection policies
- Don't remove customer data without authorization
- Report breaches to both Swedwise DPO and customer
- Don't use customer data for Swedwise purposes
- Understand if you're acting as Swedwise representative or customer's team

**SaaS Developers and Operations**:
- Privacy by design in all features
- Minimize data collection
- Enable data export and deletion
- Implement access controls
- Log access to customer data
- Encrypt data at rest and in transit
- Regular security testing

**Sales and Marketing**:
- Obtain proper consent for marketing
- Maintain preference centers
- Honor unsubscribe requests immediately
- Accurate privacy notices
- Don't buy/sell personal data without legal review
- Be transparent about data use

**HR and Management**:
- Limit employee data collection
- Secure HR systems
- Confidentiality of employee data
- Only share on need-to-know basis
- Proper offboarding (data deletion)
- Respond to employee data requests

**IT and Security**:
- Implement technical controls
- Monitor for breaches
- Patch and update systems
- Access management
- Secure backups
- Audit logging
- Coordinate with DPO on security measures

### The "Do I Need This Data?" Question

**Before collecting personal data, ask**:

**1. Purpose**
- What am I trying to achieve?
- Is personal data necessary?
- Could I achieve this without personal data?

**2. Minimization**
- What's the minimum data I need?
- Can I use anonymized/aggregated data?
- Can I use pseudonyms?

**3. Legal Basis**
- What's my lawful basis for processing?
- Have I documented it?
- Does the privacy notice cover this?

**4. Security**
- How will I protect this data?
- Who will have access?
- How will I secure it?

**5. Retention**
- How long do I need to keep it?
- When will I delete it?
- Is it documented?

**If you can't answer these questions clearly → Contact the DPO before proceeding**

### Secure Deletion

**When It's Time to Delete Data**:

**Digital Data**:
- Use secure deletion tools (not just "delete" key)
- Overwrite or cryptographically erase
- Delete from all locations (backups, replicas, archives)
- Verify deletion was successful
- Document what was deleted and when

**Paper Documents**:
- Use cross-cut shredder (or confidential waste service)
- Never put personal data in regular trash
- Shred entire documents (not just parts)

**Devices**:
- Wipe devices before disposal
- Use certified data destruction service for sensitive data
- Remove and destroy hard drives if necessary
- Document disposal

**Backups**:
- Personal data in backups is still personal data
- Delete from backups when retention period ends
- Or document why backups can't be deleted (acceptable for security)

### Contacting the DPO

**When to Contact the DPO**:

**Always Contact**:
- Data subject rights request received
- Actual or suspected data breach
- Planning new processing activity
- Unsure about lawful basis
- International data transfer planned
- New system/vendor processing personal data
- Customer asks about our data protection practices
- Complaint from individual about data handling

**Probably Should Contact**:
- Unsure if something is personal data
- Unsure about retention period
- Conflict between business need and privacy
- Unusual data request
- Privacy policy question

**Contact Information**:
- **Email**: [DPO Email - TBD]
- **Phone**: [DPO Phone - TBD]
- **Teams**: [DPO Teams - TBD]

**Expected Response Time**:
- Urgent (breach, rights request): Same day
- High priority: Within 2 business days
- Normal queries: Within 5 business days

---

## Part 9: Quick Reference

### GDPR Principles (Remember: LPP-SAIS)

1. **L**awful, fair, transparent
2. **P**urpose limitation
3. **P**roportionate (data minimization)
4. **S**torage limitation
5. **A**ccurate
6. **I**ntegrity and confidentiality (Security)
7. **S**how it (accountability)

### Six Lawful Bases (Remember: CCCLLP)

1. **C**onsent
2. **C**ontract
3. **C**ompliance with legal obligation
4. **V**ital interests
5. **P**ublic task
6. **L**egitimate interests

### Data Subject Rights (Remember: PAREOR)

1. **P**ortability
2. **A**ccess
3. **R**ectification
4. **E**rasure (right to be forgotten)
5. **O**bject
6. **R**estriction

### Red Flags - Report Immediately

- Lost or stolen device with personal data
- Email sent to wrong person
- Unauthorized access to systems
- Ransomware or malware
- Data published accidentally
- System misconfiguration exposing data
- Third-party breach affecting our data
- Data subject rights request received
- Complaint from individual

### Do's and Don'ts

**DO**:
- ✓ Minimize data collection
- ✓ Use strong passwords + MFA
- ✓ Encrypt sensitive data
- ✓ Report breaches immediately
- ✓ Follow retention schedules
- ✓ Ask the DPO when unsure
- ✓ Document your decisions
- ✓ Keep training current

**DON'T**:
- ✗ Collect data "just in case"
- ✗ Share personal data without checking
- ✗ Ignore data subject requests
- ✗ Keep data forever
- ✗ Use personal devices for sensitive data
- ✗ Assume consent when you don't have it
- ✗ Transfer data internationally without checking
- ✗ Delay breach reporting

---

## Part 10: Assessment

**Instructions**: This assessment tests your understanding of GDPR and data protection at Swedwise. You need 80% (10/12 correct) to pass. You have 3 attempts.

### Question 1
What is the maximum fine for serious GDPR violations?

A) 10 million EUR or 2% of annual turnover
B) 20 million EUR or 4% of annual turnover
C) 50 million EUR or 10% of annual turnover
D) 100 million EUR or 5% of annual turnover

**Correct Answer**: B

---

### Question 2
Which GDPR principle means you should only collect personal data that is necessary for your specific purpose?

A) Purpose limitation
B) Lawfulness
C) Data minimization
D) Storage limitation

**Correct Answer**: C

---

### Question 3
Your colleague asks to borrow your login credentials because they "just need to check one thing quickly." What should you do?

A) Let them use your credentials but watch what they do
B) Refuse and report the incident to your manager
C) Give them the credentials but change your password afterward
D) Log in yourself and get them the information they need

**Correct Answer**: D (or B if they need regular access - both show good judgment, but D is most practical)

---

### Question 4
You accidentally email a spreadsheet containing customer email addresses and phone numbers to the wrong recipient. Is this a data breach?

A) No, because it was an accident
B) No, because the data wasn't very sensitive
C) Yes, and you must report it immediately
D) Only if the recipient opens the file

**Correct Answer**: C

---

### Question 5
How long does Swedwise have to respond to a data subject access request?

A) 10 business days
B) 1 month
C) 3 months
D) 6 months

**Correct Answer**: B

---

### Question 6
Which of the following is NOT special category data under GDPR?

A) Health information
B) Religious beliefs
C) Email address
D) Biometric data used for identification

**Correct Answer**: C

---

### Question 7
When does the 72-hour clock start for reporting a data breach to the supervisory authority?

A) When the breach occurred
B) When you become aware of the breach
C) When you've finished investigating the breach
D) When the DPO confirms it's a breach

**Correct Answer**: B

---

### Question 8
You're setting up a new project tracking tool. What should you do BEFORE collecting any personal data?

A) Start collecting data, you can figure out privacy later
B) Contact the DPO to discuss lawful basis, minimization, and security
C) Get consent from everyone whose data you'll collect
D) Wait for the annual data protection review

**Correct Answer**: B

---

### Question 9 (Scenario)
You're a consultant working at a customer site. You discover a spreadsheet on the customer's shared drive containing employee salary information that you shouldn't have access to. What should you do?

A) Nothing - it's the customer's problem
B) Download it to report to your manager at Swedwise
C) Report it to the customer's IT team AND Swedwise DPO
D) Delete the spreadsheet

**Correct Answer**: C

---

### Question 10
Which lawful basis would Swedwise typically use for processing employee payroll data?

A) Consent
B) Contract and Legal Obligation
C) Legitimate Interests
D) Public Task

**Correct Answer**: B

---

### Question 11 (Scenario)
A customer emails asking for a copy of all personal data Swedwise holds about them. What should you do?

A) Send them whatever data you can find
B) Ignore it - they should already know what data we have
C) Forward the request to the DPO immediately
D) Tell them you'll get back to them in 3 months

**Correct Answer**: C

---

### Question 12
What does "Privacy by Design" mean?

A) Making privacy policies look nice
B) Only hiring designers who understand privacy
C) Building privacy protections into systems from the start
D) Designing products that collect as much data as possible

**Correct Answer**: C

---

## Assessment Answers

1. B
2. C
3. D (B also acceptable)
4. C
5. B
6. C
7. B
8. B
9. C
10. B
11. C
12. C

**Passing Score**: 10/12 (80%)

---

## Summary

### Key Takeaways

1. **GDPR is Serious**: Fines up to 20M EUR or 4% of turnover, plus reputational damage
2. **Seven Principles**: Lawful, Purpose, Proportionate, Storage, Accurate, Integrity, Accountability
3. **Six Lawful Bases**: Always know which basis you're relying on
4. **Data Subject Rights**: Forward all requests to the DPO immediately
5. **72-Hour Rule**: Breaches must be reported to IMY within 72 hours
6. **Minimize Data**: Only collect what you actually need
7. **Privacy by Design**: Build privacy in from the start
8. **When in Doubt, Ask**: The DPO is here to help

### Your Three Most Important Actions

1. **Minimize**: Collect only the personal data you actually need
2. **Protect**: Use strong security and handle data appropriately
3. **Report**: Immediately report breaches and forward rights requests

### Resources

| Resource | Location |
|----------|----------|
| Information Security Policy | SW-ISMS-POL-001 |
| DPO Role Description | SW-IMS-ROLE-006 |
| Incident Reporting Procedure | SW-IMS-PRO-008 |
| Data Classification Guideline | [TBD] |
| Privacy Notices | [TBD] |
| ROPA (Records of Processing) | [Internal - DPO] |

### Contact

**Data Protection Officer (DPO)**
- Email: [TBD]
- Phone: [TBD]
- Teams: [TBD]

**Questions?** Don't hesitate to contact the DPO. It's better to ask than to guess.

---

## Completion Certificate

By completing this training and passing the assessment, I confirm that I understand:
- GDPR principles and requirements
- Swedwise's role as controller and processor
- Data subject rights and how to handle requests
- Data breach identification and reporting procedures
- My responsibilities for protecting personal data

**Name**: ___________________________

**Date**: ___________________________

**Signature**: ___________________________

**Score**: ______ / 12

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | Training Team / DPO | Initial release |

**Next Review**: [12 months from effective date]

**Approved By**:

| Role | Name | Signature | Date |
|------|------|-----------|------|
| DPO | | | |
| CISO | | | |
| CEO | | | |
