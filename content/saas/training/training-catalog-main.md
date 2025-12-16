---
document_id: SW-SAAS-TRN-001
title: Swedwise SaaS Platform - Training Catalog
doc_type: training
version: "1.0"
status: draft
classification: internal
owner: Training Manager
component: general
effective_date: 2025-01-15
review_date: 2025-07-15
related_documents:
  - SW-SAAS-SVC-001
  - SW-SAAS-TRN-COMP-001
  - SW-SAAS-TRN-COMP-002
---

# Swedwise SaaS Platform - Training Catalog

## Document Control

**Document ID:** SW-SAAS-TRN-001
**Version:** 1.0
**Status:** Draft
**Owner:** Training Manager
**Effective Date:** 2025-01-15

---

## 1. Training Overview

### 1.1 Training Philosophy

At Swedwise, we believe in empowering our customers to maximize the value of our SaaS platform through comprehensive, practical training. Our training approach reflects our brand promise: "Make Time For The Good."

**Our Training Principles:**

- **Efficiency First** - Focused, practical content that respects your time
- **Role-Based Learning** - Tailored to specific job functions and responsibilities
- **Hands-On Practice** - Real scenarios and exercises using actual platform features
- **Ongoing Support** - Training doesn't end after the first session; continuous learning resources available
- **Flexible Delivery** - Multiple formats to fit your organization's needs and schedules

### 1.2 Delivery Methods

**Instructor-Led Training (ILT)**
- Live sessions with certified Swedwise trainers
- Interactive Q&A and discussion
- Available on-site or virtually
- Maximum class size: 12 participants for optimal interaction

**Self-Paced Learning**
- On-demand video tutorials
- Interactive documentation
- Practice environments
- Learn at your own pace, on your schedule

**Virtual Instructor-Led Training (VILT)**
- Live remote sessions via video conference
- Same quality as on-site training
- Reduced travel time and costs
- Screen sharing and hands-on exercises

**Blended Learning**
- Combination of self-paced preparation and instructor-led sessions
- Maximizes efficiency of instructor time
- Recommended for complex topics

### 1.3 Certification Options

Swedwise offers certification programs for key roles:

- **Certified Platform Administrator** - Platform-wide administration skills
- **Certified Template Designer** - Document template development expertise
- **Certified Integration Developer** - API integration and development skills

Certifications require:
- Completion of required training courses
- Passing score (80%) on certification exam
- Valid for 2 years (recertification available)

---

## 2. Training Audiences

### 2.1 Administrators

**Who:** IT staff responsible for platform configuration, user management, and security

**Key Responsibilities:**
- Tenant configuration and settings
- User and role management
- Security and access control
- Monitoring and basic troubleshooting

**Recommended Training Path:**
1. Platform Orientation (2 hours)
2. Platform Administration Fundamentals (4 hours)
3. Component-specific administration courses
4. Advanced Security and Access Control (3 hours)

### 2.2 Template Designers

**Who:** Business analysts, technical writers, or developers who create document templates

**Key Responsibilities:**
- Design and develop document templates
- Implement business logic in templates
- Test and validate template output
- Maintain template libraries

**Recommended Training Path:**
1. Platform Orientation (2 hours)
2. Template Designer Fundamentals (8 hours)
3. Advanced Template Development (8 hours)
4. Template Best Practices (4 hours)
5. Certification exam (optional)

### 2.3 Developers/Integrators

**Who:** Software developers integrating the platform with other systems

**Key Responsibilities:**
- API integration development
- Data mapping and transformation
- Error handling and logging
- Performance optimization

**Recommended Training Path:**
1. Platform Orientation (2 hours)
2. API Fundamentals (4 hours)
3. Component-specific API courses
4. Integration Patterns and Best Practices (4 hours)
5. Certification exam (optional)

### 2.4 End Users

**Who:** Staff who use the platform for their daily work

**Key Responsibilities:**
- Generate documents or send notifications
- Track delivery status
- Basic troubleshooting
- Report issues

**Recommended Training:**
1. Platform Orientation (2 hours)
2. Component-specific end user training

### 2.5 Managers

**Who:** Business leaders overseeing platform usage

**Key Focus:**
- Platform capabilities and business value
- Usage monitoring and reporting
- ROI tracking
- Strategic planning for expansion

**Recommended Training:**
1. Executive Overview (1 hour)
2. Reporting and Analytics (2 hours)

---

## 3. Platform Training (Applies to All Components)

