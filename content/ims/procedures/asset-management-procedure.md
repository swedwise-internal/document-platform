---
document_id: SW-ISMS-PRO-006
title: Asset Management Procedure
doc_type: procedure
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
  - SW-IMS-POL-001
---

# Asset Management Procedure

## 1. Purpose

This procedure establishes a systematic approach for identifying, inventorying, classifying, and managing information assets throughout their lifecycle at Swedwise AB. It ensures that all assets are accounted for, appropriately protected, and properly disposed of when no longer needed.

## 2. Scope

This procedure applies to:

- All information assets owned or managed by Swedwise
- Physical and virtual assets
- Hardware, software, data, and cloud services
- Assets at all locations (offices, customer sites, remote work, cloud infrastructure)
- Assets throughout their lifecycle (acquisition to disposal)
- SaaS platform infrastructure and applications
- Employee-used devices and systems

**Asset types in scope:**
- Hardware: Servers, laptops, mobile devices, network equipment, storage devices
- Software: Operating systems, applications, licenses, development tools
- Data: Databases, files, backups, customer data
- Services: Cloud services (Azure, Microsoft 365), SaaS applications, hosting services
- Network: Routers, switches, firewalls, VPNs
- Documentation: Configuration files, technical documentation, credentials
- Virtual assets: Virtual machines, containers, cloud resources

## 3. Definitions

| Term | Definition |
|------|------------|
| **Asset** | Anything that has value to the organization and requires protection |
| **Asset Owner** | Person accountable for an asset throughout its lifecycle |
| **Asset Custodian** | Person responsible for day-to-day maintenance and protection of an asset |
| **Information Asset** | Data, information, or knowledge-based asset requiring protection |
| **IT Asset** | Hardware or software component used for information processing |
| **Asset Register** | Central inventory of all organizational assets with relevant metadata |
| **Asset Classification** | Process of assigning a sensitivity level to an asset based on its value and risk |
| **Lifecycle** | Stages from acquisition, operation, maintenance, to disposal |
| **Shadow IT** | IT systems or services used without formal approval or knowledge of IT department |

## 4. Responsibilities

| Role | Responsibility |
|------|---------------|
| **CISO** | Overall accountability for asset management framework, asset register maintenance, policy compliance |
| **Asset Owner** | Accountability for specific asset, classification decisions, access approval, disposal authorization |
| **IT Operations** | Asset inventory management, asset tracking, lifecycle administration, technical asset custodian |
| **Department Heads** | Asset ownership for their department's assets, budget approval, compliance verification |
| **Finance** | Financial asset tracking, procurement coordination, depreciation management |
| **Procurement** | Vendor management, purchase processing, contract management |
| **All Staff** | Responsible use of assigned assets, reporting lost/stolen assets, returning assets when leaving |

## 5. Asset Identification and Inventory

### 5.1 Asset Discovery

**Automated Discovery:**
- Network scanning tools to identify connected devices
- Cloud resource inventory tools (Azure Resource Graph)
- Software inventory agents on endpoints
- Microsoft 365 admin portal for licenses and services
- Regular automated scans (weekly for network, daily for cloud)

**Manual Discovery:**
- New asset procurement process
- Employee self-reporting
- Physical audits (quarterly for offices)
- Project initiation reviews
- Vendor and contract reviews

**Scope:**
- All assets connected to Swedwise networks
- All cloud services and subscriptions
- Employee devices (company-provided and approved BYOD)
- Customer environments where Swedwise has access
- SaaS platform infrastructure (Entiros-hosted)

### 5.2 Asset Register

**Central Asset Register maintained by IT Operations**

**Required Attributes:**

