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
import { WhsMobileWorkLogins } from './WhsMobileWorkLogins';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkLogins} entity.
 */
export class WhsMobileWorkLoginsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkLogins<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkLogins` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkLogins` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkLogins<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkLogins<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkLogins` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkLogins`.
   */
  create(
    entity: WhsMobileWorkLogins<T>
  ): CreateRequestBuilder<WhsMobileWorkLogins<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkLogins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkLogins` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkLogins.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkLogins` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkLogins<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkLogins<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkLogins`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkLogins`.
   */
  update(
    entity: WhsMobileWorkLogins<T>
  ): UpdateRequestBuilder<WhsMobileWorkLogins<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkLogins<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkLogins`.
   * @param recordId Key property. See {@link WhsMobileWorkLogins.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkLogins`.
   */
  delete(recordId: BigNumber): DeleteRequestBuilder<WhsMobileWorkLogins<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkLogins`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkLogins` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkLogins<T>
  ): DeleteRequestBuilder<WhsMobileWorkLogins<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkLogins<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkLogins<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkLogins
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
