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
import { SecurityUserRoleAssociations } from './SecurityUserRoleAssociations';

/**
 * Request builder class for operations supported on the {@link SecurityUserRoleAssociations} entity.
 */
export class SecurityUserRoleAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityUserRoleAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityUserRoleAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityUserRoleAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityUserRoleAssociations<T>, T> {
    return new GetAllRequestBuilder<SecurityUserRoleAssociations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SecurityUserRoleAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityUserRoleAssociations`.
   */
  create(
    entity: SecurityUserRoleAssociations<T>
  ): CreateRequestBuilder<SecurityUserRoleAssociations<T>, T> {
    return new CreateRequestBuilder<SecurityUserRoleAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityUserRoleAssociations` entity based on its keys.
   * @param userId Key property. See {@link SecurityUserRoleAssociations.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoleAssociations.securityRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityUserRoleAssociations` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityUserRoleAssociations<T>, T> {
    return new GetByKeyRequestBuilder<SecurityUserRoleAssociations<T>, T>(
      this.entityApi,
      {
        UserId: userId,
        SecurityRoleIdentifier: securityRoleIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityUserRoleAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityUserRoleAssociations`.
   */
  update(
    entity: SecurityUserRoleAssociations<T>
  ): UpdateRequestBuilder<SecurityUserRoleAssociations<T>, T> {
    return new UpdateRequestBuilder<SecurityUserRoleAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoleAssociations`.
   * @param userId Key property. See {@link SecurityUserRoleAssociations.userId}.
   * @param securityRoleIdentifier Key property. See {@link SecurityUserRoleAssociations.securityRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoleAssociations`.
   */
  delete(
    userId: string,
    securityRoleIdentifier: string
  ): DeleteRequestBuilder<SecurityUserRoleAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityUserRoleAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityUserRoleAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityUserRoleAssociations<T>
  ): DeleteRequestBuilder<SecurityUserRoleAssociations<T>, T>;
  delete(
    userIdOrEntity: any,
    securityRoleIdentifier?: string
  ): DeleteRequestBuilder<SecurityUserRoleAssociations<T>, T> {
    return new DeleteRequestBuilder<SecurityUserRoleAssociations<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof SecurityUserRoleAssociations
        ? userIdOrEntity
        : {
            UserId: userIdOrEntity!,
            SecurityRoleIdentifier: securityRoleIdentifier!
          }
    );
  }
}