### 3.1 Platform Orientation

**Course ID:** PLAT-ORI-001
**Duration:** 2 hours
**Format:** VILT or self-paced
**Target Audience:** All users

**Learning Objectives:**
- Understand the Swedwise SaaS platform architecture
- Navigate the platform interface
- Understand multi-tenancy concepts
- Access support and documentation resources

**Topics Covered:**
- Platform overview and components
- User interface navigation
- Tenant structure and isolation
- Security model overview
- Support portal usage
- Documentation and resources

**Prerequisites:** None

**Included in:** Standard onboarding package

---

### 3.2 Platform Administration Fundamentals

**Course ID:** PLAT-ADM-001
**Duration:** 4 hours
**Format:** ILT or VILT
**Target Audience:** System administrators

**Learning Objectives:**
- Configure tenant-level settings
- Manage users, roles, and permissions
- Configure authentication and SSO
- Monitor platform health and usage
- Perform basic troubleshooting

**Topics Covered:**
- Tenant configuration console
- User management and provisioning
- Role-based access control (RBAC)
- SSO configuration (SAML, OAuth)
- Usage monitoring and dashboards
- Audit logs and compliance
- Support ticket management
- Basic troubleshooting procedures

**Prerequisites:** PLAT-ORI-001

**Included in:** Standard onboarding package (1 session)

**Hands-On Labs:**
- Lab 1: Create and manage users
- Lab 2: Configure roles and permissions
- Lab 3: Set up SSO integration
- Lab 4: Review audit logs and usage reports

---

### 3.3 Advanced Security and Access Control

**Course ID:** PLAT-SEC-001
**Duration:** 3 hours
**Format:** ILT or VILT
**Target Audience:** Security administrators, compliance officers

**Learning Objectives:**
- Implement security best practices
- Configure advanced access controls
- Manage API keys and secrets
- Ensure compliance with security policies
- Respond to security events

**Topics Covered:**
- Security architecture overview
- Multi-factor authentication (MFA)
- API authentication and authorization
- Secret management and rotation
- Network security controls
- Data encryption (at rest and in transit)
- Security monitoring and alerts
- Incident response procedures
- Compliance reporting (GDPR, ISO 27001)

**Prerequisites:** PLAT-ADM-001

**Cost:** Additional (not included in standard onboarding)

**Hands-On Labs:**
- Lab 1: Enable and test MFA
- Lab 2: Configure API key policies
- Lab 3: Review security audit logs
- Lab 4: Generate compliance reports

---

### 3.4 Platform Integration Basics

**Course ID:** PLAT-INT-001
**Duration:** 4 hours
**Format:** ILT or VILT
**Target Audience:** Developers, integration specialists

**Learning Objectives:**
- Understand platform API architecture
- Implement authentication for API access
- Handle common integration patterns
- Implement error handling and retry logic
- Monitor integration health

**Topics Covered:**
- API architecture and design principles
- RESTful API fundamentals
- Authentication methods (API keys, OAuth)
- Rate limiting and throttling
- Webhook configuration
- Common integration patterns
- Error handling and logging
- Testing and debugging integrations
- Performance optimization

**Prerequisites:** PLAT-ORI-001, basic programming knowledge

**Included in:** Standard onboarding package for technical users

**Hands-On Labs:**
- Lab 1: Authenticate and make first API call
- Lab 2: Implement error handling
- Lab 3: Configure and test webhooks
- Lab 4: Monitor integration performance

---

## 4. Training Delivery Options

### 4.1 Standard Training (Included in Onboarding)

Every new customer receives the following training as part of their onboarding package:

**Included Sessions:**
- Platform Orientation (2 hours) - Up to 20 participants
- Platform Administration Fundamentals (4 hours) - Up to 6 administrators
- Component-specific training (varies by component) - Up to 12 participants per component

**Delivery Window:** Within first 30 days of service activation

**Format:** Virtual instructor-led (VILT) by default; on-site available for additional fee

**Scheduling:** Coordinated during onboarding kickoff

---

### 4.2 Additional Training Sessions

Customers can purchase additional training sessions beyond the standard onboarding package.

**Pricing:**
- Half-day session (up to 4 hours): 12,000 SEK
- Full-day session (up to 8 hours): 20,000 SEK
- Multi-day workshops: Custom pricing

**Includes:**
- Certified instructor
- Training materials
- Access to practice environment
- Course completion certificates

