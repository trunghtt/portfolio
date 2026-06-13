import avatarImage from '../../assets/avatar.jpg'
import type { PortfolioContent } from '../../domain/portfolio'
import { PdfExportButton } from './PdfExportButton'
import { SectionHeading } from './SectionHeading'
import { TagList } from './TagList'

type PortfolioPageProps = {
  content: PortfolioContent
}

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <main id="top">
      <section className="hero-section section">
        <div className="hero-copy">
          <p className="eyebrow">{content.labels.role}</p>
          <h1>{content.hero.name}</h1>
          <p className="hero-intro">{content.hero.intro}</p>
          <div className="hero-actions no-print">
            <PdfExportButton label={content.labels.downloadCv} variant="primary" />
            <a className="button secondary" href="#contact">
              {content.labels.contactMe}
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Professional snapshot">
          <div className="profile-card">
            <img className="avatar" src={avatarImage} alt="Trung Ha portrait" />
            <div>
              <p className="card-label">{content.labels.mainStack}</p>
              <h2>{content.hero.stack}</h2>
            </div>
            <dl className="quick-stats">
              <div>
                <dt>{content.labels.experience}</dt>
                <dd>{content.labels.years}</dd>
              </div>
              <div>
                <dt>{content.labels.focus}</dt>
                <dd>{content.labels.backendSystems}</dd>
              </div>
              <div>
                <dt>{content.labels.domain}</dt>
                <dd>{content.labels.bookingPlatforms}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section split-section" id="about">
        <div>
          <p className="eyebrow">{content.labels.about}</p>
          <h2>{content.about.heading}</h2>
        </div>
        <div className="section-text">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeading eyebrow={content.labels.skills} title={content.sections.skillsHeading} />
        <div className="skills-grid">
          {content.skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <TagList items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading
          eyebrow={content.labels.workExperience}
          title={content.sections.experienceHeading}
        />
        <div className="timeline">
          {content.experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.role}-${experience.period}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                  </div>
                  <span>{experience.period}</span>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <TagList items={experience.stack} compact />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeading eyebrow={content.labels.projects} title={content.sections.projectsHeading} />
        <div className="project-grid">
          {content.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <ul>
                {project.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <TagList items={project.stack} compact />
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <SectionHeading
          eyebrow={content.labels.education}
          title={content.sections.educationHeading}
        />
        <div className="education-list">
          {content.education.map((item) => (
            <article className="education-item" key={item.school}>
              <div>
                <h3>{item.school}</h3>
                <p>{item.program}</p>
                {item.note && <p className="muted">{item.note}</p>}
              </div>
              <span>{item.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="eyebrow">{content.labels.contact}</p>
          <h2>{content.sections.contactHeading}</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${content.contact.email}`}>
            {content.contact.email}
          </a>
          <a className="button secondary" href={`tel:${content.contact.phone}`}>
            {content.contact.phone}
          </a>
          <a
            className="button secondary"
            href={content.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}
