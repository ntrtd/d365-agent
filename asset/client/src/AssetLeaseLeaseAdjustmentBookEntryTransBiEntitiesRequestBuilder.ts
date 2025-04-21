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
import { AssetLeaseLeaseAdjustmentBookEntryTransBiEntities } from './AssetLeaseLeaseAdjustmentBookEntryTransBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities} entity.
 */
export class AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   */
  create(
    entity: AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>
  ): CreateRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.dataAreaId}.
   * @param leaseAdjustment Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.leaseAdjustment}.
   * @param leaseBookId Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.leaseBookId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseAdjustment: DeserializedType<T, 'Edm.Int64'>,
    leaseBookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseAdjustment: leaseAdjustment,
      LeaseBookId: leaseBookId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   */
  update(
    entity: AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>
  ): UpdateRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.dataAreaId}.
   * @param leaseAdjustment Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.leaseAdjustment}.
   * @param leaseBookId Key property. See {@link AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.leaseBookId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseAdjustment: BigNumber,
    leaseBookId: string
  ): DeleteRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseAdjustmentBookEntryTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>
  ): DeleteRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    leaseAdjustment?: BigNumber,
    leaseBookId?: string
  ): DeleteRequestBuilder<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseAdjustment: leaseAdjustment!,
            LeaseBookId: leaseBookId!
          }
    );
  }
}
