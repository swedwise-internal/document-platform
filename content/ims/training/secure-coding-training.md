---
document_id: SW-ISMS-TRN-003
title: Secure Coding Training for Developers
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: TBD
review_date: TBD
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001  # Information Security Policy
  - SW-ISMS-GUI-005  # Secure Development Guideline
  - SW-ISMS-PRO-001  # Information Security Management Procedure
  - SW-IMS-PRO-006   # Incident Management Procedure
training:
  course_id: secure-coding-developers
  duration: 180  # 3 hours total (6 modules)
  target_audience: [developers, engineers, technical_staff]
  required_for: [new_hire_developer, annual_refresh_developer]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
  validity_period: 12  # months
---

# Secure Coding Training for Developers

**Welcome!** This training will equip you with the security knowledge and skills to build secure software at Swedwise. As developers, you are security's front line - the code you write today determines how secure our systems are tomorrow.

**Duration**: 3 hours (6 modules of 30-45 minutes each)
**Format**: Self-paced with assessments
**Passing Score**: 80% on final assessment

---

## Why This Matters

**The Reality Check**:
- 70% of security breaches originate in application code (not infrastructure)
- Fixing a vulnerability in production costs **100x more** than fixing it during development
- One security incident can destroy customer trust built over years
- You handle customer data - they're counting on you to protect it

**At Swedwise**:
- We're launching SaaS services (Swedwise Communications) - security is not optional
- Our customers are large organizations with strict security requirements
- Public procurement requires demonstrable security practices
- ISO 27001 certification depends on secure development practices

**Your Role**:
You're not just writing code - you're protecting customer data, maintaining trust, and enabling business success. Security is a **quality attribute**, not an afterthought.

---

## Module 1: Security Mindset (30 minutes)

### Learning Objectives
By the end of this module, you will:
- Understand why developers are critical to security
- Adopt a shift-left security approach
- Recognize the business impact of vulnerabilities
- Think like an attacker to build better defenses

### 1.1 Developers Are Security's Front Line

**Traditional Mindset** (Wrong):
- "Security is the security team's job"
- "We'll add security features later"
- "That's an edge case - won't happen"

**Security Mindset** (Correct):
- "I'm responsible for the security of my code"
- "Security is built in from design"
- "Attackers exploit edge cases - I'll handle them properly"

**Why This Matters**:
Security teams can't review every line of code. You write it, you secure it. The best time to fix a vulnerability is before it's written.

### 1.2 Shift-Left Security

**What is Shift-Left?**
Address security early in development (left side of timeline), not at the end.

```
Traditional:  Requirements → Design → Code → Test → [Security Testing] → Deploy
Shift-Left:   [Security Requirements] → [Threat Model] → [Secure Code] → [Security Tests] → Deploy
```

**Benefits**:
- **Cheaper**: $100 to fix in development vs. $10,000 in production
- **Faster**: No rework, no emergency patches
- **Better**: Security designed in, not bolted on

**How You Do It**:
1. Think about security during design (threat modeling)
2. Code with security in mind (input validation, authentication)
3. Test for security issues (SAST, code review)
4. Fix issues before they reach production

### 1.3 The Cost of Vulnerabilities

**Direct Costs**:
- Incident response (forensics, remediation)
- Customer notification
- Regulatory fines (GDPR: up to €20M or 4% revenue)
- Legal fees

**Indirect Costs**:
- Lost customers (trust takes years to build, seconds to destroy)
- Reputation damage
- Delayed product releases
- Team morale impact

**Real Example** (Equifax 2017):
- Vulnerability: Unpatched Apache Struts (known vulnerability)
- Impact: 147 million customer records exposed
- Cost: $1.4 billion in settlements and cleanup
- Root cause: Developer didn't apply security patch

**The Lesson**: One missing security patch can cost billions. Your code matters.

### 1.4 Thinking Like an Attacker

**Attacker Goals**:
- Steal data (customer records, credentials, intellectual property)
- Disrupt service (ransomware, DDoS)
- Gain unauthorized access (privilege escalation)
- Use your system to attack others (botnet)

**Common Attack Vectors**:
1. **Input manipulation**: Send unexpected input (SQL injection, XSS)
2. **Authentication bypass**: Exploit weak login mechanisms
3. **Authorization bypass**: Access resources without permission
4. **Configuration errors**: Exploit default passwords, exposed admin panels
5. **Known vulnerabilities**: Target outdated dependencies

**Defensive Thinking**:
When writing code, ask:
- What could go wrong with this input?
- What if the user isn't who they claim to be?
- What if they try to access data they shouldn't?
- What happens if this fails?

**Exercise**: Look at this code. What could an attacker do?

```csharp
public IActionResult GetInvoice(int id)
{
    var invoice = db.Invoices.Find(id);
    return Ok(invoice);
}
```

<details>
<summary>Click to reveal vulnerabilities</summary>

**Issues**:
1. **No authentication**: Anyone can call this API
2. **No authorization**: User could access any invoice by changing ID
3. **No input validation**: What if ID is negative or massive?
4. **Information disclosure**: Returns full invoice (maybe too much data)

**Better version**:
```csharp
[Authorize]  // Must be logged in
public IActionResult GetInvoice(int id)
{
    if (id <= 0)
        return BadRequest("Invalid invoice ID");

    var invoice = db.Invoices.Find(id);
    if (invoice == null)
        return NotFound();

    // Check user owns this invoice
    if (invoice.CustomerId != CurrentUser.CustomerId)
        return Forbid();

    return Ok(invoice);
}
```
</details>

### 1.5 Security as a Quality Attribute

Security is like performance or usability - it's a **quality attribute** that must be designed in.

**Quality Attributes**:
- **Performance**: Fast, responsive
- **Usability**: Easy to use, intuitive
- **Security**: Protected, trustworthy
- **Reliability**: Available, stable

You wouldn't ship slow, buggy code. Don't ship insecure code either.

### Module 1 Knowledge Check

1. **Who is primarily responsible for code security at Swedwise?**
   - A) The security team
   - B) The QA team
   - C) The developer who wrote the code ✓
   - D) External auditors

2. **What does "shift-left security" mean?**
   - A) Move security team to the left office
   - B) Address security early in development ✓
   - C) Test security at the end
   - D) Ignore security until production

3. **A vulnerability costs $100 to fix in development. How much in production?**
   - A) $200
   - B) $1,000
   - C) $10,000 ✓
   - D) Same cost

**Reflection Question**: Think of a feature you recently built. What security considerations did you include? What could you improve?

---

## Module 2: OWASP Top 10 (45 minutes)

### Learning Objectives
By the end of this module, you will:
- Understand the 10 most critical web application security risks
- Recognize vulnerable code patterns
- Know how to prevent each vulnerability type

### 2.1 What is OWASP?

**OWASP** = Open Web Application Security Project
- Non-profit foundation focused on software security
- Publishes free security resources
- **OWASP Top 10**: List of most critical web app security risks (updated every 3-4 years)

**Why It Matters**: These 10 vulnerabilities cause most security breaches. Learn these, prevent most attacks.

### 2.2 A01:2021 - Broken Access Control

**What is it?**
Users can access resources they shouldn't (other users' data, admin functions).

**How it happens**:
- Missing authorization checks
- Trusting client-side access control
- Insecure Direct Object References (IDOR)

**Example** (Vulnerable):
```javascript
// URL: /api/users/123/profile
// Attacker changes to: /api/users/124/profile (someone else's profile)

app.get('/api/users/:id/profile', (req, res) => {
    const profile = db.getUserProfile(req.params.id);
    res.json(profile);  // No check if current user should see this!
});
```

**Fixed Version**:
```javascript
app.get('/api/users/:id/profile', authenticateUser, (req, res) => {
    // Check if user is accessing their own profile or is admin
    if (req.user.id !== req.params.id && !req.user.isAdmin) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    const profile = db.getUserProfile(req.params.id);
    res.json(profile);
});
```

**Prevention**:
- Default deny (require explicit authorization)
- Check authorization on **server side** for every request
- Don't trust client-side checks (can be bypassed)
- Use role-based access control (RBAC)
- Log access failures (detect attacks)

### 2.3 A02:2021 - Cryptographic Failures

**What is it?**
Sensitive data exposed due to weak or missing encryption.

**How it happens**:
- Storing passwords in plain text
- Weak encryption algorithms (MD5, DES)
- Transmitting data over HTTP (not HTTPS)
- Storing sensitive data unnecessarily

**Example** (Vulnerable):
```csharp
// DON'T DO THIS!
public void CreateUser(string username, string password)
{
    db.Users.Add(new User {
        Username = username,
        Password = password  // Plain text password!
    });
}
```

**Fixed Version**:
```csharp
public void CreateUser(string username, string password)
{
    var passwordHash = BCrypt.HashPassword(password);  // Hash with bcrypt
    db.Users.Add(new User {
        Username = username,
        PasswordHash = passwordHash  // Store hash, not plain text
    });
}
```

**Prevention**:
- **Never** store passwords in plain text (use bcrypt, Argon2, PBKDF2)
- Use strong encryption (AES-256 for data at rest)
- Use TLS 1.2+ for data in transit (disable TLS 1.0, 1.1)
- Don't collect sensitive data you don't need
- Use HTTPS everywhere (enable HSTS)

**Swedwise Requirement**: All customer data must be encrypted at rest (database) and in transit (TLS).

### 2.4 A03:2021 - Injection

**What is it?**
Attacker sends malicious data that gets interpreted as commands.

**Types**:
- **SQL Injection**: Malicious SQL in database queries
- **Command Injection**: OS commands in system calls
- **LDAP Injection**: Malicious LDAP queries

**Example - SQL Injection** (Vulnerable):
```python
# User input: username = "admin' OR '1'='1' --"
query = f"SELECT * FROM users WHERE username = '{username}'"
# Results in: SELECT * FROM users WHERE username = 'admin' OR '1'='1' --'
# Returns all users! Authentication bypassed!
```

**Fixed Version**:
```python
# Use parameterized query
query = "SELECT * FROM users WHERE username = ?"
cursor.execute(query, (username,))  # Safe - username treated as data, not code
```

**Example - Command Injection** (Vulnerable):
```javascript
// User input: filename = "report.pdf; rm -rf /"
const command = `cat ${filename}`;
exec(command);  // DANGER! Could delete entire filesystem
```

**Fixed Version**:
```javascript
// Validate input
if (!/^[a-zA-Z0-9_\-\.]+$/.test(filename)) {
    throw new Error('Invalid filename');
}
// Or use library that doesn't invoke shell
fs.readFile(filename, 'utf8', callback);
```

