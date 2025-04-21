/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ApprovedLeaveRequests } from './ApprovedLeaveRequests';

/**
 * Request builder class for operations supported on the {@link ApprovedLeaveRequests} entity.
 */
export class ApprovedLeaveRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovedLeaveRequests<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovedLeaveRequests` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovedLeaveRequests` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovedLeaveRequests<T>, T> {
    return new GetAllRequestBuilder<ApprovedLeaveRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApprovedLeaveRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovedLeaveRequests`.
   */
  create(
    entity: ApprovedLeaveRequests<T>
  ): CreateRequestBuilder<ApprovedLeaveRequests<T>, T> {
    return new CreateRequestBuilder<ApprovedLeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovedLeaveRequests` entity based on its keys.
   * @param startDate Key property. See {@link ApprovedLeaveRequests.startDate}.
   * @param endDate Key property. See {@link ApprovedLeaveRequests.endDate}.
   * @param amount Key property. See {@link ApprovedLeaveRequests.amount}.
   * @returns A request builder for creating requests to retrieve one `ApprovedLeaveRequests` entity based on its keys.
   */
  getByKey(
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    amount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ApprovedLeaveRequests<T>, T> {
    return new GetByKeyRequestBuilder<ApprovedLeaveRequests<T>, T>(
      this.entityApi,
      {
        StartDate: startDate,
        EndDate: endDate,
        Amount: amount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovedLeaveRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovedLeaveRequests`.
   */
  update(
    entity: ApprovedLeaveRequests<T>
  ): UpdateRequestBuilder<ApprovedLeaveRequests<T>, T> {
    return new UpdateRequestBuilder<ApprovedLeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovedLeaveRequests`.
   * @param startDate Key property. See {@link ApprovedLeaveRequests.startDate}.
   * @param endDate Key property. See {@link ApprovedLeaveRequests.endDate}.
   * @param amount Key property. See {@link ApprovedLeaveRequests.amount}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovedLeaveRequests`.
   */
  delete(
    startDate: Moment,
    endDate: Moment,
    amount: BigNumber
  ): DeleteRequestBuilder<ApprovedLeaveRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovedLeaveRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovedLeaveRequests` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovedLeaveRequests<T>
  ): DeleteRequestBuilder<ApprovedLeaveRequests<T>, T>;
  delete(
    startDateOrEntity: any,
    endDate?: Moment,
    amount?: BigNumber
  ): DeleteRequestBuilder<ApprovedLeaveRequests<T>, T> {
    return new DeleteRequestBuilder<ApprovedLeaveRequests<T>, T>(
      this.entityApi,
      startDateOrEntity instanceof ApprovedLeaveRequests
        ? startDateOrEntity
        : {
            StartDate: startDateOrEntity!,
            EndDate: endDate!,
            Amount: amount!
          }
    );
  }
}
