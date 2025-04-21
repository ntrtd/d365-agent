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
import { PayrollEmployeesV2 } from './PayrollEmployeesV2';

/**
 * Request builder class for operations supported on the {@link PayrollEmployeesV2} entity.
 */
export class PayrollEmployeesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollEmployeesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollEmployeesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollEmployeesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollEmployeesV2<T>, T> {
    return new GetAllRequestBuilder<PayrollEmployeesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollEmployeesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollEmployeesV2`.
   */
  create(
    entity: PayrollEmployeesV2<T>
  ): CreateRequestBuilder<PayrollEmployeesV2<T>, T> {
    return new CreateRequestBuilder<PayrollEmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollEmployeesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollEmployeesV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollEmployeesV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollEmployeesV2.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayrollEmployeesV2.employmentStartDate}.
   * @returns A request builder for creating requests to retrieve one `PayrollEmployeesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollEmployeesV2<T>, T> {
    return new GetByKeyRequestBuilder<PayrollEmployeesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentStartDate: employmentStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollEmployeesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollEmployeesV2`.
   */
  update(
    entity: PayrollEmployeesV2<T>
  ): UpdateRequestBuilder<PayrollEmployeesV2<T>, T> {
    return new UpdateRequestBuilder<PayrollEmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollEmployeesV2`.
   * @param dataAreaId Key property. See {@link PayrollEmployeesV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollEmployeesV2.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollEmployeesV2.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayrollEmployeesV2.employmentStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollEmployeesV2`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment
  ): DeleteRequestBuilder<PayrollEmployeesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollEmployeesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollEmployeesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollEmployeesV2<T>
  ): DeleteRequestBuilder<PayrollEmployeesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    legalEntityId?: string,
    employmentStartDate?: Moment
  ): DeleteRequestBuilder<PayrollEmployeesV2<T>, T> {
    return new DeleteRequestBuilder<PayrollEmployeesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollEmployeesV2
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
