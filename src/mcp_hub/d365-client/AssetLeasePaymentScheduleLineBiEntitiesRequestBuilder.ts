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
import { AssetLeasePaymentScheduleLineBiEntities } from './AssetLeasePaymentScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeasePaymentScheduleLineBiEntities} entity.
 */
export class AssetLeasePaymentScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeasePaymentScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeasePaymentScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeasePaymentScheduleLineBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeasePaymentScheduleLineBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeasePaymentScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   */
  create(
    entity: AssetLeasePaymentScheduleLineBiEntities<T>
  ): CreateRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeasePaymentScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeasePaymentScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeasePaymentScheduleLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeasePaymentScheduleLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetLeasePaymentScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeasePaymentScheduleLineBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   */
  update(
    entity: AssetLeasePaymentScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeasePaymentScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeasePaymentScheduleLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link AssetLeasePaymentScheduleLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeasePaymentScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeasePaymentScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeasePaymentScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<AssetLeasePaymentScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeasePaymentScheduleLineBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeasePaymentScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
