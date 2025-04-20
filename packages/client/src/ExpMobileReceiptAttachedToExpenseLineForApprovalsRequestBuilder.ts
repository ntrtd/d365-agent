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
import { ExpMobileReceiptAttachedToExpenseLineForApprovals } from './ExpMobileReceiptAttachedToExpenseLineForApprovals';

/**
 * Request builder class for operations supported on the {@link ExpMobileReceiptAttachedToExpenseLineForApprovals} entity.
 */
export class ExpMobileReceiptAttachedToExpenseLineForApprovalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ExpMobileReceiptAttachedToExpenseLineForApprovals` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileReceiptAttachedToExpenseLineForApprovals` entities.
   */
  getAll(): GetAllRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileReceiptAttachedToExpenseLineForApprovals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   */
  create(
    entity: ExpMobileReceiptAttachedToExpenseLineForApprovals<T>
  ): CreateRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  > {
    return new CreateRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileReceiptAttachedToExpenseLineForApprovals` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileReceiptAttachedToExpenseLineForApprovals.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileReceiptAttachedToExpenseLineForApprovals` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
      T
    >(this.entityApi, { EntRecId: entRecId });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   */
  update(
    entity: ExpMobileReceiptAttachedToExpenseLineForApprovals<T>
  ): UpdateRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   * @param entRecId Key property. See {@link ExpMobileReceiptAttachedToExpenseLineForApprovals.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceiptAttachedToExpenseLineForApprovals` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileReceiptAttachedToExpenseLineForApprovals<T>
  ): DeleteRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  >;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<
    ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLineForApprovals<T>,
      T
    >(
      this.entityApi,
      entRecIdOrEntity instanceof
      ExpMobileReceiptAttachedToExpenseLineForApprovals
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
