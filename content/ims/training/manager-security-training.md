---
document_id: SW-ISMS-TRN-002
title: Manager Security Training - Security Leadership Responsibilities
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-POL-001
  - SW-ISMS-PRO-001
  - SW-ISMS-PRO-002
  - SW-ISMS-PRO-009
training:
  course_id: manager-security-responsibilities
  duration: 45
  target_audience: [managers, team_leads]
  required_for: [new_manager, annual_refresh]
  assessment:
    enabled: true
    passing_score: 80
    attempts_allowed: 3
  validity_period: 12
---

# Manager Security Training: Security Leadership Responsibilities

**Duration**: 45 minutes
**Target Audience**: All people managers and team leads
**Required For**: New managers, annual refresher for all managers

---

## Why This Matters

As a manager at Swedwise, you're not just responsible for your team's performance - you're a critical line of defense for our information security. Your team looks to you to set expectations, model behavior, and make decisions that directly impact our security posture.

**In the next 45 minutes, you'll learn:**
- Your specific security responsibilities as a manager
- How to make informed access management decisions
- How to recognize and handle security concerns
- How to support your team while maintaining security

**The reality**: Most security incidents involve human decisions. As a manager, you make dozens of security-relevant decisions every month - approving access, responding to incidents, addressing policy violations. This training ensures you make those decisions confidently and correctly.

---

## 1. Your Role in Security Culture

### Setting the Tone

Your team's security behavior reflects your leadership. If you treat security as bureaucracy to work around, they will too. If you treat it as integral to professional work, they will follow.

**What this means in practice:**

**DO:**
- Discuss security in team meetings (not just when problems occur)
- Recognize team members who report security concerns
- Complete your own security training on time
- Ask "is this secure?" not just "is this fast?"
- Model good security behaviors (lock your screen, use MFA, strong passwords)

**DON'T:**
- Make exceptions to security policies for convenience
- Rush access approvals without review
- Dismiss security concerns as "IT being difficult"
- Share your credentials or encourage workarounds
- Treat security training as a checkbox exercise

### Security as Management Responsibility

Security is not just IT's job. ISO 27001 explicitly requires management involvement. When auditors review our certification, they examine:
- How managers grant and review access
- How you handle security incidents in your team
- Whether you enforce policies consistently
- Your understanding of security risks in your area

**Your accountability:**
- Ensuring your team completes mandatory training
- Approving access requests appropriately
- Conducting regular access reviews
- Addressing security policy violations
- Escalating security concerns promptly

### Leading by Example

**Scenario: You're in a rush to catch a flight and need to respond to a customer email:**

**Wrong approach**: Leave your laptop unlocked in the coffee shop while you grab coffee, reasoning "I can see it from here."

**Right approach**: Lock your screen (Windows + L or Ctrl + Cmd + Q), take your laptop with you, or pack it securely. It takes 2 seconds.

Your team notices these behaviors. If they see you taking shortcuts, they'll assume it's acceptable.

---

## 2. Access Management Responsibilities

Access management is where managers have the most direct security impact. Every access decision you make affects our risk profile.

### Approving Access Requests

When someone on your team requests access to a system or data, you're asked to approve it. This isn't a formality - it's a security control.

**Your approval confirms:**
1. This person needs this access to do their job
2. The access level is appropriate (not more than needed)
3. You'll ensure they use it responsibly
4. You'll review it periodically

**Checklist before approving access:**

- [ ] Does this person's role require this access?
- [ ] Is this the minimum access level needed?
- [ ] Have they completed required training?
- [ ] Is there a legitimate business need (not just convenience)?
- [ ] If temporary, is there an end date?
- [ ] Am I comfortable being accountable for this access?

**When to question or reject:**
- Access level seems excessive for the role
- No clear business justification
- Request is vague ("access to everything")
- Timing seems odd (why now?)
- Person is leaving soon (consider temporary access)

**Example - Good Access Request:**
```
Requester: Anna Svensson
System: Customer CRM
Access Level: Read-only contact information
Business Justification: New role in Customer Success, needs to view
customer contact details for account management
Duration: Permanent

Manager assessment: ✓ Appropriate for role, approve.
```

**Example - Questionable Access Request:**
```
Requester: Erik Johansson
System: Customer CRM
Access Level: Full administrative access
Business Justification: Might need it for reporting
Duration: Permanent

Manager assessment: ✗ Too broad. Erik needs reporting access, not admin.
Request read-only report access instead.
```

