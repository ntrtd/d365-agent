/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PayIntV1EmployeesV2 } from './PayIntV1EmployeesV2';

/**
 * Request builder class for operations supported on the {@link PayIntV1EmployeesV2} entity.
 */
export class PayIntV1EmployeesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1EmployeesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1EmployeesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1EmployeesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1EmployeesV2<T>, T> {
    return new GetAllRequestBuilder<PayIntV1EmployeesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1EmployeesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1EmployeesV2`.
   */
  create(
    entity: PayIntV1EmployeesV2<T>
  ): CreateRequestBuilder<PayIntV1EmployeesV2<T>, T> {
    return new CreateRequestBuilder<PayIntV1EmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1EmployeesV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1EmployeesV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link PayIntV1EmployeesV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link PayIntV1EmployeesV2.employmentId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1EmployeesV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1EmployeesV2<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1EmployeesV2<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        EmploymentLegalEntityId: employmentLegalEntityId,
        EmploymentId: employmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1EmployeesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1EmployeesV2`.
   */
  update(
    entity: PayIntV1EmployeesV2<T>
  ): UpdateRequestBuilder<PayIntV1EmployeesV2<T>, T> {
    return new UpdateRequestBuilder<PayIntV1EmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmployeesV2`.
   * @param personnelNumber Key property. See {@link PayIntV1EmployeesV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link PayIntV1EmployeesV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link PayIntV1EmployeesV2.employmentId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmployeesV2`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentId: string
  ): DeleteRequestBuilder<PayIntV1EmployeesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmployeesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmployeesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1EmployeesV2<T>
  ): DeleteRequestBuilder<PayIntV1EmployeesV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentId?: string
  ): DeleteRequestBuilder<PayIntV1EmployeesV2<T>, T> {
    return new DeleteRequestBuilder<PayIntV1EmployeesV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1EmployeesV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentId: employmentId!
          }
    );
  }
}
