---
document_id: SW-ISMS-FRM-009
title: Asset Disposal Authorization Form
doc_type: form
version: "1.0"
status: draft
classification: internal
owner: CISO
effective_date: 2024-01-15
review_date: 2025-01-15
standard:
  - ISO 27001
related_documents:
  - SW-ISMS-PRO-003
  - SW-ISMS-FRM-008
  - SW-EMS-POL-001
---

# Asset Disposal Authorization Form

## Purpose

This form authorizes the secure disposal of information assets, ensuring that all data is properly sanitized, environmental requirements are met, and disposal is documented for audit purposes.

## Instructions

1. **Requester** completes Sections 1-3
2. **Asset Owner** reviews and approves disposal
3. **CISO** approves data sanitization method
4. **IT/Facilities** executes disposal and completes Section 5
5. **Certificate of destruction** obtained for assets with confidential data
6. **Retain** completed form permanently in asset disposal records

**Important:** Never dispose of assets containing data without proper sanitization and approval.

---

## Section 1: Request Information

| Field | Information |
|-------|-------------|
| **Disposal Request ID** | (Auto-assigned) |
| **Request Date** | |
| **Requester Name** | |
| **Requester Department** | |
| **Requester Contact** | Email: __________ Phone: __________ |

---

## Section 2: Asset Information

### Asset Details

| Field | Information |
|-------|-------------|
| **Asset ID** | (from Asset Register) |
| **Asset Name** | |
| **Asset Type** | ☐ Hardware ☐ Software ☐ Data ☐ Media ☐ Document |
| **Serial Number** | |
| **Current Location** | |
| **Asset Owner** | |
| **Asset Classification** | ☐ Public ☐ Internal ☐ Confidential ☐ Restricted |

---

### Asset Condition

**Current State:**

- ☐ Working condition
- ☐ Partially functional
- ☐ Not functional/broken
- ☐ End of life/obsolete
- ☐ Damaged/failed

**Age:** __________ years

**Original Purchase Date:** __________

**Original Value:** SEK __________

**Current Estimated Value:** SEK __________

---

## Section 3: Disposal Justification

### Reason for Disposal

**Primary reason:**

- ☐ **End of useful life** - Asset has reached end of its useful lifecycle
- ☐ **Replacement** - Being replaced with newer asset (ID: _______)
- ☐ **Technology obsolescence** - No longer supported or compatible
- ☐ **Hardware failure** - Beyond economical repair
- ☐ **Software end of support** - Vendor no longer supports
- ☐ **Business requirement change** - No longer needed
- ☐ **Lease/rental end** - Lease term completed, returning to vendor
- ☐ **Security incident** - Compromised and cannot be sanitized
- ☐ **Compliance requirement** - Regulatory requirement to dispose
- ☐ **Other:** _______________________

**Detailed Justification:**

```
[Explain why this asset should be disposed of]






```

**Alternative Options Considered:**

- ☐ Repair - Not viable because: _______________________
- ☐ Reuse/Repurpose - Not suitable because: _______________________
- ☐ Donation - Not appropriate because: _______________________
- ☐ Return to vendor - Not applicable because: _______________________

---

## Section 4: Data Sanitization

### Data Assessment

**Does this asset contain or has it contained data?**

- ☐ Yes
- ☐ No
- ☐ Unknown

**If Yes, what type of data?**

- ☐ No sensitive data (public information only)
- ☐ Internal business data
- ☐ Customer/personal data (GDPR applicable)
- ☐ Confidential business data
- ☐ Restricted/highly sensitive data
- ☐ Authentication credentials (passwords, keys, certificates)
- ☐ Unknown - assume sensitive

**Data Classification of Information:**

- ☐ Public
- ☐ Internal
- ☐ Confidential
- ☐ Restricted

---

### Required Sanitization Method

**Based on classification and asset type, select appropriate method:**

**For Physical Media (hard drives, SSDs, tapes, USB drives):**

- ☐ **Cryptographic Erasure** (encrypted media, destroy keys)
- ☐ **Secure Overwrite** (DOD 5220.22-M or similar, multiple passes)
- ☐ **Degaussing** (magnetic media only)
- ☐ **Physical Destruction** (shredding, crushing, incineration)
  - Required for: ☐ Confidential ☐ Restricted ☐ Failed drives ☐ Damaged media
- ☐ **None Required** (never contained data or public data only)

**For Electronic Devices (computers, phones, tablets):**

- ☐ **Factory Reset** (public/internal data only)
- ☐ **Secure Wipe Software** (NIST 800-88 compliant)
- ☐ **Storage Media Destruction** (remove and destroy storage separately)
- ☐ **Device Destruction** (shredding or crushing entire device)

**For Paper Documents:**

