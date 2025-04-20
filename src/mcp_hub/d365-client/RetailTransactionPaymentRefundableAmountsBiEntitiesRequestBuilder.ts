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
import { RetailTransactionPaymentRefundableAmountsBiEntities } from './RetailTransactionPaymentRefundableAmountsBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionPaymentRefundableAmountsBiEntities} entity.
 */
export class RetailTransactionPaymentRefundableAmountsBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionPaymentRefundableAmountsBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionPaymentRefundableAmountsBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionPaymentRefundableAmountsBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionPaymentRefundableAmountsBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionPaymentRefundableAmountsBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   */
  create(
    entity: RetailTransactionPaymentRefundableAmountsBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionPaymentRefundableAmountsBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionPaymentRefundableAmountsBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionPaymentRefundableAmountsBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionPaymentRefundableAmountsBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   */
  update(
    entity: RetailTransactionPaymentRefundableAmountsBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionPaymentRefundableAmountsBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentRefundableAmountsBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentRefundableAmountsBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionPaymentRefundableAmountsBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionPaymentRefundableAmountsBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionPaymentRefundableAmountsBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionPaymentRefundableAmountsBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}
