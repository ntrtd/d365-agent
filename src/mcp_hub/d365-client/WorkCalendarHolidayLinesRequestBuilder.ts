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
import { WorkCalendarHolidayLines } from './WorkCalendarHolidayLines';

/**
 * Request builder class for operations supported on the {@link WorkCalendarHolidayLines} entity.
 */
export class WorkCalendarHolidayLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendarHolidayLines<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendarHolidayLines` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendarHolidayLines` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendarHolidayLines<T>, T> {
    return new GetAllRequestBuilder<WorkCalendarHolidayLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkCalendarHolidayLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendarHolidayLines`.
   */
  create(
    entity: WorkCalendarHolidayLines<T>
  ): CreateRequestBuilder<WorkCalendarHolidayLines<T>, T> {
    return new CreateRequestBuilder<WorkCalendarHolidayLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendarHolidayLines` entity based on its keys.
   * @param holidayId Key property. See {@link WorkCalendarHolidayLines.holidayId}.
   * @param holidayDate Key property. See {@link WorkCalendarHolidayLines.holidayDate}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendarHolidayLines` entity based on its keys.
   */
  getByKey(
    holidayId: DeserializedType<T, 'Edm.String'>,
    holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkCalendarHolidayLines<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendarHolidayLines<T>, T>(
      this.entityApi,
      {
        HolidayId: holidayId,
        HolidayDate: holidayDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendarHolidayLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendarHolidayLines`.
   */
  update(
    entity: WorkCalendarHolidayLines<T>
  ): UpdateRequestBuilder<WorkCalendarHolidayLines<T>, T> {
    return new UpdateRequestBuilder<WorkCalendarHolidayLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarHolidayLines`.
   * @param holidayId Key property. See {@link WorkCalendarHolidayLines.holidayId}.
   * @param holidayDate Key property. See {@link WorkCalendarHolidayLines.holidayDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarHolidayLines`.
   */
  delete(
    holidayId: string,
    holidayDate: Moment
  ): DeleteRequestBuilder<WorkCalendarHolidayLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarHolidayLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarHolidayLines` by taking the entity as a parameter.
   */
  delete(
    entity: WorkCalendarHolidayLines<T>
  ): DeleteRequestBuilder<WorkCalendarHolidayLines<T>, T>;
  delete(
    holidayIdOrEntity: any,
    holidayDate?: Moment
  ): DeleteRequestBuilder<WorkCalendarHolidayLines<T>, T> {
    return new DeleteRequestBuilder<WorkCalendarHolidayLines<T>, T>(
      this.entityApi,
      holidayIdOrEntity instanceof WorkCalendarHolidayLines
        ? holidayIdOrEntity
        : {
            HolidayId: holidayIdOrEntity!,
            HolidayDate: holidayDate!
          }
    );
  }
}
