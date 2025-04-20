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
import { PurchTableBiEntities } from './PurchTableBiEntities';

/**
 * Request builder class for operations supported on the {@link PurchTableBiEntities} entity.
 */
export class PurchTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PurchTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PurchTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PurchTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<PurchTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchTableBiEntities`.
   */
  create(
    entity: PurchTableBiEntities<T>
  ): CreateRequestBuilder<PurchTableBiEntities<T>, T> {
    return new CreateRequestBuilder<PurchTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchTableBiEntities.dataAreaId}.
   * @param purchId Key property. See {@link PurchTableBiEntities.purchId}.
   * @returns A request builder for creating requests to retrieve one `PurchTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<PurchTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchId: purchId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchTableBiEntities`.
   */
  update(
    entity: PurchTableBiEntities<T>
  ): UpdateRequestBuilder<PurchTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<PurchTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchTableBiEntities`.
   * @param dataAreaId Key property. See {@link PurchTableBiEntities.dataAreaId}.
   * @param purchId Key property. See {@link PurchTableBiEntities.purchId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    purchId: string
  ): DeleteRequestBuilder<PurchTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PurchTableBiEntities<T>
  ): DeleteRequestBuilder<PurchTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchId?: string
  ): DeleteRequestBuilder<PurchTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<PurchTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchId: purchId!
          }
    );
  }
}
