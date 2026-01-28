---
document_id: SW-IMS-PRO-001
title: Document Control Procedure
doc_type: procedure
version: "1.0"
status: draft
classification: internal
owner: IMS Owner
effective_date: [TBD]
review_date: [TBD]
standard:
  - ISO 9001
  - ISO 14001
  - ISO 27001
required_for_certification: true
related_documents:
  - SW-IMS-POL-001
---

# Document Control Procedure

**Document ID**: SW-IMS-PRO-001-v1.0
**Effective Date**: [TBD]
**Review Date**: [TBD]
**Owner**: IMS Owner
**Approved by**: [TBD]

## 1. Purpose

This procedure establishes the process for creating, reviewing, approving, distributing, updating, and controlling documents within Swedwise's Integrated Management System (IMS). It ensures:

- Documents are properly identified, versioned, and traceable
- Documents are reviewed and approved before use
- Current versions are available to those who need them
- Obsolete documents are identified and removed from use
- Changes to documents are controlled and documented
- Documents meet ISO 9001, ISO 14001, and ISO 27001 requirements

## 2. Scope

This procedure applies to all controlled documents within Swedwise's IMS, including:

- **Policies**: High-level management statements
- **Procedures**: Step-by-step process instructions
- **Guidelines**: Best practice recommendations
- **Role Descriptions**: Responsibilities and authorities
- **Forms and Templates**: Standardized data collection tools
- **Registers**: Lists of assets, risks, objectives, etc.
- **IMS Manual**: Overall system description
- **Training Materials**: LMS content and awareness materials
- **Work Instructions**: Detailed technical instructions (as applicable)

This procedure applies to all Swedwise locations and all staff who create, approve, or use IMS documents.

### Out of Scope:
- External documents (customer contracts, supplier documentation, standards)
- Personal working documents and drafts
- Project-specific documents not part of the IMS
- Records (covered by Records Management Procedure)

## 3. Definitions

| Term | Definition |
|------|------------|
| **Controlled Document** | An IMS document subject to version control, approval, and distribution management. |
| **Document Owner** | Person responsible for maintaining document content and initiating updates. |
| **Document Approver** | Authority who approves documents for release (typically IMS Owner or Management Team). |
| **Master Copy** | The official, approved version of a document maintained in the IMS repository. |
| **Obsolete Document** | A document that has been superseded by a newer version or is no longer applicable. |
| **Version** | A specific iteration of a document, identified by a version number (e.g., 1.0, 1.1, 2.0). |
| **Document ID** | Unique identifier assigned to each document (e.g., SW-IMS-PRO-001). |
| **Frontmatter** | YAML metadata block at the beginning of a Markdown document containing document properties. |
| **Git** | Version control system used to track document changes and history. |
| **Status** | Document state: Draft, Review, Approved, Obsolete. |
| **Classification** | Sensitivity level: Public, Internal, Confidential, Restricted. |

## 4. Document Identification and Numbering

### 4.1 Document ID Format

All IMS documents are identified using the following format:

```
SW-[SYSTEM]-[TYPE]-[NUMBER]-v[VERSION]

Example: SW-IMS-PRO-001-v1.0
```

**Components**:

| Component | Description | Values |
|-----------|-------------|--------|
| **SW** | Swedwise prefix | Fixed: SW |
| **SYSTEM** | Management system | IMS, QMS, EMS, ISMS |
| **TYPE** | Document type | POL, PRO, GUI, ROLE, FRM, REG, TRN, MAN |
| **NUMBER** | Sequential number | 001-999 (unique within TYPE) |
| **VERSION** | Version number | Major.Minor (e.g., 1.0, 1.1, 2.0) |

**System Codes**:
- **IMS**: Integrated Management System (cross-domain documents)
- **QMS**: Quality Management System (ISO 9001)
- **EMS**: Environmental Management System (ISO 14001)
- **ISMS**: Information Security Management System (ISO 27001)

**Document Type Codes**:
- **POL**: Policy
- **PRO**: Procedure
- **GUI**: Guideline
- **ROLE**: Role Description
- **FRM**: Form/Template
- **REG**: Register
- **TRN**: Training Material
- **MAN**: Manual

### 4.2 Version Numbering

Version numbers follow the **Major.Minor** format:

- **Major version** (e.g., 1.0 → 2.0): Significant changes requiring re-approval
  - Structural changes
  - Changes to responsibilities or authorities
  - Changes to processes that affect compliance
  - Changes that require retraining

