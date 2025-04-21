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
import { GupParameters } from './GupParameters';

/**
 * Request builder class for operations supported on the {@link GupParameters} entity.
 */
export class GupParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupParameters<T>, T> {
  /**
   * Returns a request builder for querying all `GupParameters` entities.
   * @returns A request builder for creating requests to retrieve all `GupParameters` entities.
   */
  getAll(): GetAllRequestBuilder<GupParameters<T>, T> {
    return new GetAllRequestBuilder<GupParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupParameters`.
   */
  create(entity: GupParameters<T>): CreateRequestBuilder<GupParameters<T>, T> {
    return new CreateRequestBuilder<GupParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GupParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `GupParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupParameters<T>, T> {
    return new GetByKeyRequestBuilder<GupParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GupParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupParameters`.
   */
  update(entity: GupParameters<T>): UpdateRequestBuilder<GupParameters<T>, T> {
    return new UpdateRequestBuilder<GupParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GupParameters`.
   * @param dataAreaId Key property. See {@link GupParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `GupParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<GupParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupParameters` by taking the entity as a parameter.
   */
  delete(entity: GupParameters<T>): DeleteRequestBuilder<GupParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<GupParameters<T>, T> {
    return new DeleteRequestBuilder<GupParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
