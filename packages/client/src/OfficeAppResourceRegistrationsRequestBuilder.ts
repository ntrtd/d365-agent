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
import { OfficeAppResourceRegistrations } from './OfficeAppResourceRegistrations';

/**
 * Request builder class for operations supported on the {@link OfficeAppResourceRegistrations} entity.
 */
export class OfficeAppResourceRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OfficeAppResourceRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `OfficeAppResourceRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `OfficeAppResourceRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<OfficeAppResourceRegistrations<T>, T> {
    return new GetAllRequestBuilder<OfficeAppResourceRegistrations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OfficeAppResourceRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OfficeAppResourceRegistrations`.
   */
  create(
    entity: OfficeAppResourceRegistrations<T>
  ): CreateRequestBuilder<OfficeAppResourceRegistrations<T>, T> {
    return new CreateRequestBuilder<OfficeAppResourceRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OfficeAppResourceRegistrations` entity based on its keys.
   * @param resourceId Key property. See {@link OfficeAppResourceRegistrations.resourceId}.
   * @returns A request builder for creating requests to retrieve one `OfficeAppResourceRegistrations` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OfficeAppResourceRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<OfficeAppResourceRegistrations<T>, T>(
      this.entityApi,
      { ResourceID: resourceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OfficeAppResourceRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OfficeAppResourceRegistrations`.
   */
  update(
    entity: OfficeAppResourceRegistrations<T>
  ): UpdateRequestBuilder<OfficeAppResourceRegistrations<T>, T> {
    return new UpdateRequestBuilder<OfficeAppResourceRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OfficeAppResourceRegistrations`.
   * @param resourceId Key property. See {@link OfficeAppResourceRegistrations.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAppResourceRegistrations`.
   */
  delete(
    resourceId: string
  ): DeleteRequestBuilder<OfficeAppResourceRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OfficeAppResourceRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OfficeAppResourceRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: OfficeAppResourceRegistrations<T>
  ): DeleteRequestBuilder<OfficeAppResourceRegistrations<T>, T>;
  delete(
    resourceIdOrEntity: any
  ): DeleteRequestBuilder<OfficeAppResourceRegistrations<T>, T> {
    return new DeleteRequestBuilder<OfficeAppResourceRegistrations<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof OfficeAppResourceRegistrations
        ? resourceIdOrEntity
        : { ResourceID: resourceIdOrEntity! }
    );
  }
}
