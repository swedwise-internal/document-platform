# Define SaaS MVP Scope

Analyze and document MVP scope for Swedwise Communications SaaS launch.

## Task
Scope analysis: **$ARGUMENTS** (e.g., "review", "compare-to-draft", "launch-checklist", "defer-analysis")

## MVP Principles

Focus on launching quickly with core functionality:
1. **Essential features only** - What's needed to sign first customer?
2. **Defer nice-to-haves** - Plan for post-launch roadmap
3. **Manual before automated** - OK to have manual processes initially
4. **Good enough, not perfect** - Iterate based on customer feedback

## MVP Scope Definition

### IN SCOPE (MVP)

#### Core Platform
- OpenText Communications (Exstream) production tenant
- OpenText Communications (Exstream) development tenant
- OpenText Notifications (email, SMS)
- Basic API integration capability

#### Operations
- 24x7 monitoring
- Basic incident management (A/B/C levels)
- Quarterly upgrades
- Standard backup (6-hour intervals)

#### Support
- Service portal access
- 1st and 2nd line support
- Quarterly status meetings
- Basic SLA (99.9% uptime target)

#### Security
- ISO 27001 aligned operations
- SSO integration
- Swedish data center
- Basic penetration testing

#### Customer Success
- Standard onboarding process
- Administrator training
- Basic documentation

### OUT OF SCOPE (Post-Launch)

#### Deferred Features
- Customer self-service portal with billing
- Advanced AI personalization
- eSign integration
- PEPPOL/e-invoicing (Lodiq)
- Digital asset management
- E-archive integration
- Workflow automation platform
- Advanced analytics dashboards

#### Deferred Operations
- Automated provisioning
- Customer-managed upgrades
- Multi-region deployment
- Advanced DR testing

## Analysis Framework

### For "review"
1. List all planned features
2. Classify as MVP/Deferred
3. Document dependencies
4. Identify risks

### For "compare-to-draft"
1. Read existing draft from `../project-scaffolder/docs/SaaS Draft/`
2. Map to MVP/Deferred categories
3. Identify gaps
4. Recommend simplifications

### For "launch-checklist"
Generate checklist with:
- [ ] Technical readiness items
- [ ] Documentation required
- [ ] Training completed
- [ ] Support prepared
- [ ] Sales enabled
- [ ] Legal/contracts ready

### For "defer-analysis"
For each deferred item:
1. Reason for deferral
2. Customer impact
3. Revenue impact
4. Effort to add later
5. Recommended timing

## Output Format

```markdown
## MVP Scope Analysis: [Topic]

### Summary
[Brief summary of findings]

### MVP Features
| Feature | Priority | Status | Notes |
|---------|----------|--------|-------|
| ... | ... | ... | ... |

### Deferred Features
| Feature | Reason | Target Phase | Effort |
|---------|--------|--------------|--------|
| ... | ... | ... | ... |

### Recommendations
1. [Recommendation 1]
2. [Recommendation 2]

### Risks
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]
```

## Reference Documents

- Project plan: `../project-scaffolder/docs/Context Documents/Projektbeskrivning Swedwise SaaS GTM.pdf`
- Features draft: `../project-scaffolder/docs/SaaS Draft/02_service-definition/features-and-modules.md`
- Full content plan: `../project-scaffolder/docs/SaaS Draft/index.md`

## Output

Save analysis to: `docs/saas/mvp-scope-analysis.md`