**Does NOT include:**
- Travel expenses (for on-site training)
- Custom content development

---

### 4.3 On-Site Training

Swedwise trainers can deliver training at your location.

**Best For:**
- Large groups (15+ participants)
- Organizations with limited remote capabilities
- Highly customized training needs

**Additional Costs:**
- Trainer travel time: 1,500 SEK/hour
- Travel expenses (flights, accommodation, meals): At cost
- On-site facilities and equipment: Customer responsibility

**Minimum:** Full-day engagement (8 hours)

---

### 4.4 Virtual Training (VILT)

Live, interactive training delivered via video conference.

**Benefits:**
- No travel costs
- Flexible scheduling
- Same quality as on-site
- Record sessions for future reference

**Requirements:**
- Stable internet connection (minimum 5 Mbps)
- Video conferencing capability (Teams, Zoom, Google Meet)
- Headset with microphone (recommended)
- Dual monitors (recommended for hands-on exercises)

**Platform:** Customer's preferred video conferencing tool

---

### 4.5 Self-Paced Learning

Access to on-demand training materials.

**Included with Subscription:**
- Video tutorial library
- Interactive documentation
- Knowledge base articles
- Practice environment access

**Available 24/7 via Customer Portal**

**Content Updated:** Quarterly with new features and improvements

---

## 5. Training Schedule

### 5.1 Onboarding Training

Scheduled during onboarding process, typically delivered within first 30 days of service activation.

**Timeline:**
- **Week 1:** Platform Orientation
- **Week 2:** Administrator training
- **Week 3-4:** Component-specific training

**Scheduling:** Coordinated by Customer Success Manager

---

### 5.2 Regular Training Calendar

Swedwise offers open enrollment training sessions throughout the year.

**Quarterly Public Sessions:**
- Platform Administration Fundamentals
- Template Designer Fundamentals
- API Integration Basics

**Monthly Webinars:**
- New features and updates (1 hour)
- Tips and tricks series (1 hour)
- Q&A sessions (1 hour)

**Schedule Published:** 90 days in advance via customer portal

**Registration:** First-come, first-served; maximum 12 participants per session

**Cost:** Included with active subscription

---

### 5.3 Custom Training Requests

Organizations can request custom training sessions tailored to their specific needs.

**Request Process:**
1. Submit request via customer portal
2. Schedule consultation with Training Manager
3. Define scope, audience, and objectives
4. Receive proposal with timeline and pricing
5. Schedule and deliver training

**Lead Time:** Minimum 4 weeks for custom content development

**Pricing:** Based on complexity and duration; starts at 25,000 SEK

---

## 6. Training Materials

### 6.1 Documentation

**User Guides:**
- Step-by-step instructions for common tasks
- Searchable and indexed
- Available in PDF and online formats

**API Documentation:**
- Complete API reference
- Code examples in multiple languages
- Interactive API explorer

**Administrator Guides:**
- Configuration references
- Troubleshooting guides
- Best practices

**Access:** Customer portal (credentials required)

---

### 6.2 Video Tutorials

**Tutorial Library Includes:**
- Feature overviews (5-10 minutes)
- How-to videos (10-20 minutes)
- Advanced techniques (20-30 minutes)
- Recorded webinars

**Format:** High-quality screen recordings with narration

**Languages:** English (Swedish subtitles available for key content)

**Access:** Customer portal, YouTube (public content)

---

### 6.3 Hands-On Labs

**Practice Environment:**
- Isolated sandbox tenant for training
- Pre-loaded with sample data
- Safe to experiment without affecting production
- Reset capability

**Lab Exercises:**
- Step-by-step guided exercises
- Challenge scenarios
- Answer keys and solutions

**Access:** Provided during instructor-led training; available for self-paced learners upon request

---

### 6.4 Quick Reference Guides

**Format:** Single-page PDF or laminated cards

**Content:**
- Common keyboard shortcuts
- Frequently used procedures
- Troubleshooting checklist
- Support contact information

**Use Cases:** Desk reference for daily work

---

## 7. Certification Program

### 7.1 Certified Platform Administrator

**Prerequisites:**
- Completion of PLAT-ADM-001
- Component-specific administrator training
- 3 months platform administration experience (recommended)

**Exam Format:**
- 60 multiple-choice questions
- 90 minutes
- Passing score: 80%
- Online proctored

**Exam Fee:** 3,000 SEK

**Validity:** 2 years

