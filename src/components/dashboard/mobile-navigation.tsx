"use client";

import { useEffect, useRef, useState } from "react";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

interface MobileNavigationProps {
  readonly className?: string;
}

export function MobileNavigation({ className = "" }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key === "Tab") {
        const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 1440px)");

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className={`min-[1440px]:hidden ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-dashboard-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="flex size-10 shrink-0 items-center justify-center rounded-badge bg-surface/80 shadow-card transition-[transform,background-color] duration-200 ease-out hover:bg-surface active:scale-95 motion-reduce:transition-none"
      >
        <span aria-hidden="true" className="grid w-[20px] gap-[4px]">
          <span className="h-[2px] rounded-full bg-text-page-title" />
          <span className="h-[2px] rounded-full bg-text-page-title" />
          <span className="h-[2px] rounded-full bg-text-page-title" />
        </span>
      </button>

      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-hidden={!isOpen}
        aria-label="Close navigation menu"
        onClick={closeNavigation}
        className={`fixed inset-0 z-40 bg-text-primary/30 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        ref={drawerRef}
        id="mobile-dashboard-navigation"
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        aria-hidden={!isOpen}
        aria-label="Dashboard navigation"
        inert={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 h-svh max-h-svh w-[min(300px,calc(100vw-48px))] touch-pan-y overflow-x-hidden overflow-y-scroll overscroll-y-contain bg-sidebar-surface shadow-profile [-webkit-overflow-scrolling:touch] will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-[900px] min-h-[900px] w-[300px] max-w-full">
          <DashboardSidebar onNavigate={closeNavigation} />
          <button
            ref={closeRef}
            type="button"
            tabIndex={isOpen ? 0 : -1}
            aria-label="Close navigation menu"
            onClick={closeNavigation}
            className="absolute top-[28px] right-[18px] z-30 flex size-10 items-center justify-center rounded-full bg-surface/90 text-[28px]/[1] font-light text-text-page-title shadow-card transition-transform duration-200 ease-out hover:scale-105 active:scale-95 motion-reduce:transition-none"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
