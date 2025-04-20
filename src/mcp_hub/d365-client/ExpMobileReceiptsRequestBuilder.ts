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
import { ExpMobileReceipts } from './ExpMobileReceipts';

/**
 * Request builder class for operations supported on the {@link ExpMobileReceipts} entity.
 */
export class ExpMobileReceiptsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileReceipts<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileReceipts` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileReceipts` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileReceipts<T>, T> {
    return new GetAllRequestBuilder<ExpMobileReceipts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileReceipts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileReceipts`.
   */
  create(
    entity: ExpMobileReceipts<T>
  ): CreateRequestBuilder<ExpMobileReceipts<T>, T> {
    return new CreateRequestBuilder<ExpMobileReceipts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileReceipts` entity based on its keys.
   * @param refRecId Key property. See {@link ExpMobileReceipts.refRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileReceipts` entity based on its keys.
   */
  getByKey(
    refRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileReceipts<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileReceipts<T>, T>(this.entityApi, {
      RefRecId: refRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileReceipts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileReceipts`.
   */
  update(
    entity: ExpMobileReceipts<T>
  ): UpdateRequestBuilder<ExpMobileReceipts<T>, T> {
    return new UpdateRequestBuilder<ExpMobileReceipts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceipts`.
   * @param refRecId Key property. See {@link ExpMobileReceipts.refRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceipts`.
   */
  delete(refRecId: BigNumber): DeleteRequestBuilder<ExpMobileReceipts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileReceipts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileReceipts` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileReceipts<T>
  ): DeleteRequestBuilder<ExpMobileReceipts<T>, T>;
  delete(refRecIdOrEntity: any): DeleteRequestBuilder<ExpMobileReceipts<T>, T> {
    return new DeleteRequestBuilder<ExpMobileReceipts<T>, T>(
      this.entityApi,
      refRecIdOrEntity instanceof ExpMobileReceipts
        ? refRecIdOrEntity
        : { RefRecId: refRecIdOrEntity! }
    );
  }
}