- ☐ **Cross-cut Shredding** (on-site, minimum P-4 level)
- ☐ **Professional Shredding Service** (certificate of destruction required)
- ☐ **Pulping/Incineration** (high-security documents)
- ☐ **Regular Recycling** (public documents only)

**For Software/Licenses:**

- ☐ **License Deactivation** (deactivate with vendor)
- ☐ **Uninstall and Remove** (remove all instances)
- ☐ **Account Closure** (close associated accounts)

**For Cloud Services/SaaS:**

- ☐ **Data Export** (export data if needed before deletion)
- ☐ **Account/Tenant Deletion** (complete account removal)
- ☐ **Subscription Cancellation** (cancel with vendor)

---

### Sanitization Standard/Tool

**Sanitization standard to be applied:**

- ☐ NIST SP 800-88 (Clear)
- ☐ NIST SP 800-88 (Purge)
- ☐ DOD 5220.22-M (3 or 7 pass)
- ☐ ISO/IEC 27040
- ☐ Vendor-specific secure erase
- ☐ Physical destruction per ISO 21964
- ☐ Other (specify): _______________________

**Tool/Service to be used:**

```
[Specify software tool, shredding service, or destruction vendor]



```

---

## Section 5: Disposal Method

### Disposal Approach

**How will the asset be disposed of?**

- ☐ **Recycling** (e-waste recycling through certified vendor)
- ☐ **Sale** (after sanitization, via surplus sale)
- ☐ **Donation** (after sanitization, to charity/organization)
  - Recipient: _______________________
- ☐ **Return to Vendor** (lease return, RMA, trade-in)
  - Vendor: _______________________
- ☐ **Secure Destruction** (shredding, crushing, incineration)
  - Destruction vendor: _______________________
- ☐ **Landfill/Waste** (only for non-hazardous, sanitized items)
- ☐ **Internal Reuse** (transfer to another department after sanitization)
  - New owner: _______________________

---

### Environmental Considerations

**Does this asset contain hazardous materials?**

- ☐ Yes (batteries, mercury, lead, etc.)
- ☐ No
- ☐ Unknown

**If Yes, hazardous waste disposal required:**

- ☐ Certified e-waste recycler
- ☐ Hazardous waste disposal service
- ☐ Return to manufacturer program
- ☐ Local hazardous waste facility

**Environmental compliance:**

- ☐ WEEE Directive compliance (electronic waste)
- ☐ Battery disposal regulations
- ☐ Swedish environmental regulations
- ☐ Other: _______________________

---

## Section 6: Approvals

### Asset Owner Approval

| Field | Information |
|-------|-------------|
| **Asset Owner Name** | |
| **Review Date** | |

**I confirm:**

- ☐ This asset is no longer required for business purposes
- ☐ All necessary data has been backed up or migrated
- ☐ Dependencies have been addressed
- ☐ Users have been notified (if applicable)
- ☐ Disposal method is appropriate

**Approval Decision:**

- ☐ **Approved** - Proceed with disposal as specified
- ☐ **Approved with Conditions** (specify): _______________________
- ☐ **Not Approved** (reason): _______________________

**Comments:**

```
[Any additional notes or conditions]



```

| **Asset Owner Signature** | | **Date** | |

---

### CISO Approval (Required for Confidential/Restricted Assets)

| Field | Information |
|-------|-------------|
| **CISO Review Date** | |

**Security Review:**

- ☐ Data sanitization method is appropriate for classification level
- ☐ Certificate of destruction will be obtained (if required)
- ☐ Disposal method meets security requirements
- ☐ No security concerns with proposed disposal

**Approval Decision:**

- ☐ **Approved** - Sanitization and disposal approved
- ☐ **Approved with Enhanced Sanitization** (specify): _______________________
- ☐ **Not Approved** (reason): _______________________

| **CISO Signature** | | **Date** | |

---

## Section 7: Sanitization Execution

### Sanitization Process

| Field | Information |
|-------|-------------|
| **Sanitized By** | |
| **Sanitization Date** | |
| **Sanitization Method Used** | |
| **Tool/Software Used** | |
| **Tool Version** | |

**Sanitization Checklist:**

- ☐ Asset powered on and accessible (if applicable)
- ☐ Sanitization tool executed successfully
- ☐ Sanitization completion verified
- ☐ Verification report generated
- ☐ Asset labeled as sanitized
- ☐ Asset removed from network/domain
- ☐ Asset deregistered from asset management system
- ☐ Licenses deactivated/returned (if applicable)

**Sanitization Results:**

| Media/Component | Method | Passes/Duration | Result | Verification |
|----------------|--------|----------------|--------|--------------|
| | | | ☐ Pass ☐ Fail | |
| | | | ☐ Pass ☐ Fail | |
| | | | ☐ Pass ☐ Fail | |

**Issues Encountered:**

