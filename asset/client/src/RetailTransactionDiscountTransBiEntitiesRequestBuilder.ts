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
import { RetailTransactionDiscountTransBiEntities } from './RetailTransactionDiscountTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionDiscountTransBiEntities} entity.
 */
export class RetailTransactionDiscountTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionDiscountTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionDiscountTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionDiscountTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionDiscountTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionDiscountTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionDiscountTransBiEntities`.
   */
  create(
    entity: RetailTransactionDiscountTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionDiscountTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionDiscountTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionDiscountTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionDiscountTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionDiscountTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionDiscountTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionDiscountTransBiEntities.saleLineNum}.
   * @param lineNum Key property. See {@link RetailTransactionDiscountTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionDiscountTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionDiscountTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      SaleLineNum: saleLineNum,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionDiscountTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionDiscountTransBiEntities`.
   */
  update(
    entity: RetailTransactionDiscountTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionDiscountTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDiscountTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionDiscountTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionDiscountTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionDiscountTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionDiscountTransBiEntities.transactionId}.
   * @param saleLineNum Key property. See {@link RetailTransactionDiscountTransBiEntities.saleLineNum}.
   * @param lineNum Key property. See {@link RetailTransactionDiscountTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDiscountTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDiscountTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDiscountTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionDiscountTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionDiscountTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionDiscountTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionDiscountTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            LineNum: lineNum!
          }
    );
  }
}
