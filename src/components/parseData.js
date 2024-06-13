const parseData = (jsonData, texasCounties) => {
    return jsonData.data.map((county) => {
      const { fips_id, compartments } = county;
      const { S } = compartments;
      const totalSusceptible = [
        ...S.U.L,
        ...S.U.H,
        ...S.V.L,
        ...S.V.H
      ].reduce((sum, value) => sum + value, 0);
  
      const countyName = texasCounties.find(tc => tc.fips === fips_id)?.name || 'Unknown';
  
      return {
        county: countyName,
        fips: fips_id,
        susceptible: totalSusceptible
      };
    });
  };
  
  export default parseData;
  