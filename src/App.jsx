import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import InterventionModal from './components/InterventionModal';
import OperatorDrawer from './components/OperatorDrawer';

// Manager Views
import OverviewView from './views/OverviewView';
import OperatorsView from './views/OperatorsView';
import KnowledgeView from './views/KnowledgeView';
import PlaybooksView from './views/PlaybooksView';
import SettingsView from './views/SettingsView';

// Operator Views
import OperatorHomeView from './views/operator/OperatorHomeView';
import OperatorJourneyView from './views/operator/OperatorJourneyView';
import OperatorMissionsView from './views/operator/OperatorMissionsView';
import OperatorKnowledgeView from './views/operator/OperatorKnowledgeView';
import OperatorCoachView from './views/operator/OperatorCoachView';
import OperatorProfileTab from './views/operator/OperatorProfileTab';

// Root Entry Views (Welcome & Workspace Selector)
import WelcomeView from './views/WelcomeView';
import WorkspaceSelectView from './views/WorkspaceSelectView';

import { INITIAL_OPERATORS } from './data/mockData';

export default function App() {
  const [screen, setScreen] = useState('welcome'); // Root navigation: 'welcome' | 'select-workspace' | 'app'
  const [appMode, setAppMode] = useState('manager'); // Default mode after workspace selection
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Manager State
  const [managerTab, setManagerTab] = useState('overview');
  const [operators, setOperators] = useState(INITIAL_OPERATORS);
  const [activeOsm, setActiveOsm] = useState('Julian S.');
  
  // Global Inspector Drawer & Intervention Modal
  const [drawerOperator, setDrawerOperator] = useState(null);
  const [interventionModalOp, setInterventionModalOp] = useState(null);

  // Operator State (using Lucas Vance 'op-101' as the active operator)
  const [operatorTab, setOperatorTab] = useState('home');
  const loggedInOperator = operators.find(o => o.id === 'op-101');

  // Helper to open the inspector drawer for an operator
  const handleSelectOperator = (op) => {
    const currentOp = operators.find(o => o.id === op.id) || op;
    setDrawerOperator(currentOp);
  };

  // Execute intervention: reduces risk by 20 points, logs activity item
  const handleExecuteIntervention = (opId, planText) => {
    setOperators(prev => prev.map(op => {
      if (op.id !== opId) return op;

      const newRisk = Math.max(0, op.riskScore - 20);
      let newLevel = 'healthy';
      if (newRisk > 60) newLevel = 'critical';
      else if (newRisk > 40) newLevel = 'at-risk';
      else if (newRisk > 20) newLevel = 'watchlist';

      const updated = {
        ...op,
        riskScore: newRisk,
        riskLevel: newLevel,
        recentActivity: [
          { type: 'intervention', text: `Intervention initiated: ${planText.substring(0, 30)}...`, date: 'Just now' },
          ...(op.recentActivity || [])
        ]
      };

      if (drawerOperator && drawerOperator.id === opId) {
        setDrawerOperator(updated);
      }

      return updated;
    }));
  };

  // Add internal note to operator profile
  const handleAddNote = (opId, noteText) => {
    setOperators(prev => prev.map(op => {
      if (op.id !== opId) return op;

      const newNote = {
        id: `note-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        author: activeOsm,
        text: noteText
      };

      const updated = {
        ...op,
        notes: [newNote, ...(op.notes || [])]
      };

      if (drawerOperator && drawerOperator.id === opId) {
        setDrawerOperator(updated);
      }

      return updated;
    }));
  };

  if (screen === 'welcome') {
    return <WelcomeView onEnterPrototype={() => setScreen('select-workspace')} />;
  }

  if (screen === 'select-workspace') {
    return (
      <WorkspaceSelectView
        onSelectWorkspace={(mode) => {
          setAppMode(mode);
          if (mode === 'manager') setManagerTab('overview');
          if (mode === 'operator') setOperatorTab('home');
          setScreen('app');
        }}
      />
    );
  }

  return (
    <div className="app-layout" style={{ background: 'var(--bg-dark)' }}>
      
      {/* Mobile Drawer Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Left Sidebar Shell */}
      <div className={`sidebar-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <Sidebar
          appMode={appMode}
          onSwitchMode={(mode) => {
            setAppMode(mode);
            if (mode === 'manager') setManagerTab('overview');
            if (mode === 'operator') setOperatorTab('home');
          }}
          activeTab={appMode === 'manager' ? managerTab : operatorTab}
          setActiveTab={(tab) => {
            if (appMode === 'manager') setManagerTab(tab);
            else setOperatorTab(tab);
            setIsMobileMenuOpen(false); // Auto-close on mobile
          }}
          activeOsm={activeOsm}
          operatorName={loggedInOperator ? loggedInOperator.name : "Julian Kether"}
        />
      </div>

      {/* Main Content Area */}
      <main style={{
        minHeight: '100vh',
        width: '100%',
        background: 'var(--bg-dark)',
        overflowY: 'auto'
      }}>
        
        {/* Mobile Header (Hamburger) */}
        <div 
          className="mobile-only" 
          style={{
            padding: '16px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-dark)',
            position: 'sticky',
            top: 0,
            zIndex: 80
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#F5F5F4', color: '#0B0B0D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '-0.05em' }}>
              O
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: '#F5F5F4', letterSpacing: '-0.02em' }}>OperatorOS</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ background: 'transparent', border: 'none', color: '#F5F5F4', padding: '4px', cursor: 'pointer' }}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* === MANAGER VIEWS === */}
        {appMode === 'manager' && (
          <>
            {managerTab === 'overview' && (
              <OverviewView
                operators={operators}
                activeOsm={activeOsm}
                onSelectOperator={handleSelectOperator}
                onOpenIntervention={(op) => setInterventionModalOp(op)}
              />
            )}
            {managerTab === 'operators' && (
              <OperatorsView
                operators={operators}
                onSelectOperator={handleSelectOperator}
                onOpenIntervention={(op) => setInterventionModalOp(op)}
              />
            )}
            {managerTab === 'knowledge' && <KnowledgeView />}
            {managerTab === 'playbooks' && <PlaybooksView onOpenIntervention={(op) => setInterventionModalOp(op)} />}
            {managerTab === 'settings' && <SettingsView />}
          </>
        )}

        {/* === OPERATOR VIEWS === */}
        {appMode === 'operator' && (
          <>
            {operatorTab === 'home' && (
              <OperatorHomeView 
                operator={loggedInOperator} 
                setOperatorTab={setOperatorTab} 
              />
            )}
            {operatorTab === 'journey' && (
              <OperatorJourneyView 
                operator={loggedInOperator} 
              />
            )}
            {operatorTab === 'missions' && (
              <OperatorMissionsView 
                operator={loggedInOperator} 
              />
            )}
            {operatorTab === 'knowledge' && <OperatorKnowledgeView />}
            {operatorTab === 'coach' && <OperatorCoachView operator={loggedInOperator} />}
            {operatorTab === 'profile' && <OperatorProfileTab operator={loggedInOperator} />}
          </>
        )}

      </main>

      {/* Global Inspector Drawer (Manager Only) */}
      {drawerOperator && appMode === 'manager' && (
        <OperatorDrawer
          operator={drawerOperator}
          onClose={() => setDrawerOperator(null)}
          onOpenIntervention={(op) => setInterventionModalOp(op)}
          onAddNote={handleAddNote}
        />
      )}

      {/* Global Intervention Modal (Manager Only) */}
      {interventionModalOp && appMode === 'manager' && (
        <InterventionModal
          operator={interventionModalOp}
          onClose={() => setInterventionModalOp(null)}
          onExecuteIntervention={handleExecuteIntervention}
        />
      )}

    </div>
  );
}
