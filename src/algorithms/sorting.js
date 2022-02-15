export function getQuickSortSequence(arr) {
	const sequence = [];
	if (arr.length <= 1) return arr;
	const tmparr = arr.slice();
	quickSortHelper(tmparr, 0, tmparr.length - 1, sequence);
	return sequence;
}

function quickSortHelper(arr, start, end, sequence) {
	if (start >= end) return;
	const pivot = start;
	let left = start + 1;
	let right = end;
	sequence.push([left]);
	sequence.push([right]);
	while (left <= right) {
		while (left <= end && arr[left] <= arr[pivot]) {
			left += 1;
			sequence.push([left]);
		}
		while (right > start && arr[right] >= arr[pivot]) {
			right -= 1;
			sequence.push([right]);
		}
		if (left > right) {
			let tmp = 0;
			tmp = arr[right];
			arr[right] = arr[pivot];
			arr[pivot] = tmp;
			sequence.push([right, arr[right], pivot, arr[pivot]]);
		} else {
			let tmp = 0;
			tmp = arr[left];
			arr[left] = arr[right];
			arr[right] = tmp;
			sequence.push([left, arr[left], right, arr[right]]);
		}
		quickSortHelper(arr, start, right - 1, sequence);
		quickSortHelper(arr, right + 1, end, sequence);
	}
}
