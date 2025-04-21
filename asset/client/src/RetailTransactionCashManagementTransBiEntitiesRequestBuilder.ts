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
import { RetailTransactionCashManagementTransBiEntities } from './RetailTransactionCashManagementTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionCashManagementTransBiEntities} entity.
 */
export class RetailTransactionCashManagementTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionCashManagementTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionCashManagementTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionCashManagementTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionCashManagementTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionCashManagementTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionCashManagementTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionCashManagementTransBiEntities`.
   */
  create(
    entity: RetailTransactionCashManagementTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionCashManagementTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionCashManagementTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionCashManagementTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionCashManagementTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionCashManagementTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionCashManagementTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionCashManagementTransBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionCashManagementTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailTransactionCashManagementTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionCashManagementTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionCashManagementTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionCashManagementTransBiEntities`.
   */
  update(
    entity: RetailTransactionCashManagementTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionCashManagementTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionCashManagementTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionCashManagementTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionCashManagementTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionCashManagementTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionCashManagementTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionCashManagementTransBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionCashManagementTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailTransactionCashManagementTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionCashManagementTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionCashManagementTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionCashManagementTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionCashManagementTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string
  ): DeleteRequestBuilder<
    RetailTransactionCashManagementTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionCashManagementTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionCashManagementTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!
          }
    );
  }
}
