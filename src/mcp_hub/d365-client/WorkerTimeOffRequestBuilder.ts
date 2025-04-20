/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { WorkerTimeOff } from './WorkerTimeOff';

/**
 * Request builder class for operations supported on the {@link WorkerTimeOff} entity.
 */
export class WorkerTimeOffRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTimeOff<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTimeOff` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTimeOff` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTimeOff<T>, T> {
    return new GetAllRequestBuilder<WorkerTimeOff<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerTimeOff` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTimeOff`.
   */
  create(entity: WorkerTimeOff<T>): CreateRequestBuilder<WorkerTimeOff<T>, T> {
    return new CreateRequestBuilder<WorkerTimeOff<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTimeOff` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerTimeOff.personnelNumber}.
   * @param leaveDate Key property. See {@link WorkerTimeOff.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `WorkerTimeOff` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerTimeOff<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTimeOff<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LeaveDate: leaveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTimeOff`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTimeOff`.
   */
  update(entity: WorkerTimeOff<T>): UpdateRequestBuilder<WorkerTimeOff<T>, T> {
    return new UpdateRequestBuilder<WorkerTimeOff<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTimeOff`.
   * @param personnelNumber Key property. See {@link WorkerTimeOff.personnelNumber}.
   * @param leaveDate Key property. See {@link WorkerTimeOff.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTimeOff`.
   */
  delete(
    personnelNumber: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<WorkerTimeOff<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTimeOff`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTimeOff` by taking the entity as a parameter.
   */
  delete(entity: WorkerTimeOff<T>): DeleteRequestBuilder<WorkerTimeOff<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    leaveDate?: Moment
  ): DeleteRequestBuilder<WorkerTimeOff<T>, T> {
    return new DeleteRequestBuilder<WorkerTimeOff<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerTimeOff
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LeaveDate: leaveDate!
          }
    );
  }
}
