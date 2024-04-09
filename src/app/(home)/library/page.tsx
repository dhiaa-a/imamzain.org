import { SearchIcon } from "@/components/icons"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { DownloadIcon, ListBulletIcon } from "@radix-ui/react-icons"
import Image from "next/image"

import { books, categories } from "@/utils/data"

const tableFields = [
	"الترقيم",
	"صورة الغلاف",
	"العنوان",
	"النوع",
	"المطبعة / دار النشر",
	"سنة النشر",
]

const tableCategory = [
	"كل الاقسام",
	"اللغة العربية",
	"اللغات الاخرى",
	"المقالات والبحوث",
]

export default function page() {
	return (
		<div className="max-w-7xl mx-auto border-[1px] border-slate-300 rounded-xl shadow-lg my-10">
			<div className="flex justify-center border-b-2 border-slate-200 my-2">
				{tableCategory.map((cat) => (
					<button
						key={cat}
						className={`border-b-2 border-transparent p-4 ${
							cat === tableCategory[0] ? "border-b-primary" : ""
						}`}
					>
						{cat}
					</button>
				))}
			</div>
			{/* table */}
			<>
				{/* Table Section */}
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					{/* Card */}
					<div className="flex flex-col">
						<div className="-m-1.5 overflow-x-auto">
							<div className="p-1.5 min-w-full inline-block align-middle">
								<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
									{/* Header */}
									<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
										{/* Input */}
										<div className="sm:col-span-1">
											<label
												htmlFor="searchbox"
												className="sr-only"
											>
												ابحث
											</label>
											<div className="relative">
												<input
													type="text"
													id="searchbox"
													name="searchbox"
													className="py-2 px-3 ps-11 block w-full focus:outline-none text-sm disabled:opacity-50 border-b-2 border-transparent focus:border-slate-200 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													placeholder="ابحث"
												/>
												<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
													<SearchIcon />
												</div>
											</div>
										</div>
										{/* End Input */}
										<div className="sm:col-span-2 md:grow">
											<div className="flex justify-end gap-x-4">
												<button
													id="hs-as-table-table-export-dropdown"
													type="button"
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
												>
													فلترة
													<ListBulletIcon />
												</button>
												<div className="hs-dropdown relative inline-block [--placement:bottom-right]">
													<button
														id="hs-as-table-table-export-dropdown"
														type="button"
														className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
													>
														تنزيل
														<DownloadIcon />
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* End Header */}
									{/* Table */}
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead className="bg-gray-50 dark:bg-slate-800">
											<tr>
												{tableFields.map((field) => (
													<th
														key={field}
														scope="col"
														className="px-6 py-3 text-center text-sm font-light"
													>
														{field}
													</th>
												))}
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
											{books.map((book) => (
												<tr
													key={book.id}
													className="bg-white duration-150  border-[1px] border-transparent hover:border-primary-200 dark:bg-slate-900 dark:hover:bg-slate-800"
												>
													<td className="size-px text-center text-xs whitespace-nowrap">
														{book.id}
													</td>
													<td className="size-px text-xs text-center">
														<div className="flex justify-center p-2">
															<Image
																width={150}
																height={150}
																className="flex-shrink-0 rounded-md w-3/4 h-auto"
																src={
																	book.coverImageUrl
																}
																alt={`صورة من ${book.title}`}
															/>
														</div>
													</td>
													<td className="size-px text-center">
														<div className="block p-6">
															<div className="flex items-center justify-center">
																<div className="grow">
																	<span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
																		{
																			book.title
																		}
																	</span>
																	<span className="block text-sm text-gray-500">
																		تأليف{" "}
																		{
																			book.author
																		}
																	</span>
																</div>
															</div>
														</div>
													</td>
													<td className="size-px text-center">
														<div className="block p-6">
															<span className="py-1 px-2 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
																{
																	categories[
																		book
																			.categoryId
																	]
																}
															</span>
														</div>
													</td>
													<td className="text-center size-px w-40">
														<div className="block p-6">
															<span className="block text-xs text-gray-800 dark:text-gray-200">
																{book.publisher}
															</span>
														</div>
													</td>
													<td className="size-px text-center">
														<div className="block p-6">
															<span className="text-sm text-gray-600 dark:text-gray-400">
																{book.issueDate}
															</span>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
									{/* End Table */}
									{/* Footer */}
									<div className="flex border-t-[1px] p-3">
										<Pagination>
											<PaginationContent className="flexrowrev">
												<PaginationItem>
													<PaginationPrevious href="#" />
												</PaginationItem>
												<PaginationItem>
													<PaginationLink href="#">
														1
													</PaginationLink>
												</PaginationItem>
												<PaginationItem>
													<PaginationLink
														href="#"
														isActive
													>
														2
													</PaginationLink>
												</PaginationItem>
												<PaginationItem>
													<PaginationLink href="#">
														3
													</PaginationLink>
												</PaginationItem>
												<PaginationItem>
													<PaginationEllipsis />
												</PaginationItem>
												<PaginationItem>
													<PaginationNext href="#" />
												</PaginationItem>
											</PaginationContent>
										</Pagination>
									</div>
									{/* End Footer */}
								</div>
							</div>
						</div>
					</div>
					{/* End Card */}
				</div>
				{/* End Table Section */}
			</>
		</div>
	)
}
