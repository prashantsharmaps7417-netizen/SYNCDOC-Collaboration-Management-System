import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import CommandPalette from "../common/CommandPalette";
import SystemStatus from "../common/SystemStatus";
import QuickActions from "../common/QuickActions";

export default function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");

  return (
    <div className={`app-shell ${sidebarCollapsed ? "app-shell-sidebar-collapsed" : ""}`}>
      <div className="app-command-status"><SystemStatus /></div>
      <Sidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onToggle={() => setSidebarCollapsed(value => !value)}
      />
      <div className="app-main">
        <Topbar
          onMenuClick={() => setMobileOpen(true)}
          onSearch={(value) => { setCommandQuery(value || ""); setCommandOpen(true); }}
        />
        <main className="app-content"><Outlet /></main>
      </div>
      <QuickActions />
      <CommandPalette open={commandOpen} initialQuery={commandQuery} onClose={() => setCommandOpen(false)} />
    </div>
  );
}
