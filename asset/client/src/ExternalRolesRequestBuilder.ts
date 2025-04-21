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
import { ExternalRoles } from './ExternalRoles';
import { UserExternalPartyEntityType } from './UserExternalPartyEntityType';

/**
 * Request builder class for operations supported on the {@link ExternalRoles} entity.
 */
export class ExternalRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalRoles<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalRoles` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalRoles` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalRoles<T>, T> {
    return new GetAllRequestBuilder<ExternalRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalRoles`.
   */
  create(entity: ExternalRoles<T>): CreateRequestBuilder<ExternalRoles<T>, T> {
    return new CreateRequestBuilder<ExternalRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalRoles` entity based on its keys.
   * @param role Key property. See {@link ExternalRoles.role}.
   * @param type Key property. See {@link ExternalRoles.type}.
   * @returns A request builder for creating requests to retrieve one `ExternalRoles` entity based on its keys.
   */
  getByKey(
    role: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.UserExternalPartyEntityType'
    >
  ): GetByKeyRequestBuilder<ExternalRoles<T>, T> {
    return new GetByKeyRequestBuilder<ExternalRoles<T>, T>(this.entityApi, {
      Role: role,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalRoles`.
   */
  update(entity: ExternalRoles<T>): UpdateRequestBuilder<ExternalRoles<T>, T> {
    return new UpdateRequestBuilder<ExternalRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalRoles`.
   * @param role Key property. See {@link ExternalRoles.role}.
   * @param type Key property. See {@link ExternalRoles.type}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalRoles`.
   */
  delete(
    role: string,
    type: UserExternalPartyEntityType
  ): DeleteRequestBuilder<ExternalRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalRoles` by taking the entity as a parameter.
   */
  delete(entity: ExternalRoles<T>): DeleteRequestBuilder<ExternalRoles<T>, T>;
  delete(
    roleOrEntity: any,
    type?: UserExternalPartyEntityType
  ): DeleteRequestBuilder<ExternalRoles<T>, T> {
    return new DeleteRequestBuilder<ExternalRoles<T>, T>(
      this.entityApi,
      roleOrEntity instanceof ExternalRoles
        ? roleOrEntity
        : {
            Role: roleOrEntity!,
            Type: type!
          }
    );
  }
}
