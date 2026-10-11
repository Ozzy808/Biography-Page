function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 min-h-screen bg-blue-50 px-6 py-20">
            <div className="mx-auto max-w-3xl pb-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-blue-700">Contact</h2>
                    <p className="mt-3 text-gray-600">
                        Interested in working together or just want to say hello?
                    </p>
                </div>

                <form
                    action="https://www.email.Innocent.Mothapo100@gmail.com"
                    method="POST"
                    className="space-y-3 rounded-xl border border-pink-200 bg-white p-4 shadow-sm shadow-pink-100"
                >
                    <div className="mb-3 flex items-center justify-center gap-2 text-pink-500">
                        <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_subject"
                        value="New portfolio contact message"
                    />

                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-blue-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-blue-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-blue-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell me about your project..."
                            required
                            className="w-full rounded-md border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Contact me
                        </button>

                        <div className="flex items-center gap-2.5">
                            <a
                                href="mailto:Innocent.Mothapo100@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Email"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                    alt="Email"
                                    className="h-4 w-4"
                                />
                            </a>
                            <a
                                href="https://www.tiktok.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="TikTok"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current text-slate-900"
                                >
                                    <path d="M19.6 7.2a6.4 6.4 0 0 1-4.1-1.5v8.1a6.2 6.2 0 1 1-6.2-6.2c.4 0 .8 0 1.2.1v3.4a2.8 2.8 0 1 0 1.6 2.5V2h3.4a6.4 6.4 0 0 0 4.1 4.1v1.1Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/ozzy.mothapo"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                                    alt="Facebook"
                                    className="h-4 w-4"
                                />
                            </a>
                            <a
                                href="https://github.com/Ozzy808"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="GitHub"
                                    className="h-4 w-4"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/innocent-mothapo"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                    alt="LinkedIn"
                                    className="h-4 w-4"
                                />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact