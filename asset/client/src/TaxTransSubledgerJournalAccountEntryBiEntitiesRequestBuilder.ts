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
import { TaxTransSubledgerJournalAccountEntryBiEntities } from './TaxTransSubledgerJournalAccountEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransSubledgerJournalAccountEntryBiEntities} entity.
 */
export class TaxTransSubledgerJournalAccountEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransSubledgerJournalAccountEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransSubledgerJournalAccountEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransSubledgerJournalAccountEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    TaxTransSubledgerJournalAccountEntryBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransSubledgerJournalAccountEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   */
  create(
    entity: TaxTransSubledgerJournalAccountEntryBiEntities<T>
  ): CreateRequestBuilder<
    TaxTransSubledgerJournalAccountEntryBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxTransSubledgerJournalAccountEntryBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransSubledgerJournalAccountEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransSubledgerJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransSubledgerJournalAccountEntryBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    TaxTransSubledgerJournalAccountEntryBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   */
  update(
    entity: TaxTransSubledgerJournalAccountEntryBiEntities<T>
  ): UpdateRequestBuilder<
    TaxTransSubledgerJournalAccountEntryBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransSubledgerJournalAccountEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransSubledgerJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransSubledgerJournalAccountEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransSubledgerJournalAccountEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransSubledgerJournalAccountEntryBiEntities<T>
  ): DeleteRequestBuilder<TaxTransSubledgerJournalAccountEntryBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<
    TaxTransSubledgerJournalAccountEntryBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TaxTransSubledgerJournalAccountEntryBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TaxTransSubledgerJournalAccountEntryBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
