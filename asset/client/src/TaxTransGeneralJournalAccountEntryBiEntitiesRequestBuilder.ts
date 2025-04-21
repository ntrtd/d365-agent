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
import { TaxTransGeneralJournalAccountEntryBiEntities } from './TaxTransGeneralJournalAccountEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransGeneralJournalAccountEntryBiEntities} entity.
 */
export class TaxTransGeneralJournalAccountEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransGeneralJournalAccountEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransGeneralJournalAccountEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    TaxTransGeneralJournalAccountEntryBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransGeneralJournalAccountEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   */
  create(
    entity: TaxTransGeneralJournalAccountEntryBiEntities<T>
  ): CreateRequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxTransGeneralJournalAccountEntryBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransGeneralJournalAccountEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransGeneralJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransGeneralJournalAccountEntryBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    TaxTransGeneralJournalAccountEntryBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   */
  update(
    entity: TaxTransGeneralJournalAccountEntryBiEntities<T>
  ): UpdateRequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransGeneralJournalAccountEntryBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransGeneralJournalAccountEntryBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransGeneralJournalAccountEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransGeneralJournalAccountEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransGeneralJournalAccountEntryBiEntities<T>
  ): DeleteRequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransGeneralJournalAccountEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransGeneralJournalAccountEntryBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
