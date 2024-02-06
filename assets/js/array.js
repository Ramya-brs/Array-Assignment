function findKthLargestSmallest(array, k) {
    if (k < 1 || k > array.length) {
        return "Invalid value of k";
    }

    // Sort the array in ascending order
    array.sort((a, b) => a - b);

    // kth smallest element
    const kthSmallest = array[k - 1];

    // kth largest element
    const kthLargest = array[array.length - k];

    return {
        kthSmallest,
        kthLargest
    };
}

function findKth() {
    // Get the comma-separated values from the input
    const inputValues = document.getElementById("arrayInput").value;
    
    // Split the input string into an array of numbers
    const array = inputValues.split(",").map(Number);

    const k = parseInt(document.getElementById("kValue").value);

    const result = findKthLargestSmallest(array, k);
    document.getElementById("result").innerHTML = `The ${k}th smallest element is: ${result.kthSmallest}<br>The ${k}th largest element is: ${result.kthLargest}`;
}