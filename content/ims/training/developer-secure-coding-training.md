---
document_id: SW-ISMS-TRN-003
title: Developer Secure Coding Training
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
training:
  course_id: developer-secure-coding
  duration: 60
  target_audience: [developers, technical_staff]
  required_for: [developers, devops, technical_leads]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
  validity_period: 12
---

# Developer Secure Coding Training

**Duration**: 60 minutes
**Target**: Software developers and technical staff working on SaaS and customer projects

## Why This Matters

You write code that handles sensitive customer data, processes financial transactions, and powers business-critical operations. A single security vulnerability can lead to:

- **Data breaches** affecting customers and damaging Swedwise's reputation
- **Financial losses** from incident response, legal fees, and lost business
- **Compliance violations** jeopardizing ISO 27001 certification and customer contracts
- **Service disruptions** breaking SLA commitments for our SaaS offerings

**Your code is a security control.** This training gives you the knowledge to write secure code from the start, not as an afterthought.

---

## 1. The Essentials: OWASP Top 10 Vulnerabilities

The **OWASP Top 10** represents the most critical web application security risks. Understanding these is fundamental to secure development.

### 1.1 Broken Access Control

**The Risk**: Users can access resources or perform actions they shouldn't be authorized to perform.

**Common Mistakes**:
- Relying on client-side checks only
- Using predictable IDs without authorization checks
- Missing function-level access control
- Insecure Direct Object References (IDOR)

**Prevention**:

```typescript
// ❌ BAD: No authorization check
app.get('/api/documents/:id', async (req, res) => {
  const document = await db.documents.findById(req.params.id);
  res.json(document);
});

// ✅ GOOD: Verify user owns the resource
app.get('/api/documents/:id', async (req, res) => {
  const document = await db.documents.findById(req.params.id);

  if (!document) {
    return res.status(404).json({ error: 'Not found' });
  }

  if (document.ownerId !== req.user.id && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  res.json(document);
});
```

```csharp
// ❌ BAD: Trust client-provided user ID
public async Task<IActionResult> GetUserData(int userId)
{
    var user = await _context.Users.FindAsync(userId);
    return Ok(user);
}

// ✅ GOOD: Use authenticated user from session
public async Task<IActionResult> GetUserData()
{
    var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    var user = await _context.Users.FindAsync(userId);
    return Ok(user);
}
```

**Key Principles**:
- **Deny by default**: Require explicit permission grants
- **Server-side enforcement**: Never trust client-side checks
- **Least privilege**: Grant minimum necessary access
- **Validate ownership**: Check user owns the resource being accessed

### 1.2 Cryptographic Failures

**The Risk**: Sensitive data exposed due to weak or missing encryption.

**Common Mistakes**:
- Storing passwords in plaintext or using weak hashing
- Not encrypting sensitive data at rest or in transit
- Using deprecated cryptographic algorithms (MD5, SHA1, DES)
- Hardcoding encryption keys in code

**Prevention**:

```typescript
// ❌ BAD: Plain MD5 hashing
import crypto from 'crypto';
const hash = crypto.createHash('md5').update(password).digest('hex');

// ✅ GOOD: Use bcrypt with salt
import bcrypt from 'bcrypt';
const saltRounds = 12;
const hash = await bcrypt.hash(password, saltRounds);

// Verify password
const isValid = await bcrypt.compare(inputPassword, storedHash);
```

```csharp
// ❌ BAD: Weak hashing without salt
using System.Security.Cryptography;
var hash = SHA1.HashData(Encoding.UTF8.GetBytes(password));

// ✅ GOOD: Use strong algorithm with salt
using System.Security.Cryptography;
const int saltSize = 16;
const int hashSize = 32;
const int iterations = 100000;

var salt = RandomNumberGenerator.GetBytes(saltSize);
var hash = Rfc2898DeriveBytes.Pbkdf2(
    password,
    salt,
    iterations,
    HashAlgorithmName.SHA256,
    hashSize
);
```

**Swedwise Requirements**:
- **Passwords**: Use bcrypt, scrypt, or Argon2 with appropriate work factors
- **Data at rest**: Encrypt confidential and restricted data (AES-256)
- **Data in transit**: Always use TLS 1.2+ for network communication
- **Key management**: Store keys in secure vaults (Azure Key Vault, AWS KMS), never in code

### 1.3 Injection Attacks

**The Risk**: Untrusted data is sent to an interpreter as part of a command or query, allowing attackers to execute malicious code.

**Types**: SQL Injection, NoSQL Injection, Command Injection, LDAP Injection, XPath Injection

**Prevention**:

```typescript
// ❌ BAD: SQL Injection vulnerability
const userId = req.query.id;
const query = `SELECT * FROM users WHERE id = ${userId}`;
db.query(query); // Attacker could send: ?id=1 OR 1=1

// ✅ GOOD: Use parameterized queries
const userId = req.query.id;
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);

// ✅ GOOD: Use ORM with parameterization
const user = await db.users.findOne({ where: { id: userId } });
```

```csharp
// ❌ BAD: Command injection vulnerability
var fileName = Request.Query["file"];
Process.Start("convert", $"{fileName} output.pdf");

// ✅ GOOD: Validate and sanitize input
var fileName = Request.Query["file"];

// Whitelist allowed characters
if (!Regex.IsMatch(fileName, @"^[a-zA-Z0-9_\-\.]+$"))
{
    return BadRequest("Invalid filename");
}

// Use safe API that doesn't invoke shell
var startInfo = new ProcessStartInfo
{
    FileName = "convert",
    Arguments = $"{fileName} output.pdf",
    UseShellExecute = false
};
Process.Start(startInfo);
```

