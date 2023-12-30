// components/Section.tsx

import classNames from 'classnames';

interface SectionProps {
  position: 'left' | 'right';
  children: React.ReactNode;
  margin?: string;
  color?: string;
}


const Section = (props: SectionProps) => {
  const sectionClasses = classNames(
    'flex',
    'items-center',
    'justify-between',
    props.position === 'left' ? 'flex-row' : 'flex-row-reverse',
    `m-${props.margin}`,
    props.color
  );

  return (
    <div className={sectionClasses}>
      <div className="flex-1">{props.position === 'left' && props.children}</div>
      <div className="flex-1">{props.position === 'right' && props.children}</div>
    </div>
  );
}

export default Section;
