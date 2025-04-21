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
import { Employees } from './Employees';

/**
 * Request builder class for operations supported on the {@link Employees} entity.
 */
export class EmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Employees<T>, T> {
  /**
   * Returns a request builder for querying all `Employees` entities.
   * @returns A request builder for creating requests to retrieve all `Employees` entities.
   */
  getAll(): GetAllRequestBuilder<Employees<T>, T> {
    return new GetAllRequestBuilder<Employees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Employees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Employees`.
   */
  create(entity: Employees<T>): CreateRequestBuilder<Employees<T>, T> {
    return new CreateRequestBuilder<Employees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Employees` entity based on its keys.
   * @param personnelNumber Key property. See {@link Employees.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link Employees.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link Employees.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Employees.employmentEndDate}.
   * @returns A request builder for creating requests to retrieve one `Employees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Employees<T>, T> {
    return new GetByKeyRequestBuilder<Employees<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      EmploymentLegalEntityId: employmentLegalEntityId,
      EmploymentStartDate: employmentStartDate,
      EmploymentEndDate: employmentEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Employees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Employees`.
   */
  update(entity: Employees<T>): UpdateRequestBuilder<Employees<T>, T> {
    return new UpdateRequestBuilder<Employees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Employees`.
   * @param personnelNumber Key property. See {@link Employees.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link Employees.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link Employees.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Employees.employmentEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `Employees`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment
  ): DeleteRequestBuilder<Employees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Employees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Employees` by taking the entity as a parameter.
   */
  delete(entity: Employees<T>): DeleteRequestBuilder<Employees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment
  ): DeleteRequestBuilder<Employees<T>, T> {
    return new DeleteRequestBuilder<Employees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof Employees
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!
          }
    );
  }
}