**Key Principles**:
- **Parameterized queries**: Always use prepared statements
- **Input validation**: Whitelist acceptable input patterns
- **Avoid dynamic queries**: Don't concatenate user input into commands
- **Least privilege**: Database users should have minimal permissions

### 1.4 Insecure Design

**The Risk**: Security flaws in the design and architecture of the application.

**Prevention Through Design**:
- **Threat modeling**: Identify security requirements early
- **Secure design patterns**: Use established security patterns
- **Defense in depth**: Multiple layers of security controls
- **Fail securely**: Errors should not expose sensitive information

**Example - Secure Password Reset**:

```typescript
// ❌ BAD: Predictable reset tokens
const resetToken = user.id + Date.now();

// ✅ GOOD: Cryptographically random tokens with expiration
import crypto from 'crypto';

const resetToken = crypto.randomBytes(32).toString('hex');
const tokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
const expiresAt = new Date(Date.now() + 3600000); // 1 hour

await db.passwordResetTokens.create({
  userId: user.id,
  tokenHash: tokenHash,
  expiresAt: expiresAt,
  used: false
});

// Send token via email (only once)
await sendEmail(user.email, `Reset link: /reset?token=${resetToken}`);
```

### 1.5 Security Misconfiguration

**The Risk**: Insecure default configurations, incomplete setups, exposed debugging features.

**Common Issues**:
- Default credentials still active
- Unnecessary features enabled
- Error messages revealing system details
- Missing security headers
- Outdated or unpatched software

**Prevention**:

```typescript
// ✅ Security headers configuration
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  frameguard: { action: 'deny' },
  noSniff: true,
  xssFilter: true
}));

// ✅ Proper error handling (don't leak stack traces)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log for debugging

  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Internal server error' });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});
```

```csharp
// ✅ Remove server version headers
public void Configure(IApplicationBuilder app)
{
    app.Use(async (context, next) =>
    {
        context.Response.Headers.Remove("Server");
        context.Response.Headers.Remove("X-Powered-By");
        context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
        context.Response.Headers.Add("X-Frame-Options", "DENY");
        context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");
        await next();
    });
}
```

**Swedwise Configuration Standards**:
- Remove default accounts immediately
- Disable unnecessary services and features
- Keep all dependencies up to date
- Use environment-specific configurations
- Never commit secrets to version control

### 1.6 Vulnerable and Outdated Components

**The Risk**: Using libraries and frameworks with known vulnerabilities.

**Prevention**:

```bash
# Check for vulnerabilities regularly
npm audit
npm audit fix

# Use automated tools
npm install -g snyk
snyk test
snyk monitor
```

```xml
<!-- .NET: Enable NuGet vulnerability scanning -->
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <NuGetAudit>true</NuGetAudit>
    <NuGetAuditMode>all</NuGetAuditMode>
  </PropertyGroup>
</Project>
```

**Swedwise Requirements**:
- **Dependency scanning**: Run vulnerability scans in CI/CD pipeline
- **Update policy**: Apply security patches within 30 days
- **Dependency review**: Evaluate new dependencies before use
- **SBOM**: Maintain Software Bill of Materials for SaaS services

### 1.7 Identification and Authentication Failures

**The Risk**: Weak authentication mechanisms allowing attackers to compromise user accounts.

**Common Issues**:
- Weak password requirements
- No multi-factor authentication (MFA)
- Predictable session IDs
- Session fixation vulnerabilities
- Missing rate limiting on login attempts

**Prevention**:

```typescript
// ✅ Secure session configuration
import session from 'express-session';
import RedisStore from 'connect-redis';

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET, // Strong random secret
  name: 'sessionId', // Don't use default name
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // HTTPS only
    httpOnly: true,      // Not accessible via JavaScript
    maxAge: 3600000,     // 1 hour
    sameSite: 'strict'   // CSRF protection
  }
}));

// ✅ Rate limiting for login attempts
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/login', loginLimiter, async (req, res) => {
  // Login logic
});
```

```csharp
// ✅ Password policy enforcement
public class PasswordValidator
{
    public bool IsValid(string password)
    {
        return password.Length >= 12 &&
               Regex.IsMatch(password, @"[a-z]") &&
               Regex.IsMatch(password, @"[A-Z]") &&
               Regex.IsMatch(password, @"\d") &&
               Regex.IsMatch(password, @"[!@#$%^&*(),.?""':{}|<>]");
    }
}
```

**Swedwise Requirements**:
- **Password policy**: Minimum 12 characters, complexity requirements
- **MFA**: Required for privileged accounts and SaaS admin access
- **Session timeout**: 1 hour inactivity, 8 hours absolute
- **Account lockout**: After 5 failed attempts (15-minute lockout)

### 1.8 Software and Data Integrity Failures

**The Risk**: Code and infrastructure that doesn't protect against integrity violations.

**Prevention**:

```typescript
// ✅ Verify package integrity
// Use package-lock.json or yarn.lock
// Enable npm audit and integrity checks

// ✅ Subresource Integrity for CDN resources
<script
  src="https://cdn.example.com/library.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/ux..."
  crossorigin="anonymous">
</script>

// ✅ Verify file uploads
import crypto from 'crypto';

async function verifyFileIntegrity(file, expectedHash) {
  const fileBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', fileBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex === expectedHash;
}
```

**Swedwise Requirements**:
- **CI/CD security**: Use signed commits, verify build artifacts
- **Code review**: All code reviewed before merging
- **Dependency verification**: Lock file integrity checks
- **Digital signatures**: Sign releases and critical configurations

### 1.9 Security Logging and Monitoring Failures

**The Risk**: Insufficient logging and monitoring, allowing breaches to go undetected.

**What to Log**:
- Authentication events (success/failure)
- Authorization failures
- Input validation failures
- Server-side errors
- Security configuration changes

