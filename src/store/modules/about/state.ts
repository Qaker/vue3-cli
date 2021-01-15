import { times } from "lodash";

export default times(20, num => ({
  type: "input",
  title: `字段${++num}`,
  field: `field${num}`,
  value: `value${num}`,
  col: {
    span: 12,
    labelWidth: 150
  },
  props: {
    type: "text"
  },
  validate: [{ required: true, message: `请输入field${num}` }]
}));
