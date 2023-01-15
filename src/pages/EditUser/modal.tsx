const Modal = (props: { isSuccess: boolean }) => {
	if (props.isSuccess) {
		return (
			<div
				className="bg-blue-100 border border-blue-400 text-white-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<span className="block sm:inline">User updated successfully</span>
			</div>
		);
	} else {
		return (
			<div
				className="bg-red-100 border border-red-400 text-white-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<span className="block sm:inline">Failed to update user</span>
			</div>
		);
	}
};

export default Modal;
