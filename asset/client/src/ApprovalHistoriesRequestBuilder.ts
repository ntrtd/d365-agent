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
import { ApprovalHistories } from './ApprovalHistories';

/**
 * Request builder class for operations supported on the {@link ApprovalHistories} entity.
 */
export class ApprovalHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalHistories<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovalHistories` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalHistories` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalHistories<T>, T> {
    return new GetAllRequestBuilder<ApprovalHistories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalHistories`.
   */
  create(
    entity: ApprovalHistories<T>
  ): CreateRequestBuilder<ApprovalHistories<T>, T> {
    return new CreateRequestBuilder<ApprovalHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovalHistories` entity based on its keys.
   * @param trackingRecId Key property. See {@link ApprovalHistories.trackingRecId}.
   * @returns A request builder for creating requests to retrieve one `ApprovalHistories` entity based on its keys.
   */
  getByKey(
    trackingRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ApprovalHistories<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalHistories<T>, T>(this.entityApi, {
      TrackingRecId: trackingRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalHistories`.
   */
  update(
    entity: ApprovalHistories<T>
  ): UpdateRequestBuilder<ApprovalHistories<T>, T> {
    return new UpdateRequestBuilder<ApprovalHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalHistories`.
   * @param trackingRecId Key property. See {@link ApprovalHistories.trackingRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalHistories`.
   */
  delete(
    trackingRecId: BigNumber
  ): DeleteRequestBuilder<ApprovalHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalHistories` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalHistories<T>
  ): DeleteRequestBuilder<ApprovalHistories<T>, T>;
  delete(
    trackingRecIdOrEntity: any
  ): DeleteRequestBuilder<ApprovalHistories<T>, T> {
    return new DeleteRequestBuilder<ApprovalHistories<T>, T>(
      this.entityApi,
      trackingRecIdOrEntity instanceof ApprovalHistories
        ? trackingRecIdOrEntity
        : { TrackingRecId: trackingRecIdOrEntity! }
    );
  }
}
