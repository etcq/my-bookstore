import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="relative max-w-xs w-full h-auto aspect-square">
            <Image
              src="/images/not-found.png"
              alt="Sad book — page not found"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left text-foreground">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
            404 — Page not found
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Looks like this book is lost in our library
          </h1>
          <p className="text-muted-foreground mb-6">
            We could not find the page you were looking for. The link may be
            outdated or typed incorrectly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
