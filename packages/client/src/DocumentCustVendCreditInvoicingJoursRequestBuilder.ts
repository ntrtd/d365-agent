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
import { DocumentCustVendCreditInvoicingJours } from './DocumentCustVendCreditInvoicingJours';

/**
 * Request builder class for operations supported on the {@link DocumentCustVendCreditInvoicingJours} entity.
 */
export class DocumentCustVendCreditInvoicingJoursRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentCustVendCreditInvoicingJours` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentCustVendCreditInvoicingJours` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
    return new GetAllRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentCustVendCreditInvoicingJours` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentCustVendCreditInvoicingJours`.
   */
  create(
    entity: DocumentCustVendCreditInvoicingJours<T>
  ): CreateRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
    return new CreateRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentCustVendCreditInvoicingJours` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentCustVendCreditInvoicingJours.dataAreaId}.
   * @param invoiceTableId Key property. See {@link DocumentCustVendCreditInvoicingJours.invoiceTableId}.
   * @param invoiceRecId Key property. See {@link DocumentCustVendCreditInvoicingJours.invoiceRecId}.
   * @returns A request builder for creating requests to retrieve one `DocumentCustVendCreditInvoicingJours` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceTableId: DeserializedType<T, 'Edm.Int32'>,
    invoiceRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
    return new GetByKeyRequestBuilder<
      DocumentCustVendCreditInvoicingJours<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceTableId: invoiceTableId,
      InvoiceRecId: invoiceRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentCustVendCreditInvoicingJours`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentCustVendCreditInvoicingJours`.
   */
  update(
    entity: DocumentCustVendCreditInvoicingJours<T>
  ): UpdateRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
    return new UpdateRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentCustVendCreditInvoicingJours`.
   * @param dataAreaId Key property. See {@link DocumentCustVendCreditInvoicingJours.dataAreaId}.
   * @param invoiceTableId Key property. See {@link DocumentCustVendCreditInvoicingJours.invoiceTableId}.
   * @param invoiceRecId Key property. See {@link DocumentCustVendCreditInvoicingJours.invoiceRecId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentCustVendCreditInvoicingJours`.
   */
  delete(
    dataAreaId: string,
    invoiceTableId: number,
    invoiceRecId: BigNumber
  ): DeleteRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentCustVendCreditInvoicingJours`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentCustVendCreditInvoicingJours` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentCustVendCreditInvoicingJours<T>
  ): DeleteRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceTableId?: number,
    invoiceRecId?: BigNumber
  ): DeleteRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T> {
    return new DeleteRequestBuilder<DocumentCustVendCreditInvoicingJours<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentCustVendCreditInvoicingJours
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceTableId: invoiceTableId!,
            InvoiceRecId: invoiceRecId!
          }
    );
  }
}
