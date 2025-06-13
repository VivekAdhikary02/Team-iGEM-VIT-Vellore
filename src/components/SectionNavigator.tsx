
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function SectionNavigator() {
  const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Find all headings in the content
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    const sectionList = Array.from(headings).map((heading, index) => {
      const id = heading.id || `section-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      return {
        id,
        title: heading.textContent || '',
      };
    });
    setSections(sectionList);

    // Handle scroll to highlight active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionList[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionList[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className="section-navigator">
      <h6>On this page</h6>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`section-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
