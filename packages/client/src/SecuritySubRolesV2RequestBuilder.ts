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
import { SecuritySubRolesV2 } from './SecuritySubRolesV2';

/**
 * Request builder class for operations supported on the {@link SecuritySubRolesV2} entity.
 */
export class SecuritySubRolesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecuritySubRolesV2<T>, T> {
  /**
   * Returns a request builder for querying all `SecuritySubRolesV2` entities.
   * @returns A request builder for creating requests to retrieve all `SecuritySubRolesV2` entities.
   */
  getAll(): GetAllRequestBuilder<SecuritySubRolesV2<T>, T> {
    return new GetAllRequestBuilder<SecuritySubRolesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecuritySubRolesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecuritySubRolesV2`.
   */
  create(
    entity: SecuritySubRolesV2<T>
  ): CreateRequestBuilder<SecuritySubRolesV2<T>, T> {
    return new CreateRequestBuilder<SecuritySubRolesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecuritySubRolesV2` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecuritySubRolesV2.securityRoleIdentifier}.
   * @param securitySubRoleIdentifier Key property. See {@link SecuritySubRolesV2.securitySubRoleIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecuritySubRolesV2` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    securitySubRoleIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecuritySubRolesV2<T>, T> {
    return new GetByKeyRequestBuilder<SecuritySubRolesV2<T>, T>(
      this.entityApi,
      {
        SecurityRoleIdentifier: securityRoleIdentifier,
        SecuritySubRoleIdentifier: securitySubRoleIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecuritySubRolesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecuritySubRolesV2`.
   */
  update(
    entity: SecuritySubRolesV2<T>
  ): UpdateRequestBuilder<SecuritySubRolesV2<T>, T> {
    return new UpdateRequestBuilder<SecuritySubRolesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecuritySubRolesV2`.
   * @param securityRoleIdentifier Key property. See {@link SecuritySubRolesV2.securityRoleIdentifier}.
   * @param securitySubRoleIdentifier Key property. See {@link SecuritySubRolesV2.securitySubRoleIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecuritySubRolesV2`.
   */
  delete(
    securityRoleIdentifier: string,
    securitySubRoleIdentifier: string
  ): DeleteRequestBuilder<SecuritySubRolesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecuritySubRolesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecuritySubRolesV2` by taking the entity as a parameter.
   */
  delete(
    entity: SecuritySubRolesV2<T>
  ): DeleteRequestBuilder<SecuritySubRolesV2<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any,
    securitySubRoleIdentifier?: string
  ): DeleteRequestBuilder<SecuritySubRolesV2<T>, T> {
    return new DeleteRequestBuilder<SecuritySubRolesV2<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecuritySubRolesV2
        ? securityRoleIdentifierOrEntity
        : {
            SecurityRoleIdentifier: securityRoleIdentifierOrEntity!,
            SecuritySubRoleIdentifier: securitySubRoleIdentifier!
          }
    );
  }
}
