---
document_id: SW-ISMS-GUI-005
title: Secure Development Guideline
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
  - SW-QMS-PRO-002   # Change Management Procedure
---

# Secure Development Guideline

## Purpose

This guideline provides practical guidance for developing secure software and managing code securely. It helps developers at Swedwise build security into applications from the start, following secure coding principles and industry best practices.

## Scope

This guideline applies to:
- Development of SaaS platform (Swedwise Communications)
- Custom software development for customers
- Internal applications and tools
- Scripts and automation
- Configuration management
- Third-party integrations

It covers:
- Secure coding practices
- Code review and testing
- Secrets management
- Dependency management
- Development environment security

## Secure Development Lifecycle

### Security by Design

**Principle:** Build security in from the start, not bolted on later.

**Phases:**

1. **Requirements:** Identify security requirements (authentication, authorization, encryption, data protection)
2. **Design:** Threat modeling, security architecture, data flow diagrams
3. **Development:** Secure coding, code review, static analysis
4. **Testing:** Security testing, penetration testing, vulnerability scanning
5. **Deployment:** Secure configuration, infrastructure hardening
6. **Operations:** Monitoring, incident response, patch management

**Shift-Left Security:**
- Address security early in development (cheaper to fix)
- Automate security testing in CI/CD pipeline
- Developers are responsible for security (not just security team)

### Threat Modeling

**What is Threat Modeling:**
- Systematic approach to identify security threats
- Analyze potential attack vectors
- Prioritize risks and mitigations

**When to Use:**
- New application or feature
- Significant architecture changes
- Handling sensitive data (customer data, credentials)
- SaaS platform development

**Simple Threat Modeling (STRIDE):**

| Threat | Description | Example Mitigation |
|--------|-------------|-------------------|
| **S**poofing | Attacker impersonates user or system | Strong authentication (MFA), certificates |
| **T**ampering | Attacker modifies data or code | Input validation, integrity checks, signing |
| **R**epudiation | Attacker denies action | Audit logging, digital signatures |
| **I**nformation Disclosure | Attacker accesses confidential data | Encryption, access controls, least privilege |
| **D**enial of Service | Attacker disrupts availability | Rate limiting, resource limits, redundancy |
| **E**levation of Privilege | Attacker gains unauthorized access | Least privilege, input validation, authorization checks |

**Process:**
1. Diagram data flow (user → app → database)
2. Identify trust boundaries (external ↔ internal)
3. Apply STRIDE to each component and data flow
4. Document threats and mitigations
5. Review with team and CISO

## Secure Coding Principles

### 1. Input Validation

**Principle:** Never trust user input. Validate, sanitize, and encode all input.

**Why:** Prevents injection attacks (SQL injection, XSS, command injection)

