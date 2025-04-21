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
import { PurchLineBiEntities } from './PurchLineBiEntities';

/**
 * Request builder class for operations supported on the {@link PurchLineBiEntities} entity.
 */
export class PurchLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PurchLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PurchLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PurchLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<PurchLineBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchLineBiEntities`.
   */
  create(
    entity: PurchLineBiEntities<T>
  ): CreateRequestBuilder<PurchLineBiEntities<T>, T> {
    return new CreateRequestBuilder<PurchLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchLineBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link PurchLineBiEntities.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `PurchLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<PurchLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchLineBiEntities`.
   */
  update(
    entity: PurchLineBiEntities<T>
  ): UpdateRequestBuilder<PurchLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<PurchLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchLineBiEntities`.
   * @param dataAreaId Key property. See {@link PurchLineBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link PurchLineBiEntities.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<PurchLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PurchLineBiEntities<T>
  ): DeleteRequestBuilder<PurchLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<PurchLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<PurchLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}
