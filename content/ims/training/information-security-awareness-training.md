---
document_id: SW-ISMS-TRN-001
title: Information Security Awareness Training
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-009
training:
  course_id: security-awareness-annual
  duration: 60
  target_audience: [all_staff, contractors, new_hires]
  required_for: [new_hire, annual_refresh]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
    question_count: 15
  validity_period: 12
---

# Information Security Awareness Training

**Duration**: 60 minutes
**Target Audience**: All Swedwise staff (mandatory annual training)
**Passing Score**: 80%

---

## Why This Matters

**30-second version:**

You're not just protecting Swedwise - you're protecting our customers, their data, and your own career. Security breaches can destroy trust, cost millions, and put us out of business. The good news? Most attacks succeed because of simple mistakes that you can easily avoid. This training gives you the knowledge to be part of our defense, not our weakest link.

**The reality:**
- 90% of data breaches start with human error (phishing, weak passwords, lost devices)
- Average cost of a data breach: 4.45 million USD
- As consultants, you handle customer data daily - one mistake can end relationships
- ISO 27001 certification requires everyone to be trained - this is a business necessity

**Your role:**
Security is everyone's job. You don't need to be a technical expert - just aware, careful, and willing to speak up when something seems wrong.

---

## Module 1: Introduction to Information Security

### The CIA Triad

Information security protects three core properties:

**Confidentiality**
- Information is accessible only to authorized people
- Example: Customer contracts aren't shared on LinkedIn
- Swedwise context: Client data, pricing, source code

**Integrity**
- Information is accurate and hasn't been tampered with
- Example: Financial reports show correct numbers
- Swedwise context: Customer configurations, invoices, project documentation

**Availability**
- Information and systems are accessible when needed
- Example: Email works when you need to respond to customers
- Swedwise context: Our SaaS platform uptime (99.9% SLA)

### Why Security Matters at Swedwise

**For our business:**
- ISO 27001 certification required for public sector contracts
- Customer trust is our most valuable asset
- SaaS service requires demonstrable security
- Data breaches can end customer relationships and damage reputation

**For you personally:**
- You handle confidential customer data daily
- Security incidents can impact your professional reputation
- Working at customer sites means representing Swedwise's security culture
- Compliance violations can have legal consequences

**For our customers:**
- They trust us with their sensitive data
- Many serve critical public services (healthcare, government, utilities)
- Their reputation depends on our security
- GDPR requires them to choose secure partners

---

## Module 2: Recognizing Threats

### Phishing: The Number One Attack Vector

**What is phishing?**
Fraudulent emails, messages, or websites designed to trick you into revealing information or clicking malicious links.

**How to spot phishing emails:**

**Red Flags:**
1. **Suspicious sender**
   - Misspelled domain (swedwize.com instead of swedwise.se)
   - Free email service (Gmail, Outlook.com) for "official" messages
   - Display name doesn't match email address
   - Sender you don't recognize requesting urgent action

2. **Urgent or threatening tone**
   - "Your account will be locked in 24 hours!"
   - "Immediate action required"
   - "Verify your credentials now"
   - "CEO needs this done immediately" (CEO fraud)

