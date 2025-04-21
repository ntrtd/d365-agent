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
import { RetailEodTransactionErrorBiEntities } from './RetailEodTransactionErrorBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionErrorBiEntities} entity.
 */
export class RetailEodTransactionErrorBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionErrorBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionErrorBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionErrorBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionErrorBiEntities`.
   */
  create(
    entity: RetailEodTransactionErrorBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionErrorBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionErrorBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodTransactionErrorBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionErrorBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionErrorBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionErrorBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionErrorBiEntities`.
   */
  update(
    entity: RetailEodTransactionErrorBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionErrorBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionErrorBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailEodTransactionErrorBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionErrorBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionErrorBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionErrorBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionErrorBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailEodTransactionErrorBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodTransactionErrorBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
