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
import { WorkCalendarEmployments } from './WorkCalendarEmployments';

/**
 * Request builder class for operations supported on the {@link WorkCalendarEmployments} entity.
 */
export class WorkCalendarEmploymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendarEmployments<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendarEmployments` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendarEmployments` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendarEmployments<T>, T> {
    return new GetAllRequestBuilder<WorkCalendarEmployments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkCalendarEmployments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendarEmployments`.
   */
  create(
    entity: WorkCalendarEmployments<T>
  ): CreateRequestBuilder<WorkCalendarEmployments<T>, T> {
    return new CreateRequestBuilder<WorkCalendarEmployments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendarEmployments` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkCalendarEmployments.dataAreaId}.
   * @param personnelNumber Key property. See {@link WorkCalendarEmployments.personnelNumber}.
   * @param startDate Key property. See {@link WorkCalendarEmployments.startDate}.
   * @param companyId Key property. See {@link WorkCalendarEmployments.companyId}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendarEmployments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    companyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkCalendarEmployments<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendarEmployments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        StartDate: startDate,
        CompanyId: companyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendarEmployments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendarEmployments`.
   */
  update(
    entity: WorkCalendarEmployments<T>
  ): UpdateRequestBuilder<WorkCalendarEmployments<T>, T> {
    return new UpdateRequestBuilder<WorkCalendarEmployments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarEmployments`.
   * @param dataAreaId Key property. See {@link WorkCalendarEmployments.dataAreaId}.
   * @param personnelNumber Key property. See {@link WorkCalendarEmployments.personnelNumber}.
   * @param startDate Key property. See {@link WorkCalendarEmployments.startDate}.
   * @param companyId Key property. See {@link WorkCalendarEmployments.companyId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarEmployments`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    startDate: Moment,
    companyId: string
  ): DeleteRequestBuilder<WorkCalendarEmployments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarEmployments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarEmployments` by taking the entity as a parameter.
   */
  delete(
    entity: WorkCalendarEmployments<T>
  ): DeleteRequestBuilder<WorkCalendarEmployments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    startDate?: Moment,
    companyId?: string
  ): DeleteRequestBuilder<WorkCalendarEmployments<T>, T> {
    return new DeleteRequestBuilder<WorkCalendarEmployments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkCalendarEmployments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            StartDate: startDate!,
            CompanyId: companyId!
          }
    );
  }
}
