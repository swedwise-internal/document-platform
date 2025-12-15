---
document_id: SW-ISMS-GUI-002
title: Password and Authentication Guideline
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
  - SW-ISMS-PRO-001  # Information Security Management Procedure
  - SW-ISMS-PRO-002  # Access Control Procedure
---

# Password and Authentication Guideline

## Purpose

This guideline provides practical advice for creating strong passwords, managing authentication credentials securely, and using multi-factor authentication (MFA) to protect Swedwise systems and customer data.

## Scope

This guideline applies to all authentication methods used to access:
- Swedwise corporate systems (email, file shares, applications)
- Customer systems (when working on-site or remotely)
- SaaS platform infrastructure and applications
- Development and production environments
- Third-party services used for business purposes

## Password Requirements

### Standard User Accounts

**Minimum Requirements:**
- **Length:** At least 12 characters (longer is better)
- **Complexity:** Mix of uppercase, lowercase, numbers, and symbols
- **Uniqueness:** Different password for each system/service
- **Expiry:** No forced expiry unless compromised
- **History:** Cannot reuse last 5 passwords

**Examples of Strong Passwords:**
- Passphrase: `Coffee&Mountains2024!` (easy to remember, hard to guess)
- Random: `9mK#xP2$vL8qW@nR` (use password manager)
- Sentence: `MyDog'sName=Charlie!17` (personal but not guessable)

**Examples of Weak Passwords (Never Use):**
- `Password123` - Too common
- `Swedwise2024` - Company name
- `Summer2024!` - Predictable pattern
- `Qwerty123456` - Keyboard pattern
- `Welcome1!` - Common phrase

**Passphrase Recommendation:**

We recommend using **passphrases** instead of complex passwords:
- Easier to remember
- Harder to crack
- Meets complexity requirements naturally

Example: `ILove2Hike@Klarälven!` (21 characters, complex, memorable)

### Privileged/Administrator Accounts

**Enhanced Requirements:**
- **Length:** At least 16 characters
- **Complexity:** Strong mix of character types
- **Uniqueness:** Absolutely unique (never reused)
- **Storage:** Must use password manager/vault
- **MFA:** Multi-factor authentication required (mandatory)
- **Rotation:** Change every 90 days or when team member leaves
- **Logging:** All privileged access is logged and monitored

**Examples:**
- Domain administrator accounts
- Database administrator accounts
- Cloud infrastructure admin (Azure, AWS)
- SaaS platform admin accounts
- Root/sudo access on servers

### Service Accounts (Applications/APIs)

**Requirements:**
- **Length:** At least 32 characters (machine-generated)
- **Storage:** Credential vault only (Azure Key Vault, HashiCorp Vault)
- **Rotation:** Automated rotation every 90 days
- **Scope:** Minimum necessary permissions
- **Documentation:** Purpose and owner documented
- **Never:** Hard-coded in source code or configuration files

**Examples:**
- Application database connections
- API keys and tokens
- Scheduled task credentials
- Integration service accounts

## Multi-Factor Authentication (MFA)

### What is MFA?

MFA requires two or more verification methods:
1. **Something you know:** Password
2. **Something you have:** Phone, security key, token
3. **Something you are:** Fingerprint, face recognition

### MFA Requirements

**Mandatory MFA:**
- All privileged/administrator accounts
- Remote access to Swedwise network (VPN)
- Email (Microsoft 365)
- SaaS platform administration
- Cloud infrastructure access (Azure, AWS)
- Customer systems (where required)
- Financial systems
- HR systems

**Recommended MFA:**
- All business-critical applications
- Development environments with customer data
- Code repositories (GitHub, Azure DevOps)

**MFA Methods (in order of preference):**

1. **Hardware Security Key** (most secure)
   - YubiKey, Google Titan Key
   - Phishing-resistant
   - Recommended for privileged accounts

2. **Authenticator App** (recommended)
   - Microsoft Authenticator
   - Google Authenticator
   - Authy
   - Time-based one-time passwords (TOTP)

3. **Push Notification**
   - Microsoft Authenticator push
   - Verify the login prompt matches your activity

