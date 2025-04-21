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
import { Blwi } from './Blwi';
import { TradeBlwiCustVend } from './TradeBlwiCustVend';

/**
 * Request builder class for operations supported on the {@link Blwi} entity.
 */
export class BlwiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Blwi<T>, T> {
  /**
   * Returns a request builder for querying all `Blwi` entities.
   * @returns A request builder for creating requests to retrieve all `Blwi` entities.
   */
  getAll(): GetAllRequestBuilder<Blwi<T>, T> {
    return new GetAllRequestBuilder<Blwi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Blwi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Blwi`.
   */
  create(entity: Blwi<T>): CreateRequestBuilder<Blwi<T>, T> {
    return new CreateRequestBuilder<Blwi<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Blwi` entity based on its keys.
   * @param dataAreaId Key property. See {@link Blwi.dataAreaId}.
   * @param company Key property. See {@link Blwi.company}.
   * @param blwiTransaction Key property. See {@link Blwi.blwiTransaction}.
   * @param accountNumber Key property. See {@link Blwi.accountNumber}.
   * @param voucher Key property. See {@link Blwi.voucher}.
   * @param invoice Key property. See {@link Blwi.invoice}.
   * @param transactionDate Key property. See {@link Blwi.transactionDate}.
   * @returns A request builder for creating requests to retrieve one `Blwi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    blwiTransaction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TradeBLWICustVend'
    >,
    accountNumber: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    invoice: DeserializedType<T, 'Edm.String'>,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Blwi<T>, T> {
    return new GetByKeyRequestBuilder<Blwi<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Company: company,
      BLWITransaction: blwiTransaction,
      AccountNumber: accountNumber,
      Voucher: voucher,
      Invoice: invoice,
      TransactionDate: transactionDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Blwi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Blwi`.
   */
  update(entity: Blwi<T>): UpdateRequestBuilder<Blwi<T>, T> {
    return new UpdateRequestBuilder<Blwi<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Blwi`.
   * @param dataAreaId Key property. See {@link Blwi.dataAreaId}.
   * @param company Key property. See {@link Blwi.company}.
   * @param blwiTransaction Key property. See {@link Blwi.blwiTransaction}.
   * @param accountNumber Key property. See {@link Blwi.accountNumber}.
   * @param voucher Key property. See {@link Blwi.voucher}.
   * @param invoice Key property. See {@link Blwi.invoice}.
   * @param transactionDate Key property. See {@link Blwi.transactionDate}.
   * @returns A request builder for creating requests that delete an entity of type `Blwi`.
   */
  delete(
    dataAreaId: string,
    company: string,
    blwiTransaction: TradeBlwiCustVend,
    accountNumber: string,
    voucher: string,
    invoice: string,
    transactionDate: Moment
  ): DeleteRequestBuilder<Blwi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Blwi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Blwi` by taking the entity as a parameter.
   */
  delete(entity: Blwi<T>): DeleteRequestBuilder<Blwi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    company?: string,
    blwiTransaction?: TradeBlwiCustVend,
    accountNumber?: string,
    voucher?: string,
    invoice?: string,
    transactionDate?: Moment
  ): DeleteRequestBuilder<Blwi<T>, T> {
    return new DeleteRequestBuilder<Blwi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Blwi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Company: company!,
            BLWITransaction: blwiTransaction!,
            AccountNumber: accountNumber!,
            Voucher: voucher!,
            Invoice: invoice!,
            TransactionDate: transactionDate!
          }
    );
  }
}
