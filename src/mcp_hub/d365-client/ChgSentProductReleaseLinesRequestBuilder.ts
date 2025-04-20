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
import { ChgSentProductReleaseLines } from './ChgSentProductReleaseLines';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';

/**
 * Request builder class for operations supported on the {@link ChgSentProductReleaseLines} entity.
 */
export class ChgSentProductReleaseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChgSentProductReleaseLines<T>, T> {
  /**
   * Returns a request builder for querying all `ChgSentProductReleaseLines` entities.
   * @returns A request builder for creating requests to retrieve all `ChgSentProductReleaseLines` entities.
   */
  getAll(): GetAllRequestBuilder<ChgSentProductReleaseLines<T>, T> {
    return new GetAllRequestBuilder<ChgSentProductReleaseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ChgSentProductReleaseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChgSentProductReleaseLines`.
   */
  create(
    entity: ChgSentProductReleaseLines<T>
  ): CreateRequestBuilder<ChgSentProductReleaseLines<T>, T> {
    return new CreateRequestBuilder<ChgSentProductReleaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChgSentProductReleaseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ChgSentProductReleaseLines.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ChgSentProductReleaseLines.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ChgSentProductReleaseLines.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ChgSentProductReleaseLines.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ChgSentProductReleaseLines.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ChgSentProductReleaseLines.releaseStatus}.
   * @returns A request builder for creating requests to retrieve one `ChgSentProductReleaseLines` entity based on its keys.
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
  ): GetByKeyRequestBuilder<ChgSentProductReleaseLines<T>, T> {
    return new GetByKeyRequestBuilder<ChgSentProductReleaseLines<T>, T>(
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
   * Returns a request builder for updating an entity of type `ChgSentProductReleaseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChgSentProductReleaseLines`.
   */
  update(
    entity: ChgSentProductReleaseLines<T>
  ): UpdateRequestBuilder<ChgSentProductReleaseLines<T>, T> {
    return new UpdateRequestBuilder<ChgSentProductReleaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChgSentProductReleaseLines`.
   * @param dataAreaId Key property. See {@link ChgSentProductReleaseLines.dataAreaId}.
   * @param headerProductNumber Key property. See {@link ChgSentProductReleaseLines.headerProductNumber}.
   * @param headerProductVersionId Key property. See {@link ChgSentProductReleaseLines.headerProductVersionId}.
   * @param lineNumber Key property. See {@link ChgSentProductReleaseLines.lineNumber}.
   * @param releasingLegalEntityId Key property. See {@link ChgSentProductReleaseLines.releasingLegalEntityId}.
   * @param releaseStatus Key property. See {@link ChgSentProductReleaseLines.releaseStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ChgSentProductReleaseLines`.
   */
  delete(
    dataAreaId: string,
    headerProductNumber: string,
    headerProductVersionId: string,
    lineNumber: BigNumber,
    releasingLegalEntityId: string,
    releaseStatus: EngChgReleaseStatus
  ): DeleteRequestBuilder<ChgSentProductReleaseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChgSentProductReleaseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChgSentProductReleaseLines` by taking the entity as a parameter.
   */
  delete(
    entity: ChgSentProductReleaseLines<T>
  ): DeleteRequestBuilder<ChgSentProductReleaseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerProductNumber?: string,
    headerProductVersionId?: string,
    lineNumber?: BigNumber,
    releasingLegalEntityId?: string,
    releaseStatus?: EngChgReleaseStatus
  ): DeleteRequestBuilder<ChgSentProductReleaseLines<T>, T> {
    return new DeleteRequestBuilder<ChgSentProductReleaseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ChgSentProductReleaseLines
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
