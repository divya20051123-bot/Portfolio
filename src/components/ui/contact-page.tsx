"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	type LucideIcon,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import {
	FaGithub as Github,
	FaLinkedin as Linkedin,
	FaInstagram as Instagram,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const APP_EMAIL = 'divya20051123@gmail.com';
const APP_PHONE = '+91 72000 82317';

export function ContactPage() {
	const socialLinks = [
		{
			icon: Github,
			href: 'https://github.com/divya20051123-bot/Food-Connect.git',
			label: 'GitHub',
		},
		{
			icon: Mail,
			href: 'mailto:divya20051123@gmail.com',
			label: 'Email',
		},
		{
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/divya-bharathi-b8b903375/',
			label: 'LinkedIn',
		},
		{
			icon: Instagram,
			href: 'https://github.com/divya20051123-bot/Food-Connect.git',
			label: 'Instagram',
		},
	];

	return (
		<div id="contact" className="min-h-screen w-full relative bg-transparent py-24 border-t border-black/5">
			<div className="mx-auto h-full max-w-6xl border border-black/5 bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden relative shadow-xl">
				<div
					aria-hidden
					className="absolute inset-0 isolate -z-10 opacity-30 contain-strict pointer-events-none"
				>
					<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,var(--primary-color)_0,transparent_50%)] absolute top-0 left-0 h-96 w-96 -translate-y-48 -rotate-45 rounded-full filter blur-3xl" />
				</div>
				
				<div className="flex grow flex-col justify-center px-6 md:px-12 pt-20 pb-12">
					<div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-color bg-primary-color/10 border border-primary-color/20 w-fit mb-4">
						Get In Touch
					</div>
					<h2 className="text-3xl font-extrabold md:text-5xl text-slate-800" style={{ fontFamily: "var(--font-heading)" }}>
						Contact Me
					</h2>
					<p className="text-slate-600 mt-2 text-sm md:text-base font-medium">
						Have an opportunity or project? Let's connect.
					</p>
				</div>

				<div className="grid md:grid-cols-3 border-y border-black/5 relative z-10">
					<Box
						icon={Mail}
						title="Email"
						description="Eager to apply technical skills in web dev."
					>
						<div className="flex items-center gap-x-2 w-full justify-between">
							<a
								href={`mailto:${APP_EMAIL}`}
								className="font-mono text-sm md:text-base font-bold tracking-wide text-primary-color hover:underline truncate"
							>
								{APP_EMAIL}
							</a>
							<CopyButton className="size-8 text-slate-400 hover:text-primary-color" test={APP_EMAIL} />
						</div>
					</Box>
					
					<Box
						icon={MapPin}
						title="Location"
						description="Available for hybrid or remote work."
					>
						<span className="font-sans text-sm md:text-base font-bold text-slate-800 leading-relaxed">
							Chennai, Tamil Nadu, India
						</span>
					</Box>
					
					<Box
						icon={Phone}
						title="Phone"
						description="Available for calls or messages."
						className="border-b-0 md:border-r-0"
					>
						<div className="space-y-2 w-full">
							<div className="flex items-center gap-x-2 justify-between">
								<a
									href={`tel:${APP_PHONE}`}
									className="block font-mono text-sm md:text-base font-bold tracking-wide text-primary-color hover:underline"
								>
									{APP_PHONE}
								</a>
								<CopyButton className="size-8 text-slate-400 hover:text-primary-color" test={APP_PHONE} />
							</div>
						</div>
					</Box>
				</div>

				<div className="relative flex h-full min-h-[280px] items-center justify-center border-t border-black/5 py-12">
					<div
						className={cn(
							'z-0 absolute inset-0 size-full pointer-events-none',
							'bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
						)}
					/>

					<div className="relative z-10 space-y-6 text-center">
						<h3 className="text-center text-xl md:text-2xl font-extrabold text-slate-800" style={{ fontFamily: "var(--font-heading)" }}>
							Find me online
						</h3>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-white hover:bg-slate-50 flex items-center gap-x-2 rounded-full border border-black/10 px-5 py-2.5 transition text-slate-800 hover:scale-105 shadow-sm"
								>
									<link.icon className="size-4 text-primary-color" />
									<span className="font-sans text-sm font-bold tracking-wide">
										{link.label}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b border-black/5 md:border-r md:border-b-0 bg-white/40 min-h-[14rem]',
				className,
			)}
		>
			<div className="flex items-center gap-x-3 border-b border-black/5 p-4 bg-black/[0.02]">
				<props.icon className="text-primary-color size-5" strokeWidth={2} />
				<h3 className="font-heading text-base font-extrabold tracking-wider text-slate-800">
					{title}
				</h3>
			</div>
			<div className="flex items-center p-6 py-8 grow">{children}</div>
			<div className="border-t border-black/5 p-4 bg-black/[0.01]">
				<p className="text-slate-500 text-xs font-semibold">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = {
	className?: string;
	test: string;
};

function CopyButton({
	className,
	test,
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(test);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn('disabled:opacity-100 relative hover:bg-black/5', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-4 stroke-green-600" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-4 text-slate-400" />
			</div>
		</Button>
	);
}
