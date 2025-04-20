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
import { EmployeesV2 } from './EmployeesV2';

/**
 * Request builder class for operations supported on the {@link EmployeesV2} entity.
 */
export class EmployeesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeesV2<T>, T> {
  /**
   * Returns a request builder for querying all `EmployeesV2` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeesV2` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeesV2<T>, T> {
    return new GetAllRequestBuilder<EmployeesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeesV2`.
   */
  create(entity: EmployeesV2<T>): CreateRequestBuilder<EmployeesV2<T>, T> {
    return new CreateRequestBuilder<EmployeesV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EmployeesV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmployeesV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link EmployeesV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link EmployeesV2.employmentId}.
   * @returns A request builder for creating requests to retrieve one `EmployeesV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmployeesV2<T>, T> {
    return new GetByKeyRequestBuilder<EmployeesV2<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      EmploymentLegalEntityId: employmentLegalEntityId,
      EmploymentId: employmentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeesV2`.
   */
  update(entity: EmployeesV2<T>): UpdateRequestBuilder<EmployeesV2<T>, T> {
    return new UpdateRequestBuilder<EmployeesV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeesV2`.
   * @param personnelNumber Key property. See {@link EmployeesV2.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link EmployeesV2.employmentLegalEntityId}.
   * @param employmentId Key property. See {@link EmployeesV2.employmentId}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeesV2`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentId: string
  ): DeleteRequestBuilder<EmployeesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeesV2` by taking the entity as a parameter.
   */
  delete(entity: EmployeesV2<T>): DeleteRequestBuilder<EmployeesV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentId?: string
  ): DeleteRequestBuilder<EmployeesV2<T>, T> {
    return new DeleteRequestBuilder<EmployeesV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmployeesV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentId: employmentId!
          }
    );
  }
}
