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
import { SecuritySubRoles } from './SecuritySubRoles';

/**
 * Request builder class for operations supported on the {@link SecuritySubRoles} entity.
 */
export class SecuritySubRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecuritySubRoles<T>, T> {
  /**
   * Returns a request builder for querying all `SecuritySubRoles` entities.
   * @returns A request builder for creating requests to retrieve all `SecuritySubRoles` entities.
   */
  getAll(): GetAllRequestBuilder<SecuritySubRoles<T>, T> {
    return new GetAllRequestBuilder<SecuritySubRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecuritySubRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecuritySubRoles`.
   */
  create(
    entity: SecuritySubRoles<T>
  ): CreateRequestBuilder<SecuritySubRoles<T>, T> {
    return new CreateRequestBuilder<SecuritySubRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecuritySubRoles` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecuritySubRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecuritySubRoles` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecuritySubRoles<T>, T> {
    return new GetByKeyRequestBuilder<SecuritySubRoles<T>, T>(this.entityApi, {
      SecurityRoleIdentifier: securityRoleIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecuritySubRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecuritySubRoles`.
   */
  update(
    entity: SecuritySubRoles<T>
  ): UpdateRequestBuilder<SecuritySubRoles<T>, T> {
    return new UpdateRequestBuilder<SecuritySubRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecuritySubRoles`.
   * @param securityRoleIdentifier Key property. See {@link SecuritySubRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecuritySubRoles`.
   */
  delete(
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<SecuritySubRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecuritySubRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecuritySubRoles` by taking the entity as a parameter.
   */
  delete(
    entity: SecuritySubRoles<T>
  ): DeleteRequestBuilder<SecuritySubRoles<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any
  ): DeleteRequestBuilder<SecuritySubRoles<T>, T> {
    return new DeleteRequestBuilder<SecuritySubRoles<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecuritySubRoles
        ? securityRoleIdentifierOrEntity
        : { SecurityRoleIdentifier: securityRoleIdentifierOrEntity! }
    );
  }
}
