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
import { SecurityUserRoleOrganizations } from './SecurityUserRoleOrganizations';
import { OmInternalOrganizationType } from './OmInternalOrganizationType';

/**
 * Request builder class for operations supported on the {@link SecurityUserRoleOrganizations} entity.
 */
export class SecurityUserRoleOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityUserRoleOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityUserRoleOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityUserRoleOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityUserRoleOrganizations<T>, T> {
    return new GetAllRequestBuilder<SecurityUserRoleOrganizations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SecurityUserRoleOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityUserRoleOrganizations`.
   */
  create(
    entity: SecurityUserRoleOrganizations<T>
  ): CreateRequestBuilder<SecurityUserRoleOrganizations<T>, T> {
    return new CreateRequestBuilder<SecurityUserRoleOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityUserRoleOrganizations` entity based on its keys.
   * @param userId Key property. See {@link SecurityUserRoleOrganizations.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoleOrganizations.securityRoleIdentifier}.
   * @param organizationType Key property. See {@link SecurityUserRoleOrganizations.organizationType}.
   * @param organizationId Key property. See {@link SecurityUserRoleOrganizations.organizationId}.
   * @returns A request builder for creating requests to retrieve one `SecurityUserRoleOrganizations` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    organizationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OMInternalOrganizationType'
    >,
    organizationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityUserRoleOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<SecurityUserRoleOrganizations<T>, T>(
      this.entityApi,
      {
        UserId: userId,
        SecurityRoleIdentifier: securityRoleIdentifier,
        OrganizationType: organizationType,
        OrganizationId: organizationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityUserRoleOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityUserRoleOrganizations`.
   */
  update(
    entity: SecurityUserRoleOrganizations<T>
  ): UpdateRequestBuilder<SecurityUserRoleOrganizations<T>, T> {
    return new UpdateRequestBuilder<SecurityUserRoleOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoleOrganizations`.
   * @param userId Key property. See {@link SecurityUserRoleOrganizations.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoleOrganizations.securityRoleIdentifier}.
   * @param organizationType Key property. See {@link SecurityUserRoleOrganizations.organizationType}.
   * @param organizationId Key property. See {@link SecurityUserRoleOrganizations.organizationId}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoleOrganizations`.
   */
  delete(
    userId: string,
    securityRoleIdentifier: string,
    organizationType: OmInternalOrganizationType,
    organizationId: string
  ): DeleteRequestBuilder<SecurityUserRoleOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoleOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoleOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityUserRoleOrganizations<T>
  ): DeleteRequestBuilder<SecurityUserRoleOrganizations<T>, T>;
  delete(
    userIdOrEntity: any,
    securityRoleIdentifier?: string,
    organizationType?: OmInternalOrganizationType,
    organizationId?: string
  ): DeleteRequestBuilder<SecurityUserRoleOrganizations<T>, T> {
    return new DeleteRequestBuilder<SecurityUserRoleOrganizations<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SecurityUserRoleOrganizations
        ? userIdOrEntity
        : {
            UserId: userIdOrEntity!,
            SecurityRoleIdentifier: securityRoleIdentifier!,
            OrganizationType: organizationType!,
            OrganizationId: organizationId!
          }
    );
  }
}
