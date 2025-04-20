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
import { DimAttributeOmDepartments } from './DimAttributeOmDepartments';

/**
 * Request builder class for operations supported on the {@link DimAttributeOmDepartments} entity.
 */
export class DimAttributeOmDepartmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeOmDepartments<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeOmDepartments` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeOmDepartments` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeOmDepartments<T>, T> {
    return new GetAllRequestBuilder<DimAttributeOmDepartments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeOmDepartments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeOmDepartments`.
   */
  create(
    entity: DimAttributeOmDepartments<T>
  ): CreateRequestBuilder<DimAttributeOmDepartments<T>, T> {
    return new CreateRequestBuilder<DimAttributeOmDepartments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeOmDepartments` entity based on its keys.
   * @param value Key property. See {@link DimAttributeOmDepartments.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeOmDepartments` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeOmDepartments<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeOmDepartments<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeOmDepartments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeOmDepartments`.
   */
  update(
    entity: DimAttributeOmDepartments<T>
  ): UpdateRequestBuilder<DimAttributeOmDepartments<T>, T> {
    return new UpdateRequestBuilder<DimAttributeOmDepartments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmDepartments`.
   * @param value Key property. See {@link DimAttributeOmDepartments.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmDepartments`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeOmDepartments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmDepartments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmDepartments` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeOmDepartments<T>
  ): DeleteRequestBuilder<DimAttributeOmDepartments<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeOmDepartments<T>, T> {
    return new DeleteRequestBuilder<DimAttributeOmDepartments<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeOmDepartments
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
