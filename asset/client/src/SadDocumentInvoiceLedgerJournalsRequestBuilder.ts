/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SadDocumentInvoiceLedgerJournals } from './SadDocumentInvoiceLedgerJournals';

/**
 * Request builder class for operations supported on the {@link SadDocumentInvoiceLedgerJournals} entity.
 */
export class SadDocumentInvoiceLedgerJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
  /**
   * Returns a request builder for querying all `SadDocumentInvoiceLedgerJournals` entities.
   * @returns A request builder for creating requests to retrieve all `SadDocumentInvoiceLedgerJournals` entities.
   */
  getAll(): GetAllRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
    return new GetAllRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SadDocumentInvoiceLedgerJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadDocumentInvoiceLedgerJournals`.
   */
  create(
    entity: SadDocumentInvoiceLedgerJournals<T>
  ): CreateRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
    return new CreateRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadDocumentInvoiceLedgerJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadDocumentInvoiceLedgerJournals.dataAreaId}.
   * @param sadNumber Key property. See {@link SadDocumentInvoiceLedgerJournals.sadNumber}.
   * @param sadDate Key property. See {@link SadDocumentInvoiceLedgerJournals.sadDate}.
   * @param invoice Key property. See {@link SadDocumentInvoiceLedgerJournals.invoice}.
   * @returns A request builder for creating requests to retrieve one `SadDocumentInvoiceLedgerJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sadNumber: DeserializedType<T, 'Edm.String'>,
    sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    invoice: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
    return new GetByKeyRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SADNumber: sadNumber,
        SADDate: sadDate,
        Invoice: invoice
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SadDocumentInvoiceLedgerJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadDocumentInvoiceLedgerJournals`.
   */
  update(
    entity: SadDocumentInvoiceLedgerJournals<T>
  ): UpdateRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
    return new UpdateRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoiceLedgerJournals`.
   * @param dataAreaId Key property. See {@link SadDocumentInvoiceLedgerJournals.dataAreaId}.
   * @param sadNumber Key property. See {@link SadDocumentInvoiceLedgerJournals.sadNumber}.
   * @param sadDate Key property. See {@link SadDocumentInvoiceLedgerJournals.sadDate}.
   * @param invoice Key property. See {@link SadDocumentInvoiceLedgerJournals.invoice}.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoiceLedgerJournals`.
   */
  delete(
    dataAreaId: string,
    sadNumber: string,
    sadDate: Moment,
    invoice: string
  ): DeleteRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadDocumentInvoiceLedgerJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadDocumentInvoiceLedgerJournals` by taking the entity as a parameter.
   */
  delete(
    entity: SadDocumentInvoiceLedgerJournals<T>
  ): DeleteRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sadNumber?: string,
    sadDate?: Moment,
    invoice?: string
  ): DeleteRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T> {
    return new DeleteRequestBuilder<SadDocumentInvoiceLedgerJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadDocumentInvoiceLedgerJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SADNumber: sadNumber!,
            SADDate: sadDate!,
            Invoice: invoice!
          }
    );
  }
}
