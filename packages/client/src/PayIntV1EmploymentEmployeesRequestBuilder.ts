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
import { PayIntV1EmploymentEmployees } from './PayIntV1EmploymentEmployees';

/**
 * Request builder class for operations supported on the {@link PayIntV1EmploymentEmployees} entity.
 */
export class PayIntV1EmploymentEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1EmploymentEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1EmploymentEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
    return new GetAllRequestBuilder<PayIntV1EmploymentEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1EmploymentEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1EmploymentEmployees`.
   */
  create(
    entity: PayIntV1EmploymentEmployees<T>
  ): CreateRequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
    return new CreateRequestBuilder<PayIntV1EmploymentEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1EmploymentEmployees` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentEmployees.legalEntityId}.
   * @param employmentEndDate Key property. See {@link PayIntV1EmploymentEmployees.employmentEndDate}.
   * @param employmentStartDate Key property. See {@link PayIntV1EmploymentEmployees.employmentStartDate}.
   * @param validFrom Key property. See {@link PayIntV1EmploymentEmployees.validFrom}.
   * @param validTo Key property. See {@link PayIntV1EmploymentEmployees.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1EmploymentEmployees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1EmploymentEmployees<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentEndDate: employmentEndDate,
        EmploymentStartDate: employmentStartDate,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1EmploymentEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1EmploymentEmployees`.
   */
  update(
    entity: PayIntV1EmploymentEmployees<T>
  ): UpdateRequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
    return new UpdateRequestBuilder<PayIntV1EmploymentEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentEmployees`.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentEmployees.legalEntityId}.
   * @param employmentEndDate Key property. See {@link PayIntV1EmploymentEmployees.employmentEndDate}.
   * @param employmentStartDate Key property. See {@link PayIntV1EmploymentEmployees.employmentStartDate}.
   * @param validFrom Key property. See {@link PayIntV1EmploymentEmployees.validFrom}.
   * @param validTo Key property. See {@link PayIntV1EmploymentEmployees.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentEmployees`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentEndDate: Moment,
    employmentStartDate: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1EmploymentEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1EmploymentEmployees<T>
  ): DeleteRequestBuilder<PayIntV1EmploymentEmployees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentEndDate?: Moment,
    employmentStartDate?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1EmploymentEmployees<T>, T> {
    return new DeleteRequestBuilder<PayIntV1EmploymentEmployees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1EmploymentEmployees
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentEndDate: employmentEndDate!,
            EmploymentStartDate: employmentStartDate!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