**What NOT to Log**:
- Passwords or password hashes
- Session tokens
- Credit card numbers
- Personal data (GDPR compliance)

**Prevention**:

```typescript
// ✅ Secure logging
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Log security events
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authenticate(username, password);

    logger.info('Login successful', {
      userId: user.id,
      username: username,
      ip: req.ip,
      userAgent: req.get('user-agent'),
      timestamp: new Date().toISOString()
    });

    res.json({ token: generateToken(user) });
  } catch (error) {
    logger.warn('Login failed', {
      username: username, // OK to log username
      // DO NOT log password
      ip: req.ip,
      reason: 'Invalid credentials',
      timestamp: new Date().toISOString()
    });

    res.status(401).json({ error: 'Invalid credentials' });
  }
});
```

```csharp
// ✅ Structured logging with Serilog
Log.Information("User {UserId} accessed resource {ResourceId}",
    userId, resourceId);

Log.Warning("Access denied for user {UserId} to resource {ResourceId}",
    userId, resourceId);

// ❌ Don't log sensitive data
Log.Information("Password reset for user: {Password}", password); // NEVER!
```

**Swedwise Requirements**:
- **Centralized logging**: Send logs to central system (e.g., ELK, Azure Monitor)
- **Log retention**: Minimum 12 months for security logs
- **Alerting**: Automated alerts for security events
- **Review**: Regular review of security logs

### 1.10 Server-Side Request Forgery (SSRF)

**The Risk**: Application fetches remote resources without validating user-supplied URLs.

**Prevention**:

```typescript
// ❌ BAD: Unvalidated URL fetching
app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  const response = await fetch(url); // Attacker could access internal services
  res.send(await response.text());
});

// ✅ GOOD: Whitelist allowed domains
const ALLOWED_DOMAINS = ['api.example.com', 'cdn.example.com'];

app.get('/fetch', async (req, res) => {
  const url = new URL(req.query.url);

  // Block private IP ranges
  if (url.hostname.match(/^(10|172\.(1[6-9]|2[0-9]|3[01])|192\.168)\./)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  // Whitelist allowed domains
  if (!ALLOWED_DOMAINS.includes(url.hostname)) {
    return res.status(400).json({ error: 'Domain not allowed' });
  }

  const response = await fetch(url.toString());
  res.send(await response.text());
});
```

---

## 2. Input Validation and Output Encoding

**Golden Rule**: Never trust user input. Always validate input and encode output.

### 2.1 Input Validation

**Validation Strategies**:
- **Whitelist**: Accept only known-good input (preferred)
- **Blacklist**: Reject known-bad input (less secure)

```typescript
// ✅ Whitelist validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhoneNumber(phone: string): boolean {
  // Swedish phone number format
  const phoneRegex = /^(\+46|0)[1-9]\d{1,9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

// ✅ Use validation libraries
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email().max(254),
  age: z.number().int().min(0).max(150),
  username: z.string().regex(/^[a-zA-Z0-9_-]{3,20}$/)
});

app.post('/api/users', async (req, res) => {
  try {
    const validatedData = userSchema.parse(req.body);
    // Process validated data
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});
```

```csharp
// ✅ Data annotations for validation
using System.ComponentModel.DataAnnotations;

public class UserRegistration
{
    [Required]
    [EmailAddress]
    [MaxLength(254)]
    public string Email { get; set; }

    [Required]
    [RegularExpression(@"^[a-zA-Z0-9_-]{3,20}$")]
    public string Username { get; set; }

    [Required]
    [Range(18, 150)]
    public int Age { get; set; }
}
```

### 2.2 Output Encoding

**Prevent XSS**: Encode output based on context (HTML, JavaScript, URL, CSS).

```typescript
// ✅ Use templating engines with auto-escaping
// React (auto-escapes by default)
function UserProfile({ name }) {
  return <div>Welcome, {name}</div>; // Automatically escaped
}

// For dangerouslySetInnerHTML, sanitize first
import DOMPurify from 'isomorphic-dompurify';

function RichContent({ html }) {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}

// ✅ Manual encoding when needed
function htmlEncode(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
```

```csharp
// ✅ Razor automatically encodes
@model UserViewModel
<h1>Welcome, @Model.Name</h1> <!-- Automatically encoded -->

// For raw HTML, sanitize first
@using Ganss.XSS
@{
    var sanitizer = new HtmlSanitizer();
    var clean = sanitizer.Sanitize(Model.UnsafeHtml);
}
@Html.Raw(clean)
```

---

## 3. Authentication and Session Management

### 3.1 Password Storage

```typescript
// ✅ Best practice password hashing
import bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12; // Adjust based on security/performance needs
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
```

### 3.2 Session Management

**Key Requirements**:
- Generate new session ID after authentication
- Invalidate session on logout
- Use secure, httpOnly cookies
- Implement absolute and idle timeouts
- Support concurrent session detection

```typescript
// ✅ Session lifecycle management
app.post('/api/login', async (req, res) => {
  const user = await authenticate(req.body.username, req.body.password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Regenerate session ID to prevent fixation
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Session error' });
    }

    req.session.userId = user.id;
    req.session.createdAt = Date.now();

    res.json({ message: 'Login successful' });
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.clearCookie('sessionId');
    res.json({ message: 'Logout successful' });
  });
});

// ✅ Session timeout middleware
app.use((req, res, next) => {
  if (!req.session.userId) {
    return next();
  }

  const now = Date.now();
  const idleTimeout = 60 * 60 * 1000; // 1 hour
  const absoluteTimeout = 8 * 60 * 60 * 1000; // 8 hours

  // Check idle timeout
  if (req.session.lastActivity &&
      now - req.session.lastActivity > idleTimeout) {
    return req.session.destroy(() => {
      res.status(401).json({ error: 'Session expired' });
    });
  }

  // Check absolute timeout
  if (now - req.session.createdAt > absoluteTimeout) {
    return req.session.destroy(() => {
      res.status(401).json({ error: 'Session expired' });
    });
  }

  req.session.lastActivity = now;
  next();
});
```

