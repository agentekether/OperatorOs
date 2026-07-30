import React, { useState } from 'react';
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

import { INITIAL_OPERATORS } from './data/mockData';

export default function App() {
  const [appMode, setAppMode] = useState('manager'); // Default to Manager to display Command Center redesign
  
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
  const handleExecuteIntervention = (opId, actionType, noteText) => {
    setOperators(prev => prev.map(op => {
      if (op.id !== opId) return op;

      const newRisk = Math.max(0, op.riskScore - 20);
      let newLevel = 'healthy';
      if (newRisk > 60) newLevel = 'critical';
      else if (newRisk > 35) newLevel = 'at-risk';
      else if (newRisk > 15) newLevel = 'watchlist';

      const newActivity = {
        id: `act-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        type: 'intervention',
        text: `Executed ${actionType} intervention by ${activeOsm}: ${noteText || 'Standard playbook check-in executed.'}`
      };

      const updated = {
        ...op,
        riskScore: newRisk,
        riskLevel: newLevel,
        events: [{ id: `evt-${Date.now()}`, date: new Date().toISOString().split('T')[0], type: 'Coach Intervention', source: 'OperatorOS', text: newActivity.text }, ...(op.events || [])]
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
        notes: [newNote, ...op.notes]
      };

      if (drawerOperator && drawerOperator.id === opId) {
        setDrawerOperator(updated);
      }

      return updated;
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-dark)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      overflowX: 'hidden'
    }}>
      
      {/* Left Sidebar Shell */}
      <Sidebar
        appMode={appMode}
        setAppMode={setAppMode}
        activeTab={appMode === 'manager' ? managerTab : operatorTab}
        setActiveTab={appMode === 'manager' ? setManagerTab : setOperatorTab}
        activeOsm={activeOsm}
        operatorName={loggedInOperator ? loggedInOperator.name : "Julian Kether"}
      />

      {/* Main Content Area */}
      <main style={{
        minHeight: '100vh',
        width: '100%',
        background: 'var(--bg-dark)',
        overflowY: 'auto'
      }}>
        
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
