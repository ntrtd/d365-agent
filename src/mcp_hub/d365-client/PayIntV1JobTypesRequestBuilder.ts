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
import { PayIntV1JobTypes } from './PayIntV1JobTypes';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobTypes} entity.
 */
export class PayIntV1JobTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobTypes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobTypes`.
   */
  create(
    entity: PayIntV1JobTypes<T>
  ): CreateRequestBuilder<PayIntV1JobTypes<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobTypes` entity based on its keys.
   * @param jobTypeId Key property. See {@link PayIntV1JobTypes.jobTypeId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobTypes` entity based on its keys.
   */
  getByKey(
    jobTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobTypes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobTypes<T>, T>(this.entityApi, {
      JobTypeId: jobTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobTypes`.
   */
  update(
    entity: PayIntV1JobTypes<T>
  ): UpdateRequestBuilder<PayIntV1JobTypes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobTypes`.
   * @param jobTypeId Key property. See {@link PayIntV1JobTypes.jobTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobTypes`.
   */
  delete(jobTypeId: string): DeleteRequestBuilder<PayIntV1JobTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobTypes<T>
  ): DeleteRequestBuilder<PayIntV1JobTypes<T>, T>;
  delete(jobTypeIdOrEntity: any): DeleteRequestBuilder<PayIntV1JobTypes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobTypes<T>, T>(
      this.entityApi,
      jobTypeIdOrEntity instanceof PayIntV1JobTypes
        ? jobTypeIdOrEntity
        : { JobTypeId: jobTypeIdOrEntity! }
    );
  }
}
