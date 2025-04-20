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
import { AssetLeaseLeaseAdjustmentTableBiEntities } from './AssetLeaseLeaseAdjustmentTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLeaseAdjustmentTableBiEntities} entity.
 */
export class AssetLeaseLeaseAdjustmentTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLeaseAdjustmentTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLeaseAdjustmentTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseLeaseAdjustmentTableBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLeaseAdjustmentTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   */
  create(
    entity: AssetLeaseLeaseAdjustmentTableBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLeaseAdjustmentTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.leaseId}.
   * @param leaseCounter Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.leaseCounter}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLeaseAdjustmentTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    leaseCounter: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId,
      LeaseCounter: leaseCounter
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   */
  update(
    entity: AssetLeaseLeaseAdjustmentTableBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.leaseId}.
   * @param leaseCounter Key property. See {@link AssetLeaseLeaseAdjustmentTableBiEntities.leaseCounter}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    leaseCounter: number
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLeaseAdjustmentTableBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    leaseCounter?: number
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLeaseAdjustmentTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            LeaseCounter: leaseCounter!
          }
    );
  }
}
