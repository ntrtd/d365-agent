/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { OrganizationHierarchyPublished } from './OrganizationHierarchyPublished';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchyPublished} entity.
 */
export class OrganizationHierarchyPublishedRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchyPublished<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchyPublished` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchyPublished` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchyPublished<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchyPublished<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchyPublished` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchyPublished`.
   */
  create(
    entity: OrganizationHierarchyPublished<T>
  ): CreateRequestBuilder<OrganizationHierarchyPublished<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchyPublished<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchyPublished` entity based on its keys.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPublished.hierarchyType}.
   * @param childOrganizationName Key property. See {@link OrganizationHierarchyPublished.childOrganizationName}.
   * @param validFrom Key property. See {@link OrganizationHierarchyPublished.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchyPublished.validTo}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchyPublished` entity based on its keys.
   */
  getByKey(
    hierarchyType: DeserializedType<T, 'Edm.String'>,
    childOrganizationName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OrganizationHierarchyPublished<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchyPublished<T>, T>(
      this.entityApi,
      {
        HierarchyType: hierarchyType,
        ChildOrganizationName: childOrganizationName,
        validFrom: validFrom,
        validTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationHierarchyPublished`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchyPublished`.
   */
  update(
    entity: OrganizationHierarchyPublished<T>
  ): UpdateRequestBuilder<OrganizationHierarchyPublished<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchyPublished<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPublished`.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPublished.hierarchyType}.
   * @param childOrganizationName Key property. See {@link OrganizationHierarchyPublished.childOrganizationName}.
   * @param validFrom Key property. See {@link OrganizationHierarchyPublished.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchyPublished.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPublished`.
   */
  delete(
    hierarchyType: string,
    childOrganizationName: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<OrganizationHierarchyPublished<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPublished`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPublished` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchyPublished<T>
  ): DeleteRequestBuilder<OrganizationHierarchyPublished<T>, T>;
  delete(
    hierarchyTypeOrEntity: any,
    childOrganizationName?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<OrganizationHierarchyPublished<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchyPublished<T>, T>(
      this.entityApi,
      hierarchyTypeOrEntity instanceof OrganizationHierarchyPublished
        ? hierarchyTypeOrEntity
        : {
            HierarchyType: hierarchyTypeOrEntity!,
            ChildOrganizationName: childOrganizationName!,
            validFrom: validFrom!,
            validTo: validTo!
          }
    );
  }
}
