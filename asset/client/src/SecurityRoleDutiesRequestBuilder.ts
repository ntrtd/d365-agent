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
import { SecurityRoleDuties } from './SecurityRoleDuties';

/**
 * Request builder class for operations supported on the {@link SecurityRoleDuties} entity.
 */
export class SecurityRoleDutiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityRoleDuties<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityRoleDuties` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityRoleDuties` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityRoleDuties<T>, T> {
    return new GetAllRequestBuilder<SecurityRoleDuties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityRoleDuties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityRoleDuties`.
   */
  create(
    entity: SecurityRoleDuties<T>
  ): CreateRequestBuilder<SecurityRoleDuties<T>, T> {
    return new CreateRequestBuilder<SecurityRoleDuties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityRoleDuties` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityRoleDuties.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityRoleDuties.securityDutyIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityRoleDuties` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    securityDutyIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityRoleDuties<T>, T> {
    return new GetByKeyRequestBuilder<SecurityRoleDuties<T>, T>(
      this.entityApi,
      {
        SecurityRoleIdentifier: securityRoleIdentifier,
        SecurityDutyIdentifier: securityDutyIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityRoleDuties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityRoleDuties`.
   */
  update(
    entity: SecurityRoleDuties<T>
  ): UpdateRequestBuilder<SecurityRoleDuties<T>, T> {
    return new UpdateRequestBuilder<SecurityRoleDuties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityRoleDuties`.
   * @param securityRoleIdentifier Key property. See {@link SecurityRoleDuties.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityRoleDuties.securityDutyIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityRoleDuties`.
   */
  delete(
    securityRoleIdentifier: string,
    securityDutyIdentifier: string
  ): DeleteRequestBuilder<SecurityRoleDuties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityRoleDuties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityRoleDuties` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityRoleDuties<T>
  ): DeleteRequestBuilder<SecurityRoleDuties<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any,
    securityDutyIdentifier?: string
  ): DeleteRequestBuilder<SecurityRoleDuties<T>, T> {
    return new DeleteRequestBuilder<SecurityRoleDuties<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityRoleDuties
        ? securityRoleIdentifierOrEntity
        : {
            SecurityRoleIdentifier: securityRoleIdentifierOrEntity!,
            SecurityDutyIdentifier: securityDutyIdentifier!
          }
    );
  }
}
