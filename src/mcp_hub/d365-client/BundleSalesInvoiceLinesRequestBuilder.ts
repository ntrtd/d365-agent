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
import { BundleSalesInvoiceLines } from './BundleSalesInvoiceLines';

/**
 * Request builder class for operations supported on the {@link BundleSalesInvoiceLines} entity.
 */
export class BundleSalesInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BundleSalesInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `BundleSalesInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `BundleSalesInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<BundleSalesInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<BundleSalesInvoiceLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BundleSalesInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BundleSalesInvoiceLines`.
   */
  create(
    entity: BundleSalesInvoiceLines<T>
  ): CreateRequestBuilder<BundleSalesInvoiceLines<T>, T> {
    return new CreateRequestBuilder<BundleSalesInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BundleSalesInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BundleSalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link BundleSalesInvoiceLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link BundleSalesInvoiceLines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link BundleSalesInvoiceLines.ledgerVoucher}.
   * @param inventoryLotId Key property. See {@link BundleSalesInvoiceLines.inventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `BundleSalesInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceNumber: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BundleSalesInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<BundleSalesInvoiceLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceNumber: invoiceNumber,
        InvoiceDate: invoiceDate,
        LedgerVoucher: ledgerVoucher,
        InventoryLotId: inventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BundleSalesInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BundleSalesInvoiceLines`.
   */
  update(
    entity: BundleSalesInvoiceLines<T>
  ): UpdateRequestBuilder<BundleSalesInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<BundleSalesInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BundleSalesInvoiceLines`.
   * @param dataAreaId Key property. See {@link BundleSalesInvoiceLines.dataAreaId}.
   * @param invoiceNumber Key property. See {@link BundleSalesInvoiceLines.invoiceNumber}.
   * @param invoiceDate Key property. See {@link BundleSalesInvoiceLines.invoiceDate}.
   * @param ledgerVoucher Key property. See {@link BundleSalesInvoiceLines.ledgerVoucher}.
   * @param inventoryLotId Key property. See {@link BundleSalesInvoiceLines.inventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    invoiceNumber: string,
    invoiceDate: Moment,
    ledgerVoucher: string,
    inventoryLotId: string
  ): DeleteRequestBuilder<BundleSalesInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BundleSalesInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BundleSalesInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: BundleSalesInvoiceLines<T>
  ): DeleteRequestBuilder<BundleSalesInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceNumber?: string,
    invoiceDate?: Moment,
    ledgerVoucher?: string,
    inventoryLotId?: string
  ): DeleteRequestBuilder<BundleSalesInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<BundleSalesInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BundleSalesInvoiceLines
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
