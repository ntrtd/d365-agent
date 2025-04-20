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
import { RetailLoyaltyCardRewardPointTransactions } from './RetailLoyaltyCardRewardPointTransactions';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyCardRewardPointTransactions} entity.
 */
export class RetailLoyaltyCardRewardPointTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyCardRewardPointTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyCardRewardPointTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailLoyaltyCardRewardPointTransactions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailLoyaltyCardRewardPointTransactions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyCardRewardPointTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   */
  create(
    entity: RetailLoyaltyCardRewardPointTransactions<T>
  ): CreateRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T> {
    return new CreateRequestBuilder<
      RetailLoyaltyCardRewardPointTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyCardRewardPointTransactions` entity based on its keys.
   * @param loyaltyTransactionLineNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.loyaltyTransactionLineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailLoyaltyCardRewardPointTransactions.terminal}.
   * @param transactionNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.transactionNumber}.
   * @param loyaltyTransactionCompany Key property. See {@link RetailLoyaltyCardRewardPointTransactions.loyaltyTransactionCompany}.
   * @param salesOrderId Key property. See {@link RetailLoyaltyCardRewardPointTransactions.salesOrderId}.
   * @param adjustmentId Key property. See {@link RetailLoyaltyCardRewardPointTransactions.adjustmentId}.
   * @param cardNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.cardNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyCardRewardPointTransactions` entity based on its keys.
   */
  getByKey(
    loyaltyTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    loyaltyTransactionCompany: DeserializedType<T, 'Edm.String'>,
    salesOrderId: DeserializedType<T, 'Edm.String'>,
    adjustmentId: DeserializedType<T, 'Edm.String'>,
    cardNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailLoyaltyCardRewardPointTransactions<T>,
      T
    >(this.entityApi, {
      LoyaltyTransactionLineNumber: loyaltyTransactionLineNumber,
      OperatingUnitNumber: operatingUnitNumber,
      Terminal: terminal,
      TransactionNumber: transactionNumber,
      LoyaltyTransactionCompany: loyaltyTransactionCompany,
      SalesOrderId: salesOrderId,
      AdjustmentId: adjustmentId,
      CardNumber: cardNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   */
  update(
    entity: RetailLoyaltyCardRewardPointTransactions<T>
  ): UpdateRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T> {
    return new UpdateRequestBuilder<
      RetailLoyaltyCardRewardPointTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   * @param loyaltyTransactionLineNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.loyaltyTransactionLineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailLoyaltyCardRewardPointTransactions.terminal}.
   * @param transactionNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.transactionNumber}.
   * @param loyaltyTransactionCompany Key property. See {@link RetailLoyaltyCardRewardPointTransactions.loyaltyTransactionCompany}.
   * @param salesOrderId Key property. See {@link RetailLoyaltyCardRewardPointTransactions.salesOrderId}.
   * @param adjustmentId Key property. See {@link RetailLoyaltyCardRewardPointTransactions.adjustmentId}.
   * @param cardNumber Key property. See {@link RetailLoyaltyCardRewardPointTransactions.cardNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   */
  delete(
    loyaltyTransactionLineNumber: BigNumber,
    operatingUnitNumber: string,
    terminal: string,
    transactionNumber: string,
    loyaltyTransactionCompany: string,
    salesOrderId: string,
    adjustmentId: string,
    cardNumber: string
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardRewardPointTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardRewardPointTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyCardRewardPointTransactions<T>
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T>;
  delete(
    loyaltyTransactionLineNumberOrEntity: any,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionNumber?: string,
    loyaltyTransactionCompany?: string,
    salesOrderId?: string,
    adjustmentId?: string,
    cardNumber?: string
  ): DeleteRequestBuilder<RetailLoyaltyCardRewardPointTransactions<T>, T> {
    return new DeleteRequestBuilder<
      RetailLoyaltyCardRewardPointTransactions<T>,
      T
    >(
      this.entityApi,
      loyaltyTransactionLineNumberOrEntity instanceof
      RetailLoyaltyCardRewardPointTransactions
        ? loyaltyTransactionLineNumberOrEntity
        : {
            LoyaltyTransactionLineNumber: loyaltyTransactionLineNumberOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LoyaltyTransactionCompany: loyaltyTransactionCompany!,
            SalesOrderId: salesOrderId!,
            AdjustmentId: adjustmentId!,
            CardNumber: cardNumber!
          }
    );
  }
}
