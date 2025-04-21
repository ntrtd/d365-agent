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
import { QualityOrderLineResults } from './QualityOrderLineResults';

/**
 * Request builder class for operations supported on the {@link QualityOrderLineResults} entity.
 */
export class QualityOrderLineResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QualityOrderLineResults<T>, T> {
  /**
   * Returns a request builder for querying all `QualityOrderLineResults` entities.
   * @returns A request builder for creating requests to retrieve all `QualityOrderLineResults` entities.
   */
  getAll(): GetAllRequestBuilder<QualityOrderLineResults<T>, T> {
    return new GetAllRequestBuilder<QualityOrderLineResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `QualityOrderLineResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QualityOrderLineResults`.
   */
  create(
    entity: QualityOrderLineResults<T>
  ): CreateRequestBuilder<QualityOrderLineResults<T>, T> {
    return new CreateRequestBuilder<QualityOrderLineResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QualityOrderLineResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link QualityOrderLineResults.dataAreaId}.
   * @param qualityOrderNumber Key property. See {@link QualityOrderLineResults.qualityOrderNumber}.
   * @param qualityOrderSequenceNumber Key property. See {@link QualityOrderLineResults.qualityOrderSequenceNumber}.
   * @param qualityTestId Key property. See {@link QualityOrderLineResults.qualityTestId}.
   * @param resultLineNumber Key property. See {@link QualityOrderLineResults.resultLineNumber}.
   * @returns A request builder for creating requests to retrieve one `QualityOrderLineResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    qualityOrderNumber: DeserializedType<T, 'Edm.String'>,
    qualityOrderSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    qualityTestId: DeserializedType<T, 'Edm.String'>,
    resultLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<QualityOrderLineResults<T>, T> {
    return new GetByKeyRequestBuilder<QualityOrderLineResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QualityOrderNumber: qualityOrderNumber,
        QualityOrderSequenceNumber: qualityOrderSequenceNumber,
        QualityTestId: qualityTestId,
        ResultLineNumber: resultLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QualityOrderLineResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QualityOrderLineResults`.
   */
  update(
    entity: QualityOrderLineResults<T>
  ): UpdateRequestBuilder<QualityOrderLineResults<T>, T> {
    return new UpdateRequestBuilder<QualityOrderLineResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QualityOrderLineResults`.
   * @param dataAreaId Key property. See {@link QualityOrderLineResults.dataAreaId}.
   * @param qualityOrderNumber Key property. See {@link QualityOrderLineResults.qualityOrderNumber}.
   * @param qualityOrderSequenceNumber Key property. See {@link QualityOrderLineResults.qualityOrderSequenceNumber}.
   * @param qualityTestId Key property. See {@link QualityOrderLineResults.qualityTestId}.
   * @param resultLineNumber Key property. See {@link QualityOrderLineResults.resultLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `QualityOrderLineResults`.
   */
  delete(
    dataAreaId: string,
    qualityOrderNumber: string,
    qualityOrderSequenceNumber: number,
    qualityTestId: string,
    resultLineNumber: BigNumber
  ): DeleteRequestBuilder<QualityOrderLineResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QualityOrderLineResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QualityOrderLineResults` by taking the entity as a parameter.
   */
  delete(
    entity: QualityOrderLineResults<T>
  ): DeleteRequestBuilder<QualityOrderLineResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    qualityOrderNumber?: string,
    qualityOrderSequenceNumber?: number,
    qualityTestId?: string,
    resultLineNumber?: BigNumber
  ): DeleteRequestBuilder<QualityOrderLineResults<T>, T> {
    return new DeleteRequestBuilder<QualityOrderLineResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QualityOrderLineResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QualityOrderNumber: qualityOrderNumber!,
            QualityOrderSequenceNumber: qualityOrderSequenceNumber!,
            QualityTestId: qualityTestId!,
            ResultLineNumber: resultLineNumber!
          }
    );
  }
}