### 3.3 Token-Based Authentication (JWT)

```typescript
// ✅ Secure JWT implementation
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!; // Store securely
const JWT_EXPIRATION = '1h';

function generateToken(user: User): string {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRATION,
      issuer: 'swedwise-saas',
      audience: 'swedwise-api'
    }
  );
}

function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET, {
      issuer: 'swedwise-saas',
      audience: 'swedwise-api'
    });
  } catch (error) {
    throw new Error('Invalid token');
  }
}

// ✅ Auth middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.substring(7);

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

---

## 4. Secure Data Handling

### 4.1 Data Classification

Per Swedwise Information Security Policy (SW-ISMS-POL-001):

| Classification | Description | Handling Requirements |
|----------------|-------------|----------------------|
| **Public** | Can be freely shared | No special encryption required |
| **Internal** | For Swedwise use only | Encryption in transit (TLS) |
| **Confidential** | Customer data, contracts | Encryption at rest and in transit |
| **Restricted** | PII, credentials, keys | Strong encryption, access logging |

### 4.2 Encryption at Rest

```typescript
// ✅ Encrypt sensitive fields before storage
import crypto from 'crypto';

class EncryptionService {
  private algorithm = 'aes-256-gcm';
  private key: Buffer;

  constructor() {
    // In production, load from secure key management service
    const keyString = process.env.ENCRYPTION_KEY!;
    this.key = Buffer.from(keyString, 'hex');
  }

  encrypt(plaintext: string): {
    encrypted: string;
    iv: string;
    authTag: string;
  } {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  decrypt(encrypted: string, ivHex: string, authTagHex: string): string {
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

// Usage
const encryption = new EncryptionService();

async function saveUser(user: User) {
  const { encrypted, iv, authTag } = encryption.encrypt(user.ssn);

  await db.users.create({
    name: user.name,
    email: user.email,
    ssnEncrypted: encrypted,
    ssnIv: iv,
    ssnAuthTag: authTag
  });
}
```

```csharp
// ✅ Use .NET Data Protection API
using Microsoft.AspNetCore.DataProtection;

public class EncryptionService
{
    private readonly IDataProtector _protector;

    public EncryptionService(IDataProtectionProvider provider)
    {
        _protector = provider.CreateProtector("SensitiveData");
    }

    public string Encrypt(string plaintext)
    {
        return _protector.Protect(plaintext);
    }

    public string Decrypt(string ciphertext)
    {
        return _protector.Unprotect(ciphertext);
    }
}
```

### 4.3 Encryption in Transit

**Requirements**:
- Use TLS 1.2 or higher (disable TLS 1.0, 1.1)
- Strong cipher suites only
- Valid certificates from trusted CAs
- HSTS headers

```typescript
// ✅ HTTPS configuration for Node.js
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  minVersion: 'TLSv1.2', // Minimum TLS version
  ciphers: [
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256'
  ].join(':'),
  honorCipherOrder: true
};

https.createServer(options, app).listen(443);

// Force HTTPS redirect
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
});
```

### 4.4 Secure Data Deletion

```typescript
// ✅ Overwrite sensitive data in memory
function secureWipe(buffer: Buffer): void {
  crypto.randomFillSync(buffer);
  buffer.fill(0);
}

let sensitiveData = Buffer.from('secret-password');
// Use data...
// Clean up
secureWipe(sensitiveData);
sensitiveData = null as any;
```

---

## 5. Secure API Development

### 5.1 API Authentication

**Best Practices**:
- Use API keys for service-to-service
- Use OAuth 2.0 / OIDC for user-delegated access
- Implement rate limiting
- Validate API keys on every request

```typescript
// ✅ API key validation middleware
const API_KEYS = new Map([
  ['key_customer_acme', { customerId: 'acme', permissions: ['read', 'write'] }],
  ['key_customer_beta', { customerId: 'beta', permissions: ['read'] }]
]);

function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  const keyData = API_KEYS.get(apiKey);

  if (!keyData) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  req.apiClient = keyData;
  next();
}

// ✅ Rate limiting per API key
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  keyGenerator: (req) => req.headers['x-api-key'] || req.ip,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: 60
    });
  }
});

app.use('/api/', apiLimiter);
```

### 5.2 API Input Validation

```typescript
// ✅ Comprehensive request validation
import { z } from 'zod';

const createDocumentSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().max(100000),
  format: z.enum(['pdf', 'docx', 'html']),
  metadata: z.object({
    author: z.string().optional(),
    tags: z.array(z.string()).max(10).optional()
  }).optional()
});

app.post('/api/documents', validateApiKey, async (req, res) => {
  try {
    const data = createDocumentSchema.parse(req.body);

    // Additional business logic validation
    if (data.format === 'pdf' && !req.apiClient.permissions.includes('pdf')) {
      return res.status(403).json({ error: 'PDF generation not permitted' });
    }

    const document = await createDocument(data);
    res.status(201).json(document);

  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        error: 'Validation failed',
        details: error.errors
      });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});
```

### 5.3 API Response Security

```typescript
// ✅ Sanitize response data
function sanitizeUser(user: User) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    // Exclude: passwordHash, ssn, internalNotes
  };
}

app.get('/api/users/:id', authenticate, async (req, res) => {
  const user = await db.users.findById(req.params.id);
  res.json(sanitizeUser(user));
});

