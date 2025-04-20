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
import { HcmWorkerAdvHolderTables } from './HcmWorkerAdvHolderTables';

/**
 * Request builder class for operations supported on the {@link HcmWorkerAdvHolderTables} entity.
 */
export class HcmWorkerAdvHolderTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
  /**
   * Returns a request builder for querying all `HcmWorkerAdvHolderTables` entities.
   * @returns A request builder for creating requests to retrieve all `HcmWorkerAdvHolderTables` entities.
   */
  getAll(): GetAllRequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
    return new GetAllRequestBuilder<HcmWorkerAdvHolderTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HcmWorkerAdvHolderTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmWorkerAdvHolderTables`.
   */
  create(
    entity: HcmWorkerAdvHolderTables<T>
  ): CreateRequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
    return new CreateRequestBuilder<HcmWorkerAdvHolderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmWorkerAdvHolderTables` entity based on its keys.
   * @param employeeId Key property. See {@link HcmWorkerAdvHolderTables.employeeId}.
   * @param personnelNumber Key property. See {@link HcmWorkerAdvHolderTables.personnelNumber}.
   * @param company Key property. See {@link HcmWorkerAdvHolderTables.company}.
   * @param validFrom Key property. See {@link HcmWorkerAdvHolderTables.validFrom}.
   * @param validTo Key property. See {@link HcmWorkerAdvHolderTables.validTo}.
   * @returns A request builder for creating requests to retrieve one `HcmWorkerAdvHolderTables` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
    return new GetByKeyRequestBuilder<HcmWorkerAdvHolderTables<T>, T>(
      this.entityApi,
      {
        EmployeeId: employeeId,
        PersonnelNumber: personnelNumber,
        Company: company,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmWorkerAdvHolderTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmWorkerAdvHolderTables`.
   */
  update(
    entity: HcmWorkerAdvHolderTables<T>
  ): UpdateRequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
    return new UpdateRequestBuilder<HcmWorkerAdvHolderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerAdvHolderTables`.
   * @param employeeId Key property. See {@link HcmWorkerAdvHolderTables.employeeId}.
   * @param personnelNumber Key property. See {@link HcmWorkerAdvHolderTables.personnelNumber}.
   * @param company Key property. See {@link HcmWorkerAdvHolderTables.company}.
   * @param validFrom Key property. See {@link HcmWorkerAdvHolderTables.validFrom}.
   * @param validTo Key property. See {@link HcmWorkerAdvHolderTables.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerAdvHolderTables`.
   */
  delete(
    employeeId: string,
    personnelNumber: string,
    company: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<HcmWorkerAdvHolderTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerAdvHolderTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerAdvHolderTables` by taking the entity as a parameter.
   */
  delete(
    entity: HcmWorkerAdvHolderTables<T>
  ): DeleteRequestBuilder<HcmWorkerAdvHolderTables<T>, T>;
  delete(
    employeeIdOrEntity: any,
    personnelNumber?: string,
    company?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<HcmWorkerAdvHolderTables<T>, T> {
    return new DeleteRequestBuilder<HcmWorkerAdvHolderTables<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof HcmWorkerAdvHolderTables
        ? employeeIdOrEntity
        : {
            EmployeeId: employeeIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            Company: company!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