3. **Suspicious links**
   - Hover over links (don't click!) - does URL match claimed destination?
   - Shortened URLs (bit.ly, tinyurl) hiding real destination
   - Misspelled domains (mircosoft.com, paypa1.com)
   - HTTPS doesn't mean safe - attackers use it too

4. **Unexpected attachments**
   - Invoices you didn't request
   - Documents from unknown senders
   - Suspicious file types (.exe, .zip, .js, .scr)
   - Macro-enabled documents (.docm, .xlsm)

5. **Generic greetings**
   - "Dear Customer" instead of your name
   - No personalization (real senders usually know details about you)

6. **Too good to be true**
   - Unexpected refunds or prizes
   - Free gifts or promotions
   - Lottery winnings you didn't enter

**Real-world phishing examples:**

**Example 1: Credential Harvesting**
```
From: IT Support <it.support@swedwize.com>
Subject: [URGENT] Password Verification Required

Your email account requires immediate verification due to
suspicious activity. Click here to verify your credentials
within 24 hours or your account will be suspended.

[Verify Account Now]

IT Department
```

**Red flags:**
- Misspelled domain (swedwize vs swedwise)
- Urgent tone and threat
- Generic signature
- Request to "verify credentials" (never legitimate)

**Example 2: Invoice Scam**
```
From: Finance <finance@customer-company.com>
Subject: Outstanding Invoice #45829

Please find attached invoice for immediate payment.
This is overdue and requires urgent attention.

[Invoice_45829.zip]

Best regards,
Anna Andersson
Finance Manager
```

**Red flags:**
- Unexpected invoice
- Pressure for immediate action
- Attachment from unknown sender
- ZIP file (could contain malware)

**Example 3: CEO Fraud**
```
From: CEO <ceo@swedwise.se>
Subject: Urgent Request

I'm in a meeting and need you to purchase gift cards
for a client emergency. Please buy 10x 5000 SEK gift
cards and send me the codes. I'll reimburse you later.

Thanks,
Per [CEO name]
```

**Red flags:**
- Unusual request (CEO wouldn't ask this way)
- Urgency and pressure
- Request to act outside normal procedures
- Financial transaction via unusual method

**What to do if you receive a phishing email:**

1. **Don't click** links or open attachments
2. **Don't reply** or provide information
3. **Report it** - Forward to security@swedwise.se
4. **Delete it** - After reporting
5. **Warn others** - If it's a widespread campaign

**Note**: We run regular phishing simulations. If you click on a test email, you'll see a training page - don't panic, it's a learning opportunity!

### Social Engineering

**What is social engineering?**
Manipulating people into breaking security procedures or revealing confidential information.

**Common tactics:**

**Pretexting**
- Attacker creates fake scenario to extract information
- Example: "I'm from IT support, I need your password to fix an issue"
- Defense: Verify identity through official channels (call back on known number)

**Baiting**
- Offering something enticing to trick you
- Example: "Free USB drive with conference materials" (contains malware)
- Defense: Never use unknown USB drives; be suspicious of unexpected offers

**Tailgating**
- Following authorized person into secure area
- Example: "Can you hold the door? I forgot my badge"
- Defense: Don't let strangers into secure areas; require everyone to badge in

**Quid Pro Quo**
- Offering help or service in exchange for information
- Example: "I'm calling about your computer problem" (you didn't report one)
- Defense: Verify identity; be suspicious of unsolicited "help"

**Authority**
- Impersonating someone in authority
- Example: "I'm the new IT director, I need admin access immediately"
- Defense: Verify through official channels; don't bypass procedures for anyone

**Swedwise-specific scenarios:**

**Scenario 1: Customer Site**
You're working at a customer site. Someone approaches claiming to be from the customer's IT department and asks for your laptop to "install security updates."

**What to do:**
- Ask for identification
- Verify with your customer contact
- Never hand over your laptop to unverified individuals
- Contact Swedwise IT if unsure

**Scenario 2: Phone Call**
You receive a call from someone claiming to be from Microsoft support, saying your Office 365 account has been compromised and they need your password to fix it.

**What to do:**
- Hang up - Microsoft doesn't make unsolicited support calls
- Report to Swedwise IT
- Never give passwords over the phone

### Malware and Ransomware

**Types of malware:**

**Virus**
- Attaches to files and spreads when file is shared
- Can corrupt or delete data

**Trojan**
- Disguised as legitimate software
- Creates backdoor for attackers

**Ransomware**
- Encrypts your files and demands payment
- May also steal data before encrypting (double extortion)
- Example: WannaCry, Ryuk, LockBit

**Spyware**
- Secretly monitors your activity
- Steals passwords, emails, files

**How malware spreads:**
- Email attachments (invoices, documents, compressed files)
- Malicious websites and downloads
- Compromised legitimate websites (drive-by downloads)
- USB drives and removable media
- Exploiting software vulnerabilities (unpatched systems)

**Warning signs of infection:**
- Computer running slowly
- Unexpected pop-ups or ads
- Programs crashing frequently
- Files disappearing or changing
- Unfamiliar programs or browser toolbars
- Antivirus disabled or not updating

**Protection:**
- Keep software updated (Windows, Office, browsers)
- Use antivirus and keep it updated
- Don't disable security software
- Don't open suspicious email attachments
- Don't download software from untrusted sources
- Report suspected infections immediately

**If you suspect malware:**
1. **Disconnect from network** (unplug Ethernet, disable Wi-Fi)
2. **Don't shut down** (may lose evidence or encrypt more files)
3. **Report immediately** to CISO or IT
4. **Don't pay ransom** (no guarantee of recovery)
5. **Follow incident response** procedure

### Physical Security Threats

Security isn't just digital:

**Theft or loss of devices**
- Laptops contain confidential data
- Lost phones may have access to email and systems
- USB drives with customer data

**Unauthorized access**
- Strangers in the office
- Tailgating into secure areas
- Unescorted visitors

**Shoulder surfing**
- Someone watching you type password
- Viewing confidential documents on screen
- Especially risky on public transport, cafes

**Dumpster diving**
- Retrieving printed documents from trash
- Unshredded confidential materials

**Protection:**
- Lock devices when unattended (Windows+L)
- Use privacy screens in public
- Clean desk policy - secure documents when you leave
- Shred confidential documents
- Report lost or stolen devices immediately
- Challenge unknown people in the office
- Escort visitors; don't let them wander

---

## Module 3: Password Security and Authentication

### Creating Strong Passwords

**Password requirements:**
- **Length:** Minimum 12 characters (longer is better)
- **Complexity:** Mix of uppercase, lowercase, numbers, symbols
- **Uniqueness:** Different password for every system

**Good approach: Passphrases**
- Easier to remember than random characters
- Long enough to be secure
- Example: `Coffee&Mountains2024!` (21 characters)

**Examples of strong passwords:**
- `ILove2Hike@Klaralven!` (personal, memorable, secure)
- `MyDog'sName=Charlie!17` (not guessable even if people know your dog)
- `BlueSky$Sunshine89*` (multiple words with symbols)

**Bad passwords (never use):**
- `Password123` - Too common
- `Swedwise2024` - Company name
- `Summer2024!` - Predictable
- `Qwerty123456` - Keyboard pattern
- Anything you've used before

### Password Managers: Your Best Friend

**Why use a password manager?**
- Generate strong, unique passwords for every site
- Remember them for you (you only remember one master password)
- Auto-fill passwords (convenient and secure)
- Alert you to compromised passwords

**Approved password managers:**
- 1Password Business (company standard - TBD)
- LastPass Enterprise
- Bitwarden Business

**Not approved:**
- Browser password storage alone (Chrome, Safari)
- Excel spreadsheets
- Sticky notes or notebooks
- Unencrypted files

**Best practices:**
- Strong master password (20+ characters, never reused)
- Enable MFA on your password manager
- Organize with folders (Work, Customer A, Customer B)
- Review and update quarterly

### Multi-Factor Authentication (MFA)

**What is MFA?**
Requires two or more verification methods:
1. Something you know (password)
2. Something you have (phone, security key)
3. Something you are (fingerprint, face)

**Why MFA matters:**
- Passwords alone aren't enough (can be phished or stolen)
- MFA blocks 99.9% of automated attacks
- Required for privileged accounts and remote access

**MFA is required for:**
- Email (Microsoft 365)
- VPN and remote access
- Admin accounts
- SaaS platform access
- Cloud infrastructure (Azure)
- Customer systems (where required)

**MFA methods (best to worst):**

1. **Hardware security key** (YubiKey)
   - Most secure
   - Phishing-resistant
   - Recommended for admin accounts

2. **Authenticator app** (Microsoft Authenticator, Google Authenticator)
   - Very secure
   - Time-based codes
   - Works offline

3. **Push notification** (Microsoft Authenticator)
   - Convenient
   - Verify details match before approving

4. **SMS/Text** (avoid if possible)
   - Vulnerable to SIM swapping
   - Better than nothing

**MFA best practices:**

**Set up multiple methods**
- Register backup method (security key + authenticator app)
- Saves you if you lose your phone

**Secure your MFA device**
- Lock your phone with PIN or biometric
- Don't share your device

**Beware MFA fatigue attacks**
- Attackers spam MFA prompts hoping you'll approve by mistake
- Always verify the prompt (location, time, app)
- Never approve unexpected MFA requests
- Report suspicious prompts immediately

**Save backup codes**
- Store in password manager
- Use if you lose MFA device

### Never Share Credentials

**Never share:**
- Your personal password
- Your laptop
- Your phone with active sessions
- MFA codes

**Sharing work accounts:**
- Use password manager sharing features
- Share account (not personal password)
- Revoke access when no longer needed
- Rotate shared passwords when team members leave

**Never send passwords via:**
- Email
- Teams or Slack
- SMS
- Phone calls
- Sticky notes

---

## Module 4: Data Handling and Classification

### Data Classification Levels

Swedwise uses four classification levels:

**PUBLIC**
- Can be shared freely
- Examples: Marketing materials, public website content, job ads
- No special handling required

**INTERNAL**
- For Swedwise use, not intended for external sharing
- Low risk if accidentally disclosed
- Examples: General policies, internal newsletters, training materials
- Basic protection: don't share unnecessarily

**CONFIDENTIAL**
- Sensitive business or personal information
- Unauthorized disclosure could cause harm
- Examples: Customer contracts, pricing, personal data, financial reports
- **Customer data is Confidential by default**
- Requires access controls, encryption, careful handling

**RESTRICTED**
- Highest sensitivity
- Severe consequences if disclosed
- Examples: Encryption keys, admin passwords, highly sensitive customer data
- Limited to named individuals
- Extensive controls and logging

### Handling Customer Data

**Key principle: Customer data is Confidential minimum**

**Best practices:**
- Access only data you need for your work
- Don't share customer data outside Swedwise without permission
- Encrypt when transmitting (email attachments, file transfers)
- Delete or return when project ends
- Follow customer-specific requirements if more stringent

**GDPR considerations:**
- Customer data often includes personal data (names, emails, etc.)
- Minimize what you collect and keep
- Use only for stated business purpose
- Enable data subject rights (access, deletion, etc.)
- Report data breaches within 72 hours

**Working at customer sites:**
- Follow customer data handling policies
- Keep Swedwise data separate from customer data
- Don't mix customer data between clients
- Clarify data ownership and handling expectations

### Secure File Sharing

**Approved methods:**
- Microsoft Teams / SharePoint (internal sharing)
- OneDrive for Business (encrypted sharing links)
- Swedwise-approved file transfer service (for large files)

**Not approved:**
- Personal email (Gmail, Hotmail for work files)
- Personal cloud storage (personal Dropbox, Google Drive)
- USB drives to mail to people
- Unencrypted email attachments (for Confidential data)

**Best practices:**
- Use password protection for Confidential files sent via email
- Send password separately (different channel - SMS, phone)
- Set expiration dates on sharing links
- Verify recipient before sharing Confidential data
- Revoke access when no longer needed

### Clean Desk Policy

**When leaving your workspace:**
- Lock your computer (Windows+L or Cmd+Ctrl+Q on Mac)
- Secure Confidential documents in locked drawer
- Don't leave passwords on sticky notes
- Clear whiteboards with sensitive information
- Lock mobile devices

**In the office:**
- Shred Confidential documents (cross-cut shredder)
- Use confidential waste bins
- Don't leave documents in printer tray
- Don't discuss Confidential matters in public areas

**Working remotely or at customer sites:**
- Privacy screen on laptop (prevent shoulder surfing)
- Don't leave laptop unattended in public
- Lock devices when stepping away
- Secure documents when not in use

---

## Module 5: Safe Computing Practices

### Software Updates and Patching

**Why updates matter:**
- Close security vulnerabilities
- Prevent exploitation by attackers
- WannaCry ransomware exploited unpatched Windows systems

**What to update:**
- Operating system (Windows, macOS)
- Microsoft Office and productivity apps
- Web browsers (Chrome, Edge, Firefox)
- Java, Adobe, other plugins
- Antivirus software

**Best practices:**
- Enable automatic updates where possible
- Install updates promptly (within 1 week for critical patches)
- Restart when prompted
- Don't postpone indefinitely
- IT will notify about critical patches

### Approved Software Only

**Why this matters:**
- Unapproved software may contain malware
- Licensing compliance
- Support and compatibility
- Security vulnerabilities

**Before installing software:**
- Check if already approved (ask IT)
- Request approval if needed
- Download from official vendor site (not third-party download sites)
- Verify checksums if provided

**Never install:**
- Pirated or cracked software
- Browser extensions without approval
- Software from untrusted sources
- Peer-to-peer file sharing tools (BitTorrent, etc.)

### USB and Removable Media

**Risks:**
- Malware infection (AutoRun exploits)
- Data theft or loss
- Unknown provenance (could be malicious)

**Best practices:**
- Scan with antivirus before opening files
- Don't use unknown USB drives (found in parking lot, received unsolicited)
- Encrypt USB drives containing Confidential data
- Don't use personal USB drives for customer data
- Disable AutoRun/AutoPlay

**If you find a USB drive:**
- Don't plug it into your computer
- Turn it in to IT or facilities
- Could be deliberate attack (baiting)

### Public Wi-Fi Risks

**Risks:**
- Unencrypted connections (eavesdropping)
- Man-in-the-middle attacks
- Rogue access points ("Free WiFi" could be attacker)

**Protection:**
- Use VPN before accessing Swedwise systems
- Avoid accessing Confidential data on public Wi-Fi
- Verify network name with establishment (coffee shop staff)
- Use mobile hotspot if possible
- HTTPS helps but doesn't eliminate all risks

**At customer sites:**
- Use customer-provided network if available
- Ask before connecting to guest Wi-Fi
- VPN back to Swedwise network

### Working from Home Security

**Network security:**
- Secure home Wi-Fi (WPA3 or WPA2, strong password)
- Change default router password
- Update router firmware
- Separate work devices from IoT devices (smart TV, cameras)

**Physical security:**
- Lock devices when away from desk
- Secure workspace (don't leave documents visible to family)
- Privacy screen if others in household
- Shred Confidential documents at home too

**Family and guests:**
- Don't let family use your work laptop
- Lock screen when guests visit
- Don't discuss Confidential matters where others can hear
- Separate work and personal devices

---

## Module 6: Mobile Device Security

### Device Encryption

**Why encryption matters:**
- Protects data if device is lost or stolen
- Meets regulatory requirements (GDPR)
- Prevents unauthorized access

**Encryption required for:**
- All laptops (company-issued and BYOD accessing Confidential data)
- Mobile phones with email or business apps
- Tablets accessing Swedwise systems
- USB drives with Confidential data

**How to verify:**
- Windows: BitLocker (should be enabled by IT)
- macOS: FileVault (check in System Preferences > Security)
- iOS: Enabled by default (if passcode set)
- Android: Settings > Security > Encryption

### Screen Locks

**Requirements:**
- All devices must have screen lock enabled
- Laptops: 5 minutes of inactivity
- Mobile phones: 2 minutes or less
- Tablets: 5 minutes or less

**Strong lock codes:**
- Minimum 6 digits (phones) or 8 characters (computers)
- Not 0000, 1234, or birthdate
- Biometric (fingerprint, face) is good, but set strong backup PIN

**Best practices:**
- Lock manually when leaving device (Windows+L)
- Don't use "swipe to unlock"
- Change code if someone sees you enter it
- Don't share unlock codes

### Lost or Stolen Devices

**Immediate actions:**
1. **Report immediately** to IT/CISO (within 1 hour)
2. **Don't try to recover yourself** (personal safety first)
3. **Change passwords** for accounts on device
4. **IT will remotely wipe** if necessary

**Information to provide:**
- Device type and serial number
- When and where lost
- What data was on device
- Whether it was encrypted and locked

**Prevention:**
- Enable Find My Device (Windows, macOS, iOS, Android)
- Keep devices with you or locked away
- Don't leave in car (especially visible)
- Don't leave in hotel room unattended
- Cable lock for laptops when traveling

### BYOD (Bring Your Own Device) Considerations

**Personal devices accessing work email/data:**

**Requirements:**
- Must be enrolled in MDM (Mobile Device Management)
- Encryption enabled
- Screen lock required
- Antivirus (where applicable)
- IT can remote wipe work data (not personal data)

**Acceptable use:**
- Personal devices can access email and Teams
- Confidential data requires MDM enrollment
- Restricted data requires explicit CISO approval

**Risks to consider:**
- Mixing work and personal data
- Family members may access device
- Apps may access work data
- Personal apps may have vulnerabilities

**Best practice:** Use company-provided devices for work when possible

---

## Module 7: Incident Reporting

### What Constitutes a Security Incident?

**Report if you:**
- Suspect your account was compromised
- Clicked on a phishing link
- Lost or had a device stolen
- Accidentally emailed Confidential data to wrong person
- Discovered unauthorized access to systems
- Found malware on your device
- Saw someone accessing systems they shouldn't
- Discovered exposed customer data
- Saw a suspicious person in the office
- Received threatening or suspicious messages

**Data breach triggers:**
- Unauthorized access to customer or personal data
- Accidental disclosure of Confidential data
- Lost device with customer data
- Ransomware or malware affecting systems
- Misconfigured system exposing data

### How to Report Incidents

**Contact methods:**

**Primary:**
- Email: security@swedwise.se
- Microsoft Teams: #security-incidents channel

**Urgent (Critical incidents):**
- Phone: [TBD - Security hotline]
- Direct contact to CISO: [TBD - contact info]

**What to include in your report:**
1. Your name and contact info
2. Date and time of incident
3. What happened (be specific)
4. Systems or data affected
5. Any actions you've already taken
6. Evidence (screenshots, emails - don't delete!)

**Example incident report:**

> "I clicked on a link in an email that appeared to be from IT support asking me to verify my password. I realized afterwards it was likely phishing. This happened at 14:30 today. I did not enter my password on the suspicious site. I have screenshots of the email."

### Who to Contact

**CISO (Chief Information Security Officer)**
- Name: [TBD]
- Email: [TBD]
- Phone: [TBD]
- Responsible for all security incidents

**Your Manager**
- Should be informed of incidents affecting your work
- Can help coordinate response

**IT Operations**
- Technical issues and malware
- Device problems

**HR**
- If incident involves another employee
- Insider threat concerns

### No Blame Culture for Reporting

**We want to hear about incidents:**
- Reporting helps us fix problems before they get worse
- Early reporting limits damage
- Lessons learned improve security for everyone
- Honest mistakes happen - we focus on prevention, not punishment

**You will NOT be punished for:**
- Clicking on a phishing link (if you report it)
- Accidentally sending data to wrong person (if you report it)
- Reporting a false alarm (better safe than sorry)
- Asking security questions

**We encourage:**
- "See something, say something"
- Reporting even if you're not sure it's an incident
- Asking questions when uncertain
- Proactive communication

**When in doubt, report it.**

---

## Module 8: Physical Security

### Badge Access and Tailgating

**Badge access:**
- Your badge is personal - don't share
- Don't lend your badge to colleagues
- Report lost badges immediately
- Don't prop doors open

**Tailgating prevention:**
- Don't let strangers follow you through secure doors
- Everyone should badge in separately
- Politely ask unknown people to badge in
- It's okay to challenge people you don't recognize

**What to say:**
- "Do you have your badge? I can't let you in without one."
- "I don't recognize you - can I help you find who you're visiting?"
- "Let me call reception to escort you."

**Not rude - it's security-conscious behavior**

### Visitor Management

**All visitors must:**
- Be registered at reception
- Wear visitor badge
- Be escorted at all times
- Not access systems or secure areas unattended

**If you're hosting a visitor:**
- Pre-register them with reception
- Meet them at reception
- Stay with them throughout visit
- Return them to reception when done
- Ensure they return visitor badge

**If you see unescorted visitor:**
- Politely ask if they need help
- Escort them to reception
- Report to facilities or security

### Securing Workstations

**When leaving your desk:**
- Lock your computer (Windows+L or Cmd+Ctrl+Q)
- Even if just for a few minutes
- Secure Confidential documents

**End of day:**
- Lock computer or shut down
- Secure all documents in locked drawer
- Clear desk of sensitive materials
- Lock office or workspace if applicable

**Shared workspaces:**
- Don't leave laptops unattended
- Cable lock for laptops in public areas
- Don't leave passwords visible
- Be aware of shoulder surfers

### Customer Site Security

**When working at customer locations:**

**Follow customer policies:**
- Badge access requirements
- Visitor procedures
- Data handling rules
- Clean desk policy
- Photography restrictions

**Represent Swedwise professionally:**
- Respect customer security culture
- Don't bypass customer controls
- Ask before connecting devices to network
- Clarify what's allowed if unsure

**Protect customer data:**
- Don't discuss customer information in public areas
- Use privacy screen
- Lock devices when away from desk
- Don't take customer data offsite without permission

**Protect Swedwise data:**
- Keep Swedwise credentials secure
- Don't share Swedwise systems access with customer staff
- Maintain Swedwise security standards even at customer sites

---

## Module 9: Knowledge Check

**Instructions:** Answer the following 15 questions. You need 80% (12 correct) to pass. You have 3 attempts.

---

### Question 1
You receive an email from "IT Support" asking you to click a link to verify your password within 24 hours or your account will be locked. What should you do?

A) Click the link and verify your password as requested
B) Forward the email to security@swedwise.se and delete it
C) Reply asking if this is legitimate
D) Ignore the email

**Correct Answer: B**
**Explanation:** This is a classic phishing attempt. Never click links in unsolicited emails asking for credentials. Report to security and delete.

---

### Question 2
What is the minimum password length for standard user accounts at Swedwise?

A) 8 characters
B) 10 characters
C) 12 characters
D) 16 characters

