import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  status: 'success' | 'failed' | null;
  onClose: () => void;
  onPayment: (success: boolean) => void;
}

export default function PaymentModal({ isOpen, status, onClose, onPayment }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen && !status) {
      setIsProcessing(true);
      // Simulate payment processing
      const timer = setTimeout(() => {
        // Randomly succeed or fail for demo purposes (80% success rate)
        const success = Math.random() > 0.2;
        onPayment(success);
        setIsProcessing(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, status, onPayment]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl p-8 lg:p-12 max-w-md w-full shadow-2xl"
          >
            {isProcessing ? (
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Loader size={48} className="text-destructive" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground text-center">
                  Processing Payment
                </h3>
                <p className="text-foreground/60 text-center">
                  Please wait while we process your payment...
                </p>
              </div>
            ) : status === 'success' ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="flex flex-col items-center space-y-4"
              >
                <CheckCircle size={64} className="text-green-500" />
                <h3 className="text-2xl font-bold text-foreground text-center">
                  Payment Successful!
                </h3>
                <p className="text-foreground/60 text-center">
                  Thank you for your order. You will receive a confirmation email shortly.
                </p>
                <p className="text-sm text-foreground/50 text-center">
                  Redirecting you to home page...
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="flex flex-col items-center space-y-4"
              >
                <XCircle size={64} className="text-red-500" />
                <h3 className="text-2xl font-bold text-foreground text-center">
                  Payment Failed
                </h3>
                <p className="text-foreground/60 text-center">
                  There was an issue processing your payment. Please try again.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    window.location.reload();
                  }}
                  className="w-full mt-4 bg-destructive text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
