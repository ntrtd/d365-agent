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
import { RetailTransactionTable_RubiEntities } from './RetailTransactionTable_RubiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTable_RubiEntities} entity.
 */
export class RetailTransactionTable_RubiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTable_RubiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTable_RubiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTable_RubiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTable_RubiEntities`.
   */
  create(
    entity: RetailTransactionTable_RubiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
    return new CreateRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTable_RubiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTable_RubiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionTable_RubiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionTable_RubiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionTable_RubiEntities.transactionId}.
   * @param channel Key property. See {@link RetailTransactionTable_RubiEntities.channel}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTable_RubiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionTable_RubiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      Channel: channel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTable_RubiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTable_RubiEntities`.
   */
  update(
    entity: RetailTransactionTable_RubiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTable_RubiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTable_RubiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionTable_RubiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionTable_RubiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionTable_RubiEntities.transactionId}.
   * @param channel Key property. See {@link RetailTransactionTable_RubiEntities.channel}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTable_RubiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    channel: BigNumber
  ): DeleteRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTable_RubiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTable_RubiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTable_RubiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    channel?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionTable_RubiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionTable_RubiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTable_RubiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            Channel: channel!
          }
    );
  }
}
