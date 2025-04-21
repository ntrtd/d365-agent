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
import { RetailTransactionSafeTenderTransBiEntities } from './RetailTransactionSafeTenderTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSafeTenderTransBiEntities} entity.
 */
export class RetailTransactionSafeTenderTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionSafeTenderTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSafeTenderTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionSafeTenderTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSafeTenderTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   */
  create(
    entity: RetailTransactionSafeTenderTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSafeTenderTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSafeTenderTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSafeTenderTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionSafeTenderTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionSafeTenderTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionSafeTenderTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSafeTenderTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   */
  update(
    entity: RetailTransactionSafeTenderTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionSafeTenderTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSafeTenderTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionSafeTenderTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionSafeTenderTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionSafeTenderTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSafeTenderTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSafeTenderTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSafeTenderTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionSafeTenderTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionSafeTenderTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionSafeTenderTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}
