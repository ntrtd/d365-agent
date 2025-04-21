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
import { VariableCompensationEnrollmentLines } from './VariableCompensationEnrollmentLines';

/**
 * Request builder class for operations supported on the {@link VariableCompensationEnrollmentLines} entity.
 */
export class VariableCompensationEnrollmentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
  /**
   * Returns a request builder for querying all `VariableCompensationEnrollmentLines` entities.
   * @returns A request builder for creating requests to retrieve all `VariableCompensationEnrollmentLines` entities.
   */
  getAll(): GetAllRequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
    return new GetAllRequestBuilder<VariableCompensationEnrollmentLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VariableCompensationEnrollmentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VariableCompensationEnrollmentLines`.
   */
  create(
    entity: VariableCompensationEnrollmentLines<T>
  ): CreateRequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
    return new CreateRequestBuilder<VariableCompensationEnrollmentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VariableCompensationEnrollmentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollmentLines.dataAreaId}.
   * @param departmentId Key property. See {@link VariableCompensationEnrollmentLines.departmentId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollmentLines.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollmentLines.plan}.
   * @returns A request builder for creating requests to retrieve one `VariableCompensationEnrollmentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    departmentId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
    return new GetByKeyRequestBuilder<
      VariableCompensationEnrollmentLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DepartmentId: departmentId,
      PersonnelNumber: personnelNumber,
      Plan: plan
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VariableCompensationEnrollmentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VariableCompensationEnrollmentLines`.
   */
  update(
    entity: VariableCompensationEnrollmentLines<T>
  ): UpdateRequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
    return new UpdateRequestBuilder<VariableCompensationEnrollmentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollmentLines`.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollmentLines.dataAreaId}.
   * @param departmentId Key property. See {@link VariableCompensationEnrollmentLines.departmentId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollmentLines.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollmentLines.plan}.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollmentLines`.
   */
  delete(
    dataAreaId: string,
    departmentId: string,
    personnelNumber: string,
    plan: string
  ): DeleteRequestBuilder<VariableCompensationEnrollmentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollmentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollmentLines` by taking the entity as a parameter.
   */
  delete(
    entity: VariableCompensationEnrollmentLines<T>
  ): DeleteRequestBuilder<VariableCompensationEnrollmentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    departmentId?: string,
    personnelNumber?: string,
    plan?: string
  ): DeleteRequestBuilder<VariableCompensationEnrollmentLines<T>, T> {
    return new DeleteRequestBuilder<VariableCompensationEnrollmentLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VariableCompensationEnrollmentLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepartmentId: departmentId!,
            PersonnelNumber: personnelNumber!,
            Plan: plan!
          }
    );
  }
}
