---
document_id: SW-ISMS-GUI-006
title: Remote Working Guideline
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
  - SW-ISMS-GUI-001  # Information Classification Guideline
  - SW-ISMS-GUI-002  # Password and Authentication Guideline
  - SW-ISMS-GUI-003  # Clean Desk and Clear Screen Guideline
  - SW-ISMS-GUI-004  # Mobile Device Security Guideline
---

# Remote Working Guideline

## Purpose

This guideline provides practical advice for working securely outside Swedwise offices, including home offices, customer sites, co-working spaces, and public places. It helps staff maintain security and productivity while working remotely.

## Scope

This guideline applies to all Swedwise staff working remotely in:
- Home offices
- Customer sites
- Co-working spaces
- Hotels and temporary workspaces
- Public places (cafes, airports, trains)
- Any location outside Swedwise offices

## Remote Working Locations

### Home Office

**Advantages:**
- Most secure remote working location (you control the environment)
- Best for confidential work
- Stable, reliable internet connection
- Comfortable, familiar workspace

**Security Requirements:**
- Dedicated workspace (separate from family/personal areas)
- Secure WiFi network (WPA2 or WPA3 encryption)
- Physical security (lock office door for confidential work)
- Privacy (prevent family/visitors from viewing screen or overhearing calls)

**Setup Checklist:**
- [ ] Dedicated work area (desk, chair, good lighting)
- [ ] Secure WiFi (strong password, WPA2/WPA3, guest network for visitors)
- [ ] Lockable drawer or cabinet for confidential documents
- [ ] Privacy for confidential calls (close door, use headphones)
- [ ] Ergonomic setup (prevent injury from poor posture)
- [ ] Reliable internet connection (backup via mobile hotspot if needed)

### Customer Sites

**Advantages:**
- Close collaboration with customer
- Access to customer systems and resources
- Face-to-face communication

**Security Considerations:**
- Follow customer's security policies (often stricter than Swedwise)
- Customer network is untrusted (use VPN for Swedwise resources)
- Customer employees may see your screen (use privacy filter)
- Visitor badge and access controls

