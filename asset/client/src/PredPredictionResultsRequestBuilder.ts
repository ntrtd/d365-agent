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
import { PredPredictionResults } from './PredPredictionResults';

/**
 * Request builder class for operations supported on the {@link PredPredictionResults} entity.
 */
export class PredPredictionResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PredPredictionResults<T>, T> {
  /**
   * Returns a request builder for querying all `PredPredictionResults` entities.
   * @returns A request builder for creating requests to retrieve all `PredPredictionResults` entities.
   */
  getAll(): GetAllRequestBuilder<PredPredictionResults<T>, T> {
    return new GetAllRequestBuilder<PredPredictionResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PredPredictionResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PredPredictionResults`.
   */
  create(
    entity: PredPredictionResults<T>
  ): CreateRequestBuilder<PredPredictionResults<T>, T> {
    return new CreateRequestBuilder<PredPredictionResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PredPredictionResults` entity based on its keys.
   * @param sourceTableId Key property. See {@link PredPredictionResults.sourceTableId}.
   * @param sourceRecId Key property. See {@link PredPredictionResults.sourceRecId}.
   * @param modelId Key property. See {@link PredPredictionResults.modelId}.
   * @param invoiceCustTransRecId Key property. See {@link PredPredictionResults.invoiceCustTransRecId}.
   * @param sourceKey Key property. See {@link PredPredictionResults.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `PredPredictionResults` entity based on its keys.
   */
  getByKey(
    sourceTableId: DeserializedType<T, 'Edm.Int32'>,
    sourceRecId: DeserializedType<T, 'Edm.Int64'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    invoiceCustTransRecId: DeserializedType<T, 'Edm.Int64'>,
    sourceKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PredPredictionResults<T>, T> {
    return new GetByKeyRequestBuilder<PredPredictionResults<T>, T>(
      this.entityApi,
      {
        SourceTableId: sourceTableId,
        SourceRecId: sourceRecId,
        ModelId: modelId,
        InvoiceCustTransRecId: invoiceCustTransRecId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PredPredictionResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PredPredictionResults`.
   */
  update(
    entity: PredPredictionResults<T>
  ): UpdateRequestBuilder<PredPredictionResults<T>, T> {
    return new UpdateRequestBuilder<PredPredictionResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PredPredictionResults`.
   * @param sourceTableId Key property. See {@link PredPredictionResults.sourceTableId}.
   * @param sourceRecId Key property. See {@link PredPredictionResults.sourceRecId}.
   * @param modelId Key property. See {@link PredPredictionResults.modelId}.
   * @param invoiceCustTransRecId Key property. See {@link PredPredictionResults.invoiceCustTransRecId}.
   * @param sourceKey Key property. See {@link PredPredictionResults.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `PredPredictionResults`.
   */
  delete(
    sourceTableId: number,
    sourceRecId: BigNumber,
    modelId: string,
    invoiceCustTransRecId: BigNumber,
    sourceKey: string
  ): DeleteRequestBuilder<PredPredictionResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PredPredictionResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PredPredictionResults` by taking the entity as a parameter.
   */
  delete(
    entity: PredPredictionResults<T>
  ): DeleteRequestBuilder<PredPredictionResults<T>, T>;
  delete(
    sourceTableIdOrEntity: any,
    sourceRecId?: BigNumber,
    modelId?: string,
    invoiceCustTransRecId?: BigNumber,
    sourceKey?: string
  ): DeleteRequestBuilder<PredPredictionResults<T>, T> {
    return new DeleteRequestBuilder<PredPredictionResults<T>, T>(
      this.entityApi,
      sourceTableIdOrEntity instanceof PredPredictionResults
        ? sourceTableIdOrEntity
        : {
            SourceTableId: sourceTableIdOrEntity!,
            SourceRecId: sourceRecId!,
            ModelId: modelId!,
            InvoiceCustTransRecId: invoiceCustTransRecId!,
            SourceKey: sourceKey!
          }
    );
  }
}
