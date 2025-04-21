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
import { SecurityPermissions } from './SecurityPermissions';

/**
 * Request builder class for operations supported on the {@link SecurityPermissions} entity.
 */
export class SecurityPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityPermissions<T>, T> {
    return new GetAllRequestBuilder<SecurityPermissions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityPermissions`.
   */
  create(
    entity: SecurityPermissions<T>
  ): CreateRequestBuilder<SecurityPermissions<T>, T> {
    return new CreateRequestBuilder<SecurityPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityPermissions` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityPermissions.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityPermissions` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityPermissions<T>, T> {
    return new GetByKeyRequestBuilder<SecurityPermissions<T>, T>(
      this.entityApi,
      { SecurityRoleIdentifier: securityRoleIdentifier }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityPermissions`.
   */
  update(
    entity: SecurityPermissions<T>
  ): UpdateRequestBuilder<SecurityPermissions<T>, T> {
    return new UpdateRequestBuilder<SecurityPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityPermissions`.
   * @param securityRoleIdentifier Key property. See {@link SecurityPermissions.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityPermissions`.
   */
  delete(
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<SecurityPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityPermissions<T>
  ): DeleteRequestBuilder<SecurityPermissions<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any
  ): DeleteRequestBuilder<SecurityPermissions<T>, T> {
    return new DeleteRequestBuilder<SecurityPermissions<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityPermissions
        ? securityRoleIdentifierOrEntity
        : { SecurityRoleIdentifier: securityRoleIdentifierOrEntity! }
    );
  }
}
