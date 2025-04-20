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
import { HoursWorked } from './HoursWorked';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';

/**
 * Request builder class for operations supported on the {@link HoursWorked} entity.
 */
export class HoursWorkedRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HoursWorked<T>, T> {
  /**
   * Returns a request builder for querying all `HoursWorked` entities.
   * @returns A request builder for creating requests to retrieve all `HoursWorked` entities.
   */
  getAll(): GetAllRequestBuilder<HoursWorked<T>, T> {
    return new GetAllRequestBuilder<HoursWorked<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HoursWorked` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HoursWorked`.
   */
  create(entity: HoursWorked<T>): CreateRequestBuilder<HoursWorked<T>, T> {
    return new CreateRequestBuilder<HoursWorked<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `HoursWorked` entity based on its keys.
   * @param dataAreaId Key property. See {@link HoursWorked.dataAreaId}.
   * @param personnelNumber Key property. See {@link HoursWorked.personnelNumber}.
   * @param dateWorked Key property. See {@link HoursWorked.dateWorked}.
   * @param type Key property. See {@link HoursWorked.type}.
   * @returns A request builder for creating requests to retrieve one `HoursWorked` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    dateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LeaveHoursWorkedType'
    >
  ): GetByKeyRequestBuilder<HoursWorked<T>, T> {
    return new GetByKeyRequestBuilder<HoursWorked<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      DateWorked: dateWorked,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HoursWorked`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HoursWorked`.
   */
  update(entity: HoursWorked<T>): UpdateRequestBuilder<HoursWorked<T>, T> {
    return new UpdateRequestBuilder<HoursWorked<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `HoursWorked`.
   * @param dataAreaId Key property. See {@link HoursWorked.dataAreaId}.
   * @param personnelNumber Key property. See {@link HoursWorked.personnelNumber}.
   * @param dateWorked Key property. See {@link HoursWorked.dateWorked}.
   * @param type Key property. See {@link HoursWorked.type}.
   * @returns A request builder for creating requests that delete an entity of type `HoursWorked`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    dateWorked: Moment,
    type: LeaveHoursWorkedType
  ): DeleteRequestBuilder<HoursWorked<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HoursWorked`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HoursWorked` by taking the entity as a parameter.
   */
  delete(entity: HoursWorked<T>): DeleteRequestBuilder<HoursWorked<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    dateWorked?: Moment,
    type?: LeaveHoursWorkedType
  ): DeleteRequestBuilder<HoursWorked<T>, T> {
    return new DeleteRequestBuilder<HoursWorked<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof HoursWorked
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            DateWorked: dateWorked!,
            Type: type!
          }
    );
  }
}
