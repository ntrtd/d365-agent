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
import { PurchReqTableBiEntities } from './PurchReqTableBiEntities';

/**
 * Request builder class for operations supported on the {@link PurchReqTableBiEntities} entity.
 */
export class PurchReqTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchReqTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PurchReqTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PurchReqTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PurchReqTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<PurchReqTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchReqTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchReqTableBiEntities`.
   */
  create(
    entity: PurchReqTableBiEntities<T>
  ): CreateRequestBuilder<PurchReqTableBiEntities<T>, T> {
    return new CreateRequestBuilder<PurchReqTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchReqTableBiEntities` entity based on its keys.
   * @param purchReqId Key property. See {@link PurchReqTableBiEntities.purchReqId}.
   * @returns A request builder for creating requests to retrieve one `PurchReqTableBiEntities` entity based on its keys.
   */
  getByKey(
    purchReqId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchReqTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<PurchReqTableBiEntities<T>, T>(
      this.entityApi,
      { PurchReqId: purchReqId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchReqTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchReqTableBiEntities`.
   */
  update(
    entity: PurchReqTableBiEntities<T>
  ): UpdateRequestBuilder<PurchReqTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<PurchReqTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchReqTableBiEntities`.
   * @param purchReqId Key property. See {@link PurchReqTableBiEntities.purchReqId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchReqTableBiEntities`.
   */
  delete(
    purchReqId: string
  ): DeleteRequestBuilder<PurchReqTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchReqTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchReqTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PurchReqTableBiEntities<T>
  ): DeleteRequestBuilder<PurchReqTableBiEntities<T>, T>;
  delete(
    purchReqIdOrEntity: any
  ): DeleteRequestBuilder<PurchReqTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<PurchReqTableBiEntities<T>, T>(
      this.entityApi,
      purchReqIdOrEntity instanceof PurchReqTableBiEntities
        ? purchReqIdOrEntity
        : { PurchReqId: purchReqIdOrEntity! }
    );
  }
}
