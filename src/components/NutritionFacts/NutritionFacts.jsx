import styles from './NutritionFacts.module.css'

export default function NutritionFacts() {
  return (
    <div className={styles.panel}>
      <h3 className={styles.heading}>Supplement Facts</h3>
      <p className={styles.serving}>Serving Size: 2 Soft Gels (2500 mg)</p>
      <p className={styles.servings}>Servings Per Container: 30</p>
      <div className={styles.dividerThick} />
      <p className={styles.perServing}>Each softgel capsule contains:</p>
      <div className={styles.dividerThin} />
      <table className={styles.table}>
        <tbody>
          <tr className={styles.rowHeader}>
            <td></td>
            <td>Amount</td>
            <td>%RDA</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>11.25 kcal</td>
            <td>0.56%</td>
          </tr>
          <tr className={styles.rowAlt}>
            <td>Fat</td>
            <td>1.25 g</td>
            <td>1.85%</td>
          </tr>
          <tr>
            <td className={styles.bold}>Highly Purified Fish Oil</td>
            <td className={styles.bold}>1250 mg</td>
            <td>—</td>
          </tr>
          <tr className={styles.rowAlt}>
            <td style={{paddingLeft:'12px', fontSize:'0.8rem', color:'#4A5568'}}>(Containing Total Omega-3: 1075 mg)</td>
            <td></td>
            <td></td>
          </tr>
          <tr className={styles.highlight}>
            <td className={styles.sub}>Eicosapentaenoic Acid (EPA)</td>
            <td className={styles.bold}>600 mg</td>
            <td>**</td>
          </tr>
          <tr className={styles.highlight}>
            <td className={styles.sub}>Docosahexaenoic Acid (DHA)</td>
            <td className={styles.bold}>400 mg</td>
            <td>**</td>
          </tr>
          <tr>
            <td className={styles.sub}>Mixed Tocotrienol</td>
            <td>3.75 mg</td>
            <td>**</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.dividerThin} />
      <p className={styles.note}>* RDA values per serving based on ICMR 2020 guidelines for adults.</p>
      <p className={styles.note}>** RDA not established.</p>
    </div>
  )
}
