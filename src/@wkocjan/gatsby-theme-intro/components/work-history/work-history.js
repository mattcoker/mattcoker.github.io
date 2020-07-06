import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  arrayOf,
  shape,
  WorkHistoryType,
} from "@wkocjan/gatsby-theme-intro/src/types";
import "@wkocjan/gatsby-theme-intro/src/components/work-history/work-history.css";

const WorkHistory = ({ history }) => {
  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center">
        Professional History
      </h5>
      <div className="history flex flex-col relative pt-6 pb-6">
        {history.map(({ type, company, period, position, url }, i) => {
          const key = `${company}_${i}`;
          const color = i === 0 ? '#23272e' : null;
          const icon =
            type === "work" ? (
              <FaBriefcase color={color} size="1.25em" />
            ) : (
              <FaGraduationCap color={color} size="1.5em" />
            );
          return (
            <div key={key }className="history-entry relative w-1/2 py-2">
              <span className="dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center">
                {icon}
              </span>
              {url ? (
                <h4 className="subpixel-antialiased">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition-opacity duration-150"
                  >
                    {company}
                  </a>
                </h4>
              ) : (
                <h4 className="subpixel-antialiased">{company}</h4>
              )}

              {position && (
                <h5 className="text-sm font-normal mb-1">{position}</h5>
              )}
              {period && (
                <span className="text-sm font-medium opacity-50">{period}</span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

WorkHistory.propTypes = {
  history: arrayOf(shape(WorkHistoryType)),
};

export default WorkHistory;
