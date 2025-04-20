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
import { WhsMobileWorkSessions } from './WhsMobileWorkSessions';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkSessions} entity.
 */
export class WhsMobileWorkSessionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkSessions<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkSessions` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkSessions` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkSessions<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkSessions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkSessions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkSessions`.
   */
  create(
    entity: WhsMobileWorkSessions<T>
  ): CreateRequestBuilder<WhsMobileWorkSessions<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkSessions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkSessions` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkSessions.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkSessions` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkSessions<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkSessions<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkSessions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkSessions`.
   */
  update(
    entity: WhsMobileWorkSessions<T>
  ): UpdateRequestBuilder<WhsMobileWorkSessions<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkSessions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkSessions`.
   * @param recordId Key property. See {@link WhsMobileWorkSessions.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkSessions`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<WhsMobileWorkSessions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkSessions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkSessions` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkSessions<T>
  ): DeleteRequestBuilder<WhsMobileWorkSessions<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkSessions<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkSessions<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkSessions
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
