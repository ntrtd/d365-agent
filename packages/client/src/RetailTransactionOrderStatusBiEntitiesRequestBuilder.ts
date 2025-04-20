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
import { RetailTransactionOrderStatusBiEntities } from './RetailTransactionOrderStatusBiEntities';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionOrderStatusBiEntities} entity.
 */
export class RetailTransactionOrderStatusBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionOrderStatusBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionOrderStatusBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionOrderStatusBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionOrderStatusBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionOrderStatusBiEntities`.
   */
  create(
    entity: RetailTransactionOrderStatusBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionOrderStatusBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionOrderStatusBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionOrderStatusBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionOrderStatusBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionOrderStatusBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionOrderStatusBiEntities.transactionId}.
   * @param status Key property. See {@link RetailTransactionOrderStatusBiEntities.status}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionOrderStatusBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailTransactionOrderStatusType'
    >
  ): GetByKeyRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionOrderStatusBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      Status: status
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionOrderStatusBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionOrderStatusBiEntities`.
   */
  update(
    entity: RetailTransactionOrderStatusBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionOrderStatusBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionOrderStatusBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionOrderStatusBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionOrderStatusBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionOrderStatusBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionOrderStatusBiEntities.transactionId}.
   * @param status Key property. See {@link RetailTransactionOrderStatusBiEntities.status}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionOrderStatusBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    status: RetailTransactionOrderStatusType
  ): DeleteRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionOrderStatusBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionOrderStatusBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionOrderStatusBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    status?: RetailTransactionOrderStatusType
  ): DeleteRequestBuilder<RetailTransactionOrderStatusBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionOrderStatusBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionOrderStatusBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            Status: status!
          }
    );
  }
}
