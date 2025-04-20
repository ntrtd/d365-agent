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
import { RetailTransactionFiscalCustomerBiEntities } from './RetailTransactionFiscalCustomerBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionFiscalCustomerBiEntities} entity.
 */
export class RetailTransactionFiscalCustomerBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionFiscalCustomerBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionFiscalCustomerBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionFiscalCustomerBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionFiscalCustomerBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionFiscalCustomerBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   */
  create(
    entity: RetailTransactionFiscalCustomerBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionFiscalCustomerBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionFiscalCustomerBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalCustomerBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalCustomerBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalCustomerBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalCustomerBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionFiscalCustomerBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionFiscalCustomerBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   */
  update(
    entity: RetailTransactionFiscalCustomerBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionFiscalCustomerBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalCustomerBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalCustomerBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalCustomerBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalCustomerBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalCustomerBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalCustomerBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionFiscalCustomerBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string
  ): DeleteRequestBuilder<RetailTransactionFiscalCustomerBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionFiscalCustomerBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionFiscalCustomerBiEntities
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
