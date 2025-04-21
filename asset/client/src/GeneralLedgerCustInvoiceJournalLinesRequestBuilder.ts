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
import { GeneralLedgerCustInvoiceJournalLines } from './GeneralLedgerCustInvoiceJournalLines';

/**
 * Request builder class for operations supported on the {@link GeneralLedgerCustInvoiceJournalLines} entity.
 */
export class GeneralLedgerCustInvoiceJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralLedgerCustInvoiceJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralLedgerCustInvoiceJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
    return new GetAllRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GeneralLedgerCustInvoiceJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   */
  create(
    entity: GeneralLedgerCustInvoiceJournalLines<T>
  ): CreateRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
    return new CreateRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GeneralLedgerCustInvoiceJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link GeneralLedgerCustInvoiceJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link GeneralLedgerCustInvoiceJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link GeneralLedgerCustInvoiceJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `GeneralLedgerCustInvoiceJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      GeneralLedgerCustInvoiceJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   */
  update(
    entity: GeneralLedgerCustInvoiceJournalLines<T>
  ): UpdateRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
    return new UpdateRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   * @param dataAreaId Key property. See {@link GeneralLedgerCustInvoiceJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link GeneralLedgerCustInvoiceJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link GeneralLedgerCustInvoiceJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerCustInvoiceJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerCustInvoiceJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralLedgerCustInvoiceJournalLines<T>
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T> {
    return new DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GeneralLedgerCustInvoiceJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
