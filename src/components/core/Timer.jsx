/**
 * la timp maxim sa fie verde
la 66% sa fie portocaliu
la 33% sa fie rosu
si cand e 0 sa fie negru
posibilitatea de a face un flash rosu
 */

const p = (number, maxLength = 2, padString = '0') => {
  return number.toString().padStart(maxLength, padString);
};

const renderTime = (ms = 0) => {
  const t = new Date(ms);

  return `${p(t.getMinutes())}:${p(t.getSeconds())}`;
};

export const Timer = ({ time = 1000 * 15, fullTime = 1000 * 30 }) => {
  let modifierClasses = 'bg-accent2';

  if (time < (fullTime * 66) / 100) {
    modifierClasses = 'bg-accent1';
  }

  if (time < (fullTime * 33) / 100) {
    modifierClasses = 'bg-accent1 animate-pulse';
  }

  if (time <= 0) {
    modifierClasses = 'bg-black';
  }

  return (
    <span
      className={`${modifierClasses} py-2 lg:py-0 text-gray-50 font-bold font-mono flex items-center rounded-lg shadow-lg h-full px-4`}
    >
      {renderTime(time)}
    </span>
  );
};
