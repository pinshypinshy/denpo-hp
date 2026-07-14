import Image from "next/image";

export default function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-amber-50 px-6 text-center">
      <Image
        src="/logo/logo_horizontal_black.png"
        alt="伝蜂 DENPO"
        width={294}
        height={160}
        priority
        className="h-16 w-auto sm:h-20"
      />
      <h1 className="mt-10 text-2xl font-semibold text-amber-900 sm:text-3xl">
        現在リニューアル中です
      </h1>
      <p className="mt-4 text-sm text-amber-800 sm:text-base">
        今しばらくお待ちください
      </p>
    </main>
  );
}
