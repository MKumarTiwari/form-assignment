export const flattenData = (data) => {
    return data.map(item => {
      let flatItem = {};
      let skills = [];
      for (let key in item) {
        if (item[key] && typeof item[key] === 'object' && !Array.isArray(item[key])) {
          for (let subKey in item[key]) {
            if (item[key][subKey]) {
              skills.push(subKey.charAt(0).toUpperCase() + subKey.slice(1));
            }
          }
        } else {
          flatItem[key] = item[key];
        }
      }
      flatItem.skills = skills.join(', ');
      return flatItem;
    });
  };
  