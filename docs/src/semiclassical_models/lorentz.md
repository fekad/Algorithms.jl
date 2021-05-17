## Driven harmonic oscillators

Driven harmonic oscillators are damped oscillators further affected by an externally applied sinusoidal driving force:
$$ \ddot{x}(t) + \gamma \dot{x}(t)  + \omega_0^2 x(t) = A_0 e^{-i \omega t} $$
where
- $A_0$ is the driving amplitude,
- $\omega$ is the driving frequency,
- $\omega_{0}$ is the undamped angular frequency,
- $\gamma$ is the damping ratio

Lest suppose that the solution exist in the following form ($\gamma > 0$):

$$ x(t) = x_0 e^{-i \omega_0 t} e^{-\gamma t}$$

The Lotenz-Drude term:
$$ \frac{A_0}{\omega_0^2-\omega^2-i \gamma \omega}$$


Total dielectric function:
$$ \varepsilon(\omega) = \varepsilon_\infty + \sum \limits_i \frac{A_i}{\omega_i^2-\omega^2-i \gamma_i \omega} $$
Note: Drude model is a special case of the Lotenz term with $A_0 = \omega_p^2$ and $\omega_0 = 0$

```julia
Loretnz(omega, A_0, omega_0, gamma) =  A_0 / (omega_0^2 - omega^2 - im * gamma * omega)
x(t, x_0, omega_0, gamma) = x_0 * exp(-im * omega_0 * t)* exp(-gamma * t)
```

```julia
omega = 0:.01:10

A_0, omega_0 = 10, 4
gamma = [0 .25 .5 1. 2]

eps_lorentz = @. Loretnz(omega, A_0, omega_0, gamma)
gr()
# plot(omega, [real(eps_lorentz) imag(eps_lorentz)], label=["Re(ε(ω))", "Im(ε(ω))"], layout=(2,1))
plot(
    plot(omega, real(eps_lorentz),label=["γ = $g" for g in gamma], ylims=[-6, 6]),
    plot(omega, imag(eps_lorentz), label=["γ = $g" for g in gamma]),
    layout=(2,1)
)
```

```julia
t = 0:0.01:10
plotlyjs()
x_0, omega_0 = 1, 1
gamma = [0 .25 .5 1. 2]

X = @. x(t, x_0, omega_0, gamma )
plot(t, real(X))

```




# Lorentzian lineshape (Cauchy distribution)

A random vector $X=(X_1, \ldots, X_k)^T$ is said to have the multivariate Cauchy distribution if every linear combination of its components $Y=a_1X_1+ \cdots + a_kX_k$ has a Cauchy distribution. That is, for any constant vector $a\in \mathbb R^k$, the random variable $Y=a^TX$ should have a univariate Cauchy distribution. The characteristic function of a multivariate Cauchy distribution is given by:

$$ \varphi_X(t) =  e^{ix_0(t)-\gamma(t)}, \!$$

where $x_0(t$ and $\gamma(t$ are real functions with $x_0(t$ a homogeneous function of degree one and $\gamma(t$ a positive homogeneous function of degree one.

$$ x_0(at) = ax_0(t),$$
$$ \gamma (at) = |a|\gamma (t),$$

for all $t$.

An example of a bivariate Cauchy distribution can be given by:
$$ f(x, y; x_0,y_0,\gamma)= { 1 \over 2 \pi } \left[ { \gamma \over ((x - x_0)^2 + (y - y_0)^2 +\gamma^2)^{3/2}  } \right] .$$
Note that in this example, even though there is no analogue to a covariance matrix, $x$ and $y$ are not Independence (probability theory)|statistically independent.

We also can write this formula for complex variable. Then the probability density function of complex cauchy is :

$$ f(z; z_0,\gamma)= { 1 \over 2 \pi } \left[ { \gamma \over (|z-z_0|^2 +\gamma^2)^{3/2}  } \right] .$$

Analogous to the univariate density, the multidimensional Cauchy density also relates to the multivariate Student distribution. They are equivalent when the degrees of freedom parameter is equal to one. The density of a $k$ dimension Student distribution with one degree of freedom becomes:

$$ f({\mathbf x}; {\mathbf\mu},{\mathbf\Sigma}, k)= \frac{\Gamma\left(\frac{1+k}{2}\right)}{\Gamma(\frac{1}{2})\pi^{\frac{k}{2}}\left|{\mathbf\Sigma}\right|^{\frac{1}{2}}\left[1+({\mathbf x}-{\mathbf\mu})^T{\mathbf\Sigma}^{-1}({\mathbf x}-{\mathbf\mu})\right]^{\frac{1+k}{2}}} .$$

Properties and details for this density can be obtained by taking it as a particular case of the multivariate Student density.

### Lorentzian

$$ f(x; x_0,\gamma)= { 1 \over 2 \pi } \left[ { \frac{\gamma}{|x-x_0|^2 +\gamma^2 }} \right]$$
$$ \varphi(\xi; x_0, \gamma) =  e^{i x_0 \xi} \cdot e^{- \gamma | \xi |}$$

```julia
using Plots
# plotlyjs()
gr()
```

```julia
Lorentzian(x, x₀, γ) = 1 / 2π * γ / ((x- x₀)^2 + γ^2)

x₀, γ = 6, .5
X = LinRange(0,10,1001)
plot(X, Lorentzian.(X, x₀, γ))
```

```julia
phi(ξ, x₀, γ) = exp(- im * x₀ * ξ) * exp(-γ * abs(ξ))

Ξ = LinRange(-2π, 2π, 1001)
r = phi.(Ξ, x₀, γ)
plot(Ξ, real(r), imag(r), xlabel="ω", ylabel="Re", zlabel="Im")
```


```julia
plot(
    plot(Ξ, abs.(r), label="abs"),
    plot!(Ξ, angle.(r), label="angle"),
    layout=(2,1),
    size=(800,400)
)
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```


```julia
```

