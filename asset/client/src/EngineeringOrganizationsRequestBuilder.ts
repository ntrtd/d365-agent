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
import { EngineeringOrganizations } from './EngineeringOrganizations';

/**
 * Request builder class for operations supported on the {@link EngineeringOrganizations} entity.
 */
export class EngineeringOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringOrganizations<T>, T> {
    return new GetAllRequestBuilder<EngineeringOrganizations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringOrganizations`.
   */
  create(
    entity: EngineeringOrganizations<T>
  ): CreateRequestBuilder<EngineeringOrganizations<T>, T> {
    return new CreateRequestBuilder<EngineeringOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringOrganizations` entity based on its keys.
   * @param engineeringOrganizationId Key property. See {@link EngineeringOrganizations.engineeringOrganizationId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringOrganizations` entity based on its keys.
   */
  getByKey(
    engineeringOrganizationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringOrganizations<T>, T>(
      this.entityApi,
      { EngineeringOrganizationId: engineeringOrganizationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringOrganizations`.
   */
  update(
    entity: EngineeringOrganizations<T>
  ): UpdateRequestBuilder<EngineeringOrganizations<T>, T> {
    return new UpdateRequestBuilder<EngineeringOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringOrganizations`.
   * @param engineeringOrganizationId Key property. See {@link EngineeringOrganizations.engineeringOrganizationId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringOrganizations`.
   */
  delete(
    engineeringOrganizationId: string
  ): DeleteRequestBuilder<EngineeringOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringOrganizations<T>
  ): DeleteRequestBuilder<EngineeringOrganizations<T>, T>;
  delete(
    engineeringOrganizationIdOrEntity: any
  ): DeleteRequestBuilder<EngineeringOrganizations<T>, T> {
    return new DeleteRequestBuilder<EngineeringOrganizations<T>, T>(
      this.entityApi,
      engineeringOrganizationIdOrEntity instanceof EngineeringOrganizations
        ? engineeringOrganizationIdOrEntity
        : { EngineeringOrganizationId: engineeringOrganizationIdOrEntity! }
    );
  }
}
