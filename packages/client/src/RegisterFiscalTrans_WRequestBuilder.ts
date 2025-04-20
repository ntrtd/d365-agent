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
import { RegisterFiscalTrans_W } from './RegisterFiscalTrans_W';

/**
 * Request builder class for operations supported on the {@link RegisterFiscalTrans_W} entity.
 */
export class RegisterFiscalTrans_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegisterFiscalTrans_W<T>, T> {
  /**
   * Returns a request builder for querying all `RegisterFiscalTrans_W` entities.
   * @returns A request builder for creating requests to retrieve all `RegisterFiscalTrans_W` entities.
   */
  getAll(): GetAllRequestBuilder<RegisterFiscalTrans_W<T>, T> {
    return new GetAllRequestBuilder<RegisterFiscalTrans_W<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegisterFiscalTrans_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegisterFiscalTrans_W`.
   */
  create(
    entity: RegisterFiscalTrans_W<T>
  ): CreateRequestBuilder<RegisterFiscalTrans_W<T>, T> {
    return new CreateRequestBuilder<RegisterFiscalTrans_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegisterFiscalTrans_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link RegisterFiscalTrans_W.dataAreaId}.
   * @param voucher Key property. See {@link RegisterFiscalTrans_W.voucher}.
   * @param transDate Key property. See {@link RegisterFiscalTrans_W.transDate}.
   * @returns A request builder for creating requests to retrieve one `RegisterFiscalTrans_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RegisterFiscalTrans_W<T>, T> {
    return new GetByKeyRequestBuilder<RegisterFiscalTrans_W<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        TransDate: transDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegisterFiscalTrans_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegisterFiscalTrans_W`.
   */
  update(
    entity: RegisterFiscalTrans_W<T>
  ): UpdateRequestBuilder<RegisterFiscalTrans_W<T>, T> {
    return new UpdateRequestBuilder<RegisterFiscalTrans_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegisterFiscalTrans_W`.
   * @param dataAreaId Key property. See {@link RegisterFiscalTrans_W.dataAreaId}.
   * @param voucher Key property. See {@link RegisterFiscalTrans_W.voucher}.
   * @param transDate Key property. See {@link RegisterFiscalTrans_W.transDate}.
   * @returns A request builder for creating requests that delete an entity of type `RegisterFiscalTrans_W`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    transDate: Moment
  ): DeleteRequestBuilder<RegisterFiscalTrans_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegisterFiscalTrans_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegisterFiscalTrans_W` by taking the entity as a parameter.
   */
  delete(
    entity: RegisterFiscalTrans_W<T>
  ): DeleteRequestBuilder<RegisterFiscalTrans_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    transDate?: Moment
  ): DeleteRequestBuilder<RegisterFiscalTrans_W<T>, T> {
    return new DeleteRequestBuilder<RegisterFiscalTrans_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RegisterFiscalTrans_W
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            TransDate: transDate!
          }
    );
  }
}