### Regular Access Reviews

**Requirement**: Annually (Q1), you'll receive a report of all access your team members have. You must review and certify it's still appropriate.

**Why this matters**: People change roles, projects end, responsibilities shift. Access that was appropriate 6 months ago might not be today. "Privilege creep" (accumulating unnecessary access over time) is a real risk.

**The Access Review Process:**

**You'll receive:**
- List of each team member
- All systems they can access
- Their access levels/permissions
- Last login date

**Your task:**
1. Review each person's access
2. Verify they still need each system
3. Identify access to remove (projects ended, role changed)
4. Flag inactive accounts (no login >90 days)
5. Certify the access is appropriate

**Deadline**: 2 weeks from receipt
**Consequences of missing**: Escalation to your manager, potentially team access suspended

**Pro tips:**
- Block time in your calendar when the review arrives (don't leave it to the last day)
- Talk to team members if you're unsure about their access needs
- When in doubt, remove access (they can request again if needed)
- Look for patterns (why does everyone in your team have admin access?)

### Joiner/Mover/Leaver Process

#### New Team Members (Joiners)

**Your role**: Define what access your new hire needs from day one.

**Timeline**:
- Notify HR/IT at least 3 days before start date
- Specify access requirements or select role template
- Approve access provisioning

**Think through:**
- Core systems (email, Teams, file shares)
- Application access specific to their role
- Customer systems (if applicable)
- Will they work remotely? (VPN access)
- Physical access (office key card)

**Start with minimum needed**. It's easier to add access later than remove unnecessary access.

#### Role Changes (Movers)

**When someone changes roles in your team, or moves to/from your team:**

**Leaving your team:**
- Document what access they have
- Identify access to revoke (especially customer data, privileged access)
- Coordinate handover with new manager

**Joining your team:**
- Define new role access needs
- Ensure old access is removed (don't assume it was)
- Verify they don't have inappropriate accumulated access

**Critical**: When someone changes roles, they should have ONLY the access for their new role, not old + new.

#### Departing Team Members (Leavers)

**Your most critical security responsibility as a manager.**

**Timeline**:
- Notify HR/IT minimum 3 days before last day (more for contractors)
- Access must be revoked on or before last day (no exceptions)

**Your leaver checklist:**

- [ ] Notify HR and IT of departure date
- [ ] Arrange knowledge transfer
- [ ] Retrieve all equipment:
  - [ ] Laptop
  - [ ] Mobile phone
  - [ ] Access cards/keys
  - [ ] Any other company devices
- [ ] Collect physical documents (especially confidential)
- [ ] Verify customer projects transitioned
- [ ] Confirm access revocation completed (IT will confirm)

**For unexpected departures** (termination, resignation with immediate effect):
- Contact IT immediately
- Access will be disabled within 15 minutes
- Supervise collection of equipment
- Higher scrutiny on what they accessed recently

**Why this is critical**: Most insider data theft happens in the final weeks of employment. Prompt access revocation prevents unauthorized data access or sabotage.

### Privileged Access Oversight

If someone on your team has privileged/admin access (system administrators, DBAs, developers with production access):

**Additional requirements:**
- CISO must also approve (not just you)
- Quarterly access reviews (not annual)
- Enhanced monitoring of privileged account usage
- Separate admin account from regular user account

**Your responsibility**:
- Only request privileged access when truly needed
- Justify why standard user access isn't sufficient
- Review quarterly (CISO will send separate report)
- Watch for misuse or policy violations

### Contractor and Temporary Staff Access

**Contractors are higher risk** (shorter tenure, less loyalty, different motivations).

**Additional controls:**
- Time-limited access with documented end date
- Access reviewed at contract renewal
- Access revoked on last day (no grace period)
- Tighter supervision and monitoring

**Your responsibility:**
- Specify access duration when requesting
- Review monthly if long-term contractor
- Ensure NDA and acceptable use agreement signed
- Revoke promptly when contract ends (even if they might return)

---

## 3. Team Security Expectations

### Ensuring Team Completes Training

**Your team must complete:**
- Onboarding security training (first week)
- Annual security awareness refresher (by March 31)
- Role-specific training (developers, customer-facing staff, etc.)

**You'll receive**:
- Notifications when training is assigned
- Reminders for overdue training
- Completion reports

**Your role**:
1. Set expectation: Security training is mandatory, not optional
2. Allocate time: Let team members use work time for training
3. Follow up: Check on overdue training, ask about barriers
4. Escalate: If someone refuses, work with HR

**Don't:**
- Tell people to complete training "on their own time" (it's work)
- Make excuses for non-completion
- Skip your own training (sets bad example)

**Suggested approach**:
"Team, annual security training is due by March 31. It takes about 45 minutes. Please schedule it in your calendar this week and mark it as 'focus time' so you're not interrupted. Let me know if you have questions after completing it."

### Addressing Security Concerns Raised by Team

**Create an environment where people feel safe reporting security concerns.**

**When a team member reports a security issue:**

**DO:**
- Thank them for reporting
- Take it seriously (even if it seems minor)
- Escalate to CISO/IT if unsure
- Follow up on what happened
- Recognize them (publicly if appropriate)

**DON'T:**
- Dismiss as "probably nothing"
- Tell them to ignore it
- Criticize them for "wasting time"
- Handle serious incidents yourself (escalate)

**Remember**: Most security incidents are detected by alert employees, not automated tools. You want your team reporting suspicious activity, even if 90% turns out to be false alarms.

**Examples of what to encourage reporting:**
- Suspicious emails (even if they didn't click)
- Unusual system behavior
- Lost or stolen devices
- Accidental data sharing
- Customer security complaints
- Colleague behavior that seems off

### Supporting Security Initiatives

**When CISO or IT implements new security controls:**
- Software updates/patches
- New authentication requirements (MFA, password changes)
- Access restrictions
- Security tools

**Your team may complain it's inconvenient. Your response matters.**

**Instead of**: "I know, IT is being difficult again, just deal with it."

**Say**: "I know it's a change, but it protects us and our customers. Let me know if you need help adjusting, but this is important."

**Your visible support** for security initiatives makes them successful. Your visible frustration undermines them.

### Time Allocation for Security Activities

Security isn't "in addition to" work - it's part of doing work properly.

**Allocate time for**:
- Security training (45-90 min annually, plus onboarding)
- Applying security patches (weekly)
- Security reviews for developers (part of code review)
- Access reviews (2-4 hours annually)
- Incident response (when needed)

**Don't**:
- Pressure team to skip security activities to meet deadlines
- Count security time as "non-productive"
- Create incentives that reward speed over security

---

## 4. Recognizing Insider Threats

**Insider threat**: Security risk from people within the organization (employees, contractors).

**Types:**
- **Malicious**: Intentional data theft, sabotage
- **Negligent**: Carelessness, policy violations
- **Compromised**: Employee account hacked by external attacker

**Your role**: You know your team better than anyone. You're best positioned to notice concerning changes.

### Warning Signs and Behavioral Indicators

**Watch for:**

**Access and behavior anomalies:**
- Requesting access unrelated to their role
- Accessing systems outside normal work hours (repeatedly)
- Downloading large amounts of data
- Using USB drives frequently (if unusual for them)
- Emailing files to personal accounts
- Asking about security controls or monitoring

**Behavioral changes:**
- Sudden performance decline
- Withdrawal from team
- Defensiveness when questioned
- Financial stress (new gambling, debt collectors calling)
- Disgruntlement (complaints about company, management)
- Signs of looking for other jobs
- Violation of other policies (attendance, conduct)

**Context matters:**
- One indicator isn't conclusive
- Look for patterns or combinations
- Consider life circumstances (divorce, illness, etc.)
- Trust your instincts if something feels wrong

### When and How to Escalate

**When to escalate to CISO:**
- Multiple concerning indicators
- Direct evidence of policy violation
- Suspected data theft or sabotage
- Employee with privileged access showing concerning behavior
- Gut feeling that something is seriously wrong

**How to escalate:**
1. Contact CISO directly (email: [CISO email], phone: [number])
2. Describe specific behaviors/evidence (not conclusions)
3. Provide context (recent events, performance issues)
4. Ask for guidance on next steps
5. Keep conversation confidential

**What happens next:**
- CISO will investigate discreetly
- May involve HR, IT, legal
- You may be asked to provide more information
- Access may be monitored or restricted
- You'll be kept informed on need-to-know basis

### Maintaining Confidentiality

**Critical**: If you suspect insider threat, do NOT:
- Confront the employee directly
- Discuss with other team members
- Investigate on your own (access logs, email, etc.)
- Tip off the employee that they're under suspicion

**Why**:
- Could destroy evidence
- May escalate situation
- Legal implications if handled wrong
- Could be mistaken (false accusation damages)

**Let security professionals investigate.** Your role is to report concerns, not investigate.

### Handling Concerns Appropriately

**Scenario 1: Team member accessing systems at odd hours**

**Wrong**: "I noticed you're logging in at 2am a lot. Are you stealing data?"

**Right**: Note the pattern, check if there's a legitimate reason (working with overseas client, personal preference, debugging production issues), escalate to CISO if no reasonable explanation or combined with other concerns.

**Scenario 2: Employee suddenly disgruntled after being passed over for promotion**

**Wrong**: Immediately report to security.

**Right**: Have normal performance conversation, address dissatisfaction through HR processes, monitor for concerning behaviors, escalate only if behaviors emerge.

**Balance**: Be alert but not paranoid. Most employees are trustworthy. Don't create climate of suspicion.

---

## 5. Incident Escalation

### When Managers Must Escalate

**You must immediately escalate to CISO/IT Operations if:**

**Security incidents:**
- Team member's account compromised
- Malware detected on team member's device
- Suspected or confirmed data breach
- Customer reporting security concern
- Lost or stolen device with company data
- Ransomware or system outage

**Policy violations:**
- Intentional circumvention of security controls
- Unauthorized access to systems/data
- Sharing credentials
- Removal of company data without authorization
- Serious acceptable use policy violation

**Uncertainty:**
- When in doubt, escalate

**Contact points:**
- **Security incidents**: security@swedwise.se or CISO directly
- **Urgent (Critical severity)**: CISO mobile [number]
- **IT Operations**: [IT helpdesk] for non-urgent

### Communication During Incidents

**If a security incident affects your team or customers:**

**DO:**
- Cooperate fully with incident response team
- Provide information requested promptly
- Follow instructions (may include "stop using system X")
- Keep team informed of what they need to know
- Direct questions to incident owner (don't speculate)

**DON'T:**
- Communicate to customers without approval (Customer Success handles)
- Speculate about cause or impact
- Minimize or downplay the incident
- Obstruct investigation to "protect" team member
- Discuss incident details outside response team

**Your team will have questions. Appropriate response:**
"There's a security incident we're handling. IT/CISO is investigating and will keep us updated. For now, [specific instructions - e.g., avoid using email, change your password]. I'll share more when I can."

### Supporting Incident Response

**You may be asked to:**
- Provide access logs or information about team member activities
- Temporarily restrict someone's access
- Interview team members about what they observed
- Implement temporary process changes
- Adjust priorities (incident response takes precedence)

**Your role**: Facilitate the response, don't question it. Trust the incident response team.

**After hours**: If incident occurs outside business hours and you're contacted, respond promptly. Security incidents don't wait for Monday morning.

### Post-Incident Team Support

**After incident is resolved:**

**If team member made honest mistake:**
- No blame or punishment for honest errors
- Use as learning opportunity
- Review what happened and how to prevent
- Reassure them they did right by reporting

**If deliberate policy violation:**
- Follow HR disciplinary process
- Be consistent with policy
- Document thoroughly
- Separate security response from HR action

**Team morale:**
- Incidents are stressful
- Acknowledge the impact
- Share lessons learned (if appropriate)
- Recognize team members who handled it well

---

## 6. Performance and Security

### Security as Performance Expectation

Security is part of everyone's job responsibilities. It should be in:
- Job descriptions
- Onboarding expectations
- Performance reviews
- Development plans

**Include security in performance reviews:**
- "Completes security training on time"
- "Follows security policies and procedures"
- "Reports security concerns appropriately"
- "Demonstrates security awareness in daily work"

**For roles with security responsibilities** (developers, IT, customer-facing):
- Specific security competencies
- Security incident handling
- Customer data protection

### Positive Reinforcement for Good Security Behavior

**Recognize and reward:**
- Team members who report phishing attempts
- Excellent performance in phishing simulations
- Going above minimum security requirements
- Helping others with security questions
- Suggesting security improvements

**How to recognize:**
- Verbal praise in team meetings
- Written commendation in performance review
- Nominate for company recognition
- Small rewards (coffee, lunch, etc.)
- Share success stories (with permission)

**Create positive association**: Security = good professional practice, not burden.

### Addressing Security Violations

**When team member violates security policy:**

**Minor violations** (forgot to lock screen, late on training):
- Coaching conversation
- Explain why it matters
- Ensure they understand policy
- Document the conversation
- Monitor for repeat

**Moderate violations** (weak password, sharing files inappropriately):
- Formal discussion
- Written warning (may be appropriate)
- Remedial training
- Closer supervision
- Document in HR file

**Serious violations** (intentional policy circumvention, data theft):
- Immediate escalation to HR and CISO
- Follow disciplinary procedure
- May involve suspension or termination
- Potential legal action
- Evidence preservation

**Consistency is critical**: Don't make exceptions for high performers or friends. Inconsistent enforcement undermines the entire security program.

### Disciplinary Considerations

**Work with HR on disciplinary actions.** Security violations are HR matters.

**Factors in determining response:**
- Intent (honest mistake vs. deliberate)
- Severity (minor inconvenience vs. data breach)
- History (first time vs. repeat offender)
- Impact (no harm vs. customer data exposed)
- Cooperation (admitted and learned vs. defensive and dismissive)

**Document everything:**
- What happened (facts, not interpretation)
- When you became aware
- Conversations with employee
- Actions taken
- Employee response

**Legal considerations**: Some security incidents may involve law enforcement. Consult HR and legal before taking action.

---

## 7. Practical Scenarios

### Scenario 1: Team Member Reports Phishing Attempt

**Situation**: Team member forwards you an email they received: "Your Office 365 account will be suspended. Click here to verify your account." They didn't click but want to know if it's legitimate.

**Your response:**

**DO:**
1. ✓ Praise them for not clicking and for reporting
2. ✓ Forward to security@swedwise.se with subject "Suspected Phishing"
3. ✓ Tell them "Good catch! This is phishing. I've reported it to IT. Delete the email."
4. ✓ Remind team in next meeting: "If you get suspicious emails, don't click, report to security@"

**DON'T:**
- ✗ Say "Yeah, just delete it" (IT needs to know about phishing campaigns)
- ✗ Forward it to entire team as example (could spread the malicious link)
- ✗ Try to investigate yourself (clicking links, viewing headers, etc.)

**Why this matters**: This employee just prevented a potential account compromise. Your positive response reinforces that behavior.

---

### Scenario 2: Access Review Reveals Inappropriate Access

**Situation**: During annual access review, you notice that a team member who left a customer project 8 months ago still has access to that customer's systems.

**Your response:**

**DO:**
1. ✓ Mark the access for removal in your access review
2. ✓ Check if other former project members also have lingering access
3. ✓ Ask yourself: "Why wasn't this removed when the project ended? Is our mover process working?"
4. ✓ Consider if you need to notify the customer (escalate to CISO/Customer Success for guidance)
5. ✓ Implement reminder for future: Review team access when projects end

**DON'T:**
- ✗ Ignore it because "they probably wouldn't misuse it"
- ✗ Leave it "just in case they work with that customer again" (they can request new access)
- ✗ Assume IT will catch it eventually (this review is the control)

**Follow-up**: Speak with the team member: "I noticed you still had access to [Customer] system. Did you know? Going forward, let me know when projects end so we remove access promptly."

---

### Scenario 3: Team Member Leaving the Company

**Situation**: One of your team members resigned, last day is Friday (today is Monday).

**Your immediate actions:**

**Monday (today):**
1. ✓ Email HR and IT with subject "Leaver - [Name] - Last Day [Date]"
2. ✓ Include: Full name, last working day, equipment they have, customer access they need to transfer
3. ✓ Schedule knowledge transfer meetings (Tue-Thu)
4. ✓ Identify what customer projects/access need transitioning

**Tuesday-Thursday:**
1. ✓ Conduct knowledge transfers
2. ✓ Retrieve equipment:
   - Laptop
   - Mobile phone
   - Access cards
   - Keys
   - Headset, monitors (if company property)
3. ✓ Collect any physical documents
4. ✓ Transfer customer projects to other team members
5. ✓ Exit interview (HR may handle)

**Friday (last day):**
1. ✓ Final check: All equipment returned?
2. ✓ Confirm with IT that access will be revoked end of day
3. ✓ Wish them well professionally

**Following Monday:**
1. ✓ Verify with IT that access was revoked
2. ✓ Check for any email forwarding needs
3. ✓ Ensure team knows how to reach you for questions about departed person's work

**What could go wrong if you don't:**
- Equipment not returned → cost and potential data exposure
- Access not revoked → former employee still has access to systems/customer data
- No knowledge transfer → customer impact, team scrambling
- Customer not notified → they send confidential info to former employee's email

---

### Scenario 4: Suspected Policy Violation

**Situation**: Another manager mentions they saw one of your team members using the same password for multiple sites during a screen share, and it appeared to be a weak password ("Summer2024!").

**Your response:**

**Step 1: Gather information (discreetly)**
- What exactly did they observe?
- When did this happen?
- Are they certain it was the same password?

**Step 2: Assess severity**
- This is a moderate policy violation (password policy requires unique, strong passwords and password manager use)
- Risk: If one account is compromised, all are compromised
- This employee may not understand the policy or may be taking shortcuts

**Step 3: Private conversation with employee**

**You**: "I need to talk with you about password security. I understand you may be using the same password across multiple sites. Can you tell me about your current password practices?"

**Listen to their response. They may:**
- Admit it and explain they didn't realize it was serious
- Deny it (in which case you explain what was observed)
- Get defensive

**You**: "Our password policy requires unique passwords for each system, and we require password manager use for exactly this reason - so you don't have to remember dozens of passwords. Using the same password everywhere is like having one key for your house, car, and office. If someone steals it, they get everything."

**You**: "I need you to immediately:
1. Change your passwords to unique values for each system
2. Set up the password manager (I'll have IT help you if needed)
3. Complete the password security training module

I'm documenting this conversation. If this happens again, it will be a formal disciplinary matter. Any questions?"

**Step 4: Document**
- Note date, what was observed, your conversation, employee response
- Share with HR (they may need to note in employee file)
- Set reminder to follow up in 2 weeks (check password manager is being used)

**Step 5: Consider broader team issue**
- Is this one person or a team-wide problem?
- Do you need to remind entire team about password policy?
- Bring up in next team meeting (without identifying the individual)

**DON'T:**
- Let it slide because "everyone does it"
- Confront them publicly
- Skip documentation
- Assume they'll fix it without follow-up

---

## Quick Reference

### Manager Security Checklist

**When new team member joins:**
- [ ] Define access requirements or select role template
- [ ] Approve access provisioning
- [ ] Ensure they complete onboarding security training (week 1)
- [ ] Verify appropriate access granted

**When team member changes roles:**
- [ ] Define new access requirements
- [ ] Ensure old access is removed
- [ ] Verify no accumulated inappropriate access

**When team member leaves:**
- [ ] Notify HR/IT minimum 3 days before last day
- [ ] Arrange knowledge transfer
- [ ] Retrieve all equipment and access cards
- [ ] Confirm access revoked on last day

**When approving access requests:**
- [ ] Verify business need
- [ ] Confirm minimum necessary access level
- [ ] Check if temporary access is more appropriate
- [ ] Ensure required training completed

**During annual access review (Q1):**
- [ ] Review all team members' access
- [ ] Remove access no longer needed
- [ ] Flag inactive accounts
- [ ] Certify access is appropriate
- [ ] Submit within 2 weeks

**When security incident occurs:**
- [ ] Escalate to security@swedwise.se or CISO immediately
- [ ] Provide requested information
- [ ] Follow incident response team instructions
- [ ] Keep team informed (appropriate information only)
- [ ] Support post-incident learning

**Ongoing responsibilities:**
- [ ] Monitor team training completion
- [ ] Model good security behaviors
- [ ] Address security concerns raised by team
- [ ] Support security initiatives
- [ ] Include security in performance discussions

---

## Key Contacts

**Security Incidents**:
- Email: security@swedwise.se
- CISO: [Name, phone, email]
- IT Operations: [Contact info]

**Access Management**:
- IT Service Desk: [Contact info]
- Access requests: [System/portal]

**HR Support**:
- HR Manager: [Contact info]
- For disciplinary matters, policy questions

**Training**:
- Training Coordinator: [Contact info]
- LMS support: [Link/contact]

---

## Check Your Understanding

### Assessment Questions

**Question 1:**
A team member is leaving in 2 weeks. They ask if they can keep their access for an extra month after departure "just in case customers have questions." What should you do?

A) Approve the request - it's helpful for customer continuity
B) Deny the request - access must be revoked on last working day
C) Compromise by giving them read-only access for 2 weeks
D) Let IT decide

**Correct Answer: B**
**Explanation:** Access must be revoked on or before the last working day, no exceptions. Customer questions can be redirected to remaining team members. Keeping former employee access creates security risk and violates policy. Set up email forwarding if needed, but revoke system access.

---

**Question 2:**
During your annual access review, you see that one team member has administrative access to several systems. You're not sure why they need admin access. What should you do?

A) Leave it alone - if they have it, someone must have approved it
B) Remove it immediately - admin access should be rare
C) Ask the team member why they have it and verify the business need
D) Ask IT to explain why they granted it

