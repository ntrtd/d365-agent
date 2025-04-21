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
import { ProjInvoiceQrCodes } from './ProjInvoiceQrCodes';

/**
 * Request builder class for operations supported on the {@link ProjInvoiceQrCodes} entity.
 */
export class ProjInvoiceQrCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjInvoiceQrCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ProjInvoiceQrCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ProjInvoiceQrCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ProjInvoiceQrCodes<T>, T> {
    return new GetAllRequestBuilder<ProjInvoiceQrCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjInvoiceQrCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjInvoiceQrCodes`.
   */
  create(
    entity: ProjInvoiceQrCodes<T>
  ): CreateRequestBuilder<ProjInvoiceQrCodes<T>, T> {
    return new CreateRequestBuilder<ProjInvoiceQrCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjInvoiceQrCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjInvoiceQrCodes.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoiceQrCodes.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoiceQrCodes.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoiceQrCodes.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `ProjInvoiceQrCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projInvoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProjInvoiceQrCodes<T>, T> {
    return new GetByKeyRequestBuilder<ProjInvoiceQrCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjInvoiceId: projInvoiceId,
        LedgerVoucher: ledgerVoucher,
        InvoiceDate: invoiceDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjInvoiceQrCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjInvoiceQrCodes`.
   */
  update(
    entity: ProjInvoiceQrCodes<T>
  ): UpdateRequestBuilder<ProjInvoiceQrCodes<T>, T> {
    return new UpdateRequestBuilder<ProjInvoiceQrCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjInvoiceQrCodes`.
   * @param dataAreaId Key property. See {@link ProjInvoiceQrCodes.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoiceQrCodes.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoiceQrCodes.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoiceQrCodes.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoiceQrCodes`.
   */
  delete(
    dataAreaId: string,
    projInvoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<ProjInvoiceQrCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjInvoiceQrCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoiceQrCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ProjInvoiceQrCodes<T>
  ): DeleteRequestBuilder<ProjInvoiceQrCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projInvoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<ProjInvoiceQrCodes<T>, T> {
    return new DeleteRequestBuilder<ProjInvoiceQrCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjInvoiceQrCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjInvoiceId: projInvoiceId!,
            LedgerVoucher: ledgerVoucher!,
            InvoiceDate: invoiceDate!
          }
    );
  }
}
