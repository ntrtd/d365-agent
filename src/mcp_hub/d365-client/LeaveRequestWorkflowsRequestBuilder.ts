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
import { LeaveRequestWorkflows } from './LeaveRequestWorkflows';

/**
 * Request builder class for operations supported on the {@link LeaveRequestWorkflows} entity.
 */
export class LeaveRequestWorkflowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequestWorkflows<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequestWorkflows` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequestWorkflows` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequestWorkflows<T>, T> {
    return new GetAllRequestBuilder<LeaveRequestWorkflows<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveRequestWorkflows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequestWorkflows`.
   */
  create(
    entity: LeaveRequestWorkflows<T>
  ): CreateRequestBuilder<LeaveRequestWorkflows<T>, T> {
    return new CreateRequestBuilder<LeaveRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequestWorkflows` entity based on its keys.
   * @param sequenceNumber Key property. See {@link LeaveRequestWorkflows.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequestWorkflows` entity based on its keys.
   */
  getByKey(
    sequenceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveRequestWorkflows<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequestWorkflows<T>, T>(
      this.entityApi,
      { SequenceNumber: sequenceNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequestWorkflows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequestWorkflows`.
   */
  update(
    entity: LeaveRequestWorkflows<T>
  ): UpdateRequestBuilder<LeaveRequestWorkflows<T>, T> {
    return new UpdateRequestBuilder<LeaveRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestWorkflows`.
   * @param sequenceNumber Key property. See {@link LeaveRequestWorkflows.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestWorkflows`.
   */
  delete(
    sequenceNumber: string
  ): DeleteRequestBuilder<LeaveRequestWorkflows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestWorkflows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestWorkflows` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveRequestWorkflows<T>
  ): DeleteRequestBuilder<LeaveRequestWorkflows<T>, T>;
  delete(
    sequenceNumberOrEntity: any
  ): DeleteRequestBuilder<LeaveRequestWorkflows<T>, T> {
    return new DeleteRequestBuilder<LeaveRequestWorkflows<T>, T>(
      this.entityApi,
      sequenceNumberOrEntity instanceof LeaveRequestWorkflows
        ? sequenceNumberOrEntity
        : { SequenceNumber: sequenceNumberOrEntity! }
    );
  }
}
