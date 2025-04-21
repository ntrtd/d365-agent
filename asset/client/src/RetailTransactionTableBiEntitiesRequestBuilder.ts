/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RetailTransactionTableBiEntities } from './RetailTransactionTableBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTableBiEntities} entity.
 */
export class RetailTransactionTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTableBiEntities`.
   */
  create(
    entity: RetailTransactionTableBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionTableBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailTransactionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTableBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionTableBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionTableBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionTableBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        store: store,
        terminal: terminal,
        transactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTableBiEntities`.
   */
  update(
    entity: RetailTransactionTableBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTableBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionTableBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionTableBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionTableBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionTableBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailTransactionTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTableBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string
  ): DeleteRequestBuilder<RetailTransactionTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!
          }
    );
  }
}
