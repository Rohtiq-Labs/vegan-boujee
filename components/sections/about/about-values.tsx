import { ABOUT } from "@/data/about-content";
import { Reveal } from "@/components/ui/reveal";

export const AboutValues = (): React.JSX.Element => {
  return (
    <section className="ab-values" aria-labelledby="ab-values-label">
      <Reveal>
        <p className="section-label" id="ab-values-label">
          {ABOUT.values.label}
        </p>
      </Reveal>
      <div className="ab-values-stack">
        {ABOUT.values.items.map((value, index) => (
          <Reveal
            key={value.title}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className={`ab-value ab-value--${index % 3}`}
          >
            <span className="ab-value-index" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="ab-value-title">{value.title}</h3>
            <p className="ab-value-thought">{value.thought}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
