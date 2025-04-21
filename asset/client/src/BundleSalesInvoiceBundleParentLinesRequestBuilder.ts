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
import { BundleSalesInvoiceBundleParentLines } from './BundleSalesInvoiceBundleParentLines';

/**
 * Request builder class for operations supported on the {@link BundleSalesInvoiceBundleParentLines} entity.
 */
export class BundleSalesInvoiceBundleParentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
  /**
   * Returns a request builder for querying all `BundleSalesInvoiceBundleParentLines` entities.
   * @returns A request builder for creating requests to retrieve all `BundleSalesInvoiceBundleParentLines` entities.
   */
  getAll(): GetAllRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
    return new GetAllRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BundleSalesInvoiceBundleParentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BundleSalesInvoiceBundleParentLines`.
   */
  create(
    entity: BundleSalesInvoiceBundleParentLines<T>
  ): CreateRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
    return new CreateRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BundleSalesInvoiceBundleParentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BundleSalesInvoiceBundleParentLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link BundleSalesInvoiceBundleParentLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link BundleSalesInvoiceBundleParentLines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link BundleSalesInvoiceBundleParentLines.ledgerVoucher}.
   * @param inventoryLotId Key property. See {@link BundleSalesInvoiceBundleParentLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BundleSalesInvoiceBundleParentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
    return new GetByKeyRequestBuilder<
      BundleSalesInvoiceBundleParentLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InvoiceNumber: invoiceNumber,
      InvoiceDate: invoiceDate,
      LedgerVoucher: ledgerVoucher,
      InventoryLotId: inventoryLotId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BundleSalesInvoiceBundleParentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BundleSalesInvoiceBundleParentLines`.
   */
  update(
    entity: BundleSalesInvoiceBundleParentLines<T>
  ): UpdateRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
    return new UpdateRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BundleSalesInvoiceBundleParentLines`.
   * @param dataAreaId Key property. See {@link BundleSalesInvoiceBundleParentLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link BundleSalesInvoiceBundleParentLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link BundleSalesInvoiceBundleParentLines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link BundleSalesInvoiceBundleParentLines.ledgerVoucher}.
   * @param inventoryLotId Key property. See {@link BundleSalesInvoiceBundleParentLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesInvoiceBundleParentLines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BundleSalesInvoiceBundleParentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesInvoiceBundleParentLines` by taking the entity as a parameter.
   */
  delete(
    entity: BundleSalesInvoiceBundleParentLines<T>
  ): DeleteRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string,
    inventoryLotId?: string
  ): DeleteRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T> {
    return new DeleteRequestBuilder<BundleSalesInvoiceBundleParentLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BundleSalesInvoiceBundleParentLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceNumber: invoiceNumber!,
            InvoiceDate: invoiceDate!,
            LedgerVoucher: ledgerVoucher!,
            InventoryLotId: inventoryLotId!
          }
    );
  }
}
