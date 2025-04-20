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
import { LeaveEnrollments } from './LeaveEnrollments';

/**
 * Request builder class for operations supported on the {@link LeaveEnrollments} entity.
 */
export class LeaveEnrollmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveEnrollments<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveEnrollments` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveEnrollments` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveEnrollments<T>, T> {
    return new GetAllRequestBuilder<LeaveEnrollments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveEnrollments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveEnrollments`.
   */
  create(
    entity: LeaveEnrollments<T>
  ): CreateRequestBuilder<LeaveEnrollments<T>, T> {
    return new CreateRequestBuilder<LeaveEnrollments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveEnrollments` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveEnrollments.personnelNumber}.
   * @param leavePlanId Key property. See {@link LeaveEnrollments.leavePlanId}.
   * @param startDate Key property. See {@link LeaveEnrollments.startDate}.
   * @returns A request builder for creating requests to retrieve one `LeaveEnrollments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leavePlanId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaveEnrollments<T>, T> {
    return new GetByKeyRequestBuilder<LeaveEnrollments<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      LeavePlanId: leavePlanId,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveEnrollments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveEnrollments`.
   */
  update(
    entity: LeaveEnrollments<T>
  ): UpdateRequestBuilder<LeaveEnrollments<T>, T> {
    return new UpdateRequestBuilder<LeaveEnrollments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveEnrollments`.
   * @param dataAreaId Key property. See {@link LeaveEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveEnrollments.personnelNumber}.
   * @param leavePlanId Key property. See {@link LeaveEnrollments.leavePlanId}.
   * @param startDate Key property. See {@link LeaveEnrollments.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveEnrollments`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leavePlanId: string,
    startDate: Moment
  ): DeleteRequestBuilder<LeaveEnrollments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveEnrollments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveEnrollments` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveEnrollments<T>
  ): DeleteRequestBuilder<LeaveEnrollments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leavePlanId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<LeaveEnrollments<T>, T> {
    return new DeleteRequestBuilder<LeaveEnrollments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveEnrollments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LeavePlanId: leavePlanId!,
            StartDate: startDate!
          }
    );
  }
}
