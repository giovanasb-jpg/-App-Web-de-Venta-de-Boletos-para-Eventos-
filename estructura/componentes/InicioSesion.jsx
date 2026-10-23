import React, { useEffect, useRef, useState } from 'react';

function InicioSesion({ isOpen, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dialogRef = useRef(null);
  const usernameRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.showModal();
    usernameRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialogRef.current?.open) dialogRef.current.close();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedUsername = username.trim();

    if (!normalizedUsername || !password) {
      setError('Escribe tu nombre de usuario y contraseña para continuar.');
      return;
    }

    onLogin(normalizedUsername);
  };

  return (
    <dialog
      ref={dialogRef}
      className="login-overlay"
      onCancel={(event) => event.preventDefault()}
    >
      <section
        className="login-dialog"
        aria-labelledby="login-title"
        aria-describedby="login-description"
      >
        <span className="login-eyebrow">TicketPro · Acceso</span>
        <h1 id="login-title">Iniciar sesión</h1>
        <p id="login-description" className="login-description">
          Ingresa tus datos para explorar eventos y simular compras.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-username">Nombre de usuario</label>
          <input
            ref={usernameRef}
            id="login-username"
            name="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label htmlFor="login-password">Contraseña</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <p className="login-error" role="alert">{error}</p>}

          <button className="login-submit" type="submit">
            Entrar
          </button>
        </form>

        <p className="login-demo-note">
          Acceso de demostración: no se valida ni se guarda la contraseña.
        </p>
      </section>
    </dialog>
  );
}

export default InicioSesion;
