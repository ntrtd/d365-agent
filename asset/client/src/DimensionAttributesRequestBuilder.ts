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
import { DimensionAttributes } from './DimensionAttributes';

/**
 * Request builder class for operations supported on the {@link DimensionAttributes} entity.
 */
export class DimensionAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionAttributes<T>, T> {
    return new GetAllRequestBuilder<DimensionAttributes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionAttributes`.
   */
  create(
    entity: DimensionAttributes<T>
  ): CreateRequestBuilder<DimensionAttributes<T>, T> {
    return new CreateRequestBuilder<DimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionAttributes` entity based on its keys.
   * @param dimensionName Key property. See {@link DimensionAttributes.dimensionName}.
   * @returns A request builder for creating requests to retrieve one `DimensionAttributes` entity based on its keys.
   */
  getByKey(
    dimensionName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimensionAttributes<T>, T> {
    return new GetByKeyRequestBuilder<DimensionAttributes<T>, T>(
      this.entityApi,
      { DimensionName: dimensionName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionAttributes`.
   */
  update(
    entity: DimensionAttributes<T>
  ): UpdateRequestBuilder<DimensionAttributes<T>, T> {
    return new UpdateRequestBuilder<DimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributes`.
   * @param dimensionName Key property. See {@link DimensionAttributes.dimensionName}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributes`.
   */
  delete(
    dimensionName: string
  ): DeleteRequestBuilder<DimensionAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionAttributes<T>
  ): DeleteRequestBuilder<DimensionAttributes<T>, T>;
  delete(
    dimensionNameOrEntity: any
  ): DeleteRequestBuilder<DimensionAttributes<T>, T> {
    return new DeleteRequestBuilder<DimensionAttributes<T>, T>(
      this.entityApi,
      dimensionNameOrEntity instanceof DimensionAttributes
        ? dimensionNameOrEntity
        : { DimensionName: dimensionNameOrEntity! }
    );
  }
}
