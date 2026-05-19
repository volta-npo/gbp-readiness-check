export const config = {
  "number": 3,
  "slug": "gbp-readiness-check",
  "title": "GBP Readiness Check",
  "category": "Digital Presence",
  "tagline": "A Google Business Profile readiness checklist that works even before API access or ownership transfer.",
  "persona": "Marketing students helping a business fix maps visibility.",
  "gap": "Local SEO tools assume the agency owns the listing. Volta often starts before credentials exist.",
  "niche": "First-mile Google Maps visibility for tiny businesses.",
  "metric": "businesses with complete maps handoff packets",
  "modules": [
    "Public listing checklist",
    "Owner access request script",
    "Photo/category completeness rubric",
    "Review response workflow"
  ],
  "theme": {
    "accent": "#2563eb",
    "accent2": "#60a5fa",
    "emoji": "\ud83c\udf10",
    "metricLabel": "Presence readiness",
    "workflow": [
      "Capture public evidence",
      "Score the digital gap",
      "Prioritize owner-safe fixes",
      "Export handoff packet"
    ],
    "privacy": "Only public business information and project notes should be entered. Do not store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "public-listing-checklist",
      "label": "Public listing checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify public listing checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "owner-access-request-script",
      "label": "Owner access request script",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify owner access request script with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "photo-category-completeness-rubric",
      "label": "Photo/category completeness rubric",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify photo/category completeness rubric with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "review-response-workflow",
      "label": "Review response workflow",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify review response workflow with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for GBP Readiness Check and capture baseline evidence.",
      "Complete the public listing checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Riverside Community Bakery",
    "chapter": "Jacksonville",
    "studentLead": "Volta Student Lead",
    "notes": "Digital presence sprint for an under-digitized local storefront. GBP Readiness Check sample.",
    "evidencePrefix": "GBP Readiness Check",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
