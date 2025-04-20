/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { TrialBalanceFiscalYearSnapshotHeaders } from './TrialBalanceFiscalYearSnapshotHeaders';

/**
 * Request builder class for operations supported on the {@link TrialBalanceFiscalYearSnapshotHeaders} entity.
 */
export class TrialBalanceFiscalYearSnapshotHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `TrialBalanceFiscalYearSnapshotHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `TrialBalanceFiscalYearSnapshotHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
    return new GetAllRequestBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TrialBalanceFiscalYearSnapshotHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   */
  create(
    entity: TrialBalanceFiscalYearSnapshotHeaders<T>
  ): CreateRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
    return new CreateRequestBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TrialBalanceFiscalYearSnapshotHeaders` entity based on its keys.
   * @param externalTrackingId Key property. See {@link TrialBalanceFiscalYearSnapshotHeaders.externalTrackingId}.
   * @returns A request builder for creating requests to retrieve one `TrialBalanceFiscalYearSnapshotHeaders` entity based on its keys.
   */
  getByKey(
    externalTrackingId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<T>,
      T
    >(this.entityApi, { ExternalTrackingId: externalTrackingId });
  }

  /**
   * Returns a request builder for updating an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   */
  update(
    entity: TrialBalanceFiscalYearSnapshotHeaders<T>
  ): UpdateRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
    return new UpdateRequestBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   * @param externalTrackingId Key property. See {@link TrialBalanceFiscalYearSnapshotHeaders.externalTrackingId}.
   * @returns A request builder for creating requests that delete an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   */
  delete(
    externalTrackingId: string
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrialBalanceFiscalYearSnapshotHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrialBalanceFiscalYearSnapshotHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: TrialBalanceFiscalYearSnapshotHeaders<T>
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T>;
  delete(
    externalTrackingIdOrEntity: any
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshotHeaders<T>, T> {
    return new DeleteRequestBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<T>,
      T
    >(
      this.entityApi,
      externalTrackingIdOrEntity instanceof
      TrialBalanceFiscalYearSnapshotHeaders
        ? externalTrackingIdOrEntity
        : { ExternalTrackingId: externalTrackingIdOrEntity! }
    );
  }
}
