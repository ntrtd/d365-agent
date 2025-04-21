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
import { WorkerPayrollInfoes } from './WorkerPayrollInfoes';

/**
 * Request builder class for operations supported on the {@link WorkerPayrollInfoes} entity.
 */
export class WorkerPayrollInfoesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPayrollInfoes<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPayrollInfoes` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPayrollInfoes` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPayrollInfoes<T>, T> {
    return new GetAllRequestBuilder<WorkerPayrollInfoes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerPayrollInfoes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPayrollInfoes`.
   */
  create(
    entity: WorkerPayrollInfoes<T>
  ): CreateRequestBuilder<WorkerPayrollInfoes<T>, T> {
    return new CreateRequestBuilder<WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPayrollInfoes` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerPayrollInfoes.dataAreaId}.
   * @param company Key property. See {@link WorkerPayrollInfoes.company}.
   * @param personnelNumber Key property. See {@link WorkerPayrollInfoes.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerPayrollInfoes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerPayrollInfoes<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Company: company,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPayrollInfoes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPayrollInfoes`.
   */
  update(
    entity: WorkerPayrollInfoes<T>
  ): UpdateRequestBuilder<WorkerPayrollInfoes<T>, T> {
    return new UpdateRequestBuilder<WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPayrollInfoes`.
   * @param dataAreaId Key property. See {@link WorkerPayrollInfoes.dataAreaId}.
   * @param company Key property. See {@link WorkerPayrollInfoes.company}.
   * @param personnelNumber Key property. See {@link WorkerPayrollInfoes.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPayrollInfoes`.
   */
  delete(
    dataAreaId: string,
    company: string,
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerPayrollInfoes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPayrollInfoes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPayrollInfoes` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPayrollInfoes<T>
  ): DeleteRequestBuilder<WorkerPayrollInfoes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    company?: string,
    personnelNumber?: string
  ): DeleteRequestBuilder<WorkerPayrollInfoes<T>, T> {
    return new DeleteRequestBuilder<WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerPayrollInfoes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Company: company!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