// ✅ Pagination to prevent data exposure
app.get('/api/documents', authenticate, async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 20);
  const offset = (page - 1) * limit;

  const documents = await db.documents.findMany({
    where: { ownerId: req.user.id },
    skip: offset,
    take: limit
  });

  res.json({
    data: documents,
    pagination: {
      page,
      limit,
      total: await db.documents.count({ where: { ownerId: req.user.id } })
    }
  });
});
```

---

## 6. Dependency Management and Supply Chain Security

### 6.1 Dependency Hygiene

**Best Practices**:
- Minimize dependencies (fewer = smaller attack surface)
- Review dependencies before adding
- Keep dependencies updated
- Use lock files (package-lock.json, yarn.lock)
- Scan for vulnerabilities regularly

```bash
# Check for vulnerabilities
npm audit
npm audit fix

# Use automated scanning
npx snyk test
npx snyk monitor

# Update dependencies safely
npm outdated
npm update --save
```

```xml
<!-- .NET: Enable automated vulnerability scanning -->
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <NuGetAudit>true</NuGetAudit>
    <NuGetAuditMode>all</NuGetAuditMode>
    <NuGetAuditLevel>low</NuGetAuditLevel>
  </PropertyGroup>
</Project>
```

### 6.2 Dependency Review Process

Before adding a new dependency:

1. **Necessity**: Can you implement it yourself? Is there a standard library alternative?
2. **Maintenance**: When was the last commit? Are issues being addressed?
3. **Popularity**: How many downloads? How many dependents?
4. **License**: Compatible with your project? (MIT, Apache 2.0 are safe)
5. **Security**: Any known vulnerabilities? Review package source code if critical
6. **Alternatives**: Are there better-maintained alternatives?

```json
// package.json: Document why dependencies exist
{
  "dependencies": {
    "express": "^4.18.0",  // Web framework
    "bcrypt": "^5.1.0",    // Password hashing - security critical
    "jsonwebtoken": "^9.0.0" // JWT auth - security critical
  }
}
```

### 6.3 Supply Chain Attack Prevention

```typescript
// ✅ Verify package integrity
// Use package-lock.json with integrity hashes
// Enable npm audit signatures when available

// ✅ Use private registry for internal packages
// .npmrc
registry=https://registry.npmjs.org/
@swedwise:registry=https://npm.swedwise.internal/

// ✅ Subresource Integrity for CDN
<script
  src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

### 6.4 Swedwise Dependency Policy

- **Critical dependencies** (auth, crypto, security): Review source code
- **High-risk dependencies**: Scan with SAST tools before use
- **Update cadence**: Security patches within 7 days, minor updates monthly
- **Approval**: Tech lead approval required for new dependencies
- **SBOM**: Maintain Software Bill of Materials for SaaS services

---

## 7. Security Testing Basics

### 7.1 Code Review

**Security-Focused Code Review Checklist**:

- [ ] Input validation on all user inputs
- [ ] Output encoding appropriate for context
- [ ] Authentication and authorization checks
- [ ] Sensitive data encrypted in storage and transit
- [ ] No hardcoded secrets or credentials
- [ ] Error handling doesn't leak information
- [ ] Logging appropriate (no sensitive data)
- [ ] Dependencies are up to date and scanned
- [ ] Security headers configured
- [ ] SQL queries parameterized (no injection risks)

```typescript
// ❌ Code review rejection example
app.get('/user/:id', (req, res) => {
  const user = db.query(`SELECT * FROM users WHERE id = ${req.params.id}`);
  res.json(user);
});

// Issues:
// 1. SQL injection vulnerability
// 2. No authentication check
// 3. No authorization check (can access any user)
// 4. Returns all fields (might include sensitive data)

// ✅ Code review approval
app.get('/user/:id', authenticate, async (req, res) => {
  // Input validation
  const userId = parseInt(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  // Authorization check
  if (userId !== req.user.id && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Parameterized query
  const user = await db.users.findById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Sanitize response
  res.json({
    id: user.id,
    name: user.name,
    email: user.email
    // Exclude: passwordHash, ssn, etc.
  });
});
```

### 7.2 Static Application Security Testing (SAST)

**Tools**:
- **JavaScript/TypeScript**: ESLint with security plugins, SonarQube, Semgrep
- **.NET**: Security Code Scan, SonarQube, Roslyn analyzers
- **Multi-language**: Snyk Code, Checkmarx, Veracode

```bash
# ESLint with security plugins
npm install --save-dev eslint-plugin-security

# .eslintrc.json
{
  "plugins": ["security"],
  "extends": ["plugin:security/recommended"]
}

# Run SAST in CI/CD
npm run lint
```

```bash
# .NET Security Code Scan
dotnet add package SecurityCodeScan.VS2019

# Run analysis
dotnet build /p:RunAnalyzers=true
```

### 7.3 Dynamic Application Security Testing (DAST)

**Tools**: OWASP ZAP, Burp Suite, Acunetix

```bash
# OWASP ZAP baseline scan
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://staging.swedwise-saas.se \
  -r zap-report.html
```

**Best Practice**: Run DAST against staging environment before production deployment.

### 7.4 Dependency Scanning (SCA)

```bash
# npm audit
npm audit --audit-level=moderate

# Snyk
npx snyk test --severity-threshold=high

# GitHub Dependabot (enable in repository settings)
# Automatically creates PRs for dependency updates
```

### 7.5 Security Testing in CI/CD