- **Minor version** (e.g., 1.0 → 1.1): Editorial or clarification changes
  - Typo corrections
  - Formatting improvements
  - Minor clarifications that don't change intent
  - Updated contact information

**Initial Release**: Always starts at version 1.0

### 4.3 Frontmatter Metadata

All documents include YAML frontmatter with the following required fields:

```yaml
---
document_id: SW-IMS-PRO-001        # Unique ID (without version)
title: Document Control Procedure  # Document title
doc_type: procedure                # Document type
version: "1.0"                     # Current version
status: draft                      # Current status
classification: internal           # Sensitivity level
owner: IMS Owner                   # Document owner role
effective_date: [TBD]              # When document takes effect
review_date: [TBD]                 # Next scheduled review
standard:                          # Applicable ISO standards
  - ISO 9001
  - ISO 14001
related_documents:                 # Related document IDs
  - SW-IMS-POL-001
---
```

**Status Values**:
- **draft**: Document is being created or revised
- **review**: Document is under review by stakeholders
- **approved**: Document is approved and in use
- **obsolete**: Document has been superseded or withdrawn

**Classification Levels**:
- **public**: Can be shared publicly
- **internal**: For Swedwise staff only
- **confidential**: Restricted to specific roles
- **restricted**: Requires special authorization

## 5. Document Creation Process

### 5.1 Initiation

**Step 1: Identify Need**
- Document need identified by: IMS Owner, management, audit finding, process improvement, regulatory requirement
- Document type and scope determined

**Step 2: Assign Document Owner**
- IMS Owner assigns Document Owner based on subject matter expertise
- Document Owner added to Document Register

**Step 3: Assign Document ID**
- IMS Owner assigns next available document ID from Document ID Register
- Document ID reserved to prevent duplicates

### 5.2 Drafting

**Step 1: Use Approved Template**
- Document Owner retrieves appropriate template from `/templates/` directory
- Template includes required frontmatter and section structure

**Step 2: Create Document**
- Document created in Markdown format in appropriate directory:
  - Policies: `/content/ims/policies/`
  - Procedures: `/content/ims/procedures/`
  - Guidelines: `/content/ims/guidelines/`
  - Role Descriptions: `/content/ims/role-descriptions/`
  - Forms: `/content/ims/forms/`
  - Registers: `/content/ims/registers/`
  - Training: `/content/ims/training/`
  - Manual: `/content/ims/ims-manual/`

**Step 3: Complete Frontmatter**
- Fill in all required frontmatter fields
- Set status to "draft"
- Set version to "1.0"
- Classify document appropriately

**Step 4: Write Content**
- Follow template structure
- Use clear, actionable language
- Define responsibilities clearly
- Include cross-references to related documents using document IDs
- Add examples or appendices as needed

**Step 5: Internal Review (Optional)**
- Document Owner may request informal review from colleagues
- Incorporate feedback before submitting for formal review

**Step 6: Commit to Git**
- Document Owner commits draft to Git repository with descriptive message
- Example: `git commit -m "Draft: Document Control Procedure"`

### 5.3 Review and Approval

**Step 1: Submit for Review**
- Document Owner changes status to "review" in frontmatter
- Sends review request to:
  - Subject matter experts
  - Affected departments
  - IMS Owner
  - CISO (for security-related documents)
  - Quality Lead (for quality-related documents)
  - Environmental Lead (for environmental documents)

**Step 2: Review Period**
- Reviewers have **5 working days** to provide feedback (unless urgent)
- Feedback captured via:
  - Comments in Git pull request
  - Email to Document Owner
  - Tracked changes in separate copy

**Step 3: Incorporate Feedback**
- Document Owner reviews all feedback
- Makes necessary revisions
- Documents review comments and resolutions in Document Review Log (SW-IMS-FRM-001)
- Commits updated version to Git

**Step 4: Final Approval**
- Document Owner submits to Document Approver:
  - **Policies**: Require Management Team approval
  - **Procedures, Guidelines**: Require IMS Owner approval
  - **Role Descriptions**: Require relevant manager + IMS Owner approval
  - **Forms, Registers**: Require IMS Owner approval
  - **Training Materials**: Require IMS Owner + subject matter lead approval

**Step 5: Approval Granted**
- Approver reviews final version
- Approver provides written approval (email or digital signature)
- Document Owner updates frontmatter:
  - Status changed to "approved"
  - Effective date set (typically 7 days from approval to allow distribution)
  - Review date set (typically 1 year from effective date, or as specified)
  - Approver name recorded

**Step 6: Publish**
- Document Owner commits approved version to Git with tag
- Example: `git commit -m "Approved: Document Control Procedure v1.0"`
- Example tag: `git tag SW-IMS-PRO-001-v1.0`
- Document automatically published to web platform

### 5.4 Distribution and Communication

**Step 1: Update Document Register**
- IMS Owner updates Document Register (SW-IMS-REG-002) with approved document details

**Step 2: Communicate Availability**
- IMS Owner sends announcement to affected staff:
  - Document title and ID
  - Effective date
  - Link to document
  - Summary of what's new or changed

**Step 3: Training (if required)**
- For documents requiring training:
  - Training materials developed
  - Training delivered before effective date
  - Training records maintained

**Step 4: Access Control**
- Documents published to web platform with appropriate access controls:
  - **Public**: Available to all
  - **Internal**: Login required (all Swedwise staff)
  - **Confidential**: Role-based access
  - **Restricted**: Individual authorization required

## 6. Document Change Management

### 6.1 Requesting a Change

**Who Can Request**:
- Any Swedwise employee
- Document Owner
- IMS Owner
- Audit finding
- Management directive
- Regulatory change

**How to Request**:
- Submit change request using Improvement Suggestion Form (SW-IMS-FRM-002) or email to Document Owner and IMS Owner
- Include:
  - Document ID
  - Reason for change
  - Proposed change description
  - Urgency (routine, important, urgent)

### 6.2 Evaluating Change Requests

**Step 1: Initial Assessment**
- Document Owner and IMS Owner review request within **3 working days**
- Determine:
  - Is change necessary?
  - Is it major (new version) or minor (editorial)?
  - What is the impact?
  - What is the priority?

**Step 2: Approval to Proceed**
- **Major changes**: Require IMS Owner approval to proceed
- **Minor changes**: Document Owner can proceed
- **Rejected changes**: Requestor notified with rationale

### 6.3 Implementing Changes

**For Major Changes (version increment)**:

1. Document Owner creates new draft:
   - Increment version number (e.g., 1.0 → 2.0)
   - Set status to "draft"
   - Make changes to content

2. Follow full review and approval process (Section 5.3)

3. Upon approval:
   - New version published
   - Old version marked "obsolete" (status changed, effective date ended)
   - Document Register updated

**For Minor Changes (editorial corrections)**:

1. Document Owner makes changes
   - Increment minor version (e.g., 1.0 → 1.1)
   - Keep status as "approved"
   - Make corrections

2. IMS Owner performs quick review

3. Commit to Git with description

4. Update Document Register

5. No re-approval required

### 6.4 Emergency Changes

For urgent changes (e.g., security incident, regulatory requirement, critical process failure):

1. Document Owner notifies IMS Owner and Management Team
2. Change implemented immediately in draft form
3. Interim approval by IMS Owner (verbal or email)
4. Full approval process completed within **5 working days**
5. Change communicated immediately to affected staff

## 7. Periodic Document Review

### 7.1 Review Schedule

All documents reviewed on a regular basis:

| Document Type | Review Frequency | Triggered Reviews |
|---------------|------------------|-------------------|
| Policies | Annually | Management review, regulatory changes |
| Procedures | Annually | Audit findings, process changes |
| Guidelines | Every 2 years | Technology changes, best practice updates |
| Role Descriptions | Annually | Organizational changes, responsibility changes |
| Forms/Templates | Every 2 years | Process changes, usability issues |
| Registers | Quarterly (content), Annually (format) | Ongoing updates |
| Training Materials | Annually | Regulatory changes, process updates |

### 7.2 Review Process

**Step 1: Review Notification**
- IMS Owner sends review reminder to Document Owner **30 days before** review date
- Document Owner confirms receipt

**Step 2: Document Owner Review**
- Document Owner reviews document for:
  - Accuracy and completeness
  - Alignment with current processes
  - Compliance with standards
  - Clarity and usability
  - Need for updates

**Step 3: Review Decision**
- **No changes needed**: Document Owner notifies IMS Owner, review date extended (typically +1 year), no version change
- **Minor updates needed**: Follow minor change process (Section 6.3)
- **Major updates needed**: Follow major change process (Section 6.3)

