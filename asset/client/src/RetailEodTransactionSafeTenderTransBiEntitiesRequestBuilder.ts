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
import { RetailEodTransactionSafeTenderTransBiEntities } from './RetailEodTransactionSafeTenderTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionSafeTenderTransBiEntities} entity.
 */
export class RetailEodTransactionSafeTenderTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionSafeTenderTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionSafeTenderTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionSafeTenderTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionSafeTenderTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionSafeTenderTransBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailEodTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionSafeTenderTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionSafeTenderTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionSafeTenderTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionSafeTenderTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionSafeTenderTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionSafeTenderTransBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailEodTransactionSafeTenderTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionSafeTenderTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionSafeTenderTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionSafeTenderTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionSafeTenderTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionSafeTenderTransBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<RetailEodTransactionSafeTenderTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailEodTransactionSafeTenderTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionSafeTenderTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
