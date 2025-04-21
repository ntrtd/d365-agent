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
import { ReceivedProductReleaseLines } from './ReceivedProductReleaseLines';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';

/**
 * Request builder class for operations supported on the {@link ReceivedProductReleaseLines} entity.
 */
export class ReceivedProductReleaseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReceivedProductReleaseLines<T>, T> {
  /**
   * Returns a request builder for querying all `ReceivedProductReleaseLines` entities.
   * @returns A request builder for creating requests to retrieve all `ReceivedProductReleaseLines` entities.
   */
  getAll(): GetAllRequestBuilder<ReceivedProductReleaseLines<T>, T> {
    return new GetAllRequestBuilder<ReceivedProductReleaseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReceivedProductReleaseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReceivedProductReleaseLines`.
   */
  create(
    entity: ReceivedProductReleaseLines<T>
  ): CreateRequestBuilder<ReceivedProductReleaseLines<T>, T> {
    return new CreateRequestBuilder<ReceivedProductReleaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReceivedProductReleaseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseLines.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ReceivedProductReleaseLines.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ReceivedProductReleaseLines.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ReceivedProductReleaseLines.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseLines.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseLines.releaseStatus}.
   * @returns A request builder for creating requests to retrieve one `ReceivedProductReleaseLines` entity based on its keys.
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
  ): GetByKeyRequestBuilder<ReceivedProductReleaseLines<T>, T> {
    return new GetByKeyRequestBuilder<ReceivedProductReleaseLines<T>, T>(
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
   * Returns a request builder for updating an entity of type `ReceivedProductReleaseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReceivedProductReleaseLines`.
   */
  update(
    entity: ReceivedProductReleaseLines<T>
  ): UpdateRequestBuilder<ReceivedProductReleaseLines<T>, T> {
    return new UpdateRequestBuilder<ReceivedProductReleaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseLines`.
   * @param dataAreaId Key property. See {@link ReceivedProductReleaseLines.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ReceivedProductReleaseLines.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ReceivedProductReleaseLines.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ReceivedProductReleaseLines.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ReceivedProductReleaseLines.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ReceivedProductReleaseLines.releaseStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseLines`.
   */
  delete(
    dataAreaId: string,
    headerProductNumber: string,
    headerProductVersionId: string,
    lineNumber: BigNumber,
    releasingLegalEntityId: string,
    releaseStatus: EngChgReleaseStatus
  ): DeleteRequestBuilder<ReceivedProductReleaseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReceivedProductReleaseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReceivedProductReleaseLines` by taking the entity as a parameter.
   */
  delete(
    entity: ReceivedProductReleaseLines<T>
  ): DeleteRequestBuilder<ReceivedProductReleaseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerProductNumber?: string,
    headerProductVersionId?: string,
    lineNumber?: BigNumber,
    releasingLegalEntityId?: string,
    releaseStatus?: EngChgReleaseStatus
  ): DeleteRequestBuilder<ReceivedProductReleaseLines<T>, T> {
    return new DeleteRequestBuilder<ReceivedProductReleaseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReceivedProductReleaseLines
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