4. **SMS/Text Message** (least secure, avoid if possible)
   - Vulnerable to SIM swapping
   - Use only if no other option available

**Do NOT Use:**
- Email as second factor (email account may be compromised)
- SMS if better options are available

### MFA Best Practices

**Tip 1: Set Up Multiple Methods**
- Register at least two MFA methods (primary + backup)
- Example: Authenticator app + security key
- Prevents lockout if you lose your phone

**Tip 2: Secure Your MFA Device**
- Lock your phone with PIN/biometric
- Don't share your phone or security key
- Report lost MFA device immediately

**Tip 3: Beware of MFA Fatigue Attacks**
- Verify the login prompt is legitimate
- Check location, time, and application
- Never approve unexpected MFA prompts
- Report suspicious MFA requests immediately

**Tip 4: Backup Codes**
- Save backup codes in a secure location (password manager)
- Use backup codes if you lose your primary MFA device
- Generate new backup codes after use

## Password Managers

### Why Use a Password Manager?

- **Unique passwords:** Different password for every system
- **Strong passwords:** Generate cryptographically secure passwords
- **Convenient:** Auto-fill passwords in browsers
- **Secure storage:** Encrypted vault protected by master password
- **Sync across devices:** Access passwords on all your devices

### Recommended Password Managers

**Approved for Business Use:**
- **1Password Business** (company standard - TBD)
- **LastPass Enterprise**
- **Bitwarden Business**

**Personal Use (for non-business accounts):**
- 1Password
- Bitwarden
- Dashlane
- KeePassXC (offline)

**Not Approved:**
- Browser-only password storage (Chrome, Safari) - not secure enough
- Unencrypted files (Word, Excel, text files)
- Sticky notes or notebooks

### Password Manager Best Practices

**Tip 1: Strong Master Password**
- Your master password protects everything
- Use a long, unique passphrase (20+ characters)
- Never reuse your master password
- Memorize it - don't write it down

**Tip 2: Enable MFA on Password Manager**
- Protect your vault with MFA
- Use security key or authenticator app

**Tip 3: Organize Your Vault**
- Use folders or tags (Personal, Work, SaaS Platform, Customer X)
- Add notes for security questions, account recovery info
- Share work passwords only via password manager sharing features

**Tip 4: Regular Review**
- Quarterly: Review stored passwords
- Delete old accounts
- Update weak or reused passwords
- Check for compromised passwords (password manager alerts)

## Credential Storage and Sharing

### Where to Store Passwords

**Approved Storage:**
- Company password manager (1Password Business)
- Credential vault (Azure Key Vault for service accounts)
- Operating system credential manager (Windows Credential Manager, macOS Keychain) - for device-specific credentials only

**Never Store Passwords:**
- Unencrypted files (Word, Excel, text files)
- Sticky notes or notebooks
- Whiteboards or visible notes
- Email or chat messages
- Source code or configuration files (hard-coded)
- Personal cloud storage (personal Dropbox, Google Drive)

### Sharing Passwords Securely

**Approved Methods:**
- Password manager sharing features (preferred)
- Credential vault (for service accounts)
- Out-of-band communication (separate password and username)

**Never Share Passwords Via:**
- Email
- Chat (Slack, Teams, SMS)
- Phone calls
- Sticky notes
- Verbal communication in public places

**Sharing Guidelines:**
- Share only when necessary (need-to-know basis)
- Use password manager sharing (time-limited if possible)
- Shared accounts should have unique credentials (not personal accounts)
- Revoke access when no longer needed
- Log who has access to shared credentials

## Privileged Account Management

### Principle of Least Privilege

**Guidelines:**
- Use standard user account for daily work
- Use privileged account only when necessary (elevated privileges)
- Never use privileged accounts for email, web browsing, or general tasks
- Segregate duties (different admin accounts for different systems)

### Privileged Account Requirements

**Account Hygiene:**
- Unique credentials for each privileged account
- Descriptive naming convention: `admin-[name]-[system]`
- Document account purpose and owner
- Regular access reviews (quarterly)

**Usage Requirements:**
- Enable logging for all privileged access
- Use jump servers or privileged access workstations (PAWs) where possible
- MFA required (mandatory)
- Time-limited sessions
- Approval workflow for sensitive operations (e.g., production database access)

