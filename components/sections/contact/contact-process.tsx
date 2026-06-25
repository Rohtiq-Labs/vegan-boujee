import { CONTACT } from "@/data/contact-content";
import { Reveal } from "@/components/ui/reveal";

export const ContactProcess = (): React.JSX.Element => {
  const { process } = CONTACT;

  return (
    <section className="ct-process" aria-labelledby="ct-process-label">
      <Reveal>
        <p className="section-label" id="ct-process-label">
          {process.label}
        </p>
      </Reveal>
      <ol className="ct-process-steps">
        {process.steps.map((step, index) => (
          <Reveal
            key={step.num}
            delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            className="ct-process-step"
          >
            <span className="ct-process-num" aria-hidden>
              {step.num}
            </span>
            <div className="ct-process-copy">
              <h2 className="ct-process-title">{step.title}</h2>
              <p className="ct-process-detail">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};
