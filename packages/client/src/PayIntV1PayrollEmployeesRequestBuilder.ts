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
import { PayIntV1PayrollEmployees } from './PayIntV1PayrollEmployees';

/**
 * Request builder class for operations supported on the {@link PayIntV1PayrollEmployees} entity.
 */
export class PayIntV1PayrollEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PayrollEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PayrollEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PayrollEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PayrollEmployees<T>, T> {
    return new GetAllRequestBuilder<PayIntV1PayrollEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1PayrollEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PayrollEmployees`.
   */
  create(
    entity: PayIntV1PayrollEmployees<T>
  ): CreateRequestBuilder<PayIntV1PayrollEmployees<T>, T> {
    return new CreateRequestBuilder<PayIntV1PayrollEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PayrollEmployees` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1PayrollEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1PayrollEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayIntV1PayrollEmployees.employmentStartDate}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PayrollEmployees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1PayrollEmployees<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1PayrollEmployees<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentStartDate: employmentStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PayrollEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PayrollEmployees`.
   */
  update(
    entity: PayIntV1PayrollEmployees<T>
  ): UpdateRequestBuilder<PayIntV1PayrollEmployees<T>, T> {
    return new UpdateRequestBuilder<PayIntV1PayrollEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollEmployees`.
   * @param personnelNumber Key property. See {@link PayIntV1PayrollEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1PayrollEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayIntV1PayrollEmployees.employmentStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollEmployees`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PayrollEmployees<T>
  ): DeleteRequestBuilder<PayIntV1PayrollEmployees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment
  ): DeleteRequestBuilder<PayIntV1PayrollEmployees<T>, T> {
    return new DeleteRequestBuilder<PayIntV1PayrollEmployees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1PayrollEmployees
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!
          }
    );
  }
}
