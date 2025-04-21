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
import { EmWebApplicationSecurityRoles } from './EmWebApplicationSecurityRoles';

/**
 * Request builder class for operations supported on the {@link EmWebApplicationSecurityRoles} entity.
 */
export class EmWebApplicationSecurityRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
  /**
   * Returns a request builder for querying all `EmWebApplicationSecurityRoles` entities.
   * @returns A request builder for creating requests to retrieve all `EmWebApplicationSecurityRoles` entities.
   */
  getAll(): GetAllRequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
    return new GetAllRequestBuilder<EmWebApplicationSecurityRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmWebApplicationSecurityRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmWebApplicationSecurityRoles`.
   */
  create(
    entity: EmWebApplicationSecurityRoles<T>
  ): CreateRequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
    return new CreateRequestBuilder<EmWebApplicationSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmWebApplicationSecurityRoles` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmWebApplicationSecurityRoles.dataAreaId}.
   * @param webApplicationName Key property. See {@link EmWebApplicationSecurityRoles.webApplicationName}.
   * @param securityRoleAotName Key property. See {@link EmWebApplicationSecurityRoles.securityRoleAotName}.
   * @returns A request builder for creating requests to retrieve one `EmWebApplicationSecurityRoles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    webApplicationName: DeserializedType<T, 'Edm.String'>,
    securityRoleAotName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
    return new GetByKeyRequestBuilder<EmWebApplicationSecurityRoles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WebApplicationName: webApplicationName,
        SecurityRoleAotName: securityRoleAotName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmWebApplicationSecurityRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmWebApplicationSecurityRoles`.
   */
  update(
    entity: EmWebApplicationSecurityRoles<T>
  ): UpdateRequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
    return new UpdateRequestBuilder<EmWebApplicationSecurityRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmWebApplicationSecurityRoles`.
   * @param dataAreaId Key property. See {@link EmWebApplicationSecurityRoles.dataAreaId}.
   * @param webApplicationName Key property. See {@link EmWebApplicationSecurityRoles.webApplicationName}.
   * @param securityRoleAotName Key property. See {@link EmWebApplicationSecurityRoles.securityRoleAotName}.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplicationSecurityRoles`.
   */
  delete(
    dataAreaId: string,
    webApplicationName: string,
    securityRoleAotName: string
  ): DeleteRequestBuilder<EmWebApplicationSecurityRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmWebApplicationSecurityRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplicationSecurityRoles` by taking the entity as a parameter.
   */
  delete(
    entity: EmWebApplicationSecurityRoles<T>
  ): DeleteRequestBuilder<EmWebApplicationSecurityRoles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    webApplicationName?: string,
    securityRoleAotName?: string
  ): DeleteRequestBuilder<EmWebApplicationSecurityRoles<T>, T> {
    return new DeleteRequestBuilder<EmWebApplicationSecurityRoles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmWebApplicationSecurityRoles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WebApplicationName: webApplicationName!,
            SecurityRoleAotName: securityRoleAotName!
          }
    );
  }
}
