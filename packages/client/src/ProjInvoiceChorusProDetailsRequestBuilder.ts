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
import { ProjInvoiceChorusProDetails } from './ProjInvoiceChorusProDetails';

/**
 * Request builder class for operations supported on the {@link ProjInvoiceChorusProDetails} entity.
 */
export class ProjInvoiceChorusProDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ProjInvoiceChorusProDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ProjInvoiceChorusProDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
    return new GetAllRequestBuilder<ProjInvoiceChorusProDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjInvoiceChorusProDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjInvoiceChorusProDetails`.
   */
  create(
    entity: ProjInvoiceChorusProDetails<T>
  ): CreateRequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
    return new CreateRequestBuilder<ProjInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjInvoiceChorusProDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjInvoiceChorusProDetails.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoiceChorusProDetails.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoiceChorusProDetails.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoiceChorusProDetails.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `ProjInvoiceChorusProDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projInvoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
    return new GetByKeyRequestBuilder<ProjInvoiceChorusProDetails<T>, T>(
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
   * Returns a request builder for updating an entity of type `ProjInvoiceChorusProDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjInvoiceChorusProDetails`.
   */
  update(
    entity: ProjInvoiceChorusProDetails<T>
  ): UpdateRequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
    return new UpdateRequestBuilder<ProjInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjInvoiceChorusProDetails`.
   * @param dataAreaId Key property. See {@link ProjInvoiceChorusProDetails.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoiceChorusProDetails.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoiceChorusProDetails.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoiceChorusProDetails.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoiceChorusProDetails`.
   */
  delete(
    dataAreaId: string,
    projInvoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<ProjInvoiceChorusProDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjInvoiceChorusProDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoiceChorusProDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ProjInvoiceChorusProDetails<T>
  ): DeleteRequestBuilder<ProjInvoiceChorusProDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projInvoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<ProjInvoiceChorusProDetails<T>, T> {
    return new DeleteRequestBuilder<ProjInvoiceChorusProDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjInvoiceChorusProDetails
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
