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
import { SadDocumentInvoiceLineLedgerJournals } from './SadDocumentInvoiceLineLedgerJournals';

/**
 * Request builder class for operations supported on the {@link SadDocumentInvoiceLineLedgerJournals} entity.
 */
export class SadDocumentInvoiceLineLedgerJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentInvoiceLineLedgerJournals` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentInvoiceLineLedgerJournals` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
    return new GetAllRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentInvoiceLineLedgerJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   */
  create(
    entity: SadDocumentInvoiceLineLedgerJournals<T>
  ): CreateRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
    return new CreateRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentInvoiceLineLedgerJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentInvoiceLineLedgerJournals.dataAreaId}.
   * @param recordId Key property. See {@link SadDocumentInvoiceLineLedgerJournals.recordId}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentInvoiceLineLedgerJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
    return new GetByKeyRequestBuilder<
      SadDocumentInvoiceLineLedgerJournals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   */
  update(
    entity: SadDocumentInvoiceLineLedgerJournals<T>
  ): UpdateRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
    return new UpdateRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   * @param dataAreaId Key property. See {@link SadDocumentInvoiceLineLedgerJournals.dataAreaId}.
   * @param recordId Key property. See {@link SadDocumentInvoiceLineLedgerJournals.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoiceLineLedgerJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoiceLineLedgerJournals` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentInvoiceLineLedgerJournals<T>
  ): DeleteRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T> {
    return new DeleteRequestBuilder<SadDocumentInvoiceLineLedgerJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentInvoiceLineLedgerJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
