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
import { SalesOrderPools } from './SalesOrderPools';

/**
 * Request builder class for operations supported on the {@link SalesOrderPools} entity.
 */
export class SalesOrderPoolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderPools<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderPools` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderPools` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderPools<T>, T> {
    return new GetAllRequestBuilder<SalesOrderPools<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderPools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderPools`.
   */
  create(
    entity: SalesOrderPools<T>
  ): CreateRequestBuilder<SalesOrderPools<T>, T> {
    return new CreateRequestBuilder<SalesOrderPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderPools` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderPools.dataAreaId}.
   * @param poolId Key property. See {@link SalesOrderPools.poolId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderPools` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    poolId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderPools<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderPools<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PoolId: poolId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderPools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderPools`.
   */
  update(
    entity: SalesOrderPools<T>
  ): UpdateRequestBuilder<SalesOrderPools<T>, T> {
    return new UpdateRequestBuilder<SalesOrderPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderPools`.
   * @param dataAreaId Key property. See {@link SalesOrderPools.dataAreaId}.
   * @param poolId Key property. See {@link SalesOrderPools.poolId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderPools`.
   */
  delete(
    dataAreaId: string,
    poolId: string
  ): DeleteRequestBuilder<SalesOrderPools<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderPools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderPools` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderPools<T>
  ): DeleteRequestBuilder<SalesOrderPools<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    poolId?: string
  ): DeleteRequestBuilder<SalesOrderPools<T>, T> {
    return new DeleteRequestBuilder<SalesOrderPools<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderPools
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PoolId: poolId!
          }
    );
  }
}
