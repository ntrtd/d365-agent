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
import { VendorInvoiceLineCharges } from './VendorInvoiceLineCharges';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceLineCharges} entity.
 */
export class VendorInvoiceLineChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceLineCharges<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceLineCharges` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceLineCharges` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceLineCharges<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceLineCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceLineCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceLineCharges`.
   */
  create(
    entity: VendorInvoiceLineCharges<T>
  ): CreateRequestBuilder<VendorInvoiceLineCharges<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceLineCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceLineCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceLineCharges.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceLineCharges.headerReference}.
   * @param chargeLineNumber Key property. See {@link VendorInvoiceLineCharges.chargeLineNumber}.
   * @param invoiceLineNumber Key property. See {@link VendorInvoiceLineCharges.invoiceLineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceLineCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>,
    chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    invoiceLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendorInvoiceLineCharges<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceLineCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderReference: headerReference,
        ChargeLineNumber: chargeLineNumber,
        InvoiceLineNumber: invoiceLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceLineCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceLineCharges`.
   */
  update(
    entity: VendorInvoiceLineCharges<T>
  ): UpdateRequestBuilder<VendorInvoiceLineCharges<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceLineCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceLineCharges`.
   * @param dataAreaId Key property. See {@link VendorInvoiceLineCharges.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceLineCharges.headerReference}.
   * @param chargeLineNumber Key property. See {@link VendorInvoiceLineCharges.chargeLineNumber}.
   * @param invoiceLineNumber Key property. See {@link VendorInvoiceLineCharges.invoiceLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceLineCharges`.
   */
  delete(
    dataAreaId: string,
    headerReference: string,
    chargeLineNumber: BigNumber,
    invoiceLineNumber: BigNumber
  ): DeleteRequestBuilder<VendorInvoiceLineCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceLineCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceLineCharges` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceLineCharges<T>
  ): DeleteRequestBuilder<VendorInvoiceLineCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerReference?: string,
    chargeLineNumber?: BigNumber,
    invoiceLineNumber?: BigNumber
  ): DeleteRequestBuilder<VendorInvoiceLineCharges<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceLineCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceLineCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderReference: headerReference!,
            ChargeLineNumber: chargeLineNumber!,
            InvoiceLineNumber: invoiceLineNumber!
          }
    );
  }
}
