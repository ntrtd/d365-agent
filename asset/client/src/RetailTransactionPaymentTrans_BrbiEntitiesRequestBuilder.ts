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
import { RetailTransactionPaymentTrans_BrbiEntities } from './RetailTransactionPaymentTrans_BrbiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionPaymentTrans_BrbiEntities} entity.
 */
export class RetailTransactionPaymentTrans_BrbiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionPaymentTrans_BrbiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionPaymentTrans_BrbiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionPaymentTrans_BrbiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionPaymentTrans_BrbiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionPaymentTrans_BrbiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   */
  create(
    entity: RetailTransactionPaymentTrans_BrbiEntities<T>
  ): CreateRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionPaymentTrans_BrbiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionPaymentTrans_BrbiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionPaymentTrans_BrbiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionPaymentTrans_BrbiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   */
  update(
    entity: RetailTransactionPaymentTrans_BrbiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionPaymentTrans_BrbiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionPaymentTrans_BrbiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentTrans_BrbiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentTrans_BrbiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionPaymentTrans_BrbiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionPaymentTrans_BrbiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionPaymentTrans_BrbiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionPaymentTrans_BrbiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}
