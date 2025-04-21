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
import { SecurityPrivileges } from './SecurityPrivileges';

/**
 * Request builder class for operations supported on the {@link SecurityPrivileges} entity.
 */
export class SecurityPrivilegesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityPrivileges<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityPrivileges` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityPrivileges` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityPrivileges<T>, T> {
    return new GetAllRequestBuilder<SecurityPrivileges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityPrivileges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityPrivileges`.
   */
  create(
    entity: SecurityPrivileges<T>
  ): CreateRequestBuilder<SecurityPrivileges<T>, T> {
    return new CreateRequestBuilder<SecurityPrivileges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityPrivileges` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityPrivileges.securityRoleIdentifier}.
   * @param securityPrivilegeIdentifier Key property. See {@link SecurityPrivileges.securityPrivilegeIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityPrivileges` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    securityPrivilegeIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityPrivileges<T>, T> {
    return new GetByKeyRequestBuilder<SecurityPrivileges<T>, T>(
      this.entityApi,
      {
        SecurityRoleIdentifier: securityRoleIdentifier,
        SecurityPrivilegeIdentifier: securityPrivilegeIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityPrivileges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityPrivileges`.
   */
  update(
    entity: SecurityPrivileges<T>
  ): UpdateRequestBuilder<SecurityPrivileges<T>, T> {
    return new UpdateRequestBuilder<SecurityPrivileges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityPrivileges`.
   * @param securityRoleIdentifier Key property. See {@link SecurityPrivileges.securityRoleIdentifier}.
   * @param securityPrivilegeIdentifier Key property. See {@link SecurityPrivileges.securityPrivilegeIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityPrivileges`.
   */
  delete(
    securityRoleIdentifier: string,
    securityPrivilegeIdentifier: string
  ): DeleteRequestBuilder<SecurityPrivileges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityPrivileges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityPrivileges` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityPrivileges<T>
  ): DeleteRequestBuilder<SecurityPrivileges<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any,
    securityPrivilegeIdentifier?: string
  ): DeleteRequestBuilder<SecurityPrivileges<T>, T> {
    return new DeleteRequestBuilder<SecurityPrivileges<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityPrivileges
        ? securityRoleIdentifierOrEntity
        : {
            SecurityRoleIdentifier: securityRoleIdentifierOrEntity!,
            SecurityPrivilegeIdentifier: securityPrivilegeIdentifier!
          }
    );
  }
}
