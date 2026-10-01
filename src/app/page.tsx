import ContactForm from "./contact-form";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm sm:p-10 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight">문의하기</h1>
        <p className="mt-2 mb-8 text-zinc-600 dark:text-zinc-400">
          아래 양식을 작성해 주시면 확인 후 연락드리겠습니다.
        </p>
        <ContactForm />
      </main>
    </div>
  );
}
