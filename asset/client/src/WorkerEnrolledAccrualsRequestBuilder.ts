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
import { WorkerEnrolledAccruals } from './WorkerEnrolledAccruals';

/**
 * Request builder class for operations supported on the {@link WorkerEnrolledAccruals} entity.
 */
export class WorkerEnrolledAccrualsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEnrolledAccruals<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEnrolledAccruals` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEnrolledAccruals` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEnrolledAccruals<T>, T> {
    return new GetAllRequestBuilder<WorkerEnrolledAccruals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerEnrolledAccruals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEnrolledAccruals`.
   */
  create(
    entity: WorkerEnrolledAccruals<T>
  ): CreateRequestBuilder<WorkerEnrolledAccruals<T>, T> {
    return new CreateRequestBuilder<WorkerEnrolledAccruals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEnrolledAccruals` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerEnrolledAccruals.dataAreaId}.
   * @param accrualId Key property. See {@link WorkerEnrolledAccruals.accrualId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledAccruals.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerEnrolledAccruals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accrualId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerEnrolledAccruals<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEnrolledAccruals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccrualId: accrualId,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEnrolledAccruals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEnrolledAccruals`.
   */
  update(
    entity: WorkerEnrolledAccruals<T>
  ): UpdateRequestBuilder<WorkerEnrolledAccruals<T>, T> {
    return new UpdateRequestBuilder<WorkerEnrolledAccruals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledAccruals`.
   * @param dataAreaId Key property. See {@link WorkerEnrolledAccruals.dataAreaId}.
   * @param accrualId Key property. See {@link WorkerEnrolledAccruals.accrualId}.
   * @param personnelNumber Key property. See {@link WorkerEnrolledAccruals.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledAccruals`.
   */
  delete(
    dataAreaId: string,
    accrualId: string,
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerEnrolledAccruals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEnrolledAccruals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEnrolledAccruals` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEnrolledAccruals<T>
  ): DeleteRequestBuilder<WorkerEnrolledAccruals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accrualId?: string,
    personnelNumber?: string
  ): DeleteRequestBuilder<WorkerEnrolledAccruals<T>, T> {
    return new DeleteRequestBuilder<WorkerEnrolledAccruals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerEnrolledAccruals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccrualId: accrualId!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
