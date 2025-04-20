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
import { LedgerTransSettlementBiEntities } from './LedgerTransSettlementBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerTransSettlementBiEntities} entity.
 */
export class LedgerTransSettlementBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransSettlementBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransSettlementBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerTransSettlementBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerTransSettlementBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransSettlementBiEntities`.
   */
  create(
    entity: LedgerTransSettlementBiEntities<T>
  ): CreateRequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerTransSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransSettlementBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerTransSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerTransSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransSettlementBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerTransSettlementBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransSettlementBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransSettlementBiEntities`.
   */
  update(
    entity: LedgerTransSettlementBiEntities<T>
  ): UpdateRequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerTransSettlementBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlementBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerTransSettlementBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerTransSettlementBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlementBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerTransSettlementBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlementBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlementBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransSettlementBiEntities<T>
  ): DeleteRequestBuilder<LedgerTransSettlementBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<LedgerTransSettlementBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerTransSettlementBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerTransSettlementBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
