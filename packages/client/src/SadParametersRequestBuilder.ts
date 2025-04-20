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
import { SadParameters } from './SadParameters';

/**
 * Request builder class for operations supported on the {@link SadParameters} entity.
 */
export class SadParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SadParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SadParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SadParameters<T>, T> {
    return new GetAllRequestBuilder<SadParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SadParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadParameters`.
   */
  create(entity: SadParameters<T>): CreateRequestBuilder<SadParameters<T>, T> {
    return new CreateRequestBuilder<SadParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SadParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SadParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SadParameters<T>, T> {
    return new GetByKeyRequestBuilder<SadParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SadParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadParameters`.
   */
  update(entity: SadParameters<T>): UpdateRequestBuilder<SadParameters<T>, T> {
    return new UpdateRequestBuilder<SadParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SadParameters`.
   * @param dataAreaId Key property. See {@link SadParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SadParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<SadParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadParameters` by taking the entity as a parameter.
   */
  delete(entity: SadParameters<T>): DeleteRequestBuilder<SadParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<SadParameters<T>, T> {
    return new DeleteRequestBuilder<SadParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
