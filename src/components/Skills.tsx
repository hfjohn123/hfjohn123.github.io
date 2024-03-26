import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SkillData from "../stores/SkillData";
import { Element } from "react-scroll";
import wordCloud from "highcharts/modules/wordcloud.js";

wordCloud(Highcharts);
const options = {
  chart: {
    reflow: true,
  },
  series: [
    {
      rotation: {
        from: 0,
        to: 0,
        orientations: 5,
      },
      type: "wordcloud",
      data: SkillData,
      name: "non-intern YOE",
    },
  ],
  title: {
    text: "",
  },
};
export default function Skills() {
  return (
    <Element name="Skills">
      <h1 className="text-center mb-5">My Skills</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Element>
  );
}
