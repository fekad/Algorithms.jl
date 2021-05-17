# Driven harmonic oscillator (drude and lorentz models)

One can write a simple equation of motion for an electron of the plasma sea subjected to an external electric field $E$:
```math
m \ddot{x} + m \gamma \dot{x} = − e E$
```
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

where we have used $\gamma = \frac{1}{\tau}$. It is insightful to study (???) for a variety of different frequency regimes with respect to the collision frequency $\gamma$. We will limit ourselves here to frequencies $\omega < \omega_p$, where metals retain their metallic character. For large frequencies close to $\omega_p$ , the product $\omega \tau \gg 1$, leading to negligible damping. Here, $\varepsilon(\omega)$ is predominantly real, and

$$ \varepsilon(\omega) = 1- \frac{\omega_p^2}{\omega^2} $$

can be taken as the dielectric function of the undamped free electron plasma.

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


```julia @eval
Lorentz(omega, A_0, omega_0, gamma) =  A_0 / (omega_0^2 - omega^2 - im * gamma * omega)
nothing # hide
```
```julia @example
usign Plots

omega = 0:.01:10

A_0, omega_0, gamma = 1, 1, 1
eps_lorentz = @. Lorentz(omega, A_0, omega_0, gamma)

plot(omega, [real(eps_lorentz) imag(eps_lorentz)], label=["Re(ε(ω))" "Im(ε(ω))"], layout=(2,1))

```