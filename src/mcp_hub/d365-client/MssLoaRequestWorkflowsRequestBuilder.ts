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
import { MssLoaRequestWorkflows } from './MssLoaRequestWorkflows';

/**
 * Request builder class for operations supported on the {@link MssLoaRequestWorkflows} entity.
 */
export class MssLoaRequestWorkflowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MssLoaRequestWorkflows<T>, T> {
  /**
   * Returns a request builder for querying all `MssLoaRequestWorkflows` entities.
   * @returns A request builder for creating requests to retrieve all `MssLoaRequestWorkflows` entities.
   */
  getAll(): GetAllRequestBuilder<MssLoaRequestWorkflows<T>, T> {
    return new GetAllRequestBuilder<MssLoaRequestWorkflows<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MssLoaRequestWorkflows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MssLoaRequestWorkflows`.
   */
  create(
    entity: MssLoaRequestWorkflows<T>
  ): CreateRequestBuilder<MssLoaRequestWorkflows<T>, T> {
    return new CreateRequestBuilder<MssLoaRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MssLoaRequestWorkflows` entity based on its keys.
   * @param dataAreaId Key property. See {@link MssLoaRequestWorkflows.dataAreaId}.
   * @param requestId Key property. See {@link MssLoaRequestWorkflows.requestId}.
   * @returns A request builder for creating requests to retrieve one `MssLoaRequestWorkflows` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MssLoaRequestWorkflows<T>, T> {
    return new GetByKeyRequestBuilder<MssLoaRequestWorkflows<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MssLoaRequestWorkflows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MssLoaRequestWorkflows`.
   */
  update(
    entity: MssLoaRequestWorkflows<T>
  ): UpdateRequestBuilder<MssLoaRequestWorkflows<T>, T> {
    return new UpdateRequestBuilder<MssLoaRequestWorkflows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MssLoaRequestWorkflows`.
   * @param dataAreaId Key property. See {@link MssLoaRequestWorkflows.dataAreaId}.
   * @param requestId Key property. See {@link MssLoaRequestWorkflows.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `MssLoaRequestWorkflows`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<MssLoaRequestWorkflows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MssLoaRequestWorkflows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MssLoaRequestWorkflows` by taking the entity as a parameter.
   */
  delete(
    entity: MssLoaRequestWorkflows<T>
  ): DeleteRequestBuilder<MssLoaRequestWorkflows<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<MssLoaRequestWorkflows<T>, T> {
    return new DeleteRequestBuilder<MssLoaRequestWorkflows<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MssLoaRequestWorkflows
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
