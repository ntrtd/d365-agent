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
import { PartyLocationPrivateRoles } from './PartyLocationPrivateRoles';

/**
 * Request builder class for operations supported on the {@link PartyLocationPrivateRoles} entity.
 */
export class PartyLocationPrivateRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyLocationPrivateRoles<T>, T> {
  /**
   * Returns a request builder for querying all `PartyLocationPrivateRoles` entities.
   * @returns A request builder for creating requests to retrieve all `PartyLocationPrivateRoles` entities.
   */
  getAll(): GetAllRequestBuilder<PartyLocationPrivateRoles<T>, T> {
    return new GetAllRequestBuilder<PartyLocationPrivateRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PartyLocationPrivateRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyLocationPrivateRoles`.
   */
  create(
    entity: PartyLocationPrivateRoles<T>
  ): CreateRequestBuilder<PartyLocationPrivateRoles<T>, T> {
    return new CreateRequestBuilder<PartyLocationPrivateRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyLocationPrivateRoles` entity based on its keys.
   * @param securityRoleName Key property. See {@link PartyLocationPrivateRoles.securityRoleName}.
   * @returns A request builder for creating requests to retrieve one `PartyLocationPrivateRoles` entity based on its keys.
   */
  getByKey(
    securityRoleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyLocationPrivateRoles<T>, T> {
    return new GetByKeyRequestBuilder<PartyLocationPrivateRoles<T>, T>(
      this.entityApi,
      { SecurityRoleName: securityRoleName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyLocationPrivateRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyLocationPrivateRoles`.
   */
  update(
    entity: PartyLocationPrivateRoles<T>
  ): UpdateRequestBuilder<PartyLocationPrivateRoles<T>, T> {
    return new UpdateRequestBuilder<PartyLocationPrivateRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPrivateRoles`.
   * @param securityRoleName Key property. See {@link PartyLocationPrivateRoles.securityRoleName}.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPrivateRoles`.
   */
  delete(
    securityRoleName: string
  ): DeleteRequestBuilder<PartyLocationPrivateRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyLocationPrivateRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationPrivateRoles` by taking the entity as a parameter.
   */
  delete(
    entity: PartyLocationPrivateRoles<T>
  ): DeleteRequestBuilder<PartyLocationPrivateRoles<T>, T>;
  delete(
    securityRoleNameOrEntity: any
  ): DeleteRequestBuilder<PartyLocationPrivateRoles<T>, T> {
    return new DeleteRequestBuilder<PartyLocationPrivateRoles<T>, T>(
      this.entityApi,
      securityRoleNameOrEntity instanceof PartyLocationPrivateRoles
        ? securityRoleNameOrEntity
        : { SecurityRoleName: securityRoleNameOrEntity! }
    );
  }
}
