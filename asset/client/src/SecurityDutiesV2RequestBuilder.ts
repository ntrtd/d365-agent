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
import { SecurityDutiesV2 } from './SecurityDutiesV2';

/**
 * Request builder class for operations supported on the {@link SecurityDutiesV2} entity.
 */
export class SecurityDutiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SecurityDutiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `SecurityDutiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `SecurityDutiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<SecurityDutiesV2<T>, T> {
    return new GetAllRequestBuilder<SecurityDutiesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SecurityDutiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecurityDutiesV2`.
   */
  create(
    entity: SecurityDutiesV2<T>
  ): CreateRequestBuilder<SecurityDutiesV2<T>, T> {
    return new CreateRequestBuilder<SecurityDutiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SecurityDutiesV2` entity based on its keys.
   * @param securityRoleIdentifier Key property. See {@link SecurityDutiesV2.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityDutiesV2.securityDutyIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SecurityDutiesV2` entity based on its keys.
   */
  getByKey(
    securityRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    securityDutyIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SecurityDutiesV2<T>, T> {
    return new GetByKeyRequestBuilder<SecurityDutiesV2<T>, T>(this.entityApi, {
      SecurityRoleIdentifier: securityRoleIdentifier,
      SecurityDutyIdentifier: securityDutyIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SecurityDutiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecurityDutiesV2`.
   */
  update(
    entity: SecurityDutiesV2<T>
  ): UpdateRequestBuilder<SecurityDutiesV2<T>, T> {
    return new UpdateRequestBuilder<SecurityDutiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SecurityDutiesV2`.
   * @param securityRoleIdentifier Key property. See {@link SecurityDutiesV2.securityRoleIdentifier}.
   * @param securityDutyIdentifier Key property. See {@link SecurityDutiesV2.securityDutyIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SecurityDutiesV2`.
   */
  delete(
    securityRoleIdentifier: string,
    securityDutyIdentifier: string
  ): DeleteRequestBuilder<SecurityDutiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SecurityDutiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecurityDutiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: SecurityDutiesV2<T>
  ): DeleteRequestBuilder<SecurityDutiesV2<T>, T>;
  delete(
    securityRoleIdentifierOrEntity: any,
    securityDutyIdentifier?: string
  ): DeleteRequestBuilder<SecurityDutiesV2<T>, T> {
    return new DeleteRequestBuilder<SecurityDutiesV2<T>, T>(
      this.entityApi,
      securityRoleIdentifierOrEntity instanceof SecurityDutiesV2
        ? securityRoleIdentifierOrEntity
        : {
            SecurityRoleIdentifier: securityRoleIdentifierOrEntity!,
            SecurityDutyIdentifier: securityDutyIdentifier!
          }
    );
  }
}
