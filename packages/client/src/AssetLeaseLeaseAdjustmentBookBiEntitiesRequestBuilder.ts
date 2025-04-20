/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AssetLeaseLeaseAdjustmentBookBiEntities } from './AssetLeaseLeaseAdjustmentBookBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLeaseAdjustmentBookBiEntities} entity.
 */
export class AssetLeaseLeaseAdjustmentBookBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLeaseAdjustmentBookBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLeaseAdjustmentBookBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseLeaseAdjustmentBookBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLeaseAdjustmentBookBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   */
  create(
    entity: AssetLeaseLeaseAdjustmentBookBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLeaseAdjustmentBookBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.dataAreaId}.
   * @param leaseAdjustment Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.leaseAdjustment}.
   * @param leaseBookId Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.leaseBookId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLeaseAdjustmentBookBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseAdjustment: DeserializedType<T, 'Edm.Int64'>,
    leaseBookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseAdjustment: leaseAdjustment,
      LeaseBookId: leaseBookId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   */
  update(
    entity: AssetLeaseLeaseAdjustmentBookBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.dataAreaId}.
   * @param leaseAdjustment Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.leaseAdjustment}.
   * @param leaseBookId Key property. See {@link AssetLeaseLeaseAdjustmentBookBiEntities.leaseBookId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseAdjustment: BigNumber,
    leaseBookId: string
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentBookBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLeaseAdjustmentBookBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseAdjustment?: BigNumber,
    leaseBookId?: string
  ): DeleteRequestBuilder<AssetLeaseLeaseAdjustmentBookBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseLeaseAdjustmentBookBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLeaseAdjustmentBookBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseAdjustment: leaseAdjustment!,
            LeaseBookId: leaseBookId!
          }
    );
  }
}