**Requirements:**
- Use VPN for all Swedwise resource access
- Privacy screen filter (mandatory)
- Follow customer's clean desk policy
- Lock screen more frequently (3-minute auto-lock)
- Escort requirements (don't wander into unauthorized areas)
- Handle customer data per customer's classification (usually Confidential minimum)

**Best Practices:**
- Ask customer security contact about their policies
- Observe how customer employees handle sensitive information
- Don't discuss Swedwise confidential matters in customer offices
- Lock documents in provided storage or take with you
- Be extra cautious with competitive information (don't access competitor's data on customer network)

### Co-Working Spaces

**Advantages:**
- Professional workspace with amenities
- Stable internet connection
- Meeting rooms available
- Separate work/home environments

**Security Considerations:**
- Shared space with unknown persons
- Network is untrusted (like public WiFi)
- Shoulder surfing risk
- Theft risk (unattended devices)

**Requirements:**
- Use VPN (mandatory)
- Privacy screen filter (mandatory)
- Lock screen when leaving desk
- Use locker for confidential documents (if available)
- Don't use shared printers for confidential documents
- Be cautious in meeting rooms (others may overhear)

**Best Practices:**
- Position desk with back against wall
- Use headphones for confidential calls
- Book private meeting room for confidential work
- Don't leave laptop unattended (use cable lock or take with you)

### Public Places (Cafes, Airports, Libraries)

**Advantages:**
- Convenient when traveling or between meetings
- Short-term work (check email, light tasks)

**Security Considerations:**
- Most insecure remote working location
- Public WiFi (untrusted, often unencrypted)
- Shoulder surfing (people can see your screen)
- High theft risk
- No privacy for calls

**Requirements:**
- Use VPN (mandatory)
- Privacy screen filter (mandatory)
- Avoid confidential work if possible
- Never leave device unattended
- Lock screen frequently (1-minute auto-lock)

**Best Practices:**
- Use mobile hotspot instead of public WiFi (more secure)
- Position back against wall
- Avoid video calls with confidential content
- Don't discuss confidential matters on phone calls
- Keep laptop in sight at all times
- Limit to non-confidential work (email, scheduling, document review)

**When NOT to Work in Public:**
- Handling restricted data (credentials, sensitive personal data)
- Video calls with confidential content
- Financial transactions or sensitive customer work
- When you can't position back against wall (high shoulder surfing risk)

### Hotels

**Advantages:**
- Privacy (own room)
- Reliable workspace

**Security Considerations:**
- Hotel WiFi is public network (untrusted)
- Hotel staff have access to room
- Theft risk if device left in room

**Requirements:**
- Use VPN for all business work
- Store laptop in room safe when out
- If no safe, use cable lock or take with you
- Lock screen before answering door
- Be cautious on hotel WiFi (use VPN)

**Best Practices:**
- Use "Do Not Disturb" sign during confidential calls
- Close curtains/blinds if working at night (prevent viewing from outside)
- Shred confidential printouts before checkout
- Check room carefully before checkout (don't leave USB drives, documents)

## Network Security

### Home WiFi Security

**WiFi Security Checklist:**
- [ ] Change default router password (use strong password)
- [ ] Use WPA2 or WPA3 encryption (disable WEP, WPA)
- [ ] Unique WiFi password (not same as router admin password)
- [ ] Disable WPS (WiFi Protected Setup - vulnerable)
- [ ] Enable router firewall
- [ ] Update router firmware regularly
- [ ] Use guest network for visitors (separate from work network)
- [ ] Disable remote management (unless needed)

**How to Secure Your Home WiFi:**

1. **Change Router Admin Password:**
   - Access router admin panel (usually http://192.168.1.1 or http://192.168.0.1)
   - Login with default credentials (check router label or manual)
   - Change admin password to strong, unique password (12+ characters)

2. **Change WiFi Password:**
   - In router admin panel, go to Wireless settings
   - Change SSID (network name) - avoid identifying information (not "JohnSmith-Home")
   - Set strong WiFi password (16+ characters, mix of letters/numbers/symbols)
   - Save and reconnect all devices

3. **Enable WPA2/WPA3:**
   - In router admin panel, Wireless Security settings
   - Select WPA2-PSK or WPA3 (WPA3 is newer, more secure)
   - Disable WEP, WPA, or "Open" (insecure)

4. **Create Guest Network:**
   - Enable guest network in router settings
   - Use different password than main network
   - Guest network for visitors, IoT devices (smart TV, etc.)
   - Isolate guest network from main network

**Tip:** Contact IT if you need help securing home WiFi.

### VPN (Virtual Private Network)

**What is VPN:**
- Encrypted tunnel between your device and Swedwise network
- Protects data from eavesdropping on untrusted networks
- Makes it appear as if you're on Swedwise network

**When to Use VPN (Mandatory):**
- Any non-Swedwise network (home, customer site, public WiFi, hotel)
- Accessing Swedwise internal resources (file shares, intranet)
- Accessing SaaS platform from outside Swedwise offices
- Working on customer projects with Swedwise data

**When VPN is Not Required:**
- On Swedwise office network (already secure)
- Accessing public websites (e.g., Google, LinkedIn) - but VPN doesn't hurt

**How to Connect to VPN:**

1. Open VPN client (Cisco AnyConnect, FortiClient, or approved VPN)
2. Enter VPN server address: `vpn.swedwise.se` (example - TBD by IT)
3. Enter username and password (Swedwise account)
4. Complete MFA (push notification or authenticator code)
5. Verify connection (VPN icon in taskbar, check IP address)
6. Proceed with work

**VPN Best Practices:**
- Connect to VPN before accessing any business resources
- Verify VPN is connected (check icon in taskbar)
- Disconnect VPN when done working (optional, but saves bandwidth)
- If VPN disconnects, reconnect before continuing work
- Contact IT if VPN won't connect

**VPN Troubleshooting:**
- Won't connect? Check internet connection first (try browsing a website)
- Slow? Disconnect and reconnect, or contact IT
- Disconnects frequently? May be network issue, contact IT
- Blocked? Some countries block VPN, contact IT before international travel

### Public WiFi Safety

**Risks of Public WiFi:**
- Unencrypted networks (anyone on network can see your traffic)
- Fake WiFi networks (attacker controls network)
- Man-in-the-middle attacks (attacker intercepts traffic)
- Malware distribution

**Safe Use of Public WiFi:**

**Step 1: Verify Network Name**
- Ask staff for correct network name (avoid fake networks like "Free Airport WiFi")
- Don't auto-connect to unknown networks

**Step 2: Connect to VPN Immediately**
- As soon as you connect to public WiFi, connect to VPN
- Don't access business resources before VPN is connected

**Step 3: Verify HTTPS**
- Look for padlock icon in browser (HTTPS)
- Don't enter passwords on HTTP sites (unencrypted)

**Step 4: Disable File Sharing**
- Windows: Set network type to "Public" (disables file sharing)
- macOS: System Preferences → Sharing → Disable all sharing

**Step 5: Forget Network After Use**
- Don't save public networks (prevents auto-connect)
- Forget network when done

**Better Alternative: Mobile Hotspot**
- Use your phone's mobile data as WiFi for laptop
- More secure than public WiFi (you control the network)
- Data usage: Check with your mobile plan (may have limited data)

**What to Avoid on Public WiFi:**
- Banking or financial transactions (even with VPN, wait until secure network)
- Entering passwords without VPN
- Accessing highly confidential data
- File transfers of large confidential files

## Physical Security

### Home Office Physical Security

**Physical Security Checklist:**
- [ ] Lockable drawer or cabinet for confidential documents
- [ ] Shredder for confidential printouts (cross-cut)
- [ ] Lock office door during confidential calls or work
- [ ] Position monitor away from windows (prevent viewing from outside)
- [ ] Secure laptop when leaving home (lock in drawer or take with you)
- [ ] Close curtains/blinds at night if working on confidential data

**Family and Visitors:**
- Explain to family why you lock screen and office door (security, not secrecy)
- Don't let family members use work computer
- Lock screen before answering door or when family members enter office
- Don't discuss confidential matters where family can overhear
- Store confidential documents out of sight (locked drawer)

**Children:**
- Keep work laptop out of reach of children
- Lock screen when children are nearby
- Use separate devices for children's use (not work laptop)
- Explain to children (age-appropriate) why work computer is off-limits

### Device Security When Away

**Leaving Home:**
- Take laptop with you OR lock in secure place
- Don't leave in plain view (e.g., on desk visible through window)
- Lock office door if you have one
- Store USB drives and documents in locked drawer

**Vehicle:**
- Never leave laptop visible in car (high theft risk)
- If you must leave in car, lock in trunk (not visible from outside)
- Don't leave overnight in car
- Park in secure, well-lit area

**Hotel:**
- Use room safe for laptop when out
- If no safe, use cable lock (lock laptop to furniture) or take with you
- Don't leave in room when housekeeping is present
- Check room carefully before checkout (don't forget chargers, USB drives)

### Theft Prevention

**High-Risk Locations:**
- Cafes, airports, train stations (common theft locations)
- Cars (laptops stolen from vehicles)
- Hotel rooms (staff have access)
- Conference centers (crowded, distracting)

**Theft Prevention Measures:**
- Use cable lock in public places (attach laptop to table or furniture)
- Never leave laptop unattended (even for bathroom break - pack it up)
- Use laptop bag (doesn't advertise contents - avoid branded bags)
- Keep laptop in sight at all times
- Enable Find My Device (can locate if stolen)
- Enable full-disk encryption (protects data if stolen)

**If Device is Stolen:**
1. Report immediately to IT and manager (within 1 hour)
2. Report to police (get police report number)
3. IT will remote wipe device
4. Change passwords for accounts accessed from device
5. Follow incident response procedure (SW-ISMS-PRO-005)

## Privacy and Confidentiality

### Screen Privacy

**Privacy Screen Filter:**
- Physical filter that narrows viewing angle
- Mandatory in public places and customer sites
- Recommended for home office if working in shared space
- Request from IT if you work remotely frequently

**Screen Lock:**
- Lock screen when stepping away (even at home)
- Auto-lock: 5 minutes (home), 3 minutes (customer site), 1 minute (public)
- Use keyboard shortcut: Windows+L (Windows), Ctrl+Cmd+Q (macOS)

**Monitor Positioning:**
- Position back against wall in public places
- Position monitor away from windows (home office)
- Be aware of who can see your screen
- Use smaller font size in public (harder to read from distance)

### Confidential Calls and Meetings

**Video Conferencing Security:**
- Use approved platforms (Microsoft Teams, Zoom - with Swedwise account)
- Verify meeting link before joining (beware of phishing)
- Use waiting room feature for external participants
- Don't share meeting links publicly (social media, etc.)
- Mute when not speaking
- Disable video if background is not appropriate

**Background Considerations:**
- Use virtual background or blur background
- Ensure no confidential information visible in background (whiteboards, documents)
- Check background before enabling video (tidy up if needed)
- Be aware of who might walk behind you (family, hotel staff)

**Audio Privacy:**
- Use headphones (prevents eavesdropping and echo)
- Close office door or move to private area for confidential calls
- Don't use speakerphone in shared spaces
- Mute notifications during calls (prevent sensitive info from appearing on screen)

**Where NOT to Take Confidential Calls:**
- Public places (cafes, airports, trains)
- Shared hotel lobbies or co-working common areas
- Open customer offices (book meeting room)
- While walking or driving (distracting and lack of privacy)

### Document Handling

**Printing at Home:**
- Minimize printing of confidential documents
- If necessary, use personal printer (not shared printer)
- Shred after use (cross-cut shredder)
- Store in locked drawer if keeping
- Don't leave on printer tray (family members may see)

**Scanning and Copying:**
- Use company-approved scanning apps (Microsoft Office Lens, Adobe Scan)
- Don't use public copiers/scanners for confidential documents
- Delete scans from phone/camera after uploading to secure location

**Disposal:**
- Confidential: Cross-cut shredding (home shredder)
- Restricted: Cross-cut shredding, witnessed disposal if necessary
- Internal: Recycling acceptable
- Don't leave confidential documents in recycling or regular trash

## Working at Customer Sites

### Customer Site Security

**Before Arrival:**
- Understand customer's security policies (clean desk, visitor badge, escort requirements)
- Bring privacy screen filter
- Backup work to Swedwise systems (in case customer network blocks access)
- Inform Swedwise manager of customer site location and work hours

**On Arrival:**
- Display visitor badge as required
- Follow escort requirements (don't wander into unauthorized areas)
- Ask customer security contact for WiFi access and security expectations
- Identify emergency exits and procedures

**While On-Site:**
- Use VPN for Swedwise resource access (treat customer network as untrusted)
- Follow customer's clean desk policy (often stricter than Swedwise)
- Lock screen when leaving workstation (even for brief absences)
- Don't leave Swedwise documents or laptops unattended
- Use privacy screen filter (mandatory)
- Don't discuss Swedwise confidential matters in customer offices

**Customer Data Handling:**
- Follow customer's data classification (usually Confidential or higher)
- Don't mix customer data with Swedwise internal data
- Store customer data per customer's requirements (usually their systems only)
- Don't copy customer data to personal devices or Swedwise systems (unless authorized)
- Return or delete customer data when project ends

**End of Day:**
- Lock Swedwise documents in provided storage or take with you
- Lock laptop or take with you (don't leave at customer site overnight)
- Log out of customer systems
- Clear desk (follow customer's clean desk policy)
- Return visitor badge if required

### Working Across Multiple Customer Sites

**Challenges:**
- Different security policies per customer
- Risk of mixing customer data
- Keeping track of credentials and access

**Best Practices:**
- Use separate folders or partitions for each customer (logical separation)
- Use customer-specific credentials (store in password manager with customer tag)
- Follow most restrictive policy if in doubt
- Don't share one customer's data with another (confidentiality breach)
- Clear understanding with each customer about data storage and access

## Communication and Collaboration

### Email Security

**Email Best Practices:**
- Use company email only (not personal email for business)
- Be cautious with Reply All (check recipients)
- Verify recipient before sending confidential information
- Use encryption for restricted information
- Mark confidential emails with "[Confidential]" in subject
- Don't forward customer emails externally without permission

**Phishing Awareness:**
- Be extra cautious when working remotely (you can't verify with colleagues easily)
- Verify unexpected emails (call sender if suspicious)
- Don't click links in suspicious emails
- Report phishing attempts (Outlook "Report Phishing" button)
- When in doubt, contact IT

### Messaging and Chat

**Approved Platforms:**
- Microsoft Teams (company standard)
- Slack (if approved by IT for specific team)

**Best Practices:**
- Use approved platforms for work communication (not WhatsApp, SMS)
- Mark confidential discussions clearly
- Use private channels for confidential project discussions
- Don't share credentials or sensitive data in chat (use password manager sharing)
- Be professional (chat is logged and may be reviewed)

**Not Approved for Business:**
- Personal messaging apps (WhatsApp, Facebook Messenger, iMessage) for business communication
- Consumer chat platforms (Discord, Telegram) unless approved

### File Sharing and Collaboration

**Approved Cloud Storage:**
- OneDrive for Business (personal files)
- SharePoint (team sites and collaboration)
- Microsoft Teams (integrated with SharePoint)

**Not Approved:**
- Personal Dropbox, Google Drive, iCloud Drive
- Consumer file-sharing services (WeTransfer, SendAnywhere)
- USB drives for sharing with external parties (use secure file sharing)

**Sharing with External Parties:**
- Use SharePoint external sharing (with expiry date and password)
- Verify NDA is in place before sharing confidential information
- Mark documents clearly with classification
- Set expiry dates on shared links
- Track what was shared and with whom

## Health, Wellbeing, and Productivity

### Ergonomics and Workspace Setup

**Ergonomic Setup:**
- Proper desk and chair height (elbows at 90 degrees)
- Monitor at eye level (top of screen at or slightly below eye level)
- Keyboard and mouse at comfortable position
- Good lighting (natural light or desk lamp)
- Take breaks (stretch, walk, rest eyes)

**Tip:** Request ergonomic assessment from Swedwise if experiencing discomfort.

**Home Office Equipment:**
- External monitor, keyboard, mouse (more comfortable than laptop only)
- Desk and chair (not couch or bed - poor posture)
- Headphones for calls (better audio quality and privacy)
- Good internet connection (minimum 10 Mbps download, 5 Mbps upload)

### Work-Life Balance

**Challenges of Remote Work:**
- Difficulty separating work and personal life
- Longer work hours (always "on")
- Isolation and lack of social interaction
- Distractions from family or household tasks

**Best Practices:**
- Set clear work hours (start and end time)
- Take regular breaks (5-10 minutes every hour)
- Designate workspace (separate from personal areas)
- Communicate availability to team (Teams status, calendar)
- Take lunch break away from desk
- "Commute" ritual (walk around block before/after work to signal start/end)
- Stay connected with team (video calls, virtual coffee breaks)

### Communication with Team and Manager

**Best Practices:**
- Over-communicate when remote (you can't see colleagues, so be explicit)
- Update Teams status (available, busy, away)
- Respond to messages in timely manner (within 2 hours during work hours)
- Use video for important meetings (builds rapport)
- Schedule regular check-ins with manager (weekly 1:1)
- Be transparent about challenges (technical issues, distractions, workload)

**When to Use Which Communication Method:**

| Method | Use For | Response Time |
|--------|---------|--------------|
| Email | Non-urgent, detailed, documentation | Within 24 hours |
| Teams Chat | Quick questions, coordination | Within 2 hours (work hours) |
| Teams Call/Video | Real-time discussion, collaboration | Immediate (scheduled) |
| Phone | Urgent, sensitive, or when Teams is down | Immediate |

## Technical Requirements and IT Support

### Minimum Technical Requirements

**Hardware:**
- Laptop with webcam and microphone (provided by Swedwise)
- Headphones for calls
- Reliable internet connection (10 Mbps download, 5 Mbps upload minimum)

**Software:**
- Operating system up-to-date
- Antivirus/anti-malware (Microsoft Defender or approved)
- VPN client installed and configured
- Microsoft Office Suite
- Microsoft Teams

**Network:**
- Home WiFi with WPA2/WPA3 encryption
- Backup internet option (mobile hotspot if broadband fails)

### IT Support for Remote Workers

**How to Get Help:**
- IT Support: [email/phone - TBD]
- Self-service portal: [URL - TBD]
- Teams: IT Support channel
- Emergency (after hours): [phone - TBD]

**Common Issues and Solutions:**

| Issue | Solution |
|-------|----------|
| VPN won't connect | Check internet connection, restart VPN client, contact IT |
| Slow internet | Run speed test, restart router, use mobile hotspot, contact ISP |
| Can't access file share | Verify VPN is connected, check credentials, contact IT |
| Teams not working | Check internet connection, restart app, check status page, contact IT |
| Laptop issues | Restart, check for updates, contact IT |

**Remote IT Support:**
- IT can connect to your laptop remotely (with your permission)
- Be prepared to describe issue clearly (what were you doing, what happened, any error messages)
- Have laptop serial number or asset tag ready (located on bottom of laptop)

### Equipment and Expenses

**Company-Provided Equipment:**
- Laptop
- Mobile phone (if applicable)
- Docking station (if requested)
- Monitor, keyboard, mouse (if requested)

**Personal Equipment:**
- Desk, chair (personal expense - or request budget from manager)
- Internet service (personal expense)
- Headphones (company can provide if requested)

**Expense Reimbursement:**
- Contact manager for remote working expenses (home office setup, internet, etc.)
- Follow expense policy [TBD]

## Compliance and Monitoring

### What Swedwise Monitors

**Company-Owned Devices:**
- Security compliance (encryption, OS updates, antivirus)
- VPN usage (logs of connections, not content)
- Company email metadata (sender, recipient, time - not content)

**What Swedwise Does NOT Monitor:**
- Personal browsing history
- Personal emails (if accessed via browser)
- Location (except Find My Device if lost)
- Video calls or screen content (not recorded)

### Remote Worker Responsibilities

**You Are Responsible For:**
- Physical security of devices (don't lose laptop)
- Secure home network (WiFi encryption, strong passwords)
- Following security guidelines (VPN, screen lock, etc.)
- Maintaining productivity and communication with team
- Reporting security incidents immediately

**You Will Be Held Accountable For:**
- Data breaches due to negligence (not using VPN, leaving laptop in car)
- Loss of customer data due to poor security practices
- Inappropriate use of company equipment

## Frequently Asked Questions

**Q: Can I work from a cafe occasionally?**
A: Yes, but use VPN and privacy screen filter. Avoid highly confidential work in public places.

**Q: Do I need to use VPN at home?**
A: Yes. Home network is not managed by Swedwise, so treat it as untrusted. Always use VPN when accessing business resources.

**Q: Can my family use my work WiFi?**
A: Yes, but create a guest network for family devices (separate from your work device). This isolates their devices from yours.

**Q: What if my home internet goes down?**
A: Use mobile hotspot as backup. If prolonged outage, contact manager about working from co-working space or Swedwise office.

**Q: Can I use my personal laptop for work?**
A: Only for accessing email/calendar via Outlook app. Don't store customer data or access production systems. Use company laptop for work.

**Q: What if family member accidentally sees confidential information on my screen?**
A: Remind them not to share. If it's highly sensitive (e.g., credentials), report to CISO. Lock screen in future to prevent.

**Q: Can I print confidential documents on my home printer?**
A: Minimize printing. If necessary, shred after use (cross-cut shredder). Don't print restricted information at home.

**Q: What if a customer asks me to use their VPN?**
A: Follow customer's requirements. You can use both customer VPN (for their resources) and Swedwise VPN (for Swedwise resources), but not simultaneously. Disconnect one before connecting to the other.

**Q: Can I work from another country?**
A: Contact manager and IT before international remote work. Tax, legal, and security implications. Some countries are not approved for remote work.

**Q: What if I see someone in a cafe looking at my screen?**
A: Use privacy screen filter to prevent shoulder surfing. If someone is being intrusive, lock screen and move to different location.

**Q: Can I use public USB charging stations at airports?**
A: Avoid if possible (risk of "juice jacking" - malware via USB). Use your own charger and wall outlet. If necessary, use "charge-only" cable.

**Q: What's the policy on remote work hours?**
A: Discuss with your manager. Generally, core hours should overlap with team (for collaboration). Flexibility is allowed, but communicate your availability.

## Quick Reference - Remote Working Checklist

**Before You Start Remote Working:**
- [ ] Secure home WiFi (WPA2/WPA3, strong password, guest network)
- [ ] Install VPN client and test connection
- [ ] Set up ergonomic workspace (desk, chair, monitor)
- [ ] Lockable storage for confidential documents
- [ ] Privacy screen filter (if working in shared spaces)
- [ ] Headphones for calls
- [ ] Communicate work hours and availability to team

**Daily Remote Working Routine:**
- [ ] Connect to VPN before accessing business resources
- [ ] Lock screen when stepping away (even at home)
- [ ] Use headphones and close door for confidential calls
- [ ] Take regular breaks (stretch, walk, rest eyes)
- [ ] Update Teams status (available, busy, away)
- [ ] End-of-day: Lock laptop, clear desk, store confidential documents

**Working in Public Places:**
- [ ] Use VPN (mandatory)
- [ ] Privacy screen filter (mandatory)
- [ ] Position back against wall
- [ ] Lock screen frequently (1-minute auto-lock)
- [ ] Never leave device unattended
- [ ] Avoid highly confidential work

## Related Documents

- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-GUI-001: Information Classification Guideline
- SW-ISMS-GUI-002: Password and Authentication Guideline
- SW-ISMS-GUI-003: Clean Desk and Clear Screen Guideline
- SW-ISMS-GUI-004: Mobile Device Security Guideline
- SW-ISMS-PRO-005: Incident Response Procedure

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | TBD | TBD | Initial draft |

**Review Frequency:** Annual or when remote working practices change significantly

**Approval:** TBD (CISO)

**Next Review Date:** TBD
