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
import { LedgerJournalLines } from './LedgerJournalLines';

/**
 * Request builder class for operations supported on the {@link LedgerJournalLines} entity.
 */
export class LedgerJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalLines<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalLines`.
   */
  create(
    entity: LedgerJournalLines<T>
  ): CreateRequestBuilder<LedgerJournalLines<T>, T> {
    return new CreateRequestBuilder<LedgerJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link LedgerJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalLines`.
   */
  update(
    entity: LedgerJournalLines<T>
  ): UpdateRequestBuilder<LedgerJournalLines<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLines`.
   * @param dataAreaId Key property. See {@link LedgerJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link LedgerJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalLines<T>
  ): DeleteRequestBuilder<LedgerJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalLines<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
