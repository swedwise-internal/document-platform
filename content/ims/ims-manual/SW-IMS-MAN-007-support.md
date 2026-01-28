---
document_id: SW-IMS-MAN-007
title: "IMS Manual - Clause 7: Support"
doc_type: ims-manual
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: "[TBD]"
review_date: "[TBD]"
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
  - SW-IMS-PRO-001
  - SW-IMS-PRO-007
  - SW-IMS-PRO-012
---

# IMS Manual - Clause 7: Support

## Purpose

This section of the IMS Manual describes how Swedwise provides and manages resources, competence, awareness, communication, and documented information to support effective operation of the Integrated Management System. It demonstrates compliance with Clause 7 requirements of ISO 9001:2015, ISO 14001:2015, and ISO 27001:2022.

## Scope

This manual section covers:
- Resources (people, infrastructure, environment, monitoring/measuring, organizational knowledge)
- Competence determination and development
- Awareness programs
- Internal and external communication
- Documented information creation, control, and retention

## 7.1 Resources

### 7.1.1 General Resource Management

Swedwise determines and provides resources necessary for establishing, implementing, maintaining, and continually improving the Integrated Management System. Resource planning considers:

**Current Capabilities and Limitations**:
- Workforce size (~35 employees) and distribution (3 offices: Karlstad HQ, Stockholm, Uddevalla)
- Skill mix and technical competencies (discipline forums: OpenText, Salesforce, Microsoft, etc.)
- Financial resources and budget constraints
- Existing infrastructure and technology
- Supplier and partner capabilities

**External Provider Resources**:
- OpenText (software licensing partner)
- Entiros AB (SaaS data center and hosting)
- Cloud service providers (infrastructure)
- External consultants and specialists (as needed)
- Certification bodies (ISO audits)

**Resource Planning Process**:
- **Annual Planning**: Resources planned as part of business planning cycle (budget, headcount, infrastructure)
- **Quarterly Review**: Resource adequacy reviewed in management review
- **On-Demand**: Resources allocated for specific projects, incidents, or initiatives
- **Optimization**: Continuous improvement of resource utilization

**Resource Allocation Priorities**:
1. **Mandatory IMS Requirements**: Compliance, audits, essential controls
2. **Customer Commitments**: Service delivery, SLAs, project obligations
3. **Risk Mitigation**: Addressing high and critical risks
4. **Strategic Objectives**: Supporting IMS objectives and improvement
5. **Innovation and Growth**: New services, competence development

**Resource Constraints**:
Swedwise recognizes that as a ~35-person organization, resources are limited. IMS is designed to be:
- **Proportionate**: Controls and processes fit organizational size
- **Efficient**: Integrated approach avoids duplication across quality/environmental/security
- **Pragmatic**: Focus on highest-impact activities
- **Scalable**: Able to grow with organization

When resource constraints arise:
- Prioritize based on risk and impact
- Leverage external resources (consultants, tools, suppliers)
- Defer lower-priority initiatives
- Escalate to Management Team for decision

### 7.1.2 People (Human Resources)

**Workforce Composition**:

Swedwise's ~35 employees comprise:

**Customer-Facing Roles** (~60-70% of workforce):
- **Consultants**: Implementing solutions at customer sites (primary service delivery)
- **Sales and Customer Acquisition**: New customer engagement
- **Customer Success**: Account management, customer retention, onboarding
- **Project Managers**: Customer project delivery leadership

**Internal Support Roles** (~20-30% of workforce):
- **SaaS Operations** (emerging): Platform operations, monitoring, customer support for SaaS services
- **Resource Management**: Allocation, scheduling, capacity planning
- **Finance and Administration**: Invoicing, accounting, contracts
- **IT Support**: Internal systems, infrastructure
- **Management Team**: Strategic leadership, decision-making

**IMS Roles** (assigned responsibilities, not full-time dedicated):
- **IMS Owner**: Overall IMS coordination
- **CISO**: Information security management
- **Quality Lead**: Quality management coordination
- **Environmental Lead**: Environmental management coordination

**Workforce Characteristics**:
- Externally-focused (consultants often at customer sites, sales traveling)
- Highly skilled and certified (technical expertise is core value)
- Autonomous (learning organization culture; self-organizing teams)
- Distributed (3 offices + remote workers + on-site at customers)

**Human Resource Planning**:

**Competence-Based Recruitment**:
- Role competence profiles define requirements (see Section 7.2)
- Recruitment considers both technical skills and cultural fit ("Make Time For The Good")
- Discipline forum membership considered (ensuring knowledge communities are sustained)

**Capacity Management**:
- Resource Management team balances consultant availability with customer demand
- Utilization targets set (e.g., 80% billable for consultants)
- Bench time used for training, IMS activities, internal projects

**Retention**:
- Competitive compensation and benefits
- Professional development opportunities
- Learning organization culture and autonomy
- Recognition and career progression

**Succession Planning**:
- Key roles identified (critical to IMS or business operations)
- Backup personnel cross-trained
- Knowledge transfer and documentation encouraged
- Discipline forums mitigate risk of single-person dependencies

**Contractor and Temporary Staff**:
- Used to augment capacity during peak periods
- Subject to same IMS requirements (security awareness, data handling, etc.)
- Managed by Department Heads with HR coordination

### 7.1.3 Infrastructure

Swedwise provides and maintains infrastructure necessary for IMS operation and service delivery.

**Physical Infrastructure**:

**Offices** (3 locations):
- **Karlstad** (Head Office): Administrative functions, some consultants
- **Stockholm**: Sales, customer-facing staff, consultants
- **Uddevalla**: Consultants

**Office Facilities**:
- Workspaces (mix of individual desks and collaborative areas)
- Meeting rooms (equipped with video conferencing)
- Break areas and kitchens
- Secure storage for equipment and documents
- Adequate heating, cooling, lighting, ventilation

