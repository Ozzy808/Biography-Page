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
                    className="space-y-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
                >
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
                                href="www.email.Innocent.Mothapo100@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                <img
                                    src="https://github.com/Ozzy808"
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