| Attribute | Description | Required |
|-----------|-------------|----------|
| **Asset ID** | Unique identifier (format: [Type]-[Location]-[Number]) | Yes |
| **Asset Type** | Hardware, Software, Data, Service, Network, Documentation | Yes |
| **Asset Name** | Common name or description | Yes |
| **Asset Owner** | Person accountable for the asset | Yes |
| **Asset Custodian** | Person responsible for maintenance (often IT Operations) | Yes |
| **Classification** | Restricted, Confidential, Internal, Public | Yes |
| **Status** | Active, Inactive, Retired, Disposed | Yes |
| **Location** | Physical or logical location | Yes |
| **Purchase Date** | Date acquired | For physical assets |
| **Warranty/Support End** | Support expiration date | For hardware/software |
| **Vendor/Supplier** | Source or provider | If applicable |
| **Cost** | Acquisition cost | For financial tracking |
| **License Info** | License key, seat count, subscription details | For software |
| **Dependencies** | Related or dependent assets | If applicable |
| **Last Verified** | Date of last physical verification | For physical assets |
| **Disposal Date** | Date asset disposed | When disposed |

**Asset Register Tool:** [TBD - Asset management system/database]

### 5.3 Asset Identification Standards

**Asset ID Format:**

| Asset Type | Prefix | Example |
|------------|--------|---------|
| **Laptop** | LT-[Location] | LT-KSD-001 (Karlstad laptop #1) |
| **Server** | SV-[Environment] | SV-PROD-042 (Production server) |
| **Mobile Device** | MD-[Type] | MD-IPHONE-015 |
| **Network Equipment** | NET-[Type] | NET-SW-008 (Network switch) |
| **Software License** | LIC-[Product] | LIC-M365-E3 |
| **Cloud Service** | CLOUD-[Provider] | CLOUD-AZURE-SUB01 |
| **Virtual Machine** | VM-[Environment] | VM-PROD-WEB01 |

**Asset Labels:**
- Physical assets: Barcode or QR code label with Asset ID
- Location: Company name and contact information
- Applied upon receipt/deployment
- Re-labeled if Asset ID changes

### 5.4 New Asset Registration

**Process:**

1. **Asset Acquired** (via Procurement or IT purchase)
   - Procurement or IT Operations receives asset
   - Unpack and verify against order

2. **Register Asset**
   - Create entry in Asset Register
   - Assign Asset ID
   - Assign Asset Owner (requester or department head)
   - Record all required attributes
   - Apply physical label (if applicable)

3. **Classify Asset**
   - Asset Owner assigns classification (see Section 6)
   - Document classification in register
   - Apply security controls per classification

4. **Configure and Deploy**
   - IT Operations configures per security baseline
   - Install security software (antivirus, encryption, MDM)
   - Connect to asset management/monitoring tools
   - Assign to user (if applicable)

5. **Document**
   - Update Asset Register with deployment info
   - Record user assignment
   - Provide asset documentation to user
   - Set review/verification dates

**Timeline:** Complete registration within 2 business days of receipt

## 6. Asset Classification

### 6.1 Classification Criteria

Classification based on:
- **Confidentiality**: Sensitivity of information processed or stored
- **Integrity**: Impact if data is modified or corrupted
- **Availability**: Business impact if asset unavailable
- **Legal/Regulatory**: Compliance requirements
- **Financial**: Replacement cost and business value

### 6.2 Classification Levels

| Level | Criteria | Examples | Protection Requirements |
|-------|----------|----------|------------------------|
| **Restricted** | - Personal data (GDPR)<br>- Customer confidential data<br>- Critical business secrets<br>- Legal/compliance sensitive | Customer databases, source code, financial systems, credentials | - Encryption at rest and in transit<br>- Strict access controls<br>- MFA required<br>- Enhanced logging<br>- Regular security reviews |
| **Confidential** | - Internal business information<br>- Employee data<br>- Business plans<br>- Vendor contracts | HR systems, contract files, business plans, internal tools | - Encryption recommended<br>- Access controls enforced<br>- Regular access reviews<br>- Logging enabled |
| **Internal** | - General business use<br>- Not for public disclosure<br>- Limited sensitivity | Internal documentation, process guides, office resources | - Standard access controls<br>- Basic logging<br>- Password protection |
| **Public** | - Intended for public access<br>- No confidentiality concern<br>- Company approved | Marketing materials, public website, published docs | - Integrity protection<br>- Availability management<br>- No confidentiality controls |

### 6.3 Classification Process

**Responsibility:** Asset Owner determines classification

**Steps:**
1. Review classification criteria (Section 6.2)
2. Consider worst-case impact of unauthorized disclosure, modification, or loss
3. Assign classification level
4. Document in Asset Register
5. Apply required security controls
6. Label asset (if physical) or include in metadata

**Classification Review:**
- Annual review by Asset Owner
- When asset usage changes significantly
- When data sensitivity changes
- When regulatory requirements change

### 6.4 Classification Guidance

**Data Assets:**
- Contains personal data → Minimum Confidential, likely Restricted
- Customer data → Minimum Confidential, likely Restricted
- Business plans/strategy → Confidential
- Financial data → Confidential or Restricted
- Public marketing → Public

**Systems/Devices:**
- Processes Restricted data → Restricted classification
- SaaS production platform → Restricted
- Development/test environments → Confidential or Internal
- Office productivity laptops → Confidential (may access sensitive data)

**Services:**
- Customer-facing SaaS → Restricted
- Internal collaboration tools → Confidential
- Public website hosting → Public (infrastructure), Internal (management)

## 7. Asset Ownership

### 7.1 Assigning Asset Owners

**Asset Owner Criteria:**
- Senior enough to make decisions about asset use
- Understands asset value and risk
- Budget responsibility (often)
- Not necessarily technical expert

**Default Ownership:**

| Asset Type | Default Owner |
|------------|---------------|
| **Laptops/devices** | User's line manager |
| **Servers** | Application/service owner or IT Operations Manager |
| **Applications** | Business application owner or department head |
| **Data/databases** | Department head responsible for data domain |
| **Network infrastructure** | IT Operations Manager |
| **Cloud services** | Service owner or CTO |
| **SaaS platform** | CEO or designated SaaS service manager |

**Multiple Owners:**
- Complex assets may have multiple owners (e.g., application owner + infrastructure owner)
- Document primary owner and co-owners in Asset Register

### 7.2 Asset Owner Responsibilities

Asset Owners must:
- Classify the asset appropriately
- Define who should have access and approve access requests
- Ensure security controls are appropriate and effective
- Review access quarterly (for Restricted assets) or annually
- Approve significant changes to the asset
- Authorize asset disposal
- Participate in asset verification audits
- Report security incidents involving the asset

### 7.3 Asset Custodians

**Custodian Role:** Day-to-day care and maintenance

**Typically IT Operations for:**
- Servers and infrastructure
- Network equipment
- Backup systems
- Cloud services (technical management)

**Responsibilities:**
- Implement security controls per Asset Owner direction
- Maintain asset (patches, updates, configuration)
- Monitor asset health and security
- Execute backups and recovery
- Report issues to Asset Owner
- Follow change management procedures

## 8. Asset Lifecycle Management

### 8.1 Acquisition

**Procurement Process:**
1. Request submitted [TBD - via procurement system]
2. Business justification documented
3. Budget approval from department head
4. Security review (CISO approval for new services/solutions)
5. Procurement processes purchase
6. Asset received and registered (Section 5.4)

**Security Considerations:**
- Vendor security assessment for new suppliers
- Licensing compliance (audit-ready)
- Support and maintenance terms
- Data location and sovereignty (for cloud services)
- Integration with existing security tools

**Documentation:**
- Purchase order and receipt
- Vendor contract
- License agreements
- Warranty and support details

### 8.2 Deployment and Operation

**Deployment:**
1. Asset registered and classified
2. Security baseline applied:
   - Hardening per Swedwise standards
   - Encryption enabled (if required)
   - Antivirus/endpoint protection installed
   - Monitoring/management agent installed
   - Access controls configured
3. Asset tested and validated
4. Assigned to user or put into production
5. User training provided (if needed)
6. Asset Register updated with deployment status

**Operational Management:**
- Ongoing maintenance (patches, updates)
- Monitoring for security and performance
- Access reviews per asset classification
- Incident response if compromised
- Change management for significant changes
- Documentation updates as needed

### 8.3 Maintenance and Review

**Regular Maintenance:**
- Security patches: [TBD - within 30 days of release for critical, 90 days for others]
- Software updates: Per vendor recommendations
- Configuration reviews: Annually or after incidents
- Health checks: Continuous monitoring
- Backup verification: Per backup procedure

**Asset Verification:**

| Asset Type | Verification Frequency | Process |
|------------|----------------------|---------|
| **Physical assets** | Quarterly | Physical inspection, verify location and condition, update Asset Register |
| **Servers/infrastructure** | Monthly | Automated inventory scan, verify active and properly configured |
| **Software licenses** | Annually | License compliance audit, verify usage vs. purchased licenses |
| **Cloud resources** | Monthly | Resource inventory, tag compliance, orphaned resource cleanup |
| **Mobile devices** | Quarterly | MDM inventory, verify assigned users, check compliance status |

**Verification Process:**
1. IT Operations generates inventory report
2. Compare to Asset Register
3. Investigate discrepancies (missing assets, unauthorized assets)
4. Update Asset Register with current info
5. Report findings to CISO
6. Follow up on issues (lost assets, shadow IT, license compliance)

### 8.4 Modification and Change

**Significant changes require Asset Owner approval:**
- Major configuration changes
- Software upgrades (major versions)
- Relocation of critical assets
- Change in asset classification
- Change in access permissions

**Process:** Follow Change Management Procedure [TBD - SW-ISMS-PRO-005]

### 8.5 Decommissioning and Disposal

**Triggers for Disposal:**
- End of useful life
- Replacement by newer asset
- No longer needed for business
- End of lease/contract
- Failure and uneconomical to repair

**Disposal Process:**

**Step 1: Disposal Authorization**
- Asset Owner approves disposal
- Verify no ongoing dependencies
- Plan for data migration (if needed)
- Document disposal justification

**Step 2: Data Sanitization**

| Asset Type | Sanitization Method |
|------------|-------------------|
| **Hard drives/storage** | Secure wipe (DoD 5220.22-M or equivalent)<br>Physical destruction for Restricted data |
| **Laptops/desktops** | Full disk wipe, BIOS/firmware reset |
| **Mobile devices** | Factory reset, MDM wipe, verify data removed |
| **Servers** | Secure wipe or drive destruction, verify backups |
| **Cloud storage** | Secure deletion, verify replication removed |
| **USB/removable media** | Secure wipe or physical destruction |
| **Printed documents** | Shred (cross-cut) |

**Data Sanitization Standards:**
- Restricted data: Physical destruction or cryptographic wipe
- Confidential data: Secure software wipe (minimum 3 passes)
- Internal data: Standard formatting acceptable
- Always verify sanitization completed

**Step 3: Physical Disposal**

**Options:**
- **Recycle/Resell:** Only after data sanitization; for Internal classification or lower
- **Donate:** Acceptable for non-sensitive assets after sanitization
- **Return to Vendor:** For leased equipment; ensure data removed
- **Secure Destruction:** For Restricted/Confidential hardware; use certified disposal vendor
- **Reuse Internally:** Re-deploy after wiping; update Asset Register

**Required for Secure Destruction:**
- Use certified e-waste disposal vendor
- Obtain certificate of destruction
- Document chain of custody
- Verify vendor credentials (audit if high-value disposal)

**Step 4: Documentation**
- Update Asset Register (status: Disposed)
- Document disposal method and date
- Record certificate of destruction (if applicable)
- Update financial records (Finance notified)
- Archive asset record per retention policy

**Timeline:** Complete disposal within 30 days of authorization

**Verification:**
- CISO or IT Operations verifies data sanitization
- Finance verifies financial records updated
- Asset Register updated and verified

## 9. Software Asset Management

### 9.1 Software Inventory

**Track all software:**
- Operating systems (Windows, Linux, macOS)
- Applications (Microsoft 365, Adobe, development tools)
- Cloud services and SaaS subscriptions
- Open source components (maintain SBOM where feasible)
- Scripts and automation tools

**Inventory Method:**
- Automated software inventory agents
- Cloud service subscription management
- License management database
- Regular audits (at least annually)

### 9.2 License Management

**Objectives:**
- Ensure compliance with license terms
- Avoid over-purchasing (cost optimization)
- Prevent under-licensing (legal risk)

**Process:**
1. **Track licenses:**
   - License type (perpetual, subscription, per-user, per-device)
   - Number purchased
   - Number in use
   - Expiration dates
   - Cost and renewal dates

2. **Regular Review:**
   - Quarterly review of license usage vs. purchased
   - Identify unused licenses for reclamation
   - Forecast future license needs
   - Plan renewals in advance

3. **Compliance:**
   - Annual license compliance audit
   - Generate compliance report
   - Address non-compliance immediately
   - Document license proof of purchase

**License Reclamation:**
- When user leaves, reclaim and reassign licenses
- Regular review for inactive users
- Coordinate with HR for departures
- Update license tracking

### 9.3 Shadow IT Management

**Shadow IT:** Unapproved software or services used without IT knowledge

**Risks:**
- Security vulnerabilities
- Compliance violations
- Data leakage
- Lack of support
- Wasted spending

**Detection:**
- Network monitoring for unapproved services
- Cloud access security broker (CASB) tools
- Expense report reviews
- User surveys and reporting

**Response:**
1. Identify shadow IT usage
2. Assess business need and risk
3. Options:
   - **Approve and integrate:** If legitimate need and acceptable risk
   - **Provide approved alternative:** Offer supported solution
   - **Prohibit:** If high risk or duplicate of existing service
4. Communicate decision and rationale
5. Provide training on approved tools
6. Monitor for continued use

**Prevention:**
- Make approved tools easy to access
- Provide training on available tools
- Fast-track approval for legitimate new needs
- Communicate risks of shadow IT

## 10. SaaS Platform Asset Management

### 10.1 SaaS Infrastructure Assets

**Critical assets for SaaS service:**
- OpenText Communications/Exstream servers (at Entiros)
- Kubernetes cluster and nodes
- Load balancers and network equipment
- Storage systems
- Backup infrastructure
- Monitoring and logging systems
- Customer tenant configurations

**Enhanced Requirements:**
- All SaaS platform assets classified as Restricted
- Asset register includes:
  - Customer mapping (which assets serve which customers)
  - SLA dependencies
  - Disaster recovery priority
  - Configuration-as-code repository links
- Monthly verification of SaaS asset inventory
- Incident response priority (business-critical)

### 10.2 Customer Data Assets

**Data Segregation:**
- Logical or physical separation per customer tenant
- Asset register tracks customer data assets separately
- Clear ownership (Swedwise custodian, customer owner)
- Classification per customer contract (typically Restricted)

**Lifecycle:**
- Onboarding: Provision customer assets
- Operation: Monitor and maintain per SLA
- Offboarding: Secure data disposal per contract and GDPR
- Retention: Per customer contract and legal requirements

**Documentation:**
- Customer asset inventory
- Data location and backup locations
- Recovery procedures per customer
- Disposal records and certificates

## 11. Physical Asset Tracking

### 11.1 Asset Tagging

**Physical Labels:**
- Barcode or QR code with Asset ID
- Company contact information
- Applied to all laptops, desktops, servers, network equipment, mobile devices

**Label Placement:**
- Visible location (not obstructing vents)
- Durable label (tamper-evident if high-value)
- Re-label if replaced or Asset ID changes

### 11.2 Lost or Stolen Assets

**Reporting:**
- User must report immediately to IT Operations and line manager
- Submit incident report [TBD - via service desk]
- For theft: File police report
- For laptops/mobile devices: IT Operations remotely wipes device if possible

**Response:**
1. **Immediate Actions:**
   - Disable user accounts on device (if remote wipe not possible)
   - Change passwords for accounts accessed from device
   - Review recent device activity logs
   - Assess data exposure risk

2. **Investigation:**
   - Circumstances of loss/theft
   - Data stored on device
   - Security controls (encryption, password)
   - Last known location/activity

3. **Risk Assessment:**
   - Classify as security incident if data exposure risk (follow SW-ISMS-PRO-001)
   - Determine if GDPR breach notification required
   - Assess customer impact

4. **Documentation:**
   - Update Asset Register (status: Lost/Stolen)
   - Incident report with findings
   - Insurance claim if applicable
   - Lessons learned and preventive actions

**Replacement:**
- Approve replacement per normal procurement
- Enhanced security controls if pattern of loss
- User training on physical security

## 12. Cloud and Virtual Asset Management

### 12.1 Cloud Service Inventory

**Track all cloud subscriptions and services:**
- Azure subscriptions and resource groups
- Microsoft 365 licenses and services
- SaaS applications (CRM, ERP, development tools)
- Hosting services (Entiros)
- Third-party cloud services

**Attributes:**
- Service name and provider
- Subscription ID or account number
- Owner and primary contacts
- Cost and billing frequency
- Data location/region
- Criticality and classification
- Expiration/renewal dates

### 12.2 Cloud Resource Management

**Azure Resources:**
- Automated inventory via Azure Resource Graph
- Tagging strategy:
  - Owner: [email]
  - Environment: Production/Development/Test
  - Project: [project name]
  - Cost Center: [department]
  - Classification: Restricted/Confidential/Internal
- Regular cleanup of unused resources (orphaned VMs, unattached disks)
- Cost monitoring and optimization

**Governance:**
- Azure Policy to enforce tagging
- Automated alerts for untagged resources
- Monthly resource review and cleanup
- Owner verification quarterly

### 12.3 Virtual Machine Management

**Inventory:**
- VM name and asset ID
- Operating system and version
- Purpose/application hosted
- Owner and custodian
- Associated resources (disks, network interfaces)
- Backup and recovery status

**Lifecycle:**
- Provision via infrastructure-as-code (preferred)
- Apply security baseline upon creation
- Snapshot before major changes
- Regular patching per maintenance schedule
- Decommission and delete when no longer needed

## 13. Documentation and Configuration Assets

### 13.1 Documentation Assets

**Types:**
- System architecture diagrams
- Configuration documentation
- Runbooks and procedures
- Disaster recovery plans
- Credentials and secrets (stored securely)
- Vendor documentation

**Management:**
- Stored in approved repository [TBD - SharePoint, Confluence, Git]
- Version controlled
- Access restricted per classification
- Regular review and updates
- Backed up per backup procedure

### 13.2 Configuration-as-Code

**Assets:**
- Infrastructure-as-code (Terraform, ARM templates)
- Application configuration files
- Pipeline definitions (CI/CD)
- Security policies-as-code

**Management:**
- Stored in Git repositories
- Version controlled
- Peer review for changes
- Automated testing where possible
- Backup and disaster recovery copies

### 13.3 Credentials and Secrets

**Special Handling:**
- Store in secure vault (Azure Key Vault or equivalent)
- Never in plain text, code, or documentation
- Access logged and monitored
- Regular rotation per security requirements
- Classification: Restricted

**Asset Register:**
- Track credential assets separately
- Document purpose and system
- Record rotation schedule
- Monitor access and usage

## 14. Monitoring and Compliance

### 14.1 Asset Monitoring

**Continuous Monitoring:**
- Network-connected devices
- Cloud resource inventory
- Software installations
- License usage
- Security posture (patching, antivirus, encryption)

**Automated Alerts:**
- New assets detected (potential shadow IT)
- Assets missing from inventory
- License violations
- Security control failures
- Asset health issues

### 14.2 Asset Audits

**Regular Audits:**

| Audit Type | Frequency | Scope |
|------------|-----------|-------|
| **Physical asset verification** | Quarterly | Spot-check physical assets (sample), verify location and condition |
| **Software license audit** | Annually | Compare installed vs. licensed, compliance verification |
| **Cloud resource audit** | Monthly | Verify all cloud resources tagged and in Asset Register |
| **Asset classification review** | Annually | Sample assets, verify classification appropriate and controls applied |
| **Disposal audit** | Annually | Review disposal records, verify data sanitization documented |

**Audit Process:**
1. Plan audit scope and sample
2. Execute audit per plan
3. Document findings
4. Identify non-compliance and issues
5. Assign corrective actions
6. Report to CISO and management
7. Follow up to verify corrections

### 14.3 Compliance Reporting

**Quarterly Report to CISO:**
- Asset register statistics (total assets by type and classification)
- New assets registered
- Assets disposed
- License compliance status
- Issues identified and resolved
- Audit findings and corrective actions

**Annual Report to Management:**
- Comprehensive asset inventory summary
- Asset management effectiveness
- Cost optimization opportunities
- Major issues and improvements
- Compliance with policies and standards

## 15. Performance Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Asset register accuracy** | > 95% | Verified assets in register / Total assets discovered |
| **Asset classification completeness** | 100% | Assets with classification / Total assets |
| **License compliance** | 100% | Compliant licenses / Total licenses audited |
| **Disposal completion time** | < 30 days | Days from authorization to disposal completion |
| **Asset verification completion** | 100% | Scheduled verifications completed on time |
| **Untagged cloud resources** | < 5% | Untagged resources / Total cloud resources |

## 16. Inputs and Outputs

**Inputs:**
- Procurement requests and receipts
- Asset discovery scans
- User reports (lost, stolen, issues)
- Change requests
- Disposal authorizations
- Audit findings

**Outputs:**
- Asset Register (current and historical)
- Asset classification assignments
- Disposal records and certificates
- Compliance reports
- Audit evidence
- License inventory and compliance status

## 17. Records

| Record | Retention Period | Location |
|--------|------------------|----------|
| Asset Register | Current + 7 years after disposal | [TBD - Asset management system] |
| Asset disposal records | 7 years | [TBD - Document repository] |
| Certificates of destruction | 7 years | [TBD - Document repository] |
| License agreements and proof of purchase | Contract duration + 7 years | [TBD - Procurement/Legal repository] |
| Asset verification audit reports | 3 years | [TBD - Document repository] |
| Lost/stolen asset reports | 3 years | [TBD - Incident tracking system] |

## 18. Related Documents

**Policies:**
- SW-ISMS-POL-001: Information Security Policy
- SW-IMS-POL-001: Integrated Management System Policy

**Procedures:**
- SW-IMS-PRO-001: Document Control Procedure
- SW-ISMS-PRO-001: Incident Management Procedure
- SW-ISMS-PRO-002: Access Management Procedure
- [TBD - SW-ISMS-PRO-005: Change Management Procedure]
- [TBD - SW-ISMS-PRO-007: Vulnerability Management Procedure]

**Guidelines:**
- [TBD - SW-ISMS-GUI-001: Information Classification Guideline]
- [TBD - SW-ISMS-GUI-005: Data Sanitization Guideline]

**Forms:**
- [TBD - SW-ISMS-FRM-008: Asset Registration Form]
- [TBD - SW-ISMS-FRM-009: Asset Disposal Authorization Form]

**External:**
- ISO 27001:2022 - Clause 5.9 (Inventory of information and other associated assets)
- ISO 27001:2022 - Clause 5.10 (Acceptable use of information and other associated assets)
- ISO 27001:2022 - Clause 5.14 (Information transfer)

## 19. Document Control

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | [TBD] | [TBD - CISO] | Initial procedure creation | [TBD - CEO] |

**Next Review Date**: [TBD - typically 12 months from effective date]

**Document Classification**: Internal

**Document Owner**: CISO

---

*This procedure is approved by Swedwise AB management and is effective from the date specified above. All staff are required to read, understand, and comply with this procedure.*
