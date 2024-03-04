import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
    <div className="layout-container">
      <header className="layout-header">
        <h1>Todo List</h1>
        </header>
        <main>{children}</main>
        </div>
      </>
    );
}
