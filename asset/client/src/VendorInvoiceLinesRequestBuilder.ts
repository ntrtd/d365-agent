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
import { VendorInvoiceLines } from './VendorInvoiceLines';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceLines} entity.
 */
export class VendorInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceLines`.
   */
  create(
    entity: VendorInvoiceLines<T>
  ): CreateRequestBuilder<VendorInvoiceLines<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceLines.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceLines.headerReference}.
   * @param invoiceLineNumber Key property. See {@link VendorInvoiceLines.invoiceLineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>,
    invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendorInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderReference: headerReference,
        InvoiceLineNumber: invoiceLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceLines`.
   */
  update(
    entity: VendorInvoiceLines<T>
  ): UpdateRequestBuilder<VendorInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceLines`.
   * @param dataAreaId Key property. See {@link VendorInvoiceLines.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceLines.headerReference}.
   * @param invoiceLineNumber Key property. See {@link VendorInvoiceLines.invoiceLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    headerReference: string,
    invoiceLineNumber: BigNumber
  ): DeleteRequestBuilder<VendorInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceLines<T>
  ): DeleteRequestBuilder<VendorInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerReference?: string,
    invoiceLineNumber?: BigNumber
  ): DeleteRequestBuilder<VendorInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderReference: headerReference!,
            InvoiceLineNumber: invoiceLineNumber!
          }
    );
  }
}