**Correct Answer: C**
**Explanation:** The access review is your opportunity to verify appropriateness. Talk to the team member to understand if admin access is truly needed for their current role. If not needed, remove it. If still needed, verify it's documented and CISO approved (required for privileged access). Don't assume past approval means current appropriateness.

---

**Question 3:**
A team member reports receiving a suspicious email claiming to be from the CEO asking them to urgently buy gift cards for a customer. What's your best response?

A) Tell them to ignore it and delete the email
B) Check with the CEO if the request is legitimate
C) Praise them for not acting on it and forward to security@swedwise.se
D) Tell them to use their judgment - the CEO might legitimately need this

**Correct Answer: C**
**Explanation:** This is a classic social engineering attack (CEO fraud/gift card scam). Praise the employee for recognizing it and reporting. Forward to security@swedwise.se so IT can warn others and block the sender. Never suggest "using judgment" on security matters - when in doubt, escalate. Don't waste time checking with CEO (it's obviously fraud), but do report it.

---

**Question 4:**
Your star developer is frustrated with the new requirement for separate admin and user accounts. They say it's inefficient and slows them down. They ask you to approve an exception so they can use one account with admin rights for everything. What do you do?

A) Approve the exception - they're trusted and productivity is important
B) Deny the request and explain why the separation is required
C) Compromise by allowing it temporarily until they get used to the new process
D) Escalate to CISO to decide

