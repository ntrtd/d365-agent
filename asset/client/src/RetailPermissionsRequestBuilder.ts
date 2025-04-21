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
import { RetailPermissions } from './RetailPermissions';

/**
 * Request builder class for operations supported on the {@link RetailPermissions} entity.
 */
export class RetailPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPermissions<T>, T> {
    return new GetAllRequestBuilder<RetailPermissions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPermissions`.
   */
  create(
    entity: RetailPermissions<T>
  ): CreateRequestBuilder<RetailPermissions<T>, T> {
    return new CreateRequestBuilder<RetailPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPermissions` entity based on its keys.
   * @param permissionId Key property. See {@link RetailPermissions.permissionId}.
   * @returns A request builder for creating requests to retrieve one `RetailPermissions` entity based on its keys.
   */
  getByKey(
    permissionId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailPermissions<T>, T> {
    return new GetByKeyRequestBuilder<RetailPermissions<T>, T>(this.entityApi, {
      PermissionId: permissionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPermissions`.
   */
  update(
    entity: RetailPermissions<T>
  ): UpdateRequestBuilder<RetailPermissions<T>, T> {
    return new UpdateRequestBuilder<RetailPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPermissions`.
   * @param permissionId Key property. See {@link RetailPermissions.permissionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPermissions`.
   */
  delete(permissionId: number): DeleteRequestBuilder<RetailPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPermissions<T>
  ): DeleteRequestBuilder<RetailPermissions<T>, T>;
  delete(
    permissionIdOrEntity: any
  ): DeleteRequestBuilder<RetailPermissions<T>, T> {
    return new DeleteRequestBuilder<RetailPermissions<T>, T>(
      this.entityApi,
      permissionIdOrEntity instanceof RetailPermissions
        ? permissionIdOrEntity
        : { PermissionId: permissionIdOrEntity! }
    );
  }
}
