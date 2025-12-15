---
document_id: SW-ISMS-GUI-004
title: Mobile Device Security Guideline
doc_type: guideline
version: "1.0"
status: draft
classification: internal
owner: TBD (CISO)
effective_date: TBD
review_date: TBD
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001  # Information Security Policy
  - SW-ISMS-PRO-002  # Access Control Procedure
  - SW-ISMS-GUI-002  # Password and Authentication Guideline
  - SW-ISMS-GUI-006  # Remote Working Guideline
---

# Mobile Device Security Guideline

## Purpose

This guideline provides practical advice for securely using mobile devices (laptops, smartphones, tablets) to access Swedwise systems and customer data. It covers both company-owned and personal devices used for business purposes.

## Scope

This guideline applies to:
- Company-owned laptops, smartphones, and tablets
- Personal devices accessing Swedwise email or systems (BYOD)
- Removable media (USB drives, external hard drives)
- Devices used at customer sites, home offices, and while traveling

## Mobile Device Categories

### Company-Owned Devices

**Devices Provided by Swedwise:**
- Laptops (Windows or macOS)
- Smartphones (iOS or Android)
- Tablets (iPad, Surface)

**Responsibilities:**
- Swedwise owns the device and data
- IT manages security configuration
- User responsible for physical security and appropriate use
- Return device when leaving company or upon request

### Personal Devices (BYOD - Bring Your Own Device)

**Allowed for:**
- Email access (Outlook mobile app)
- Calendar and contacts
- Teams/Slack messaging
- Limited business applications (with approval)

**Not Allowed for:**
- Storing customer data locally
- Accessing production systems (SaaS platform)
- Development work
- Confidential document storage

**Requirements:**
- Must meet minimum security standards (see below)
- IT may require enrollment in mobile device management (MDM)
- Swedwise reserves right to wipe company data remotely
- User owns device, but agrees to security controls

## Security Requirements by Device Type

### Laptops (Company-Owned)

**Mandatory Security Controls:**
- [ ] Full-disk encryption (BitLocker on Windows, FileVault on macOS)
- [ ] Antivirus/anti-malware software (Microsoft Defender or approved alternative)
- [ ] Firewall enabled
- [ ] Operating system updates (automatic installation)
- [ ] Screen lock: 5 minutes inactivity (3 minutes at customer sites)
- [ ] Strong password or PIN (12+ characters)
- [ ] Biometric authentication (fingerprint/face recognition) where available
- [ ] VPN client installed and configured
- [ ] Remote wipe capability enabled
- [ ] Automatic backup configured (OneDrive, company backup solution)