**Prevention**:
- Use **parameterized queries** or ORM (Entity Framework, Prisma)
- **Never** concatenate user input into SQL/commands
- Validate input (allow-list known good patterns)
- Use least privilege (app database account shouldn't be admin)
- Escape output when displaying user content

**Real Impact**: SQL injection is still #1 cause of data breaches. Don't be a statistic.

### 2.5 A04:2021 - Insecure Design

**What is it?**
Missing or ineffective security design and architecture.

**How it happens**:
- No threat modeling
- Ignoring security requirements
- Trusting client-side validation
- No rate limiting on sensitive operations

**Example** (Vulnerable Design):
```
Password Reset Flow (Insecure):
1. User requests reset for email address
2. System sends reset link to email
3. Reset link: /reset?email=user@example.com&code=12345
4. User clicks link, enters new password
5. System updates password for that email

Problem: Code is predictable (12345). Attacker can guess codes and reset anyone's password!
```

**Better Design**:
```
Password Reset Flow (Secure):
1. User requests reset for email address
2. System generates cryptographically random token (128-bit)
3. Token stored in database with expiration (1 hour)
4. System sends reset link: /reset?token=a3f7b2c8d1e9...
5. User clicks link (token validated server-side)
6. System verifies token exists, not expired, not used
7. User enters new password
8. Token invalidated after use
```

**Prevention**:
- Perform threat modeling (STRIDE) for new features
- Document security requirements
- Use secure design patterns (not custom crypto)
- Implement security controls server-side
- Plan for security testing

### 2.6 A05:2021 - Security Misconfiguration

**What is it?**
Insecure default configurations, incomplete setups, exposed error messages.

**How it happens**:
- Default passwords unchanged
- Unnecessary features enabled
- Verbose error messages
- Missing security headers
- Outdated software

**Example** (Vulnerable):
```javascript
// Development error handler (DON'T USE IN PRODUCTION!)
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack  // Exposes internal paths, dependencies
    });
});
```

**Fixed Version**:
```javascript
app.use((err, req, res, next) => {
    // Log details server-side
    logger.error(err.stack);

    // Generic message to client
    res.status(500).json({
        error: 'An error occurred. Please contact support.'
    });
});
```

**Common Misconfigurations**:
- CORS allowing all origins (`Access-Control-Allow-Origin: *`)
- Directory listing enabled
- Debug mode enabled in production
- Default admin credentials
- Unnecessary services running

**Prevention**:
- Use secure baseline configurations
- Disable unnecessary features
- Remove default accounts
- Keep software updated
- Use security headers (CSP, X-Frame-Options, HSTS)

### 2.7 A06:2021 - Vulnerable and Outdated Components

**What is it?**
Using libraries, frameworks, or dependencies with known vulnerabilities.

**How it happens**:
- Not updating dependencies regularly
- Using abandoned libraries
- Not monitoring for security advisories

**Example**:
```json
// package.json with old dependencies
{
  "dependencies": {
    "express": "4.16.0",  // Released 2017, has known vulnerabilities
    "lodash": "4.17.4"    // Has prototype pollution vulnerability
  }
}
```

**Fixed Version**:
```json
{
  "dependencies": {
    "express": "^4.18.2",  // Latest secure version
    "lodash": "^4.17.21"   // Vulnerability patched
  }
}
```

**Prevention**:
- Enable Dependabot or Snyk (automatic vulnerability detection)
- Run `npm audit` or `dotnet list package --vulnerable` regularly
- Update dependencies monthly
- Review dependencies before adding (is it maintained?)
- Remove unused dependencies

**At Swedwise**: All repositories must have Dependabot enabled. Review and merge security PRs within 1 week.

### 2.8 A07:2021 - Identification and Authentication Failures

**What is it?**
Broken authentication mechanisms allowing attackers to compromise accounts.

**How it happens**:
- Weak password requirements
- No account lockout (brute force possible)
- Predictable session IDs
- Session fixation vulnerabilities
- Exposing session IDs in URLs

**Example** (Vulnerable):
```csharp
// Weak authentication
if (password == "password123") {  // Weak password allowed
    Session["UserId"] = userId;   // Session in URL or non-HttpOnly cookie
    return Redirect($"/home?sessionId={Session.SessionID}");  // Session ID in URL!
}
```

**Fixed Version**:
```csharp
// Strong authentication
if (!IsStrongPassword(password)) {
    return BadRequest("Password must be 12+ chars, include uppercase, number, symbol");
}

var passwordHash = await userManager.CheckPasswordAsync(user, password);
if (!passwordHash) {
    await LogFailedLogin(username);
    return Unauthorized();
}

// Use framework's secure session management (HttpOnly, Secure, SameSite cookies)
await signInManager.SignInAsync(user, isPersistent: false);
```

**Prevention**:
- Enforce strong passwords (12+ characters, complexity)
- Implement account lockout (5 failed attempts → 15 min lockout)
- Use MFA (multi-factor authentication) for admin accounts
- Use secure session management (HttpOnly, Secure, SameSite cookies)
- Never expose session IDs in URLs
- Implement CAPTCHA on login after failures

### 2.9 A08:2021 - Software and Data Integrity Failures

**What is it?**
Code or infrastructure doesn't verify integrity (signature, hash).

**How it happens**:
- Using unsigned packages
- No integrity verification for updates
- Insecure CI/CD pipelines
- Deserialization of untrusted data

**Example** (Vulnerable - Insecure Deserialization):
```csharp
// User provides serialized object
var userData = Request.Cookies["user"];
var user = JsonConvert.DeserializeObject<User>(userData);  // Trusts client data!
// Attacker could inject malicious object
```

**Fixed Version**:
```csharp
// Don't trust client-side data
var userId = Request.Cookies["userId"];  // Store only ID, not full object
var user = await db.Users.FindAsync(userId);  // Fetch from trusted source
```

**Prevention**:
- Verify package signatures (npm, NuGet)
- Use integrity checks (subresource integrity for CDN resources)
- Secure CI/CD pipeline (code signing, immutable builds)
- Don't deserialize untrusted data
- Use digital signatures for updates

### 2.10 A09:2021 - Security Logging and Monitoring Failures

**What is it?**
Insufficient logging and monitoring allows attacks to go undetected.

**How it happens**:
- Not logging security events
- Logs not monitored
- No alerting on suspicious activity
- Logs don't include enough context

**Example** (Insufficient Logging):
```csharp
public IActionResult Login(string username, string password)
{
    if (Authenticate(username, password)) {
        return Ok();
    }
    return Unauthorized();  // No logging of failed attempt!
}
```

**Fixed Version**:
```csharp
public IActionResult Login(string username, string password)
{
    if (Authenticate(username, password)) {
        logger.LogInformation("Successful login: {Username} from {IP}",
            username, HttpContext.Connection.RemoteIpAddress);
        return Ok();
    }

    logger.LogWarning("Failed login attempt: {Username} from {IP}",
        username, HttpContext.Connection.RemoteIpAddress);
    return Unauthorized();
}
```

**What to Log**:
- Authentication events (success/failure)
- Authorization failures (access denied)
- Input validation failures
- Admin actions (create user, delete data)
- Application errors

**What NOT to Log**:
- Passwords (even failed ones)
- Session tokens, API keys
- Credit card numbers, SSNs

**Prevention**:
- Log all security-relevant events
- Include timestamp, user, IP, action, result
- Centralize logs (Azure Monitor, ELK)
- Monitor for anomalies (failed logins, unusual access)
- Alert on critical events (admin access, mass data export)

### 2.11 A10:2021 - Server-Side Request Forgery (SSRF)

**What is it?**
Attacker tricks server into making requests to unintended locations.

**How it happens**:
- Fetching URL provided by user
- No validation of destination
- Access to internal resources (metadata endpoints, internal APIs)

**Example** (Vulnerable):
```python
# User provides URL to fetch
url = request.args.get('url')
response = requests.get(url)  # Could be internal endpoint!
# Attacker input: http://169.254.169.254/latest/meta-data/iam/security-credentials/
# Exposes AWS credentials!
```

**Fixed Version**:
```python
url = request.args.get('url')

# Validate URL
parsed = urlparse(url)
if parsed.scheme not in ['http', 'https']:
    raise ValueError('Invalid protocol')
if parsed.hostname in ['localhost', '127.0.0.1', '169.254.169.254']:
    raise ValueError('Forbidden host')

# Use allow-list of permitted domains
if parsed.hostname not in ALLOWED_DOMAINS:
    raise ValueError('Domain not allowed')

response = requests.get(url, timeout=5)
```

**Prevention**:
- Validate user-provided URLs (allow-list domains)
- Block internal IP ranges (localhost, 169.254.x.x, 10.x.x.x, 192.168.x.x)
- Use network segmentation (app can't reach internal admin APIs)
- Disable unnecessary URL schemas (file://, gopher://)

### Module 2 Knowledge Check

**Scenario-Based Questions**:

1. **You find this code in a PR. What's wrong?**
   ```csharp
   var query = $"SELECT * FROM Orders WHERE CustomerId = {customerId}";
   ```
   - A) Nothing wrong
   - B) SQL injection vulnerability ✓
   - C) Performance issue
   - D) Missing error handling

2. **A password field allows "password" as a password. What OWASP issue is this?**
   - A) Broken Access Control
   - B) Injection
   - C) Authentication Failures ✓
   - D) SSRF

3. **You're using a library from 2018. What should you do?**
   - A) Nothing - if it works, don't change it
   - B) Check for updates and known vulnerabilities ✓
   - C) Rewrite it from scratch
   - D) Ask the security team to review it

4. **User can view any invoice by changing the ID in the URL. What's the issue?**
   - A) Broken Access Control ✓
   - B) Cryptographic Failure
   - C) Injection
   - D) Misconfiguration

**Quick Quiz**: Match the vulnerability to the prevention:

| Vulnerability | Prevention |
|---------------|------------|
| SQL Injection | A) Parameterized queries ✓ |
| XSS | B) Output encoding ✓ |
| Broken Access Control | C) Authorization checks ✓ |
| Weak Crypto | D) Use bcrypt for passwords ✓ |

---

## Module 3: Secure Coding Practices (45 minutes)

### Learning Objectives
By the end of this module, you will:
- Apply input validation and sanitization
- Implement proper output encoding
- Use parameterized queries correctly
- Handle errors securely
- Apply defense in depth and least privilege

### 3.1 Input Validation and Sanitization

**The Golden Rule**: Never trust user input. **Ever.**

**Why?**
All input is potentially malicious until proven otherwise. Attackers control input, not you.

**Input Sources**:
- Form fields
- Query parameters
- Headers
- Cookies
- File uploads
- API requests
- External APIs

**Validation Strategy**:
1. **Allow-list** (preferred): Define what's allowed, reject everything else
2. **Block-list** (weak): Define what's blocked, allow everything else

**Example - Allow-List Validation**:
```csharp
// Validate email format
public bool IsValidEmail(string email)
{
    // Allow-list: specific pattern
    var emailRegex = new Regex(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    return emailRegex.IsMatch(email);
}

// Validate username (alphanumeric only)
public bool IsValidUsername(string username)
{
    return Regex.IsMatch(username, @"^[a-zA-Z0-9_]{3,20}$");
}
```

**Example - Block-List (Weak)**:
```javascript
// DON'T DO THIS - incomplete list
function sanitizeInput(input) {
    return input.replace('<script>', '')  // Attacker uses <sCrIpT> or <img onerror=>
                 .replace('DROP TABLE', '');  // Attacker uses dr/**/op ta/**/ble
}
```

**Input Validation Checklist**:
- [ ] Type: Is it the expected type (string, number, date)?
- [ ] Length: Within expected bounds (max 100 chars)?
- [ ] Format: Matches expected pattern (email, phone, UUID)?
- [ ] Range: Within acceptable values (1-100, positive number)?
- [ ] Character set: Only allowed characters (alphanumeric, no special chars)?

**Sanitization**:
After validation, remove or encode dangerous characters.

```javascript
// Sanitize for HTML display
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
```

**Framework Support**:
Use your framework's built-in validation:
- ASP.NET: `[Required]`, `[StringLength]`, `[RegularExpression]`, `[Range]`
- JavaScript: Joi, validator.js
- Python: Marshmallow, Cerberus

### 3.2 Output Encoding

**Why?**
Prevent Cross-Site Scripting (XSS) by encoding user input before displaying.

**Context Matters**:
Encoding depends on where you're putting data.

| Context | Encoding | Example |
|---------|----------|---------|
| HTML Body | HTML Entity Encoding | `&lt;script&gt;` |
| HTML Attribute | Attribute Encoding | `&quot;onclick=alert()&quot;` |
| JavaScript | JavaScript Encoding | `\x3Cscript\x3E` |
| URL Parameter | URL Encoding | `%3Cscript%3E` |
| CSS | CSS Encoding | `\3C script\3E` |