**Correct Answer: B**
**Explanation:** Separation of privileged accounts is a critical security control (ISO 27001 requirement). Using admin account for daily work (email, web browsing) exposes privileged credentials to phishing and malware. Deny the request and explain: "I know it's inconvenient, but this protects your admin access and our systems. If the extra 10 seconds to switch accounts is truly impacting your work, let's discuss your workflow, but we can't bypass this control." Your support for security policies matters - if you grant exceptions for convenience, the policy becomes meaningless.

---

**Question 5:**
A team member has been coming to work very early (5am) and staying late (9pm) for the past 3 weeks, which is unusual for them. You also notice they seem withdrawn in team meetings. What should you do?

A) Nothing - people's work schedules are their business
B) Ask them casually if everything is okay
C) Immediately report them to CISO as potential insider threat
D) Check their access logs to see what they're doing

**Correct Answer: B**
**Explanation:** This could be many things - personal issues, major deadline, life events - or it could be concerning. Start with a normal manager conversation: "I've noticed you're keeping unusual hours lately and seem a bit quiet. Is everything okay? Is there something I can help with?" Most likely there's a benign explanation. If the conversation raises concerns (evasive answers, combined with other indicators like financial stress or accessing unusual systems), then escalate to CISO. Don't jump straight to insider threat investigation, but don't ignore it either. Never check access logs yourself - that's for security team.

