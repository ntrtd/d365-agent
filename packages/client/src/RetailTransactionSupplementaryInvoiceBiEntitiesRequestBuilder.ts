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
import { RetailTransactionSupplementaryInvoiceBiEntities } from './RetailTransactionSupplementaryInvoiceBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSupplementaryInvoiceBiEntities} entity.
 */
export class RetailTransactionSupplementaryInvoiceBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionSupplementaryInvoiceBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionSupplementaryInvoiceBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSupplementaryInvoiceBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionSupplementaryInvoiceBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSupplementaryInvoiceBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   */
  create(
    entity: RetailTransactionSupplementaryInvoiceBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionSupplementaryInvoiceBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSupplementaryInvoiceBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSupplementaryInvoiceBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionSupplementaryInvoiceBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   */
  update(
    entity: RetailTransactionSupplementaryInvoiceBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionSupplementaryInvoiceBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionSupplementaryInvoiceBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string
  ): DeleteRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSupplementaryInvoiceBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSupplementaryInvoiceBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSupplementaryInvoiceBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string
  ): DeleteRequestBuilder<
    RetailTransactionSupplementaryInvoiceBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionSupplementaryInvoiceBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionSupplementaryInvoiceBiEntities
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