**Correct Answer: C**
**Explanation:** Minimum 12 characters for standard accounts, 16+ for privileged accounts.

---

### Question 3
You're working in a coffee shop on public Wi-Fi. Before accessing Swedwise systems, you should:

A) Proceed normally - HTTPS is enough protection
B) Connect to VPN first
C) Disconnect from Wi-Fi and use mobile data
D) Only access non-sensitive information

**Correct Answer: B**
**Explanation:** Always use VPN on public Wi-Fi before accessing company systems. VPN encrypts all your traffic.

---

### Question 4
What classification level applies to customer data by default?

A) Public
B) Internal
C) Confidential
D) Restricted

**Correct Answer: C**
**Explanation:** Customer data is Confidential by default unless customer specifies otherwise.

---

### Question 5
You find a USB drive in the office parking lot. What should you do?

A) Plug it into your computer to see what's on it
B) Take it home in case someone claims it
C) Turn it in to IT or facilities without plugging it in
D) Throw it away

**Correct Answer: C**
**Explanation:** Unknown USB drives could contain malware (baiting attack). Never plug into your computer. Turn in to IT.

---

### Question 6
Your laptop is stolen from your car. What is your FIRST action?

A) Try to track it using Find My Device
B) Report it to the police
C) Report immediately to IT/CISO (within 1 hour)
D) Change your passwords

