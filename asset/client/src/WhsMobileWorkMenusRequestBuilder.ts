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
import { WhsMobileWorkMenus } from './WhsMobileWorkMenus';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkMenus} entity.
 */
export class WhsMobileWorkMenusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkMenus<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkMenus` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkMenus` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkMenus<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkMenus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkMenus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkMenus`.
   */
  create(
    entity: WhsMobileWorkMenus<T>
  ): CreateRequestBuilder<WhsMobileWorkMenus<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkMenus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkMenus` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkMenus.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkMenus` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkMenus<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkMenus<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkMenus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkMenus`.
   */
  update(
    entity: WhsMobileWorkMenus<T>
  ): UpdateRequestBuilder<WhsMobileWorkMenus<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkMenus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkMenus`.
   * @param recordId Key property. See {@link WhsMobileWorkMenus.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkMenus`.
   */
  delete(recordId: BigNumber): DeleteRequestBuilder<WhsMobileWorkMenus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkMenus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkMenus` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkMenus<T>
  ): DeleteRequestBuilder<WhsMobileWorkMenus<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkMenus<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkMenus<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkMenus
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