**Physical Security**:
- Access control (keycards or keys; office building security)
- Visitor sign-in procedures
- Secure areas for sensitive equipment or documents (if needed)
- Fire detection and suppression systems (building-provided)

**IT Infrastructure**:

**End-User Devices**:
- Laptops for all staff (Windows or Mac as per role requirements)
- Mobile phones (for key roles)
- Monitors, docking stations (for office use)
- Peripherals (headsets, webcams for remote work)

**Network and Connectivity**:
- Office networks (wired and Wi-Fi)
- Internet connectivity (redundant where feasible)
- VPN for remote access to internal resources
- Firewall and network security controls

**IT Systems and Applications**:
- **Microsoft 365**: Email, collaboration (Teams, SharePoint), productivity (Word, Excel, PowerPoint)
- **CRM System**: [TBD - customer relationship management]
- **ERP/Finance System**: [TBD - accounting, invoicing]
- **Document Management**: SharePoint and/or Git repository (for IMS documentation)
- **Project Management Tools**: [TBD - e.g., Jira, Azure DevOps]
- **Monitoring and Security Tools**: [TBD - for SaaS operations]

**SaaS Platform Infrastructure** (Swedwise Communications):
- Hosted at Entiros AB data center (Tier III, Sweden)
- Kubernetes cluster for container orchestration
- Database servers (PostgreSQL or as required)
- Load balancers and networking
- Monitoring and logging infrastructure
- Backup and disaster recovery systems

**Cloud Infrastructure**:
- Public cloud services (AWS, Azure, or Google Cloud) for specific workloads
- Infrastructure-as-code for consistency and recovery
- Managed services to optimize resources

**Infrastructure Maintenance**:

**Preventive Maintenance**:
- Office facilities maintained by building management or landlord
- IT equipment refresh cycle (laptops: every 3-4 years; servers: as needed)
- Software updates and patching (regular schedule per Change Management Procedure)

**Monitoring**:
- Office environment monitored for comfort and safety
- IT systems monitored for availability and performance
- SaaS platform monitoring (uptime, response time, capacity, errors)

**Capacity Planning**:
- Office space reviewed annually; additional space acquired if headcount growth requires
- IT capacity (network bandwidth, storage, compute) reviewed quarterly
- SaaS platform capacity monitored continuously; scaled as customer load increases

**Incident Response**:
- Infrastructure failures addressed per Incident Management Procedure (SW-IMS-PRO-003)
- Business continuity plans for critical infrastructure outages

**Environmental Considerations**:
- Energy-efficient equipment preferred (laptops vs. desktops; LED lighting)
- Equipment lifecycle managed (reuse, refurbishment, responsible disposal)
- Remote work infrastructure reduces office energy consumption

### 7.1.4 Environment for the Operation of Processes

Swedwise provides a suitable environment for operating processes and delivering services.

**Physical Environment**:

**Office Environment**:
- Comfortable temperature and humidity (climate control)
- Adequate lighting (natural and artificial)
- Low noise levels (quiet zones for focus work)
- Ergonomic furniture (adjustable desks and chairs)
- Clean and well-maintained facilities

**Health and Safety**:
- Compliance with Swedish workplace health and safety regulations (Arbetsmiljölagen)
- Risk assessments for office hazards (slips, trips, ergonomics)
- Fire safety (alarms, extinguishers, evacuation plans)
- First aid kits and trained first-aiders

**Accessibility**:
- Offices accessible to persons with disabilities (as per building standards)
- Accommodations provided as needed

**Psychosocial Environment**:

Swedwise fosters a positive psychosocial environment aligned with "Make Time For The Good" and learning organization culture:

**Autonomy and Trust**:
- Staff empowered to make decisions within their roles
- Flexible work arrangements (remote work, flexible hours)
- Focus on outcomes, not micromanagement

**Collaboration and Support**:
- Discipline forums for peer support and knowledge sharing
- Open communication (accessible management, open-door policy)
- Team-based delivery and problem-solving

**Work-Life Balance**:
- Reasonable workload and expectations
- Vacation and time-off policies respected
- Avoiding burnout (especially for consultants on demanding customer projects)

**Recognition and Development**:
- Achievements recognized (publicly and privately)
- Professional development supported (training, certifications, conferences)
- Career progression opportunities

**Remote Work Environment**:

With consultants often at customer sites and remote work common:

**Remote Work Support**:
- Laptops and mobile devices provided
- VPN and secure access to Swedwise systems
- Collaboration tools (Teams, email, chat)
- Reimbursement or stipend for home office setup (if policy exists)

**Remote Work Expectations**:
- Maintain security (device encryption, strong passwords, VPN use)
- Availability during agreed working hours
- Participation in team meetings and discipline forums
- Communication and responsiveness

**Customer Site Environment**:

Consultants working at customer sites:

**Adaptation to Customer Environment**:
- Adapt to customer facilities and working conditions
- Follow customer site policies (security, health and safety, conduct)
- Maintain Swedwise standards and values while respecting customer culture

**Support for On-Site Consultants**:
- Regular check-ins with manager or Resource Management
- Access to Swedwise support (IT help desk, HR, IMS Owner)
- Discipline forum participation (virtual)
- Return to Swedwise office periodically (team connection, training)

### 7.1.5 Monitoring and Measuring Resources

Swedwise ensures resources used for monitoring and measuring IMS performance are suitable and maintained.

**Types of Monitoring and Measurement**:

**Performance Metrics**:
- Customer satisfaction (surveys, NPS)
- Service delivery metrics (project on-time delivery, SaaS uptime)
- Environmental metrics (energy consumption, travel emissions)
- Security metrics (incidents, vulnerabilities, training completion)
- IMS objectives progress (see Clause 6.2)

**Monitoring Tools and Systems**:

