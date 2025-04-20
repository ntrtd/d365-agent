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
import { RetailTransactionNoteTransBiEntities } from './RetailTransactionNoteTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionNoteTransBiEntities} entity.
 */
export class RetailTransactionNoteTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionNoteTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionNoteTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionNoteTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionNoteTransBiEntities`.
   */
  create(
    entity: RetailTransactionNoteTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionNoteTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionNoteTransBiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionNoteTransBiEntities.channel}.
   * @param store Key property. See {@link RetailTransactionNoteTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionNoteTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionNoteTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionNoteTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionNoteTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.Int64'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionNoteTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Channel: channel,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionNoteTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionNoteTransBiEntities`.
   */
  update(
    entity: RetailTransactionNoteTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionNoteTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionNoteTransBiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionNoteTransBiEntities.channel}.
   * @param store Key property. See {@link RetailTransactionNoteTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionNoteTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionNoteTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionNoteTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionNoteTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    channel: BigNumber,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionNoteTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionNoteTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionNoteTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    channel?: BigNumber,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionNoteTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionNoteTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Channel: channel!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}
