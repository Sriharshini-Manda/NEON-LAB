import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, FlaskConical, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Provide diagnostic error details in development console without leaking to UI
    console.error('[NEON LAB SYSTEM FAULT] Uncaught runtime exception intercepted by ErrorBoundary:');
    console.error(error);
    console.error('Component Stack Trace:', errorInfo.componentStack);
  }

  private handleReturnToLab = () => {
    this.setState({ hasError: false, error: null });
    // Safely navigate to the root route and clear error state
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen w-full bg-[#0e0d15] text-[#e5e0ed] flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#00f5ff] selection:text-[#0e0d15]">
          {/* Cyberpunk Grid & Ambient Background Accents */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,22,240,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#ff16f0]/10 blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00f5ff]/10 blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-lg w-full rounded-3xl bg-[#1c1b23]/90 border border-[#ff16f0]/40 backdrop-blur-2xl p-8 sm:p-12 flex flex-col items-center text-center shadow-[0_0_50px_rgba(255,22,240,0.25)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Brand Monogram */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#0e0d15] border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff] shadow-[0_0_12px_rgba(0,245,255,0.3)]">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="font-['Syne'] font-extrabold text-xl tracking-wider uppercase text-[#e9feff]">
                NEON<span className="text-[#ff16f0]">LAB</span>
              </span>
            </div>

            {/* Warning Icon Badge */}
            <div className="w-16 h-16 rounded-2xl bg-[#0e0d15] border border-[#ff16f0]/40 flex items-center justify-center text-[#ff16f0] shadow-[0_0_24px_rgba(255,22,240,0.3)] mb-5">
              <AlertTriangle className="w-8 h-8" />
            </div>

            {/* Title */}
            <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-3">
              SYSTEM FAULT
            </h1>

            {/* Clean Required User Message */}
            <p className="font-['Space_Grotesk'] text-base text-[#b9caca] leading-relaxed mb-8 max-w-sm">
              An unexpected interface error occurred.
            </p>

            {/* Primary Action Button: RETURN TO LAB */}
            <button
              type="button"
              onClick={this.handleReturnToLab}
              className="py-3.5 px-8 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>RETURN TO LAB</span>
            </button>

            {/* System Status Subtitle */}
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#b9caca]/60 uppercase tracking-widest mt-6">
              FAULT ISOLATION SHIELD // ACTIVE
            </span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
