/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SentProductReleaseHeaders } from './SentProductReleaseHeaders';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';

/**
 * Request builder class for operations supported on the {@link SentProductReleaseHeaders} entity.
 */
export class SentProductReleaseHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SentProductReleaseHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SentProductReleaseHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SentProductReleaseHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SentProductReleaseHeaders<T>, T> {
    return new GetAllRequestBuilder<SentProductReleaseHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SentProductReleaseHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SentProductReleaseHeaders`.
   */
  create(
    entity: SentProductReleaseHeaders<T>
  ): CreateRequestBuilder<SentProductReleaseHeaders<T>, T> {
    return new CreateRequestBuilder<SentProductReleaseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SentProductReleaseHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SentProductReleaseHeaders.dataAreaId}.
   * @param productNumber Key property. See {@link SentProductReleaseHeaders.productNumber}.
   * @param releasingLegalEntityId Key property. See {@link SentProductReleaseHeaders.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link SentProductReleaseHeaders.releaseStatus}.
   * @param productVersionId Key property. See {@link SentProductReleaseHeaders.productVersionId}.
   * @param releaseHeaderCreatedDateTime Key property. See {@link SentProductReleaseHeaders.releaseHeaderCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `SentProductReleaseHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    releasingLegalEntityId: DeserializedType<T, 'Edm.String'>,
    releaseStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgReleaseStatus'
    >,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    releaseHeaderCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SentProductReleaseHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SentProductReleaseHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber,
        ReleasingLegalEntityId: releasingLegalEntityId,
        ReleaseStatus: releaseStatus,
        ProductVersionId: productVersionId,
        ReleaseHeaderCreatedDateTime: releaseHeaderCreatedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SentProductReleaseHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SentProductReleaseHeaders`.
   */
  update(
    entity: SentProductReleaseHeaders<T>
  ): UpdateRequestBuilder<SentProductReleaseHeaders<T>, T> {
    return new UpdateRequestBuilder<SentProductReleaseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SentProductReleaseHeaders`.
   * @param dataAreaId Key property. See {@link SentProductReleaseHeaders.dataAreaId}.
   * @param productNumber Key property. See {@link SentProductReleaseHeaders.productNumber}.
   * @param releasingLegalEntityId Key property. See {@link SentProductReleaseHeaders.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link SentProductReleaseHeaders.releaseStatus}.
   * @param productVersionId Key property. See {@link SentProductReleaseHeaders.productVersionId}.
   * @param releaseHeaderCreatedDateTime Key property. See {@link SentProductReleaseHeaders.releaseHeaderCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `SentProductReleaseHeaders`.
   */
  delete(
    dataAreaId: string,
    productNumber: string,
    releasingLegalEntityId: string,
    releaseStatus: EngChgReleaseStatus,
    productVersionId: string,
    releaseHeaderCreatedDateTime: Moment
  ): DeleteRequestBuilder<SentProductReleaseHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SentProductReleaseHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SentProductReleaseHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SentProductReleaseHeaders<T>
  ): DeleteRequestBuilder<SentProductReleaseHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string,
    releasingLegalEntityId?: string,
    releaseStatus?: EngChgReleaseStatus,
    productVersionId?: string,
    releaseHeaderCreatedDateTime?: Moment
  ): DeleteRequestBuilder<SentProductReleaseHeaders<T>, T> {
    return new DeleteRequestBuilder<SentProductReleaseHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SentProductReleaseHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!,
            ReleasingLegalEntityId: releasingLegalEntityId!,
            ReleaseStatus: releaseStatus!,
            ProductVersionId: productVersionId!,
            ReleaseHeaderCreatedDateTime: releaseHeaderCreatedDateTime!
          }
    );
  }
}
