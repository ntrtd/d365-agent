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
import { EssLeaveApprovedRequests } from './EssLeaveApprovedRequests';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';

/**
 * Request builder class for operations supported on the {@link EssLeaveApprovedRequests} entity.
 */
export class EssLeaveApprovedRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveApprovedRequests<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveApprovedRequests` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveApprovedRequests` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveApprovedRequests<T>, T> {
    return new GetAllRequestBuilder<EssLeaveApprovedRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveApprovedRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveApprovedRequests`.
   */
  create(
    entity: EssLeaveApprovedRequests<T>
  ): CreateRequestBuilder<EssLeaveApprovedRequests<T>, T> {
    return new CreateRequestBuilder<EssLeaveApprovedRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveApprovedRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveApprovedRequests.dataAreaId}.
   * @param startDate Key property. See {@link EssLeaveApprovedRequests.startDate}.
   * @param endDate Key property. See {@link EssLeaveApprovedRequests.endDate}.
   * @param requestType Key property. See {@link EssLeaveApprovedRequests.requestType}.
   * @param personnelNumber Key property. See {@link EssLeaveApprovedRequests.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveApprovedRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    requestType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LeaveTypeRequestType'
    >,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveApprovedRequests<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveApprovedRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StartDate: startDate,
        EndDate: endDate,
        RequestType: requestType,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveApprovedRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveApprovedRequests`.
   */
  update(
    entity: EssLeaveApprovedRequests<T>
  ): UpdateRequestBuilder<EssLeaveApprovedRequests<T>, T> {
    return new UpdateRequestBuilder<EssLeaveApprovedRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveApprovedRequests`.
   * @param dataAreaId Key property. See {@link EssLeaveApprovedRequests.dataAreaId}.
   * @param startDate Key property. See {@link EssLeaveApprovedRequests.startDate}.
   * @param endDate Key property. See {@link EssLeaveApprovedRequests.endDate}.
   * @param requestType Key property. See {@link EssLeaveApprovedRequests.requestType}.
   * @param personnelNumber Key property. See {@link EssLeaveApprovedRequests.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveApprovedRequests`.
   */
  delete(
    dataAreaId: string,
    startDate: Moment,
    endDate: Moment,
    requestType: LeaveTypeRequestType,
    personnelNumber: string
  ): DeleteRequestBuilder<EssLeaveApprovedRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveApprovedRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveApprovedRequests` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveApprovedRequests<T>
  ): DeleteRequestBuilder<EssLeaveApprovedRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    startDate?: Moment,
    endDate?: Moment,
    requestType?: LeaveTypeRequestType,
    personnelNumber?: string
  ): DeleteRequestBuilder<EssLeaveApprovedRequests<T>, T> {
    return new DeleteRequestBuilder<EssLeaveApprovedRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveApprovedRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StartDate: startDate!,
            EndDate: endDate!,
            RequestType: requestType!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
