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
import { RetailTransactionInfocodeTransBiEntities } from './RetailTransactionInfocodeTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionInfocodeTransBiEntities} entity.
 */
export class RetailTransactionInfocodeTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionInfocodeTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionInfocodeTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionInfocodeTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionInfocodeTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionInfocodeTransBiEntities`.
   */
  create(
    entity: RetailTransactionInfocodeTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionInfocodeTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionInfocodeTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionInfocodeTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionInfocodeTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionInfocodeTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionInfocodeTransBiEntities.lineNum}.
   * @param channel Key property. See {@link RetailTransactionInfocodeTransBiEntities.channel}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionInfocodeTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    channel: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      lineNum: lineNum,
      Channel: channel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionInfocodeTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionInfocodeTransBiEntities`.
   */
  update(
    entity: RetailTransactionInfocodeTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionInfocodeTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionInfocodeTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionInfocodeTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionInfocodeTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionInfocodeTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionInfocodeTransBiEntities.lineNum}.
   * @param channel Key property. See {@link RetailTransactionInfocodeTransBiEntities.channel}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionInfocodeTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber,
    channel: BigNumber
  ): DeleteRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionInfocodeTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionInfocodeTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionInfocodeTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber,
    channel?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionInfocodeTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionInfocodeTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionInfocodeTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            lineNum: lineNum!,
            Channel: channel!
          }
    );
  }
}