**Step 4: Document Review**
- Document Owner completes Document Review Log (SW-IMS-FRM-001)
- IMS Owner updates Document Register with review completion

### 7.3 Overdue Reviews

- IMS Owner monitors review dates
- Overdue documents flagged in Document Register
- Document Owner reminded weekly until review completed
- Escalated to Management Team if >30 days overdue

## 8. Obsolete Document Management

### 8.1 When Documents Become Obsolete

Documents become obsolete when:
- Superseded by a new major version
- Process or activity no longer applicable
- Merged with another document
- Standard withdrawn
- Organizational decision to discontinue

### 8.2 Obsolescence Process

**Step 1: Mark as Obsolete**
- Document Owner or IMS Owner changes status to "obsolete" in frontmatter
- Add "OBSOLETE" watermark to document header
- Set effective end date

**Step 2: Replace with New Version (if applicable)**
- Add reference to superseding document ID
- Explain reason for obsolescence

**Step 3: Remove from Active Use**
- Remove from navigation menus
- Add redirect to new version (if applicable)
- Mark as obsolete in Document Register

**Step 4: Retain for Records**
- Obsolete documents retained in Git repository for historical reference
- Retained for minimum **3 years** or as required by regulation
- Accessible via Git history or archive section

**Step 5: Communicate**
- IMS Owner notifies affected staff of obsolescence
- Provides link to replacement document

## 9. External Documents

### 9.1 Definition

External documents are created outside Swedwise but used within the IMS, including:
- ISO standards (ISO 9001, ISO 14001, ISO 27001)
- Customer specifications and requirements
- Supplier documentation and certificates
- Regulatory guidance
- Technical references

### 9.2 Control of External Documents

**Step 1: Identify Need**
- Document Owner or IMS Owner identifies need for external document

**Step 2: Acquire and Verify**
- Obtain from authoritative source
- Verify authenticity and currency
- Check for updates/revisions

**Step 3: Register**
- Add to External Document Register (part of SW-IMS-REG-002)
- Record: Title, Source, Version/Date, Location, Review Date

**Step 4: Distribution**
- Store in designated location (e.g., `/reference/external/`)
- Mark as "External Document - Not Under Swedwise Document Control"
- Provide access to those who need it

**Step 5: Review Currency**
- IMS Owner reviews external documents **every 6 months** to ensure current versions
- Update or replace as needed

## 10. Document Storage and Access

### 10.1 Master Repository

**Location**: Git repository at `/content/ims/`

**Structure**:
```
/content/ims/
├── policies/
├── procedures/
├── guidelines/
├── role-descriptions/
├── forms/
├── registers/
├── training/
└── ims-manual/
```

**Access**:
- IMS Owner: Full read/write access
- Document Owners: Write access to their documents
- All Swedwise staff: Read access to approved documents (subject to classification)

### 10.2 Web Platform

**Location**: `https://ims.swedwise.se` (or internal URL)

**Features**:
- Dynamic rendering from Markdown
- Search functionality
- Document cross-linking (automatic document ID resolution)
- Version history access
- PDF/DOCX export
- Access control based on classification

### 10.3 Backup and Recovery

- Git repository backed up daily to remote server
- Web platform database backed up daily
- Recovery time objective (RTO): 4 hours
- Recovery point objective (RPO): 24 hours

## 11. Inputs and Outputs

### Inputs
- New document need (IMS Owner, management, staff, audit finding)
- Change requests (any employee, audit, regulation)
- Review schedules (Document Register)
- Feedback (reviews, audits, usage)
- Templates and formats

### Outputs
- Controlled documents (approved and versioned)
- Document Register (updated)
- Document Review Logs
- Obsolete document notifications
- Training materials (for new/changed documents)
- Git commits and version tags

