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
import { ClientelingParametersV2 } from './ClientelingParametersV2';

/**
 * Request builder class for operations supported on the {@link ClientelingParametersV2} entity.
 */
export class ClientelingParametersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClientelingParametersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ClientelingParametersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ClientelingParametersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ClientelingParametersV2<T>, T> {
    return new GetAllRequestBuilder<ClientelingParametersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClientelingParametersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClientelingParametersV2`.
   */
  create(
    entity: ClientelingParametersV2<T>
  ): CreateRequestBuilder<ClientelingParametersV2<T>, T> {
    return new CreateRequestBuilder<ClientelingParametersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClientelingParametersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClientelingParametersV2.dataAreaId}.
   * @param key Key property. See {@link ClientelingParametersV2.key}.
   * @returns A request builder for creating requests to retrieve one `ClientelingParametersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ClientelingParametersV2<T>, T> {
    return new GetByKeyRequestBuilder<ClientelingParametersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClientelingParametersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClientelingParametersV2`.
   */
  update(
    entity: ClientelingParametersV2<T>
  ): UpdateRequestBuilder<ClientelingParametersV2<T>, T> {
    return new UpdateRequestBuilder<ClientelingParametersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClientelingParametersV2`.
   * @param dataAreaId Key property. See {@link ClientelingParametersV2.dataAreaId}.
   * @param key Key property. See {@link ClientelingParametersV2.key}.
   * @returns A request builder for creating requests that delete an entity of type `ClientelingParametersV2`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<ClientelingParametersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClientelingParametersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClientelingParametersV2` by taking the entity as a parameter.
   */
  delete(
    entity: ClientelingParametersV2<T>
  ): DeleteRequestBuilder<ClientelingParametersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<ClientelingParametersV2<T>, T> {
    return new DeleteRequestBuilder<ClientelingParametersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClientelingParametersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
