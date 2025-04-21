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
import { LedgerReportingCurrencyAdjustmentJournalLines } from './LedgerReportingCurrencyAdjustmentJournalLines';

/**
 * Request builder class for operations supported on the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
 */
export class LedgerReportingCurrencyAdjustmentJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerReportingCurrencyAdjustmentJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerReportingCurrencyAdjustmentJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerReportingCurrencyAdjustmentJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   */
  create(
    entity: LedgerReportingCurrencyAdjustmentJournalLines<T>
  ): CreateRequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T> {
    return new CreateRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerReportingCurrencyAdjustmentJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerReportingCurrencyAdjustmentJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   */
  update(
    entity: LedgerReportingCurrencyAdjustmentJournalLines<T>
  ): UpdateRequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   * @param dataAreaId Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerReportingCurrencyAdjustmentJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportingCurrencyAdjustmentJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerReportingCurrencyAdjustmentJournalLines<T>
  ): DeleteRequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerReportingCurrencyAdjustmentJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      LedgerReportingCurrencyAdjustmentJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
