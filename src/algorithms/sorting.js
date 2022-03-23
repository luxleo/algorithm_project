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
var sequence2 = [];
var tmpArr2 = [];
export function getSelectionSortSequence(arr) {
	sequence2 = [];
	tmpArr2 = [];
	tmpArr2 = arr.slice();
	selectionSortHelper();
	return sequence2;
}
function selectionSortHelper() {
	for (let i = 0; i < tmpArr2.length - 1; i++) {
		let min_idx = i;
		for (let j = i + 1; j < tmpArr2.length; j++) {
			if (tmpArr2[j] < tmpArr2[min_idx]) {
				min_idx = j;
			}
			sequence2.push([j]);
		}
		[tmpArr2[i], tmpArr2[min_idx]] = [tmpArr2[min_idx], tmpArr2[i]];
		sequence2.push([i, tmpArr2[i], min_idx, tmpArr2[min_idx]]);
	}
}
export function getInsertionSortSequence(arr) {
	sequence2 = [];
	tmpArr2 = [];
	tmpArr2 = arr.slice();
	insertionSortHelper();
	return sequence2;
}
function insertionSortHelper() {
	for (let i = 1; i < tmpArr2.length; i++) {
		for (let j = i; j > 0; j--) {
			sequence2.push([j]);
			if (tmpArr2[j] < tmpArr2[j - 1]) {
				[tmpArr2[j], tmpArr2[j - 1]] = [tmpArr2[j - 1], tmpArr2[j]];
				sequence2.push([j, tmpArr2[j], j - 1, tmpArr2[j - 1]]);
			} else {
				break;
			}
		}
	}
}
