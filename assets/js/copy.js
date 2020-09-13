function copyds()
{
    navigator.clipboard.writeText('m4x3r#1337')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
