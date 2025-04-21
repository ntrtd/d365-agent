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
import { InvoiceSubLinesV2 } from './InvoiceSubLinesV2';

/**
 * Request builder class for operations supported on the {@link InvoiceSubLinesV2} entity.
 */
export class InvoiceSubLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InvoiceSubLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InvoiceSubLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InvoiceSubLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InvoiceSubLinesV2<T>, T> {
    return new GetAllRequestBuilder<InvoiceSubLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InvoiceSubLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InvoiceSubLinesV2`.
   */
  create(
    entity: InvoiceSubLinesV2<T>
  ): CreateRequestBuilder<InvoiceSubLinesV2<T>, T> {
    return new CreateRequestBuilder<InvoiceSubLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InvoiceSubLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InvoiceSubLinesV2.dataAreaId}.
   * @param productReceiptNumber Key property. See {@link InvoiceSubLinesV2.productReceiptNumber}.
   * @param invoiceLineReference Key property. See {@link InvoiceSubLinesV2.invoiceLineReference}.
   * @param purchaseOrder Key property. See {@link InvoiceSubLinesV2.purchaseOrder}.
   * @param invoiceLineNumber Key property. See {@link InvoiceSubLinesV2.invoiceLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InvoiceSubLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productReceiptNumber: DeserializedType<T, 'Edm.String'>,
    invoiceLineReference: DeserializedType<T, 'Edm.String'>,
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InvoiceSubLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<InvoiceSubLinesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductReceiptNumber: productReceiptNumber,
      InvoiceLineReference: invoiceLineReference,
      PurchaseOrder: purchaseOrder,
      InvoiceLineNumber: invoiceLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InvoiceSubLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InvoiceSubLinesV2`.
   */
  update(
    entity: InvoiceSubLinesV2<T>
  ): UpdateRequestBuilder<InvoiceSubLinesV2<T>, T> {
    return new UpdateRequestBuilder<InvoiceSubLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InvoiceSubLinesV2`.
   * @param dataAreaId Key property. See {@link InvoiceSubLinesV2.dataAreaId}.
   * @param productReceiptNumber Key property. See {@link InvoiceSubLinesV2.productReceiptNumber}.
   * @param invoiceLineReference Key property. See {@link InvoiceSubLinesV2.invoiceLineReference}.
   * @param purchaseOrder Key property. See {@link InvoiceSubLinesV2.purchaseOrder}.
   * @param invoiceLineNumber Key property. See {@link InvoiceSubLinesV2.invoiceLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceSubLinesV2`.
   */
  delete(
    dataAreaId: string,
    productReceiptNumber: string,
    invoiceLineReference: string,
    purchaseOrder: string,
    invoiceLineNumber: BigNumber
  ): DeleteRequestBuilder<InvoiceSubLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InvoiceSubLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InvoiceSubLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InvoiceSubLinesV2<T>
  ): DeleteRequestBuilder<InvoiceSubLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productReceiptNumber?: string,
    invoiceLineReference?: string,
    purchaseOrder?: string,
    invoiceLineNumber?: BigNumber
  ): DeleteRequestBuilder<InvoiceSubLinesV2<T>, T> {
    return new DeleteRequestBuilder<InvoiceSubLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InvoiceSubLinesV2
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
