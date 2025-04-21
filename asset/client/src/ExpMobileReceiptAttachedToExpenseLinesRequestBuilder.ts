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
import { ExpMobileReceiptAttachedToExpenseLines } from './ExpMobileReceiptAttachedToExpenseLines';

/**
 * Request builder class for operations supported on the {@link ExpMobileReceiptAttachedToExpenseLines} entity.
 */
export class ExpMobileReceiptAttachedToExpenseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileReceiptAttachedToExpenseLines` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileReceiptAttachedToExpenseLines` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
    return new GetAllRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileReceiptAttachedToExpenseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   */
  create(
    entity: ExpMobileReceiptAttachedToExpenseLines<T>
  ): CreateRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
    return new CreateRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileReceiptAttachedToExpenseLines` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileReceiptAttachedToExpenseLines.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileReceiptAttachedToExpenseLines` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
    return new GetByKeyRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLines<T>,
      T
    >(this.entityApi, { EntRecId: entRecId });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   */
  update(
    entity: ExpMobileReceiptAttachedToExpenseLines<T>
  ): UpdateRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
    return new UpdateRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   * @param entRecId Key property. See {@link ExpMobileReceiptAttachedToExpenseLines.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceiptAttachedToExpenseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceiptAttachedToExpenseLines` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileReceiptAttachedToExpenseLines<T>
  ): DeleteRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileReceiptAttachedToExpenseLines<T>, T> {
    return new DeleteRequestBuilder<
      ExpMobileReceiptAttachedToExpenseLines<T>,
      T
    >(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileReceiptAttachedToExpenseLines
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
