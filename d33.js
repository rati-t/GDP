const r = []
const k = []
var i;
        fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
            .then(response => response.json())
            .then(data => {
               for( i=0; i<data.data.length; i++){
                     var a = parseInt(data.data[i][0].slice(0,4))
                     
                     if(data.data[i][0].slice(6,7) == "4"){ a += 0.25}
                     if(data.data[i][0].slice(6,7) == "7"){ a += 0.5}
                     if(data.data[i][0].slice(6,7) == "0"){ a += 0.75}
                  
                     
                    r.push(data.data[i])
                    r[i].push(a);
               }

               



const padding = 40;
const h_1 = 720;
const w_1 = $(document).width() - padding;
const w = 1000;
const h = 400;
const bar_width = (w_1-padding-r.length)/r.length;


const yScale = d3.scaleLinear()
                     .domain([0, d3.max(r, (d) => d[1])])
                     .range([h, 0]);

const xScale = d3.scaleLinear()
                     .domain([d3.min(r,(d) => d[2]), d3.max(r, (d) => d[2])])
                     .range([padding, w_1]);
// 20 = (150,50)

console.log(d3.min(r,(d) => d[2]));
console.log(d3.max(r,(d) => d[2]));


const svg = d3.select("#div1")
      .append("svg")
      .attr("width", w_1+10)
      .attr("height", h_1)
      .attr("class","sg")

      svg.selectAll("rect")
      .data(r)
      .enter()
      .append("rect")
      .attr("width", bar_width)
      .attr("height", (d) => h-yScale(d[1]))
      .attr("x",(d,e) => xScale(d[2]))
      .attr("y", (d) => yScale(d[1]-10))
      .attr("fill" , "cyan")
      .attr("class","bar")
      .append("title")
      .text((d) => { 
            var a = d[1].toString() + " $ Billion / " + d[0].slice(0,4) + " "
            
            if(d[0][6] == 1){ a = a + "Q1"}
            if(d[0][6] == 4){ a = a + "Q2"}
            if(d[0][6] == 7){ a = a + "Q3"}
            if(d[0][6] == 0){ a = a + "Q4"}

            return a }) 

      
      
      
      const yAxis = d3.axisLeft(yScale);
      const xAxis = d3.axisBottom(xScale);

      svg.append("g")
      .attr("transform", "translate("+ padding + "," + yScale(d3.max(r, (d) => d[1])-10) + ")")
      .call(yAxis)

      svg.append("g")
      .attr("transform", "translate("+ 0 + "," + h + ")")
      .call(xAxis)
      


})



       
  