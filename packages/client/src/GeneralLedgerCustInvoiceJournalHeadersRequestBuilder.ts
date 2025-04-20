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
import { GeneralLedgerCustInvoiceJournalHeaders } from './GeneralLedgerCustInvoiceJournalHeaders';

/**
 * Request builder class for operations supported on the {@link GeneralLedgerCustInvoiceJournalHeaders} entity.
 */
export class GeneralLedgerCustInvoiceJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralLedgerCustInvoiceJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralLedgerCustInvoiceJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GeneralLedgerCustInvoiceJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   */
  create(
    entity: GeneralLedgerCustInvoiceJournalHeaders<T>
  ): CreateRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
    return new CreateRequestBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GeneralLedgerCustInvoiceJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link GeneralLedgerCustInvoiceJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link GeneralLedgerCustInvoiceJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `GeneralLedgerCustInvoiceJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   */
  update(
    entity: GeneralLedgerCustInvoiceJournalHeaders<T>
  ): UpdateRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   * @param dataAreaId Key property. See {@link GeneralLedgerCustInvoiceJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link GeneralLedgerCustInvoiceJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerCustInvoiceJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerCustInvoiceJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralLedgerCustInvoiceJournalHeaders<T>
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<GeneralLedgerCustInvoiceJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<
      GeneralLedgerCustInvoiceJournalHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof GeneralLedgerCustInvoiceJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
