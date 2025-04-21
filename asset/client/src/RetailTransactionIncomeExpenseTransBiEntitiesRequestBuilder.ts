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
import { RetailTransactionIncomeExpenseTransBiEntities } from './RetailTransactionIncomeExpenseTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionIncomeExpenseTransBiEntities} entity.
 */
export class RetailTransactionIncomeExpenseTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionIncomeExpenseTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionIncomeExpenseTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionIncomeExpenseTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   */
  create(
    entity: RetailTransactionIncomeExpenseTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionIncomeExpenseTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionIncomeExpenseTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionIncomeExpenseTransBiEntities<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   */
  update(
    entity: RetailTransactionIncomeExpenseTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionIncomeExpenseTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionIncomeExpenseTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionIncomeExpenseTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionIncomeExpenseTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionIncomeExpenseTransBiEntities
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
