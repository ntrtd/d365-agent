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
import { ClientelingParameters } from './ClientelingParameters';

/**
 * Request builder class for operations supported on the {@link ClientelingParameters} entity.
 */
export class ClientelingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClientelingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ClientelingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ClientelingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ClientelingParameters<T>, T> {
    return new GetAllRequestBuilder<ClientelingParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClientelingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClientelingParameters`.
   */
  create(
    entity: ClientelingParameters<T>
  ): CreateRequestBuilder<ClientelingParameters<T>, T> {
    return new CreateRequestBuilder<ClientelingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClientelingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClientelingParameters.dataAreaId}.
   * @param key Key property. See {@link ClientelingParameters.key}.
   * @returns A request builder for creating requests to retrieve one `ClientelingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ClientelingParameters<T>, T> {
    return new GetByKeyRequestBuilder<ClientelingParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClientelingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClientelingParameters`.
   */
  update(
    entity: ClientelingParameters<T>
  ): UpdateRequestBuilder<ClientelingParameters<T>, T> {
    return new UpdateRequestBuilder<ClientelingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClientelingParameters`.
   * @param dataAreaId Key property. See {@link ClientelingParameters.dataAreaId}.
   * @param key Key property. See {@link ClientelingParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `ClientelingParameters`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<ClientelingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClientelingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClientelingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ClientelingParameters<T>
  ): DeleteRequestBuilder<ClientelingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<ClientelingParameters<T>, T> {
    return new DeleteRequestBuilder<ClientelingParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClientelingParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
