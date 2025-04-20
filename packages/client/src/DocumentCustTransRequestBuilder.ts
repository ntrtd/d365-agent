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
import { DocumentCustTrans } from './DocumentCustTrans';

/**
 * Request builder class for operations supported on the {@link DocumentCustTrans} entity.
 */
export class DocumentCustTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentCustTrans<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentCustTrans` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentCustTrans` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentCustTrans<T>, T> {
    return new GetAllRequestBuilder<DocumentCustTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentCustTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentCustTrans`.
   */
  create(
    entity: DocumentCustTrans<T>
  ): CreateRequestBuilder<DocumentCustTrans<T>, T> {
    return new CreateRequestBuilder<DocumentCustTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentCustTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentCustTrans.dataAreaId}.
   * @param transDate Key property. See {@link DocumentCustTrans.transDate}.
   * @param voucher Key property. See {@link DocumentCustTrans.voucher}.
   * @param invoice Key property. See {@link DocumentCustTrans.invoice}.
   * @returns A request builder for creating requests to retrieve one `DocumentCustTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    invoice: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentCustTrans<T>, T> {
    return new GetByKeyRequestBuilder<DocumentCustTrans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransDate: transDate,
      Voucher: voucher,
      Invoice: invoice
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentCustTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentCustTrans`.
   */
  update(
    entity: DocumentCustTrans<T>
  ): UpdateRequestBuilder<DocumentCustTrans<T>, T> {
    return new UpdateRequestBuilder<DocumentCustTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentCustTrans`.
   * @param dataAreaId Key property. See {@link DocumentCustTrans.dataAreaId}.
   * @param transDate Key property. See {@link DocumentCustTrans.transDate}.
   * @param voucher Key property. See {@link DocumentCustTrans.voucher}.
   * @param invoice Key property. See {@link DocumentCustTrans.invoice}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentCustTrans`.
   */
  delete(
    dataAreaId: string,
    transDate: Moment,
    voucher: string,
    invoice: string
  ): DeleteRequestBuilder<DocumentCustTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentCustTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentCustTrans` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentCustTrans<T>
  ): DeleteRequestBuilder<DocumentCustTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transDate?: Moment,
    voucher?: string,
    invoice?: string
  ): DeleteRequestBuilder<DocumentCustTrans<T>, T> {
    return new DeleteRequestBuilder<DocumentCustTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentCustTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransDate: transDate!,
            Voucher: voucher!,
            Invoice: invoice!
          }
    );
  }
}