---

**Question 6:**
You receive an access request from a team member for customer data they've worked with before. The customer engagement ended 4 months ago. They say they "might need to reference old work." What do you do?

A) Approve - they worked on it before, so it's fine
B) Deny - access is not needed for current work
C) Approve but mark it as temporary for 30 days
D) Ask them to explain specifically what they need to reference

**Correct Answer: D (or B, depending on their answer to D)**
**Explanation:** "Might need to reference" is vague. Ask: "What specifically do you need to reference? For what purpose? How often?" If there's a specific legitimate need, consider options: read-only access, time-limited access, or providing them the specific information they need without granting system access. If they can't articulate a clear current business need, deny the request. Past access doesn't justify future access. Apply "need-to-know" principle - they need to currently need it, not might possibly need it.

---

**Question 7:**
During a security incident, the incident response team asks you to not tell your team about it yet because they're still investigating. But your team is asking you what's going on. What do you do?

A) Tell your team everything you know - they have a right to know
B) Follow the incident team's instructions and tell your team you'll update them when you can
C) Tell your team in confidence and ask them not to share further
D) Ignore the incident team's request - your team comes first

**Correct Answer: B**
**Explanation:** During incident response, information control is critical. Premature disclosure can tip off attackers, spread misinformation, or cause unnecessary panic. Trust the incident response team's judgment. Tell your team: "There's a security matter being handled. I'll share what I can when I can. For now, please [specific instructions if any, like change passwords]." Your team may be frustrated by lack of information, but incident response effectiveness is more important. The incident team will clear you to communicate when appropriate.