**Examples:**
- Don't: Use domain admin account to read email
- Do: Use standard account for email, switch to admin account when installing software

### Break-Glass Accounts

**Purpose:** Emergency access when normal authentication is unavailable

**Requirements:**
- Strong, unique password (32+ characters)
- Stored in physical safe or secure vault
- Sealed envelope with tamper-evident seal
- Logged and monitored (alert on use)
- Reviewed and rotated quarterly
- Document every use with reason

**Example:** Domain administrator account for Active Directory recovery

## Password Policies by System Type

### Email and Productivity (Microsoft 365)

- **MFA:** Required
- **Password:** 12+ characters
- **Password Manager:** Recommended
- **Conditional Access:** Enforce based on location and device

### SaaS Platform (Production)

- **MFA:** Required (mandatory for all access)
- **Password:** 16+ characters
- **Password Manager:** Required
- **Role-Based Access:** Least privilege
- **Session Timeout:** 15 minutes inactivity
- **Logging:** All access logged and monitored

### Development Environments

- **MFA:** Recommended
- **Password:** 12+ characters
- **Password Manager:** Required
- **Test Data:** Never use production passwords in dev/test

### Customer Systems

- **MFA:** Follow customer requirements
- **Password:** Meet or exceed customer requirements (minimum 12 characters)
- **Password Manager:** Store in dedicated customer vault
- **NDA:** Customer credentials are confidential
- **Offboarding:** Return or delete customer credentials when project ends

### Cloud Infrastructure (Azure, AWS)

- **MFA:** Required (mandatory)
- **Password:** 16+ characters
- **Password Manager:** Required
- **Conditional Access:** Enforce based on location and device
- **Privileged Identity Management (PIM):** Use time-limited admin roles
- **Alerts:** Configure alerts for unusual activity

## Common Scenarios and Guidance

### Scenario 1: Creating a New Account

**Steps:**
1. Generate password using password manager (16+ characters)
2. Enable MFA if available
3. Save password in password manager
4. Tag/categorize the entry (Work, Customer X, etc.)
5. Add notes (security questions, account recovery email)

### Scenario 2: Shared Team Account

**Guidelines:**
- Avoid shared accounts if possible (use individual accounts)
- If necessary, use password manager sharing
- Log who has access
- Rotate password quarterly or when team member leaves
- Use descriptive name (team-[purpose], e.g., team-social-media)

### Scenario 3: Leaving the Company

**Offboarding Process:**
- Change passwords for shared accounts you had access to
- Remove from password manager shared vaults
- Revoke MFA device registrations
- Delete or transfer credential vault entries
- Document handover to replacement

### Scenario 4: Suspected Compromise

**Immediate Actions:**
1. Change password immediately
2. Review recent account activity
3. Report to CISO and manager
4. Check for unauthorized access or changes
5. Enable MFA if not already enabled
6. Follow incident response procedure

### Scenario 5: Password Reset Request

**Verification Required:**
- Verify identity before resetting passwords
- Use out-of-band communication (phone call, separate email)
- Check MFA device registration
- Log password reset requests
- Beware of social engineering (CEO fraud, impersonation)

**Red Flags:**
- Urgent/emergency tone
- Request to bypass normal procedures
- Unusual request time (middle of night)
- New email address or phone number

### Scenario 6: Working from Public WiFi

**Guidelines:**
- Use VPN before accessing business systems
- Avoid entering passwords on untrusted networks
- Use mobile hotspot if possible
- Be aware of shoulder surfing (use privacy screen)
- Lock screen when stepping away

## Password Hygiene Tips

**Tip 1: Unique Passwords Everywhere**
- Never reuse passwords across systems
- Especially: Don't reuse work passwords on personal accounts
- Breach on one system doesn't compromise others

**Tip 2: Check for Compromised Passwords**
- Use "Have I Been Pwned" (haveibeenpwned.com)
- Password managers often include breach monitoring
- Change password if found in breach database

**Tip 3: Security Questions**
- Don't use truthful answers (easily guessed)
- Treat security questions as additional passwords
- Example: "Mother's maiden name?" → Generate random answer and store in password manager

