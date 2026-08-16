"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandCard, brandContainer, brandSection } from "@/components/ui/designTokens";

const inquiryTypes = [
  "学校養蜂について",
  "企業養蜂について",
  "商品について",
  "取材・メディア",
  "その他",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    inquiryType: inquiryTypes[0],
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info("Inquiry submitted", formData);
  };

  return (
    <section id="contact" className={`${brandSection} bg-white`}>
      <Reveal
        stagger
        className={`${brandContainer} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}
      >
        <SectionIntro eyebrow="Contact" title="学校・企業の導入、商品、取材のご相談へ。">
          <p>
            学校・企業への養蜂導入のご検討、商品に関するお問い合わせ、活動への協力相談など、
            まずはフォームからご連絡ください。
          </p>
        </SectionIntro>

        <form onSubmit={handleSubmit} className={`${brandCard} p-6 sm:p-8`}>
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="inquiryType">
                お問い合わせ種別
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
              >
                {inquiryTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                placeholder="例：山田 太郎"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border border-brown/30 bg-white px-4 py-3 text-sm text-ink outline-none"
                placeholder="ご相談内容をお聞かせください。"
                required
              />
            </div>
          </div>

          <div className="mt-8">
            <Button type="submit">送信する</Button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
