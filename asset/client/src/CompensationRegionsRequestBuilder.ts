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
import { CompensationRegions } from './CompensationRegions';

/**
 * Request builder class for operations supported on the {@link CompensationRegions} entity.
 */
export class CompensationRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationRegions<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationRegions` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationRegions` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationRegions<T>, T> {
    return new GetAllRequestBuilder<CompensationRegions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationRegions`.
   */
  create(
    entity: CompensationRegions<T>
  ): CreateRequestBuilder<CompensationRegions<T>, T> {
    return new CreateRequestBuilder<CompensationRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationRegions` entity based on its keys.
   * @param location Key property. See {@link CompensationRegions.location}.
   * @returns A request builder for creating requests to retrieve one `CompensationRegions` entity based on its keys.
   */
  getByKey(
    location: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationRegions<T>, T> {
    return new GetByKeyRequestBuilder<CompensationRegions<T>, T>(
      this.entityApi,
      { Location: location }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationRegions`.
   */
  update(
    entity: CompensationRegions<T>
  ): UpdateRequestBuilder<CompensationRegions<T>, T> {
    return new UpdateRequestBuilder<CompensationRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationRegions`.
   * @param location Key property. See {@link CompensationRegions.location}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationRegions`.
   */
  delete(location: string): DeleteRequestBuilder<CompensationRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationRegions` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationRegions<T>
  ): DeleteRequestBuilder<CompensationRegions<T>, T>;
  delete(
    locationOrEntity: any
  ): DeleteRequestBuilder<CompensationRegions<T>, T> {
    return new DeleteRequestBuilder<CompensationRegions<T>, T>(
      this.entityApi,
      locationOrEntity instanceof CompensationRegions
        ? locationOrEntity
        : { Location: locationOrEntity! }
    );
  }
}
