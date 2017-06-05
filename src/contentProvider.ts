import * as vscode from 'vscode';

export class MyContentProvider implements vscode.TextDocumentContentProvider {

  constructor(){

  }

  provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): string {
    // const html = "<!DOCTYPE html><html><head></head><body><div>Hello world</div></body></html>"

    const data = `id,value
flare,
flare.analytics,
flare.analytics.cluster,
flare.analytics.cluster.AgglomerativeCluster,3938
flare.analytics.cluster.CommunityStructure,3812
flare.analytics.cluster.HierarchicalCluster,6714
flare.analytics.cluster.MergeEdge,743
flare.analytics.graph,
flare.analytics.graph.BetweennessCentrality,3534
flare.analytics.graph.LinkDistance,5731
flare.analytics.graph.MaxFlowMinCut,7840
flare.analytics.graph.ShortestPaths,5914
flare.analytics.graph.SpanningTree,3416
flare.analytics.optimization,
flare.analytics.optimization.AspectRatioBanker,7074
flare.animate,
flare.animate.Easing,17010
flare.animate.FunctionSequence,5842
flare.animate.interpolate,
flare.animate.interpolate.ArrayInterpolator,1983
flare.animate.interpolate.ColorInterpolator,2047
flare.animate.interpolate.DateInterpolator,1375
flare.animate.interpolate.Interpolator,8746
flare.animate.interpolate.MatrixInterpolator,2202
flare.animate.interpolate.NumberInterpolator,1382
flare.animate.interpolate.ObjectInterpolator,1629
flare.animate.interpolate.PointInterpolator,1675
flare.animate.interpolate.RectangleInterpolator,2042
flare.animate.ISchedulable,1041
flare.animate.Parallel,5176
flare.animate.Pause,449
flare.animate.Scheduler,5593
flare.animate.Sequence,5534
flare.animate.Transition,9201
flare.animate.Transitioner,19975
flare.animate.TransitionEvent,1116
flare.animate.Tween,6006
flare.data,
flare.data.converters,
flare.data.converters.Converters,721
flare.data.converters.DelimitedTextConverter,4294
flare.data.converters.GraphMLConverter,9800
flare.data.converters.IDataConverter,1314
flare.data.converters.JSONConverter,2220
flare.data.DataField,1759
flare.data.DataSchema,2165
flare.data.DataSet,586
flare.data.DataSource,3331
flare.data.DataTable,772
flare.data.DataUtil,3322
flare.display,
flare.display.DirtySprite,8833
flare.display.LineSprite,1732
flare.display.RectSprite,3623
flare.display.TextSprite,10066
flare.flex,
flare.flex.FlareVis,4116
flare.physics,
flare.physics.DragForce,1082
flare.physics.GravityForce,1336
flare.physics.IForce,319
flare.physics.NBodyForce,10498
flare.physics.Particle,2822
flare.physics.Simulation,9983
flare.physics.Spring,2213
flare.physics.SpringForce,1681
flare.query,
flare.query.AggregateExpression,1616
flare.query.And,1027
flare.query.Arithmetic,3891
flare.query.Average,891
flare.query.BinaryExpression,2893
flare.query.Comparison,5103
flare.query.CompositeExpression,3677
flare.query.Count,781
flare.query.DateUtil,4141
flare.query.Distinct,933
flare.query.Expression,5130
flare.query.ExpressionIterator,3617
flare.query.Fn,3240
flare.query.If,2732
flare.query.IsA,2039
flare.query.Literal,1214
flare.query.Match,3748
flare.query.Maximum,843
flare.query.methods,
flare.query.methods.add,593
flare.query.methods.and,330
flare.query.methods.average,287
flare.query.methods.count,277
flare.query.methods.distinct,292
flare.query.methods.div,595
flare.query.methods.eq,594
flare.query.methods.fn,460
flare.query.methods.gt,603
flare.query.methods.gte,625
flare.query.methods.iff,748
flare.query.methods.isa,461
flare.query.methods.lt,597
flare.query.methods.lte,619
flare.query.methods.max,283
flare.query.methods.min,283
flare.query.methods.mod,591
flare.query.methods.mul,603
flare.query.methods.neq,599
flare.query.methods.not,386
flare.query.methods.or,323
flare.query.methods.orderby,307
flare.query.methods.range,772
flare.query.methods.select,296
flare.query.methods.stddev,363
flare.query.methods.sub,600
flare.query.methods.sum,280
flare.query.methods.update,307
flare.query.methods.variance,335
flare.query.methods.where,299
flare.query.methods.xor,354
flare.query.methods._,264
flare.query.Minimum,843
flare.query.Not,1554
flare.query.Or,970
flare.query.Query,13896
flare.query.Range,1594
flare.query.StringUtil,4130
flare.query.Sum,791
flare.query.Variable,1124
flare.query.Variance,1876
flare.query.Xor,1101
flare.scale,
flare.scale.IScaleMap,2105
flare.scale.LinearScale,1316
flare.scale.LogScale,3151
flare.scale.OrdinalScale,3770
flare.scale.QuantileScale,2435
flare.scale.QuantitativeScale,4839
flare.scale.RootScale,1756
flare.scale.Scale,4268
flare.scale.ScaleType,1821
flare.scale.TimeScale,5833
flare.util,
flare.util.Arrays,8258
flare.util.Colors,10001
flare.util.Dates,8217
flare.util.Displays,12555
flare.util.Filter,2324
flare.util.Geometry,10993
flare.util.heap,
flare.util.heap.FibonacciHeap,9354
flare.util.heap.HeapNode,1233
flare.util.IEvaluable,335
flare.util.IPredicate,383
flare.util.IValueProxy,874
flare.util.math,
flare.util.math.DenseMatrix,3165
flare.util.math.IMatrix,2815
flare.util.math.SparseMatrix,3366
flare.util.Maths,17705
flare.util.Orientation,1486
flare.util.palette,
flare.util.palette.ColorPalette,6367
flare.util.palette.Palette,1229
flare.util.palette.ShapePalette,2059
flare.util.palette.SizePalette,2291
flare.util.Property,5559
flare.util.Shapes,19118
flare.util.Sort,6887
flare.util.Stats,6557
flare.util.Strings,22026
flare.vis,
flare.vis.axis,
flare.vis.axis.Axes,1302
flare.vis.axis.Axis,24593
flare.vis.axis.AxisGridLine,652
flare.vis.axis.AxisLabel,636
flare.vis.axis.CartesianAxes,6703
flare.vis.controls,
flare.vis.controls.AnchorControl,2138
flare.vis.controls.ClickControl,3824
flare.vis.controls.Control,1353
flare.vis.controls.ControlList,4665
flare.vis.controls.DragControl,2649
flare.vis.controls.ExpandControl,2832
flare.vis.controls.HoverControl,4896
flare.vis.controls.IControl,763
flare.vis.controls.PanZoomControl,5222
flare.vis.controls.SelectionControl,7862
flare.vis.controls.TooltipControl,8435
flare.vis.data,
flare.vis.data.Data,20544
flare.vis.data.DataList,19788
flare.vis.data.DataSprite,10349
flare.vis.data.EdgeSprite,3301
flare.vis.data.NodeSprite,19382
flare.vis.data.render,
flare.vis.data.render.ArrowType,698
flare.vis.data.render.EdgeRenderer,5569
flare.vis.data.render.IRenderer,353
flare.vis.data.render.ShapeRenderer,2247
flare.vis.data.ScaleBinding,11275
flare.vis.data.Tree,7147
flare.vis.data.TreeBuilder,9930
flare.vis.events,
flare.vis.events.DataEvent,2313
flare.vis.events.SelectionEvent,1880
flare.vis.events.TooltipEvent,1701
flare.vis.events.VisualizationEvent,1117
flare.vis.legend,
flare.vis.legend.Legend,20859
flare.vis.legend.LegendItem,4614
flare.vis.legend.LegendRange,10530
flare.vis.operator,
flare.vis.operator.distortion,
flare.vis.operator.distortion.BifocalDistortion,4461
flare.vis.operator.distortion.Distortion,6314
flare.vis.operator.distortion.FisheyeDistortion,3444
flare.vis.operator.encoder,
flare.vis.operator.encoder.ColorEncoder,3179
flare.vis.operator.encoder.Encoder,4060
flare.vis.operator.encoder.PropertyEncoder,4138
flare.vis.operator.encoder.ShapeEncoder,1690
flare.vis.operator.encoder.SizeEncoder,1830
flare.vis.operator.filter,
flare.vis.operator.filter.FisheyeTreeFilter,5219
flare.vis.operator.filter.GraphDistanceFilter,3165
flare.vis.operator.filter.VisibilityFilter,3509
flare.vis.operator.IOperator,1286
flare.vis.operator.label,
flare.vis.operator.label.Labeler,9956
flare.vis.operator.label.RadialLabeler,3899
flare.vis.operator.label.StackedAreaLabeler,3202
flare.vis.operator.layout,
flare.vis.operator.layout.AxisLayout,6725
flare.vis.operator.layout.BundledEdgeRouter,3727
flare.vis.operator.layout.CircleLayout,9317
flare.vis.operator.layout.CirclePackingLayout,12003
flare.vis.operator.layout.DendrogramLayout,4853
flare.vis.operator.layout.ForceDirectedLayout,8411
flare.vis.operator.layout.IcicleTreeLayout,4864
flare.vis.operator.layout.IndentedTreeLayout,3174
flare.vis.operator.layout.Layout,7881
flare.vis.operator.layout.NodeLinkTreeLayout,12870
flare.vis.operator.layout.PieLayout,2728
flare.vis.operator.layout.RadialTreeLayout,12348
flare.vis.operator.layout.RandomLayout,870
flare.vis.operator.layout.StackedAreaLayout,9121
flare.vis.operator.layout.TreeMapLayout,9191
flare.vis.operator.Operator,2490
flare.vis.operator.OperatorList,5248
flare.vis.operator.OperatorSequence,4190
flare.vis.operator.OperatorSwitch,2581
flare.vis.operator.SortOperator,2023
flare.vis.Visualization,16540`;

const html3 = `<!DOCTYPE html>
<meta charset="utf-8">
<style>
#plotly-div div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
      <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <body>
    <!-- Plotly chart will be drawn inside this div -->
    <div id="plotly-div"></div>
      <script>
      trace1 = {
  x: [-0.918004847212, -0.366954812472, 2.10769936976, -1.36186062932, 0.734617937932, 0.177033774404, -0.294250343395, -0.432056272565, 1.48631113647, 0.69168329731, 1.58789964285, -0.690569716044, 1.33643815666, -0.341817563319, 0.0850405648524, -0.22232356565, 0.569451788252, 1.08941261116, 0.0304651604263, -1.26348349771, 0.402335103601, -0.608564386129, -0.16718297436, -1.10277715057, -0.99819581475, 0.942159786018, 2.13207339305, 1.84276996535, -1.65571577077, -0.64967030166, -1.70456586241, -1.52541080553, 0.0696185510334, -0.337366450476, 0.425406921697, -0.404908831862, -0.30386354393, 0.291674415564, -0.940368678953, 0.6289767759, -0.929057626566, 0.587901093376], 
  y: [0.0358474062601, 0.562548847421, -0.272395472784, -2.09333536187, 0.868253036993, -0.881290738643, -0.0995581872254, -0.939791559645, 0.723500337769, 0.581109316121, -0.58024774989, 1.50883279118, 0.773628731561, 0.873087256596, 0.456956341308, 1.29587173605, -1.42068301059, 0.00929734409214, -1.36790418732, 1.15443355127, -2.44284620889, -0.31943262591, -0.800667330265, 1.72528129702, -0.29050755999, -0.76043805896, 1.09630815451, 1.07309792014, 0.118716538233, 0.06158429101, -0.465153013545, 0.969859649563, -1.13683487699, -1.28630269174, 0.402387659944, 0.93850827096, 0.497127833057, -2.01260323673, 0.234905200399, 0.103018809065, 0.636508239384, 0.469321311071], 
  marker: {
    color: ['hsl(200,100,50.0)', 'hsl(200,100,40.0)', 'hsl(200,100,40.0)', 'hsl(200,100,100.0)', 'hsl(200,100,6.0)', 'hsl(200,100,0.4)', 'hsl(200,100,20.0)', 'hsl(200,100,100.0)', 'hsl(200,100,3.0)', 'hsl(200,100,20.0)', 'hsl(200,100,20.0)', 'hsl(200,100,20.0)', 'hsl(200,100,20.0)', 'hsl(200,100,20.0)', 'hsl(200,100,40.0)', 'hsl(200,100,40.0)', 'hsl(200,100,100.0)', 'hsl(200,100,10.0)', 'hsl(200,100,16.0)', 'hsl(200,100,60.0)', 'hsl(200,100,40.0)', 'hsl(200,100,20.0)', 'hsl(200,100,40.0)', 'hsl(200,100,0.0)', 'hsl(200,100,60.0)', 'hsl(200,100,30.0)', 'hsl(200,100,10.0)', 'hsl(200,100,1.0)', 'hsl(200,100,100.0)', 'hsl(200,100,60.0)', 'hsl(200,100,80.0)', 'hsl(200,100,60.0)', 'hsl(200,100,44.0)', 'hsl(200,100,100.0)', 'hsl(200,100,20.0)', 'hsl(200,100,40.0)', 'hsl(200,100,20.0)', 'hsl(200,100,72.0)', 'hsl(200,100,40.0)', 'hsl(200,100,60.0)', 'hsl(200,100,20.0)', 'hsl(200,100,40.0)'], 
    line: {width: 2}, 
    size: [100.0, 51.0204081633, 0.0, 100.0, 18.3673469388, 100.0, 100.0, 51.0204081633, 2.04081632653, 73.4693877551, 8.16326530612, 51.0204081633, 8.16326530612, 51.0204081633, 32.6530612245, 51.0204081633, 51.0204081633, 8.16326530612, 51.0204081633, 100.0, 73.4693877551, 100.0, 32.6530612245, 100.0, 100.0, 32.6530612245, 2.04081632653, 2.04081632653, 100.0, 51.0204081633, 73.4693877551, 73.4693877551, 32.6530612245, 51.0204081633, 32.6530612245, 51.0204081633, 51.0204081633, 32.6530612245, 73.4693877551, 8.16326530612, 73.4693877551, 18.3673469388]
  }, 
  mode: 'markers', 
  text: [7.0, 5.0, 0.0, 7.0, 3.0, 7.0, 7.0, 5.0, 1.0, 6.0, 2.0, 5.0, 2.0, 5.0, 4.0, 5.0, 5.0, 2.0, 5.0, 7.0, 6.0, 7.0, 4.0, 7.0, 7.0, 4.0, 1.0, 1.0, 7.0, 5.0, 6.0, 6.0, 4.0, 5.0, 4.0, 5.0, 5.0, 4.0, 6.0, 2.0, 6.0, 3.0], 
  type: 'scatter'
};
trace2 = {
  x: [-1.64388147319, -1.13929287795, 0.519561037116, 0.844639742896, 0.778633282299, 0.640340288826], 
  y: [0.0215340571489, -0.101979003149, 1.38177105796, 1.0858536765, -1.35398539396, -1.03319439451], 
  marker: {
    color: 'black', 
    size: 6, 
    symbol: 'x'
  }, 
  mode: 'markers+text', 
  text: ['Days 
 Out', 'Days 
 Closed', 'Revenue 
 Lost', 'Months to 
 Recover', 'Performance Rating', 'Information Rating'], 
  textposition: 'top', 
  type: 'scatter'
};
data = [trace1, trace2];
layout = {
  autosize: false, 
  height: 750, 
  showlegend: false, 
  width: 750, 
  xaxis: {title: 'Principal Component 1 (48.93% of variance)'}, 
  yaxis: {title: 'Principal Component 2 (18.59% of variance)'}
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
      </script>
    </body>
  </html>`;

const html2 = `<!DOCTYPE html>
<meta charset="utf-8">
<style>
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
<div class="chart" id='chart'></div>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
	var chart = document.getElementById('chart');
	Plotly.plot( chart, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
</script>`;

    const html = `<!DOCTYPE html>
<meta charset="utf-8">
<style>
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
<div class="chart"></div>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script>
var data = [4, 8, 15, 16, 23, 42];
var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
</script>`;


const html4 = `<!DOCTYPE html>
<meta charset="utf-8">
<style>

.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}

</style>
<svg width="960" height="600"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
var data = {
  "nodes": [
    {"id": "Myriel", "group": 1},
    {"id": "Napoleon", "group": 1},
    {"id": "Mlle.Baptistine", "group": 1},
    {"id": "Mme.Magloire", "group": 1},
    {"id": "CountessdeLo", "group": 1},
    {"id": "Geborand", "group": 1},
    {"id": "Champtercier", "group": 1},
    {"id": "Cravatte", "group": 1},
    {"id": "Count", "group": 1},
    {"id": "OldMan", "group": 1},
    {"id": "Labarre", "group": 2},
    {"id": "Valjean", "group": 2},
    {"id": "Marguerite", "group": 3},
    {"id": "Mme.deR", "group": 2},
    {"id": "Isabeau", "group": 2},
    {"id": "Gervais", "group": 2},
    {"id": "Tholomyes", "group": 3},
    {"id": "Listolier", "group": 3},
    {"id": "Fameuil", "group": 3},
    {"id": "Blacheville", "group": 3},
    {"id": "Favourite", "group": 3},
    {"id": "Dahlia", "group": 3},
    {"id": "Zephine", "group": 3},
    {"id": "Fantine", "group": 3},
    {"id": "Mme.Thenardier", "group": 4},
    {"id": "Thenardier", "group": 4},
    {"id": "Cosette", "group": 5},
    {"id": "Javert", "group": 4},
    {"id": "Fauchelevent", "group": 0},
    {"id": "Bamatabois", "group": 2},
    {"id": "Perpetue", "group": 3},
    {"id": "Simplice", "group": 2},
    {"id": "Scaufflaire", "group": 2},
    {"id": "Woman1", "group": 2},
    {"id": "Judge", "group": 2},
    {"id": "Champmathieu", "group": 2},
    {"id": "Brevet", "group": 2},
    {"id": "Chenildieu", "group": 2},
    {"id": "Cochepaille", "group": 2},
    {"id": "Pontmercy", "group": 4},
    {"id": "Boulatruelle", "group": 6},
    {"id": "Eponine", "group": 4},
    {"id": "Anzelma", "group": 4},
    {"id": "Woman2", "group": 5},
    {"id": "MotherInnocent", "group": 0},
    {"id": "Gribier", "group": 0},
    {"id": "Jondrette", "group": 7},
    {"id": "Mme.Burgon", "group": 7},
    {"id": "Gavroche", "group": 8},
    {"id": "Gillenormand", "group": 5},
    {"id": "Magnon", "group": 5},
    {"id": "Mlle.Gillenormand", "group": 5},
    {"id": "Mme.Pontmercy", "group": 5},
    {"id": "Mlle.Vaubois", "group": 5},
    {"id": "Lt.Gillenormand", "group": 5},
    {"id": "Marius", "group": 8},
    {"id": "BaronessT", "group": 5},
    {"id": "Mabeuf", "group": 8},
    {"id": "Enjolras", "group": 8},
    {"id": "Combeferre", "group": 8},
    {"id": "Prouvaire", "group": 8},
    {"id": "Feuilly", "group": 8},
    {"id": "Courfeyrac", "group": 8},
    {"id": "Bahorel", "group": 8},
    {"id": "Bossuet", "group": 8},
    {"id": "Joly", "group": 8},
    {"id": "Grantaire", "group": 8},
    {"id": "MotherPlutarch", "group": 9},
    {"id": "Gueulemer", "group": 4},
    {"id": "Babet", "group": 4},
    {"id": "Claquesous", "group": 4},
    {"id": "Montparnasse", "group": 4},
    {"id": "Toussaint", "group": 5},
    {"id": "Child1", "group": 10},
    {"id": "Child2", "group": 10},
    {"id": "Brujon", "group": 4},
    {"id": "Mme.Hucheloup", "group": 8}
  ],
  "links": [
    {"source": "Napoleon", "target": "Myriel", "value": 1},
    {"source": "Mlle.Baptistine", "target": "Myriel", "value": 8},
    {"source": "Mme.Magloire", "target": "Myriel", "value": 10},
    {"source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6},
    {"source": "CountessdeLo", "target": "Myriel", "value": 1},
    {"source": "Geborand", "target": "Myriel", "value": 1},
    {"source": "Champtercier", "target": "Myriel", "value": 1},
    {"source": "Cravatte", "target": "Myriel", "value": 1},
    {"source": "Count", "target": "Myriel", "value": 2},
    {"source": "OldMan", "target": "Myriel", "value": 1},
    {"source": "Valjean", "target": "Labarre", "value": 1},
    {"source": "Valjean", "target": "Mme.Magloire", "value": 3},
    {"source": "Valjean", "target": "Mlle.Baptistine", "value": 3},
    {"source": "Valjean", "target": "Myriel", "value": 5},
    {"source": "Marguerite", "target": "Valjean", "value": 1},
    {"source": "Mme.deR", "target": "Valjean", "value": 1},
    {"source": "Isabeau", "target": "Valjean", "value": 1},
    {"source": "Gervais", "target": "Valjean", "value": 1},
    {"source": "Listolier", "target": "Tholomyes", "value": 4},
    {"source": "Fameuil", "target": "Tholomyes", "value": 4},
    {"source": "Fameuil", "target": "Listolier", "value": 4},
    {"source": "Blacheville", "target": "Tholomyes", "value": 4},
    {"source": "Blacheville", "target": "Listolier", "value": 4},
    {"source": "Blacheville", "target": "Fameuil", "value": 4},
    {"source": "Favourite", "target": "Tholomyes", "value": 3},
    {"source": "Favourite", "target": "Listolier", "value": 3},
    {"source": "Favourite", "target": "Fameuil", "value": 3},
    {"source": "Favourite", "target": "Blacheville", "value": 4},
    {"source": "Dahlia", "target": "Tholomyes", "value": 3},
    {"source": "Dahlia", "target": "Listolier", "value": 3},
    {"source": "Dahlia", "target": "Fameuil", "value": 3},
    {"source": "Dahlia", "target": "Blacheville", "value": 3},
    {"source": "Dahlia", "target": "Favourite", "value": 5},
    {"source": "Zephine", "target": "Tholomyes", "value": 3},
    {"source": "Zephine", "target": "Listolier", "value": 3},
    {"source": "Zephine", "target": "Fameuil", "value": 3},
    {"source": "Zephine", "target": "Blacheville", "value": 3},
    {"source": "Zephine", "target": "Favourite", "value": 4},
    {"source": "Zephine", "target": "Dahlia", "value": 4},
    {"source": "Fantine", "target": "Tholomyes", "value": 3},
    {"source": "Fantine", "target": "Listolier", "value": 3},
    {"source": "Fantine", "target": "Fameuil", "value": 3},
    {"source": "Fantine", "target": "Blacheville", "value": 3},
    {"source": "Fantine", "target": "Favourite", "value": 4},
    {"source": "Fantine", "target": "Dahlia", "value": 4},
    {"source": "Fantine", "target": "Zephine", "value": 4},
    {"source": "Fantine", "target": "Marguerite", "value": 2},
    {"source": "Fantine", "target": "Valjean", "value": 9},
    {"source": "Mme.Thenardier", "target": "Fantine", "value": 2},
    {"source": "Mme.Thenardier", "target": "Valjean", "value": 7},
    {"source": "Thenardier", "target": "Mme.Thenardier", "value": 13},
    {"source": "Thenardier", "target": "Fantine", "value": 1},
    {"source": "Thenardier", "target": "Valjean", "value": 12},
    {"source": "Cosette", "target": "Mme.Thenardier", "value": 4},
    {"source": "Cosette", "target": "Valjean", "value": 31},
    {"source": "Cosette", "target": "Tholomyes", "value": 1},
    {"source": "Cosette", "target": "Thenardier", "value": 1},
    {"source": "Javert", "target": "Valjean", "value": 17},
    {"source": "Javert", "target": "Fantine", "value": 5},
    {"source": "Javert", "target": "Thenardier", "value": 5},
    {"source": "Javert", "target": "Mme.Thenardier", "value": 1},
    {"source": "Javert", "target": "Cosette", "value": 1},
    {"source": "Fauchelevent", "target": "Valjean", "value": 8},
    {"source": "Fauchelevent", "target": "Javert", "value": 1},
    {"source": "Bamatabois", "target": "Fantine", "value": 1},
    {"source": "Bamatabois", "target": "Javert", "value": 1},
    {"source": "Bamatabois", "target": "Valjean", "value": 2},
    {"source": "Perpetue", "target": "Fantine", "value": 1},
    {"source": "Simplice", "target": "Perpetue", "value": 2},
    {"source": "Simplice", "target": "Valjean", "value": 3},
    {"source": "Simplice", "target": "Fantine", "value": 2},
    {"source": "Simplice", "target": "Javert", "value": 1},
    {"source": "Scaufflaire", "target": "Valjean", "value": 1},
    {"source": "Woman1", "target": "Valjean", "value": 2},
    {"source": "Woman1", "target": "Javert", "value": 1},
    {"source": "Judge", "target": "Valjean", "value": 3},
    {"source": "Judge", "target": "Bamatabois", "value": 2},
    {"source": "Champmathieu", "target": "Valjean", "value": 3},
    {"source": "Champmathieu", "target": "Judge", "value": 3},
    {"source": "Champmathieu", "target": "Bamatabois", "value": 2},
    {"source": "Brevet", "target": "Judge", "value": 2},
    {"source": "Brevet", "target": "Champmathieu", "value": 2},
    {"source": "Brevet", "target": "Valjean", "value": 2},
    {"source": "Brevet", "target": "Bamatabois", "value": 1},
    {"source": "Chenildieu", "target": "Judge", "value": 2},
    {"source": "Chenildieu", "target": "Champmathieu", "value": 2},
    {"source": "Chenildieu", "target": "Brevet", "value": 2},
    {"source": "Chenildieu", "target": "Valjean", "value": 2},
    {"source": "Chenildieu", "target": "Bamatabois", "value": 1},
    {"source": "Cochepaille", "target": "Judge", "value": 2},
    {"source": "Cochepaille", "target": "Champmathieu", "value": 2},
    {"source": "Cochepaille", "target": "Brevet", "value": 2},
    {"source": "Cochepaille", "target": "Chenildieu", "value": 2},
    {"source": "Cochepaille", "target": "Valjean", "value": 2},
    {"source": "Cochepaille", "target": "Bamatabois", "value": 1},
    {"source": "Pontmercy", "target": "Thenardier", "value": 1},
    {"source": "Boulatruelle", "target": "Thenardier", "value": 1},
    {"source": "Eponine", "target": "Mme.Thenardier", "value": 2},
    {"source": "Eponine", "target": "Thenardier", "value": 3},
    {"source": "Anzelma", "target": "Eponine", "value": 2},
    {"source": "Anzelma", "target": "Thenardier", "value": 2},
    {"source": "Anzelma", "target": "Mme.Thenardier", "value": 1},
    {"source": "Woman2", "target": "Valjean", "value": 3},
    {"source": "Woman2", "target": "Cosette", "value": 1},
    {"source": "Woman2", "target": "Javert", "value": 1},
    {"source": "MotherInnocent", "target": "Fauchelevent", "value": 3},
    {"source": "MotherInnocent", "target": "Valjean", "value": 1},
    {"source": "Gribier", "target": "Fauchelevent", "value": 2},
    {"source": "Mme.Burgon", "target": "Jondrette", "value": 1},
    {"source": "Gavroche", "target": "Mme.Burgon", "value": 2},
    {"source": "Gavroche", "target": "Thenardier", "value": 1},
    {"source": "Gavroche", "target": "Javert", "value": 1},
    {"source": "Gavroche", "target": "Valjean", "value": 1},
    {"source": "Gillenormand", "target": "Cosette", "value": 3},
    {"source": "Gillenormand", "target": "Valjean", "value": 2},
    {"source": "Magnon", "target": "Gillenormand", "value": 1},
    {"source": "Magnon", "target": "Mme.Thenardier", "value": 1},
    {"source": "Mlle.Gillenormand", "target": "Gillenormand", "value": 9},
    {"source": "Mlle.Gillenormand", "target": "Cosette", "value": 2},
    {"source": "Mlle.Gillenormand", "target": "Valjean", "value": 2},
    {"source": "Mme.Pontmercy", "target": "Mlle.Gillenormand", "value": 1},
    {"source": "Mme.Pontmercy", "target": "Pontmercy", "value": 1},
    {"source": "Mlle.Vaubois", "target": "Mlle.Gillenormand", "value": 1},
    {"source": "Lt.Gillenormand", "target": "Mlle.Gillenormand", "value": 2},
    {"source": "Lt.Gillenormand", "target": "Gillenormand", "value": 1},
    {"source": "Lt.Gillenormand", "target": "Cosette", "value": 1},
    {"source": "Marius", "target": "Mlle.Gillenormand", "value": 6},
    {"source": "Marius", "target": "Gillenormand", "value": 12},
    {"source": "Marius", "target": "Pontmercy", "value": 1},
    {"source": "Marius", "target": "Lt.Gillenormand", "value": 1},
    {"source": "Marius", "target": "Cosette", "value": 21},
    {"source": "Marius", "target": "Valjean", "value": 19},
    {"source": "Marius", "target": "Tholomyes", "value": 1},
    {"source": "Marius", "target": "Thenardier", "value": 2},
    {"source": "Marius", "target": "Eponine", "value": 5},
    {"source": "Marius", "target": "Gavroche", "value": 4},
    {"source": "BaronessT", "target": "Gillenormand", "value": 1},
    {"source": "BaronessT", "target": "Marius", "value": 1},
    {"source": "Mabeuf", "target": "Marius", "value": 1},
    {"source": "Mabeuf", "target": "Eponine", "value": 1},
    {"source": "Mabeuf", "target": "Gavroche", "value": 1},
    {"source": "Enjolras", "target": "Marius", "value": 7},
    {"source": "Enjolras", "target": "Gavroche", "value": 7},
    {"source": "Enjolras", "target": "Javert", "value": 6},
    {"source": "Enjolras", "target": "Mabeuf", "value": 1},
    {"source": "Enjolras", "target": "Valjean", "value": 4},
    {"source": "Combeferre", "target": "Enjolras", "value": 15},
    {"source": "Combeferre", "target": "Marius", "value": 5},
    {"source": "Combeferre", "target": "Gavroche", "value": 6},
    {"source": "Combeferre", "target": "Mabeuf", "value": 2},
    {"source": "Prouvaire", "target": "Gavroche", "value": 1},
    {"source": "Prouvaire", "target": "Enjolras", "value": 4},
    {"source": "Prouvaire", "target": "Combeferre", "value": 2},
    {"source": "Feuilly", "target": "Gavroche", "value": 2},
    {"source": "Feuilly", "target": "Enjolras", "value": 6},
    {"source": "Feuilly", "target": "Prouvaire", "value": 2},
    {"source": "Feuilly", "target": "Combeferre", "value": 5},
    {"source": "Feuilly", "target": "Mabeuf", "value": 1},
    {"source": "Feuilly", "target": "Marius", "value": 1},
    {"source": "Courfeyrac", "target": "Marius", "value": 9},
    {"source": "Courfeyrac", "target": "Enjolras", "value": 17},
    {"source": "Courfeyrac", "target": "Combeferre", "value": 13},
    {"source": "Courfeyrac", "target": "Gavroche", "value": 7},
    {"source": "Courfeyrac", "target": "Mabeuf", "value": 2},
    {"source": "Courfeyrac", "target": "Eponine", "value": 1},
    {"source": "Courfeyrac", "target": "Feuilly", "value": 6},
    {"source": "Courfeyrac", "target": "Prouvaire", "value": 3},
    {"source": "Bahorel", "target": "Combeferre", "value": 5},
    {"source": "Bahorel", "target": "Gavroche", "value": 5},
    {"source": "Bahorel", "target": "Courfeyrac", "value": 6},
    {"source": "Bahorel", "target": "Mabeuf", "value": 2},
    {"source": "Bahorel", "target": "Enjolras", "value": 4},
    {"source": "Bahorel", "target": "Feuilly", "value": 3},
    {"source": "Bahorel", "target": "Prouvaire", "value": 2},
    {"source": "Bahorel", "target": "Marius", "value": 1},
    {"source": "Bossuet", "target": "Marius", "value": 5},
    {"source": "Bossuet", "target": "Courfeyrac", "value": 12},
    {"source": "Bossuet", "target": "Gavroche", "value": 5},
    {"source": "Bossuet", "target": "Bahorel", "value": 4},
    {"source": "Bossuet", "target": "Enjolras", "value": 10},
    {"source": "Bossuet", "target": "Feuilly", "value": 6},
    {"source": "Bossuet", "target": "Prouvaire", "value": 2},
    {"source": "Bossuet", "target": "Combeferre", "value": 9},
    {"source": "Bossuet", "target": "Mabeuf", "value": 1},
    {"source": "Bossuet", "target": "Valjean", "value": 1},
    {"source": "Joly", "target": "Bahorel", "value": 5},
    {"source": "Joly", "target": "Bossuet", "value": 7},
    {"source": "Joly", "target": "Gavroche", "value": 3},
    {"source": "Joly", "target": "Courfeyrac", "value": 5},
    {"source": "Joly", "target": "Enjolras", "value": 5},
    {"source": "Joly", "target": "Feuilly", "value": 5},
    {"source": "Joly", "target": "Prouvaire", "value": 2},
    {"source": "Joly", "target": "Combeferre", "value": 5},
    {"source": "Joly", "target": "Mabeuf", "value": 1},
    {"source": "Joly", "target": "Marius", "value": 2},
    {"source": "Grantaire", "target": "Bossuet", "value": 3},
    {"source": "Grantaire", "target": "Enjolras", "value": 3},
    {"source": "Grantaire", "target": "Combeferre", "value": 1},
    {"source": "Grantaire", "target": "Courfeyrac", "value": 2},
    {"source": "Grantaire", "target": "Joly", "value": 2},
    {"source": "Grantaire", "target": "Gavroche", "value": 1},
    {"source": "Grantaire", "target": "Bahorel", "value": 1},
    {"source": "Grantaire", "target": "Feuilly", "value": 1},
    {"source": "Grantaire", "target": "Prouvaire", "value": 1},
    {"source": "MotherPlutarch", "target": "Mabeuf", "value": 3},
    {"source": "Gueulemer", "target": "Thenardier", "value": 5},
    {"source": "Gueulemer", "target": "Valjean", "value": 1},
    {"source": "Gueulemer", "target": "Mme.Thenardier", "value": 1},
    {"source": "Gueulemer", "target": "Javert", "value": 1},
    {"source": "Gueulemer", "target": "Gavroche", "value": 1},
    {"source": "Gueulemer", "target": "Eponine", "value": 1},
    {"source": "Babet", "target": "Thenardier", "value": 6},
    {"source": "Babet", "target": "Gueulemer", "value": 6},
    {"source": "Babet", "target": "Valjean", "value": 1},
    {"source": "Babet", "target": "Mme.Thenardier", "value": 1},
    {"source": "Babet", "target": "Javert", "value": 2},
    {"source": "Babet", "target": "Gavroche", "value": 1},
    {"source": "Babet", "target": "Eponine", "value": 1},
    {"source": "Claquesous", "target": "Thenardier", "value": 4},
    {"source": "Claquesous", "target": "Babet", "value": 4},
    {"source": "Claquesous", "target": "Gueulemer", "value": 4},
    {"source": "Claquesous", "target": "Valjean", "value": 1},
    {"source": "Claquesous", "target": "Mme.Thenardier", "value": 1},
    {"source": "Claquesous", "target": "Javert", "value": 1},
    {"source": "Claquesous", "target": "Eponine", "value": 1},
    {"source": "Claquesous", "target": "Enjolras", "value": 1},
    {"source": "Montparnasse", "target": "Javert", "value": 1},
    {"source": "Montparnasse", "target": "Babet", "value": 2},
    {"source": "Montparnasse", "target": "Gueulemer", "value": 2},
    {"source": "Montparnasse", "target": "Claquesous", "value": 2},
    {"source": "Montparnasse", "target": "Valjean", "value": 1},
    {"source": "Montparnasse", "target": "Gavroche", "value": 1},
    {"source": "Montparnasse", "target": "Eponine", "value": 1},
    {"source": "Montparnasse", "target": "Thenardier", "value": 1},
    {"source": "Toussaint", "target": "Cosette", "value": 2},
    {"source": "Toussaint", "target": "Javert", "value": 1},
    {"source": "Toussaint", "target": "Valjean", "value": 1},
    {"source": "Child1", "target": "Gavroche", "value": 2},
    {"source": "Child2", "target": "Gavroche", "value": 2},
    {"source": "Child2", "target": "Child1", "value": 3},
    {"source": "Brujon", "target": "Babet", "value": 3},
    {"source": "Brujon", "target": "Gueulemer", "value": 3},
    {"source": "Brujon", "target": "Thenardier", "value": 3},
    {"source": "Brujon", "target": "Gavroche", "value": 1},
    {"source": "Brujon", "target": "Eponine", "value": 1},
    {"source": "Brujon", "target": "Claquesous", "value": 1},
    {"source": "Brujon", "target": "Montparnasse", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Bossuet", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Joly", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Grantaire", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Bahorel", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Courfeyrac", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Gavroche", "value": 1},
    {"source": "Mme.Hucheloup", "target": "Enjolras", "value": 1}
  ]
};
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

var graph = data;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

</script>`;

    return html4;

  }

}