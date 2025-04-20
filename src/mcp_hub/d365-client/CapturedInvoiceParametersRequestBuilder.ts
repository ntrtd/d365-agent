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
import { CapturedInvoiceParameters } from './CapturedInvoiceParameters';

/**
 * Request builder class for operations supported on the {@link CapturedInvoiceParameters} entity.
 */
export class CapturedInvoiceParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CapturedInvoiceParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CapturedInvoiceParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CapturedInvoiceParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CapturedInvoiceParameters<T>, T> {
    return new GetAllRequestBuilder<CapturedInvoiceParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CapturedInvoiceParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CapturedInvoiceParameters`.
   */
  create(
    entity: CapturedInvoiceParameters<T>
  ): CreateRequestBuilder<CapturedInvoiceParameters<T>, T> {
    return new CreateRequestBuilder<CapturedInvoiceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CapturedInvoiceParameters` entity based on its keys.
   * @param key Key property. See {@link CapturedInvoiceParameters.key}.
   * @returns A request builder for creating requests to retrieve one `CapturedInvoiceParameters` entity based on its keys.
   */
  getByKey(
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CapturedInvoiceParameters<T>, T> {
    return new GetByKeyRequestBuilder<CapturedInvoiceParameters<T>, T>(
      this.entityApi,
      { Key: key }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CapturedInvoiceParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CapturedInvoiceParameters`.
   */
  update(
    entity: CapturedInvoiceParameters<T>
  ): UpdateRequestBuilder<CapturedInvoiceParameters<T>, T> {
    return new UpdateRequestBuilder<CapturedInvoiceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CapturedInvoiceParameters`.
   * @param key Key property. See {@link CapturedInvoiceParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `CapturedInvoiceParameters`.
   */
  delete(key: number): DeleteRequestBuilder<CapturedInvoiceParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CapturedInvoiceParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CapturedInvoiceParameters` by taking the entity as a parameter.
   */
  delete(
    entity: CapturedInvoiceParameters<T>
  ): DeleteRequestBuilder<CapturedInvoiceParameters<T>, T>;
  delete(
    keyOrEntity: any
  ): DeleteRequestBuilder<CapturedInvoiceParameters<T>, T> {
    return new DeleteRequestBuilder<CapturedInvoiceParameters<T>, T>(
      this.entityApi,
      keyOrEntity instanceof CapturedInvoiceParameters
        ? keyOrEntity
        : { Key: keyOrEntity! }
    );
  }
}
