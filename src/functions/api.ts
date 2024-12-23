//@ts-nocheck
export const API_URL = "https://dogsapi.origamid.dev/json";

//NOTE envia o token para o servidor
export function TOKEN_POST() {
  return {
    url: API_URL + "/jwt-auth/v1/token",
  };
}

//NOTE valida o token quando for feita uma postagem
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET() {
  return {
    url: API_URL + "/api/user",
  };
}

export function USER_POST() {
  return {
    url: API_URL + "/api/user",
  };
}

export function PHOTO_POST() {
  return {
    url: API_URL + "/api/photo",
  };
}

export function PHOTOS_GET({
  page,
  total,
  user,
}: {
  page: number;
  total: number;
  user: 0 | string;
}) {
  return {
    url: `${API_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
  };
}

//NOTE pega uma foto com a id específica
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

//NOTE pega a foto pela ID
export function PHOTO_ID_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}

//NOTE retorna os dados já formatados para fazer a requisição na api
export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //pega o token diretamente do local storage
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
}

//NOTE deleta a foto se o id do usuário for o dono dela
export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function PASSWORD_LOST() {
  return {
    url: API_URL + "/api/password/lost",
  };
}

export function PASSWORD_RESET() {
  return {
    url: API_URL + "/api/password/reset",
  };
}

//NOTE pega as estatisticas
export function STATS_GET() {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
