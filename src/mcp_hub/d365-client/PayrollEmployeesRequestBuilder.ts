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
import { PayrollEmployees } from './PayrollEmployees';

/**
 * Request builder class for operations supported on the {@link PayrollEmployees} entity.
 */
export class PayrollEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollEmployees<T>, T> {
    return new GetAllRequestBuilder<PayrollEmployees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollEmployees`.
   */
  create(
    entity: PayrollEmployees<T>
  ): CreateRequestBuilder<PayrollEmployees<T>, T> {
    return new CreateRequestBuilder<PayrollEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollEmployees` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayrollEmployees.employmentStartDate}.
   * @returns A request builder for creating requests to retrieve one `PayrollEmployees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollEmployees<T>, T> {
    return new GetByKeyRequestBuilder<PayrollEmployees<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      LegalEntityId: legalEntityId,
      EmploymentStartDate: employmentStartDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollEmployees`.
   */
  update(
    entity: PayrollEmployees<T>
  ): UpdateRequestBuilder<PayrollEmployees<T>, T> {
    return new UpdateRequestBuilder<PayrollEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollEmployees`.
   * @param dataAreaId Key property. See {@link PayrollEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollEmployees.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayrollEmployees.employmentStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollEmployees`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment
  ): DeleteRequestBuilder<PayrollEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollEmployees<T>
  ): DeleteRequestBuilder<PayrollEmployees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    legalEntityId?: string,
    employmentStartDate?: Moment
  ): DeleteRequestBuilder<PayrollEmployees<T>, T> {
    return new DeleteRequestBuilder<PayrollEmployees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollEmployees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!
          }
    );
  }
}
