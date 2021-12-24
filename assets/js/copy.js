function copyds()
{
    navigator.clipboard.writeText('clownl3ss#2328')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