**Recommended:**
- Privacy screen filter (mandatory at customer sites and in public)
- Cable lock for use in public places
- Laptop bag (doesn't advertise contents)
- Webcam cover (when not in use)

### Smartphones (Company-Owned)

**Mandatory Security Controls:**
- [ ] Screen lock: PIN, password, or biometric (6+ digits)
- [ ] Auto-lock: 1 minute or less
- [ ] Device encryption (enabled by default on iOS, enable on Android)
- [ ] Operating system updates (install promptly)
- [ ] Remote wipe capability enabled (Find My iPhone, Android Device Manager)
- [ ] Company email/apps via approved method (Outlook app with MDM)
- [ ] Avoid public WiFi for sensitive work (use mobile data or VPN)

**Recommended:**
- Biometric lock (fingerprint, Face ID)
- Disable lock screen notifications (preview of message content)
- Use separate work profile (Android) or managed apps (iOS)

### Tablets (Company-Owned)

**Requirements:**
- Same as smartphones (above)
- Consider use case: Tablets should not replace laptops for accessing confidential data
- Use approved apps only (Outlook, Teams, approved business apps)

### Personal Devices (BYOD)

**Minimum Security Requirements:**
- Screen lock (PIN, password, or biometric)
- Operating system up-to-date
- Only access email/calendar via approved apps (Outlook mobile app)
- Accept mobile device management (MDM) enrollment if required by IT
- Agree to remote wipe of company data if device is lost or stolen
- Agree not to jailbreak/root device

**Not Permitted on BYOD:**
- Storing customer data locally
- Accessing SaaS platform or production systems
- Development tools or environments
- Confidential document storage (use company laptop)

## Full-Disk Encryption

### What is Full-Disk Encryption?

Full-disk encryption protects all data on a device by encrypting the entire hard drive. If the device is lost or stolen, data cannot be accessed without the encryption key (your password).

**Why it matters:**
- Prevents data theft if device is lost or stolen
- Protects customer data and intellectual property
- Required by many customer contracts and regulations
- Mitigates impact of physical theft

### Enabling Full-Disk Encryption

**Windows (BitLocker):**
1. Settings → System → About → Device encryption (or BitLocker)
2. Turn on BitLocker
3. Save recovery key in secure location (OneDrive, password manager)
4. Encryption happens automatically in background

**macOS (FileVault):**
1. System Preferences → Security & Privacy → FileVault
2. Turn On FileVault
3. Save recovery key in secure location (password manager, write down and store in safe)
4. Encryption happens automatically in background

**Verification:**
- IT will verify encryption is enabled during device setup
- Self-check: Look for encryption status in system settings
- Contact IT if encryption is disabled or fails

**Recovery Key:**
- Save recovery key securely (you'll need it if you forget your password)
- Don't store recovery key on the same device
- Recommended: Print and store in safe, or save in password manager

## Screen Lock and Authentication

### Screen Lock Requirements

| Device Type | Lock Method | Auto-Lock Time | Minimum Strength |
|-------------|-------------|----------------|------------------|
| Company Laptop | Password/PIN + Biometric (optional) | 5 min (3 min at customer sites) | 12+ character password or 6+ digit PIN |
| Personal Laptop (BYOD) | Password/PIN | 5 min | 8+ characters |
| Company Smartphone | PIN/Password + Biometric | 1 min | 6+ digits |
| Personal Smartphone (BYOD) | PIN/Password/Biometric | 2 min | 6+ digits |
| Tablet | PIN/Password + Biometric | 2 min | 6+ digits |

### Authentication Methods

**Passwords/PINs:**
- See Password and Authentication Guideline (SW-ISMS-GUI-002)
- Use strong, unique password for device login
- Don't use same password as email or other accounts

**Biometric (Recommended):**
- Fingerprint (Touch ID, Windows Hello)
- Face recognition (Face ID, Windows Hello)
- Faster and more convenient than password
- Still need password/PIN as fallback

**Tips:**
- Enable biometric if available (more likely to use than typing long password)
- Still use strong password/PIN as backup
- Don't disable screen lock for convenience (security risk)

## Lost or Stolen Devices

### Immediate Actions (Within 1 Hour)

**Step 1: Report Immediately**
- Contact IT Support (phone: TBD, email: TBD)
- Contact your manager
- Provide: Device type, serial number (if known), when/where lost

**Step 2: Change Passwords**
- Change passwords for accounts accessed from device:
  - Email (Swedwise account)
  - VPN
  - Any customer systems accessed from device
  - SaaS platform (if applicable)

**Step 3: Remote Wipe**
- IT will initiate remote wipe if device is company-owned
- Remote wipe erases all data on device
- Only effective if device is connected to network

**Step 4: Inform Stakeholders**
- If device contained customer data, inform customer (via manager/CISO)
- Follow incident response procedure (SW-ISMS-PRO-005)

### Lost vs. Stolen

**Lost (Misplaced):**
- Still report immediately
- IT may delay remote wipe for 24 hours (in case you find it)
- Use Find My Device to locate (see below)

**Stolen (Confirmed Theft):**
- Report to police (get police report number)
- IT will remote wipe immediately (don't wait)
- Inform CISO (potential security incident)

### Find My Device

**Before Loss (Setup):**

*iPhone/iPad:*
- Settings → [Your Name] → Find My → Enable Find My iPhone
- Enable "Send Last Location"

*Android:*
- Settings → Security → Find My Device → Enable

*Windows:*
- Settings → Update & Security → Find My Device → Turn On

*macOS:*
- System Preferences → Apple ID → iCloud → Enable Find My Mac

**After Loss (Locate):**
- Visit device manufacturer's locate service (iCloud.com, google.com/android/find)
- Sign in with your account
- View device location on map
- Options: Play sound, Lock, Erase (remote wipe)

**Tips:**
- Test Find My Device occasionally to ensure it works
- Keep device charged (dead battery = can't locate)
- Mark as lost immediately to lock device remotely

## Travel Security

### Domestic Travel (Within Sweden)

**Before Departure:**
- [ ] Ensure full-disk encryption is enabled
- [ ] Back up important data
- [ ] Update operating system and apps
- [ ] Enable Find My Device
- [ ] Pack privacy screen filter

**During Travel:**
- Keep laptop in carry-on (never checked baggage)
- Use cable lock in hotel room
- Use privacy screen on airplane/train
- Lock screen when stepping away (even briefly)
- Use VPN on hotel/public WiFi
- Be aware of shoulder surfing

**Hotel Security:**
- Use room safe for laptop when out
- If no safe, use cable lock or take with you
- Don't leave devices unattended in hotel room
- Check out carefully (don't forget chargers, USB drives)

### International Travel (Outside Sweden/EU)

**Additional Considerations:**
- [ ] Inform IT of travel dates and destination
- [ ] Check company travel policy for device restrictions
- [ ] Consider using "travel laptop" (minimal data)
- [ ] Avoid taking devices with customer data if possible
- [ ] Be aware of border control device searches (some countries)

**Border Crossings:**
- Some countries may inspect devices at border
- Keep devices powered off or locked
- Don't volunteer passwords unless legally required
- Inform CISO if device is inspected (potential compromise)

**High-Risk Countries:**
- Consider not taking devices with confidential data
- Use disposable/burner devices if necessary
- Change passwords after return
- Contact CISO for guidance before traveling to high-risk destinations

### Public Transportation

**Airplanes:**
- Use privacy screen filter (mandatory)
- Be aware of person next to you
- Avoid confidential work if possible
- Lock screen during turbulence or distractions
- Keep laptop with you (don't store in overhead bin)

**Trains:**
- Use privacy screen filter
- Position back against wall or window
- Lock screen when passing through stations
- Keep device in sight at all times

**Airports:**
- Be extra vigilant (high theft area)
- Never leave device unattended
- Use laptop bag (doesn't advertise contents)
- Lock screen when going through security
- Be aware of shoulder surfing in lounges

### Rental Cars

**Never Leave Visible in Car:**
- Laptop, tablet, smartphone
- USB drives, external hard drives
- Company documents

**If You Must Leave in Car:**
- Lock in trunk (not visible from outside)
- Don't leave overnight
- Park in secure, well-lit area
- Consider taking with you instead

## Public WiFi and Network Security

### Public WiFi Risks

**Why Public WiFi is Dangerous:**
- Unencrypted networks (data visible to others)
- Man-in-the-middle attacks (attacker intercepts traffic)
- Fake WiFi networks (attacker controls network)
- Malware distribution

**High-Risk Networks:**
- Coffee shops, hotels, airports
- Conference centers
- Public spaces (parks, malls)
- Any network you don't control

### Safe Use of Public WiFi

**Mandatory: Use VPN**
- Always use VPN before accessing business systems
- VPN encrypts all traffic (prevents eavesdropping)
- Connect to VPN immediately after joining network
- Disconnect from network if VPN fails

**Additional Precautions:**
- Verify network name with staff (avoid fake networks)
- Disable file sharing (Windows: Network type = Public)
- Disable auto-connect to WiFi networks
- Use HTTPS for all websites (look for padlock icon)
- Avoid accessing banking or financial sites on public WiFi
- Consider using mobile hotspot instead (more secure)

**Better Alternatives to Public WiFi:**
1. **Mobile Hotspot (Best):** Use your phone's mobile data as WiFi for laptop
2. **VPN over Public WiFi (Acceptable):** Use VPN whenever on public WiFi
3. **Wait Until Secure Network (Ideal):** Delay work until you're on secure network

### VPN (Virtual Private Network)

**What is VPN:**
- Creates encrypted "tunnel" between your device and Swedwise network
- All traffic is encrypted (unreadable to others on network)
- Appears as if you're on Swedwise network (secure)

**When to Use VPN:**
- Mandatory on all non-Swedwise networks (public WiFi, home, customer sites)
- Accessing Swedwise internal resources (file shares, intranet)
- Accessing SaaS platform from outside Swedwise offices
- Anytime you're on untrusted network

**How to Connect:**
1. Open VPN client (Cisco AnyConnect, FortiClient, or approved VPN)
2. Enter VPN server address (provided by IT)
3. Authenticate (username + password + MFA)
4. Verify connection (VPN icon in taskbar)
5. Proceed with work

**Troubleshooting:**
- VPN won't connect? Check internet connection first
- VPN slow? Disconnect and reconnect, or try different server
- VPN blocked? Some countries block VPN (inform IT before travel)

## Removable Media (USB Drives, External Hard Drives)

### Usage Guidelines

**Approved Uses:**
- Temporary file transfer (with encryption)
- Backup (with encryption)
- Bootable recovery media (IT-provided)

**Not Allowed:**
- Storing customer data without encryption
- Using unknown/found USB drives (malware risk)
- Sharing USB drives between personal and work computers
- Leaving USB drives unattended

### Security Requirements

**Encryption (Mandatory for Confidential/Restricted Data):**
- Use encrypted USB drives (hardware encryption or BitLocker To Go)
- Password-protect encrypted drives (strong password)
- Don't store unencrypted confidential data on USB drives

**Physical Security:**
- Lock USB drives in desk drawer when not in use
- Don't leave USB drives in laptop (easy to lose)
- Label USB drives with owner and classification (if needed)
- Report lost USB drives immediately (same as lost laptop)

### Unknown USB Drives

**Never Insert Unknown USB Drives:**
- Found USB drive? Don't insert into your computer (malware risk)
- Unknown USB drive from conference/event? Don't use (may be malicious)
- USB drive from untrusted source? Contact IT before using

**Malware Risk:**
- USB drives can contain malware that auto-runs
- Infected USB drive can compromise entire computer
- When in doubt, don't insert - contact IT

## Mobile Device Management (MDM)

### What is MDM?

Mobile Device Management (MDM) is software that allows IT to:
- Enforce security policies (screen lock, encryption)
- Install/update apps remotely
- Remote wipe if device is lost/stolen
- Monitor compliance (device is up-to-date, encrypted)
- Separate work and personal data

### Company-Owned Devices

**MDM Enrollment (Mandatory):**
- All company-owned devices must enroll in MDM
- Enrollment happens during device setup (IT will assist)
- MDM enforces security policies automatically
- User cannot disable MDM or change security settings

**What MDM Controls:**
- Encryption settings (mandatory)
- Screen lock timeout and strength
- Operating system updates
- App installation (company apps)
- Remote wipe capability
- VPN configuration

**What MDM Doesn't Control:**
- Personal browsing history (not monitored)
- Personal email or apps (separate profile)
- Location tracking (except if lost/stolen)

### Personal Devices (BYOD)

**MDM Enrollment (Optional but Recommended):**
- MDM can separate work and personal data
- Only work data is managed/monitored
- Personal apps and data are not accessible to IT

**What IT Can Do:**
- Remote wipe work data only (not personal)
- Enforce email security settings
- Require screen lock for access to email
- View work email metadata (not content)

**What IT Cannot Do:**
- View personal emails, photos, or apps
- Track location (except Find My Device if lost)
- Wipe personal data (only work data)
- Monitor personal activity

**User Rights:**
- You own the device (company doesn't)
- You can unenroll from MDM (but lose email access)
- IT will notify you before remote wipe (if possible)

## Application Security

### Approved Applications

**Company-Approved Apps (Install Freely):**
- Microsoft Office Suite (Word, Excel, PowerPoint)
- Microsoft Teams, Outlook
- Web browsers (Chrome, Edge, Firefox)
- VPN client (Cisco AnyConnect, FortiClient)
- Password manager (1Password, LastPass)
- Adobe Acrobat Reader
- Company-approved development tools

**Request Approval Before Installing:**
- Development tools not on approved list
- Cloud storage (Dropbox, Google Drive) - use approved company storage instead
- Collaboration tools (Slack, Zoom, Trello) - IT will configure
- Security tools (antivirus, firewall)

**Never Install:**
- Pirated software (illegal and malware risk)
- Peer-to-peer file sharing (BitTorrent, etc.)
- Unauthorized remote access tools (TeamViewer, AnyDesk) - use approved tools only
- Game software (personal use of company device)

### App Permissions

**Review Permissions Before Installing:**
- Does the app need access to camera, microphone, location?
- Does it need access to contacts, files, email?
- Only grant necessary permissions

**Examples:**
- Camera app needs camera access: Reasonable
- Flashlight app needs location access: Suspicious (deny)
- Game app needs contact list: Suspicious (don't install)

**Tip:** If in doubt, ask IT before installing.

## Backup and Data Loss Prevention

### Backup Requirements

**Company Laptops:**
- Automatic backup to OneDrive for Business (configured by IT)
- Important files: Store in OneDrive, SharePoint, or company file share
- Don't rely on local storage only (laptop can fail or be lost)

**Smartphones/Tablets:**
- Email and contacts sync automatically (via Exchange)
- Photos and personal data: Use personal cloud backup (iCloud, Google Photos)
- Company data: Stored on company systems (not locally)

**Best Practices:**
- Save work documents to OneDrive (automatic backup)
- Don't store critical files only on laptop (use cloud storage)
- Test restore occasionally (ensure backup works)
- Before travel, ensure critical files are backed up

### Data Loss Prevention

**What Not to Store Locally:**
- Customer data (store on SharePoint or customer systems)
- Source code (use Git repositories, Azure DevOps)
- Confidential documents (use SharePoint with access controls)

**Why:**
- Local storage is risky (device can be lost, stolen, or fail)
- Cloud storage is backed up, versioned, and access-controlled
- Easier to share with team
- Survives device loss

## Mobile App Security

### Email and Calendar

**Approved Email App:**
- Outlook mobile app (company standard)
- Configured with MDM for security
- Enforces screen lock and encryption

**Email Security:**
- Don't forward company email to personal email
- Be cautious with attachments from unknown senders
- Don't click links in suspicious emails (phishing)
- Use "Report Phishing" feature in Outlook

### Messaging and Collaboration

**Approved Messaging Apps:**
- Microsoft Teams (company standard)
- Slack (if approved by IT for specific team)

**Messaging Security:**
- Don't share confidential information in personal messaging apps (WhatsApp, SMS)
- Use company-approved apps for work communication
- Be cautious with file sharing in messaging apps

### Cloud Storage

**Approved Cloud Storage:**
- OneDrive for Business (company standard)
- SharePoint (team sites)

**Not Approved for Company Data:**
- Personal Dropbox, Google Drive, iCloud Drive
- File-sharing services (WeTransfer, SendAnywhere)

**Why:**
- Company data must stay on company-controlled storage
- Personal cloud storage lacks access controls and monitoring
- Risk of data leakage

## Physical Security Best Practices

### Cable Locks

**When to Use:**
- Working in public places (library, cafe, co-working space)
- Customer sites (shared work areas)
- Hotel rooms (lock to furniture)
- Conferences and events

**How to Use:**
1. Loop cable around immovable object (table leg, desk)
2. Attach lock to laptop security slot (Kensington slot)
3. Lock with key or combination

**Tip:** Cable lock deters theft but doesn't prevent determined thief. Still lock screen and take with you when possible.

### Asset Tags and Marking

**Company-Owned Devices:**
- Asset tag with company name and IT contact
- "If found, please contact: TBD"
- Helps return lost devices

**Don't Mark:**
- Personal devices with company info (privacy)
- Customer name on device (confidentiality)

### Securing Devices in Office

**At Your Desk:**
- Lock laptop in drawer overnight (if not taking home)
- Use cable lock if working in shared/open area
- Don't leave phone or tablet unattended

**Meeting Rooms:**
- Take laptop with you (don't leave in meeting room)
- Lock meeting room if confidential discussion

## Compliance and Monitoring

### What IT Monitors

**Company-Owned Devices:**
- Security compliance (encryption enabled, OS up-to-date)
- Malware/antivirus status
- VPN usage (logs of connections, not content)
- Company email metadata (sender, recipient, time - not content)

**What IT Doesn't Monitor (Company Devices):**
- Personal browsing history (not monitored)
- Personal email (if accessed via browser)
- Personal files in separate profile/partition

### What IT Monitors (BYOD)

**Personal Devices Accessing Company Email:**
- Email security settings (screen lock enforced)
- Device compliance (encryption, OS version)

**What IT Doesn't Monitor:**
- Personal apps, emails, photos
- Browsing history
- Location (except Find My Device if lost)

### User Responsibilities

**You Are Responsible For:**
- Physical security of device (don't lose it)
- Keeping OS and apps up-to-date
- Following security guidelines (screen lock, VPN, etc.)
- Reporting lost/stolen devices immediately
- Appropriate use (no illegal activity, no personal business on company time)

**You Will Be Held Accountable For:**
- Data breaches due to negligence (leaving laptop in car, not using VPN)
- Malware infections due to unsafe behavior (installing pirated software)
- Loss of customer data due to unencrypted device

## Frequently Asked Questions

**Q: Can I use my personal laptop for work?**
A: Only for accessing email/calendar via approved apps. Don't store customer data or access production systems. Use company laptop for work.

**Q: Can I install games on my company laptop?**
A: No. Company laptops are for business use only. Use personal devices for gaming.

**Q: What if I forget my laptop password?**
A: Contact IT immediately. If you have recovery key (FileVault, BitLocker), you can reset. Otherwise, IT may need to reset (data loss possible).

**Q: Can IT see what I'm browsing on my company laptop?**
A: IT can see network traffic (domains visited, not content) if using company VPN. General browsing is not monitored unless there's a security concern.

**Q: What should I do if my laptop is running slow?**
A: Contact IT. Could be malware, background updates, or hardware issue. Don't try to "fix" yourself (may disable security controls).

**Q: Can I use public USB charging stations (at airports)?**
A: Avoid if possible (risk of "juice jacking" - malware via USB). Use your own charger and wall outlet. If necessary, use "charge-only" cable (data lines disabled).

**Q: What if I accidentally click a phishing link on my phone?**
A: Change your passwords immediately, report to IT, and follow incident response procedure. IT will assess if device is compromised.

**Q: Can I take my company laptop to a repair shop?**
A: No. Contact IT for repairs. Third-party repair shops may access confidential data.

**Q: What happens to my company device when I leave Swedwise?**
A: Return to IT. All company data will be wiped. Personal data (if any) should be removed before returning.

**Q: Can I use AirDrop or Bluetooth file transfer for work files?**
A: Only for non-confidential files. For confidential data, use encrypted file sharing (SharePoint, OneDrive). Bluetooth can be intercepted.

## Related Documents

- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-PRO-002: Access Control Procedure
- SW-ISMS-GUI-002: Password and Authentication Guideline
- SW-ISMS-GUI-003: Clean Desk and Clear Screen Guideline
- SW-ISMS-GUI-006: Remote Working Guideline
- SW-ISMS-PRO-005: Incident Response Procedure

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | TBD | TBD | Initial draft |

**Review Frequency:** Annual or when mobile device policy changes

**Approval:** TBD (CISO)

**Next Review Date:** TBD
