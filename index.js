function handleSubmit() {
  let phone = document.getElementById("phone").value
  alert(phone)
  if ((phone.value.match(/\d/g) || []).length === 10) {
    alert("success")
  } else {
    alert("invalid")
  }
}
