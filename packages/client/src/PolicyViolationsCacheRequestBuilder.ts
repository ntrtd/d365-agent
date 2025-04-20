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
import { PolicyViolationsCache } from './PolicyViolationsCache';

/**
 * Request builder class for operations supported on the {@link PolicyViolationsCache} entity.
 */
export class PolicyViolationsCacheRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyViolationsCache<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyViolationsCache` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyViolationsCache` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyViolationsCache<T>, T> {
    return new GetAllRequestBuilder<PolicyViolationsCache<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PolicyViolationsCache` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyViolationsCache`.
   */
  create(
    entity: PolicyViolationsCache<T>
  ): CreateRequestBuilder<PolicyViolationsCache<T>, T> {
    return new CreateRequestBuilder<PolicyViolationsCache<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyViolationsCache` entity based on its keys.
   * @param violationsCacheId Key property. See {@link PolicyViolationsCache.violationsCacheId}.
   * @returns A request builder for creating requests to retrieve one `PolicyViolationsCache` entity based on its keys.
   */
  getByKey(
    violationsCacheId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PolicyViolationsCache<T>, T> {
    return new GetByKeyRequestBuilder<PolicyViolationsCache<T>, T>(
      this.entityApi,
      { ViolationsCacheId: violationsCacheId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyViolationsCache`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyViolationsCache`.
   */
  update(
    entity: PolicyViolationsCache<T>
  ): UpdateRequestBuilder<PolicyViolationsCache<T>, T> {
    return new UpdateRequestBuilder<PolicyViolationsCache<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationsCache`.
   * @param violationsCacheId Key property. See {@link PolicyViolationsCache.violationsCacheId}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationsCache`.
   */
  delete(
    violationsCacheId: string
  ): DeleteRequestBuilder<PolicyViolationsCache<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationsCache`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationsCache` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyViolationsCache<T>
  ): DeleteRequestBuilder<PolicyViolationsCache<T>, T>;
  delete(
    violationsCacheIdOrEntity: any
  ): DeleteRequestBuilder<PolicyViolationsCache<T>, T> {
    return new DeleteRequestBuilder<PolicyViolationsCache<T>, T>(
      this.entityApi,
      violationsCacheIdOrEntity instanceof PolicyViolationsCache
        ? violationsCacheIdOrEntity
        : { ViolationsCacheId: violationsCacheIdOrEntity! }
    );
  }
}
