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
import { ReceivedProductReleaseLinesV2 } from './ReceivedProductReleaseLinesV2';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';

/**
 * Request builder class for operations supported on the {@link ReceivedProductReleaseLinesV2} entity.
 */
export class ReceivedProductReleaseLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReceivedProductReleaseLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReceivedProductReleaseLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
    return new GetAllRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReceivedProductReleaseLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReceivedProductReleaseLinesV2`.
   */
  create(
    entity: ReceivedProductReleaseLinesV2<T>
  ): CreateRequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
    return new CreateRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReceivedProductReleaseLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseLinesV2.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ReceivedProductReleaseLinesV2.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ReceivedProductReleaseLinesV2.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ReceivedProductReleaseLinesV2.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseLinesV2.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseLinesV2.releaseStatus}.
   * @returns A request builder for creating requests to retrieve one `ReceivedProductReleaseLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerProductNumber: DeserializedType<T, 'Edm.String'>,
    headerProductVersionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    releasingLegalEntityId: DeserializedType<T, 'Edm.String'>,
    releaseStatus: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EngChgReleaseStatus'
    >
  ): GetByKeyRequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderProductNumber: headerProductNumber,
        HeaderProductVersionId: headerProductVersionId,
        LineNumber: lineNumber,
        ReleasingLegalEntityId: releasingLegalEntityId,
        ReleaseStatus: releaseStatus
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReceivedProductReleaseLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReceivedProductReleaseLinesV2`.
   */
  update(
    entity: ReceivedProductReleaseLinesV2<T>
  ): UpdateRequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
    return new UpdateRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseLinesV2`.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseLinesV2.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ReceivedProductReleaseLinesV2.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ReceivedProductReleaseLinesV2.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ReceivedProductReleaseLinesV2.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseLinesV2.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseLinesV2.releaseStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseLinesV2`.
   */
  delete(
    dataAreaId: string,
    headerProductNumber: string,
    headerProductVersionId: string,
    lineNumber: BigNumber,
    releasingLegalEntityId: string,
    releaseStatus: EngChgReleaseStatus
  ): DeleteRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReceivedProductReleaseLinesV2<T>
  ): DeleteRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerProductNumber?: string,
    headerProductVersionId?: string,
    lineNumber?: BigNumber,
    releasingLegalEntityId?: string,
    releaseStatus?: EngChgReleaseStatus
  ): DeleteRequestBuilder<ReceivedProductReleaseLinesV2<T>, T> {
    return new DeleteRequestBuilder<ReceivedProductReleaseLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReceivedProductReleaseLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderProductNumber: headerProductNumber!,
            HeaderProductVersionId: headerProductVersionId!,
            LineNumber: lineNumber!,
            ReleasingLegalEntityId: releasingLegalEntityId!,
            ReleaseStatus: releaseStatus!
          }
    );
  }
}
