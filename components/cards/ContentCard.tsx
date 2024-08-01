import * as React from 'react';

export default function ContentCard({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: come back to this later
  return (
    <div id="content-card" className="flex md:p-8 justify-items-center">
      {children}
    </div>
  );
}
