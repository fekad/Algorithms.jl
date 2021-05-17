# Driven harmonic oscillator (drude and lorentz models)

One can write a simple equation of motion for an electron of the plasma sea subjected to an external electric field $E$:
$$ m \ddot{x} + m \gamma \dot{x} = −e E $$

If we assume a harmonic time dependence $E(t) = E_0 e^{−i \omega t}$ of the driving field, a particular solution of this equation describing the oscillation of the electron is $x(t) = x_0 e^{−i \omega t}$. The complex amplitude $x_0$ incorporates any phase shifts between driving field and response via
$$ x(t) = \frac{e}{m (\omega^2 + i \gamma \omega)} E(t). $$

The displaced electrons contribute to the macroscopic polarization $P = −nex$, explicitly given by
$$ P = -\frac{n e^2}{m(\omega^2 + i \gamma \omega)} E. $$

Inserting this expression for $P$ into equation ($D = \varepsilon_0 E + P$) yields
$$D = \varepsilon_0(1 - \frac{\omega_p^2}{\omega^2 + i \gamma \omega})E, $$
where $\omega_p^2 = \frac{n e^2}{\varepsilon_0 m}$ is the plasma frequency of the free electron gas. Therefore we arrive at the desired result, the dielectric function of the free electron gas:
$$ \varepsilon(\omega) = 1 - \frac{\omega_p^2}{\omega^2 + i \gamma \omega}. $$

The real and imaginary components of this complex dielectric function $\varepsilon(\omega) = \varepsilon_1(\omega) + i \varepsilon_2(\omega)$ are given by
$$ \varepsilon_1(\omega) = 1 - \frac{\omega_p^2 \tau^2}{1 + \omega^2 \tau^2}. $$
$$ \varepsilon_2(\omega) = 1 - \frac{\omega_p^2 \tau}{\omega(1 + \omega^2 \tau^2)}. $$

where we have used $\gamma = \frac{1}{\tau}$.

```julia
Drude(omega, omega_p, gamma) = 1 - omega_p^2 / (omega^2 + im * gamma * omega)
```



```julia
omega = 0:.1:10
omega_p = 1
gamma = 1

eps_drude = @. Drude(omega, omega_p, gamma)

plot(omega, [real(eps_drude) imag(eps_drude)], label=["Re(ε(ω))" "Im(ε(ω))"], layout=(2,1))

```
It is insightful to study (???) for a variety of different frequency regimes with respect to the collision frequency $\gamma$. We will limit ourselves here to frequencies $\omega < \omega_p$, where metals retain their metallic character. For large frequencies close to $\omega_p$ , the product $\omega \tau \gg 1$, leading to negligible damping. Here, $\varepsilon(\omega)$ is predominantly real, and
$$ \varepsilon(\omega) = 1- \frac{\omega_p^2}{\omega^2} $$

can be taken as the dielectric function of the undamped free electron plasma.

```julia
omega = 0:.1:10
omega_p = 3
gamma = 1

eps_drude = @. Drude(omega, omega_p, gamma)
eps_approx = @. 1 - omega_p^2 / omega^2


plot(omega, real(eps_drude), label="Re(ε(ω))", ylimits=[-10, 1])
plot!(omega, eps_approx, label="approx")
```

```julia
```

```julia
```

```julia
```

```julia
```