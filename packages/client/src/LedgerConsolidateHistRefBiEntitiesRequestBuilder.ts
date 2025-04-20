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
import { LedgerConsolidateHistRefBiEntities } from './LedgerConsolidateHistRefBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerConsolidateHistRefBiEntities} entity.
 */
export class LedgerConsolidateHistRefBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerConsolidateHistRefBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerConsolidateHistRefBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerConsolidateHistRefBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerConsolidateHistRefBiEntities`.
   */
  create(
    entity: LedgerConsolidateHistRefBiEntities<T>
  ): CreateRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerConsolidateHistRefBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerConsolidateHistRefBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerConsolidateHistRefBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerConsolidateHistRefBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerConsolidateHistRefBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerConsolidateHistRefBiEntities`.
   */
  update(
    entity: LedgerConsolidateHistRefBiEntities<T>
  ): UpdateRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerConsolidateHistRefBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerConsolidateHistRefBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerConsolidateHistRefBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerConsolidateHistRefBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerConsolidateHistRefBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerConsolidateHistRefBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerConsolidateHistRefBiEntities<T>
  ): DeleteRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerConsolidateHistRefBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerConsolidateHistRefBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
