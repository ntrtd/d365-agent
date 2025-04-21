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
import { LeaseExpenseSchedules } from './LeaseExpenseSchedules';

/**
 * Request builder class for operations supported on the {@link LeaseExpenseSchedules} entity.
 */
export class LeaseExpenseSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExpenseSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExpenseSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExpenseSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExpenseSchedules<T>, T> {
    return new GetAllRequestBuilder<LeaseExpenseSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExpenseSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExpenseSchedules`.
   */
  create(
    entity: LeaseExpenseSchedules<T>
  ): CreateRequestBuilder<LeaseExpenseSchedules<T>, T> {
    return new CreateRequestBuilder<LeaseExpenseSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExpenseSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExpenseSchedules.dataAreaId}.
   * @param lineNumber Key property. See {@link LeaseExpenseSchedules.lineNumber}.
   * @param leaseId Key property. See {@link LeaseExpenseSchedules.leaseId}.
   * @returns A request builder for creating requests to retrieve one `LeaseExpenseSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int32'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseExpenseSchedules<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExpenseSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        LeaseId: leaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExpenseSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExpenseSchedules`.
   */
  update(
    entity: LeaseExpenseSchedules<T>
  ): UpdateRequestBuilder<LeaseExpenseSchedules<T>, T> {
    return new UpdateRequestBuilder<LeaseExpenseSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseSchedules`.
   * @param dataAreaId Key property. See {@link LeaseExpenseSchedules.dataAreaId}.
   * @param lineNumber Key property. See {@link LeaseExpenseSchedules.lineNumber}.
   * @param leaseId Key property. See {@link LeaseExpenseSchedules.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseSchedules`.
   */
  delete(
    dataAreaId: string,
    lineNumber: number,
    leaseId: string
  ): DeleteRequestBuilder<LeaseExpenseSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExpenseSchedules<T>
  ): DeleteRequestBuilder<LeaseExpenseSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: number,
    leaseId?: string
  ): DeleteRequestBuilder<LeaseExpenseSchedules<T>, T> {
    return new DeleteRequestBuilder<LeaseExpenseSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExpenseSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            LeaseId: leaseId!
          }
    );
  }
}
