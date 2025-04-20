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
import { RetailEodTransactionInfocodeTransBiEntities } from './RetailEodTransactionInfocodeTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionInfocodeTransBiEntities} entity.
 */
export class RetailEodTransactionInfocodeTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionInfocodeTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionInfocodeTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionInfocodeTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionInfocodeTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionInfocodeTransBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailEodTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionInfocodeTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionInfocodeTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionInfocodeTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionInfocodeTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionInfocodeTransBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailEodTransactionInfocodeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionInfocodeTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionInfocodeTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionInfocodeTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionInfocodeTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionInfocodeTransBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<RetailEodTransactionInfocodeTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailEodTransactionInfocodeTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodTransactionInfocodeTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