**Recertification:**
- Complete recertification exam (reduced scope)
- Or complete advanced training course + project submission

---

### 7.2 Certified Template Designer

**Prerequisites:**
- Completion of CN-DES-001 and CN-DES-002
- Submission of portfolio (3 template examples)
- 6 months template design experience (recommended)

**Exam Format:**
- Practical exam: Design template to specification (4 hours)
- Written exam: 40 multiple-choice questions (60 minutes)
- Passing score: 80% on both components

**Exam Fee:** 5,000 SEK

**Validity:** 2 years

**Recertification:**
- Submit updated portfolio
- Complete advanced topics course

---

### 7.3 Certified Integration Developer

**Prerequisites:**
- Completion of PLAT-INT-001 and component API courses
- Submission of code samples
- Programming proficiency in at least one language

**Exam Format:**
- Practical exam: Build integration to specification (4 hours)
- Written exam: 40 multiple-choice questions (60 minutes)
- Passing score: 80% on both components

**Exam Fee:** 5,000 SEK

**Validity:** 2 years

**Recertification:**
- Submit new integration project
- Complete API updates course

---

### 7.4 Certification Benefits

**For Individuals:**
- Industry-recognized credential
- Digital badge for LinkedIn and email signature
- Listed in Swedwise certified professional directory
- Priority access to beta features and early training

**For Organizations:**
- Demonstrated expertise
- Reduced support incidents
- Faster onboarding of new team members
- Eligibility for partner program (if applicable)

---

## 8. Component-Specific Training

Detailed training for each platform component is documented separately.

### 8.1 Communications Training

**Document:** SW-SAAS-TRN-COMP-001

**Available Courses:**
- Template Designer Fundamentals (8 hours)
- Advanced Template Development (8 hours)
- Document Generation API (4 hours)
- Integration Patterns (4 hours)

**Target Roles:**
- Template Designers
- Document Specialists
- Integration Developers
- Administrators

**See:** [Training Guide - Communications](./training-communications.md)

---

### 8.2 Notifications Training

**Document:** SW-SAAS-TRN-COMP-002

**Available Courses:**
- Notifications API (4 hours)
- Email Channel Configuration (2 hours)
- SMS Channel Configuration (2 hours)
- Delivery Tracking and Analytics (2 hours)

**Target Roles:**
- Integration Developers
- Administrators
- Operations Staff

**See:** [Training Guide - Notifications](./training-notifications.md)

---

### 8.3 Future Component Training

As additional components are added to the platform (e.g., Asset Management, E-Archive, eSign), component-specific training guides will be created following the same structure.

**Planned Components:**
- Asset Management Training (Q3 2025)
- E-Archive Training (Q4 2025)
- eSign Integration Training (Q1 2026)

---

## 9. Training Request Process

### 9.1 Standard Training (Included in Onboarding)

**Process:**
1. Customer Success Manager schedules initial training consultation
2. Identify training audiences and requirements
3. Schedule training sessions (within 30 days of activation)
4. Send calendar invites and pre-work materials
5. Deliver training
6. Collect feedback and provide certificates

**Timeline:** Coordinated during onboarding kickoff

---

### 9.2 Additional Training Sessions

**Process:**
1. Submit training request via customer portal
2. Training coordinator contacts you within 2 business days
3. Discuss requirements, audience, and objectives
4. Receive proposal with date options and pricing
5. Confirm booking and submit purchase order
6. Receive confirmation and pre-work materials
7. Attend training
8. Receive certificates and follow-up materials

**Lead Time:** Minimum 2 weeks for standard courses; 4 weeks for custom training

---

### 9.3 Custom Training Development

**Process:**
1. Submit custom training request via customer portal
2. Schedule consultation with Training Manager
3. Define detailed requirements:
   - Training objectives
   - Target audience and skill level
   - Desired duration and format
   - Specific content requirements
   - Success criteria
4. Receive detailed proposal including:
   - Content outline
   - Timeline for development and delivery
   - Pricing
   - Terms and conditions
5. Review and approve proposal
6. Development phase (regular checkpoints)
7. Review draft materials
8. Deliver pilot session (optional)
9. Finalize and deliver training
10. Post-training evaluation

**Lead Time:** Minimum 6 weeks for custom training development

**Pricing:** Starts at 25,000 SEK; varies based on complexity

---

## 10. Training Support and Resources

### 10.1 Customer Portal

**URL:** portal.swedwise.se

