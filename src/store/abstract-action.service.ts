import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBaseEntity } from '@shared/types/app.type';

import { ApiService } from '../core/helpers/base-api/api.service';

export const AbstractActionService = <T extends IBaseEntity>(
  actionType: string,
  service: ApiService<T>,
  callFetchAction: boolean = true
) => {
  const fetchAction = createAsyncThunk<T[], { params?: Record<string, unknown> } | void>(actionType, async (arg) => {
    const params = arg?.params || {};
    const response = await service.getAll(params);
    return response;
  });

  const fetchByIdAction = createAsyncThunk<T, string>(`${actionType}/fetchById`, async (id) => {
    const response = await service.getById(id);
    return response;
  });

  const fetchByIdWithParamsAction = createAsyncThunk<T, { id: number | string; params: object }>(`${actionType}/fetchById`, async (arg) => {
    const response = await service.getByIdWithParmas(arg);
    return response;
  });

  const createAction = createAsyncThunk<T, { data: T }>(
    `${actionType}/create`,
    async ({ data }, thunkAPI) => {
      const response = await service.create(data);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  const bulkCreateAction = createAsyncThunk<T, { data: T }>(
    `${actionType}/create`,
    async ({ data }, thunkAPI) => {
      const response = await service.bulkCreate(data as unknown as T[]);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  const updateAction = createAsyncThunk<T, { data: T }>(
    `${actionType}/update`,
    async ({ data }, thunkAPI) => {
      const response = await service.update(data, data.id!);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  const updateArrayAction = createAsyncThunk<T, { data: unknown; id: string }>(
    `${actionType}/updatearray`,
    async ({ data, id }, thunkAPI) => {
      const response = await service.update(data as object, id);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  const updateArrayActionWithoutId = createAsyncThunk<T, { data: unknown }>(
    `${actionType}/updatearraywithoutId`,
    async ({ data }, thunkAPI) => {
      const response = await service.updateArrayWithoutId(data as unknown as Array<T>);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  const deleteAction = createAsyncThunk<T, { id: string | number }>(
    `${actionType}/delete`,
    async ({ id }, thunkAPI) => {
      const response = await service.setArchived(id);
      if (callFetchAction) {
        thunkAPI.dispatch(fetchAction());
      }
      return response;
    }
  );

  return {
    fetchAction,
    fetchByIdAction,
    createAction,
    bulkCreateAction,
    updateAction,
    updateArrayAction,
    deleteAction,
    updateArrayActionWithoutId,
    fetchByIdWithParamsAction
  };
};

