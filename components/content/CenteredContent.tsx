import * as React from 'react';
import '../../styles/no-scrollbar.css';

export default function CenteredContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="centered-content" className="h-full lg:m-12">
      {children}
    </div>
  );
}
