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
import { DimAttributeOmCostCenters } from './DimAttributeOmCostCenters';

/**
 * Request builder class for operations supported on the {@link DimAttributeOmCostCenters} entity.
 */
export class DimAttributeOmCostCentersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeOmCostCenters<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeOmCostCenters` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeOmCostCenters` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeOmCostCenters<T>, T> {
    return new GetAllRequestBuilder<DimAttributeOmCostCenters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeOmCostCenters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeOmCostCenters`.
   */
  create(
    entity: DimAttributeOmCostCenters<T>
  ): CreateRequestBuilder<DimAttributeOmCostCenters<T>, T> {
    return new CreateRequestBuilder<DimAttributeOmCostCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeOmCostCenters` entity based on its keys.
   * @param value Key property. See {@link DimAttributeOmCostCenters.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeOmCostCenters` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeOmCostCenters<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeOmCostCenters<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeOmCostCenters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeOmCostCenters`.
   */
  update(
    entity: DimAttributeOmCostCenters<T>
  ): UpdateRequestBuilder<DimAttributeOmCostCenters<T>, T> {
    return new UpdateRequestBuilder<DimAttributeOmCostCenters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmCostCenters`.
   * @param value Key property. See {@link DimAttributeOmCostCenters.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmCostCenters`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeOmCostCenters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmCostCenters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmCostCenters` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeOmCostCenters<T>
  ): DeleteRequestBuilder<DimAttributeOmCostCenters<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeOmCostCenters<T>, T> {
    return new DeleteRequestBuilder<DimAttributeOmCostCenters<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeOmCostCenters
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
