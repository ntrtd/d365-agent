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
import { ProjInvoice_W } from './ProjInvoice_W';

/**
 * Request builder class for operations supported on the {@link ProjInvoice_W} entity.
 */
export class ProjInvoice_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjInvoice_W<T>, T> {
  /**
   * Returns a request builder for querying all `ProjInvoice_W` entities.
   * @returns A request builder for creating requests to retrieve all `ProjInvoice_W` entities.
   */
  getAll(): GetAllRequestBuilder<ProjInvoice_W<T>, T> {
    return new GetAllRequestBuilder<ProjInvoice_W<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjInvoice_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjInvoice_W`.
   */
  create(entity: ProjInvoice_W<T>): CreateRequestBuilder<ProjInvoice_W<T>, T> {
    return new CreateRequestBuilder<ProjInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjInvoice_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjInvoice_W.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoice_W.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests to retrieve one `ProjInvoice_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projInvoiceId: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProjInvoice_W<T>, T> {
    return new GetByKeyRequestBuilder<ProjInvoice_W<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjInvoiceId: projInvoiceId,
      LedgerVoucher: ledgerVoucher,
      InvoiceDate: invoiceDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjInvoice_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjInvoice_W`.
   */
  update(entity: ProjInvoice_W<T>): UpdateRequestBuilder<ProjInvoice_W<T>, T> {
    return new UpdateRequestBuilder<ProjInvoice_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjInvoice_W`.
   * @param dataAreaId Key property. See {@link ProjInvoice_W.dataAreaId}.
   * @param projInvoiceId Key property. See {@link ProjInvoice_W.projInvoiceId}.
   * @param ledgerVoucher Key property. See {@link ProjInvoice_W.ledgerVoucher}.
   * @param invoiceDate Key property. See {@link ProjInvoice_W.invoiceDate}.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoice_W`.
   */
  delete(
    dataAreaId: string,
    projInvoiceId: string,
    ledgerVoucher: string,
    invoiceDate: Moment
  ): DeleteRequestBuilder<ProjInvoice_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjInvoice_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjInvoice_W` by taking the entity as a parameter.
   */
  delete(entity: ProjInvoice_W<T>): DeleteRequestBuilder<ProjInvoice_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projInvoiceId?: string,
    ledgerVoucher?: string,
    invoiceDate?: Moment
  ): DeleteRequestBuilder<ProjInvoice_W<T>, T> {
    return new DeleteRequestBuilder<ProjInvoice_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjInvoice_W
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
