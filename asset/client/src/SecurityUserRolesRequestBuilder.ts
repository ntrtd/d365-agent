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
import { SecurityUserRoles } from './SecurityUserRoles';

/**
 * Request builder class for operations supported on the {@link SecurityUserRoles} entity.
 */
export class SecurityUserRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityUserRoles<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityUserRoles` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityUserRoles` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityUserRoles<T>, T> {
    return new GetAllRequestBuilder<SecurityUserRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityUserRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityUserRoles`.
   */
  create(
    entity: SecurityUserRoles<T>
  ): CreateRequestBuilder<SecurityUserRoles<T>, T> {
    return new CreateRequestBuilder<SecurityUserRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityUserRoles` entity based on its keys.
   * @param userId Key property. See {@link SecurityUserRoles.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityUserRoles` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityUserRoles<T>, T> {
    return new GetByKeyRequestBuilder<SecurityUserRoles<T>, T>(this.entityApi, {
      UserId: userId,
      SecurityRoleIdentifier: securityRoleIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityUserRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityUserRoles`.
   */
  update(
    entity: SecurityUserRoles<T>
  ): UpdateRequestBuilder<SecurityUserRoles<T>, T> {
    return new UpdateRequestBuilder<SecurityUserRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoles`.
   * @param userId Key property. See {@link SecurityUserRoles.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoles.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoles`.
   */
  delete(
    userId: string,
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<SecurityUserRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoles` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityUserRoles<T>
  ): DeleteRequestBuilder<SecurityUserRoles<T>, T>;
  delete(
    userIdOrEntity: any,
    securityRoleIdentifier?: string
  ): DeleteRequestBuilder<SecurityUserRoles<T>, T> {
    return new DeleteRequestBuilder<SecurityUserRoles<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SecurityUserRoles
        ? userIdOrEntity
        : {
            UserId: userIdOrEntity!,
            SecurityRoleIdentifier: securityRoleIdentifier!
          }
    );
  }
}
