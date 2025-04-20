/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RTax25RegisterParameters } from './RTax25RegisterParameters';

/**
 * Request builder class for operations supported on the {@link RTax25RegisterParameters} entity.
 */
export class RTax25RegisterParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25RegisterParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25RegisterParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25RegisterParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25RegisterParameters<T>, T> {
    return new GetAllRequestBuilder<RTax25RegisterParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RTax25RegisterParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25RegisterParameters`.
   */
  create(
    entity: RTax25RegisterParameters<T>
  ): CreateRequestBuilder<RTax25RegisterParameters<T>, T> {
    return new CreateRequestBuilder<RTax25RegisterParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25RegisterParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25RegisterParameters.dataAreaId}.
   * @param registerCode Key property. See {@link RTax25RegisterParameters.registerCode}.
   * @param parameterCode Key property. See {@link RTax25RegisterParameters.parameterCode}.
   * @returns A request builder for creating requests to retrieve one `RTax25RegisterParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    registerCode: DeserializedType<T, 'Edm.String'>,
    parameterCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RTax25RegisterParameters<T>, T> {
    return new GetByKeyRequestBuilder<RTax25RegisterParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RegisterCode: registerCode,
        ParameterCode: parameterCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25RegisterParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25RegisterParameters`.
   */
  update(
    entity: RTax25RegisterParameters<T>
  ): UpdateRequestBuilder<RTax25RegisterParameters<T>, T> {
    return new UpdateRequestBuilder<RTax25RegisterParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25RegisterParameters`.
   * @param dataAreaId Key property. See {@link RTax25RegisterParameters.dataAreaId}.
   * @param registerCode Key property. See {@link RTax25RegisterParameters.registerCode}.
   * @param parameterCode Key property. See {@link RTax25RegisterParameters.parameterCode}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25RegisterParameters`.
   */
  delete(
    dataAreaId: string,
    registerCode: string,
    parameterCode: number
  ): DeleteRequestBuilder<RTax25RegisterParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25RegisterParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25RegisterParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25RegisterParameters<T>
  ): DeleteRequestBuilder<RTax25RegisterParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    registerCode?: string,
    parameterCode?: number
  ): DeleteRequestBuilder<RTax25RegisterParameters<T>, T> {
    return new DeleteRequestBuilder<RTax25RegisterParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25RegisterParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RegisterCode: registerCode!,
            ParameterCode: parameterCode!
          }
    );
  }
}
