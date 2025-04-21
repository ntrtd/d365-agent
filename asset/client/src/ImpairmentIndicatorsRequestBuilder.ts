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
import { ImpairmentIndicators } from './ImpairmentIndicators';

/**
 * Request builder class for operations supported on the {@link ImpairmentIndicators} entity.
 */
export class ImpairmentIndicatorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImpairmentIndicators<T>, T> {
  /**
   * Returns a request builder for querying all `ImpairmentIndicators` entities.
   * @returns A request builder for creating requests to retrieve all `ImpairmentIndicators` entities.
   */
  getAll(): GetAllRequestBuilder<ImpairmentIndicators<T>, T> {
    return new GetAllRequestBuilder<ImpairmentIndicators<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ImpairmentIndicators` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImpairmentIndicators`.
   */
  create(
    entity: ImpairmentIndicators<T>
  ): CreateRequestBuilder<ImpairmentIndicators<T>, T> {
    return new CreateRequestBuilder<ImpairmentIndicators<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImpairmentIndicators` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImpairmentIndicators.dataAreaId}.
   * @param referenceFixedAssetNumber Key property. See {@link ImpairmentIndicators.referenceFixedAssetNumber}.
   * @param referenceBook Key property. See {@link ImpairmentIndicators.referenceBook}.
   * @param lineNumber Key property. See {@link ImpairmentIndicators.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ImpairmentIndicators` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    referenceFixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    referenceBook: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ImpairmentIndicators<T>, T> {
    return new GetByKeyRequestBuilder<ImpairmentIndicators<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReferenceFixedAssetNumber: referenceFixedAssetNumber,
        ReferenceBook: referenceBook,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImpairmentIndicators`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImpairmentIndicators`.
   */
  update(
    entity: ImpairmentIndicators<T>
  ): UpdateRequestBuilder<ImpairmentIndicators<T>, T> {
    return new UpdateRequestBuilder<ImpairmentIndicators<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImpairmentIndicators`.
   * @param dataAreaId Key property. See {@link ImpairmentIndicators.dataAreaId}.
   * @param referenceFixedAssetNumber Key property. See {@link ImpairmentIndicators.referenceFixedAssetNumber}.
   * @param referenceBook Key property. See {@link ImpairmentIndicators.referenceBook}.
   * @param lineNumber Key property. See {@link ImpairmentIndicators.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentIndicators`.
   */
  delete(
    dataAreaId: string,
    referenceFixedAssetNumber: string,
    referenceBook: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ImpairmentIndicators<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImpairmentIndicators`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentIndicators` by taking the entity as a parameter.
   */
  delete(
    entity: ImpairmentIndicators<T>
  ): DeleteRequestBuilder<ImpairmentIndicators<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    referenceFixedAssetNumber?: string,
    referenceBook?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ImpairmentIndicators<T>, T> {
    return new DeleteRequestBuilder<ImpairmentIndicators<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImpairmentIndicators
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReferenceFixedAssetNumber: referenceFixedAssetNumber!,
            ReferenceBook: referenceBook!,
            LineNumber: lineNumber!
          }
    );
  }
}
