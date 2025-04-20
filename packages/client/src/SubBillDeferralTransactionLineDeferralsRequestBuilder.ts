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
import { SubBillDeferralTransactionLineDeferrals } from './SubBillDeferralTransactionLineDeferrals';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralTransactionLineDeferrals} entity.
 */
export class SubBillDeferralTransactionLineDeferralsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralTransactionLineDeferrals` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralTransactionLineDeferrals` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubBillDeferralTransactionLineDeferrals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubBillDeferralTransactionLineDeferrals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralTransactionLineDeferrals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralTransactionLineDeferrals`.
   */
  create(
    entity: SubBillDeferralTransactionLineDeferrals<T>
  ): CreateRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T> {
    return new CreateRequestBuilder<
      SubBillDeferralTransactionLineDeferrals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralTransactionLineDeferrals` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralTransactionLineDeferrals.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillDeferralTransactionLineDeferrals.lineNum}.
   * @param salesId Key property. See {@link SubBillDeferralTransactionLineDeferrals.salesId}.
   * @param voucher Key property. See {@link SubBillDeferralTransactionLineDeferrals.voucher}.
   * @param transactionLineDeferralRecId Key property. See {@link SubBillDeferralTransactionLineDeferrals.transactionLineDeferralRecId}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralTransactionLineDeferrals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    transactionLineDeferralRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillDeferralTransactionLineDeferrals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNum: lineNum,
      SalesId: salesId,
      Voucher: voucher,
      TransactionLineDeferralRecId: transactionLineDeferralRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralTransactionLineDeferrals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralTransactionLineDeferrals`.
   */
  update(
    entity: SubBillDeferralTransactionLineDeferrals<T>
  ): UpdateRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T> {
    return new UpdateRequestBuilder<
      SubBillDeferralTransactionLineDeferrals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTransactionLineDeferrals`.
   * @param dataAreaId Key property. See {@link SubBillDeferralTransactionLineDeferrals.dataAreaId}.
   * @param lineNum Key property. See {@link SubBillDeferralTransactionLineDeferrals.lineNum}.
   * @param salesId Key property. See {@link SubBillDeferralTransactionLineDeferrals.salesId}.
   * @param voucher Key property. See {@link SubBillDeferralTransactionLineDeferrals.voucher}.
   * @param transactionLineDeferralRecId Key property. See {@link SubBillDeferralTransactionLineDeferrals.transactionLineDeferralRecId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTransactionLineDeferrals`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    salesId: string,
    voucher: string,
    transactionLineDeferralRecId: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralTransactionLineDeferrals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralTransactionLineDeferrals` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralTransactionLineDeferrals<T>
  ): DeleteRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    salesId?: string,
    voucher?: string,
    transactionLineDeferralRecId?: BigNumber
  ): DeleteRequestBuilder<SubBillDeferralTransactionLineDeferrals<T>, T> {
    return new DeleteRequestBuilder<
      SubBillDeferralTransactionLineDeferrals<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralTransactionLineDeferrals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            SalesId: salesId!,
            Voucher: voucher!,
            TransactionLineDeferralRecId: transactionLineDeferralRecId!
          }
    );
  }
}