```yaml
# Example GitHub Actions workflow
name: Security Checks

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run npm audit
        run: npm audit --audit-level=high

      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

      - name: Run SAST
        run: npm run lint

      - name: SonarQube Scan
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

---

## 8. Swedwise-Specific Coding Standards

### 8.1 Swedwise Secure Development Lifecycle

```
┌─────────────────────────────────────────────────────────┐
│  1. Design          │  Threat modeling, security reqs   │
├─────────────────────────────────────────────────────────┤
│  2. Development     │  Secure coding, code review       │
├─────────────────────────────────────────────────────────┤
│  3. Testing         │  SAST, DAST, SCA, pen testing     │
├─────────────────────────────────────────────────────────┤
│  4. Deployment      │  Security config, hardening       │
├─────────────────────────────────────────────────────────┤
│  5. Operations      │  Monitoring, incident response    │
├─────────────────────────────────────────────────────────┤
│  6. Maintenance     │  Patching, updates, reviews       │
└─────────────────────────────────────────────────────────┘
```

### 8.2 Code Standards

**General Principles**:
1. **Security by default**: Secure option should be the easiest option
2. **Fail securely**: Errors should deny access, not grant it
3. **Least privilege**: Request minimum permissions needed
4. **Defense in depth**: Multiple layers of security controls
5. **Keep it simple**: Complex code is harder to secure

**Required Practices**:
- All code reviewed before merge (minimum 1 reviewer)
- No secrets in version control (use environment variables)
- Unit tests for security-critical functions
- Input validation on all external inputs
- Parameterized database queries only
- HTTPS for all external communication
- Secure session management
- Comprehensive error handling and logging

### 8.3 Secret Management

```bash
# ❌ NEVER commit secrets
# .env (add to .gitignore)
DATABASE_URL=postgres://user:password@localhost/db
JWT_SECRET=super-secret-key
ENCRYPTION_KEY=abc123def456

# ✅ Use environment variables
process.env.DATABASE_URL
process.env.JWT_SECRET

# ✅ Use secret management services (production)
# Azure Key Vault, AWS Secrets Manager, HashiCorp Vault
```

```typescript
// ✅ Secret management in code
import { SecretClient } from '@azure/keyvault-secrets';

class SecretsService {
  private client: SecretClient;

  constructor() {
    const vaultUrl = process.env.AZURE_KEYVAULT_URL!;
    this.client = new SecretClient(vaultUrl, credential);
  }

  async getSecret(name: string): Promise<string> {
    const secret = await this.client.getSecret(name);
    return secret.value!;
  }
}

// Usage
const secrets = new SecretsService();
const dbPassword = await secrets.getSecret('database-password');
```

### 8.4 Logging Standards

**What to Log**:
- Authentication attempts (success and failure)
- Authorization failures
- Data access (for confidential/restricted data)
- Configuration changes
- Security events and incidents
- Errors and exceptions

**What NOT to Log**:
- Passwords (plaintext or hashed)
- Session tokens or API keys
- Credit card numbers or CVV
- Personal identity numbers (SSN)
- Encryption keys

```typescript
// ✅ Proper logging
logger.info('User login successful', {
  userId: user.id,
  ip: req.ip
});

// ❌ Improper logging
logger.info('User login', {
  username: user.email,
  password: password  // NEVER LOG PASSWORDS
});
```

### 8.5 Error Handling Standards

```typescript
// ✅ Production error handling
app.use((err, req, res, next) => {
  // Log full error for debugging
  logger.error('Application error', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });

  // Return generic message to client
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({
      error: 'An error occurred. Please contact support.',
      reference: generateErrorReference() // For support lookup
    });
  } else {
    res.status(500).json({
      error: err.message,
      stack: err.stack
    });
  }
});
```

---

## 9. Practical Examples

### 9.1 Complete Secure Login Implementation

```typescript
import express from 'express';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1)
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts'
});

app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    // 1. Input validation
    const { email, password } = loginSchema.parse(req.body);

    // 2. Rate limiting (applied via middleware above)

    // 3. Find user (constant-time to prevent user enumeration)
    const user = await db.users.findByEmail(email);

    // 4. Verify password (always verify even if user not found)
    const isValid = user
      ? await bcrypt.compare(password, user.passwordHash)
      : await bcrypt.compare(password, '$2b$12$dummyhashtopreventtiming');

    if (!user || !isValid) {
      // 5. Log failed attempt
      logger.warn('Login failed', {
        email,
        ip: req.ip,
        timestamp: new Date()
      });

      // Generic error message (don't reveal if user exists)
      return res.status(401).json({
        error: 'Invalid email or password'
      });
    }

    // 6. Check if account is locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      return res.status(423).json({
        error: 'Account temporarily locked'
      });
    }

    // 7. Reset failed attempts
    await db.users.update(user.id, {
      failedLoginAttempts: 0,
      lockedUntil: null
    });

    // 8. Create session
    req.session.regenerate((err) => {
      if (err) {
        logger.error('Session regeneration failed', { userId: user.id });
        return res.status(500).json({ error: 'Login failed' });
      }

      req.session.userId = user.id;
      req.session.createdAt = Date.now();
      req.session.lastActivity = Date.now();

      // 9. Log successful login
      logger.info('Login successful', {
        userId: user.id,
        ip: req.ip,
        userAgent: req.get('user-agent')
      });

      // 10. Return success (no sensitive data)
      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid input'
      });
    }

    logger.error('Login error', { error });
    res.status(500).json({ error: 'Login failed' });
  }
});
```

### 9.2 Secure File Upload

```typescript
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

// Configuration
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png'
];

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/secure/uploads/'); // Outside web root
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueName = crypto.randomBytes(16).toString('hex');
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueName}${ext}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  // Check extension
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return cb(new Error('Invalid file type'));
  }

  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    return cb(new Error('Invalid MIME type'));
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1
  }
});

