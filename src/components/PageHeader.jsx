import React from 'react';

const PageHeader = ({ title, breadcrumb, children }) => {
  return (
    <div className="mb-6 rounded-[2rem] border border-[#f1e1cb] bg-white p-6 shadow-[0_20px_60px_rgba(125,98,66,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8d6f43]">Dashboard</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#3d3325]">{title}</h1>
          {breadcrumb && (
            <p className="mt-2 text-sm text-[#7d6a52]">
              {Array.isArray(breadcrumb) ? breadcrumb.map((item, index) => (
                <span key={item.name ?? index}>
                  {item.name}
                  {index < breadcrumb.length - 1 ? ' / ' : ''}
                </span>
              )) : breadcrumb}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageHeader;