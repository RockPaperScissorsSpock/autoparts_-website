function cart_body() {
  return {
    items: []
  };
}
function to_pretty(input) {
  let out = input.split(" ");
  for (let i = 0; i < out.length; ++i)
    out[i] = out[i][0].toUpperCase() + out[i].substr(1);
  input = out.join(" ");
  return input;
}
function unix_to_time(ts) {
  let pretty_date = new Date(ts).toDateString();
  return pretty_date;
}

export { cart_body as c, to_pretty as t, unix_to_time as u };
//# sourceMappingURL=helpers-BeB4rNKG.js.map
