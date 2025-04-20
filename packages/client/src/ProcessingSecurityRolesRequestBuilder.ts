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
import { ProcessingSecurityRoles } from './ProcessingSecurityRoles';

/**
 * Request builder class for operations supported on the {@link ProcessingSecurityRoles} entity.
 */
export class ProcessingSecurityRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessingSecurityRoles<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessingSecurityRoles` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessingSecurityRoles` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessingSecurityRoles<T>, T> {
    return new GetAllRequestBuilder<ProcessingSecurityRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessingSecurityRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessingSecurityRoles`.
   */
  create(
    entity: ProcessingSecurityRoles<T>
  ): CreateRequestBuilder<ProcessingSecurityRoles<T>, T> {
    return new CreateRequestBuilder<ProcessingSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessingSecurityRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessingSecurityRoles.dataAreaId}.
   * @param processing Key property. See {@link ProcessingSecurityRoles.processing}.
   * @param securityRoleAotName Key property. See {@link ProcessingSecurityRoles.securityRoleAotName}.
   * @returns A request builder for creating requests to retrieve one `ProcessingSecurityRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processing: DeserializedType<T, 'Edm.String'>,
    securityRoleAotName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessingSecurityRoles<T>, T> {
    return new GetByKeyRequestBuilder<ProcessingSecurityRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Processing: processing,
        SecurityRoleAotName: securityRoleAotName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessingSecurityRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessingSecurityRoles`.
   */
  update(
    entity: ProcessingSecurityRoles<T>
  ): UpdateRequestBuilder<ProcessingSecurityRoles<T>, T> {
    return new UpdateRequestBuilder<ProcessingSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessingSecurityRoles`.
   * @param dataAreaId Key property. See {@link ProcessingSecurityRoles.dataAreaId}.
   * @param processing Key property. See {@link ProcessingSecurityRoles.processing}.
   * @param securityRoleAotName Key property. See {@link ProcessingSecurityRoles.securityRoleAotName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingSecurityRoles`.
   */
  delete(
    dataAreaId: string,
    processing: string,
    securityRoleAotName: string
  ): DeleteRequestBuilder<ProcessingSecurityRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessingSecurityRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingSecurityRoles` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessingSecurityRoles<T>
  ): DeleteRequestBuilder<ProcessingSecurityRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processing?: string,
    securityRoleAotName?: string
  ): DeleteRequestBuilder<ProcessingSecurityRoles<T>, T> {
    return new DeleteRequestBuilder<ProcessingSecurityRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessingSecurityRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Processing: processing!,
            SecurityRoleAotName: securityRoleAotName!
          }
    );
  }
}
