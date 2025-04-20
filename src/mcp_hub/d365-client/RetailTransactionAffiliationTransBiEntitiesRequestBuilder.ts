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
import { RetailTransactionAffiliationTransBiEntities } from './RetailTransactionAffiliationTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAffiliationTransBiEntities} entity.
 */
export class RetailTransactionAffiliationTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAffiliationTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAffiliationTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAffiliationTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAffiliationTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAffiliationTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAffiliationTransBiEntities`.
   */
  create(
    entity: RetailTransactionAffiliationTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAffiliationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAffiliationTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAffiliationTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionAffiliationTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionAffiliationTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionAffiliationTransBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAffiliationTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAffiliationTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAffiliationTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAffiliationTransBiEntities`.
   */
  update(
    entity: RetailTransactionAffiliationTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAffiliationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAffiliationTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionAffiliationTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionAffiliationTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionAffiliationTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionAffiliationTransBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAffiliationTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAffiliationTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAffiliationTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAffiliationTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string
  ): DeleteRequestBuilder<RetailTransactionAffiliationTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAffiliationTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAffiliationTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!
          }
    );
  }
}