**Tip 4: Avoid Password Hints**
- Password hints often reveal too much
- Use password manager instead of hints
- If required, use cryptic hints only you understand

**Tip 5: Change Passwords When Needed**
- Change if compromised or suspected compromise
- Change after team member with access leaves
- Change if found in breach database
- No need to change regularly if strong and unique

**Tip 6: Be Wary of Phishing**
- Verify website URL before entering password
- Look for HTTPS and correct domain name
- Be suspicious of unexpected password reset emails
- Never enter password after clicking email link

## Technical Controls

### Password Policies (Technical Enforcement)

**Azure AD/Entra ID:**
- Minimum length: 12 characters
- Complexity: Required
- Password protection: Block common passwords
- Account lockout: 5 failed attempts, 15 minute lockout
- MFA: Required for privileged accounts

**On-Premises Active Directory:**
- Minimum length: 12 characters
- Complexity: Required
- Password history: 5 passwords
- Account lockout: 5 failed attempts, 15 minute lockout

**SaaS Platform Application:**
- Minimum length: 16 characters
- Complexity: Required
- Password history: 5 passwords
- Session timeout: 15 minutes inactivity
- MFA: Required for all access

### Monitoring and Alerting

**Monitor For:**
- Failed login attempts (multiple failures)
- Unusual login locations or times
- MFA bypass attempts
- Privileged account usage
- Password resets (especially bulk resets)

**Alerts Configured For:**
- 5+ failed login attempts in 15 minutes
- Login from unexpected country
- Privileged account usage outside business hours
- MFA device registration changes
- Break-glass account usage

## Credential Types Reference

| Credential Type | Length | MFA | Storage | Rotation |
|-----------------|--------|-----|---------|----------|
| User Account | 12+ chars | Required (email, VPN) | Password Manager | As needed |
| Privileged Account | 16+ chars | Required (mandatory) | Password Manager | 90 days or team change |
| Service Account | 32+ chars | N/A | Credential Vault | 90 days (automated) |
| API Keys/Tokens | 32+ chars | N/A | Credential Vault | 90 days |
| Break-Glass | 32+ chars | No (emergency) | Physical safe | 90 days |
| Customer System | 12+ chars (customer req) | Follow customer req | Dedicated vault | Per customer policy |

## Frequently Asked Questions

**Q: Why can't I use the same password everywhere?**
A: If one system is breached, all your accounts with that password are compromised. Unique passwords limit damage.

**Q: How do I remember all these passwords?**
A: Use a password manager. You only need to remember one strong master password.

**Q: Is it safe to store passwords in a password manager?**
A: Yes. Password managers use strong encryption. It's much safer than reusing weak passwords or writing them down.

**Q: What if I forget my master password?**
A: You cannot recover it (by design - no backdoor). Contact IT for account recovery process. Keep backup codes in a safe place.

**Q: Can I share my password with a colleague?**
A: Use password manager sharing features for shared accounts. Never share your personal account password.

**Q: What if I see an unexpected MFA prompt?**
A: Deny the prompt and report it immediately to CISO. It may indicate an attack.

**Q: How long should my password be?**
A: Minimum 12 characters for standard accounts, 16+ for privileged accounts. Longer is better.

**Q: Do I need to change my password every 90 days?**
A: Not unless it's compromised or required for privileged accounts. Focus on unique, strong passwords instead.

**Q: What's the difference between a password and a passphrase?**
A: Passphrases are longer (sentence-like) and easier to remember. Example: `ILoveSwedishSummer2024!`

**Q: Can I use biometrics instead of passwords?**
A: Yes, where available (Windows Hello, Touch ID). Still need a strong password as fallback.

## Related Documents

- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-PRO-002: Access Control Procedure
- SW-ISMS-PRO-005: Incident Response Procedure
- SW-ISMS-GUI-004: Mobile Device Security Guideline
- SW-ISMS-GUI-006: Remote Working Guideline

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | TBD | TBD | Initial draft |

**Review Frequency:** Annual or when authentication requirements change

**Approval:** TBD (CISO)

**Next Review Date:** TBD
