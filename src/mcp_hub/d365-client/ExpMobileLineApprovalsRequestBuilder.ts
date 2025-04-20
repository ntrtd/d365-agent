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
import { ExpMobileLineApprovals } from './ExpMobileLineApprovals';

/**
 * Request builder class for operations supported on the {@link ExpMobileLineApprovals} entity.
 */
export class ExpMobileLineApprovalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileLineApprovals<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileLineApprovals` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileLineApprovals` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileLineApprovals<T>, T> {
    return new GetAllRequestBuilder<ExpMobileLineApprovals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileLineApprovals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileLineApprovals`.
   */
  create(
    entity: ExpMobileLineApprovals<T>
  ): CreateRequestBuilder<ExpMobileLineApprovals<T>, T> {
    return new CreateRequestBuilder<ExpMobileLineApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileLineApprovals` entity based on its keys.
   * @param expTransNumber Key property. See {@link ExpMobileLineApprovals.expTransNumber}.
   * @param referenceDataAreaId Key property. See {@link ExpMobileLineApprovals.referenceDataAreaId}.
   * @param workItemRecId Key property. See {@link ExpMobileLineApprovals.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileLineApprovals` entity based on its keys.
   */
  getByKey(
    expTransNumber: DeserializedType<T, 'Edm.String'>,
    referenceDataAreaId: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileLineApprovals<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileLineApprovals<T>, T>(
      this.entityApi,
      {
        ExpTransNumber: expTransNumber,
        ReferenceDataAreaId: referenceDataAreaId,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileLineApprovals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileLineApprovals`.
   */
  update(
    entity: ExpMobileLineApprovals<T>
  ): UpdateRequestBuilder<ExpMobileLineApprovals<T>, T> {
    return new UpdateRequestBuilder<ExpMobileLineApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileLineApprovals`.
   * @param expTransNumber Key property. See {@link ExpMobileLineApprovals.expTransNumber}.
   * @param referenceDataAreaId Key property. See {@link ExpMobileLineApprovals.referenceDataAreaId}.
   * @param workItemRecId Key property. See {@link ExpMobileLineApprovals.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileLineApprovals`.
   */
  delete(
    expTransNumber: string,
    referenceDataAreaId: string,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileLineApprovals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileLineApprovals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileLineApprovals` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileLineApprovals<T>
  ): DeleteRequestBuilder<ExpMobileLineApprovals<T>, T>;
  delete(
    expTransNumberOrEntity: any,
    referenceDataAreaId?: string,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<ExpMobileLineApprovals<T>, T> {
    return new DeleteRequestBuilder<ExpMobileLineApprovals<T>, T>(
      this.entityApi,
      expTransNumberOrEntity instanceof ExpMobileLineApprovals
        ? expTransNumberOrEntity
        : {
            ExpTransNumber: expTransNumberOrEntity!,
            ReferenceDataAreaId: referenceDataAreaId!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
