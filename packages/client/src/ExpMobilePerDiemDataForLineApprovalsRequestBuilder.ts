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
import { ExpMobilePerDiemDataForLineApprovals } from './ExpMobilePerDiemDataForLineApprovals';

/**
 * Request builder class for operations supported on the {@link ExpMobilePerDiemDataForLineApprovals} entity.
 */
export class ExpMobilePerDiemDataForLineApprovalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobilePerDiemDataForLineApprovals` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobilePerDiemDataForLineApprovals` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
    return new GetAllRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobilePerDiemDataForLineApprovals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   */
  create(
    entity: ExpMobilePerDiemDataForLineApprovals<T>
  ): CreateRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
    return new CreateRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobilePerDiemDataForLineApprovals` entity based on its keys.
   * @param workflowItemRecId Key property. See {@link ExpMobilePerDiemDataForLineApprovals.workflowItemRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobilePerDiemDataForLineApprovals` entity based on its keys.
   */
  getByKey(
    workflowItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
    return new GetByKeyRequestBuilder<
      ExpMobilePerDiemDataForLineApprovals<T>,
      T
    >(this.entityApi, { WorkflowItemRecId: workflowItemRecId });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   */
  update(
    entity: ExpMobilePerDiemDataForLineApprovals<T>
  ): UpdateRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
    return new UpdateRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   * @param workflowItemRecId Key property. See {@link ExpMobilePerDiemDataForLineApprovals.workflowItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   */
  delete(
    workflowItemRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobilePerDiemDataForLineApprovals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobilePerDiemDataForLineApprovals` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobilePerDiemDataForLineApprovals<T>
  ): DeleteRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>;
  delete(
    workflowItemRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T> {
    return new DeleteRequestBuilder<ExpMobilePerDiemDataForLineApprovals<T>, T>(
      this.entityApi,
      workflowItemRecIdOrEntity instanceof ExpMobilePerDiemDataForLineApprovals
        ? workflowItemRecIdOrEntity
        : { WorkflowItemRecId: workflowItemRecIdOrEntity! }
    );
  }
}
