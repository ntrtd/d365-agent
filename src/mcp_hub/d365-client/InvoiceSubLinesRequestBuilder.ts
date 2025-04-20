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
import { InvoiceSubLines } from './InvoiceSubLines';

/**
 * Request builder class for operations supported on the {@link InvoiceSubLines} entity.
 */
export class InvoiceSubLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InvoiceSubLines<T>, T> {
  /**
   * Returns a request builder for querying all `InvoiceSubLines` entities.
   * @returns A request builder for creating requests to retrieve all `InvoiceSubLines` entities.
   */
  getAll(): GetAllRequestBuilder<InvoiceSubLines<T>, T> {
    return new GetAllRequestBuilder<InvoiceSubLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InvoiceSubLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InvoiceSubLines`.
   */
  create(
    entity: InvoiceSubLines<T>
  ): CreateRequestBuilder<InvoiceSubLines<T>, T> {
    return new CreateRequestBuilder<InvoiceSubLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InvoiceSubLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InvoiceSubLines.dataAreaId}.
   * @param productReceiptNumber Key property. See {@link InvoiceSubLines.productReceiptNumber}.
   * @param invoiceLineReference Key property. See {@link InvoiceSubLines.invoiceLineReference}.
   * @param purchaseOrder Key property. See {@link InvoiceSubLines.purchaseOrder}.
   * @param invoiceLineNumber Key property. See {@link InvoiceSubLines.invoiceLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InvoiceSubLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productReceiptNumber: DeserializedType<T, 'Edm.String'>,
    invoiceLineReference: DeserializedType<T, 'Edm.String'>,
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InvoiceSubLines<T>, T> {
    return new GetByKeyRequestBuilder<InvoiceSubLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductReceiptNumber: productReceiptNumber,
      InvoiceLineReference: invoiceLineReference,
      PurchaseOrder: purchaseOrder,
      InvoiceLineNumber: invoiceLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InvoiceSubLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InvoiceSubLines`.
   */
  update(
    entity: InvoiceSubLines<T>
  ): UpdateRequestBuilder<InvoiceSubLines<T>, T> {
    return new UpdateRequestBuilder<InvoiceSubLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InvoiceSubLines`.
   * @param dataAreaId Key property. See {@link InvoiceSubLines.dataAreaId}.
   * @param productReceiptNumber Key property. See {@link InvoiceSubLines.productReceiptNumber}.
   * @param invoiceLineReference Key property. See {@link InvoiceSubLines.invoiceLineReference}.
   * @param purchaseOrder Key property. See {@link InvoiceSubLines.purchaseOrder}.
   * @param invoiceLineNumber Key property. See {@link InvoiceSubLines.invoiceLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceSubLines`.
   */
  delete(
    dataAreaId: string,
    productReceiptNumber: string,
    invoiceLineReference: string,
    purchaseOrder: string,
    invoiceLineNumber: BigNumber
  ): DeleteRequestBuilder<InvoiceSubLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InvoiceSubLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceSubLines` by taking the entity as a parameter.
   */
  delete(
    entity: InvoiceSubLines<T>
  ): DeleteRequestBuilder<InvoiceSubLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productReceiptNumber?: string,
    invoiceLineReference?: string,
    purchaseOrder?: string,
    invoiceLineNumber?: BigNumber
  ): DeleteRequestBuilder<InvoiceSubLines<T>, T> {
    return new DeleteRequestBuilder<InvoiceSubLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InvoiceSubLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductReceiptNumber: productReceiptNumber!,
            InvoiceLineReference: invoiceLineReference!,
            PurchaseOrder: purchaseOrder!,
            InvoiceLineNumber: invoiceLineNumber!
          }
    );
  }
}
