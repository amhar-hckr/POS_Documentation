"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// import { descriptions } from "../data";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import HotspotButton from "../../components/ui/hotspot-button";
import { generateID } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
;


export default function FunctionalPage() {
	const section = {
		title: "Functional Documentation",
		content:
			"Detailed explanation of features like sales processing, refunds, inventory, and reporting.",
		image: "/screenshots/posinterface.png",
	};

	const router = useRouter();

	type Hotspot = {
		id: number;
		label: string;
		descriptionFile: string;
		image: string;
		left: string;
		top: string;

		variant?: "circle" | "rounded" | "rectangle" | "square" | "adjust"; // ✅ add variant
	};

	const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
	const [clickedHotspotId, setClickedHotspotId] = useState<number | null>(null);
	const [descriptionContent, setDescriptionContent] = useState<string>("");
	const [loadingDescription, setLoadingDescription] = useState<boolean>(false);
	const [showDescription, setShowDescription] = useState<boolean>(false);

	const hotspots: Hotspot[] = [
		{ id: 1, label: "SIGN ON", descriptionFile: "son.tsx", image: "", left: "81.4%", top: "3.6%" },
		{ id: 2, label: "MENU", descriptionFile: "menu.tsx", image: "", left: "86.6%", top: "3.6%" },
		{ id: 3, label: "EDC", descriptionFile: "edc.tsx", image: "", left: "91.8%", top: "3.6%" },
		{ id: 4, label: "SEEK", descriptionFile: "seek.tsx", image: "", left: "96.9%", top: "3.6%" },
		{ id: 5, label: "BILL SEEK", descriptionFile: "bill_seek.tsx", image: "", left: "81.4%", top: "10.6%" },
		{ id: 6, label: "CANCEL", descriptionFile: "cansel.tsx", image: "", left: "86.5%", top: "10.6%" },
		{ id: 7, label: "RECALL", descriptionFile: "recall.tsx", image: "", left: "91.8%", top: "10.4%" },
		{ id: 8, label: "SUSPEND", descriptionFile: "suspend.tsx", image: "", left: "96.8%", top: "10.4%" },
		{ id: 9, label: "SAVE", descriptionFile: "save.tsx", image: "", left: "81.5%", top: "17.3%" },
		{ id: 10, label: "VOID", descriptionFile: "void.tsx", image: "", left: "86.6%", top: "17.3%" },
		{ id: 11, label: "REFUND", descriptionFile: "refund.tsx", image: "", left: "91.8%", top: "17.3%" },
		{ id: 12, label: "MONEY", descriptionFile: "money.tsx", image: "", left: "96.9%", top: "17.3%" },
		{ id: 13, label: "RELOAD", descriptionFile: "reload.tsx", image: "", left: "81.4%", top: "24.3%" },
		{ id: 14, label: "PAID OUT", descriptionFile: "paid_out.tsx", image: "", left: "86.6%", top: "24.3%" },
		{ id: 15, label: "PROMO", descriptionFile: "promo.tsx", image: "", left: "91.7%", top: "24.3%" },
		{ id: 16, label: "CHANGE PHONE", descriptionFile: "change_phone.tsx", image: "", left: "96.8%", top: "24.3%" },
		{ id: 17, label: "DISCOUNT LEVEL", descriptionFile: "discount_level.tsx", image: "", left: "81.3%", top: "31.2%" },
		{ id: 18, label: "DISCOUNT PERCENTAGE", descriptionFile: "discount_percentage.tsx", image: "", left: "86.6%", top: "31.2%" },
		{ id: 19, label: "DISCOUNT AMOUNT", descriptionFile: "discount_amount.tsx", image: "", left: "91.7%", top: "31.3%" },
		{ id: 20, label: "DISCOUNT REMOVE", descriptionFile: "discount_remove.tsx", image: "", left: "96.8%", top: "31.4%" },
		{ id: 21, label: "COPY", descriptionFile: "copy.tsx", image: "", left: "81.4%", top: "38.2%" },
		{ id: 22, label: "LAYER", descriptionFile: "layer.tsx", image: "", left: "86.6%", top: "38.2%" },
		{ id: 23, label: "SALES MAN", descriptionFile: "sales_man.tsx", image: "", left: "96.8%", top: "38.1%" },
		{ id: 24, label: "GIFT VOUCHAR SALE", descriptionFile: "gv_sale.tsx", image: "", left: "91.7%", top: "38.3%" },
		{ id: 25, label: "NEW LOYALTY", descriptionFile: "new_loyalty.tsx", image: "", left: "81.4%", top: "45%" },
		{ id: 26, label: "STAFF", descriptionFile: "staff.tsx", image: "", left: "86.6%", top: "45.1%" },
		{ id: 27, label: "RECIVER ACCOUNT", descriptionFile: "recive_acc.tsx", image: "", left: "91.7%", top: "45.1%" },
		{ id: 28, label: "MANUAL CARD PAYMENT", descriptionFile: "manual_card_payment.tsx", image: "", left: "96.9%", top: "45.1%" },
		{ id: 29, label: "PLU", descriptionFile: "plu.tsx", image: "", left: "82.2%", top: "95.4%", variant: "adjust" },
		{ id: 30, label: "RPLU", descriptionFile: "rplu.tsx", image: "", left: "89.2%", top: "95.4%", variant: "adjust" },
		{ id: 31, label: "CASH", descriptionFile: "cash.tsx", image: "", left: "96.2%", top: "95.3%", variant: "adjust" },
		{ id: 32, label: "CLEAR", descriptionFile: "clear.tsx", image: "", left: "89.2%", top: "87%", variant: "adjust" },
		{ id: 33, label: "SUB TOTAL", descriptionFile: "sub_total.tsx", image: "", left: "96.2%", top: "87%", variant: "adjust" },
		{ id: 34, label: "Loyalty", descriptionFile: "loyalty.tsx", image: "", left: "67.3%", top: "62.3%", variant: "rectangle" },
		{ id: 35, label: "Outlet", descriptionFile: "outlet.tsx", image: "", left: "74.3%", top: "62.3%", variant: "rectangle" },
		{ id: 36, label: "Customer Keypad", descriptionFile: "customer_keypad.tsx", image: "", left: "39.6%", top: "72%", variant: "circle" },
		{ id: 37, label: "Change side", descriptionFile: "change_side.tsx", image: "", left: "46%", top: "72%", variant: "circle" },
		{ id: 38, label: "Refresh ERP", descriptionFile: "refresh_system.tsx", image: "", left: "52.4%", top: "72%", variant: "circle" },
		{ id: 39, label: "MASTER", descriptionFile: "master.tsx", image: "", left: "56.6%", top: "80.6%", variant: "rounded" },
		{ id: 40, label: "AMEX", descriptionFile: "amex.tsx", image: "", left: "63%", top: "80.6%", variant: "rounded" },
		{ id: 41, label: "VISA", descriptionFile: "visa.tsx", image: "", left: "69.1%", top: "80.6%", variant: "rounded" },
		{ id: 42, label: "DEBIT", descriptionFile: "debit.tsx", image: "", left: "75.4%", top: "80.6%", variant: "rounded" },
		{ id: 43, label: "GV REDEEM", descriptionFile: "gv_redeem.tsx", image: "", left: "56.6%", top: "87.6%", variant: "rounded" },
		{ id: 44, label: "STAFF CREDIT", descriptionFile: "staff_credit.tsx", image: "", left: "63%", top: "87.6%", variant: "rounded" },
		{ id: 45, label: "REDEEM", descriptionFile: "redeem.tsx", image: "", left: "69.2%", top: "87.6%", variant: "rounded" },
		{ id: 46, label: "OGF MANUAL", descriptionFile: "ogf_manual.tsx", image: "", left: "75.5%", top: "87.6%", variant: "rounded" },
		{ id: 47, label: "MINT PAY", descriptionFile: "mint_pay.tsx", image: "", left: "56.7%", top: "94.7%", variant: "rounded" },
		{ id: 48, label: "THYAGA", descriptionFile: "thyaga.tsx", image: "", left: "63%", top: "94.6%", variant: "rounded" },
		{ id: 49, label: "KOKO", descriptionFile: "koko.tsx", image: "", left: "69.2%", top: "94.6%", variant: "rounded" },
		{ id: 50, label: "GV MANUEL", descriptionFile: "gv_manuel.tsx", image: "", left: "75.5%", top: "94.6%", variant: "rounded" },
	];

	return (
		<div className="p-6 bg-gray-900 min-h-screen text-gray-100">
			<button
				onClick={() => router.push("/")}
				className="mb-6 px-4 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition"
			>
				Back to Overview
			</button>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<Card className="relative shadow-xl rounded-2xl border border-green-400 bg-gray-800 hover:shadow-2xl overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full border border-green-400 rounded-2xl animate-pulse pointer-events-none"></div>
					<CardHeader>
						<CardTitle className="text-3xl font-bold text-green-300">
							{section.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-gray-300 text-base leading-relaxed">
							{section.content}
						</p>
						<div className="flex flex-col items-center relative mt-4 w-full max-w-[400px] mx-auto">
							<Image
								src={section.image}
								alt={section.title}
								className="rounded-md shadow-md w-full object-contain cursor-pointer"
								width={400}
								height={300}
								onClick={() =>
									setActiveHotspot({
										id: 0,
										label: section.title,
										descriptionFile: "son.tsx", // FIX: use .tsx filename, not .md path
										image: section.image,
										left: "50%",
										top: "50%",
									})
								}
							/>
						</div>
					</CardContent>
				</Card>
			</motion.div>

			{activeHotspot && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
					<div
						className="bg-gray-900 rounded-lg p-6 max-w-6xl w-full flex flex-col items-center relative"
						onClick={(e) => e.stopPropagation()}
					>
						{/* IMAGE LAYER: full width, responsive */}
						<button
							onClick={() => router.push("/")}
							className="absolute top-0 right-0 z-50 px-1 py-1 bg-transparent text-white rounded-md hover:bg-transparent transition-colors duration-200 flex items-center gap-2"
						>
							<span>⚔️</span>
						</button>
						<div className="relative w-full flex justify-center" style={{ maxWidth: '1200px', margin: '0 auto', padding: 0 }}>
							<div className="relative w-full" style={{ paddingBottom: '75%' }}>
								<Image
									src={section.image}
									alt={section.title}
									className="rounded-t-lg shadow-lg absolute top-0 left-0 w-full h-full object-contain bg-gray-800"
									style={{ margin: 0 }}
									width={1200}
									height={900}
								/>

								{hotspots.map((hotspot) => (
									<HotspotButton
										key={generateID()}
										label={hotspot.label}
										left={hotspot.left}
										top={hotspot.top}
										description={hotspot.descriptionFile}
										isGray={clickedHotspotId === hotspot.id}
										variant={hotspot.variant}
										onClick={() => {
											if (clickedHotspotId === hotspot.id) {
												setShowDescription(!showDescription);
											} else {
												setActiveHotspot(hotspot);
												setClickedHotspotId(hotspot.id);
												setLoadingDescription(true);
												import(`../description/${hotspot.descriptionFile}`)
													.then((mod) => {
														setDescriptionContent(mod.content || "No description found.");
														setShowDescription(true);
													})
													.catch(() => {
														setDescriptionContent("No description found.");
														setShowDescription(true);
													})
													.finally(() => setLoadingDescription(false));
											}
										}}
									/>

								))}
								{/* DESCRIPTION LAYER: popup directly over image, centered */}
								{activeHotspot && showDescription && (
									<div className="absolute top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center" style={{ pointerEvents: 'auto', maxWidth: '600px' }}>
										<motion.div
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.2 }}
											className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 w-full relative"
											style={{ maxHeight: '60vh', overflowY: 'auto', maxWidth: '100%' }}
										>
											<button
												className="absolute top-2 right-2 text-gray-400 hover:text-green-400 text-2xl font-bold"
												onClick={() => setShowDescription(false)}
												aria-label="Close"
											>
												&times;
											</button>
											<div className="text-green-200 text-2xl font-bold mb-4 text-left">
												{activeHotspot.label}
											</div>
											<div className="overflow-x-auto overflow-y-auto w-full max-h-[40vh] px-2 mb-2">
												<div className="markdown-body prose prose-invert" style={{ minWidth: 0, maxWidth: '100%' }}>
													{loadingDescription ? (
														<div className="text-green-300 text-center py-8">Loading...</div>
													) : (
														<ReactMarkdown
															remarkPlugins={[remarkGfm]}
															components={{
																table: ({ children }) => (
																	<div className="table-wrapper overflow-x-auto my-4 border border-gray-700 rounded-lg">
																		<table className="min-w-full divide-y divide-gray-700">
																			{children}
																		</table>
																	</div>
																),
																th: ({ children }) => (
																	<th className="px-4 py-3 text-left text-sm font-semibold text-green-300 bg-gray-800 border-b border-gray-700">
																		{children}
																	</th>
																),
																td: ({ children }) => (
																	<td className="px-4 py-3 text-sm text-gray-300 border-b border-gray-700">
																		{children}
																	</td>
																),
																code: ({ children }) => (
																	<code className="px-1.5 py-0.5 rounded bg-gray-800 text-green-300 text-sm">
																		{children}
																	</code>
																)
															}}
														>
															{descriptionContent}
														</ReactMarkdown>
													)}
												</div>
											</div>
										</motion.div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}