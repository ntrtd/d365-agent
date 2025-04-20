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
import { WhsMobileWorkMenuItems } from './WhsMobileWorkMenuItems';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkMenuItems} entity.
 */
export class WhsMobileWorkMenuItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkMenuItems<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkMenuItems` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkMenuItems` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkMenuItems<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkMenuItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkMenuItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkMenuItems`.
   */
  create(
    entity: WhsMobileWorkMenuItems<T>
  ): CreateRequestBuilder<WhsMobileWorkMenuItems<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkMenuItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkMenuItems` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkMenuItems.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkMenuItems` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkMenuItems<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkMenuItems<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkMenuItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkMenuItems`.
   */
  update(
    entity: WhsMobileWorkMenuItems<T>
  ): UpdateRequestBuilder<WhsMobileWorkMenuItems<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkMenuItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkMenuItems`.
   * @param recordId Key property. See {@link WhsMobileWorkMenuItems.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkMenuItems`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<WhsMobileWorkMenuItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkMenuItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkMenuItems` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkMenuItems<T>
  ): DeleteRequestBuilder<WhsMobileWorkMenuItems<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkMenuItems<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkMenuItems<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkMenuItems
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
