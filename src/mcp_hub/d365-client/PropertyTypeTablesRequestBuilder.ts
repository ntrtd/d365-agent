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
import { PropertyTypeTables } from './PropertyTypeTables';

/**
 * Request builder class for operations supported on the {@link PropertyTypeTables} entity.
 */
export class PropertyTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PropertyTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `PropertyTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `PropertyTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<PropertyTypeTables<T>, T> {
    return new GetAllRequestBuilder<PropertyTypeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PropertyTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PropertyTypeTables`.
   */
  create(
    entity: PropertyTypeTables<T>
  ): CreateRequestBuilder<PropertyTypeTables<T>, T> {
    return new CreateRequestBuilder<PropertyTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PropertyTypeTables` entity based on its keys.
   * @param type Key property. See {@link PropertyTypeTables.type}.
   * @returns A request builder for creating requests to retrieve one `PropertyTypeTables` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PropertyTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<PropertyTypeTables<T>, T>(
      this.entityApi,
      { Type: type }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PropertyTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PropertyTypeTables`.
   */
  update(
    entity: PropertyTypeTables<T>
  ): UpdateRequestBuilder<PropertyTypeTables<T>, T> {
    return new UpdateRequestBuilder<PropertyTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PropertyTypeTables`.
   * @param type Key property. See {@link PropertyTypeTables.type}.
   * @returns A request builder for creating requests that delete an entity of type `PropertyTypeTables`.
   */
  delete(type: string): DeleteRequestBuilder<PropertyTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PropertyTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PropertyTypeTables` by taking the entity as a parameter.
   */
  delete(
    entity: PropertyTypeTables<T>
  ): DeleteRequestBuilder<PropertyTypeTables<T>, T>;
  delete(typeOrEntity: any): DeleteRequestBuilder<PropertyTypeTables<T>, T> {
    return new DeleteRequestBuilder<PropertyTypeTables<T>, T>(
      this.entityApi,
      typeOrEntity instanceof PropertyTypeTables
        ? typeOrEntity
        : { Type: typeOrEntity! }
    );
  }
}
