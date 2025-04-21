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
import { PdsCatchWeightItemBiEntities } from './PdsCatchWeightItemBiEntities';

/**
 * Request builder class for operations supported on the {@link PdsCatchWeightItemBiEntities} entity.
 */
export class PdsCatchWeightItemBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PdsCatchWeightItemBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PdsCatchWeightItemBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
    return new GetAllRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PdsCatchWeightItemBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PdsCatchWeightItemBiEntities`.
   */
  create(
    entity: PdsCatchWeightItemBiEntities<T>
  ): CreateRequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
    return new CreateRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PdsCatchWeightItemBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PdsCatchWeightItemBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link PdsCatchWeightItemBiEntities.itemId}.
   * @returns A request builder for creating requests to retrieve one `PdsCatchWeightItemBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PdsCatchWeightItemBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PdsCatchWeightItemBiEntities`.
   */
  update(
    entity: PdsCatchWeightItemBiEntities<T>
  ): UpdateRequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
    return new UpdateRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PdsCatchWeightItemBiEntities`.
   * @param dataAreaId Key property. See {@link PdsCatchWeightItemBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link PdsCatchWeightItemBiEntities.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `PdsCatchWeightItemBiEntities`.
   */
  delete(
    dataAreaId: string,
    itemId: string
  ): DeleteRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PdsCatchWeightItemBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PdsCatchWeightItemBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PdsCatchWeightItemBiEntities<T>
  ): DeleteRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string
  ): DeleteRequestBuilder<PdsCatchWeightItemBiEntities<T>, T> {
    return new DeleteRequestBuilder<PdsCatchWeightItemBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PdsCatchWeightItemBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!
          }
    );
  }
}
