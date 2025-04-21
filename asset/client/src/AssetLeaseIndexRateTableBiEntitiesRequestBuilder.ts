/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetLeaseIndexRateTableBiEntities } from './AssetLeaseIndexRateTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseIndexRateTableBiEntities} entity.
 */
export class AssetLeaseIndexRateTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseIndexRateTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseIndexRateTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseIndexRateTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseIndexRateTableBiEntities`.
   */
  create(
    entity: AssetLeaseIndexRateTableBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseIndexRateTableBiEntities` entity based on its keys.
   * @param indexRateType Key property. See {@link AssetLeaseIndexRateTableBiEntities.indexRateType}.
   * @param validFrom Key property. See {@link AssetLeaseIndexRateTableBiEntities.validFrom}.
   * @param validTo Key property. See {@link AssetLeaseIndexRateTableBiEntities.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseIndexRateTableBiEntities` entity based on its keys.
   */
  getByKey(
    indexRateType: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>(
      this.entityApi,
      {
        IndexRateType: indexRateType,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseIndexRateTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseIndexRateTableBiEntities`.
   */
  update(
    entity: AssetLeaseIndexRateTableBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseIndexRateTableBiEntities`.
   * @param indexRateType Key property. See {@link AssetLeaseIndexRateTableBiEntities.indexRateType}.
   * @param validFrom Key property. See {@link AssetLeaseIndexRateTableBiEntities.validFrom}.
   * @param validTo Key property. See {@link AssetLeaseIndexRateTableBiEntities.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseIndexRateTableBiEntities`.
   */
  delete(
    indexRateType: BigNumber,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseIndexRateTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseIndexRateTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseIndexRateTableBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>;
  delete(
    indexRateTypeOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseIndexRateTableBiEntities<T>, T>(
      this.entityApi,
      indexRateTypeOrEntity instanceof AssetLeaseIndexRateTableBiEntities
        ? indexRateTypeOrEntity
        : {
            IndexRateType: indexRateTypeOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