app.post('/api/upload', authenticate, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Additional validation: scan file content
    const isClean = await scanFileForMalware(req.file.path);

    if (!isClean) {
      // Delete file
      await fs.unlink(req.file.path);

      logger.warn('Malware detected in upload', {
        userId: req.user.id,
        filename: req.file.originalname
      });

      return res.status(400).json({ error: 'File failed security scan' });
    }

    // Save metadata to database
    const fileRecord = await db.files.create({
      userId: req.user.id,
      originalName: req.file.originalname,
      storedName: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date()
    });

    logger.info('File uploaded', {
      userId: req.user.id,
      fileId: fileRecord.id,
      size: req.file.size
    });

    res.json({
      message: 'File uploaded successfully',
      fileId: fileRecord.id
    });

  } catch (error) {
    logger.error('Upload error', { error });

    // Clean up file if it exists
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }

    res.status(500).json({ error: 'Upload failed' });
  }
});
```

### 9.3 Secure API Endpoint (Complete Example)

```typescript
import { z } from 'zod';

// Input schema
const createNotificationSchema = z.object({
  recipient: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(10000),
  channel: z.enum(['email', 'sms']),
  priority: z.enum(['low', 'normal', 'high']).default('normal')
});

// Rate limiting per customer
const notificationLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  keyGenerator: (req) => req.apiClient.customerId
});

