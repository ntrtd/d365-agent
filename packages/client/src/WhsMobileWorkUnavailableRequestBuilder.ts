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
import { WhsMobileWorkUnavailable } from './WhsMobileWorkUnavailable';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkUnavailable} entity.
 */
export class WhsMobileWorkUnavailableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkUnavailable<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkUnavailable` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkUnavailable` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkUnavailable<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkUnavailable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkUnavailable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkUnavailable`.
   */
  create(
    entity: WhsMobileWorkUnavailable<T>
  ): CreateRequestBuilder<WhsMobileWorkUnavailable<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkUnavailable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkUnavailable` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkUnavailable.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkUnavailable` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkUnavailable<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkUnavailable<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkUnavailable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkUnavailable`.
   */
  update(
    entity: WhsMobileWorkUnavailable<T>
  ): UpdateRequestBuilder<WhsMobileWorkUnavailable<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkUnavailable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkUnavailable`.
   * @param recordId Key property. See {@link WhsMobileWorkUnavailable.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkUnavailable`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<WhsMobileWorkUnavailable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkUnavailable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkUnavailable` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkUnavailable<T>
  ): DeleteRequestBuilder<WhsMobileWorkUnavailable<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkUnavailable<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkUnavailable<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkUnavailable
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