---

**Question 8:**
A contractor on your team asks for admin access to a customer system for a 6-month project. What additional considerations apply because they're a contractor?

A) None - contractors should be treated the same as employees
B) Require CISO approval, set access expiry date, and ensure NDA is signed
C) Deny automatically - contractors should never have admin access
D) Approve but monitor their access more closely

**Correct Answer: B**
**Explanation:** Contractors require enhanced controls: CISO approval for privileged access, time-limited access with documented end date (tied to contract period), NDA/acceptable use agreement signed, and potentially more frequent review (monthly for long-term contractors). Contractors can have admin access if business requires it, but with additional oversight. Don't treat them identically to employees (higher risk due to shorter tenure, external loyalty), but don't categorically deny reasonable requests either.

---

**Question 9:**
Your team member accidentally emails confidential customer data to the wrong recipient (different customer). They immediately realize the mistake and come to you upset. What's your first step?

A) Reassure them it happens and help them send an apology
B) Escalate to security@swedwise.se immediately
C) Contact the recipient and ask them to delete the email
D) Document the mistake in their performance file

**Correct Answer: B**
**Explanation:** This is a potential data breach and security incident. Even though it was accidental, it must be reported to CISO immediately. The incident response team will assess severity, determine if customer notification is required, if regulatory reporting is needed (GDPR), and coordinate appropriate response. After escalating, you can reassure the team member: "Thank you for telling me immediately. I've reported it to the security team, and they'll coordinate the response. This was an honest mistake, but we need to handle it properly." Don't try to fix it yourself (contacting recipient without coordination) or minimize it.

