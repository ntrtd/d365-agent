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
import { PolicyViolationJustifications } from './PolicyViolationJustifications';

/**
 * Request builder class for operations supported on the {@link PolicyViolationJustifications} entity.
 */
export class PolicyViolationJustificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyViolationJustifications<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyViolationJustifications` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyViolationJustifications` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyViolationJustifications<T>, T> {
    return new GetAllRequestBuilder<PolicyViolationJustifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PolicyViolationJustifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyViolationJustifications`.
   */
  create(
    entity: PolicyViolationJustifications<T>
  ): CreateRequestBuilder<PolicyViolationJustifications<T>, T> {
    return new CreateRequestBuilder<PolicyViolationJustifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyViolationJustifications` entity based on its keys.
   * @param justificationId Key property. See {@link PolicyViolationJustifications.justificationId}.
   * @returns A request builder for creating requests to retrieve one `PolicyViolationJustifications` entity based on its keys.
   */
  getByKey(
    justificationId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PolicyViolationJustifications<T>, T> {
    return new GetByKeyRequestBuilder<PolicyViolationJustifications<T>, T>(
      this.entityApi,
      { JustificationId: justificationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyViolationJustifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyViolationJustifications`.
   */
  update(
    entity: PolicyViolationJustifications<T>
  ): UpdateRequestBuilder<PolicyViolationJustifications<T>, T> {
    return new UpdateRequestBuilder<PolicyViolationJustifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationJustifications`.
   * @param justificationId Key property. See {@link PolicyViolationJustifications.justificationId}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationJustifications`.
   */
  delete(
    justificationId: string
  ): DeleteRequestBuilder<PolicyViolationJustifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyViolationJustifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyViolationJustifications` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyViolationJustifications<T>
  ): DeleteRequestBuilder<PolicyViolationJustifications<T>, T>;
  delete(
    justificationIdOrEntity: any
  ): DeleteRequestBuilder<PolicyViolationJustifications<T>, T> {
    return new DeleteRequestBuilder<PolicyViolationJustifications<T>, T>(
      this.entityApi,
      justificationIdOrEntity instanceof PolicyViolationJustifications
        ? justificationIdOrEntity
        : { JustificationId: justificationIdOrEntity! }
    );
  }
}
