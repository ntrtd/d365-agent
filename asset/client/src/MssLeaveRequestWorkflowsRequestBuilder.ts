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
import { MssLeaveRequestWorkflows } from './MssLeaveRequestWorkflows';

/**
 * Request builder class for operations supported on the {@link MssLeaveRequestWorkflows} entity.
 */
export class MssLeaveRequestWorkflowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MssLeaveRequestWorkflows<T>, T> {
  /**
   * Returns a request builder for querying all `MssLeaveRequestWorkflows` entities.
   * @returns A request builder for creating requests to retrieve all `MssLeaveRequestWorkflows` entities.
   */
  getAll(): GetAllRequestBuilder<MssLeaveRequestWorkflows<T>, T> {
    return new GetAllRequestBuilder<MssLeaveRequestWorkflows<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MssLeaveRequestWorkflows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MssLeaveRequestWorkflows`.
   */
  create(
    entity: MssLeaveRequestWorkflows<T>
  ): CreateRequestBuilder<MssLeaveRequestWorkflows<T>, T> {
    return new CreateRequestBuilder<MssLeaveRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MssLeaveRequestWorkflows` entity based on its keys.
   * @param dataAreaId Key property. See {@link MssLeaveRequestWorkflows.dataAreaId}.
   * @param requestId Key property. See {@link MssLeaveRequestWorkflows.requestId}.
   * @returns A request builder for creating requests to retrieve one `MssLeaveRequestWorkflows` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MssLeaveRequestWorkflows<T>, T> {
    return new GetByKeyRequestBuilder<MssLeaveRequestWorkflows<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MssLeaveRequestWorkflows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MssLeaveRequestWorkflows`.
   */
  update(
    entity: MssLeaveRequestWorkflows<T>
  ): UpdateRequestBuilder<MssLeaveRequestWorkflows<T>, T> {
    return new UpdateRequestBuilder<MssLeaveRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestWorkflows`.
   * @param dataAreaId Key property. See {@link MssLeaveRequestWorkflows.dataAreaId}.
   * @param requestId Key property. See {@link MssLeaveRequestWorkflows.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestWorkflows`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<MssLeaveRequestWorkflows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestWorkflows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestWorkflows` by taking the entity as a parameter.
   */
  delete(
    entity: MssLeaveRequestWorkflows<T>
  ): DeleteRequestBuilder<MssLeaveRequestWorkflows<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<MssLeaveRequestWorkflows<T>, T> {
    return new DeleteRequestBuilder<MssLeaveRequestWorkflows<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MssLeaveRequestWorkflows
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
