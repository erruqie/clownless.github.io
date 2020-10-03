function copyds()
{
    navigator.clipboard.writeText('s1linw#5674')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
