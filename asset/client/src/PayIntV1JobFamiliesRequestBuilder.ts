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
import { PayIntV1JobFamilies } from './PayIntV1JobFamilies';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobFamilies} entity.
 */
export class PayIntV1JobFamiliesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobFamilies<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobFamilies` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobFamilies` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobFamilies<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobFamilies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobFamilies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobFamilies`.
   */
  create(
    entity: PayIntV1JobFamilies<T>
  ): CreateRequestBuilder<PayIntV1JobFamilies<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobFamilies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobFamilies` entity based on its keys.
   * @param jobFamilyId Key property. See {@link PayIntV1JobFamilies.jobFamilyId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobFamilies` entity based on its keys.
   */
  getByKey(
    jobFamilyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobFamilies<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobFamilies<T>, T>(
      this.entityApi,
      { JobFamilyId: jobFamilyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobFamilies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobFamilies`.
   */
  update(
    entity: PayIntV1JobFamilies<T>
  ): UpdateRequestBuilder<PayIntV1JobFamilies<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobFamilies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobFamilies`.
   * @param jobFamilyId Key property. See {@link PayIntV1JobFamilies.jobFamilyId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobFamilies`.
   */
  delete(jobFamilyId: string): DeleteRequestBuilder<PayIntV1JobFamilies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobFamilies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobFamilies` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobFamilies<T>
  ): DeleteRequestBuilder<PayIntV1JobFamilies<T>, T>;
  delete(
    jobFamilyIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1JobFamilies<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobFamilies<T>, T>(
      this.entityApi,
      jobFamilyIdOrEntity instanceof PayIntV1JobFamilies
        ? jobFamilyIdOrEntity
        : { JobFamilyId: jobFamilyIdOrEntity! }
    );
  }
}
