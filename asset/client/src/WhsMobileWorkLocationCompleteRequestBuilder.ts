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
import { WhsMobileWorkLocationComplete } from './WhsMobileWorkLocationComplete';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkLocationComplete} entity.
 */
export class WhsMobileWorkLocationCompleteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkLocationComplete` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkLocationComplete` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkLocationComplete<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkLocationComplete` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkLocationComplete`.
   */
  create(
    entity: WhsMobileWorkLocationComplete<T>
  ): CreateRequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkLocationComplete<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkLocationComplete` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkLocationComplete.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkLocationComplete` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkLocationComplete<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkLocationComplete`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkLocationComplete`.
   */
  update(
    entity: WhsMobileWorkLocationComplete<T>
  ): UpdateRequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkLocationComplete<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkLocationComplete`.
   * @param recordId Key property. See {@link WhsMobileWorkLocationComplete.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkLocationComplete`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<WhsMobileWorkLocationComplete<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkLocationComplete`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkLocationComplete` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkLocationComplete<T>
  ): DeleteRequestBuilder<WhsMobileWorkLocationComplete<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkLocationComplete<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkLocationComplete<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkLocationComplete
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
