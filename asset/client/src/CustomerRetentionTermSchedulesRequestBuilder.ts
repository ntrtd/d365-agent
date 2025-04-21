/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CustomerRetentionTermSchedules } from './CustomerRetentionTermSchedules';

/**
 * Request builder class for operations supported on the {@link CustomerRetentionTermSchedules} entity.
 */
export class CustomerRetentionTermSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRetentionTermSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRetentionTermSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRetentionTermSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerRetentionTermSchedules<T>, T> {
    return new GetAllRequestBuilder<CustomerRetentionTermSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerRetentionTermSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRetentionTermSchedules`.
   */
  create(
    entity: CustomerRetentionTermSchedules<T>
  ): CreateRequestBuilder<CustomerRetentionTermSchedules<T>, T> {
    return new CreateRequestBuilder<CustomerRetentionTermSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerRetentionTermSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerRetentionTermSchedules.dataAreaId}.
   * @param retentionTerm Key property. See {@link CustomerRetentionTermSchedules.retentionTerm}.
   * @param percentComplete Key property. See {@link CustomerRetentionTermSchedules.percentComplete}.
   * @returns A request builder for creating requests to retrieve one `CustomerRetentionTermSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retentionTerm: DeserializedType<T, 'Edm.String'>,
    percentComplete: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CustomerRetentionTermSchedules<T>, T> {
    return new GetByKeyRequestBuilder<CustomerRetentionTermSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetentionTerm: retentionTerm,
        PercentComplete: percentComplete
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRetentionTermSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRetentionTermSchedules`.
   */
  update(
    entity: CustomerRetentionTermSchedules<T>
  ): UpdateRequestBuilder<CustomerRetentionTermSchedules<T>, T> {
    return new UpdateRequestBuilder<CustomerRetentionTermSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRetentionTermSchedules`.
   * @param dataAreaId Key property. See {@link CustomerRetentionTermSchedules.dataAreaId}.
   * @param retentionTerm Key property. See {@link CustomerRetentionTermSchedules.retentionTerm}.
   * @param percentComplete Key property. See {@link CustomerRetentionTermSchedules.percentComplete}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRetentionTermSchedules`.
   */
  delete(
    dataAreaId: string,
    retentionTerm: string,
    percentComplete: BigNumber
  ): DeleteRequestBuilder<CustomerRetentionTermSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRetentionTermSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRetentionTermSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRetentionTermSchedules<T>
  ): DeleteRequestBuilder<CustomerRetentionTermSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retentionTerm?: string,
    percentComplete?: BigNumber
  ): DeleteRequestBuilder<CustomerRetentionTermSchedules<T>, T> {
    return new DeleteRequestBuilder<CustomerRetentionTermSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerRetentionTermSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetentionTerm: retentionTerm!,
            PercentComplete: percentComplete!
          }
    );
  }
}
