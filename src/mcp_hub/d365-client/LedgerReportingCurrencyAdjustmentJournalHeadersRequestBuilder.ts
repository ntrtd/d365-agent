/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { LedgerReportingCurrencyAdjustmentJournalHeaders } from './LedgerReportingCurrencyAdjustmentJournalHeaders';

/**
 * Request builder class for operations supported on the {@link LedgerReportingCurrencyAdjustmentJournalHeaders} entity.
 */
export class LedgerReportingCurrencyAdjustmentJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
  T
> {
  /**
   * Returns a request builder for querying all `LedgerReportingCurrencyAdjustmentJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerReportingCurrencyAdjustmentJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerReportingCurrencyAdjustmentJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   */
  create(
    entity: LedgerReportingCurrencyAdjustmentJournalHeaders<T>
  ): CreateRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  > {
    return new CreateRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerReportingCurrencyAdjustmentJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerReportingCurrencyAdjustmentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerReportingCurrencyAdjustmentJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   */
  update(
    entity: LedgerReportingCurrencyAdjustmentJournalHeaders<T>
  ): UpdateRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  > {
    return new UpdateRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   * @param dataAreaId Key property. See {@link LedgerReportingCurrencyAdjustmentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link LedgerReportingCurrencyAdjustmentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerReportingCurrencyAdjustmentJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerReportingCurrencyAdjustmentJournalHeaders<T>
  ): DeleteRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<
    LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
    T
  > {
    return new DeleteRequestBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      LedgerReportingCurrencyAdjustmentJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
