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
import { LedgerTransSettlements } from './LedgerTransSettlements';

/**
 * Request builder class for operations supported on the {@link LedgerTransSettlements} entity.
 */
export class LedgerTransSettlementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransSettlements<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransSettlements` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransSettlements` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransSettlements<T>, T> {
    return new GetAllRequestBuilder<LedgerTransSettlements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerTransSettlements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransSettlements`.
   */
  create(
    entity: LedgerTransSettlements<T>
  ): CreateRequestBuilder<LedgerTransSettlements<T>, T> {
    return new CreateRequestBuilder<LedgerTransSettlements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransSettlements` entity based on its keys.
   * @param generalJournalAccountEntry Key property. See {@link LedgerTransSettlements.generalJournalAccountEntry}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransSettlements` entity based on its keys.
   */
  getByKey(
    generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerTransSettlements<T>, T> {
    return new GetByKeyRequestBuilder<LedgerTransSettlements<T>, T>(
      this.entityApi,
      { GeneralJournalAccountEntry: generalJournalAccountEntry }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransSettlements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransSettlements`.
   */
  update(
    entity: LedgerTransSettlements<T>
  ): UpdateRequestBuilder<LedgerTransSettlements<T>, T> {
    return new UpdateRequestBuilder<LedgerTransSettlements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlements`.
   * @param generalJournalAccountEntry Key property. See {@link LedgerTransSettlements.generalJournalAccountEntry}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlements`.
   */
  delete(
    generalJournalAccountEntry: BigNumber
  ): DeleteRequestBuilder<LedgerTransSettlements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransSettlements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransSettlements` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransSettlements<T>
  ): DeleteRequestBuilder<LedgerTransSettlements<T>, T>;
  delete(
    generalJournalAccountEntryOrEntity: any
  ): DeleteRequestBuilder<LedgerTransSettlements<T>, T> {
    return new DeleteRequestBuilder<LedgerTransSettlements<T>, T>(
      this.entityApi,
      generalJournalAccountEntryOrEntity instanceof LedgerTransSettlements
        ? generalJournalAccountEntryOrEntity
        : { GeneralJournalAccountEntry: generalJournalAccountEntryOrEntity! }
    );
  }
}