---

**Question 10:**
You're approving access for a new team member. The standard role template includes access to several systems they won't actually use in their specific role. What should you do?

A) Approve the standard template - that's why it exists
B) Remove the unnecessary access and only approve what they need
C) Approve the template but ask them not to use the systems they don't need
D) Approve now and remove unnecessary access later during the annual review

**Correct Answer: B**
**Explanation:** Principle of least privilege - grant minimum access needed, not maximum available. Role templates are starting points, not rigid requirements. If your new hire's specific role doesn't require certain systems, don't grant access to them. It's easier to add access later if needs change than to remove accumulated inappropriate access. Don't rely on people "not using" access they have - unnecessary access is unnecessary risk. Access reviews are for verifying appropriateness, not for initial cleanup.

---

## Need Help?

**Questions about this training:**
- CISO: [Contact]
- Training Coordinator: [Contact]

**Questions about specific security situations:**
- Email: security@swedwise.se
- CISO: [Phone/email for urgent matters]

**Questions about access management:**
- IT Service Desk: [Contact]
- Access request portal: [Link]

**HR support for policy violations:**
- HR Manager: [Contact]

**Related documents:**
- Access Management Procedure (SW-ISMS-PRO-002)
- Incident Management Procedure (SW-ISMS-PRO-001)
- Security Awareness Training Procedure (SW-ISMS-PRO-009)
- Information Security Policy (SW-ISMS-POL-001)

---

## Key Takeaways

**Remember these core principles:**

1. **You set the security culture** for your team through your actions and decisions
2. **Access decisions matter** - approve thoughtfully, review regularly, revoke promptly
3. **When in doubt, escalate** - better to ask than to guess wrong
4. **Support your team** while enforcing policies - security and people aren't in conflict
5. **Lead by example** - complete training, follow policies, model good behaviors
6. **Report concerns** - insider threats, incidents, policy violations
7. **Security is part of performance** - set expectations, recognize good behavior, address violations
8. **Leavers are critical** - prompt access revocation prevents incidents
9. **No exceptions for convenience** - policies exist for reasons
10. **Learning organization** - honest mistakes are learning opportunities, deliberate violations are performance issues

**Your role as a manager is critical to our security posture. Thank you for taking this responsibility seriously.**

---

*This training material is part of Swedwise AB's ISO 27001-certified Integrated Management System. All managers are required to complete this training upon assuming management responsibilities and annually thereafter.*

**Document Classification**: Internal
**Owner**: CISO
**Next Review**: [TBD]
