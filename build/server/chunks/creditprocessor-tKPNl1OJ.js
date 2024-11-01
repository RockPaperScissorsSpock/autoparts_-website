import axios from 'axios';
import { v4 } from 'uuid';

async function authorize(name, number, exp, amount) {
  v4();
  let request_data = {
    "vendor": "CAMR20-24",
    "trans": v4(),
    "cc": number,
    "name": name,
    "exp": exp,
    "amount": amount
  };
  return axios.post("http://blitz.cs.niu.edu/creditcard", request_data);
}

export { authorize as a };
//# sourceMappingURL=creditprocessor-tKPNl1OJ.js.map
