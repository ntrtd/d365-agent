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
import { VendorParameters } from './VendorParameters';

/**
 * Request builder class for operations supported on the {@link VendorParameters} entity.
 */
export class VendorParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorParameters<T>, T> {
  /**
   * Returns a request builder for querying all `VendorParameters` entities.
   * @returns A request builder for creating requests to retrieve all `VendorParameters` entities.
   */
  getAll(): GetAllRequestBuilder<VendorParameters<T>, T> {
    return new GetAllRequestBuilder<VendorParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorParameters`.
   */
  create(
    entity: VendorParameters<T>
  ): CreateRequestBuilder<VendorParameters<T>, T> {
    return new CreateRequestBuilder<VendorParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendorParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorParameters<T>, T> {
    return new GetByKeyRequestBuilder<VendorParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorParameters`.
   */
  update(
    entity: VendorParameters<T>
  ): UpdateRequestBuilder<VendorParameters<T>, T> {
    return new UpdateRequestBuilder<VendorParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorParameters`.
   * @param dataAreaId Key property. See {@link VendorParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<VendorParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorParameters` by taking the entity as a parameter.
   */
  delete(
    entity: VendorParameters<T>
  ): DeleteRequestBuilder<VendorParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<VendorParameters<T>, T> {
    return new DeleteRequestBuilder<VendorParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
