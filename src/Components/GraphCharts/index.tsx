import { Area } from '@ant-design/plots';
import { Box } from "@mui/system";
import './Graphchart.scss';



const GraphChart=()=>{

    const data=[
        {
          "timePeriod": "10:00 AM",
          "value": 4000
        },
        {
            "timePeriod": "12:00",
            "value": 2000
          },
          {
            "timePeriod": "1:00 PM",
            "value": 1000
          },
          {
            "timePeriod": "2:00 PM",
            "value": 5000
          },
          {
            "timePeriod": "3:00 PM",
            "value": 7000
          },
          {
            "timePeriod": "4:00 PM",
            "value": 1000
          },
          {
            "timePeriod": "5:00 PM",
            "value": 4000
          },
          {
            "timePeriod": "6:00 PM",
            "value": 15000
          },
          {
            "timePeriod": "7:00 PM",
            "value": 2000
          },
    ]

    //Configs for graphs
    const config = {
        line:{
            size:3
        },
        areaStyle: {
            fill: 'l(270) 0:#ffffff 0.5:#292F51 1:#292F51',
          },
        height:200,
        smooth:true,
        color:'#292F51',
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
          range: [0, 1],
        },
      };

    return(
    <Box sx={{border:2,padding:'20px',borderRadius:5,borderColor:'#E6EFFB'}} > 
        <Area {...config} />
    </Box>);
}

export default GraphChart