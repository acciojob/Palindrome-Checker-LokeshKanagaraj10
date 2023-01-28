// complete the given function

function palindrome(str){
	const n = str.length
	const arr = str.split("")
	let i = 0;
	let j = n-1;
	if(i<j)
	{
	if(arr[i] == arr[j])
		{
			i++;
			j--;
			if(i===j){
				return true
			}
		}
		else{
			return false
		}
	}


}
module.exports = palindrome
