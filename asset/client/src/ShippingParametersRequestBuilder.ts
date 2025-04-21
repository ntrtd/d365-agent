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
import { ShippingParameters } from './ShippingParameters';

/**
 * Request builder class for operations supported on the {@link ShippingParameters} entity.
 */
export class ShippingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingParameters<T>, T> {
    return new GetAllRequestBuilder<ShippingParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingParameters`.
   */
  create(
    entity: ShippingParameters<T>
  ): CreateRequestBuilder<ShippingParameters<T>, T> {
    return new CreateRequestBuilder<ShippingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `ShippingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingParameters<T>, T> {
    return new GetByKeyRequestBuilder<ShippingParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingParameters`.
   */
  update(
    entity: ShippingParameters<T>
  ): UpdateRequestBuilder<ShippingParameters<T>, T> {
    return new UpdateRequestBuilder<ShippingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingParameters`.
   * @param dataAreaId Key property. See {@link ShippingParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<ShippingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingParameters<T>
  ): DeleteRequestBuilder<ShippingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<ShippingParameters<T>, T> {
    return new DeleteRequestBuilder<ShippingParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
