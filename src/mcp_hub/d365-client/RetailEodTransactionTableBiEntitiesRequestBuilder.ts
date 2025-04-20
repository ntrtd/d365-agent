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
import { RetailEodTransactionTableBiEntities } from './RetailEodTransactionTableBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionTableBiEntities} entity.
 */
export class RetailEodTransactionTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionTableBiEntities`.
   */
  create(
    entity: RetailEodTransactionTableBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionTableBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionTableBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionTableBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionTableBiEntities`.
   */
  update(
    entity: RetailEodTransactionTableBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionTableBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionTableBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionTableBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionTableBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<RetailEodTransactionTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailEodTransactionTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodTransactionTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
