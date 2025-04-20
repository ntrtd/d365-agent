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
import { EngineeringChangeRequestHeaders } from './EngineeringChangeRequestHeaders';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeRequestHeaders} entity.
 */
export class EngineeringChangeRequestHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeRequestHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeRequestHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeRequestHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeRequestHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeRequestHeaders`.
   */
  create(
    entity: EngineeringChangeRequestHeaders<T>
  ): CreateRequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeRequestHeaders` entity based on its keys.
   * @param requestNumber Key property. See {@link EngineeringChangeRequestHeaders.requestNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeRequestHeaders` entity based on its keys.
   */
  getByKey(
    requestNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeRequestHeaders<T>, T>(
      this.entityApi,
      { RequestNumber: requestNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeRequestHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeRequestHeaders`.
   */
  update(
    entity: EngineeringChangeRequestHeaders<T>
  ): UpdateRequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestHeaders`.
   * @param requestNumber Key property. See {@link EngineeringChangeRequestHeaders.requestNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestHeaders`.
   */
  delete(
    requestNumber: string
  ): DeleteRequestBuilder<EngineeringChangeRequestHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeRequestHeaders<T>
  ): DeleteRequestBuilder<EngineeringChangeRequestHeaders<T>, T>;
  delete(
    requestNumberOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangeRequestHeaders<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeRequestHeaders<T>, T>(
      this.entityApi,
      requestNumberOrEntity instanceof EngineeringChangeRequestHeaders
        ? requestNumberOrEntity
        : { RequestNumber: requestNumberOrEntity! }
    );
  }
}
