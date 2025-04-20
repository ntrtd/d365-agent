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
import { WorkerEnrolledAccrualInquiries } from './WorkerEnrolledAccrualInquiries';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledAccrualInquiries} entity.
 */
export class WorkerEnrolledAccrualInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledAccrualInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledAccrualInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledAccrualInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledAccrualInquiries`.
   */
  create(
    entity: WorkerEnrolledAccrualInquiries<T>
  ): CreateRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledAccrualInquiries` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerEnrolledAccrualInquiries.dataAreaId}.
   * @param workerName Key property. See {@link WorkerEnrolledAccrualInquiries.workerName}.
   * @param accrualId Key property. See {@link WorkerEnrolledAccrualInquiries.accrualId}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledAccrualInquiries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerName: DeserializedType<T, 'Edm.String'>,
    accrualId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkerName: workerName,
        AccrualId: accrualId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledAccrualInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledAccrualInquiries`.
   */
  update(
    entity: WorkerEnrolledAccrualInquiries<T>
  ): UpdateRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledAccrualInquiries`.
   * @param dataAreaId Key property. See {@link WorkerEnrolledAccrualInquiries.dataAreaId}.
   * @param workerName Key property. See {@link WorkerEnrolledAccrualInquiries.workerName}.
   * @param accrualId Key property. See {@link WorkerEnrolledAccrualInquiries.accrualId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledAccrualInquiries`.
   */
  delete(
    dataAreaId: string,
    workerName: string,
    accrualId: string
  ): DeleteRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledAccrualInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledAccrualInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledAccrualInquiries<T>
  ): DeleteRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerName?: string,
    accrualId?: string
  ): DeleteRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledAccrualInquiries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerEnrolledAccrualInquiries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerName: workerName!,
            AccrualId: accrualId!
          }
    );
  }
}
