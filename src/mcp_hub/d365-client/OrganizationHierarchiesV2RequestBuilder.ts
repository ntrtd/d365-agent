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
import { OrganizationHierarchiesV2 } from './OrganizationHierarchiesV2';

/**
 * Request builder class for operations supported on the {@link OrganizationHierarchiesV2} entity.
 */
export class OrganizationHierarchiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationHierarchiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationHierarchiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationHierarchiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationHierarchiesV2<T>, T> {
    return new GetAllRequestBuilder<OrganizationHierarchiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OrganizationHierarchiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationHierarchiesV2`.
   */
  create(
    entity: OrganizationHierarchiesV2<T>
  ): CreateRequestBuilder<OrganizationHierarchiesV2<T>, T> {
    return new CreateRequestBuilder<OrganizationHierarchiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationHierarchiesV2` entity based on its keys.
   * @param hierarchyType Key property. See {@link OrganizationHierarchiesV2.hierarchyType}.
   * @param childOrganizationPartyNumber Key property. See {@link OrganizationHierarchiesV2.childOrganizationPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationHierarchiesV2.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchiesV2.validTo}.
   * @returns A request builder for creating requests to retrieve one `OrganizationHierarchiesV2` entity based on its keys.
   */
  getByKey(
    hierarchyType: DeserializedType<T, 'Edm.String'>,
    childOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OrganizationHierarchiesV2<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationHierarchiesV2<T>, T>(
      this.entityApi,
      {
        HierarchyType: hierarchyType,
        ChildOrganizationPartyNumber: childOrganizationPartyNumber,
        validFrom: validFrom,
        validTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationHierarchiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationHierarchiesV2`.
   */
  update(
    entity: OrganizationHierarchiesV2<T>
  ): UpdateRequestBuilder<OrganizationHierarchiesV2<T>, T> {
    return new UpdateRequestBuilder<OrganizationHierarchiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchiesV2`.
   * @param hierarchyType Key property. See {@link OrganizationHierarchiesV2.hierarchyType}.
   * @param childOrganizationPartyNumber Key property. See {@link OrganizationHierarchiesV2.childOrganizationPartyNumber}.
   * @param validFrom Key property. See {@link OrganizationHierarchiesV2.validFrom}.
   * @param validTo Key property. See {@link OrganizationHierarchiesV2.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchiesV2`.
   */
  delete(
    hierarchyType: string,
    childOrganizationPartyNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<OrganizationHierarchiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationHierarchiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationHierarchiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationHierarchiesV2<T>
  ): DeleteRequestBuilder<OrganizationHierarchiesV2<T>, T>;
  delete(
    hierarchyTypeOrEntity: any,
    childOrganizationPartyNumber?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<OrganizationHierarchiesV2<T>, T> {
    return new DeleteRequestBuilder<OrganizationHierarchiesV2<T>, T>(
      this.entityApi,
      hierarchyTypeOrEntity instanceof OrganizationHierarchiesV2
        ? hierarchyTypeOrEntity
        : {
            HierarchyType: hierarchyTypeOrEntity!,
            ChildOrganizationPartyNumber: childOrganizationPartyNumber!,
            validFrom: validFrom!,
            validTo: validTo!
          }
    );
  }
}
