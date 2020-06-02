import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/servicos/api';
import { sucessoAtualizaPerfil, falhaAtualizaPerfil } from './actions';
import { Alert } from 'react-native';

export function* atualizaPerfil({ payload }) {
  yield console.tron.log("teste");
  try {
    const {
 nome, email, ...rest
} = payload.data;

    const perfil = {
      nome,
      email,
      ...(rest.senhaAntiga ? rest : {}),
    };
    const res = yield call(api.put, 'usuario', perfil);
    Alert.alert('sucesso','perfil atualizado com sucesso')

    yield put(sucessoAtualizaPerfil(res.data));
  } catch (error) {
    Alert.alert('erro ao atualizar','verifique os dados')

    yield put(falhaAtualizaPerfil());
  }
}
export default all([
  takeLatest('@usuario/REQ_ATUALIZA_PERFIL', atualizaPerfil),
]);