**Correct Answer: C**
**Explanation:** Report to IT/CISO immediately (within 1 hour) so they can remotely wipe the device and assess data breach risk. Then report to police and change passwords.

---

### Question 7
Which of these is an example of social engineering?

A) A virus infecting your computer
B) Someone calling claiming to be from IT support requesting your password
C) A DDoS attack on your website
D) Outdated software with vulnerabilities

**Correct Answer: B**
**Explanation:** Social engineering manipulates people into revealing information or breaking procedures. Impersonating IT support to get passwords is classic social engineering.

---

### Question 8
Multi-factor authentication (MFA) is required for which of the following?

A) Only administrator accounts
B) Only when working remotely
C) Email, VPN, and all privileged accounts
D) Only the SaaS platform

**Correct Answer: C**
**Explanation:** MFA is required for email (M365), VPN/remote access, all privileged accounts, SaaS platform, and cloud infrastructure.

---

### Question 9
You're about to leave your desk to get coffee. What should you do with your computer?

A) Leave it running - you'll only be gone 5 minutes
B) Close all windows but leave it unlocked
C) Lock your screen (Windows+L or Cmd+Ctrl+Q)
D) Shut down completely

**Correct Answer: C**
**Explanation:** Always lock your screen when leaving your desk, even briefly. Prevents unauthorized access.