**Training Resources Available:**
- Training catalog and course descriptions
- Self-paced learning materials
- Video tutorial library
- Documentation and guides
- Training request form
- Training history and certificates

**Access:** All customer users (credentials provided during onboarding)

---

### 10.2 Training Coordinator Contact

**For Training Inquiries:**
- **Email:** training@swedwise.se
- **Phone:** +46 (0)54-21 10 00
- **Portal:** Submit request via customer portal

**Response Time:**
- Email/Portal: Within 2 business days
- Phone: Monday-Friday, 08:00-17:00 CET

---

### 10.3 Training Feedback

We continuously improve our training based on customer feedback.

**How to Provide Feedback:**
- Post-training survey (sent automatically)
- Email to training@swedwise.se
- Customer portal feedback form
- Discuss with Customer Success Manager

**We Track:**
- Training effectiveness ratings
- Content relevance scores
- Instructor performance
- Suggested improvements

**Your Feedback Helps Us:**
- Update and improve course content
- Develop new training offerings
- Recognize outstanding instructors
- Prioritize training investments

---

## 11. Training Best Practices

### 11.1 For Organizations

**Before Training:**
- Clearly identify training needs by role
- Select appropriate participants
- Ensure participants have necessary access/credentials
- Review pre-work materials
- Prepare questions

**During Training:**
- Minimize distractions
- Actively participate in exercises
- Ask questions
- Take notes
- Experiment in practice environment

**After Training:**
- Review materials and recordings
- Practice new skills immediately
- Share knowledge with team
- Provide feedback
- Schedule follow-up if needed

---

### 11.2 For Administrators

**Onboarding New Staff:**
1. Assign self-paced orientation course
2. Provide access to practice environment
3. Schedule role-specific training
4. Pair with experienced mentor
5. Set 30-day check-in
6. Encourage certification (if applicable)

**Ongoing Learning:**
- Schedule quarterly refresher sessions
- Share new feature announcements
- Rotate team members through advanced courses
- Encourage peer knowledge sharing
- Track training completion and certifications

---

### 11.3 For Individuals

**Maximizing Training Value:**
- Complete pre-work before sessions
- Set up dual monitors for hands-on exercises
- Use a headset for better audio quality
- Take notes using your own method
- Practice immediately after training
- Build a personal reference library
- Connect with other users (community forums)
- Stay current with platform updates

---

## 12. Training Metrics and Reporting

### 12.1 Available Reports

Administrators can access training reports via the customer portal:

**User Training Status:**
- Courses completed per user
- Certification status
- Training hours
- Completion dates

**Organization Training Summary:**
- Total training hours consumed
- Courses completed by type
- Certification holders
- Training satisfaction scores

**Training ROI:**
- Support ticket volume (before/after training)
- Feature adoption rates
- User satisfaction scores

**Access:** Available to administrators via customer portal

---

## 13. Frequently Asked Questions

**Q: Is training included in our subscription?**
A: Standard onboarding training is included. Additional training sessions and certifications are available for additional fees.

**Q: Can training be delivered in Swedish?**
A: Primary training is delivered in English. Swedish-language training can be arranged for additional fee (subject to instructor availability).

**Q: What if we can't attend scheduled training?**
A: Contact training@swedwise.se at least 5 business days before scheduled session to reschedule at no charge. Late cancellations may incur fees.

**Q: Can we record training sessions?**
A: Yes, with instructor permission. Standard VILT sessions are recorded and shared via customer portal.

**Q: Do you offer on-site training outside Sweden?**
A: Yes, on-site training is available in Nordic countries. Contact training coordinator for pricing and availability.

**Q: How do we access the practice environment?**
A: Practice environment credentials are provided during instructor-led training. Contact support@swedwise.se to request self-paced access.

**Q: Can we use our own training materials?**
A: You may supplement Swedwise training with your own materials. We cannot provide support for custom content.

**Q: What happens if we fail a certification exam?**
A: You can retake the exam after 30 days. Up to 3 attempts per year are allowed. Additional study materials will be provided.

**Q: Do training hours count toward our support package?**
A: No, training is separate from technical support. Training hours do not consume support ticket allocations.

**Q: Can we get training on custom integrations?**
A: Yes, custom training can be developed for your specific integrations. Contact training coordinator for scope and pricing.

---

## Document Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-15 | Training Manager | Initial draft |

---

**For Training Inquiries:** training@swedwise.se | +46 (0)54-21 10 00
