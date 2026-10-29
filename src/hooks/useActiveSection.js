
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
    const [activeSection, setActiveSection] = useState(
        sectionIds[0] ?? "home"
    );

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-15% 0px -55% 0px",
                threshold: [0, 0.15, 0.3, 0.5, 0.75],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIds.join(",")]);

    return activeSection;
}
