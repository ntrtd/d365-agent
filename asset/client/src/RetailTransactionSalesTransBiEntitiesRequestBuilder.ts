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
import { RetailTransactionSalesTransBiEntities } from './RetailTransactionSalesTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSalesTransBiEntities} entity.
 */
export class RetailTransactionSalesTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionSalesTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSalesTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSalesTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSalesTransBiEntities`.
   */
  create(
    entity: RetailTransactionSalesTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSalesTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSalesTransBiEntities.store}.
   * @param terminalId Key property. See {@link RetailTransactionSalesTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionSalesTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionSalesTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSalesTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminalId: terminalId,
      transactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSalesTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSalesTransBiEntities`.
   */
  update(
    entity: RetailTransactionSalesTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSalesTransBiEntities.store}.
   * @param terminalId Key property. See {@link RetailTransactionSalesTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionSalesTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionSalesTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSalesTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionSalesTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionSalesTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionSalesTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminalId: terminalId!,
            transactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}
