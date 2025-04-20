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
import { HumanResourcesParameters } from './HumanResourcesParameters';

/**
 * Request builder class for operations supported on the {@link HumanResourcesParameters} entity.
 */
export class HumanResourcesParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HumanResourcesParameters<T>, T> {
  /**
   * Returns a request builder for querying all `HumanResourcesParameters` entities.
   * @returns A request builder for creating requests to retrieve all `HumanResourcesParameters` entities.
   */
  getAll(): GetAllRequestBuilder<HumanResourcesParameters<T>, T> {
    return new GetAllRequestBuilder<HumanResourcesParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HumanResourcesParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HumanResourcesParameters`.
   */
  create(
    entity: HumanResourcesParameters<T>
  ): CreateRequestBuilder<HumanResourcesParameters<T>, T> {
    return new CreateRequestBuilder<HumanResourcesParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HumanResourcesParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link HumanResourcesParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `HumanResourcesParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HumanResourcesParameters<T>, T> {
    return new GetByKeyRequestBuilder<HumanResourcesParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HumanResourcesParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HumanResourcesParameters`.
   */
  update(
    entity: HumanResourcesParameters<T>
  ): UpdateRequestBuilder<HumanResourcesParameters<T>, T> {
    return new UpdateRequestBuilder<HumanResourcesParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HumanResourcesParameters`.
   * @param dataAreaId Key property. See {@link HumanResourcesParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `HumanResourcesParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<HumanResourcesParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HumanResourcesParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HumanResourcesParameters` by taking the entity as a parameter.
   */
  delete(
    entity: HumanResourcesParameters<T>
  ): DeleteRequestBuilder<HumanResourcesParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<HumanResourcesParameters<T>, T> {
    return new DeleteRequestBuilder<HumanResourcesParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof HumanResourcesParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
