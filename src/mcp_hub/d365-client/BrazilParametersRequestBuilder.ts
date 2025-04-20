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
import { BrazilParameters } from './BrazilParameters';

/**
 * Request builder class for operations supported on the {@link BrazilParameters} entity.
 */
export class BrazilParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BrazilParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BrazilParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BrazilParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BrazilParameters<T>, T> {
    return new GetAllRequestBuilder<BrazilParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BrazilParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BrazilParameters`.
   */
  create(
    entity: BrazilParameters<T>
  ): CreateRequestBuilder<BrazilParameters<T>, T> {
    return new CreateRequestBuilder<BrazilParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BrazilParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BrazilParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `BrazilParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BrazilParameters<T>, T> {
    return new GetByKeyRequestBuilder<BrazilParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BrazilParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BrazilParameters`.
   */
  update(
    entity: BrazilParameters<T>
  ): UpdateRequestBuilder<BrazilParameters<T>, T> {
    return new UpdateRequestBuilder<BrazilParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BrazilParameters`.
   * @param dataAreaId Key property. See {@link BrazilParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `BrazilParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<BrazilParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BrazilParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BrazilParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BrazilParameters<T>
  ): DeleteRequestBuilder<BrazilParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<BrazilParameters<T>, T> {
    return new DeleteRequestBuilder<BrazilParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BrazilParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
