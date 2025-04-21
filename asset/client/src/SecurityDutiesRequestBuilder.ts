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
import { SecurityDuties } from './SecurityDuties';

/**
 * Request builder class for operations supported on the {@link SecurityDuties} entity.
 */
export class SecurityDutiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityDuties<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityDuties` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityDuties` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityDuties<T>, T> {
    return new GetAllRequestBuilder<SecurityDuties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityDuties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityDuties`.
   */
  create(
    entity: SecurityDuties<T>
  ): CreateRequestBuilder<SecurityDuties<T>, T> {
    return new CreateRequestBuilder<SecurityDuties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityDuties` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityDuties.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityDuties.securityDutyIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityDuties` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    securityDutyIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityDuties<T>, T> {
    return new GetByKeyRequestBuilder<SecurityDuties<T>, T>(this.entityApi, {
      SecurityRoleIdentifier: securityRoleIdentifier,
      SecurityDutyIdentifier: securityDutyIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityDuties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityDuties`.
   */
  update(
    entity: SecurityDuties<T>
  ): UpdateRequestBuilder<SecurityDuties<T>, T> {
    return new UpdateRequestBuilder<SecurityDuties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityDuties`.
   * @param securityRoleIdentifier Key property. See {@link SecurityDuties.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityDuties.securityDutyIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityDuties`.
   */
  delete(
    securityRoleIdentifier: string,
    securityDutyIdentifier: string
  ): DeleteRequestBuilder<SecurityDuties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityDuties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityDuties` by taking the entity as a parameter.
   */
  delete(entity: SecurityDuties<T>): DeleteRequestBuilder<SecurityDuties<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any,
    securityDutyIdentifier?: string
  ): DeleteRequestBuilder<SecurityDuties<T>, T> {
    return new DeleteRequestBuilder<SecurityDuties<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityDuties
        ? securityRoleIdentifierOrEntity
        : {
            SecurityRoleIdentifier: securityRoleIdentifierOrEntity!,
            SecurityDutyIdentifier: securityDutyIdentifier!
          }
    );
  }
}
