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
import { SecurityRoles } from './SecurityRoles';

/**
 * Request builder class for operations supported on the {@link SecurityRoles} entity.
 */
export class SecurityRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityRoles<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityRoles` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityRoles` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityRoles<T>, T> {
    return new GetAllRequestBuilder<SecurityRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityRoles`.
   */
  create(entity: SecurityRoles<T>): CreateRequestBuilder<SecurityRoles<T>, T> {
    return new CreateRequestBuilder<SecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityRoles` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityRoles` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityRoles<T>, T> {
    return new GetByKeyRequestBuilder<SecurityRoles<T>, T>(this.entityApi, {
      SecurityRoleIdentifier: securityRoleIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityRoles`.
   */
  update(entity: SecurityRoles<T>): UpdateRequestBuilder<SecurityRoles<T>, T> {
    return new UpdateRequestBuilder<SecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityRoles`.
   * @param securityRoleIdentifier Key property. See {@link SecurityRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityRoles`.
   */
  delete(
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<SecurityRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityRoles` by taking the entity as a parameter.
   */
  delete(entity: SecurityRoles<T>): DeleteRequestBuilder<SecurityRoles<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any
  ): DeleteRequestBuilder<SecurityRoles<T>, T> {
    return new DeleteRequestBuilder<SecurityRoles<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityRoles
        ? securityRoleIdentifierOrEntity
        : { SecurityRoleIdentifier: securityRoleIdentifierOrEntity! }
    );
  }
}
