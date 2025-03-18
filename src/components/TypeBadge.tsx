import classnames from 'classnames';

interface TypeBadgeProps {
  name: string;
  isLast: boolean;
}

function TypeBadge({name, isLast}: TypeBadgeProps) {
  const classNames = classnames(
    'rounded-3 px-2 py-1 mb-1 bg-secondary text-white small',
    {
      'me-1': !isLast,
    },
  );
  return <div className={classNames}>{name}</div>;
}

export default TypeBadge;