---

### Question 10
You receive an unexpected MFA approval request on your phone, but you're not trying to log in. What should you do?

A) Approve it - probably a system update
B) Deny it and ignore
C) Deny it and immediately report to CISO
D) Ask colleagues if they're trying to access your account

**Correct Answer: C**
**Explanation:** Unexpected MFA requests may indicate someone has your password and is trying to access your account. Deny and report immediately.

---

### Question 11
When working at a customer site, which security policies should you follow?

A) Only Swedwise policies
B) Only customer policies
C) Whichever is less strict (easier to follow)
D) Both Swedwise and customer policies (whichever is more strict)

**Correct Answer: D**
**Explanation:** Follow both sets of policies. If customer requirements are more stringent, follow those for customer data. Always maintain Swedwise baseline standards.

---

### Question 12
What is the clean desk policy for Confidential documents?

A) Leave them neatly stacked on your desk
B) Secure in locked drawer when leaving workspace
C) Cover them with a blank sheet of paper
D) Face down on desk

**Correct Answer: B**
**Explanation:** Confidential documents must be secured in locked storage when workspace is unattended.

---

### Question 13
You accidentally email a file containing customer data to the wrong person (external). What should you do?

A) Send a follow-up email asking them to delete it
B) Hope they don't open it
C) Immediately report as a security incident to CISO
D) Ask your manager what to do

