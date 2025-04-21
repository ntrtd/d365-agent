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
import { EmploymentEmployees } from './EmploymentEmployees';

/**
 * Request builder class for operations supported on the {@link EmploymentEmployees} entity.
 */
export class EmploymentEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentEmployees<T>, T> {
    return new GetAllRequestBuilder<EmploymentEmployees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentEmployees`.
   */
  create(
    entity: EmploymentEmployees<T>
  ): CreateRequestBuilder<EmploymentEmployees<T>, T> {
    return new CreateRequestBuilder<EmploymentEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentEmployees` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentEmployees.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentEmployees.employmentEndDate}.
   * @param validFrom Key property. See {@link EmploymentEmployees.validFrom}.
   * @param validTo Key property. See {@link EmploymentEmployees.validTo}.
   * @returns A request builder for creating requests to retrieve one `EmploymentEmployees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentEmployees<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentEmployees<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentStartDate: employmentStartDate,
        EmploymentEndDate: employmentEndDate,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentEmployees`.
   */
  update(
    entity: EmploymentEmployees<T>
  ): UpdateRequestBuilder<EmploymentEmployees<T>, T> {
    return new UpdateRequestBuilder<EmploymentEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentEmployees`.
   * @param personnelNumber Key property. See {@link EmploymentEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentEmployees.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentEmployees.employmentEndDate}.
   * @param validFrom Key property. See {@link EmploymentEmployees.validFrom}.
   * @param validTo Key property. See {@link EmploymentEmployees.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentEmployees`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<EmploymentEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentEmployees<T>
  ): DeleteRequestBuilder<EmploymentEmployees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<EmploymentEmployees<T>, T> {
    return new DeleteRequestBuilder<EmploymentEmployees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentEmployees
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
