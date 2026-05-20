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
  "modules": [
      {
          "name": "Listing evidence profiler",
          "description": "Captures visible listing facts, categories, hours, photos, services, and NAP proof before API or owner access exists.",
          "metrics": [
              "Fields verified",
              "NAP confidence",
              "Photo/category coverage"
          ],
          "deliverable": "Public listing evidence profile"
      },
      {
          "name": "Ownership blocker resolver",
          "description": "Maps verification status, account access, duplicate risks, and stakeholder responsibilities.",
          "metrics": [
              "Blockers closed",
              "Access owners assigned",
              "Verification steps ready"
          ],
          "deliverable": "Ownership transfer checklist"
      },
      {
          "name": "Optimization backlog",
          "description": "Prioritizes category, service, photo, review, and post improvements for the first 30 days after ownership.",
          "metrics": [
              "Optimization tasks",
              "Impact score",
              "Owner effort"
          ],
          "deliverable": "GBP optimization backlog"
      },
      {
          "name": "Maintenance cadence planner",
          "description": "Builds weekly/monthly owner tasks for photos, posts, Q&A, reviews, and seasonal hours.",
          "metrics": [
              "Cadence coverage",
              "Review SLA",
              "Holiday readiness"
          ],
          "deliverable": "GBP maintenance plan"
      }
  ],
  "plays": [
      {
          "name": "Pre-ownership readiness scan",
          "trigger": "Client cannot yet grant GBP access.",
          "outcome": "Public facts and blockers are documented without requiring credentials."
      },
      {
          "name": "Verification handoff",
          "trigger": "Owner is ready to start verification or transfer.",
          "outcome": "A plain-English checklist with roles, dates, and fallback contacts."
      },
      {
          "name": "First 30-day optimization",
          "trigger": "Listing ownership is obtained.",
          "outcome": "A sequenced improvement plan for categories, photos, reviews, and services."
      }
  ],
  "economics": {
      "buyer": "Local operator, chamber program, or digital navigator",
      "valueMetric": "Listings moved from blocked to optimization-ready",
      "priceHint": "$79 readiness report or $299 GBP setup sprint",
      "northStar": "Verified listings with active maintenance cadence"
  },
  "exportSuite": [
      "GBP readiness memo",
      "Ownership transfer checklist",
      "Photo/category gap list",
      "Review response starter set",
      "Maintenance calendar"
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
    "sampleRows": {"Business appears in search": "Brand-name and category searches tested with location qualifier", "NAP matches website": "Business name, address, and phone compared against website and social profiles", "Primary category identified": "Primary category captured from visible listing and compared with competitors", "Hours visible and current": "Regular and holiday hours checked for visible completeness", "Services/products listed": "Service list sampled and missing high-value offerings noted", "Photos show location/product": "Exterior, interior, team, and product photo coverage reviewed", "Ownership/access path documented": "Owner account, verification method, and recovery risks documented", "Update backlog prioritized": "Critical edits, quick wins, and owner-dependent steps sequenced", "Duplicate listing risk assessed": "Search variants reviewed for duplicate or stale listing risk", "Q&A and messages policy drafted": "Owner-safe response rules drafted for public questions and messages", "Verification blocker owner assigned": "Named owner assigned for postcard/video/account recovery blockers", "Maintenance cadence planned": "Weekly reviews, monthly photos, seasonal hours, and quarterly category review planned"}
  }
};
