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
import { GeneralJournalEntryBiEntities } from './GeneralJournalEntryBiEntities';

/**
 * Request builder class for operations supported on the {@link GeneralJournalEntryBiEntities} entity.
 */
export class GeneralJournalEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralJournalEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralJournalEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<GeneralJournalEntryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GeneralJournalEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralJournalEntryBiEntities`.
   */
  create(
    entity: GeneralJournalEntryBiEntities<T>
  ): CreateRequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<GeneralJournalEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GeneralJournalEntryBiEntities` entity based on its keys.
   * @param journalNumber Key property. See {@link GeneralJournalEntryBiEntities.journalNumber}.
   * @param fiscalCalendarYear Key property. See {@link GeneralJournalEntryBiEntities.fiscalCalendarYear}.
   * @param ledger Key property. See {@link GeneralJournalEntryBiEntities.ledger}.
   * @returns A request builder for creating requests to retrieve one `GeneralJournalEntryBiEntities` entity based on its keys.
   */
  getByKey(
    journalNumber: DeserializedType<T, 'Edm.String'>,
    fiscalCalendarYear: DeserializedType<T, 'Edm.Int64'>,
    ledger: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<GeneralJournalEntryBiEntities<T>, T>(
      this.entityApi,
      {
        JournalNumber: journalNumber,
        FiscalCalendarYear: fiscalCalendarYear,
        Ledger: ledger
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralJournalEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralJournalEntryBiEntities`.
   */
  update(
    entity: GeneralJournalEntryBiEntities<T>
  ): UpdateRequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<GeneralJournalEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalEntryBiEntities`.
   * @param journalNumber Key property. See {@link GeneralJournalEntryBiEntities.journalNumber}.
   * @param fiscalCalendarYear Key property. See {@link GeneralJournalEntryBiEntities.fiscalCalendarYear}.
   * @param ledger Key property. See {@link GeneralJournalEntryBiEntities.ledger}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalEntryBiEntities`.
   */
  delete(
    journalNumber: string,
    fiscalCalendarYear: BigNumber,
    ledger: BigNumber
  ): DeleteRequestBuilder<GeneralJournalEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralJournalEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralJournalEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralJournalEntryBiEntities<T>
  ): DeleteRequestBuilder<GeneralJournalEntryBiEntities<T>, T>;
  delete(
    journalNumberOrEntity: any,
    fiscalCalendarYear?: BigNumber,
    ledger?: BigNumber
  ): DeleteRequestBuilder<GeneralJournalEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<GeneralJournalEntryBiEntities<T>, T>(
      this.entityApi,
      journalNumberOrEntity instanceof GeneralJournalEntryBiEntities
        ? journalNumberOrEntity
        : {
            JournalNumber: journalNumberOrEntity!,
            FiscalCalendarYear: fiscalCalendarYear!,
            Ledger: ledger!
          }
    );
  }
}
