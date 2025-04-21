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
import { LeaseIndexRevaluations } from './LeaseIndexRevaluations';

/**
 * Request builder class for operations supported on the {@link LeaseIndexRevaluations} entity.
 */
export class LeaseIndexRevaluationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseIndexRevaluations<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseIndexRevaluations` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseIndexRevaluations` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseIndexRevaluations<T>, T> {
    return new GetAllRequestBuilder<LeaseIndexRevaluations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseIndexRevaluations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseIndexRevaluations`.
   */
  create(
    entity: LeaseIndexRevaluations<T>
  ): CreateRequestBuilder<LeaseIndexRevaluations<T>, T> {
    return new CreateRequestBuilder<LeaseIndexRevaluations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseIndexRevaluations` entity based on its keys.
   * @param processId Key property. See {@link LeaseIndexRevaluations.processId}.
   * @returns A request builder for creating requests to retrieve one `LeaseIndexRevaluations` entity based on its keys.
   */
  getByKey(
    processId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LeaseIndexRevaluations<T>, T> {
    return new GetByKeyRequestBuilder<LeaseIndexRevaluations<T>, T>(
      this.entityApi,
      { ProcessId: processId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseIndexRevaluations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseIndexRevaluations`.
   */
  update(
    entity: LeaseIndexRevaluations<T>
  ): UpdateRequestBuilder<LeaseIndexRevaluations<T>, T> {
    return new UpdateRequestBuilder<LeaseIndexRevaluations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRevaluations`.
   * @param processId Key property. See {@link LeaseIndexRevaluations.processId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRevaluations`.
   */
  delete(processId: string): DeleteRequestBuilder<LeaseIndexRevaluations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRevaluations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRevaluations` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseIndexRevaluations<T>
  ): DeleteRequestBuilder<LeaseIndexRevaluations<T>, T>;
  delete(
    processIdOrEntity: any
  ): DeleteRequestBuilder<LeaseIndexRevaluations<T>, T> {
    return new DeleteRequestBuilder<LeaseIndexRevaluations<T>, T>(
      this.entityApi,
      processIdOrEntity instanceof LeaseIndexRevaluations
        ? processIdOrEntity
        : { ProcessId: processIdOrEntity! }
    );
  }
}
