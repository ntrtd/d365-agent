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
import { WhsMobileWorkGuidedCycleCounting } from './WhsMobileWorkGuidedCycleCounting';

/**
 * Request builder class for operations supported on the {@link WhsMobileWorkGuidedCycleCounting} entity.
 */
export class WhsMobileWorkGuidedCycleCountingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
  /**
   * Returns a request builder for querying all `WhsMobileWorkGuidedCycleCounting` entities.
   * @returns A request builder for creating requests to retrieve all `WhsMobileWorkGuidedCycleCounting` entities.
   */
  getAll(): GetAllRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
    return new GetAllRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsMobileWorkGuidedCycleCounting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsMobileWorkGuidedCycleCounting`.
   */
  create(
    entity: WhsMobileWorkGuidedCycleCounting<T>
  ): CreateRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
    return new CreateRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsMobileWorkGuidedCycleCounting` entity based on its keys.
   * @param recordId Key property. See {@link WhsMobileWorkGuidedCycleCounting.recordId}.
   * @returns A request builder for creating requests to retrieve one `WhsMobileWorkGuidedCycleCounting` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
    return new GetByKeyRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsMobileWorkGuidedCycleCounting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsMobileWorkGuidedCycleCounting`.
   */
  update(
    entity: WhsMobileWorkGuidedCycleCounting<T>
  ): UpdateRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
    return new UpdateRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkGuidedCycleCounting`.
   * @param recordId Key property. See {@link WhsMobileWorkGuidedCycleCounting.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkGuidedCycleCounting`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsMobileWorkGuidedCycleCounting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsMobileWorkGuidedCycleCounting` by taking the entity as a parameter.
   */
  delete(
    entity: WhsMobileWorkGuidedCycleCounting<T>
  ): DeleteRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T> {
    return new DeleteRequestBuilder<WhsMobileWorkGuidedCycleCounting<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof WhsMobileWorkGuidedCycleCounting
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
