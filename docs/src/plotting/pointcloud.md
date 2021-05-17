# Plotting

## scaler fields: point cloud

aaa

## vector fields: cones and streamlines

aaaa

## atomic structures

```@example
a = 1
b = 2
a + b
```

Suppose we are working with the following plots:

```@repl subplots
using PlotlyJS  # hide
p1 = Plot(scatter(;y=randn(3)))
p2 = Plot(histogram(;x=randn(50), nbinsx=4))
p3 = Plot(scatter(;y=cumsum(randn(12)), name="Random Walk"))
p4 = Plot([scatter(;x=1:4, y=[0, 2, 3, 5], fill="tozeroy"),
           scatter(;x=1:4, y=[3, 5, 1, 7], fill="tonexty")])
```

If we wanted to combine `p1` and `p2` as subplots side-by-side, we would do

```@example subplots
[p1 p2]
```

If instead we wanted two rows and one column we could

```@example subplots
[p3, p4]
```

Finally, we can make a 2x2 grid of subplots:

```@example subplots
[p1 p2
 p3 p4]
```



```@example
using Plots
f(x) = sin(2x) + 1

x = range(-π, π, length=1001)
plot(x, f.(x), color = "red")
savefig("f-plot.svg"); nothing # hide
```
![](f-plot.svg)


```@example 1
using Plots
plotlyjs()

# ver1
f(x) = sin(2x) + 1

x = range(-π, π, length=1001)
p = plot(x, f.(x), color = "red")
sprint(show, MIME("image/svg+xml"), p)
```

```julia @example 1
using Plots
plotlyjs()

# ver2
f(x) = sin(2x) + 1

x = range(-π, π, length=1001)
p = plot(x, f.(x), color = "red")
show(stdout, MIME("image/svg+xml"), p)
```
