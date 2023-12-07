const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Cerrar sesión",
  },
  welcomeScreen: {
    postscript:
    "Para empezar, inicia sesión con tu cuenta. Si no tienes una cuenta, puedes registrarte en la siguiente pantalla.",
    postscriptLogged:
    "Bienvenido de nuevo, %{name}! Tienes %{count} notificaciones sin leer, vamos a revisarlas.",
    readyForLaunch: "Bienvenido a HawkBox!",
    exciting: "Tu tracker de paquetes favorito",
    letsGo: "Vamos!",
  },
  errorScreen: {
    title: "Algo salió mal",
    friendlySubtitle:
      "No te preocupes, no es tu culpa. Puedes intentar reiniciar la aplicación.",
    reset: "Reiniciar la aplicación",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  errors: {
    invalidEmail: "Dirección de correo electrónico no válida",
  },
  loginScreen: {
    signIn: "Iniciar sesión",
    enterDetails:
      "Ingresa tus datos de inicio de sesión para acceder a tu cuenta. Si no tienes una cuenta, puedes crear una presionando el botón de registro.",
    emailFieldLabel: "Correo electrónico",
    passwordFieldLabel: "Contraseña",
    emailFieldPlaceholder: "Ingresa tu correo electrónico",
    passwordFieldPlaceholder: "Ingresa tu contraseña",
    register: "Registrarse",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginButton: "Iniciar sesión",
    hint: "¿No tienes una cuenta?",
  },
  home: {
    Screen: {
      title: "Mis paquetes",
      onlyFavorites: "Mostrar solo importantes",
      accessibility: {
        durationLabel: "%{hours} horas, %{minutes} minutos, %{seconds} segundos",
        publishLabel: "Publicado el %{date}",
        switch: "Cambiar a solo importantes",
        cardHint: "Toque dos veces para %{action}",
        favoriteAction: "Mantenga pulsado para favorito",
        unfavoriteIcon: "Mantenga pulsado para no favorito",
        favoriteIcon: "Mantenga pulsado para favorito",
      },
      favoriteButton: "Importante",
      unfavoriteButton: "No importante",
      expectedDelivery: "Entrega el %{date}",
      delivered: "Entregado",
      deliveredAt: "Entregado el %{date}",
      pickup: "Recogido",
      inTransit: "En camino",
    },
    EmptyState: {
      heading: "No hay paquetes",
      content: "No hay paquetes para mostrar. Puedes ver la direccion de entrega en tu perfil.",
    }
  }
}

export default en
export type Translations = typeof en
