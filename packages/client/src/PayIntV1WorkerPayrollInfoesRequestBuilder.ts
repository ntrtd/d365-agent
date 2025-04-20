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
import { PayIntV1WorkerPayrollInfoes } from './PayIntV1WorkerPayrollInfoes';

/**
 * Request builder class for operations supported on the {@link PayIntV1WorkerPayrollInfoes} entity.
 */
export class PayIntV1WorkerPayrollInfoesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1WorkerPayrollInfoes` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1WorkerPayrollInfoes` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
    return new GetAllRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1WorkerPayrollInfoes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1WorkerPayrollInfoes`.
   */
  create(
    entity: PayIntV1WorkerPayrollInfoes<T>
  ): CreateRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
    return new CreateRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1WorkerPayrollInfoes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1WorkerPayrollInfoes.dataAreaId}.
   * @param company Key property. See {@link PayIntV1WorkerPayrollInfoes.company}.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerPayrollInfoes.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1WorkerPayrollInfoes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Company: company,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1WorkerPayrollInfoes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1WorkerPayrollInfoes`.
   */
  update(
    entity: PayIntV1WorkerPayrollInfoes<T>
  ): UpdateRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
    return new UpdateRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerPayrollInfoes`.
   * @param dataAreaId Key property. See {@link PayIntV1WorkerPayrollInfoes.dataAreaId}.
   * @param company Key property. See {@link PayIntV1WorkerPayrollInfoes.company}.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerPayrollInfoes.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerPayrollInfoes`.
   */
  delete(
    dataAreaId: string,
    company: string,
    personnelNumber: string
  ): DeleteRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerPayrollInfoes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerPayrollInfoes` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1WorkerPayrollInfoes<T>
  ): DeleteRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    company?: string,
    personnelNumber?: string
  ): DeleteRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T> {
    return new DeleteRequestBuilder<PayIntV1WorkerPayrollInfoes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1WorkerPayrollInfoes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Company: company!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
