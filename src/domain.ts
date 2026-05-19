export const domain = {
  "kind": "checklist",
  "title": "GBP Readiness Check Checklist",
  "purpose": "A purpose-built checklist interface for a google business profile readiness checklist that works even before api access or ownership transfer.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "GBP readiness fields",
  "metricLabels": [
    "Listing Readiness",
    "Owner Access Readiness",
    "Photo/Review Completeness"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Riverside Community Bakery",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "businesses with complete maps handoff packets",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Business name verified",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Owner access request",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Business name verified",
    "Address/phone/hours verified",
    "Primary category selected",
    "Secondary categories reviewed",
    "Photos checklist complete",
    "Services/menu fields reviewed",
    "Ownership status captured",
    "Access request script generated",
    "Duplicate listing risk checked",
    "Review response plan drafted",
    "Photo upload plan prioritized",
    "Post-launch GBP maintenance cadence set"
  ],
  "artifacts": [
    "Owner access request",
    "GBP handoff packet",
    "Listing fields CSV",
    "Ownership transfer checklist",
    "Photo and updates calendar",
    "GBP maintenance SOP"
  ],
  "checks": [
    "NAP fields required",
    "Public claims need screenshot evidence",
    "Ownership blocker prevents ready state",
    "Duplicate listing risk must be noted",
    "Maintenance cadence required before launch",
    "Owner script must avoid requesting passwords"
  ],
  "sampleClient": "Riverside Community Bakery",
  "saas": {
    "personas": ["GBP readiness coach", "Business owner", "Volunteer listing reviewer"],
    "stages": [
      { "name": "Public listing audit", "goal": "Validate visible listing fields before any account access is granted.", "rowPatterns": ["Business name|Address|category|Photos|Duplicate"] },
      { "name": "Ownership readiness", "goal": "Prepare the owner for safe access transfer and blocker resolution.", "rowPatterns": ["Ownership|Access request|script|Owner"] },
      { "name": "Maintenance plan", "goal": "Create a repeatable cadence for photos, posts, services, and review replies.", "rowPatterns": ["Review|Photo|maintenance|cadence"] }
    ],
    "sampleValues": { "primary-goal": "complete a no-password GBP handoff and maintenance plan" },
    "sampleRows": { "Duplicate listing risk checked": "No obvious duplicate listing found in public Maps search", "Post-launch GBP maintenance cadence set": "Owner will review photos, hours, and updates every month" }
  }
};
