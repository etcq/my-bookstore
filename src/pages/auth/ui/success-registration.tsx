import { ROUTES } from '@/shared/routes';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/shared/ui/kit/button';
import Link from 'next/link';

export const SuccessRegistrationPage = () => {
  return (
    <div className="w-[400px] mx-auto text-center mt-20 flex flex-col items-center gap-4">
      <CheckCircle className="w-16 h-16 text-green-500" />
      <h2 className="text-2xl font-semibold">Registration Successful!</h2>
      <p className="text-muted-foreground">
        Thank you for signing up. Please check your email to confirm your
        account.
      </p>
      <Button asChild className="mt-4 w-full">
        <Link href={ROUTES.HOME}>Go to home</Link>
      </Button>
    </div>
  );
};
