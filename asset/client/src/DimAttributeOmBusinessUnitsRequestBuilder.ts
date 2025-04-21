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
import { DimAttributeOmBusinessUnits } from './DimAttributeOmBusinessUnits';

/**
 * Request builder class for operations supported on the {@link DimAttributeOmBusinessUnits} entity.
 */
export class DimAttributeOmBusinessUnitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeOmBusinessUnits` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeOmBusinessUnits` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
    return new GetAllRequestBuilder<DimAttributeOmBusinessUnits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeOmBusinessUnits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeOmBusinessUnits`.
   */
  create(
    entity: DimAttributeOmBusinessUnits<T>
  ): CreateRequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
    return new CreateRequestBuilder<DimAttributeOmBusinessUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeOmBusinessUnits` entity based on its keys.
   * @param value Key property. See {@link DimAttributeOmBusinessUnits.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeOmBusinessUnits` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeOmBusinessUnits<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeOmBusinessUnits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeOmBusinessUnits`.
   */
  update(
    entity: DimAttributeOmBusinessUnits<T>
  ): UpdateRequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
    return new UpdateRequestBuilder<DimAttributeOmBusinessUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmBusinessUnits`.
   * @param value Key property. See {@link DimAttributeOmBusinessUnits.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmBusinessUnits`.
   */
  delete(
    value: string
  ): DeleteRequestBuilder<DimAttributeOmBusinessUnits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmBusinessUnits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmBusinessUnits` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeOmBusinessUnits<T>
  ): DeleteRequestBuilder<DimAttributeOmBusinessUnits<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeOmBusinessUnits<T>, T> {
    return new DeleteRequestBuilder<DimAttributeOmBusinessUnits<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeOmBusinessUnits
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
