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
import { RetailTransactionTaxTrans_InbiEntities } from './RetailTransactionTaxTrans_InbiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxTrans_InbiEntities} entity.
 */
export class RetailTransactionTaxTrans_InbiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxTrans_InbiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxTrans_InbiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionTaxTrans_InbiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxTrans_InbiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   */
  create(
    entity: RetailTransactionTaxTrans_InbiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionTaxTrans_InbiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxTrans_InbiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionTaxTrans_InbiEntities.channel}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTrans_InbiEntities.saleLineNum}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.transactionId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.terminalId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.storeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxTrans_InbiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.Int64'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionTaxTrans_InbiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Channel: channel,
      SaleLineNum: saleLineNum,
      TransactionId: transactionId,
      TerminalId: terminalId,
      StoreId: storeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   */
  update(
    entity: RetailTransactionTaxTrans_InbiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionTaxTrans_InbiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionTaxTrans_InbiEntities.channel}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxTrans_InbiEntities.saleLineNum}.
   * @param transactionId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.transactionId}.
   * @param terminalId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.terminalId}.
   * @param storeId Key property. See {@link RetailTransactionTaxTrans_InbiEntities.storeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   */
  delete(
    dataAreaId: string,
    channel: BigNumber,
    saleLineNum: BigNumber,
    transactionId: string,
    terminalId: string,
    storeId: string
  ): DeleteRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxTrans_InbiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxTrans_InbiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxTrans_InbiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    channel?: BigNumber,
    saleLineNum?: BigNumber,
    transactionId?: string,
    terminalId?: string,
    storeId?: string
  ): DeleteRequestBuilder<RetailTransactionTaxTrans_InbiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionTaxTrans_InbiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxTrans_InbiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Channel: channel!,
            SaleLineNum: saleLineNum!,
            TransactionId: transactionId!,
            TerminalId: terminalId!,
            StoreId: storeId!
          }
    );
  }
}
