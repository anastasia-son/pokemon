import classNames from 'classnames';

interface FilterBtnProps {
  id: number;
  title: string;
  isActive: boolean;
  onClick: (id: number) => void;
}

function FilterBtn({id, title, isActive, onClick}: FilterBtnProps) {
  const btnClassNames = classNames('btn btn-sm rounded-5 me-2 mb-2', {
    'btn-outline-secondary': !isActive,
    'btn-secondary': isActive,
  });

  return (
    <button
      key={id}
      type="button"
      className={btnClassNames}
      onClick={() => onClick(id)}
    >
      {title}
    </button>
  );
}

export default FilterBtn;
