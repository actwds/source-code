export const createT11 = ({
  type,
}) => {

  return `
<div class="act-table-container">
  <table class="act-table__`+type+`">
    <thead>
      <tr>
        <th>Learner licence fees</th>
        <th>Fee</th>
        <th>Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Issue of a learner driver licence</td>
        <td>$51.10</td>
        <td>$51.10</td>
      </tr>
      <tr>
        <td>Renewal of learner driver licence</td>
        <td>$51.10</td>
        <td>$51.10</td>
      </tr>
      <tr>
        <td>Issue of a learner rider licence</td>
        <td>$25.50</td>
        <td>$25.50</td>
      </tr>
      <tr>
        <td>Renewal of a learner rider licence</td>
        <td>$25.50</td>
        <td>$25.50</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Learner licence fees</th>
        <th>Fee</th>
        <th>Fee</th>
      </tr>
    </tfoot>
  </table>
</div>
`;
};
