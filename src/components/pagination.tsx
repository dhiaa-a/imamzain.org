"use client"

import React, { useState, useEffect } from "react"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
} from "@/components/ui/pagination"

interface PaginationProps {
	data: any[] // Replace with your actual data type
	itemsPerPage: number
	onPageChange: (page: number) => void
}

const PaginatedComponent: React.FC<PaginationProps> = ({
	data,
	itemsPerPage,
	onPageChange,
}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(data.length / itemsPerPage)

	useEffect(() => {
		onPageChange(currentPage) // Trigger callback on page change
	}, [currentPage])

	const handlePageChange = (newPage: number) => {
		if (newPage < 1 || newPage > totalPages) return // Prevent invalid page numbers
		setCurrentPage(newPage)
	}

	const paginatedData = data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	return (
		<Pagination>
			<PaginationContent>
				<PaginationPrevious
					onClick={() => handlePageChange(currentPage - 1)}
				/>

				{/* Show first few pages directly, then ellipsis if needed */}
				{Array.from({ length: Math.min(3, totalPages) }, (_, index) => (
					<PaginationItem key={index}>
						<PaginationLink
							onClick={() => handlePageChange(index + 1)}
							isActive={currentPage === index + 1}
						>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}

				{/* Ellipsis if number of pages exceeds visible range */}
				{totalPages > 3 && (
					<PaginationEllipsis
						className={`${
							!Number.isNaN(currentPage) &&
							currentPage > 3 &&
							currentPage < totalPages - 2
								? "visible"
								: "invisible"
						}`}
					/>
				)}

				{/* Show last few pages directly if more than 3 pages in total */}
				{totalPages > 3 && (
					<PaginationItem>
						<PaginationLink
							onClick={() => handlePageChange(totalPages)}
							isActive={currentPage === totalPages}
						>
							{totalPages}
						</PaginationLink>
					</PaginationItem>
				)}

				<PaginationNext
					onClick={() => handlePageChange(currentPage + 1)}
				/>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginatedComponent
