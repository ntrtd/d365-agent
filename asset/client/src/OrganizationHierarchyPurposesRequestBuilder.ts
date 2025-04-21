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
import { OrganizationHierarchyPurposes } from './OrganizationHierarchyPurposes';
import { HierarchyPurpose } from './HierarchyPurpose';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchyPurposes} entity.
 */
export class OrganizationHierarchyPurposesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchyPurposes<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchyPurposes` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchyPurposes` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchyPurposes<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchyPurposes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchyPurposes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchyPurposes`.
   */
  create(
    entity: OrganizationHierarchyPurposes<T>
  ): CreateRequestBuilder<OrganizationHierarchyPurposes<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchyPurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchyPurposes` entity based on its keys.
   * @param hierarchyPurpose Key property. See {@link OrganizationHierarchyPurposes.hierarchyPurpose}.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPurposes.hierarchyType}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchyPurposes` entity based on its keys.
   */
  getByKey(
    hierarchyPurpose: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HierarchyPurpose'
    >,
    hierarchyType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OrganizationHierarchyPurposes<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchyPurposes<T>, T>(
      this.entityApi,
      {
        HierarchyPurpose: hierarchyPurpose,
        HierarchyType: hierarchyType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationHierarchyPurposes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchyPurposes`.
   */
  update(
    entity: OrganizationHierarchyPurposes<T>
  ): UpdateRequestBuilder<OrganizationHierarchyPurposes<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchyPurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPurposes`.
   * @param hierarchyPurpose Key property. See {@link OrganizationHierarchyPurposes.hierarchyPurpose}.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPurposes.hierarchyType}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPurposes`.
   */
  delete(
    hierarchyPurpose: HierarchyPurpose,
    hierarchyType: string
  ): DeleteRequestBuilder<OrganizationHierarchyPurposes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPurposes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPurposes` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchyPurposes<T>
  ): DeleteRequestBuilder<OrganizationHierarchyPurposes<T>, T>;
  delete(
    hierarchyPurposeOrEntity: any,
    hierarchyType?: string
  ): DeleteRequestBuilder<OrganizationHierarchyPurposes<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchyPurposes<T>, T>(
      this.entityApi,
      hierarchyPurposeOrEntity instanceof OrganizationHierarchyPurposes
        ? hierarchyPurposeOrEntity
        : {
            HierarchyPurpose: hierarchyPurposeOrEntity!,
            HierarchyType: hierarchyType!
          }
    );
  }
}
