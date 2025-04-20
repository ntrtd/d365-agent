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
import { PolicyViolationsLog } from './PolicyViolationsLog';

/**
 * Request builder class for operations supported on the {@link PolicyViolationsLog} entity.
 */
export class PolicyViolationsLogRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyViolationsLog<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyViolationsLog` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyViolationsLog` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyViolationsLog<T>, T> {
    return new GetAllRequestBuilder<PolicyViolationsLog<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyViolationsLog` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyViolationsLog`.
   */
  create(
    entity: PolicyViolationsLog<T>
  ): CreateRequestBuilder<PolicyViolationsLog<T>, T> {
    return new CreateRequestBuilder<PolicyViolationsLog<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyViolationsLog` entity based on its keys.
   * @param violationsLogId Key property. See {@link PolicyViolationsLog.violationsLogId}.
   * @returns A request builder for creating requests to retrieve one `PolicyViolationsLog` entity based on its keys.
   */
  getByKey(
    violationsLogId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PolicyViolationsLog<T>, T> {
    return new GetByKeyRequestBuilder<PolicyViolationsLog<T>, T>(
      this.entityApi,
      { ViolationsLogId: violationsLogId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyViolationsLog`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyViolationsLog`.
   */
  update(
    entity: PolicyViolationsLog<T>
  ): UpdateRequestBuilder<PolicyViolationsLog<T>, T> {
    return new UpdateRequestBuilder<PolicyViolationsLog<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationsLog`.
   * @param violationsLogId Key property. See {@link PolicyViolationsLog.violationsLogId}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationsLog`.
   */
  delete(
    violationsLogId: string
  ): DeleteRequestBuilder<PolicyViolationsLog<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationsLog`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationsLog` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyViolationsLog<T>
  ): DeleteRequestBuilder<PolicyViolationsLog<T>, T>;
  delete(
    violationsLogIdOrEntity: any
  ): DeleteRequestBuilder<PolicyViolationsLog<T>, T> {
    return new DeleteRequestBuilder<PolicyViolationsLog<T>, T>(
      this.entityApi,
      violationsLogIdOrEntity instanceof PolicyViolationsLog
        ? violationsLogIdOrEntity
        : { ViolationsLogId: violationsLogIdOrEntity! }
    );
  }
}