**IT and SaaS Monitoring**:
- **Uptime Monitoring**: External service (e.g., Pingdom, UptimeRobot) verifying SaaS availability
- **Application Performance Monitoring (APM)**: Tracking response times, errors, resource utilization
- **Log Aggregation**: Centralized logging for troubleshooting and security analysis
- **Security Monitoring**: Intrusion detection, vulnerability scanning, log analysis

**Environmental Monitoring**:
- **Energy Meters**: Utility bills analyzed for office energy consumption
- **Travel Tracking**: Booking systems or expense reports capturing travel (distance, mode)
- **Carbon Calculation Tools**: Converting activities to CO2 equivalents

**Quality and Customer Metrics**:
- **Customer Surveys**: Satisfaction surveys administered via email or online forms
- **CRM System**: Tracking customer interactions, issues, retention
- **Project Management Tools**: Tracking project milestones, budget, delivery

**IMS Process Metrics**:
- **Incident Log**: Number and severity of incidents (quality, security, environmental)
- **Audit Findings**: Non-conformities and observations from internal/external audits
- **Training Records**: Completion rates and effectiveness scores (LMS or spreadsheet)
- **Risk Register**: Risk scores and treatment status

**Suitability and Accuracy**:

Monitoring and measuring resources are:

**Appropriate to Activities**:
- Metrics align with what needs to be measured (objectives, risks, compliance)
- Tools have adequate precision (e.g., energy meters, time tracking granularity)

**Calibrated and Verified** (where applicable):
- Measurement equipment calibrated per manufacturer recommendations or standards
- Data sources verified for accuracy (cross-checks, audits)
- Manual data collection subject to review and validation

**Maintained**:
- Monitoring tools and systems kept operational (patching, updates, support contracts)
- Failures or gaps in monitoring identified and remediated quickly

**Records of Monitoring Resources**:
- Inventory of monitoring/measuring tools and systems
- Calibration records (if applicable, e.g., specialized environmental sensors)
- Validation or verification evidence (e.g., audit of data accuracy)

**Review**:
- Adequacy of monitoring/measuring resources reviewed in management review
- New monitoring needs identified (e.g., for new objectives or services)
- Cost-benefit of tools evaluated (avoid over-investing in measurement)

### 7.1.6 Organizational Knowledge

Swedwise recognizes that organizational knowledge is a critical resource for operating processes and achieving conformity of products and services.

**What is Organizational Knowledge?**

Knowledge specific to Swedwise, gained through experience, and used to achieve objectives. Includes:

**Technical Knowledge**:
- Product and platform expertise (OpenText, Salesforce, Microsoft, etc.)
- Implementation methodologies and best practices
- Troubleshooting techniques and common solutions
- Integration patterns and architectures
- Industry-specific knowledge (public sector, financial services, etc.)

**Process Knowledge**:
- How Swedwise delivers projects (methodologies, templates, checklists)
- IMS processes (documented in procedures, but also tacit knowledge)
- Customer onboarding and success practices
- Resource management and allocation approaches

**Customer and Market Knowledge**:
- Customer preferences, pain points, and expectations
- Market trends and competitive landscape
- Regulatory environment (public procurement, GDPR, sector requirements)

**Lessons Learned**:
- Successes and failures from past projects
- Incident post-mortems and root cause analyses
- Audit findings and corrective actions
- Improvement initiatives and their outcomes

**Maintaining Organizational Knowledge**:

**Documentation**:
- **IMS Documentation**: Policies, procedures, guidelines, forms (version-controlled)
- **Knowledge Repositories**: SharePoint, wikis, or shared drives for:
  - Technical documentation (how-to guides, runbooks)
  - Project templates and examples
  - Customer case studies
  - Lessons learned summaries
- **Project Documentation**: Maintained per project management practices

**Discipline Forums**:
- Forums serve as knowledge communities for technical domains
- Monthly sessions for knowledge sharing (presentations, case studies, problem-solving)
- Forum leads curate and maintain domain-specific knowledge bases
- New members onboarded into forums (knowledge transfer)

**Training and Onboarding**:
- New employee induction includes knowledge transfer (culture, processes, tools)
- Mentoring and shadowing for on-the-job learning
- Formal training programs (see Section 7.2)

**Communities of Practice**:
- Informal networks for sharing knowledge (chat channels, coffee chats)
- Cross-functional collaboration (project retrospectives, improvement workshops)

**Knowledge Retention Strategies**:

**Risk of Knowledge Loss**:
- Employee turnover (especially key experts)
- Retirement or role changes
- Organizational growth diluting knowledge concentration

**Mitigation Strategies**:
- **Documentation**: Capture critical knowledge in written form (not relying solely on individuals)
- **Cross-Training**: Multiple people trained in critical areas
- **Succession Planning**: Identifying and developing backups for key roles
- **Exit Interviews**: Capturing knowledge from departing employees
- **Discipline Forums**: Spreading knowledge across forum membership

**Accessing External Knowledge**:

When Swedwise needs knowledge beyond internal capabilities:

**External Sources**:
- **Vendor Training and Certification**: OpenText, Salesforce, Microsoft training programs
- **Industry Conferences and Events**: Staying current with trends and best practices
- **Professional Networks**: Peer organizations, consultants, user groups
- **Online Resources**: Vendor documentation, forums, blogs, courses
- **External Consultants**: Engaging specialists for specific needs
- **Certification Bodies**: Guidance on ISO standards interpretation

