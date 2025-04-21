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
import { SubledgerVoucherGeneralJournalEntryBiEntities } from './SubledgerVoucherGeneralJournalEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link SubledgerVoucherGeneralJournalEntryBiEntities} entity.
 */
export class SubledgerVoucherGeneralJournalEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubledgerVoucherGeneralJournalEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubledgerVoucherGeneralJournalEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubledgerVoucherGeneralJournalEntryBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubledgerVoucherGeneralJournalEntryBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubledgerVoucherGeneralJournalEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   */
  create(
    entity: SubledgerVoucherGeneralJournalEntryBiEntities<T>
  ): CreateRequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<
      SubledgerVoucherGeneralJournalEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubledgerVoucherGeneralJournalEntryBiEntities` entity based on its keys.
   * @param recordId Key property. See {@link SubledgerVoucherGeneralJournalEntryBiEntities.recordId}.
   * @returns A request builder for creating requests to retrieve one `SubledgerVoucherGeneralJournalEntryBiEntities` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    SubledgerVoucherGeneralJournalEntryBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SubledgerVoucherGeneralJournalEntryBiEntities<T>,
      T
    >(this.entityApi, { RecordId: recordId });
  }

  /**
   * Returns a request builder for updating an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   */
  update(
    entity: SubledgerVoucherGeneralJournalEntryBiEntities<T>
  ): UpdateRequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      SubledgerVoucherGeneralJournalEntryBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   * @param recordId Key property. See {@link SubledgerVoucherGeneralJournalEntryBiEntities.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerVoucherGeneralJournalEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubledgerVoucherGeneralJournalEntryBiEntities<T>
  ): DeleteRequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<SubledgerVoucherGeneralJournalEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      SubledgerVoucherGeneralJournalEntryBiEntities<T>,
      T
    >(
      this.entityApi,
      recordIdOrEntity instanceof SubledgerVoucherGeneralJournalEntryBiEntities
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
