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
import { ReceivedProductReleaseHeaders } from './ReceivedProductReleaseHeaders';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';

/**
 * Request builder class for operations supported on the {@link ReceivedProductReleaseHeaders} entity.
 */
export class ReceivedProductReleaseHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ReceivedProductReleaseHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ReceivedProductReleaseHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
    return new GetAllRequestBuilder<ReceivedProductReleaseHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReceivedProductReleaseHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReceivedProductReleaseHeaders`.
   */
  create(
    entity: ReceivedProductReleaseHeaders<T>
  ): CreateRequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
    return new CreateRequestBuilder<ReceivedProductReleaseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReceivedProductReleaseHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseHeaders.dataAreaId}.
   * @param productNumber Key property. See {@link ReceivedProductReleaseHeaders.productNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseHeaders.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseHeaders.releaseStatus}.
   * @param productVersionId Key property. See {@link ReceivedProductReleaseHeaders.productVersionId}.
   * @param releaseHeaderCreatedDateTime Key property. See {@link ReceivedProductReleaseHeaders.releaseHeaderCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `ReceivedProductReleaseHeaders` entity based on its keys.
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
  ): GetByKeyRequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ReceivedProductReleaseHeaders<T>, T>(
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
   * Returns a request builder for updating an entity of type `ReceivedProductReleaseHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReceivedProductReleaseHeaders`.
   */
  update(
    entity: ReceivedProductReleaseHeaders<T>
  ): UpdateRequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
    return new UpdateRequestBuilder<ReceivedProductReleaseHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseHeaders`.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseHeaders.dataAreaId}.
   * @param productNumber Key property. See {@link ReceivedProductReleaseHeaders.productNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseHeaders.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseHeaders.releaseStatus}.
   * @param productVersionId Key property. See {@link ReceivedProductReleaseHeaders.productVersionId}.
   * @param releaseHeaderCreatedDateTime Key property. See {@link ReceivedProductReleaseHeaders.releaseHeaderCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseHeaders`.
   */
  delete(
    dataAreaId: string,
    productNumber: string,
    releasingLegalEntityId: string,
    releaseStatus: EngChgReleaseStatus,
    productVersionId: string,
    releaseHeaderCreatedDateTime: Moment
  ): DeleteRequestBuilder<ReceivedProductReleaseHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ReceivedProductReleaseHeaders<T>
  ): DeleteRequestBuilder<ReceivedProductReleaseHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string,
    releasingLegalEntityId?: string,
    releaseStatus?: EngChgReleaseStatus,
    productVersionId?: string,
    releaseHeaderCreatedDateTime?: Moment
  ): DeleteRequestBuilder<ReceivedProductReleaseHeaders<T>, T> {
    return new DeleteRequestBuilder<ReceivedProductReleaseHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReceivedProductReleaseHeaders
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
