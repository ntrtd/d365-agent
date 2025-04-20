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
import { LeaveEnrollmentsV2 } from './LeaveEnrollmentsV2';

/**
 * Request builder class for operations supported on the {@link LeaveEnrollmentsV2} entity.
 */
export class LeaveEnrollmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveEnrollmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveEnrollmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveEnrollmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveEnrollmentsV2<T>, T> {
    return new GetAllRequestBuilder<LeaveEnrollmentsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveEnrollmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveEnrollmentsV2`.
   */
  create(
    entity: LeaveEnrollmentsV2<T>
  ): CreateRequestBuilder<LeaveEnrollmentsV2<T>, T> {
    return new CreateRequestBuilder<LeaveEnrollmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveEnrollmentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveEnrollmentsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveEnrollmentsV2.personnelNumber}.
   * @param leavePlanId Key property. See {@link LeaveEnrollmentsV2.leavePlanId}.
   * @param startDate Key property. See {@link LeaveEnrollmentsV2.startDate}.
   * @returns A request builder for creating requests to retrieve one `LeaveEnrollmentsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leavePlanId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaveEnrollmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<LeaveEnrollmentsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        LeavePlanId: leavePlanId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveEnrollmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveEnrollmentsV2`.
   */
  update(
    entity: LeaveEnrollmentsV2<T>
  ): UpdateRequestBuilder<LeaveEnrollmentsV2<T>, T> {
    return new UpdateRequestBuilder<LeaveEnrollmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveEnrollmentsV2`.
   * @param dataAreaId Key property. See {@link LeaveEnrollmentsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveEnrollmentsV2.personnelNumber}.
   * @param leavePlanId Key property. See {@link LeaveEnrollmentsV2.leavePlanId}.
   * @param startDate Key property. See {@link LeaveEnrollmentsV2.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveEnrollmentsV2`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leavePlanId: string,
    startDate: Moment
  ): DeleteRequestBuilder<LeaveEnrollmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveEnrollmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveEnrollmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveEnrollmentsV2<T>
  ): DeleteRequestBuilder<LeaveEnrollmentsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leavePlanId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<LeaveEnrollmentsV2<T>, T> {
    return new DeleteRequestBuilder<LeaveEnrollmentsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveEnrollmentsV2
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