**Correct Answer: C**
**Explanation:** This is a potential data breach. Report immediately to CISO so proper incident response can begin (may require customer and regulatory notification).

---

### Question 14
Which of these is the BEST password?

A) Swedwise2024!
B) P@ssw0rd123
C) ILove2Hike@Klaralven!
D) Spring2024

**Correct Answer: C**
**Explanation:** Long passphrase with personal meaning but not guessable. Meets complexity requirements (21 characters, mixed case, numbers, symbols).

---

### Question 15
You notice a person you don't recognize wandering around the office without a visitor badge. What should you do?

A) Ignore them - they probably work here
B) Politely ask if they need help and escort them to reception
C) Call security immediately
D) Hide any confidential information on your desk

**Correct Answer: B**
**Explanation:** Politely challenge unknown people. They may be lost or new. Escort to reception to verify they're supposed to be there. Not rude - it's security-conscious.

---

## Course Completion

**Congratulations on completing the Information Security Awareness Training!**

**Next Steps:**

1. **Review your score** - You need 80% (12/15 correct) to pass
2. **Retake if needed** - You have up to 3 attempts
3. **Certificate** - Upon passing, your completion will be recorded
4. **Apply what you learned** - Security is everyone's responsibility

**Key Takeaways:**

- **Be vigilant**: Most attacks rely on human error - awareness is your best defense
- **Think before you click**: Verify before clicking links or opening attachments
- **Protect credentials**: Strong, unique passwords + MFA
- **Classify and protect data**: Customer data is Confidential - handle with care
- **Report incidents**: Early reporting limits damage - no blame for honest mistakes
- **Physical security matters**: Lock screens, secure documents, challenge strangers
- **Stay updated**: Security landscape evolves - stay informed

