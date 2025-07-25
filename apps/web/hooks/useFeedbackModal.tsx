"use client";

import { FeedbackModal } from "components/ui/feedback/FeedbackModal";
import { useState, useCallback } from "react";

export function useFeedbackModal(userId?: string) {
  const [isOpen, setIsOpen] = useState(false);

  const openFeedbackModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeFeedbackModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const FeedbackModalComponent = useCallback(
    () => (
      <FeedbackModal
        open={isOpen}
        onOpenChange={setIsOpen}
        userId={userId}
      />
    ),
    [isOpen, userId]
  );

  return {
    isOpen,
    openFeedbackModal,
    closeFeedbackModal,
    FeedbackModalComponent,
  };
} 