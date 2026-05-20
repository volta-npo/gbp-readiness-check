export declare const domain: {
    kind: string;
    title: string;
    purpose: string;
    inputTitle: string;
    previewTitle: string;
    tableTitle: string;
    metricLabels: string[];
    fields: ({
        id: string;
        label: string;
        type: string;
        sample: string;
        placeholder: string;
    } | {
        id: string;
        label: string;
        type: string;
        sample: number;
        placeholder: string;
    })[];
    rows: string[];
    artifacts: string[];
    checks: string[];
    modules: {
        name: string;
        description: string;
        metrics: string[];
        deliverable: string;
    }[];
    plays: {
        name: string;
        trigger: string;
        outcome: string;
    }[];
    economics: {
        buyer: string;
        valueMetric: string;
        priceHint: string;
        northStar: string;
    };
    exportSuite: string[];
    sampleClient: string;
    saas: {
        personas: string[];
        stages: {
            name: string;
            goal: string;
            rowPatterns: string[];
        }[];
        sampleValues: {
            "primary-goal": string;
        };
        sampleRows: {
            "Business appears in search": string;
            "NAP matches website": string;
            "Primary category identified": string;
            "Hours visible and current": string;
            "Services/products listed": string;
            "Photos show location/product": string;
            "Ownership/access path documented": string;
            "Update backlog prioritized": string;
            "Duplicate listing risk assessed": string;
            "Q&A and messages policy drafted": string;
            "Verification blocker owner assigned": string;
            "Maintenance cadence planned": string;
        };
    };
};