```
[Document any problems during sanitization]




```

**If Sanitization Failed:**

- ☐ Physical destruction required instead
- ☐ Escalated to CISO for alternative method
- ☐ Asset quarantined pending resolution

---

## Section 8: Disposal Execution

### Disposal Process

| Field | Information |
|-------|-------------|
| **Disposed By** | |
| **Disposal Date** | |
| **Disposal Method Used** | |
| **Disposal Vendor** (if applicable) | |
| **Disposal Location** | |
| **Transport Method** | |

**Disposal Checklist:**

- ☐ Asset sanitization verified complete
- ☐ Asset physically removed from premises
- ☐ Asset tracking labels removed
- ☐ Asset register updated (status: Disposed)
- ☐ Financial records updated
- ☐ Insurance notified (if high-value asset)
- ☐ Environmental compliance verified
- ☐ Certificate of destruction received (if required)

---

### Certificate of Destruction

**Certificate Required?**

- ☐ Yes (confidential/restricted data)
- ☐ No (public/internal data or no data)

**If Yes:**

| Field | Information |
|-------|-------------|
| **Certificate Number** | |
| **Issued By** | |
| **Issue Date** | |
| **Certificate Location** | (File path or physical location) |
| **Destruction Method Confirmed** | |
| **Witness** (if applicable) | |

**Certificate Attached:** ☐ Yes ☐ Pending ☐ Not Required

---

## Section 9: Financial Reconciliation

### Asset Value Disposal

| Field | Amount (SEK) |
|-------|--------------|
| **Original Asset Value** | |
| **Current Book Value** | |
| **Sale/Trade-In Value** (if applicable) | |
| **Disposal Cost** | |
| **Net Value** | |

**Financial Treatment:**

- ☐ Asset written off
- ☐ Asset sold (revenue recorded)
- ☐ Insurance claim filed
- ☐ Tax benefit claimed (donation)
- ☐ Other: _______________________

**Finance Department Notified:** ☐ Yes (Date: _______) ☐ Not Required

---

## Section 10: Completion and Sign-Off

### Disposal Completion

**Disposal completed successfully:**

- ☐ Yes
- ☐ Yes, with issues (documented above)
- ☐ No (explain): _______________________

**Final Checklist:**

- ☐ Data sanitization completed and verified
- ☐ Asset disposed per approved method
- ☐ Certificate of destruction obtained (if required)
- ☐ Asset register updated
- ☐ Financial records updated
- ☐ All approvals obtained
- ☐ Environmental compliance met
- ☐ Form completed and filed

---

### Final Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Disposal Executed By** | | | |
| **Verified By (IT/CISO)** | | | |
| **Asset Owner Acknowledgment** | | | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | | | Initial disposal request |

---

## Quick Reference - Sanitization Requirements by Classification

| Classification | Minimum Sanitization | Certificate Required | Acceptable Disposal |
|---------------|---------------------|---------------------|-------------------|
| **Public** | None (but recommended) | No | Recycling, donation, sale |
| **Internal** | Secure overwrite (1 pass) | No | Recycling, donation after sanitization |
| **Confidential** | Secure overwrite (3+ passes) or degaussing | Yes | Certified recycling or destruction |
| **Restricted** | Physical destruction (shredding/crushing) | Yes | Certified destruction service only |
| **Failed/Damaged** | Physical destruction | Yes | Destruction regardless of classification |

---

## Quick Reference - Asset Type Disposal Methods

| Asset Type | Recommended Sanitization | Recommended Disposal |
|------------|------------------------|---------------------|
| **Hard Drive (working)** | Secure overwrite or degauss | Recycling or destruction |
| **Hard Drive (failed)** | Physical destruction | Certified shredding |
| **SSD (working)** | Secure erase (vendor tool) | Recycling or destruction |
| **SSD (failed)** | Physical destruction | Certified shredding |
| **Laptop/Desktop** | Remove storage, factory reset | Recycling, sale, or donation |
| **Mobile Device** | Factory reset + encryption | Recycling or trade-in |
| **USB/External Drive** | Secure overwrite | Destruction (cost-effective) |
| **Backup Tapes** | Degaussing | Destruction |
| **Paper Documents** | Shredding (P-4 or higher) | Confidential recycling |

---

## Notes

```
[Additional notes or special circumstances]






```

---

## Attachments

**Attach the following:**

- ☐ Certificate of destruction
- ☐ Sanitization verification report
- ☐ Disposal vendor receipt
- ☐ Environmental compliance certificate
- ☐ Photos of destruction (if required)

**Attachment location:** ___________________________________________________________

---

## Contact Information

**For disposal questions:**
- **IT Operations:** support@swedwise.se
- **CISO:** [Contact details]
- **Facilities:** [Contact details]
- **Approved Disposal Vendors:** [Vendor list location]
