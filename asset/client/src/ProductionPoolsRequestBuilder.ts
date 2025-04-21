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
import { ProductionPools } from './ProductionPools';

/**
 * Request builder class for operations supported on the {@link ProductionPools} entity.
 */
export class ProductionPoolsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionPools<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionPools` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionPools` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionPools<T>, T> {
    return new GetAllRequestBuilder<ProductionPools<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductionPools` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionPools`.
   */
  create(
    entity: ProductionPools<T>
  ): CreateRequestBuilder<ProductionPools<T>, T> {
    return new CreateRequestBuilder<ProductionPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionPools` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionPools.dataAreaId}.
   * @param poolId Key property. See {@link ProductionPools.poolId}.
   * @returns A request builder for creating requests to retrieve one `ProductionPools` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    poolId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductionPools<T>, T> {
    return new GetByKeyRequestBuilder<ProductionPools<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PoolId: poolId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionPools`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionPools`.
   */
  update(
    entity: ProductionPools<T>
  ): UpdateRequestBuilder<ProductionPools<T>, T> {
    return new UpdateRequestBuilder<ProductionPools<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionPools`.
   * @param dataAreaId Key property. See {@link ProductionPools.dataAreaId}.
   * @param poolId Key property. See {@link ProductionPools.poolId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionPools`.
   */
  delete(
    dataAreaId: string,
    poolId: string
  ): DeleteRequestBuilder<ProductionPools<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionPools`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionPools` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionPools<T>
  ): DeleteRequestBuilder<ProductionPools<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    poolId?: string
  ): DeleteRequestBuilder<ProductionPools<T>, T> {
    return new DeleteRequestBuilder<ProductionPools<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionPools
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PoolId: poolId!
          }
    );
  }
}
