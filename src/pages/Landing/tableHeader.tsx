const TableHeader = () => {
	return (
		<thead>
			<tr className="bg-slate-700 text-gray-300">
				<th className="w-1/4 px-6 py-2 text-xs">NAME</th>
				<th className="w-1/4 px-6 py-2 text-xs">EMAIL</th>
				<th className="w-1/4 px-6 py-2 text-xs">OCCUPATION</th>
				<th className="w-1/12 px-6 py-2 text-xs md:block hidden">ACTION</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
