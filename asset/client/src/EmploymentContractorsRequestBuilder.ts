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
import { EmploymentContractors } from './EmploymentContractors';

/**
 * Request builder class for operations supported on the {@link EmploymentContractors} entity.
 */
export class EmploymentContractorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentContractors<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentContractors` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentContractors` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentContractors<T>, T> {
    return new GetAllRequestBuilder<EmploymentContractors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmploymentContractors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentContractors`.
   */
  create(
    entity: EmploymentContractors<T>
  ): CreateRequestBuilder<EmploymentContractors<T>, T> {
    return new CreateRequestBuilder<EmploymentContractors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentContractors` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentContractors.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link EmploymentContractors.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentContractors.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentContractors.employmentEndDate}.
   * @param startDate Key property. See {@link EmploymentContractors.startDate}.
   * @param endDate Key property. See {@link EmploymentContractors.endDate}.
   * @returns A request builder for creating requests to retrieve one `EmploymentContractors` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentContractors<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentContractors<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        EmploymentLegalEntityId: employmentLegalEntityId,
        EmploymentStartDate: employmentStartDate,
        EmploymentEndDate: employmentEndDate,
        StartDate: startDate,
        EndDate: endDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentContractors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentContractors`.
   */
  update(
    entity: EmploymentContractors<T>
  ): UpdateRequestBuilder<EmploymentContractors<T>, T> {
    return new UpdateRequestBuilder<EmploymentContractors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentContractors`.
   * @param personnelNumber Key property. See {@link EmploymentContractors.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link EmploymentContractors.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentContractors.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentContractors.employmentEndDate}.
   * @param startDate Key property. See {@link EmploymentContractors.startDate}.
   * @param endDate Key property. See {@link EmploymentContractors.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentContractors`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<EmploymentContractors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentContractors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentContractors` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentContractors<T>
  ): DeleteRequestBuilder<EmploymentContractors<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<EmploymentContractors<T>, T> {
    return new DeleteRequestBuilder<EmploymentContractors<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentContractors
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
