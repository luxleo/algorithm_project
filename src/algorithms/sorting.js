export function getQuickSortSequence(arr) {
	if (arr.length <= 1) return arr;
	sequence = [];
	tmpArr = [];
	tmpArr = arr.slice();
	quickSortHelper(0, tmpArr.length - 1);
	return sequence;
}
var sequence = [];
var tmpArr = [];

function quickSortHelper(start, end) {
	if (start >= end) return;
	const pivot = start;
	let left = start + 1;
	let right = end;
	while (left <= right) {
		while (left <= end && tmpArr[left] <= tmpArr[pivot]) {
			left += 1;
			sequence.push([left]);
		}
		while (right > start && tmpArr[right] > tmpArr[pivot]) {
			right -= 1;
			sequence.push([right]);
		}
		if (left > right) {
			[tmpArr[right], tmpArr[pivot]] = [tmpArr[pivot], tmpArr[right]];
			sequence.push([right, tmpArr[right], pivot, tmpArr[pivot]]);
		} else {
			[tmpArr[left], tmpArr[right]] = [tmpArr[right], tmpArr[left]];
			sequence.push([left, tmpArr[left], right, tmpArr[right]]);
		}
	}
	quickSortHelper(start, right - 1);
	quickSortHelper(right + 1, end);
}