## 12. Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **IMS Owner** | - Maintain this procedure<br>- Assign document IDs<br>- Maintain Document Register<br>- Monitor review dates and enforce deadlines<br>- Approve procedures, guidelines, forms<br>- Coordinate document reviews<br>- Manage access controls<br>- Ensure compliance with this procedure |
| **Document Owner** | - Create and maintain assigned documents<br>- Ensure content accuracy and currency<br>- Coordinate reviews and approvals<br>- Respond to change requests<br>- Conduct periodic reviews<br>- Update documents as needed<br>- Communicate changes to affected staff |
| **Document Approver** | - Review documents for approval<br>- Ensure documents meet requirements<br>- Provide approval or rejection with rationale<br>- Approve changes to controlled documents |
| **Management Team** | - Approve policies<br>- Allocate resources for document management<br>- Review document control effectiveness in management review |
| **Subject Matter Experts** | - Participate in document reviews<br>- Provide technical input<br>- Validate accuracy of content |
| **All Employees** | - Use current, approved documents<br>- Follow documented procedures<br>- Submit improvement suggestions<br>- Report issues with documents<br>- Participate in document reviews when requested |

## 13. Records to Maintain

| Record | Retention Period | Location | Owner |
|--------|-----------------|----------|-------|
| Document Register (SW-IMS-REG-002) | Current + 5 years | IMS Repository | IMS Owner |
| Document Review Logs (SW-IMS-FRM-001) | 3 years | IMS Repository | Document Owner |
| Approval Records (emails, signatures) | Life of document + 3 years | Email/IMS folder | Document Owner |
| Change Requests | 3 years | IMS Repository | IMS Owner |
| Obsolete Documents | 3 years minimum | Git archive | IMS Owner |
| Git Commit History | Indefinite | Git repository | IMS Owner |
| Training Records (for documents requiring training) | As per Training Procedure | LMS database | Training Coordinator |

## 14. Related Documents

- **SW-IMS-POL-001** - Integrated Management System Policy
- **SW-IMS-PRO-XXX** - Records Management Procedure (when created)
- **SW-IMS-PRO-XXX** - Training Procedure (when created)
- **SW-IMS-FRM-001** - Document Review Log Template
- **SW-IMS-FRM-002** - Improvement Suggestion Form
- **SW-IMS-REG-002** - Document Register
- **External Document Register** (part of SW-IMS-REG-002)

## 15. Monitoring and Measurement

Document control effectiveness is monitored through:

| Metric | Target | Frequency |
|--------|--------|-----------|
| Documents reviewed on time | >90% | Quarterly |
| Average review turnaround time | <5 working days | Monthly |
| Obsolete documents removed | 100% within 7 days | Ongoing |
| Documents with correct frontmatter | 100% | Quarterly audit |
| Change requests responded to | 100% within 3 days | Monthly |
| Staff awareness of document locations | >85% | Annual survey |

Results reported in Management Review.

## 16. Continuous Improvement

This procedure is subject to continuous improvement:

- Lessons learned from document audits are incorporated
- Staff feedback on usability is reviewed
- Git workflow optimized based on usage patterns
- Web platform features enhanced based on needs
- Benchmarking against industry best practices

**Suggestions for improvement** should be submitted using the Improvement Suggestion Form (SW-IMS-FRM-002).

---

## Appendix A: Document Creation Checklist

Use this checklist when creating a new IMS document:

- [ ] **Planning**
  - [ ] Document need identified and justified
  - [ ] Document Owner assigned
  - [ ] Document ID assigned by IMS Owner
  - [ ] Scope and audience defined

- [ ] **Drafting**
  - [ ] Appropriate template used
  - [ ] Frontmatter completed with all required fields
  - [ ] Document ID matches assigned ID
  - [ ] Version set to 1.0
  - [ ] Status set to "draft"
  - [ ] Classification assigned appropriately
  - [ ] Content follows template structure
  - [ ] Responsibilities clearly defined
  - [ ] Related documents referenced by document ID
  - [ ] Clear, actionable language used

- [ ] **Review**
  - [ ] Status changed to "review"
  - [ ] Reviewers identified and notified
  - [ ] Review comments collected
  - [ ] Feedback incorporated
  - [ ] Document Review Log completed

- [ ] **Approval**
  - [ ] Final version submitted to approver
  - [ ] Approval received (written record)
  - [ ] Status changed to "approved"
  - [ ] Effective date set
  - [ ] Review date set (typically +1 year)
  - [ ] Approver name recorded

- [ ] **Publication**
  - [ ] Committed to Git with tag
  - [ ] Document Register updated
  - [ ] Announcement sent to affected staff
  - [ ] Training scheduled (if required)
  - [ ] Access controls configured

---

## Appendix B: Document Review Log Template

See **SW-IMS-FRM-001** - Document Review Log Template

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [TBD] | [Author] | Initial release |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| IMS Owner | | | |
| Management Team Representative | | | |
