"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-300 dark:focus:ring-zinc-300/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: 백엔드 연동 시 FormData를 전송하도록 구현
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <p className="text-lg font-medium">문의가 접수되었습니다.</p>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          빠른 시일 내에 답변드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium underline underline-offset-4"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="홍길동"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="age" className="text-sm font-medium">
          나이
        </label>
        <input
          id="age"
          name="age"
          type="number"
          required
          min={1}
          max={120}
          inputMode="numeric"
          placeholder="30"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="example@email.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium">
          전화번호
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9\-]{9,13}"
          title="숫자와 하이픈(-)만 입력해 주세요. 예: 010-1234-5678"
          placeholder="010-1234-5678"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="문의하실 내용을 입력해 주세요."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 h-12 rounded-lg bg-zinc-900 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        문의하기
      </button>
    </form>
  );
}