**Questions or Concerns?**

- Email: security@swedwise.se
- CISO: [TBD - contact info]
- Your manager
- #security channel on Teams

**Remember: Security is not about being paranoid - it's about being careful, informed, and proactive. You're protecting Swedwise, our customers, and your own professional reputation.**

---

## Additional Resources

**Quick Reference Guides:**
- SW-ISMS-GUI-002: Password and Authentication Guideline
- SW-ISMS-GUI-001: Information Classification Guideline (TBD)
- SW-ISMS-GUI-004: Mobile Device Guideline (TBD)
- SW-ISMS-GUI-006: Remote Working Guideline (TBD)

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-POL-002: Acceptable Use Policy (TBD)
- SW-ISMS-POL-007: Information Classification Policy

**Procedures:**
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-ISMS-PRO-009: Security Awareness Training Procedure

**External Resources:**
- Have I Been Pwned: https://haveibeenpwned.com (check if your email/password was breached)
- SANS Security Awareness: https://www.sans.org/security-awareness-training/
- Australian Cyber Security Centre: https://www.cyber.gov.au/

**Monthly Security Tips:**
Watch for monthly security awareness emails covering topics like phishing, travel security, and current threats.

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial training content | [TBD - CEO] |

**Next Review Date**: [TBD - annually or when significant changes occur]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This training is mandatory for all Swedwise staff and must be completed annually. Completion is tracked and reported to management.*