**Example - HTML Encoding**:
```javascript
// BAD - XSS vulnerability
const username = getUserInput();
document.getElementById('greeting').innerHTML = `<p>Hello ${username}</p>`;
// Input: <script>alert('XSS')</script>
// Result: Script executes!

// GOOD - HTML encoded
document.getElementById('greeting').textContent = `Hello ${username}`;
// textContent auto-encodes
// Result: <p>Hello &lt;script&gt;alert('XSS')&lt;/script&gt;</p>
```

**Example - React/Angular Auto-Escaping**:
```jsx
// React automatically escapes JSX expressions
const username = getUserInput();
return <div>Hello {username}</div>;  // Safe - auto-escaped

// Dangerous - bypasses escaping
return <div dangerouslySetInnerHTML={{__html: username}} />;  // DON'T DO THIS
```

**When to Use Raw HTML** (Rare):
If you must allow rich text (Markdown, HTML editor):
1. Use a sanitization library (DOMPurify, Bleach)
2. Allow-list safe tags only (`<p>`, `<b>`, `<i>`)
3. Remove all JavaScript (`<script>`, `onclick=`, `onerror=`)

```javascript
import DOMPurify from 'dompurify';

const userHtml = getUserInput();
const clean = DOMPurify.sanitize(userHtml, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'u', 'a'],
    ALLOWED_ATTR: ['href']
});
document.getElementById('content').innerHTML = clean;
```

### 3.3 Parameterized Queries

**The Rule**: ALWAYS use parameterized queries for SQL. No exceptions.

**Why?**
Parameterized queries separate code from data, preventing SQL injection.

**Bad - String Concatenation**:
```csharp
// NEVER DO THIS
var sql = "SELECT * FROM Users WHERE Email = '" + email + "' AND Password = '" + password + "'";
// Attacker input: email = "admin' OR '1'='1' --"
// Results in: SELECT * FROM Users WHERE Email = 'admin' OR '1'='1' --' AND Password = ''
// Returns all users! Authentication bypassed!
```

**Good - Parameterized Query**:
```csharp
var sql = "SELECT * FROM Users WHERE Email = @email AND Password = @password";
var command = new SqlCommand(sql, connection);
command.Parameters.AddWithValue("@email", email);
command.Parameters.AddWithValue("@password", password);
// Email and password treated as data, not code - injection impossible
```

**Best - ORM (Entity Framework, Prisma)**:
```csharp
// Entity Framework automatically parameterizes
var user = await dbContext.Users
    .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
// Generates parameterized SQL automatically
```

**Dynamic Queries**:
If you must build dynamic queries (table name, column name):
1. Use allow-list validation (don't trust user input)
2. Never concatenate table/column names from user input

```csharp
// BAD
var tableName = Request.Query["table"];  // User controls table name!
var sql = $"SELECT * FROM {tableName}";  // Could be: ; DROP TABLE Users; --

// BETTER
var allowedTables = new[] { "Orders", "Invoices", "Customers" };
var tableName = Request.Query["table"];
if (!allowedTables.Contains(tableName)) {
    return BadRequest("Invalid table");
}
var sql = $"SELECT * FROM {tableName}";  // Now safe (allow-listed)
```

### 3.4 Proper Error Handling

**Goals**:
1. Handle errors gracefully (don't crash)
2. Log details for debugging
3. **Don't expose sensitive info to users**

**Example - Information Disclosure**:
```python
# BAD - exposes internals
@app.errorhandler(Exception)
def handle_error(e):
    return str(e), 500
# Returns: "SQL Server login failed for user 'sa'"
# Exposes: database type, username, authentication mechanism
```

**Good - Generic Error**:
```python
@app.errorhandler(Exception)
def handle_error(e):
    # Log details server-side
    logger.error(f"Error: {str(e)}", exc_info=True)

    # Generic message to user
    return "An error occurred. Please contact support with reference ID: " + request_id, 500
# User sees: generic message + reference ID (for support)
# Logs contain: full error details (for debugging)
```

**Error Handling Best Practices**:
- Catch specific exceptions (not generic `catch all`)
- Log errors server-side with context
- Return generic errors to client
- Include correlation ID (for support)
- Don't expose stack traces, paths, SQL errors

**Example - ASP.NET Core**:
```csharp
app.UseExceptionHandler(appBuilder => {
    appBuilder.Run(async context => {
        var error = context.Features.Get<IExceptionHandlerFeature>();

        // Log details
        logger.LogError(error.Error, "Unhandled exception");

        // Return generic error
        context.Response.StatusCode = 500;
        await context.Response.WriteAsJsonAsync(new {
            error = "An error occurred",
            requestId = Activity.Current?.Id
        });
    });
});
```

### 3.5 Defense in Depth

**Concept**: Multiple layers of security. If one fails, others protect you.

**Security Layers**:
1. **Network**: Firewall, VPN
2. **Application**: Authentication, authorization, input validation
3. **Data**: Encryption, backups
4. **Monitoring**: Logging, alerting

**Example - Protecting Customer Data**:
```
Layer 1 (Network): Firewall blocks external database access
Layer 2 (Application): Authentication required to access API
Layer 3 (Authorization): User can only access their own data
Layer 4 (Validation): Input validated before database query
Layer 5 (Query): Parameterized query prevents SQL injection
Layer 6 (Database): Least-privilege account (can't drop tables)
Layer 7 (Encryption): Data encrypted at rest
Layer 8 (Monitoring): Access logged and monitored
```

If attacker bypasses Layer 1, they still hit Layers 2-8.

**In Your Code**:
Don't rely on a single security control:
- Validate input on client **and** server
- Check authentication **and** authorization
- Encrypt data **and** use secure connections
- Log successes **and** failures

### 3.6 Principle of Least Privilege

**Concept**: Grant minimum access necessary. No more.

**Applied to Code**:

**Database Accounts**:
```
❌ App uses 'sa' account (full admin rights)
   - Can drop tables, create users, access everything
   - If app compromised, attacker is admin

✅ App uses limited account
   - Can SELECT, INSERT, UPDATE, DELETE on specific tables only
   - Cannot DROP, ALTER, CREATE
   - If app compromised, damage limited
```

**File System Access**:
```csharp
// BAD - too much access
File.WriteAllText(@"C:\config\settings.json", data);  // Writing to system directory

// GOOD - limited access
var dataPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
File.WriteAllText(Path.Combine(dataPath, "settings.json"), data);
```

**API Permissions**:
```javascript
// User roles: 'viewer', 'editor', 'admin'

// Least privilege: specific permissions
router.get('/invoices', requireAuth, requireRole('viewer'), getInvoices);
router.post('/invoices', requireAuth, requireRole('editor'), createInvoice);
router.delete('/invoices/:id', requireAuth, requireRole('admin'), deleteInvoice);

// Not: everyone has admin access
```

**In Practice**:
- Use service accounts with minimal permissions
- Don't run services as root/administrator
- Limit API scopes (read-only unless write needed)
- Revoke access when no longer needed

### Module 3 Knowledge Check

**Code Review Exercise**:

```javascript
app.post('/api/search', (req, res) => {
    const query = req.body.query;
    const sql = `SELECT * FROM products WHERE name LIKE '%${query}%'`;
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(results);
        }
    });
});
```

**What's wrong with this code?** (Select all that apply)
- [ ] A) SQL injection vulnerability ✓
- [ ] B) Information disclosure in error handling ✓
- [ ] C) No authentication ✓
- [ ] D) No input validation ✓

**Fix the code**: How would you make this secure?

<details>
<summary>Click for fixed version</summary>

```javascript
app.post('/api/search',
    authenticateUser,  // Add authentication
    validateInput,     // Add validation middleware
    async (req, res) => {
        try {
            const query = req.body.query;

            // Input validation
            if (!query || query.length > 100) {
                return res.status(400).json({ error: 'Invalid search query' });
            }

            // Parameterized query
            const sql = 'SELECT * FROM products WHERE name LIKE ?';
            const results = await db.query(sql, [`%${query}%`]);

            res.json(results);
        } catch (err) {
            // Log error server-side
            logger.error('Search error', err);

            // Generic error to client
            res.status(500).json({
                error: 'Search failed',
                requestId: req.id
            });
        }
    }
);
```

**Fixes**:
1. Authentication added
2. Input validation (length check)
3. Parameterized query (prevents SQL injection)
4. Proper error handling (generic error, logging)
</details>

---

## Module 4: Authentication and Authorization (30 minutes)

### Learning Objectives
By the end of this module, you will:
- Implement secure password storage
- Manage sessions securely
- Use token-based authentication
- Implement role-based access control
- Secure APIs properly

### 4.1 Secure Password Storage

**The Rule**: NEVER store passwords in plain text. Use secure hashing.

**Why?**
When (not if) your database is compromised, hashed passwords protect users.

