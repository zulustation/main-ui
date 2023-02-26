import React, { FC, useEffect, useState } from "react";
import { X, Check } from "react-feather";
import { defaultTags } from "lib/constants/markets";

export interface TagButtonProps {
  label: string;
  active: boolean;
  onActiveToggle: (active: boolean) => void;
}

export const TagButton: FC<TagButtonProps> = ({
  label,
  active,
  onActiveToggle,
}) => {
  const bgClass = active ? "bg-zul-blue" : "bg-sky-200 dark:bg-sky-800";
  const iconBgClass = active ? "bg-black" : "bg-sky-600";
  const iconColorClass = active ? "text-sky-600" : "text-sky-200";
  const textColorClass = active ? "text-white" : "text-sky-600";
  const Icon = active ? X : Check;

  return (
    <div
      className={`h-zul-25 flex items-center min-w-zul-85 text-zul-10-150
        rounded-full cursor-pointer px-zul-3 mb-zul-10 mr-zul-10 zul-transition
        ${bgClass} ${textColorClass}`}
      onClick={() => {
        const newActive = !active;
        onActiveToggle(newActive);
      }}
      data-test="tagButton"
    >
      <div className="px-zul-15 text-center  font-bold" data-test="tag">
        {label}
      </div>
      <div
        className={`w-zul-20 h-zul-20 center rounded-full ml-auto ${iconBgClass}`}
      >
        <Icon size={14} className={`${iconColorClass}`} />
      </div>
    </div>
  );
};

const TagChoices: FC<{ onTagsChange: (tags: string[]) => void }> = ({
  onTagsChange,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([...defaultTags]);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  useEffect(() => {
    const newTags = activeIndexes.reduce<string[]>((prev, curr) => {
      return [...prev, allTags[curr]];
    }, []);
    newTags.sort();
    setTags(newTags);
    onTagsChange(newTags);
  }, [activeIndexes]);

  return (
    <div className="flex flex-wrap" data-test="tagChoices">
      {allTags.map((cat, idx) => {
        return (
          <TagButton
            key={`marketCategories${idx}`}
            label={cat}
            active={activeIndexes.includes(idx)}
            onActiveToggle={(active) => {
              if (active) {
                setActiveIndexes([...activeIndexes, idx]);
              } else {
                const elIdx = activeIndexes.indexOf(idx);

                setActiveIndexes([
                  ...activeIndexes.slice(0, elIdx),
                  ...activeIndexes.slice(elIdx + 1),
                ]);
              }
            }}
          />
        );
      })}
      {/* <div className="flex w-zul-85 h-zul-25 items-center rounded-full border-2 border-sky-600 cursor-pointer px-zul-3"> */}
      {/*   <div className="w-zul-20 h-zul-20 rounded-full center"> */}
      {/*     <Plus size={12} className="text-sky-600" /> */}
      {/*   </div> */}
      {/*   <div className="text-zul-10-150 flex-grow text-center mr-zul-5 text-sky-600  font-bold"> */}
      {/*     Add Tag */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

export default TagChoices;
