const message = document.querySelector(".text-area");
const result= document.querySelector(".result");

function btnEncrypt(){
    const encryptText = encrypt(message.value)
    result.value= encryptText
    message.value = ""
   
}

function btnDecrypt(){
    const decryptText = decrypt(message.value)
    result.value= decryptText
    message.value = ""
   
}

function encrypt(encryptStr){
    let matrix = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    encryptStr = encryptStr.toLowerCase()

    for (let i = 0; i < matrix.length; i++){

        if (encryptStr.includes(matrix[i][0])){
            encryptStr = encryptStr.replaceAll(matrix[i][0], matrix[i][1])
        }
    }
    return encryptStr

}


function decrypt(decryptStr){
    let matrix = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    decryptStr = decryptStr.toLowerCase()

    for (let i = 0; i < matrix.length; i++){

        if (decryptStr.includes(matrix[i][1])){
            decryptStr = decryptStr.replaceAll(matrix[i][1], matrix[i][0])
        }
    }
    return decryptStr

}

function copyToClipboard() {
    var textarea = document.querySelector(".result");
    // Select the text inside the textarea
    textarea.select();
  
    try {
      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(textarea.value);
    } catch (error) {
      // Display an error message if copying fails
      alert("Failed to copy text to clipboard!");
    }
  }