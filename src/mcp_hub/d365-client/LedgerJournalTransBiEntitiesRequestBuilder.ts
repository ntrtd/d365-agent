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
import { LedgerJournalTransBiEntities } from './LedgerJournalTransBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerJournalTransBiEntities} entity.
 */
export class LedgerJournalTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalTransBiEntities`.
   */
  create(
    entity: LedgerJournalTransBiEntities<T>
  ): CreateRequestBuilder<LedgerJournalTransBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerJournalTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerJournalTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerJournalTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalTransBiEntities`.
   */
  update(
    entity: LedgerJournalTransBiEntities<T>
  ): UpdateRequestBuilder<LedgerJournalTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalTransBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerJournalTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerJournalTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerJournalTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalTransBiEntities<T>
  ): DeleteRequestBuilder<LedgerJournalTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
