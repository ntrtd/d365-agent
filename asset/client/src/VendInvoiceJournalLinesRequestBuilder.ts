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
import { VendInvoiceJournalLines } from './VendInvoiceJournalLines';

/**
 * Request builder class for operations supported on the {@link VendInvoiceJournalLines} entity.
 */
export class VendInvoiceJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceJournalLines<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceJournalLines`.
   */
  create(
    entity: VendInvoiceJournalLines<T>
  ): CreateRequestBuilder<VendInvoiceJournalLines<T>, T> {
    return new CreateRequestBuilder<VendInvoiceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendInvoiceJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceJournalLines`.
   */
  update(
    entity: VendInvoiceJournalLines<T>
  ): UpdateRequestBuilder<VendInvoiceJournalLines<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJournalLines`.
   * @param dataAreaId Key property. See {@link VendInvoiceJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendInvoiceJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceJournalLines<T>
  ): DeleteRequestBuilder<VendInvoiceJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceJournalLines<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
