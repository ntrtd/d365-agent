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
import { ExpMobileReportApprovals } from './ExpMobileReportApprovals';

/**
 * Request builder class for operations supported on the {@link ExpMobileReportApprovals} entity.
 */
export class ExpMobileReportApprovalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileReportApprovals<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileReportApprovals` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileReportApprovals` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileReportApprovals<T>, T> {
    return new GetAllRequestBuilder<ExpMobileReportApprovals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileReportApprovals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileReportApprovals`.
   */
  create(
    entity: ExpMobileReportApprovals<T>
  ): CreateRequestBuilder<ExpMobileReportApprovals<T>, T> {
    return new CreateRequestBuilder<ExpMobileReportApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileReportApprovals` entity based on its keys.
   * @param expNumber Key property. See {@link ExpMobileReportApprovals.expNumber}.
   * @param referenceDataAreaId Key property. See {@link ExpMobileReportApprovals.referenceDataAreaId}.
   * @param workItemRecId Key property. See {@link ExpMobileReportApprovals.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileReportApprovals` entity based on its keys.
   */
  getByKey(
    expNumber: DeserializedType<T, 'Edm.String'>,
    referenceDataAreaId: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileReportApprovals<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileReportApprovals<T>, T>(
      this.entityApi,
      {
        ExpNumber: expNumber,
        ReferenceDataAreaId: referenceDataAreaId,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileReportApprovals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileReportApprovals`.
   */
  update(
    entity: ExpMobileReportApprovals<T>
  ): UpdateRequestBuilder<ExpMobileReportApprovals<T>, T> {
    return new UpdateRequestBuilder<ExpMobileReportApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReportApprovals`.
   * @param expNumber Key property. See {@link ExpMobileReportApprovals.expNumber}.
   * @param referenceDataAreaId Key property. See {@link ExpMobileReportApprovals.referenceDataAreaId}.
   * @param workItemRecId Key property. See {@link ExpMobileReportApprovals.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReportApprovals`.
   */
  delete(
    expNumber: string,
    referenceDataAreaId: string,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileReportApprovals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReportApprovals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReportApprovals` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileReportApprovals<T>
  ): DeleteRequestBuilder<ExpMobileReportApprovals<T>, T>;
  delete(
    expNumberOrEntity: any,
    referenceDataAreaId?: string,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<ExpMobileReportApprovals<T>, T> {
    return new DeleteRequestBuilder<ExpMobileReportApprovals<T>, T>(
      this.entityApi,
      expNumberOrEntity instanceof ExpMobileReportApprovals
        ? expNumberOrEntity
        : {
            ExpNumber: expNumberOrEntity!,
            ReferenceDataAreaId: referenceDataAreaId!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
