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
import { DimensionAttributeActivations } from './DimensionAttributeActivations';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link DimensionAttributeActivations} entity.
 */
export class DimensionAttributeActivationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionAttributeActivations<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionAttributeActivations` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionAttributeActivations` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionAttributeActivations<T>, T> {
    return new GetAllRequestBuilder<DimensionAttributeActivations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionAttributeActivations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionAttributeActivations`.
   */
  create(
    entity: DimensionAttributeActivations<T>
  ): CreateRequestBuilder<DimensionAttributeActivations<T>, T> {
    return new CreateRequestBuilder<DimensionAttributeActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionAttributeActivations` entity based on its keys.
   * @param doActivate Key property. See {@link DimensionAttributeActivations.doActivate}.
   * @returns A request builder for creating requests to retrieve one `DimensionAttributeActivations` entity based on its keys.
   */
  getByKey(
    doActivate: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>
  ): GetByKeyRequestBuilder<DimensionAttributeActivations<T>, T> {
    return new GetByKeyRequestBuilder<DimensionAttributeActivations<T>, T>(
      this.entityApi,
      { DoActivate: doActivate }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionAttributeActivations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionAttributeActivations`.
   */
  update(
    entity: DimensionAttributeActivations<T>
  ): UpdateRequestBuilder<DimensionAttributeActivations<T>, T> {
    return new UpdateRequestBuilder<DimensionAttributeActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeActivations`.
   * @param doActivate Key property. See {@link DimensionAttributeActivations.doActivate}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeActivations`.
   */
  delete(
    doActivate: NoYes
  ): DeleteRequestBuilder<DimensionAttributeActivations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeActivations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeActivations` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionAttributeActivations<T>
  ): DeleteRequestBuilder<DimensionAttributeActivations<T>, T>;
  delete(
    doActivateOrEntity: any
  ): DeleteRequestBuilder<DimensionAttributeActivations<T>, T> {
    return new DeleteRequestBuilder<DimensionAttributeActivations<T>, T>(
      this.entityApi,
      doActivateOrEntity instanceof DimensionAttributeActivations
        ? doActivateOrEntity
        : { DoActivate: doActivateOrEntity! }
    );
  }
}
