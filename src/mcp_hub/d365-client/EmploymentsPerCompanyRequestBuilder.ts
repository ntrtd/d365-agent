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
import { EmploymentsPerCompany } from './EmploymentsPerCompany';

/**
 * Request builder class for operations supported on the {@link EmploymentsPerCompany} entity.
 */
export class EmploymentsPerCompanyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentsPerCompany<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentsPerCompany` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentsPerCompany` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentsPerCompany<T>, T> {
    return new GetAllRequestBuilder<EmploymentsPerCompany<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmploymentsPerCompany` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentsPerCompany`.
   */
  create(
    entity: EmploymentsPerCompany<T>
  ): CreateRequestBuilder<EmploymentsPerCompany<T>, T> {
    return new CreateRequestBuilder<EmploymentsPerCompany<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentsPerCompany` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmploymentsPerCompany.dataAreaId}.
   * @param personnelNumber Key property. See {@link EmploymentsPerCompany.personnelNumber}.
   * @param employmentStartDate Key property. See {@link EmploymentsPerCompany.employmentStartDate}.
   * @returns A request builder for creating requests to retrieve one `EmploymentsPerCompany` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentsPerCompany<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentsPerCompany<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        EmploymentStartDate: employmentStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentsPerCompany`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentsPerCompany`.
   */
  update(
    entity: EmploymentsPerCompany<T>
  ): UpdateRequestBuilder<EmploymentsPerCompany<T>, T> {
    return new UpdateRequestBuilder<EmploymentsPerCompany<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentsPerCompany`.
   * @param dataAreaId Key property. See {@link EmploymentsPerCompany.dataAreaId}.
   * @param personnelNumber Key property. See {@link EmploymentsPerCompany.personnelNumber}.
   * @param employmentStartDate Key property. See {@link EmploymentsPerCompany.employmentStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentsPerCompany`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    employmentStartDate: Moment
  ): DeleteRequestBuilder<EmploymentsPerCompany<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentsPerCompany`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentsPerCompany` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentsPerCompany<T>
  ): DeleteRequestBuilder<EmploymentsPerCompany<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    employmentStartDate?: Moment
  ): DeleteRequestBuilder<EmploymentsPerCompany<T>, T> {
    return new DeleteRequestBuilder<EmploymentsPerCompany<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmploymentsPerCompany
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            EmploymentStartDate: employmentStartDate!
          }
    );
  }
}