**Integrating External Knowledge**:
- Evaluate relevance and applicability to Swedwise
- Adapt to Swedwise context (don't copy-paste; customize)
- Share with relevant teams (discipline forums, all-hands meetings)
- Document and incorporate into knowledge base

**Knowledge for Changing Needs**:

Swedwise proactively identifies knowledge needs driven by:

**New Services**:
- SaaS Communications platform requires cloud operations, Kubernetes, monitoring knowledge
- New product areas (e.g., if adding new platform to portfolio)

**Technological Change**:
- Cloud migration, AI/automation, new development tools
- Security threats and defense techniques

**Regulatory Changes**:
- GDPR, NIS2, environmental regulations, public procurement rules

**Customer Expectations**:
- New industries, geographies, or use cases
- Emerging customer needs (e.g., sustainability reporting)

**Knowledge Gap Analysis**:
- Identify gaps in competence assessments (see Section 7.2)
- Address through training, hiring, or partnerships
- Risk assessment considers knowledge dependencies

## 7.2 Competence

### 7.2.1 Competence Determination

Swedwise determines necessary competencies for personnel performing work affecting IMS performance and service quality.

**Competence Definition**:

Competence is the demonstrated ability to apply knowledge and skills to achieve intended results.

**Competence Requirements Identification**:

**Role-Based Competence Profiles**:

Each role at Swedwise has a defined competence profile specifying required competencies and proficiency levels. Competence profiles consider:

**Core Competencies** (all roles):
- Communication (written, verbal, presentation)
- Customer focus and service orientation
- Collaboration and teamwork
- Learning mindset and adaptability
- Problem-solving and analytical thinking

**Professional/Technical Competencies** (role-specific):
- Product and platform expertise (e.g., OpenText Communications, Salesforce Sales Cloud)
- Implementation methodologies (project management, agile, ITIL)
- Industry knowledge (public sector, financial services)
- Consulting and customer engagement skills
- Technical skills (programming, integration, systems administration)

**Leadership Competencies** (managers and leads):
- People management and coaching
- Strategic thinking and decision-making
- Resource planning and allocation
- Change leadership
- Performance management

**IMS Competencies** (all roles, varying levels):
- Information security awareness
- Environmental awareness
- Quality principles and customer focus
- Data protection (GDPR)
- Specific IMS responsibilities (for IMS Owner, CISO, leads, internal auditors)

**Competence Levels**:

1. **Awareness**: Basic understanding (can explain concepts)
2. **Working Knowledge**: Practical application with guidance
3. **Proficiency**: Independent application and problem-solving
4. **Expert**: Deep expertise; can mentor and innovate

**Example Role Competence Profile**:

**Role**: Senior Consultant - OpenText Communications

**Core Competencies**: Communication (Proficiency), Customer Focus (Proficiency), Learning (Proficiency)

**Technical Competencies**:
- OpenText Communications (Exstream): Proficiency or Expert
- Document composition and design: Proficiency
- Integration and APIs: Working Knowledge
- Project Management: Working Knowledge

**IMS Competencies**:
- Information Security Awareness: Working Knowledge
- GDPR Data Handling: Working Knowledge
- Environmental Awareness: Awareness
- Quality Principles: Working Knowledge

**Certifications**:
- Required: OpenText Communications Certified Professional (or within 12 months of hire)
- Preferred: ITIL Foundation, PRINCE2 Foundation

**Competence Determination Process**:

**New Roles**:
- Department Head creates competence profile with IMS Owner input
- Profile reviewed annually or when role responsibilities change

**Individual Assessment**:
- **New Employees**: Assessed within first month (CV review, interview, skills test)
- **Annual Reviews**: Self-assessment and manager assessment against competence profile
- **Project Assignments**: Verified before customer engagements (do they have required competencies?)

**Records**:
- Individual competence records maintained (qualifications, certifications, training, assessments)
- Competence gaps identified and documented in individual training plans

### 7.2.2 Ensuring Competence

When competence gaps exist, Swedwise takes action to acquire necessary competence and evaluates effectiveness.

**Actions to Acquire Competence**:

**Training and Development**:
- Formal training courses (vendor, external, online)
- On-the-job training (shadowing, mentoring, guided practice)
- Self-study (books, online courses, documentation)
- Certification programs (professional and vendor certifications)
- Discipline forum participation (knowledge sharing, peer learning)

**Recruitment**:
- Hire individuals with required competencies
- Target recruitment to address specific competence gaps

**Reassignment or Redeployment**:
- Assign work to personnel with required competence
- Temporary redeployment to cover gaps

**External Resources**:
- Engage contractors or consultants with specialized competence
- Partner with suppliers or technology vendors

**Competence Development Approach**:

Swedwise follows the **Competence and Training Procedure** (SW-IMS-PRO-012):

**Individual Training Plans**:
- Created for each employee based on competence gaps
- Includes mandatory IMS training and role-specific development
- Tracked and reviewed quarterly with manager

**Organizational Training Plan**:
- Annual plan prioritizing organizational training needs
- Budget allocated for training (centralized and departmental)
- Mandatory training for all staff (security, environmental, GDPR, quality awareness)

**Training Delivery Methods**:
- Classroom/workshops (for complex topics, hands-on practice)
- E-learning (standardized content, flexible timing)
- On-the-job training (practical skills, mentoring)
- Discipline forums (technical expertise sharing)
- Conferences and events (industry trends, networking)

**Effectiveness Evaluation**:

Training effectiveness evaluated at four levels:

**Level 1 - Reaction (Satisfaction)**:
- Post-training surveys
- Target: ≥ 4.0 / 5.0 average rating

**Level 2 - Learning (Knowledge Acquisition)**:
- Assessments, tests, or practical demonstrations
- Mandatory training requires minimum pass score (typically 80%)

**Level 3 - Behavior (Application on the Job)**:
- Manager observation 30-90 days post-training
- Did employee apply learned skills?

**Level 4 - Results (Business Impact)**:
- Measurement of business outcomes linked to training
- Examples: Reduced incidents after security awareness, improved customer satisfaction after service training

**Records**:
- Training completion records (LMS or database)
- Effectiveness evaluation results
- Competence assessment updates reflecting acquired competencies

### 7.2.3 Competence for IMS Roles

Specific competencies required for key IMS roles:

**IMS Owner**:
- Knowledge of ISO 9001, 14001, 27001 requirements
- Risk management and assessment
- Internal audit planning and coordination
- Document control and management systems
- Training facilitation and communication
- Project management and change management

**CISO (Chief Information Security Officer)**:
- Information security principles and practices
- ISO 27001 requirements and Annex A controls
- Risk assessment and treatment (information security)
- Incident response and forensics
- Security technology (firewalls, encryption, monitoring, SIEM)
- GDPR and data protection
- Threat landscape and vulnerability management

**Quality Lead**:
- Quality management principles (ISO 9001)
- Process analysis and improvement
- Customer satisfaction measurement
- Root cause analysis and corrective action
- Quality auditing

**Environmental Lead**:
- Environmental management principles (ISO 14001)
- Environmental aspects and impacts assessment
- Compliance obligations (environmental regulations)
- Carbon footprint calculation
- Sustainability and circular economy concepts

**Internal Auditors**:
- ISO standards knowledge (9001, 14001, 27001)
- Audit techniques (interviewing, sampling, evidence collection)
- Non-conformity identification and reporting
- Objectivity and impartiality
- Communication and reporting skills

**Competence Development for IMS Roles**:
- ISO standards training (courses, certifications like ISO 9001 Lead Auditor)
- Internal auditor training (2-day course minimum)
- Ongoing professional development (conferences, webinars, updates)
- External consultant support (for specialized expertise)

### 7.2.4 Awareness of Competence Requirements

All Swedwise staff are aware of:

- Their role competence requirements (discussed in onboarding and performance reviews)
- Available training and development opportunities
- How to request training (Training Request Form)
- Mandatory training and deadlines
- Consequences of not maintaining competence (impact on performance, career progression, customer delivery)

**Communication**:
- Competence profiles shared with employees
- Training opportunities announced (email, intranet, discipline forums)
- Training dashboard accessible (showing individual completion status)

## 7.3 Awareness

### 7.3.1 IMS Awareness Requirements

Swedwise ensures all personnel are aware of:

**IMS Policy and Objectives**:
- Integrated Management System Policy (SW-IMS-POL-001)
- Quality, Environmental, and Information Security policies
- IMS objectives and targets (organizational and departmental)
- Their contribution to IMS effectiveness

**Benefits of Improved Performance**:
- Customer satisfaction and retention (business success, job security)
- Competitive advantage (quality, security, sustainability)
- Personal benefits (professional development, pride in work, better work environment)
- Environmental benefits (reduced carbon footprint, resource efficiency)

**Implications of Not Conforming**:
- **Customer Impact**: Dissatisfaction, contract loss, complaints
- **Compliance Impact**: Regulatory fines, certification loss, legal liability
- **Security Impact**: Data breaches, service outages, reputational damage
- **Environmental Impact**: Increased pollution, resource waste, regulatory violations
- **Personal Impact**: Performance issues, corrective action, disciplinary measures

**Roles and Contributions**:
- What is expected of each person in their role
- How individual actions affect IMS performance
- Whom to contact for questions or issues (manager, IMS Owner, CISO, etc.)
- How to report incidents, non-conformities, or improvement suggestions

### 7.3.2 Awareness Programs and Communication

**Onboarding and Induction**:

All new employees receive IMS awareness during first month:

**Week 1-2**: IMS Overview
- Welcome to Swedwise: "Make Time For The Good" values and culture
- IMS introduction: What it is, why it matters, how it works
- Quality, environmental, and security policies (overview)
- Where to find documents and policies (intranet, SharePoint, web platform)

**Week 2-3**: Mandatory Training
- Information Security Awareness (SW-IMS-TRN-001): 45 minutes, 80% pass
- Environmental Awareness (SW-IMS-TRN-002): 30 minutes, 75% pass
- Quality and Customer Focus (SW-IMS-TRN-003): 30 minutes, 75% pass
- GDPR and Data Protection (SW-IMS-TRN-004): 60 minutes, 80% pass

**Week 3-4**: Role-Specific Awareness
- Specific IMS responsibilities for role (if applicable)
- Customer data handling requirements
- Discipline forum introduction

**Ongoing Awareness**:

**Annual Refresher Training**:
- Mandatory IMS training repeated annually (security, environmental, quality, GDPR)
- Updates on policy or process changes
- New threats, risks, or compliance requirements

**Awareness Communications**:
- **All-Hands Meetings**: Quarterly IMS performance update from IMS Owner or CEO
- **Email Announcements**: Policy updates, incidents, lessons learned, reminders
- **Intranet/Document Repository**: Policies, procedures, FAQs accessible
- **Posters and Reminders**: Physical or digital reminders (e.g., security tips, environmental tips)
- **Discipline Forums**: IMS topics integrated into technical discussions

**Targeted Awareness Campaigns**:

When specific awareness gaps identified:

**Security Awareness Campaigns**:
- Phishing simulation exercises (quarterly)
- Password security reminders
- Clean desk policy reminders
- Incident reporting procedures

**Environmental Awareness**:
- Travel reduction campaigns (promote virtual meetings)
- Energy saving tips (office behavior)
- E-waste recycling drives
- Earth Day or sustainability initiatives

**Quality Awareness**:
- Customer feedback sharing (celebrate wins, learn from issues)
- Process improvement highlights
- Quality tips and best practices

**Effectiveness Measurement**:

Awareness effectiveness evaluated through:

**Training Completion**:
- Target: 100% completion of mandatory training annually
- Tracked in LMS or training records
- Non-completers reminded and escalated

**Assessment Results**:
- Pass rates on mandatory training quizzes
- Target: ≥80% average pass rate
- Low pass rates indicate content or awareness issues

**Behavioral Indicators**:
- Phishing simulation click rates (awareness translating to behavior)
- Incident reporting rates (staff aware of how to report)
- Improvement suggestions submitted (engagement)
- Audit findings (non-conformities related to awareness gaps)

**Surveys**:
- Annual employee survey includes IMS awareness questions
- "Do you understand the IMS policy?"
- "Do you know how to report an incident?"
- "Do you feel you have the training needed for your role?"

**Continuous Improvement**:
- Awareness programs improved based on effectiveness data
- Lessons learned from incidents (was awareness a factor?)
- Feedback from staff (training evaluations, surveys)

## 7.4 Communication

### 7.4.1 Communication Approach

Swedwise establishes and implements communication processes to ensure relevant information is communicated to and from interested parties (internal and external).

Communication processes are documented in **Communication Procedure** (SW-IMS-PRO-007).

### 7.4.2 Internal Communication

**What is Communicated Internally**:

**IMS Information**:
- Policies, procedures, and process changes
- IMS performance (objectives, metrics, audit results)
- Incidents and non-conformities (lessons learned)
- Improvement initiatives and successes
- Management review decisions

**Operational Information**:
- Project status and customer updates
- Resource allocation and scheduling
- Organizational changes (structure, roles, new services)
- Strategic direction and business performance

**Compliance and Risk Information**:
- Regulatory changes affecting operations
- Risk assessment results and treatment plans
- Compliance obligations and responsibilities

**When and How**:

| Information Type | Frequency | Channel(s) | Responsible |
|------------------|-----------|-----------|-------------|
| IMS Policy Updates | When changed | Email announcement + intranet | IMS Owner |
| Management Review Results | Quarterly | Email summary + all-hands meeting | IMS Owner + CEO |
| Objectives Progress | Quarterly | Dashboard + all-hands meeting | IMS Owner + Dept Heads |
| Incidents (significant) | Immediate | Email + chat + meeting | Incident Manager |
| Process Improvements | As implemented | Email + department meetings | Process Owner |
| Strategic Updates | Quarterly | All-hands meeting | CEO + Management Team |

**Internal Communication Channels**:
- **All-Hands Meetings**: Quarterly, CEO-led, all staff (virtual)
- **Management Team Meetings**: Bi-weekly, strategic and operational decisions
- **Department Meetings**: Weekly/bi-weekly, operational coordination
- **Discipline Forums**: Monthly, technical knowledge sharing
- **Email**: Formal announcements and important notices
- **Microsoft Teams/Chat**: Daily coordination, quick questions
- **Intranet/SharePoint**: Document access, reference information

**Feedback Mechanisms**:

Two-way communication is essential. Employees can provide feedback through:

- **Formal**: Annual surveys, performance reviews, management review input
- **Informal**: Direct conversation with manager, improvement suggestion form (SW-IMS-FRM-002), team retrospectives
- **Anonymous**: Anonymous suggestion box or form (for sensitive issues)

**Response Commitment**:
- Formal suggestions acknowledged within 5 business days
- Decision or action communicated within 30 days

### 7.4.3 External Communication

**What is Communicated Externally**:

**To Customers**:
- Service delivery status (project updates, SaaS performance reports)
- Incidents affecting customers (outages, security events)
- Planned maintenance and changes
- Service improvements and new features
- Satisfaction surveys and feedback requests

**To Suppliers and Partners**:
- Supplier requirements (quality, security, environmental)
- Performance feedback (evaluations, issues)
- Orders and contracts
- Strategic relationship updates (for key partners)

**To Regulatory Authorities**:
- Required reports (environmental, data protection, tax, labor)
- Incident notifications (e.g., GDPR breach within 72 hours)
- Responses to inquiries or investigations

**To Certification Body**:
- Audit scheduling and logistics
- Organizational changes affecting certification scope
- Corrective action evidence
- Recertification applications

**To Interested Parties** (environmental, community):
- Environmental policy and performance (website, sustainability report if published)
- Community involvement (sponsorships, volunteering)

**External Communication Channels**:
- **Email**: Primary channel for most external communication
- **Phone/Video Meetings**: Customer discussions, supplier negotiations
- **Customer Portal or Ticketing System**: SaaS support communication
- **Website**: Public information, environmental policy, recruitment
- **Official Letters/Submissions**: Regulatory reports, certification applications

**Approval and Control**:

Certain external communications require approval:

| Communication Type | Approval Required | Approver |
|--------------------|------------------|----------|
| Customer project updates | No (routine) | Project Manager |
| Significant customer incident | Yes | Customer Success Manager + IMS Owner |
| Regulatory report | Yes | IMS Owner + CEO |
| Press release or media statement | Yes | CEO |
| Environmental report (public) | Yes | Environmental Lead + CEO |
| Certification body correspondence | Yes (formal) | IMS Owner |

**Crisis Communication**:

In crisis situations (major incident, data breach, media attention):
- Crisis team activated (CEO, IMS Owner, CISO, relevant heads)
- Single spokesperson designated (typically CEO)
- Internal staff briefed (what to say, what not to say)
- External communication coordinated and consistent
- Stakeholders informed proactively (customers, authorities, media if warranted)

See Communication Procedure (SW-IMS-PRO-007) Appendix B: Crisis Communication Checklist.

### 7.4.4 Communication for ISO Standards

**ISO 9001 Communication**:
- Internal: Quality policy, objectives, customer feedback, improvement initiatives
- External: Customer requirements, satisfaction surveys, service delivery updates

**ISO 14001 Communication**:
- Internal: Environmental policy, aspects, objectives, responsibilities, awareness
- External: Environmental policy (public), environmental performance (if reported), compliance with authorities

**ISO 27001 Communication**:
- Internal: Security policy, threats and incidents, awareness training, responsibilities
- External: Security incidents (to authorities per GDPR), security commitments to customers, certification status

**Communication Matrix**:

The Communication Procedure includes a communication matrix mapping interested parties to communication topics, frequency, channels, and responsible persons.

Example:

| Interested Party | Interest/Expectation | Topics | Frequency | Channel | Responsible |
|------------------|---------------------|--------|-----------|---------|-------------|
| Customers | Service quality, reliability | Project status, incidents, SLA reports | Ongoing, per agreement | Email, meetings, portal | Customer Success |
| Employees | Informed, engaged | Strategy, performance, policies, changes | Ongoing, quarterly meetings | Email, meetings, intranet | Management, IMS Owner |
| Certification Body | IMS compliance | Audit findings, corrective actions, organizational changes | Annual audits | Email, audit portal | IMS Owner |
| Regulatory Authorities | Legal compliance | Required reports, incident notifications | As required by law | Official channels | IMS Owner, CEO |

## 7.5 Documented Information

### 7.5.1 General

Swedwise's IMS includes documented information required by ISO standards and determined by Swedwise as necessary for IMS effectiveness.

**Documented Information** includes:
- **Documents**: Policies, procedures, guidelines, role descriptions, forms, plans, manuals
- **Records**: Evidence of conformity and effective IMS operation (audit reports, training records, incident logs, risk registers, meeting minutes, etc.)

### 7.5.2 Creating and Updating Documented Information

**Document Creation Process**:

Swedwise follows **Document Control Procedure** (SW-IMS-PRO-001) for creating, reviewing, approving, and updating documents.

**Document Identification**:

All IMS documents use standardized naming:

```
SW-[SYSTEM]-[TYPE]-[NUMBER]-v[VERSION]

Examples:
- SW-IMS-POL-001 (Integrated Management System Policy)
- SW-IMS-PRO-002 (Risk Assessment Procedure)
- SW-ISMS-GUI-012 (Information Security Guideline)
```

**Document ID Components**:
- **SW**: Swedwise prefix
- **SYSTEM**: IMS, QMS, EMS, ISMS
- **TYPE**: POL (Policy), PRO (Procedure), GUI (Guideline), ROLE (Role), FRM (Form), REG (Register), TRN (Training), MAN (Manual)
- **NUMBER**: Sequential (001-999)
- **VERSION**: Major.Minor (e.g., 1.0, 1.1, 2.0)

**Version Control**:

**Major Version** (1.0 → 2.0): Significant changes requiring re-approval
- Structural changes
- Changes to responsibilities or processes
- Compliance-affecting changes

**Minor Version** (1.0 → 1.1): Editorial or clarification changes
- Typo corrections
- Formatting improvements
- Minor clarifications

**Frontmatter Metadata**:

All documents include YAML frontmatter:

```yaml
---
document_id: SW-IMS-PRO-001
title: Document Control Procedure
doc_type: procedure
version: "1.0"
status: approved
classification: internal
owner: IMS Owner
effective_date: 2024-01-15
review_date: 2025-01-15
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
---
```

**Review and Approval**:

**Review Process**:
- Subject matter experts review draft (5 working days)
- Feedback incorporated by document owner
- Review comments documented

**Approval Authorities**:
- **Policies**: Management Team
- **Procedures, Guidelines**: IMS Owner
- **Role Descriptions**: Relevant manager + IMS Owner
- **Forms, Registers**: IMS Owner

**Approval Evidence**:
- Written approval (email or digital signature)
- Approval recorded in document frontmatter and Document Register

**Effective Date**:
- Typically 7 days after approval (allow distribution and awareness)
- Communicated to affected staff

### 7.5.3 Control of Documented Information

**Document Availability and Access**:

**Master Repository**:
- All IMS documents stored in Git repository (`/content/ims/`)
- Version history maintained in Git
- Git serves as authoritative source

**Web Platform**:
- Documents rendered dynamically from Markdown
- Accessible at [TBD - internal URL, e.g., ims.swedwise.se]
- Search functionality and cross-linking
- Access control based on classification

**Document Register**:
- **Document Register** (SW-IMS-REG-002) maintained by IMS Owner
- Lists all controlled documents with ID, title, version, owner, status, effective date, review date
- Ensures no duplicate IDs; tracks document inventory

**Access Control**:

Documents classified and access controlled:

| Classification | Access | Distribution |
|---------------|--------|--------------|
| **Public** | Anyone | Can be shared externally |
| **Internal** | All Swedwise staff | Internal only |
| **Confidential** | Specific roles | Restricted distribution |
| **Restricted** | Individual authorization | Highly restricted |

**Suitability for Use**:

Documents are:
- **Legible**: Clear formatting, readable fonts
- **Identifiable**: Document ID, title, version clearly marked
- **Current**: Latest approved version available
- **Accessible**: Easy to find and retrieve

**Distribution and Communication**:

When documents approved or updated:
- IMS Owner updates Document Register
- Announcement sent to affected staff (email)
- Link to document provided
- Training scheduled if required

**Protection and Preservation**:

**Protection**:
- Git repository access controlled (read/write permissions)
- Backups: Daily automated backups of Git repository and database
- Confidential documents: Encrypted storage, access logging

**Preservation**:
- Documents retained for defined periods (see Section 7.5.5)
- Obsolete documents archived but accessible for reference
- Git history provides full version history indefinitely

**Changes and Version Control**:

**Change Requests**:
- Anyone can request document change (Improvement Suggestion Form or email to document owner)
- Document owner and IMS Owner evaluate (major or minor change?)
- Approval to proceed based on change significance

**Implementation**:
- **Major Changes**: Follow full review and approval process
- **Minor Changes**: Document owner makes change; IMS Owner quick review; no re-approval

**Obsolete Documents**:
- When superseded, marked "obsolete" in frontmatter
- Removed from active navigation; redirect to new version
- Retained in Git archive for 3+ years

**External Documents**:

External documents (standards, regulations, customer specifications, supplier documentation):
- Not under Swedwise document control
- Registered in External Document Register (part of SW-IMS-REG-002)
- Marked as "External - Not Under Swedwise Document Control"
- Reviewed periodically for currency (every 6 months)
- IMS Owner responsible for ensuring current versions available

### 7.5.4 Records Management

**Records as Evidence**:

Records provide evidence of:
- Conformity to IMS requirements
- Effective IMS operation
- Compliance with legal and regulatory requirements
- Continuous improvement

**Types of Records**:

**IMS Management Records**:
- Risk Register (Integrated)
- Compliance Obligations Register
- IMS Objectives Register
- Document Register
- Management Review minutes
- Internal Audit reports
- External Audit reports

**Operational Records**:
- Incident logs and reports
- Non-conformity and corrective action records
- Change requests and implementation records
- Training records (attendance, completion, effectiveness)
- Competence assessment records
- Customer feedback and satisfaction surveys
- Supplier evaluations

**Technical Records** (SaaS and IT):
- System logs (access, security, application)
- Backup and recovery test results
- Monitoring data (uptime, performance)
- Vulnerability scan results
- Penetration test reports

**Environmental Records**:
- Energy consumption data
- Travel records (for carbon footprint)
- Waste disposal records (e-waste, recycling)
- Environmental aspects assessments

**Project Records**:
- Project plans and status reports
- Customer acceptance documents
- Lessons learned summaries

**Record Control**:

**Identification**:
- Records identifiable (date, author, subject, unique ID if applicable)
- Linked to relevant process or activity

**Storage**:
- Electronic records: Stored in designated locations (SharePoint, databases, LMS, file shares)
- Physical records: Stored in secure locations (locked cabinets if needed)
- Backups: Electronic records backed up daily

**Protection**:
- Access controlled (only authorized personnel)
- Confidential records encrypted or physically secured
- Integrity maintained (no unauthorized alteration)

**Retrieval**:
- Easily retrievable when needed (indexed, searchable)
- Audit trail if required (who accessed, when)

**Retention**:
- Defined retention periods (see Section 7.5.5)
- Retained for legal, regulatory, contractual, or IMS requirements
- Disposal after retention period (secure deletion or shredding)

### 7.5.5 Retention Periods

Documented information retained per requirements:

**IMS Records** (examples):

| Record Type | Retention Period | Owner |
|-------------|-----------------|-------|
| Policies | Life of document + 3 years | Document Owner |
| Procedures | Life of document + 3 years | Document Owner |
| IMS Manual | Current + 5 years | IMS Owner |
| Risk Register | Current + 3 years | IMS Owner |
| Objectives Register | Current + 3 years | IMS Owner |
| Management Review minutes | 5 years | CEO / IMS Owner |
| Internal Audit reports | 5 years | IMS Owner |
| External Audit reports | Duration of certification + 3 years | IMS Owner |
| Incident reports | 5 years | IMS Owner |
| Non-conformity records | 5 years | IMS Owner |
| Corrective action records | 5 years | IMS Owner |
| Training records | 5 years | IMS Owner |
| Competence records | Employment duration + 3 years | HR / IMS Owner |
| Customer contracts | Contract duration + 7 years | Finance / Management |
| Financial records | 7 years (Swedish tax law) | Finance |
| GDPR compliance records | 3 years (recommended) | CISO / IMS Owner |
| Environmental records | 5 years | Environmental Lead |
| Supplier evaluations | 3 years | Procurement / IMS Owner |

**Legal and Regulatory Requirements**:
- Retention periods consider Swedish law (accounting, tax, labor, GDPR)
- Extended retention if legal proceedings or investigations

**Disposal**:
- After retention period, records securely disposed:
  - Electronic: Secure deletion (overwrite or degaussing for sensitive data)
  - Physical: Shredding or certified destruction
- Disposal logged (what, when, who authorized)

### 7.5.6 Documented Information for ISO Standards

**Required by ISO 9001**:
- Scope of QMS
- Quality policy and objectives
- Documented processes (design, production/service delivery, non-conforming outputs, etc.)
- Records: Monitoring and measurement results, audit results, management review, non-conformities

**Required by ISO 14001**:
- Scope of EMS
- Environmental policy and objectives
- Environmental aspects and significant aspects
- Compliance obligations
- Records: Monitoring results, audits, management review, non-conformities, emergency preparedness tests

**Required by ISO 27001**:
- Scope of ISMS
- Information security policy and objectives
- Risk assessment and treatment methodology
- Statement of Applicability (SoA)
- Records: Monitoring and measurement results, audit results, management review, non-conformities, incident records

**Swedwise's Approach**:
- Integrated documentation meets requirements of all three standards
- Single risk register, single management review, unified audit program
- Efficient and proportionate to organizational size

## Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-IMS-PRO-001** - Document Control Procedure
- **SW-IMS-PRO-007** - Communication Procedure
- **SW-IMS-PRO-012** - Competence and Training Procedure
- **SW-ISMS-POL-007** - Information Classification Policy
- **SW-IMS-REG-002** - Document Register
- **SW-IMS-TRN-001** - Information Security Awareness Training
- **SW-IMS-TRN-002** - Environmental Awareness Training
- **SW-IMS-TRN-003** - Quality and Customer Focus Training
- **SW-IMS-TRN-004** - GDPR and Data Protection Training

## Review and Maintenance

This manual section is reviewed annually by the IMS Owner or when:
- Significant changes to support processes occur
- ISO standard requirements change
- Audit findings identify gaps or improvements
- Management review identifies support effectiveness issues

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | IMS Owner | Initial release |

**Next Review Date**: [TBD - typically 12 months from effective date]

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| Management Team Representative | | | |
