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
import { OrganizationHierarchies } from './OrganizationHierarchies';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchies} entity.
 */
export class OrganizationHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchies<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchies`.
   */
  create(
    entity: OrganizationHierarchies<T>
  ): CreateRequestBuilder<OrganizationHierarchies<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchies` entity based on its keys.
   * @param hierarchyType Key property. See {@link OrganizationHierarchies.hierarchyType}.
   * @param childOrganizationName Key property. See {@link OrganizationHierarchies.childOrganizationName}.
   * @param validFrom Key property. See {@link OrganizationHierarchies.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchies.validTo}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchies` entity based on its keys.
   */
  getByKey(
    hierarchyType: DeserializedType<T, 'Edm.String'>,
    childOrganizationName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OrganizationHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchies<T>, T>(
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
   * Returns a request builder for updating an entity of type `OrganizationHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchies`.
   */
  update(
    entity: OrganizationHierarchies<T>
  ): UpdateRequestBuilder<OrganizationHierarchies<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchies`.
   * @param hierarchyType Key property. See {@link OrganizationHierarchies.hierarchyType}.
   * @param childOrganizationName Key property. See {@link OrganizationHierarchies.childOrganizationName}.
   * @param validFrom Key property. See {@link OrganizationHierarchies.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchies.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchies`.
   */
  delete(
    hierarchyType: string,
    childOrganizationName: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<OrganizationHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchies<T>
  ): DeleteRequestBuilder<OrganizationHierarchies<T>, T>;
  delete(
    hierarchyTypeOrEntity: any,
    childOrganizationName?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<OrganizationHierarchies<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchies<T>, T>(
      this.entityApi,
      hierarchyTypeOrEntity instanceof OrganizationHierarchies
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
