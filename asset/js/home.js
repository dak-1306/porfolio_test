const download = document.querySelector("#download");
download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/asset/file/Group 2.png";
  link.download = "Group 2.png";
  download.appendChild(link);
  link.click();
});
