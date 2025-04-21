/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RetailLoyaltyCardRewardPointTransactionV2 } from './RetailLoyaltyCardRewardPointTransactionV2';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyCardRewardPointTransactionV2} entity.
 */
export class RetailLoyaltyCardRewardPointTransactionV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyCardRewardPointTransactionV2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyCardRewardPointTransactionV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailLoyaltyCardRewardPointTransactionV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyCardRewardPointTransactionV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   */
  create(
    entity: RetailLoyaltyCardRewardPointTransactionV2<T>
  ): CreateRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T> {
    return new CreateRequestBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyCardRewardPointTransactionV2` entity based on its keys.
   * @param operatingUnitNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.operatingUnitNumber}.
   * @param storeId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.storeId}.
   * @param terminal Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.transactionNumber}.
   * @param loyaltyTransactionCompany Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.loyaltyTransactionCompany}.
   * @param loyaltyTransactionLineNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.loyaltyTransactionLineNumber}.
   * @param salesOrderId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.salesOrderId}.
   * @param adjustmentId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.adjustmentId}.
   * @param cardNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.cardNumber}.
   * @param nonTransactionalActivityId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.nonTransactionalActivityId}.
   * @param entryDate Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.entryDate}.
   * @param entryTime Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.entryTime}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyCardRewardPointTransactionV2` entity based on its keys.
   */
  getByKey(
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    loyaltyTransactionCompany: DeserializedType<T, 'Edm.String'>,
    loyaltyTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    salesOrderId: DeserializedType<T, 'Edm.String'>,
    adjustmentId: DeserializedType<T, 'Edm.String'>,
    cardNumber: DeserializedType<T, 'Edm.String'>,
    nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>,
    entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    entryTime: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<T>,
      T
    >(this.entityApi, {
      OperatingUnitNumber: operatingUnitNumber,
      storeId: storeId,
      Terminal: terminal,
      TransactionNumber: transactionNumber,
      LoyaltyTransactionCompany: loyaltyTransactionCompany,
      LoyaltyTransactionLineNumber: loyaltyTransactionLineNumber,
      SalesOrderId: salesOrderId,
      AdjustmentId: adjustmentId,
      CardNumber: cardNumber,
      NonTransactionalActivityId: nonTransactionalActivityId,
      EntryDate: entryDate,
      EntryTime: entryTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   */
  update(
    entity: RetailLoyaltyCardRewardPointTransactionV2<T>
  ): UpdateRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T> {
    return new UpdateRequestBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   * @param operatingUnitNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.operatingUnitNumber}.
   * @param storeId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.storeId}.
   * @param terminal Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.transactionNumber}.
   * @param loyaltyTransactionCompany Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.loyaltyTransactionCompany}.
   * @param loyaltyTransactionLineNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.loyaltyTransactionLineNumber}.
   * @param salesOrderId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.salesOrderId}.
   * @param adjustmentId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.adjustmentId}.
   * @param cardNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.cardNumber}.
   * @param nonTransactionalActivityId Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.nonTransactionalActivityId}.
   * @param entryDate Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.entryDate}.
   * @param entryTime Key property. See {@link RetailLoyaltyCardRewardPointTransactionV2.entryTime}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   */
  delete(
    operatingUnitNumber: string,
    storeId: string,
    terminal: string,
    transactionNumber: string,
    loyaltyTransactionCompany: string,
    loyaltyTransactionLineNumber: BigNumber,
    salesOrderId: string,
    adjustmentId: string,
    cardNumber: string,
    nonTransactionalActivityId: string,
    entryDate: Moment,
    entryTime: number
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardRewardPointTransactionV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardRewardPointTransactionV2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyCardRewardPointTransactionV2<T>
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T>;
  delete(
    operatingUnitNumberOrEntity: any,
    storeId?: string,
    terminal?: string,
    transactionNumber?: string,
    loyaltyTransactionCompany?: string,
    loyaltyTransactionLineNumber?: BigNumber,
    salesOrderId?: string,
    adjustmentId?: string,
    cardNumber?: string,
    nonTransactionalActivityId?: string,
    entryDate?: Moment,
    entryTime?: number
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactionV2<T>, T> {
    return new DeleteRequestBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<T>,
      T
    >(
      this.entityApi,
      operatingUnitNumberOrEntity instanceof
      RetailLoyaltyCardRewardPointTransactionV2
        ? operatingUnitNumberOrEntity
        : {
            OperatingUnitNumber: operatingUnitNumberOrEntity!,
            storeId: storeId!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LoyaltyTransactionCompany: loyaltyTransactionCompany!,
            LoyaltyTransactionLineNumber: loyaltyTransactionLineNumber!,
            SalesOrderId: salesOrderId!,
            AdjustmentId: adjustmentId!,
            CardNumber: cardNumber!,
            NonTransactionalActivityId: nonTransactionalActivityId!,
            EntryDate: entryDate!,
            EntryTime: entryTime!
          }
    );
  }
}