app.post('/api/v1/notifications',
  validateApiKey,
  notificationLimiter,
  async (req, res) => {
    try {
      // 1. Input validation
      const data = createNotificationSchema.parse(req.body);

      // 2. Authorization check
      if (data.channel === 'sms' &&
          !req.apiClient.permissions.includes('sms')) {
        return res.status(403).json({
          error: 'SMS channel not enabled for this account'
        });
      }

      // 3. Business logic validation
      const quota = await getCustomerQuota(req.apiClient.customerId);
      if (quota.used >= quota.limit) {
        return res.status(429).json({
          error: 'Quota exceeded',
          quota: {
            used: quota.used,
            limit: quota.limit,
            resetsAt: quota.resetsAt
          }
        });
      }

      // 4. Create notification
      const notification = await db.notifications.create({
        customerId: req.apiClient.customerId,
        recipient: data.recipient,
        subject: data.subject,
        message: data.message,
        channel: data.channel,
        priority: data.priority,
        status: 'pending',
        createdAt: new Date()
      });

      // 5. Queue for sending
      await queue.publish('notifications', {
        notificationId: notification.id
      });

      // 6. Update quota
      await incrementCustomerQuota(req.apiClient.customerId);

      // 7. Log
      logger.info('Notification created', {
        customerId: req.apiClient.customerId,
        notificationId: notification.id,
        channel: data.channel
      });

      // 8. Return response
      res.status(201).json({
        id: notification.id,
        status: notification.status,
        createdAt: notification.createdAt
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors
        });
      }

      logger.error('Notification creation failed', { error });
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);
```

---

## Quick Reference

### Security Checklist for Every Feature

Before deploying new code, verify:

- [ ] **Input Validation**: All user inputs validated with whitelist approach
- [ ] **Output Encoding**: Context-appropriate encoding (HTML, JS, URL)
- [ ] **Authentication**: Proper authentication required
- [ ] **Authorization**: User has permission for the action
- [ ] **Data Protection**: Sensitive data encrypted at rest and in transit
- [ ] **Error Handling**: Errors logged but not exposed to users
- [ ] **Logging**: Security events logged (no sensitive data in logs)
- [ ] **Dependencies**: No known vulnerabilities (npm audit clean)
- [ ] **Security Headers**: Proper headers configured
- [ ] **Rate Limiting**: APIs have rate limiting
- [ ] **Session Management**: Secure session configuration
- [ ] **SQL Injection**: All queries parameterized
- [ ] **XSS Prevention**: Output properly encoded
- [ ] **CSRF Protection**: CSRF tokens where needed
- [ ] **Code Review**: Security-focused review completed

### Common Secure Patterns

```typescript
// Input validation
const schema = z.object({ /* ... */ });
const data = schema.parse(req.body);

// Authentication check
if (!req.user) return res.status(401).json({ error: 'Unauthorized' });

// Authorization check
if (resource.ownerId !== req.user.id)
  return res.status(403).json({ error: 'Forbidden' });

// Parameterized query
const user = await db.users.findOne({ where: { id: userId } });

// Password hashing
const hash = await bcrypt.hash(password, 12);

// Secure session
req.session.regenerate(() => { /* ... */ });

// Rate limiting
const limiter = rateLimit({ windowMs: 60000, max: 100 });

// Encryption
const { encrypted, iv, authTag } = encryption.encrypt(plaintext);

// Logging (no sensitive data)
logger.info('Action performed', { userId, action });
```

---

## Need Help?

### Internal Resources

- **CISO**: [TBD - name and contact]
- **Security Team**: security@swedwise.se
- **Tech Leads**: Your team's technical lead
- **Documentation**: Swedwise IMS Portal - Security Section

### External Resources

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **OWASP Cheat Sheets**: https://cheatsheetseries.owasp.org/
- **CWE Top 25**: https://cwe.mitre.org/top25/
- **Security Headers**: https://securityheaders.com/
- **Snyk Vulnerability DB**: https://security.snyk.io/

### Reporting Security Issues

**Found a vulnerability in our code?**

1. **Do NOT** create a public issue or PR
2. Email: security@swedwise.se with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if known)
3. You'll receive acknowledgment within 24 hours
4. We'll work with you on remediation and disclosure timeline

---

## Check Your Understanding

Complete this 10-question assessment to verify your knowledge. You need 80% (8/10) to pass.

### Question 1
You're building a user search feature. Which approach is most secure?

**A)** `SELECT * FROM users WHERE name LIKE '${searchTerm}%'`
**B)** `SELECT * FROM users WHERE name LIKE ?`, with searchTerm as parameter
**C)** `db.users.find({ name: { $regex: searchTerm } })`
**D)** Both B and C are equally secure

**Correct Answer**: B

**Explanation**: Option A is vulnerable to SQL injection. Option C (MongoDB) is vulnerable to NoSQL injection if searchTerm contains regex special characters. Option B uses parameterized queries which is the safest approach.

---

### Question 2
Which password hashing approach should you use?

**A)** `SHA256(password + salt)`
**B)** `MD5(password)`
**C)** `bcrypt(password, 12)`
**D)** Store passwords encrypted with AES

**Correct Answer**: C

**Explanation**: bcrypt is designed for password hashing with automatic salting and configurable work factor. SHA256 and MD5 are too fast and vulnerable to rainbow table attacks. Encryption is reversible and not appropriate for passwords.

---

### Question 3
You need to display user-generated HTML content. What's the safest approach?

```typescript
function DisplayContent({ html }) {
  // Which option?
}
```

**A)** `<div dangerouslySetInnerHTML={{ __html: html }} />`
**B)** `<div>{html}</div>`
**C)** `<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />`
**D)** `<div>{htmlEncode(html)}</div>`

**Correct Answer**: C

**Explanation**: Option A exposes to XSS attacks. Option B displays HTML as text (safe but not rendering HTML). Option D also displays as text. Option C sanitizes the HTML removing dangerous elements while preserving safe formatting.

---

### Question 4
What's wrong with this code?

```typescript
app.get('/api/documents/:id', async (req, res) => {
  const doc = await db.documents.findById(req.params.id);
  res.json(doc);
});
```

**A)** SQL injection vulnerability
**B)** Missing authentication check
**C)** Missing authorization check
**D)** Both B and C

**Correct Answer**: D

**Explanation**: The endpoint has no authentication (who is making the request?) and no authorization check (can they access this document?). This is a broken access control vulnerability.

---

### Question 5
How should you store an encryption key in production?

**A)** Environment variable: `process.env.ENCRYPTION_KEY`
**B)** Config file: `config/secrets.json`
**C)** Hardcoded: `const KEY = "abc123..."`
**D)** Secret management service: Azure Key Vault / AWS Secrets Manager

**Correct Answer**: D

**Explanation**: Secret management services provide secure storage, rotation, auditing, and access control. While environment variables (A) are better than config files or hardcoding, they're not as secure as dedicated secret management services for production use.

---

### Question 6
Which data should you encrypt at rest?

**A)** Customer names
**B)** Personal identity numbers (SSN)
**C)** Public product descriptions
**D)** User login timestamps

**Correct Answer**: B

**Explanation**: Per Swedwise Information Security Policy, "Restricted" data (including PII like SSN) requires encryption at rest. Customer names are typically "Confidential" and may require encryption depending on context. Public data and timestamps don't require encryption.

---

### Question 7
What's the best way to prevent CSRF attacks?

**A)** Check the Referer header
**B)** Use SameSite=Strict cookies
**C)** Implement CSRF tokens
**D)** Both B and C

**Correct Answer**: D

**Explanation**: Defense in depth: SameSite cookies prevent the browser from sending cookies with cross-site requests, and CSRF tokens provide per-request verification. Referer headers can be spoofed and shouldn't be relied upon alone.

---

### Question 8
You're implementing an API. What should you log when a user accesses sensitive data?

**A)** `{ userId: 123, action: "view", resourceId: 456, timestamp: ... }`
**B)** `{ userId: 123, data: { ssn: "123-45-6789", name: "John" } }`
**C)** `{ sessionToken: "abc...", action: "view" }`
**D)** Nothing (logging violates GDPR)

**Correct Answer**: A

**Explanation**: Log who accessed what and when, but don't log the actual sensitive data content. Don't log session tokens or authentication credentials. Logging access events is required for security and is allowed under GDPR for legitimate security purposes.

---

### Question 9
How often should you update dependencies with known security vulnerabilities?

**A)** Every 6 months during regular updates
**B)** Within 30 days per Swedwise policy
**C)** Within 7 days for security patches
**D)** Only if actively exploited in the wild

**Correct Answer**: C

**Explanation**: Per Swedwise Dependency Policy, security patches should be applied within 7 days. Waiting 30 days or longer exposes the system to known vulnerabilities that attackers can exploit.

---

### Question 10
Identify the vulnerability:

```typescript
app.get('/download', (req, res) => {
  const filename = req.query.file;
  res.sendFile(`/uploads/${filename}`);
});
```

**A)** Path traversal vulnerability
**B)** SQL injection
**C)** XSS vulnerability
**D)** No vulnerability present

**Correct Answer**: A

**Explanation**: An attacker could use `?file=../../etc/passwd` to access files outside the uploads directory. Always validate and sanitize file paths, and use path.join() with basename() to prevent directory traversal.

---

## Assessment Results

**Passing Score**: 8/10 (80%)
**Attempts Allowed**: 3
**Certificate Validity**: 12 months

Upon successful completion, you will receive a certificate that is valid for one year. Annual refresher training is required.

---

## Next Steps

After completing this training:

1. **Apply it**: Use these principles in your daily coding
2. **Review**: Bookmark this training for reference
3. **Share**: Help teammates with security questions
4. **Improve**: Suggest updates to training content
5. **Stay Current**: Subscribe to security newsletters (OWASP, Snyk)

**Remember**: Security is everyone's responsibility. Every line of code you write either strengthens or weakens our security posture.

---

## Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO name] | Initial training creation | [TBD - CEO name] |

**Next Review Date**: [TBD - 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This training is part of Swedwise AB's Information Security Management System and supports compliance with ISO 27001:2022.*
