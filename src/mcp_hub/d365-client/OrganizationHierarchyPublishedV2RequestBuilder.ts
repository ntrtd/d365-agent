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
import { OrganizationHierarchyPublishedV2 } from './OrganizationHierarchyPublishedV2';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchyPublishedV2} entity.
 */
export class OrganizationHierarchyPublishedV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchyPublishedV2` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchyPublishedV2` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchyPublishedV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchyPublishedV2`.
   */
  create(
    entity: OrganizationHierarchyPublishedV2<T>
  ): CreateRequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchyPublishedV2` entity based on its keys.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPublishedV2.hierarchyType}.
   * @param childOrganizationPartyNumber Key property. See {@link OrganizationHierarchyPublishedV2.childOrganizationPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationHierarchyPublishedV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchyPublishedV2` entity based on its keys.
   */
  getByKey(
    hierarchyType: DeserializedType<T, 'Edm.String'>,
    childOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>(
      this.entityApi,
      {
        HierarchyType: hierarchyType,
        ChildOrganizationPartyNumber: childOrganizationPartyNumber,
        validFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationHierarchyPublishedV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchyPublishedV2`.
   */
  update(
    entity: OrganizationHierarchyPublishedV2<T>
  ): UpdateRequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPublishedV2`.
   * @param hierarchyType Key property. See {@link OrganizationHierarchyPublishedV2.hierarchyType}.
   * @param childOrganizationPartyNumber Key property. See {@link OrganizationHierarchyPublishedV2.childOrganizationPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationHierarchyPublishedV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPublishedV2`.
   */
  delete(
    hierarchyType: string,
    childOrganizationPartyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchyPublishedV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchyPublishedV2` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchyPublishedV2<T>
  ): DeleteRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>;
  delete(
    hierarchyTypeOrEntity: any,
    childOrganizationPartyNumber?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<OrganizationHierarchyPublishedV2<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchyPublishedV2<T>, T>(
      this.entityApi,
      hierarchyTypeOrEntity instanceof OrganizationHierarchyPublishedV2
        ? hierarchyTypeOrEntity
        : {
            HierarchyType: hierarchyTypeOrEntity!,
            ChildOrganizationPartyNumber: childOrganizationPartyNumber!,
            validFrom: validFrom!
          }
    );
  }
}
