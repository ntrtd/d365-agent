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
import { OrganizationHierarchyTypes } from './OrganizationHierarchyTypes';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchyTypes} entity.
 */
export class OrganizationHierarchyTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchyTypes<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchyTypes` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchyTypes` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchyTypes<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchyTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchyTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchyTypes`.
   */
  create(
    entity: OrganizationHierarchyTypes<T>
  ): CreateRequestBuilder<OrganizationHierarchyTypes<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchyTypes` entity based on its keys.
   * @param name Key property. See {@link OrganizationHierarchyTypes.name}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchyTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OrganizationHierarchyTypes<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchyTypes<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationHierarchyTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchyTypes`.
   */
  update(
    entity: OrganizationHierarchyTypes<T>
  ): UpdateRequestBuilder<OrganizationHierarchyTypes<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchyTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyTypes`.
   * @param name Key property. See {@link OrganizationHierarchyTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyTypes`.
   */
  delete(name: string): DeleteRequestBuilder<OrganizationHierarchyTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyTypes` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchyTypes<T>
  ): DeleteRequestBuilder<OrganizationHierarchyTypes<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<OrganizationHierarchyTypes<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchyTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof OrganizationHierarchyTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