**Hashing vs. Encryption**:
- **Encryption**: Reversible (can decrypt)
- **Hashing**: One-way (can't reverse)

Use **hashing** for passwords (can't be decrypted, even by you).

**Bad Algorithms** (DON'T USE):
- Plain text (obviously)
- MD5 (fast, broken, can crack in seconds)
- SHA-1 (broken)
- SHA-256 without salt (vulnerable to rainbow tables)

**Good Algorithms**:
- **bcrypt** (recommended)
- **Argon2** (newer, more secure)
- **PBKDF2** (acceptable)

**Example - bcrypt**:
```csharp
using BCrypt.Net;

// Storing password
public void CreateUser(string username, string password)
{
    // bcrypt automatically salts and hashes
    var passwordHash = BCrypt.HashPassword(password);

    db.Users.Add(new User {
        Username = username,
        PasswordHash = passwordHash  // Store hash, not plain text
    });
}

// Verifying password
public bool VerifyPassword(string username, string password)
{
    var user = db.Users.FirstOrDefault(u => u.Username == username);
    if (user == null) return false;

    // bcrypt.Verify compares password to hash
    return BCrypt.Verify(password, user.PasswordHash);
}
```

**Salting**:
A salt is random data added to password before hashing.

```
Without salt:
password123 → hash → 482c811da5d5b4bc6d497ffa98491e38

With salt:
password123 + salt (random: a3f7b2) → hash → 9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c

Same password, different salt → different hash
Prevents rainbow table attacks
```

bcrypt/Argon2 handle salting automatically - you don't need to do it manually.

**Password Requirements** (Swedwise Policy):
- Minimum 12 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character
- Not a common password (check against leaked password lists)

### 4.2 Session Management

**What is a Session?**
Server remembers who you are across multiple requests.

**Secure Session Checklist**:
- [ ] Session ID is random and unpredictable (128-bit minimum)
- [ ] Session stored server-side (not client-side)
- [ ] Session cookies have `HttpOnly` flag (prevent JavaScript access)
- [ ] Session cookies have `Secure` flag (HTTPS only)
- [ ] Session cookies have `SameSite` flag (CSRF protection)
- [ ] Session expires after inactivity (15-30 minutes)
- [ ] Session expires after absolute timeout (8 hours)
- [ ] Session invalidated on logout
- [ ] New session ID after login (prevent session fixation)

**Example - Insecure Session**:
```javascript
// BAD
app.post('/login', (req, res) => {
    if (authenticate(req.body.username, req.body.password)) {
        res.cookie('sessionId', '12345');  // Predictable ID, no security flags
        res.send('Logged in');
    }
});
```

**Example - Secure Session**:
```javascript
// GOOD
app.post('/login', (req, res) => {
    if (authenticate(req.body.username, req.body.password)) {
        const sessionId = generateSecureRandomId();  // Cryptographically random

        // Store session server-side
        sessions[sessionId] = {
            userId: user.id,
            createdAt: Date.now(),
            expiresAt: Date.now() + (30 * 60 * 1000)  // 30 minutes
        };

        // Set secure cookie
        res.cookie('sessionId', sessionId, {
            httpOnly: true,   // Prevent JavaScript access
            secure: true,     // HTTPS only
            sameSite: 'strict', // CSRF protection
            maxAge: 30 * 60 * 1000  // 30 minutes
        });

        res.send('Logged in');
    }
});
```

**Framework Support**:
Use your framework's session management (already secure):
- ASP.NET Core: `HttpContext.Session`
- Express: `express-session`
- Django: `django.contrib.sessions`

### 4.3 Token-Based Authentication (JWT)

**What is JWT?**
JSON Web Token - self-contained token with user info and signature.

**Structure**:
```
Header.Payload.Signature
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Decoded:
```json
// Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}

// Signature (prevents tampering)
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```

**When to Use JWT**:
- Stateless APIs (no server-side session storage)
- Microservices (token passed between services)
- Mobile apps (token stored on device)

**Security Best Practices**:
- Use strong secret key (256-bit minimum)
- Set short expiration (`exp`) - 15 minutes for access token
- Use refresh tokens for long-lived access
- Validate signature on every request
- Store securely on client (not localStorage - use httpOnly cookie or secure storage)

**Example - Creating JWT**:
```csharp
using System.IdentityModel.Tokens.Jwt;

public string GenerateToken(User user)
{
    var tokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.ASCII.GetBytes(Configuration["JwtSecret"]);  // 256-bit secret

    var tokenDescriptor = new SecurityTokenDescriptor
    {
        Subject = new ClaimsIdentity(new[] {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        }),
        Expires = DateTime.UtcNow.AddMinutes(15),  // Short-lived
        SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature)
    };

    var token = tokenHandler.CreateToken(tokenDescriptor);
    return tokenHandler.WriteToken(token);
}
```

**Example - Validating JWT**:
```csharp
[Authorize]  // Framework validates JWT automatically
public IActionResult GetUserProfile()
{
    var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    var profile = db.Users.Find(userId);
    return Ok(profile);
}
```

### 4.4 OAuth and OpenID Connect

**What are they?**
- **OAuth 2.0**: Authorization framework (what can you access?)
- **OpenID Connect**: Authentication layer on top of OAuth (who are you?)

**When to Use**:
- "Sign in with Google/Microsoft" functionality
- Third-party API access (accessing customer's data)
- SaaS platform (customers authenticate via their identity provider)

**Flow** (Simplified):
```
1. User clicks "Sign in with Microsoft"
2. Redirect to Microsoft login page
3. User logs in with Microsoft credentials
4. Microsoft redirects back with authorization code
5. Exchange code for access token
6. Use token to access user info
```

**At Swedwise**:
We may use OpenID Connect for customer authentication in SaaS platform (enterprise customers use their own Azure AD).

**Don't Implement Yourself**:
OAuth/OIDC are complex. Use libraries:
- ASP.NET Core: `Microsoft.AspNetCore.Authentication.OpenIdConnect`
- Node.js: `passport`, `openid-client`
- Python: `authlib`, `python-social-auth`

### 4.5 Role-Based Access Control (RBAC)

**Concept**: Assign users to roles, grant permissions to roles.

**Example Roles** (Swedwise SaaS):
- **Viewer**: Read-only access
- **Editor**: Create and modify own content
- **Admin**: Full access (manage users, settings)
- **Super Admin**: Platform administration

**Example Authorization**:
```csharp
// Require specific role
[Authorize(Roles = "Admin")]
public IActionResult DeleteUser(int userId)
{
    // Only admins can delete users
}

// Require policy (more flexible)
[Authorize(Policy = "CanManageInvoices")]
public IActionResult CreateInvoice()
{
    // Policy checks: role=Editor OR role=Admin, AND tenant matches
}
```

**Fine-Grained Authorization**:
```csharp
public IActionResult UpdateInvoice(int invoiceId)
{
    var invoice = db.Invoices.Find(invoiceId);

    // Check ownership
    if (invoice.CreatedBy != CurrentUser.Id && !CurrentUser.IsAdmin) {
        return Forbid();  // User doesn't own this invoice and isn't admin
    }

    // Proceed with update
}
```

**Best Practices**:
- Check authorization on **every** request (don't trust client)
- Default deny (require explicit permission)
- Separate authentication and authorization
- Log authorization failures (detect attacks)

### 4.6 API Security

**API Authentication Methods**:
1. **API Keys**: Simple, but less secure (static credentials)
2. **OAuth 2.0**: Better (scoped, revocable tokens)
3. **JWT**: Good for microservices (stateless)

**API Security Checklist**:
- [ ] HTTPS only (reject HTTP)
- [ ] Authentication required (except public endpoints)
- [ ] Rate limiting (prevent abuse)
- [ ] Input validation (all parameters)
- [ ] Authorization per endpoint (check what user can do)
- [ ] CORS configured (don't use wildcard `*`)
- [ ] Error handling (generic errors to client)
- [ ] Logging (all requests with user, action, result)
- [ ] Versioning (allow breaking changes)

**Example - Secure API**:
```csharp
[ApiController]
[Route("api/v1/[controller]")]
[Authorize]  // Authentication required
public class InvoicesController : ControllerBase
{
    [HttpGet("{id}")]
    [Authorize(Policy = "CanViewInvoices")]  // Authorization
    [RateLimit(Limit = 100, Period = "1h")]  // Rate limiting
    public async Task<IActionResult> GetInvoice(int id)
    {
        // Input validation
        if (id <= 0)
            return BadRequest("Invalid invoice ID");

        var invoice = await db.Invoices
            .Where(i => i.TenantId == CurrentUser.TenantId)  // Multi-tenancy
            .FirstOrDefaultAsync(i => i.Id == id);

        if (invoice == null)
            return NotFound();

        // Log access
        logger.LogInformation("User {UserId} accessed invoice {InvoiceId}",
            CurrentUser.Id, id);

        return Ok(invoice);
    }
}
```

### Module 4 Knowledge Check

1. **How should passwords be stored?**
   - A) Plain text
   - B) Encrypted (AES)
   - C) Hashed with bcrypt ✓
   - D) Encoded (Base64)

2. **Session cookies should have which flags?**
   - A) HttpOnly, Secure, SameSite ✓
   - B) Public, Insecure
   - C) JavaScript-accessible
   - D) No flags needed

3. **JWT access tokens should expire in:**
   - A) Never (permanent)
   - B) 1 year
   - C) 15-60 minutes ✓
   - D) 1 second

4. **Where should you check authorization?**
   - A) Client side only
   - B) Server side only ✓
   - C) Both client and server ✓
   - D) Database triggers

**Scenario**: User can access endpoint `/api/users/123/orders`. What security checks should you perform?

<details>
<summary>Click for answer</summary>

**Required Checks**:
1. **Authentication**: Is user logged in? (valid session/token)
2. **Authorization**: Can this user access user 123's orders?
   - Is current user ID = 123? (accessing own orders)
   - OR is current user an admin?
3. **Input Validation**: Is user ID valid? (positive integer)
4. **Tenant Isolation**: Does user 123 belong to same tenant as current user?
5. **Logging**: Log the access attempt (success or failure)

```csharp
[Authorize]  // Authentication
public IActionResult GetUserOrders(int userId)
{
    // Input validation
    if (userId <= 0)
        return BadRequest();

    // Authorization
    if (CurrentUser.Id != userId && !CurrentUser.IsAdmin)
        return Forbid();

    // Tenant isolation
    var user = db.Users.Find(userId);
    if (user.TenantId != CurrentUser.TenantId)
        return Forbid();

    // Fetch data
    var orders = db.Orders.Where(o => o.UserId == userId).ToList();

    // Log
    logger.LogInformation("User {CurrentUserId} accessed orders for user {UserId}",
        CurrentUser.Id, userId);

    return Ok(orders);
}
```
</details>

---

## Module 5: Cryptography Basics (30 minutes)

### Learning Objectives
By the end of this module, you will:
- Understand when to use encryption
- Differentiate between symmetric and asymmetric encryption
- Use hashing correctly
- Implement TLS/HTTPS
- Manage cryptographic keys
- Avoid common cryptographic mistakes

### 5.1 When to Use Encryption

**Use Encryption For**:
- **Data at Rest**: Customer data in database, files, backups
- **Data in Transit**: API calls, database connections, file transfers
- **Credentials**: Passwords (hashing), API keys, tokens

**Don't Need Encryption For**:
- Public data (company logo, public documents)
- Data already protected (inside encrypted database)
- Data that doesn't leave secure environment

**Swedwise Requirements**:
- All customer data: Encrypted at rest (database encryption)
- All communications: TLS 1.2+ (HTTPS, database connections)
- All credentials: Hashed (bcrypt) or encrypted (Key Vault)

### 5.2 Symmetric vs. Asymmetric Encryption

**Symmetric Encryption** (Same Key):
- Same key encrypts and decrypts
- Fast (good for large data)
- Key distribution problem (how to share key securely?)

**Algorithm**: AES-256 (Advanced Encryption Standard)

**Example**:
```
Key: a3f7b2c8d1e9...
Plain text: "Customer data"
Encrypted: 8f6e5d4c3b2a... (using key)
Decrypted: "Customer data" (using same key)
```

**Use Cases**:
- Database encryption
- File encryption
- Disk encryption

**Asymmetric Encryption** (Key Pair):
- Public key encrypts, private key decrypts
- Slow (good for small data, like keys)
- No key distribution problem (public key can be shared)

**Algorithm**: RSA-2048, RSA-4096

**Example**:
```
Public Key: (shared openly)
Private Key: (kept secret)

Encrypt with public key → Only private key can decrypt
Sign with private key → Public key verifies signature
```

**Use Cases**:
- TLS/HTTPS (encrypting session key)
- Digital signatures
- Email encryption (PGP)

**In Practice**:
TLS uses **both**:
1. Asymmetric to exchange session key (secure)
2. Symmetric to encrypt data (fast)

### 5.3 Hashing Algorithms

**What is Hashing?**
One-way function: data → fixed-size hash. Can't reverse.

**Use Cases**:
- **Passwords**: Store hash, not plain text
- **Integrity**: Verify file hasn't changed (hash before = hash after?)
- **Signatures**: Digitally sign documents
- **Caching**: Generate cache keys

**Common Algorithms**:
| Algorithm | Output Size | Use Case | Status |
|-----------|-------------|----------|--------|
| MD5 | 128-bit | ❌ DON'T USE | Broken |
| SHA-1 | 160-bit | ❌ DON'T USE | Broken |
| SHA-256 | 256-bit | ✅ Integrity checks | Secure |
| bcrypt | Variable | ✅ Passwords | Secure |
| Argon2 | Variable | ✅ Passwords | Secure |

**Password Hashing** (bcrypt, Argon2):
- Designed to be slow (prevent brute force)
- Built-in salting
- Configurable work factor (increase over time)

**Integrity Hashing** (SHA-256):
- Fast
- Deterministic (same input → same hash)
- Used for file integrity, digital signatures

**Example - File Integrity**:
```csharp
using System.Security.Cryptography;

public string ComputeFileHash(string filePath)
{
    using var sha256 = SHA256.Create();
    using var stream = File.OpenRead(filePath);
    var hashBytes = sha256.ComputeHash(stream);
    return Convert.ToHexString(hashBytes);
}

// Verify file hasn't changed
var originalHash = "a3f7b2c8...";
var currentHash = ComputeFileHash("document.pdf");
if (originalHash != currentHash) {
    throw new Exception("File has been tampered with!");
}
```

### 5.4 TLS/HTTPS

**What is TLS?**
Transport Layer Security - encrypts data in transit.

**Why HTTPS?**
- Encrypts traffic (prevents eavesdropping)
- Verifies server identity (prevents man-in-the-middle)
- Ensures data integrity (prevents tampering)

**At Swedwise**: All web applications and APIs **must** use HTTPS. HTTP is forbidden for production.

**TLS Versions**:
| Version | Status | Notes |
|---------|--------|-------|
| SSL 2.0 | ❌ Disabled | Broken |
| SSL 3.0 | ❌ Disabled | Broken (POODLE attack) |
| TLS 1.0 | ❌ Disabled | Deprecated |
| TLS 1.1 | ❌ Disabled | Deprecated |
| TLS 1.2 | ✅ Minimum | Required |
| TLS 1.3 | ✅ Preferred | Recommended |

**Enforcing HTTPS** (ASP.NET Core):
```csharp
// Startup.cs
public void Configure(IApplicationBuilder app)
{
    // Redirect HTTP to HTTPS
    app.UseHttpsRedirection();

    // Enable HSTS (force HTTPS for 1 year)
    app.UseHsts();

    // Rest of pipeline...
}

// appsettings.json
{
  "Kestrel": {
    "EndpointDefaults": {
      "Protocols": "Http2"  // HTTP/2 (requires TLS 1.2+)
    }
  }
}
```

**Security Headers**:
```csharp
// Add security headers
app.Use(async (context, next) => {
    context.Response.Headers.Add("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
    context.Response.Headers.Add("X-Frame-Options", "DENY");
    context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");
    await next();
});
```

**Database Connections**:
Also use TLS:
```csharp
// SQL Server connection string
"Server=db.example.com;Database=mydb;User Id=app;Password=...;Encrypt=True;TrustServerCertificate=False"
```

### 5.5 Key Management

**The Problem**: Encryption is only as secure as the key.

**Bad Key Management**:
```csharp
// NEVER DO THIS
var encryptionKey = "my-super-secret-key-123";  // Hard-coded
var encrypted = Encrypt(data, encryptionKey);
```

**Good Key Management** (Azure Key Vault):
```csharp
// Store key in Azure Key Vault
var client = new SecretClient(new Uri(vaultUri), new DefaultAzureCredential());
var secret = await client.GetSecretAsync("EncryptionKey");
var encryptionKey = secret.Value.Value;

var encrypted = Encrypt(data, encryptionKey);
```

**Key Management Best Practices**:
- Store keys in secure vault (Azure Key Vault, AWS KMS, HashiCorp Vault)
- Rotate keys regularly (annually or per policy)
- Separate keys by environment (dev, staging, production)
- Use different keys for different purposes
- Limit access (least privilege)
- Log key access (audit trail)
- Have key recovery plan (escrow for disaster recovery)

**Key Rotation**:
```csharp
// Support multiple keys for rotation
var keys = new[] {
    GetKey("EncryptionKey-v2"),  // Current key
    GetKey("EncryptionKey-v1")   // Previous key (for decrypting old data)
};

// Encrypt with current key
var encrypted = Encrypt(data, keys[0]);

// Decrypt with appropriate key (try current, then previous)
var decrypted = TryDecrypt(encrypted, keys);
```

### 5.6 Common Cryptographic Mistakes

**Mistake 1: Using Weak Algorithms**
```csharp
// BAD
var md5 = MD5.Create();  // Broken
var des = DES.Create();  // Weak (56-bit key)

// GOOD
var sha256 = SHA256.Create();
var aes = Aes.Create();  // 256-bit key
```

**Mistake 2: Predictable IVs** (Initialization Vectors)
```csharp
// BAD
var iv = new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };  // All zeros!

// GOOD
var iv = new byte[16];
RandomNumberGenerator.Fill(iv);  // Cryptographically random
```

**Mistake 3: ECB Mode** (Electronic Codebook)
```csharp
// BAD
aes.Mode = CipherMode.ECB;  // Same plaintext → same ciphertext (pattern leaks)

// GOOD
aes.Mode = CipherMode.CBC;  // Or GCM (authenticated encryption)
```

**Mistake 4: Rolling Your Own Crypto**
```csharp
// BAD - Custom encryption algorithm
public string MyCustomEncrypt(string data, string key) {
    // Complex custom logic...
    // Probably has vulnerabilities
}

// GOOD - Use proven algorithms
var aes = Aes.Create();
var encryptor = aes.CreateEncryptor();
// Standard, well-tested, secure
```

**Mistake 5: Ignoring Authenticated Encryption**
```csharp
// BAD - Encryption without authentication
var encrypted = Encrypt(data, key);
// Attacker can modify encrypted data (bit flipping)

// GOOD - Authenticated encryption (GCM mode)
var aes = new AesGcm(key);
aes.Encrypt(nonce, data, ciphertext, tag);
// Tag ensures data hasn't been tampered with
```

**The Golden Rule**: Don't invent cryptography. Use standard libraries.

### Module 5 Knowledge Check

1. **When should you use encryption?**
   - A) All data, always
   - B) Sensitive data at rest and in transit ✓
   - C) Only passwords
   - D) Never (it's too slow)

2. **Which algorithm for password hashing?**
   - A) MD5
   - B) SHA-256
   - C) bcrypt ✓
   - D) AES-256

3. **Minimum TLS version for Swedwise applications?**
   - A) SSL 3.0
   - B) TLS 1.0
   - C) TLS 1.2 ✓
   - D) HTTP (no TLS needed)

4. **Where should encryption keys be stored?**
   - A) Hard-coded in source code
   - B) Configuration file (Git)
   - C) Azure Key Vault ✓
   - D) Database

**Scenario**: You need to encrypt customer credit card numbers in the database. What do you use?

<details>
<summary>Click for answer</summary>

**Answer**: AES-256 (symmetric encryption)

**Implementation**:
```csharp
// Get encryption key from Key Vault
var client = new SecretClient(vaultUri, credential);
var secret = await client.GetSecretAsync("CreditCardEncryptionKey");
var key = Convert.FromBase64String(secret.Value.Value);

// Encrypt credit card number
using var aes = Aes.Create();
aes.Key = key;
aes.Mode = CipherMode.GCM;  // Authenticated encryption
aes.GenerateIV();

using var encryptor = aes.CreateEncryptor();
var encrypted = encryptor.TransformFinalBlock(
    Encoding.UTF8.GetBytes(creditCardNumber), 0, creditCardNumber.Length);

// Store: IV + encrypted data (both needed for decryption)
var stored = Convert.ToBase64String(aes.IV) + ":" + Convert.ToBase64String(encrypted);
```

**Why**:
- AES-256: Industry standard, fast, secure
- GCM mode: Authenticated (prevents tampering)
- Key in Key Vault: Secure storage, access control, audit logging
- Store IV: Needed for decryption (not secret, but must be unique)
</details>

---

## Module 6: Secure Development Lifecycle (30 minutes)

### Learning Objectives
By the end of this module, you will:
- Integrate security into development lifecycle
- Perform basic threat modeling
- Conduct security code reviews
- Use security testing tools (SAST, DAST)
- Implement dependency scanning
- Manage secrets properly

### 6.1 Security in the SDLC

**Traditional SDLC** (Waterfall):
```
Requirements → Design → Development → Testing → [Security Testing] → Deployment
                                                  ↑ Too late!
```

**Secure SDLC** (Agile with Security):
```
Requirements + [Security Requirements]
    ↓
Design + [Threat Modeling]
    ↓
Development + [Secure Coding]
    ↓
Testing + [Security Testing (SAST, DAST)]
    ↓
Code Review + [Security Review]
    ↓
Deployment + [Security Configuration]
    ↓
Operations + [Monitoring, Incident Response]
```

**Security Activities by Phase**:

| Phase | Security Activities | Deliverables |
|-------|---------------------|--------------|
| **Requirements** | Identify security requirements, compliance needs | Security requirements document |
| **Design** | Threat modeling, security architecture | Threat model, data flow diagrams |
| **Development** | Secure coding, code review, SAST | Secure code, review comments |
| **Testing** | Security testing, penetration testing, DAST | Test results, vulnerability reports |
| **Deployment** | Security configuration, hardening | Deployment checklist, config review |
| **Operations** | Monitoring, incident response, patching | Logs, incident reports, patch status |

### 6.2 Security Requirements

**What are Security Requirements?**
Non-functional requirements that define how system should be protected.

**Example Requirements** (Swedwise SaaS):
1. **Authentication**:
   - All users must authenticate before accessing the system
   - Passwords must meet complexity requirements (12+ chars, mixed case, numbers, symbols)
   - Multi-factor authentication required for admin accounts

2. **Authorization**:
   - Users can only access data belonging to their tenant
   - Role-based access control (viewer, editor, admin)
   - All API endpoints enforce authorization

3. **Data Protection**:
   - Customer data encrypted at rest (AES-256)
   - All communications use TLS 1.2+
   - Sensitive data not logged (passwords, credit cards)

4. **Session Management**:
   - Sessions expire after 30 minutes of inactivity
   - Session cookies use HttpOnly, Secure, SameSite flags

5. **Input Validation**:
   - All user input validated server-side
   - Parameterized queries for database access

6. **Logging**:
   - Log authentication attempts (success/failure)
   - Log authorization failures
   - Log admin actions
   - Logs retained for 12 months

**How to Gather**:
- Review compliance requirements (GDPR, ISO 27001)
- Analyze risks (what could go wrong?)
- Review customer contracts (security SLAs)
- Consult CISO and security team

### 6.3 Threat Modeling

**What is Threat Modeling?**
Structured approach to identify security threats before building.

**When to Do It**:
- New features (authentication, payments, data export)
- Architecture changes (new external API, cloud migration)
- High-risk functionality (admin panel, user data access)

**STRIDE Method**:

| Threat | Description | Example | Mitigation |
|--------|-------------|---------|------------|
| **S**poofing | Pretending to be someone else | Forged authentication token | Strong authentication, MFA |
| **T**ampering | Modifying data or code | Changing price in request | Input validation, integrity checks |
| **R**epudiation | Denying an action | "I didn't delete that" | Audit logging, digital signatures |
| **I**nformation Disclosure | Exposing confidential data | SQL error with customer data | Generic errors, encryption |
| **D**enial of Service | Making system unavailable | DDoS attack, resource exhaustion | Rate limiting, throttling, caching |
| **E**levation of Privilege | Gaining unauthorized access | Admin access via URL manipulation | Authorization checks, least privilege |

**Simple Threat Modeling Process**:

**Step 1: Draw Data Flow Diagram**
```
[User] → [Web App] → [API] → [Database]
           ↓
       [File Storage]
```

**Step 2: Identify Trust Boundaries**
```
Internet ←→ Web App ←→ Internal Network ←→ Database
(Untrusted) (Trusted)  (Trusted)          (Trusted)
```

**Step 3: Apply STRIDE to Each Component**

Example: Web App
- **Spoofing**: Can attacker fake being logged-in user? → Require authentication
- **Tampering**: Can attacker modify request data? → Validate input server-side
- **Repudiation**: Can user deny actions? → Log all actions with user ID
- **Info Disclosure**: Can attacker see error details? → Generic error messages
- **DoS**: Can attacker crash app with bad input? → Input validation, rate limiting
- **Elevation**: Can user access admin functions? → Authorization checks

**Step 4: Document Threats and Mitigations**
| Threat | Risk | Mitigation | Status |
|--------|------|------------|--------|
| User spoofing | High | JWT authentication | Implemented |
| SQL injection | High | Parameterized queries | Implemented |
| DDoS | Medium | Rate limiting (100 req/min) | Planned |

**Step 5: Review with Team and CISO**

### 6.4 Security Code Reviews

**What to Review**:
All code changes, with focus on:
- Authentication and authorization logic
- Input validation and sanitization
- Database queries (SQL injection)
- Cryptography usage
- Error handling
- Logging
- External API calls
- File uploads

**Security Code Review Checklist**:

**Authentication & Authorization**:
- [ ] Authentication required for sensitive endpoints
- [ ] Authorization checked on server side
- [ ] Passwords hashed with bcrypt/Argon2
- [ ] Session management secure (HttpOnly, Secure, SameSite)

**Input Validation**:
- [ ] All user input validated
- [ ] Validation on server side (not just client)
- [ ] Allow-list validation where possible
- [ ] Input length limits enforced

**SQL Injection Prevention**:
- [ ] Parameterized queries or ORM used
- [ ] No string concatenation in SQL
- [ ] Database account has least privilege

**XSS Prevention**:
- [ ] Output encoding when displaying user content
- [ ] Framework auto-escaping enabled
- [ ] Sanitization for rich text (if allowed)

**Cryptography**:
- [ ] Strong algorithms (AES-256, bcrypt, TLS 1.2+)
- [ ] Keys stored in Key Vault (not hard-coded)
- [ ] Random IVs/nonces generated

**Error Handling**:
- [ ] Errors logged server-side
- [ ] Generic errors to client
- [ ] No stack traces, paths, or SQL errors exposed

**Secrets Management**:
- [ ] No hard-coded credentials
- [ ] Secrets in Key Vault or environment variables
- [ ] No secrets in Git repository

**Example Review Comments**:
```csharp
// 🚨 Security Issue: SQL Injection
var query = $"SELECT * FROM Users WHERE Id = {userId}";
// ❌ CHANGE REQUESTED: Use parameterized query
// Suggested fix:
var query = "SELECT * FROM Users WHERE Id = @userId";
command.Parameters.AddWithValue("@userId", userId);

// 🚨 Security Issue: Missing Authorization
public IActionResult GetInvoice(int id)
{
    return Ok(db.Invoices.Find(id));
}
// ❌ CHANGE REQUESTED: Add authorization check
// User should only access their own invoices
if (invoice.CustomerId != CurrentUser.Id && !CurrentUser.IsAdmin)
    return Forbid();

// ✅ APPROVED: Secure implementation
[Authorize]
public IActionResult UpdateProfile(ProfileDto profile)
{
    if (!ModelState.IsValid)  // Input validation
        return BadRequest(ModelState);

    // Authorization: user can only update own profile
    if (profile.UserId != CurrentUser.Id)
        return Forbid();

    // ... update logic
}
```

### 6.5 Static Application Security Testing (SAST)

**What is SAST?**
Automated tools that analyze source code for vulnerabilities.

**Benefits**:
- Fast (scans code in seconds)
- Finds common issues (SQL injection, XSS, hard-coded secrets)
- Runs in CI/CD pipeline (every commit)
- Cheap (no manual effort)

**Limitations**:
- False positives (reports issues that aren't real)
- Misses logic flaws (only finds known patterns)
- No runtime context (can't test actual behavior)

**Tools for Swedwise**:

| Technology | Tools | Notes |
|------------|-------|-------|
| .NET/C# | SonarQube, Roslyn Analyzers, GitHub CodeQL | Integrated with Visual Studio |
| JavaScript/TypeScript | ESLint (security plugins), SonarQube | `npm install eslint-plugin-security` |
| Python | Bandit, SonarQube | `pip install bandit` |
| Multi-language | GitHub Advanced Security, Snyk Code | Cloud-based, auto-enabled |

**Integration** (GitHub Actions):
```yaml
name: Security Scan

on: [push, pull_request]

jobs:
  sast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run CodeQL
        uses: github/codeql-action/analyze@v2
        with:
          languages: csharp

      - name: Run npm audit
        run: npm audit --audit-level=high

      - name: Upload results
        uses: github/codeql-action/upload-sarif@v2
```

**Handling Results**:
1. **Critical/High**: Fix immediately (block PR)
2. **Medium**: Fix within 1 week
3. **Low**: Fix when convenient
4. **False Positive**: Mark as suppressed (with justification)

### 6.6 Dynamic Application Security Testing (DAST)

**What is DAST?**
Automated tools that test **running** application (black-box testing).

**Benefits**:
- Tests actual runtime behavior
- Finds configuration issues
- No false positives (if it finds it, it's real)

**Limitations**:
- Slower (tests actual requests)
- Requires running environment
- May miss code that isn't executed

**Tools**:
- OWASP ZAP (free, open source)
- Burp Suite (commercial)
- Acunetix (commercial)

**When to Run**:
- Before production deployment (staging environment)
- After major changes
- Monthly/quarterly automated scans

**Example** (OWASP ZAP in CI/CD):
```yaml
- name: DAST Scan
  run: |
    docker run -t owasp/zap2docker-stable zap-baseline.py \
      -t https://staging.swedwise.com \
      -r zap-report.html

- name: Upload Report
  uses: actions/upload-artifact@v3
  with:
    name: zap-report
    path: zap-report.html
```

### 6.7 Dependency Scanning

**Why?**
70% of applications contain vulnerable open-source components.

**Tools**:
- **GitHub Dependabot**: Auto-creates PRs for dependency updates
- **npm audit**: Built into npm (`npm audit`)
- **dotnet list package --vulnerable**: Built into .NET
- **Snyk**: Commercial, comprehensive
- **OWASP Dependency-Check**: Free, comprehensive

**Process**:
1. Enable Dependabot in all repositories
2. Review security PRs weekly
3. Prioritize by severity (critical first)
4. Test before merging
5. Track exceptions (if can't update, document why)

**Example** (GitHub Dependabot config):
```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "nuget"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

**Handling Vulnerabilities**:
```bash
# Check for vulnerabilities (npm)
npm audit

# Example output:
# lodash  <4.17.21  Prototype Pollution  High
#   fix available via `npm audit fix`

# Fix automatically
npm audit fix

# If breaking changes:
npm audit fix --force  # Use with caution

# Check what changed:
git diff package.json package-lock.json
```

### 6.8 Secrets Management

**The Problem**: Developers accidentally commit secrets to Git.

**Solutions**:

**1. Use Environment Variables** (Development):
```csharp
// Don't hard-code
var apiKey = "sk_live_abc123";  // ❌

// Use environment variable
var apiKey = Environment.GetEnvironmentVariable("API_KEY");  // ✅

// Or configuration (with User Secrets in dev)
var apiKey = Configuration["ApiKey"];  // ✅
```

**2. Use Azure Key Vault** (Production):
```csharp
var client = new SecretClient(new Uri(vaultUri), new DefaultAzureCredential());
var secret = await client.GetSecretAsync("DatabasePassword");
var password = secret.Value.Value;
```

**3. Use .gitignore**:
```gitignore
# Secrets
appsettings.Production.json
*.secrets.json
.env
.env.local

# Credentials
*.pfx
*.key
*.pem

# IDE
.vs/
.vscode/
```

**4. Use Pre-Commit Hooks** (git-secrets):
```bash
# Install git-secrets
brew install git-secrets  # macOS
# or: apt-get install git-secrets  # Linux

# Set up in repository
git secrets --install
git secrets --register-aws  # Detect AWS keys
git secrets --add 'api[_-]?key'  # Custom patterns

# Now commits with secrets will be blocked
git commit -m "Add feature"
# Error: Commit rejected - contains potential secret
```

**5. Enable Secret Scanning** (GitHub):
- Settings → Security → Secret scanning
- Auto-detects committed secrets
- Alerts you + revokes tokens (if supported)

**If You Commit a Secret**:
1. **Rotate immediately** (change password, regenerate API key)
2. **Remove from Git history** (BFG Repo-Cleaner, git filter-branch)
3. **Notify CISO**
4. **Review logs** (was it accessed?)

```bash
# Remove secret from Git history (BFG)
java -jar bfg.jar --replace-text passwords.txt  # File with secrets to remove
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

### Module 6 Knowledge Check

1. **When should threat modeling be performed?**
   - A) Only after security incident
   - B) Before writing code for new features ✓
   - C) Never (too time-consuming)
   - D) Only for external audits

2. **What does SAST scan?**
   - A) Running application
   - B) Source code ✓
   - C) Network traffic
   - D) User behavior

3. **How often should dependencies be updated?**
   - A) Never (if it works, don't change)
   - B) Yearly
   - C) Monthly, or immediately for critical security updates ✓
   - D) Every hour

4. **Where should production secrets be stored?**
   - A) Hard-coded in source code
   - B) Git repository (private)
   - C) Azure Key Vault ✓
   - D) Slack channel

**Scenario**: You're adding a file upload feature. What security activities should you perform?

<details>
<summary>Click for answer</summary>

**Security Activities**:

**1. Requirements**:
- What file types are allowed?
- Maximum file size?
- Where are files stored (Azure Blob, local disk)?
- Who can upload? Who can access?
- Virus scanning required?

**2. Threat Modeling** (STRIDE):
- **Spoofing**: Require authentication
- **Tampering**: Validate file type, scan for malware
- **Repudiation**: Log all uploads (user, filename, timestamp)
- **Information Disclosure**: Don't serve uploaded files directly (prevent XSS via SVG)
- **DoS**: Limit file size (10MB?), rate limit uploads
- **Elevation**: Check authorization (only owner can access file)

**3. Secure Implementation**:
```csharp
[Authorize]
[HttpPost]
[RequestSizeLimit(10 * 1024 * 1024)]  // 10MB limit
public async Task<IActionResult> UploadFile(IFormFile file)
{
    // Input validation
    var allowedTypes = new[] { ".pdf", ".docx", ".jpg", ".png" };
    var extension = Path.GetExtension(file.FileName).ToLowerInvariant();

    if (!allowedTypes.Contains(extension))
        return BadRequest("File type not allowed");

    if (file.Length > 10 * 1024 * 1024)
        return BadRequest("File too large");

    // Validate file content (not just extension)
    if (!IsValidFileContent(file, extension))
        return BadRequest("Invalid file content");

    // Generate safe filename (don't trust user-provided name)
    var safeFilename = $"{Guid.NewGuid()}{extension}";

    // Scan for malware (if available)
    await ScanForMalware(file);

    // Upload to secure storage (Azure Blob)
    await blobClient.UploadAsync(safeFilename, file.OpenReadStream());

    // Log upload
    logger.LogInformation("User {UserId} uploaded file {Filename}",
        CurrentUser.Id, safeFilename);

    return Ok(new { filename = safeFilename });
}
```

**4. Security Testing**:
- Try uploading: .exe, .php, .svg, huge files, malformed files
- Try accessing other users' files
- Try path traversal: `../../etc/passwd`
- SAST scan for file handling vulnerabilities
- DAST scan upload endpoint

**5. Code Review**:
- Review file validation logic
- Check authorization on download endpoint
- Verify files stored securely
- Ensure logging includes all relevant info
</details>

---

## Module 7: Practical Exercises

### Exercise 1: Find the Vulnerabilities

**Code Snippet**:
```csharp
public class UserController : Controller
{
    private readonly IConfiguration _config;

    public UserController(IConfiguration config)
    {
        _config = config;
    }

    [HttpPost]
    public IActionResult Login(string username, string password)
    {
        var connString = _config["ConnectionString"];
        using var connection = new SqlConnection(connString);
        connection.Open();

        var sql = $"SELECT * FROM Users WHERE Username = '{username}' AND Password = '{password}'";
        var command = new SqlCommand(sql, connection);
        var reader = command.ExecuteReader();

        if (reader.Read())
        {
            Session["UserId"] = reader["Id"].ToString();
            Session["IsAdmin"] = reader["IsAdmin"].ToString();
            return Redirect($"/home?sessionId={Session.SessionID}");
        }

        return Content("Invalid username or password: " + username);
    }

    [HttpGet]
    public IActionResult GetUser(int id)
    {
        if (Session["UserId"] == null)
            return Redirect("/login");

        var user = db.Users.Find(id);
        return Json(user);
    }
}
```

**Questions**:
1. List all security vulnerabilities you can find
2. Rate each vulnerability (Critical, High, Medium, Low)
3. Provide fixes for each vulnerability

<details>
<summary>Click to reveal vulnerabilities and fixes</summary>

**Vulnerabilities**:

1. **SQL Injection** (Critical)
   - Line: `var sql = $"SELECT * FROM Users WHERE Username = '{username}' AND Password = '{password}'"`
   - Attack: `username = "admin' OR '1'='1' --"`
   - Fix: Use parameterized queries

2. **Plain-Text Password** (Critical)
   - Line: `Password = '{password}'`
   - Issue: Passwords stored in plain text
   - Fix: Hash passwords with bcrypt

3. **Session Fixation** (High)
   - Line: `Session["UserId"] = reader["Id"].ToString()`
   - Issue: Session ID not regenerated after login
   - Fix: Regenerate session ID on login

4. **Session ID in URL** (High)
   - Line: `Redirect($"/home?sessionId={Session.SessionID}")`
   - Issue: Session ID exposed in URL (logged, shared)
   - Fix: Use cookies only

5. **Information Disclosure** (Medium)
   - Line: `return Content("Invalid username or password: " + username);`
   - Issue: Reveals attempted username
   - Fix: Generic error "Invalid credentials"

6. **Broken Access Control** (Critical)
   - Line: `var user = db.Users.Find(id);` (no authorization check)
   - Attack: User can access any user's data by changing ID
   - Fix: Check if user has permission to view this user

7. **Client-Controlled Authorization** (Critical)
   - Line: `Session["IsAdmin"] = reader["IsAdmin"].ToString();`
   - Issue: Admin status stored in session (client-controlled)
   - Fix: Check admin status server-side on each request

8. **Weak Session Check** (Medium)
   - Line: `if (Session["UserId"] == null)`
   - Issue: Only checks if session exists, not if valid
   - Fix: Use framework authentication (validates signature, expiration)

**Fixed Version**:
```csharp
public class UserController : Controller
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public UserController(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Login(LoginDto model)
    {
        // Input validation
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        // Find user by username
        var user = await _userManager.FindByNameAsync(model.Username);
        if (user == null)
        {
            logger.LogWarning("Failed login attempt for username: {Username}", model.Username);
            return Unauthorized("Invalid credentials");  // Generic error
        }

        // Check password (hashed with bcrypt)
        var result = await _signInManager.PasswordSignInAsync(
            user, model.Password, isPersistent: false, lockoutOnFailure: true);

        if (result.Succeeded)
        {
            logger.LogInformation("User {UserId} logged in", user.Id);
            return Redirect("/home");  // No session ID in URL
        }

        logger.LogWarning("Failed login attempt for user: {UserId}", user.Id);
        return Unauthorized("Invalid credentials");
    }

    [HttpGet]
    [Authorize]  // Framework authentication
    public async Task<IActionResult> GetUser(int id)
    {
        // Authorization: user can only view own profile or is admin
        var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var isAdmin = User.IsInRole("Admin");

        if (currentUserId != id.ToString() && !isAdmin)
        {
            logger.LogWarning("User {UserId} attempted unauthorized access to user {TargetId}",
                currentUserId, id);
            return Forbid();
        }

        var user = await _userManager.FindByIdAsync(id.ToString());
        if (user == null)
            return NotFound();

        return Json(new { user.Id, user.UserName, user.Email });  // Don't expose password hash
    }
}
```
</details>

### Exercise 2: Threat Modeling

**Scenario**: You're building a document generation API for Swedwise Communications SaaS.

**Functionality**:
- Customer uploads Word template
- Customer provides JSON data
- API merges data into template
- API returns generated PDF

**Task**: Perform STRIDE threat modeling.

<details>
<summary>Click to reveal threat model</summary>

**Data Flow Diagram**:
```
[Customer] → [API] → [Storage] → [Template Engine] → [PDF Generator] → [Customer]
                ↓
           [Database]
```

**STRIDE Analysis**:

**Spoofing**:
- **Threat**: Attacker pretends to be legitimate customer
- **Mitigation**:
  - OAuth 2.0 authentication
  - API keys with signature verification
  - Rate limiting per customer

**Tampering**:
- **Threat**: Attacker modifies template to include malicious code
- **Mitigation**:
  - Validate template format (Word document only)
  - Scan for macros (reject if present)
  - Sanitize JSON data (prevent injection)
  - Run template engine in sandboxed environment

**Repudiation**:
- **Threat**: Customer denies generating document
- **Mitigation**:
  - Log all API calls (customer ID, timestamp, template, result)
  - Retain logs for 12 months
  - Digital signature on generated PDF (proves who created it)

**Information Disclosure**:
- **Threat**:
  - Customer A accesses Customer B's templates
  - Error messages expose internal paths
- **Mitigation**:
  - Tenant isolation (filter by customer ID)
  - Generic error messages
  - Don't include customer data in logs

**Denial of Service**:
- **Threat**:
  - Huge template crashes system
  - Infinite loop in template logic
  - Too many requests
- **Mitigation**:
  - Limit template size (10MB max)
  - Timeout template processing (30 seconds max)
  - Rate limiting (100 requests/hour per customer)
  - Resource limits (CPU, memory)

**Elevation of Privilege**:
- **Threat**:
  - Template engine accesses file system
  - Customer accesses other customers' data
- **Mitigation**:
  - Run template engine with least privilege (no file system access)
  - Authorization check on every request (tenant ID matches)
  - Sandbox template execution

**Summary - Mitigations**:
| Control | Implementation |
|---------|----------------|
| Authentication | OAuth 2.0 + API keys |
| Authorization | Tenant ID check on every request |
| Input Validation | Template format, size, content validation |
| Sandboxing | Template engine in isolated environment |
| Rate Limiting | 100 req/hour per customer |
| Logging | All requests logged (customer, timestamp, outcome) |
| Error Handling | Generic errors to customer, details in logs |
| Resource Limits | 10MB template, 30s processing timeout |

</details>

### Exercise 3: Code Review

**Scenario**: Review this pull request for security issues.

**Code**:
```javascript
// File: api/invoices.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/invoices/:id', async (req, res) => {
    try {
        const invoiceId = req.params.id;
        const invoice = await db.query(
            `SELECT * FROM invoices WHERE id = ${invoiceId}`
        );
        res.json(invoice[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/invoices', async (req, res) => {
    const { customerId, amount, description } = req.body;

    const result = await db.query(
        `INSERT INTO invoices (customer_id, amount, description, created_at)
         VALUES (${customerId}, ${amount}, '${description}', NOW())`
    );

    res.json({ id: result.insertId });
});

router.delete('/invoices/:id', async (req, res) => {
    const { id } = req.params;
    await db.query(`DELETE FROM invoices WHERE id = ${id}`);
    res.json({ message: 'Invoice deleted' });
});

module.exports = router;
```

**Your Task**:
1. Identify security issues
2. Provide review comments
3. Write fixed version

<details>
<summary>Click to reveal review</summary>

**Security Issues**:

1. **SQL Injection** (Critical) - All endpoints
2. **No Authentication** (Critical) - All endpoints
3. **No Authorization** (Critical) - Users can access/modify any invoice
4. **No Input Validation** (High) - No validation on amount, description
5. **Information Disclosure** (Medium) - Error messages expose details
6. **No Logging** (Medium) - No audit trail

**Review Comments**:
```javascript
// 🚨 CRITICAL: SQL Injection on line 9
const invoice = await db.query(
    `SELECT * FROM invoices WHERE id = ${invoiceId}`
);
// ❌ CHANGE REQUIRED
// User can inject SQL: /invoices/1 OR 1=1 (returns all invoices)
// Fix: Use parameterized queries

// 🚨 CRITICAL: No authentication
router.get('/invoices/:id', async (req, res) => {
// ❌ CHANGE REQUIRED
// Anyone can call this endpoint
// Fix: Add authentication middleware

// 🚨 CRITICAL: No authorization
const invoice = await db.query(/*...*/);
res.json(invoice[0]);
// ❌ CHANGE REQUIRED
// User can access any invoice by changing ID
// Fix: Check if user owns this invoice

// 🚨 HIGH: No input validation
const { customerId, amount, description } = req.body;
// ❌ CHANGE REQUIRED
// amount could be negative, description could be huge
// Fix: Validate inputs

// 🚨 MEDIUM: Information disclosure
res.status(500).json({ error: error.message });
// ❌ CHANGE REQUIRED
// Exposes database errors to client
// Fix: Generic error message, log details server-side
```

**Fixed Version**:
```javascript
const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateUser, validateInvoice } = require('../middleware');
const logger = require('../logger');

// Authentication required for all routes
router.use(authenticateUser);

// GET /invoices/:id - View invoice
router.get('/invoices/:id', async (req, res) => {
    try {
        const invoiceId = parseInt(req.params.id);

        // Input validation
        if (isNaN(invoiceId) || invoiceId <= 0) {
            return res.status(400).json({ error: 'Invalid invoice ID' });
        }

        // Parameterized query (prevents SQL injection)
        const [invoice] = await db.query(
            'SELECT * FROM invoices WHERE id = ? AND customer_id = ?',
            [invoiceId, req.user.customerId]  // Authorization: only customer's invoices
        );

        if (!invoice) {
            logger.LogWarning(`User ${req.user.id} attempted to access invoice ${invoiceId}`);
            return res.status(404).json({ error: 'Invoice not found' });
        }

        logger.LogInformation(`User ${req.user.id} viewed invoice ${invoiceId}`);
        res.json(invoice);

    } catch (error) {
        logger.LogError('Error fetching invoice', error);
        res.status(500).json({
            error: 'An error occurred',
            requestId: req.id
        });
    }
});

// POST /invoices - Create invoice
router.post('/invoices', validateInvoice, async (req, res) => {
    try {
        const { amount, description } = req.body;

        // Input validation (also in middleware, but defense in depth)
        if (amount <= 0 || amount > 1000000) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        if (description.length > 500) {
            return res.status(400).json({ error: 'Description too long' });
        }

        // Parameterized query
        const result = await db.query(
            'INSERT INTO invoices (customer_id, amount, description, created_at) VALUES (?, ?, ?, NOW())',
            [req.user.customerId, amount, description]
        );

        logger.LogInformation(`User ${req.user.id} created invoice ${result.insertId}`);
        res.status(201).json({ id: result.insertId });

    } catch (error) {
        logger.LogError('Error creating invoice', error);
        res.status(500).json({ error: 'An error occurred', requestId: req.id });
    }
});

// DELETE /invoices/:id - Delete invoice
router.delete('/invoices/:id', async (req, res) => {
    try {
        const invoiceId = parseInt(req.params.id);

        if (isNaN(invoiceId) || invoiceId <= 0) {
            return res.status(400).json({ error: 'Invalid invoice ID' });
        }

        // Check ownership before deleting (authorization)
        const [invoice] = await db.query(
            'SELECT id FROM invoices WHERE id = ? AND customer_id = ?',
            [invoiceId, req.user.customerId]
        );

        if (!invoice) {
            logger.LogWarning(`User ${req.user.id} attempted to delete invoice ${invoiceId}`);
            return res.status(404).json({ error: 'Invoice not found' });
        }

        // Parameterized delete
        await db.query('DELETE FROM invoices WHERE id = ?', [invoiceId]);

        logger.LogInformation(`User ${req.user.id} deleted invoice ${invoiceId}`);
        res.json({ message: 'Invoice deleted' });

    } catch (error) {
        logger.LogError('Error deleting invoice', error);
        res.status(500).json({ error: 'An error occurred', requestId: req.id });
    }
});

module.exports = router;
```

**Key Fixes**:
1. ✅ Parameterized queries (all SQL injection fixed)
2. ✅ Authentication middleware (all endpoints require login)
3. ✅ Authorization (customer_id check ensures user owns resource)
4. ✅ Input validation (type, range, length checks)
5. ✅ Error handling (generic errors, logging)
6. ✅ Logging (audit trail for all actions)
</details>

---

## Final Assessment (25 questions + 2 code exercises)

### Part A: Multiple Choice (15 questions)

1. **Which vulnerability allows attackers to execute arbitrary SQL?**
   - A) XSS
   - B) CSRF
   - C) SQL Injection ✓
   - D) SSRF

2. **How should passwords be stored?**
   - A) Plain text
   - B) Encrypted (AES-256)
   - C) Hashed with bcrypt ✓
   - D) Base64 encoded

3. **What is the minimum TLS version for Swedwise?**
   - A) TLS 1.0
   - B) TLS 1.1
   - C) TLS 1.2 ✓
   - D) SSL 3.0

4. **Session cookies should have which flags?**
   - A) HttpOnly, Secure, SameSite ✓
   - B) Public, Shared
   - C) JavaScript-accessible
   - D) No flags needed

5. **What does SAST scan?**
   - A) Running application
   - B) Source code ✓
   - C) Network packets
   - D) User behavior

6. **Parameterized queries prevent:**
   - A) XSS
   - B) SQL Injection ✓
   - C) CSRF
   - D) Clickjacking

7. **JWT access tokens should expire in:**
   - A) Never
   - B) 1 year
   - C) 15-60 minutes ✓
   - D) 1 second

8. **Where should production encryption keys be stored?**
   - A) Source code
   - B) Git repository
   - C) Azure Key Vault ✓
   - D) Database

9. **What is defense in depth?**
   - A) Single strong security control
   - B) Multiple layers of security ✓
   - C) Only network security
   - D) No security needed

10. **Input validation should occur:**
    - A) Client side only
    - B) Server side only ✓
    - C) Database side
    - D) Nowhere (trust users)

11. **OWASP Top 10 A01:2021 is:**
    - A) Injection
    - B) Broken Access Control ✓
    - C) XSS
    - D) SSRF

12. **When should threat modeling be performed?**
    - A) Never
    - B) After deployment
    - C) Before implementing new features ✓
    - D) Only during audits

13. **Dependencies should be updated:**
    - A) Never
    - B) Yearly
    - C) Monthly or immediately for critical issues ✓
    - D) Every commit

14. **Generic error messages prevent:**
    - A) SQL Injection
    - B) Information Disclosure ✓
    - C) XSS
    - D) CSRF

15. **Principle of least privilege means:**
    - A) Everyone has admin access
    - B) Grant minimum necessary permissions ✓
    - C) No access for anyone
    - D) Full access for developers

### Part B: Scenario-Based (10 questions)

16. **User can view any order by changing the ID in URL. What's the issue?**
    - A) SQL Injection
    - B) Broken Access Control ✓
    - C) XSS
    - D) Nothing wrong

17. **Code: `SELECT * FROM users WHERE id = ${userId}`. What's wrong?**
    - A) Nothing
    - B) SQL Injection vulnerability ✓
    - C) Performance issue
    - D) Syntax error

18. **Error message: "SQL Server login failed for user 'sa'". What's the issue?**
    - A) XSS
    - B) Information Disclosure ✓
    - C) CSRF
    - D) Nothing wrong

19. **API allows 1000 requests/second. What security control is missing?**
    - A) Authentication
    - B) Encryption
    - C) Rate Limiting ✓
    - D) Logging

20. **Password requirement: "6+ characters". What's the issue?**
    - A) Too strict
    - B) Too weak ✓
    - C) Just right
    - D) Nothing wrong

21. **Session ID in URL: `/home?sessionId=abc123`. What's wrong?**
    - A) Nothing
    - B) Session Fixation / Exposure ✓
    - C) SQL Injection
    - D) Performance issue

22. **Using library from 2015 with known vulnerabilities. What should you do?**
    - A) Nothing
    - B) Update or replace the library ✓
    - C) Delete the library
    - D) Ignore it

23. **Hard-coded API key in code: `const key = "sk_live_abc"`. What's wrong?**
    - A) Nothing
    - B) Secrets Management issue ✓
    - C) Performance issue
    - D) Syntax error

24. **`innerHTML = userInput`. What vulnerability?**
    - A) SQL Injection
    - B) XSS ✓
    - C) CSRF
    - D) Nothing wrong

25. **No logging of failed login attempts. What's missing?**
    - A) Authentication
    - B) Security Monitoring ✓
    - C) Encryption
    - D) Nothing

### Part C: Code Review Exercises

**Exercise 1**: Identify and fix vulnerabilities in this code:

```python
@app.route('/user/<id>')
def get_user(id):
    query = f"SELECT * FROM users WHERE id = {id}"
    user = db.execute(query).fetchone()
    return jsonify(user)

@app.route('/admin/delete_user', methods=['POST'])
def delete_user():
    user_id = request.form['user_id']
    db.execute(f"DELETE FROM users WHERE id = {user_id}")
    return "User deleted"
```

<details>
<summary>Answer Key</summary>

**Vulnerabilities**:
1. SQL Injection (both endpoints)
2. No authentication
3. No authorization (anyone can delete users)
4. No input validation
5. No logging
6. Information disclosure (returns full user object)

**Fixed Version**:
```python
from flask import abort
import logging

@app.route('/user/<int:id>')
@login_required
def get_user(id):
    # Parameterized query
    user = db.execute("SELECT id, username, email FROM users WHERE id = ?", (id,)).fetchone()

    # Authorization: user can only view own profile
    if user['id'] != current_user.id and not current_user.is_admin:
        logging.warning(f"User {current_user.id} attempted unauthorized access to user {id}")
        abort(403)

    if not user:
        abort(404)

    logging.info(f"User {current_user.id} viewed user {id}")
    return jsonify(user)

@app.route('/admin/delete_user', methods=['POST'])
@login_required
@admin_required
def delete_user():
    user_id = request.form.get('user_id', type=int)

    # Input validation
    if not user_id or user_id <= 0:
        return jsonify({"error": "Invalid user ID"}), 400

    # Parameterized query
    result = db.execute("DELETE FROM users WHERE id = ?", (user_id,))

    if result.rowcount == 0:
        abort(404)

    logging.info(f"Admin {current_user.id} deleted user {user_id}")
    return jsonify({"message": "User deleted"})
```
</details>

**Exercise 2**: Secure this authentication function:

```javascript
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}
```

<details>
<summary>Answer Key</summary>

**Vulnerabilities**:
1. Plain-text password comparison
2. User object stored in localStorage (insecure)
3. No password hashing
4. Client-side authentication (can be bypassed)
5. No session management
6. No logging

**Fixed Version** (Server-Side):
```javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(username, password) {
    try {
        // Fetch user from database
        const user = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (!user) {
            logger.warn(`Failed login attempt for username: ${username}`);
            return { success: false, error: 'Invalid credentials' };
        }

        // Compare password with hash
        const validPassword = await bcrypt.compare(password, user.passwordHash);

        if (!validPassword) {
            logger.warn(`Failed login attempt for user: ${user.id}`);
            return { success: false, error: 'Invalid credentials' };
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        logger.info(`User ${user.id} logged in successfully`);

        // Return token (store in httpOnly cookie, not localStorage)
        return {
            success: true,
            token,  // Send as httpOnly cookie
            user: { id: user.id, username: user.username }  // Don't include password
        };

    } catch (error) {
        logger.error('Login error', error);
        return { success: false, error: 'An error occurred' };
    }
}
```
</details>

---

## Course Completion

### Congratulations!

You've completed the Secure Coding Training. You now understand:

✅ Security mindset and shift-left approach
✅ OWASP Top 10 vulnerabilities and how to prevent them
✅ Secure coding practices (input validation, parameterized queries, error handling)
✅ Authentication and authorization best practices
✅ Cryptography fundamentals (encryption, hashing, TLS)
✅ Secure development lifecycle (threat modeling, SAST, DAST, dependency scanning)

### Next Steps

1. **Apply what you learned**: Review your current code for security issues
2. **Use the Security Guideline**: Reference SW-ISMS-GUI-005 when coding
3. **Enable security tools**: Set up Dependabot, SAST, secret scanning
4. **Ask for help**: Contact CISO or security team with questions
5. **Stay current**: Security threats evolve - continue learning

### Resources

**Internal**:
- SW-ISMS-POL-001: Information Security Policy
- SW-ISMS-GUI-005: Secure Development Guideline
- SW-ISMS-PRO-001: Incident Management Procedure

**External**:
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- OWASP Cheat Sheets: https://cheatsheetseries.owasp.org/
- Microsoft SDL: https://www.microsoft.com/en-us/securityengineering/sdl
- NIST Secure Software: https://csrc.nist.gov/publications/detail/sp/800-218/final

### Certificate

Upon passing the assessment (80%+), you'll receive:
- Certificate of Completion (valid 12 months)
- Record in training system
- Badge on internal profile

### Feedback

Help us improve this training:
- What was most valuable?
- What could be improved?
- What topics should we add?

**Contact**: [TBD - Training Coordinator email]

---

## Appendix: Quick Reference

### Security Checklist (Before Every Commit)

- [ ] Input validation on all user input
- [ ] Output encoding (prevent XSS)
- [ ] Parameterized queries (prevent SQL injection)
- [ ] No hard-coded secrets
- [ ] Authentication and authorization implemented
- [ ] HTTPS enforced
- [ ] Error handling doesn't leak sensitive info
- [ ] Security events logged
- [ ] Dependencies up-to-date
- [ ] Code reviewed by peer

### Common Vulnerabilities - Quick Fixes

| Vulnerability | Quick Fix |
|---------------|-----------|
| SQL Injection | Use parameterized queries |
| XSS | Use textContent (not innerHTML) |
| Broken Access Control | Check authorization on server |
| Weak Crypto | Use bcrypt, AES-256, TLS 1.2+ |
| Hard-coded Secrets | Use Key Vault or env variables |
| Outdated Dependencies | Run `npm audit fix` |
| Missing Authentication | Add `[Authorize]` attribute |
| Information Disclosure | Generic error messages |

### Secure Code Snippets

**Input Validation**:
```csharp
if (string.IsNullOrWhiteSpace(input) || input.Length > 100)
    return BadRequest("Invalid input");
if (!Regex.IsMatch(input, @"^[a-zA-Z0-9_]+$"))
    return BadRequest("Invalid characters");
```

**Parameterized Query**:
```csharp
var query = "SELECT * FROM Users WHERE Email = @email";
command.Parameters.AddWithValue("@email", email);
```

**Password Hashing**:
```csharp
var passwordHash = BCrypt.HashPassword(password);
var isValid = BCrypt.Verify(password, passwordHash);
```

**Secure Session**:
```csharp
Response.Cookies.Append("SessionId", sessionId, new CookieOptions {
    HttpOnly = true, Secure = true, SameSite = SameSiteMode.Strict
});
```

### Who to Contact

**Security Questions**: CISO ([TBD - email])
**Training Questions**: Training Coordinator ([TBD - email])
**Security Incidents**: [TBD - incident email or Slack channel]
**Tool Support**: IT Support ([TBD - email])

---

**Document Version**: 1.0
**Last Updated**: [TBD]
**Review Frequency**: Annual
**Owner**: CISO

*This training is mandatory for all developers and engineers at Swedwise AB. Completion is tracked and required for annual compliance.*