**Guidelines:**
- Validate input on server side (not just client side - client can be bypassed)
- Use allow-lists (known good) rather than block-lists (known bad)
- Reject invalid input (don't try to "fix" it)
- Encode output (HTML encode, URL encode, SQL parameterization)

**Examples:**

*Bad (SQL Injection):*
```csharp
string query = "SELECT * FROM Users WHERE Username = '" + username + "'";
// Attacker input: ' OR '1'='1
```

*Good (Parameterized Query):*
```csharp
var query = "SELECT * FROM Users WHERE Username = @username";
command.Parameters.AddWithValue("@username", username);
```

*Bad (XSS):*
```javascript
document.getElementById("output").innerHTML = userInput;
// Attacker input: <script>alert('XSS')</script>
```

*Good (HTML Encode):*
```javascript
document.getElementById("output").textContent = userInput; // Auto-encodes
// Or: Use framework's HTML encoding (React auto-escapes, Angular sanitizes)
```

**OWASP Top 10 - Injection Prevention:**
- Use parameterized queries (SQL)
- Use ORM frameworks (Entity Framework, Prisma)
- Validate input against expected format (regex, type checking)
- Encode output based on context (HTML, URL, JavaScript, CSS)

### 2. Authentication and Authorization

**Principle:** Verify who the user is (authentication) and what they can do (authorization).

**Authentication Best Practices:**
- Use established frameworks (ASP.NET Identity, OAuth, OpenID Connect)
- Don't build custom authentication (use proven libraries)
- Enforce strong passwords (see Password Guideline SW-ISMS-GUI-002)
- Support multi-factor authentication (MFA)
- Use secure session management (HttpOnly, Secure, SameSite cookies)
- Implement account lockout (prevent brute force)
- Hash passwords with strong algorithm (bcrypt, Argon2, PBKDF2)
- Never store passwords in plain text

**Authorization Best Practices:**
- Implement principle of least privilege (minimum necessary access)
- Use role-based access control (RBAC)
- Check authorization on every request (don't trust client)
- Implement authorization at API level (not just UI)
- Default to deny (require explicit allow)

**Examples:**

*Bad (Insecure Session):*
```csharp
Response.Cookies.Append("SessionId", sessionId);
// Missing: HttpOnly, Secure, SameSite
```

*Good (Secure Session):*
```csharp
Response.Cookies.Append("SessionId", sessionId, new CookieOptions
{
    HttpOnly = true,    // Prevent JavaScript access
    Secure = true,      // HTTPS only
    SameSite = SameSiteMode.Strict  // CSRF protection
});
```

*Bad (Authorization Bypass):*
```javascript
// Client-side check only
if (user.role === 'admin') {
    showAdminPanel();
}
// API doesn't check authorization - anyone can call API directly
```

*Good (Server-Side Authorization):*
```csharp
[Authorize(Roles = "Admin")]
public IActionResult AdminPanel()
{
    // API enforces authorization
    return View();
}
```

### 3. Sensitive Data Protection

**Principle:** Encrypt sensitive data at rest and in transit. Minimize data collection and retention.

**Data Classification:**
- Follow Information Classification Guideline (SW-ISMS-GUI-001)
- Customer data: Confidential (minimum)
- Credentials, health data, financial data: Restricted

**Encryption Requirements:**

| Data Type | At Rest | In Transit | Notes |
|-----------|---------|------------|-------|
| Customer data | AES-256 | TLS 1.2+ | Database encryption, encrypted columns |
| Credentials | Hashed (bcrypt, Argon2) | TLS 1.2+ | Never store plain-text passwords |
| API keys | Encrypted (vault) | TLS 1.2+ | Use Azure Key Vault, HashiCorp Vault |
| PII (personal data) | AES-256 | TLS 1.2+ | GDPR requirements |
| Logs (may contain sensitive) | Encrypted if sensitive | TLS 1.2+ | Sanitize logs (remove passwords, tokens) |

**Best Practices:**
- Use TLS 1.2 or higher (disable TLS 1.0, 1.1, SSL)
- Use strong ciphers (disable weak ciphers)
- Enable HSTS (HTTP Strict Transport Security)
- Use certificate pinning for mobile apps
- Encrypt database columns for sensitive data (e.g., credit card numbers)
- Encrypt backups
- Use tokenization where possible (replace sensitive data with token)

**Key Management:**
- Store encryption keys in secure vault (Azure Key Vault, AWS KMS)
- Rotate keys regularly (annually or per policy)
- Separate keys from encrypted data (don't store key in same database)
- Use different keys for different purposes (data encryption vs. signing)

### 4. Error Handling and Logging

**Principle:** Handle errors gracefully. Log security events. Don't leak sensitive information in errors.

**Error Handling Best Practices:**
- Catch exceptions and handle appropriately
- Return generic error messages to users ("An error occurred")
- Log detailed error information server-side (for debugging)
- Don't expose stack traces, database errors, or internal paths to users

**Examples:**

*Bad (Information Disclosure):*
```csharp
catch (SqlException ex)
{
    return BadRequest("SQL Error: " + ex.Message);
    // Exposes: "Login failed for user 'sa'" or "Table 'Customers' doesn't exist"
}
```

*Good (Generic Error):*
```csharp
catch (SqlException ex)
{
    logger.LogError(ex, "Database error in GetCustomer");
    return StatusCode(500, "An error occurred. Please contact support.");
}
```

**Logging Best Practices:**
- Log security-relevant events (authentication, authorization failures, data access)
- Include timestamp, user, action, result, IP address
- Sanitize logs (remove passwords, tokens, credit card numbers)
- Protect logs (encrypt in transit and at rest)
- Centralize logging (Azure Monitor, ELK stack, Splunk)
- Monitor logs for anomalies (failed logins, unusual access patterns)

**What to Log:**

| Event | Example | Fields |
|-------|---------|--------|
| Authentication | Login success/failure | Timestamp, username, IP, result |
| Authorization | Access denied | Timestamp, user, resource, action |
| Data Access | View customer record | Timestamp, user, record ID, action |
| Data Modification | Update/delete | Timestamp, user, record ID, before/after |
| Admin Actions | Create user, change permissions | Timestamp, admin user, action, target |
| Security Events | Failed validation, suspicious activity | Timestamp, user, event type, details |

**What NOT to Log:**
- Passwords (even failed passwords)
- Session tokens, API keys
- Credit card numbers, SSN, personal identifiers
- Full request bodies (may contain sensitive data)

### 5. Configuration and Secrets Management

**Principle:** Never hard-code secrets. Use environment variables or secure vaults.

**What Are Secrets:**
- Passwords, API keys, tokens
- Database connection strings
- Encryption keys
- Certificates and private keys
- OAuth client secrets

**Bad Practices (Never Do This):**
```csharp
// Hard-coded password in code
string connString = "Server=db.example.com;User=sa;Password=P@ssw0rd123;";

// Committed to Git
var apiKey = "sk_live_abcd1234567890";

// Stored in configuration file (committed to Git)
// appsettings.json: { "ApiKey": "secret123" }
```

**Good Practices:**

*Environment Variables:*
```csharp
var apiKey = Environment.GetEnvironmentVariable("API_KEY");
```

*Azure Key Vault (Recommended for Production):*
```csharp
var client = new SecretClient(new Uri(vaultUri), new DefaultAzureCredential());
var secret = await client.GetSecretAsync("DatabasePassword");
string password = secret.Value.Value;
```

*Configuration (with User Secrets in Development):*
```csharp
// Development: dotnet user-secrets set "ApiKey" "dev-key-123"
// Production: Azure Key Vault, environment variables
var apiKey = Configuration["ApiKey"];
```

**Secrets Management Guidelines:**
- Use Azure Key Vault (or equivalent) for production
- Use User Secrets or environment variables for development
- Rotate secrets regularly (quarterly or per policy)
- Limit access to secrets (least privilege)
- Audit secret access (log who accessed what)
- Never commit secrets to Git (use .gitignore, pre-commit hooks)

**Detecting Secrets in Code:**
- Use git-secrets, truffleHog, or GitGuardian (scan for committed secrets)
- Enable secret scanning in GitHub/Azure DevOps
- If secret is committed: Rotate immediately, remove from Git history

### 6. Secure Dependencies

**Principle:** Keep dependencies up-to-date. Monitor for vulnerabilities.

**Why:**
- Third-party libraries often have vulnerabilities
- Attackers target known vulnerabilities in popular libraries
- Keeping dependencies updated reduces risk

**Dependency Management Best Practices:**
- Use dependency management tools (NuGet, npm, pip, Maven)
- Regularly update dependencies (monthly or quarterly)
- Monitor for security advisories (GitHub Dependabot, Snyk, WhiteSource)
- Review dependencies before adding (is it maintained? reputable?)
- Minimize dependencies (don't add libraries you don't need)
- Pin versions (don't use wildcards like `*` or `latest`)

**Tools:**
- **GitHub Dependabot:** Auto-creates PRs for dependency updates
- **npm audit / dotnet list package --vulnerable:** Check for known vulnerabilities
- **Snyk:** Continuous monitoring and auto-remediation
- **OWASP Dependency-Check:** Scans dependencies for CVEs

**Process:**
1. Enable Dependabot or equivalent in repository
2. Review dependency update PRs weekly
3. Test before merging (ensure no breaking changes)
4. Prioritize security updates (critical vulnerabilities first)
5. Document known vulnerabilities if update not possible (mitigation plan)

**Example Workflow:**
```bash
# Check for vulnerabilities (npm)
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Check for outdated packages
npm outdated

# Update to latest (within semver range)
npm update
```

### 7. Secure APIs

**Principle:** Secure APIs with authentication, authorization, rate limiting, and input validation.

**API Security Best Practices:**
- **Authentication:** Use OAuth 2.0, OpenID Connect, or API keys
- **Authorization:** Implement role-based access control (RBAC)
- **Rate Limiting:** Prevent abuse (e.g., 100 requests/minute per user)
- **Input Validation:** Validate all parameters (query, body, headers)
- **HTTPS Only:** Never expose APIs over HTTP
- **CORS:** Configure Cross-Origin Resource Sharing appropriately (don't use `*` wildcard)
- **API Gateway:** Use gateway for centralized authentication, rate limiting, logging

**REST API Security Checklist:**
- [ ] HTTPS only (redirect HTTP to HTTPS)
- [ ] Authentication required for all endpoints (except public docs)
- [ ] Authorization checked on every request
- [ ] Input validation (JSON schema, type checking)
- [ ] Rate limiting (per user, per IP)
- [ ] Logging (requests, responses, errors)
- [ ] Error handling (generic errors to client, detailed logs server-side)
- [ ] Versioning (API version in URL or header)
- [ ] CORS configured (allow only trusted origins)

**Example (ASP.NET Core):**
```csharp
[ApiController]
[Route("api/v1/[controller]")]
[Authorize] // Authentication required
public class CustomersController : ControllerBase
{
    [HttpGet("{id}")]
    [Authorize(Policy = "CanViewCustomers")] // Authorization
    public async Task<IActionResult> GetCustomer(int id)
    {
        // Input validation
        if (id <= 0)
            return BadRequest("Invalid customer ID");

        // Business logic
        var customer = await _customerService.GetAsync(id);

        if (customer == null)
            return NotFound();

        return Ok(customer);
    }
}
```

**API Key Management:**
- Generate strong, random API keys (32+ characters)
- Store hashed API keys (like passwords - bcrypt, SHA-256)
- Support key rotation (allow multiple keys per user)
- Expire unused keys (after 90 days of inactivity)
- Log API key usage (track which key accessed what)

### 8. Secure Database Access

**Principle:** Use least privilege for database access. Protect against SQL injection.

**Database Security Best Practices:**
- **Parameterized Queries:** Always use parameterized queries or ORM (never string concatenation)
- **Least Privilege:** Application should use database account with minimum necessary permissions
- **Encryption:** Enable Transparent Data Encryption (TDE) for data at rest
- **Backup Encryption:** Encrypt database backups
- **Access Controls:** Limit who can access production database (DBAs only, via bastion host)
- **Audit Logging:** Enable database audit logging (track all access)

**SQL Injection Prevention:**

*Bad:*
```csharp
var query = $"SELECT * FROM Users WHERE Email = '{email}'";
// Vulnerable to: ' OR '1'='1' --
```

*Good (Parameterized):*
```csharp
var query = "SELECT * FROM Users WHERE Email = @email";
command.Parameters.AddWithValue("@email", email);
```

*Good (ORM):*
```csharp
var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
// Entity Framework automatically parameterizes
```

**Database Account Permissions:**
- Development: SELECT, INSERT, UPDATE, DELETE (no DROP, ALTER)
- Production: SELECT, INSERT, UPDATE, DELETE (no DDL)
- Migration: DDL permissions only during deployment (temporary)
- Admin: Separate admin account with DDL (not used by application)

## Code Review and Testing

### Code Review Process

**When to Review:**
- All code changes before merging to main branch
- Critical security changes (authentication, authorization, encryption)
- Changes to production configuration

**What to Review:**

**Security Checklist:**
- [ ] Input validation present and correct
- [ ] Authentication and authorization implemented
- [ ] No hard-coded secrets
- [ ] Error handling doesn't leak sensitive information
- [ ] Logging includes security events
- [ ] Dependencies are up-to-date
- [ ] SQL injection prevented (parameterized queries)
- [ ] XSS prevented (output encoding)
- [ ] HTTPS enforced
- [ ] Sensitive data encrypted

**Best Practices:**
- At least one reviewer (two for critical changes)
- Use pull request workflow (GitHub, Azure DevOs)
- Run automated tests before review
- Run static analysis tools (see below)
- Review within 24 hours (don't let PRs go stale)

### Static Application Security Testing (SAST)

**What is SAST:**
- Automated tools that scan source code for security vulnerabilities
- Runs during development (before code is deployed)
- Identifies common issues (SQL injection, XSS, hard-coded secrets)

**Tools:**

| Language | Tool | Notes |
|----------|------|-------|
| .NET/C# | SonarQube, Roslyn Analyzers, Fortify | Integrated with Visual Studio |
| JavaScript/TypeScript | ESLint (security plugins), SonarQube | npm install eslint-plugin-security |
| Python | Bandit, SonarQube | pip install bandit |
| Java | SpotBugs, SonarQube, Fortify | Integrated with IntelliJ |
| Multi-language | GitHub Advanced Security, Snyk Code | Cloud-based |

**Integration:**
- Run SAST in CI/CD pipeline (every commit)
- Fail build if critical vulnerabilities found
- Review and triage findings (some are false positives)
- Track findings over time (ensure trend is improving)

**Example (GitHub Actions):**
```yaml
- name: Run SAST
  uses: github/codeql-action/analyze@v2
  with:
    category: "/language:csharp"
```

### Dynamic Application Security Testing (DAST)

**What is DAST:**
- Automated tools that test running application for vulnerabilities
- Simulates attacker probing application
- Identifies runtime issues (authentication bypass, insecure configuration)

**Tools:**
- OWASP ZAP (Zed Attack Proxy) - open source
- Burp Suite - commercial
- Acunetix, Nessus - commercial

**When to Use:**
- Before deployment to production
- After major changes
- Periodic testing (quarterly)

**Integration:**
- Run DAST in staging environment (not production)
- Schedule regular scans (weekly or monthly)
- Triage findings and fix before deployment

### Penetration Testing

**What is Penetration Testing:**
- Manual security testing by security expert
- Simulates real-world attack
- More thorough than automated testing

**When to Use:**
- Before initial SaaS platform launch
- After major changes (new features, architecture changes)
- Annual testing (ongoing)
- When required by customers or regulations

**Process:**
1. Define scope (what systems, what testing is allowed)
2. Engage penetration testing firm (internal or external)
3. Conduct testing (typically 1-2 weeks)
4. Receive report with findings and recommendations
5. Remediate findings (prioritize critical/high)
6. Re-test to verify fixes

## Development Environment Security

### Development Workstation

**Security Requirements:**
- Full-disk encryption (mandatory)
- Antivirus/anti-malware (Microsoft Defender or approved)
- Operating system up-to-date
- Firewall enabled
- Screen lock (5 minutes inactivity)
- Strong password + biometric authentication

**Best Practices:**
- Separate development and production credentials (never use prod credentials in dev)
- Use development/test data (not production customer data)
- Lock screen when away from desk
- Don't install untrusted software or browser extensions

### Development Tools

**Approved IDEs:**
- Visual Studio, Visual Studio Code
- JetBrains (IntelliJ, WebStorm, Rider)
- Eclipse

**Approved Version Control:**
- Git (GitHub, Azure DevOps, GitLab)

**Approved Package Managers:**
- NuGet (.NET)
- npm/yarn (JavaScript)
- pip (Python)
- Maven/Gradle (Java)

**Approved Cloud Platforms:**
- Azure (primary)
- AWS (if approved)

**Security Plugins (Recommended):**
- SonarLint (real-time code analysis in IDE)
- Git-secrets (prevent committing secrets)
- ESLint security plugins (JavaScript)
- Roslyn security analyzers (.NET)

### Source Code Management

**Repository Security:**
- Enable branch protection (require PR for main branch)
- Require code review before merge
- Enable secret scanning (GitHub, Azure DevOps)
- Enable dependency scanning (Dependabot)
- Use private repositories for proprietary code
- Limit write access (least privilege)

**Branch Strategy:**
- Use feature branches (not direct commits to main)
- Protect main/production branches (require PR)
- Delete branches after merge
- Use descriptive branch names (feature/auth-improvement)

**Commit Hygiene:**
- Write meaningful commit messages
- Don't commit secrets (use .gitignore, pre-commit hooks)
- Don't commit large files (use Git LFS)
- Sign commits (GPG signature) for critical repositories

**.gitignore (Always Exclude):**
```
# Secrets
appsettings.Production.json
*.secrets.json
.env

# Credentials
*.pfx
*.key
*.pem

# IDE files
.vs/
.vscode/
.idea/

# Dependencies
node_modules/
packages/

# Build output
bin/
obj/
dist/
```

### CI/CD Pipeline Security

**Pipeline Security Best Practices:**
- Use dedicated service account (not personal account)
- Store credentials in secure vault (Azure Key Vault, GitHub Secrets)
- Limit pipeline permissions (least privilege)
- Enable audit logging (track pipeline runs)
- Use separate pipelines for dev, staging, production
- Require approval for production deployment

**Security Gates:**
- Run unit tests (pass required)
- Run SAST (fail on critical vulnerabilities)
- Run dependency scan (fail on known vulnerabilities)
- Run DAST in staging (before production)
- Manual approval for production (two approvers for critical systems)

**Example (Azure Pipelines):**
```yaml
trigger:
  branches:
    include:
      - main

stages:
- stage: Build
  jobs:
  - job: BuildAndTest
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'Build'
      inputs:
        command: 'build'

    - task: DotNetCoreCLI@2
      displayName: 'Run Tests'
      inputs:
        command: 'test'

    - task: SonarQubePrepare@5
      displayName: 'SAST Scan'

- stage: Deploy
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: Production
    environment: 'Production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            inputs:
              azureSubscription: 'Production'
              appName: 'swedwise-saas-prod'
```

## SaaS Platform Specific Guidance

### Multi-Tenancy Security

**Principle:** Isolate customer data to prevent cross-tenant access.

**Best Practices:**
- **Data Isolation:** Separate databases per tenant OR row-level security with tenant ID
- **Authorization:** Always check tenant ID in authorization logic
- **Testing:** Test cross-tenant access prevention (ensure User A cannot access Tenant B data)
- **Logging:** Log tenant ID in all access logs

**Example (Row-Level Security):**
```csharp
// Always filter by tenant ID
var documents = await dbContext.Documents
    .Where(d => d.TenantId == currentUser.TenantId)
    .ToListAsync();

// NEVER trust client-provided tenant ID - get from authenticated user context
```

### API Security (SaaS Platform)

**Requirements:**
- API authentication: OAuth 2.0 or API keys
- Rate limiting: 1000 requests/hour per tenant (configurable)
- Logging: All API calls logged with tenant ID, user, timestamp, action
- Versioning: Support API versioning (v1, v2)
- Documentation: OpenAPI/Swagger documentation (public for customers)

### Infrastructure Security

**Azure Security Best Practices:**
- Use Azure Key Vault for secrets
- Enable Azure Security Center recommendations
- Enable network security groups (NSGs) to restrict traffic
- Use managed identities (avoid storing credentials)
- Enable Azure Monitor and Log Analytics
- Use Azure Private Link for database access (no public internet)
- Enable Just-In-Time (JIT) access for VMs

**Kubernetes Security (if applicable):**
- Use namespaces for tenant isolation
- Implement network policies (restrict pod-to-pod traffic)
- Use RBAC (role-based access control)
- Scan container images for vulnerabilities (Trivy, Clair)
- Use secrets management (Kubernetes Secrets, Azure Key Vault)
- Enable pod security policies

## Security Training and Awareness

### Developer Security Training

**Required Training:**
- Secure coding fundamentals (annual)
- OWASP Top 10 (annual)
- SaaS-specific security (for platform developers)
- Incident response (annual)

**Resources:**
- OWASP Secure Coding Practices
- Microsoft Security Development Lifecycle (SDL)
- SANS Secure Coding training
- Pluralsight/LinkedIn Learning security courses

### Secure Coding Champions

**Program:**
- Designate security champions in each development team
- Champions receive advanced security training
- Champions conduct code reviews with security focus
- Champions promote security awareness within team

## Incident Response for Developers

### What to Do If You Discover a Vulnerability

**Immediate Actions:**
1. Report to CISO and your manager immediately
2. Don't discuss publicly (responsible disclosure)
3. Document findings (steps to reproduce, impact)
4. Assess severity (critical, high, medium, low)
5. Develop fix or mitigation
6. Test fix thoroughly
7. Deploy fix (follow change management procedure)
8. Notify affected customers if applicable

**Severity Levels:**

| Severity | Description | Response Time | Example |
|----------|-------------|---------------|---------|
| Critical | Allows unauthorized access to customer data or system | Immediate (within 4 hours) | SQL injection, authentication bypass |
| High | Allows privilege escalation or data modification | 24 hours | XSS, authorization bypass |
| Medium | Information disclosure or limited impact | 1 week | Verbose error messages, weak crypto |
| Low | Minimal risk or requires significant effort to exploit | 1 month | Missing HTTP headers, outdated dependency (no known exploit) |

### Responsible Disclosure

**If External Researcher Reports Vulnerability:**
- Acknowledge receipt within 24 hours
- Assess and triage within 48 hours
- Provide timeline for fix (based on severity)
- Keep researcher informed of progress
- Credit researcher (if they consent)
- Consider bug bounty program (future)

## Frequently Asked Questions

**Q: Do I really need to worry about security if we're a small company?**
A: Yes. Attackers don't care about company size. We handle customer data and must protect it. Small companies are often targeted because they have weaker defenses.

**Q: Can I use a library I found on GitHub?**
A: Check first: Is it maintained? Reputable author? Good documentation? Known vulnerabilities? Get approval from tech lead if unsure.

**Q: What if a customer asks for a security feature that's too complex for our timeline?**
A: Discuss with product owner and CISO. Prioritize security requirements. Delay less critical features if necessary. Never skip security for convenience.

**Q: Can I test in production?**
A: No. Use development or staging environment for testing. Production is for customers only.

**Q: What if I accidentally commit a password to Git?**
A: Rotate the password immediately, remove from Git history (git filter-branch, BFG Repo-Cleaner), and notify CISO.

**Q: How often should I update dependencies?**
A: Monthly for regular updates, immediately for critical security updates. Enable Dependabot for automated notifications.

**Q: Can I use open-source libraries without review?**
A: Not for critical functionality. Review license, maintainer, security record. Get approval for new dependencies.

**Q: What's the difference between SAST and DAST?**
A: SAST scans source code (static), DAST tests running application (dynamic). Both are needed for comprehensive security testing.

**Q: Do I need to encrypt everything?**
A: Encrypt sensitive data (customer data, credentials, PII). Public data doesn't need encryption, but use HTTPS for all communication.

**Q: What if a security test fails right before deployment?**
A: Don't deploy. Fix the issue first. Security cannot be compromised for deadlines. Escalate to management if needed.

## Quick Reference - Secure Coding Checklist

**Before You Commit:**
- [ ] Input validation on all user input
- [ ] Output encoding (prevent XSS)
- [ ] Parameterized queries (prevent SQL injection)
- [ ] No hard-coded secrets (use Key Vault or environment variables)
- [ ] Authentication and authorization implemented
- [ ] HTTPS enforced
- [ ] Error handling doesn't leak sensitive info
- [ ] Security events logged
- [ ] Dependencies up-to-date (no known vulnerabilities)
- [ ] Code reviewed by peer

**Before You Deploy:**
- [ ] SAST passed (no critical vulnerabilities)
- [ ] Unit tests passed
- [ ] Integration tests passed
- [ ] DAST passed (staging environment)
- [ ] Configuration reviewed (no secrets in config files)
- [ ] Deployment approved by required approvers
- [ ] Rollback plan ready

## Related Documents

- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-PRO-001: Information Security Management Procedure
- SW-ISMS-GUI-001: Information Classification Guideline
- SW-ISMS-GUI-002: Password and Authentication Guideline
- SW-QMS-PRO-002: Change Management Procedure
- SW-ISMS-PRO-005: Incident Response Procedure

## External Resources

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OWASP Secure Coding Practices: https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/
- Microsoft Security Development Lifecycle (SDL): https://www.microsoft.com/en-us/securityengineering/sdl
- CWE Top 25: https://cwe.mitre.org/top25/
- NIST Secure Software Development Framework (SSDF): https://csrc.nist.gov/publications/detail/sp/800-218/final

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | TBD | TBD | Initial draft |

**Review Frequency:** Annual or when development practices change significantly

**Approval:** TBD (CISO)

**Next Review Date:** TBD
