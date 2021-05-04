import axios from "axios";

export function thoughtsLength() {
  axios.get('http://localhost:5000/thoughts')
    .then((response) => {
      const data = response.data;
      const length = data.length;
      let intMarker
      
      const level = Math.floor(data.length / 10);
      if (length === 0) {
        intMarker = 0
      } else if (length % 10 === 0 && length != 0) {
        intMarker = 100
      } else {
        intMarker = (length % 10) * 10;
      };

      return [level, intMarker]
    });
}
