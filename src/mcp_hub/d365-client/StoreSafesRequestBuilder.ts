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
import { StoreSafes } from './StoreSafes';

/**
 * Request builder class for operations supported on the {@link StoreSafes} entity.
 */
export class StoreSafesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StoreSafes<T>, T> {
  /**
   * Returns a request builder for querying all `StoreSafes` entities.
   * @returns A request builder for creating requests to retrieve all `StoreSafes` entities.
   */
  getAll(): GetAllRequestBuilder<StoreSafes<T>, T> {
    return new GetAllRequestBuilder<StoreSafes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StoreSafes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StoreSafes`.
   */
  create(entity: StoreSafes<T>): CreateRequestBuilder<StoreSafes<T>, T> {
    return new CreateRequestBuilder<StoreSafes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `StoreSafes` entity based on its keys.
   * @param dataAreaId Key property. See {@link StoreSafes.dataAreaId}.
   * @param safeNumber Key property. See {@link StoreSafes.safeNumber}.
   * @returns A request builder for creating requests to retrieve one `StoreSafes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    safeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StoreSafes<T>, T> {
    return new GetByKeyRequestBuilder<StoreSafes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SafeNumber: safeNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StoreSafes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StoreSafes`.
   */
  update(entity: StoreSafes<T>): UpdateRequestBuilder<StoreSafes<T>, T> {
    return new UpdateRequestBuilder<StoreSafes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `StoreSafes`.
   * @param dataAreaId Key property. See {@link StoreSafes.dataAreaId}.
   * @param safeNumber Key property. See {@link StoreSafes.safeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `StoreSafes`.
   */
  delete(
    dataAreaId: string,
    safeNumber: string
  ): DeleteRequestBuilder<StoreSafes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StoreSafes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StoreSafes` by taking the entity as a parameter.
   */
  delete(entity: StoreSafes<T>): DeleteRequestBuilder<StoreSafes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    safeNumber?: string
  ): DeleteRequestBuilder<StoreSafes<T>, T> {
    return new DeleteRequestBuilder<StoreSafes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StoreSafes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SafeNumber: safeNumber!
          }
    );
  }
}
