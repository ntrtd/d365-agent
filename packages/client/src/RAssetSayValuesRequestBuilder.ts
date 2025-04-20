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
import { RAssetSayValues } from './RAssetSayValues';

/**
 * Request builder class for operations supported on the {@link RAssetSayValues} entity.
 */
export class RAssetSayValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetSayValues<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetSayValues` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetSayValues` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetSayValues<T>, T> {
    return new GetAllRequestBuilder<RAssetSayValues<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetSayValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetSayValues`.
   */
  create(
    entity: RAssetSayValues<T>
  ): CreateRequestBuilder<RAssetSayValues<T>, T> {
    return new CreateRequestBuilder<RAssetSayValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetSayValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetSayValues.dataAreaId}.
   * @param analysisCode Key property. See {@link RAssetSayValues.analysisCode}.
   * @param startDate Key property. See {@link RAssetSayValues.startDate}.
   * @returns A request builder for creating requests to retrieve one `RAssetSayValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    analysisCode: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RAssetSayValues<T>, T> {
    return new GetByKeyRequestBuilder<RAssetSayValues<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AnalysisCode: analysisCode,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetSayValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetSayValues`.
   */
  update(
    entity: RAssetSayValues<T>
  ): UpdateRequestBuilder<RAssetSayValues<T>, T> {
    return new UpdateRequestBuilder<RAssetSayValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetSayValues`.
   * @param dataAreaId Key property. See {@link RAssetSayValues.dataAreaId}.
   * @param analysisCode Key property. See {@link RAssetSayValues.analysisCode}.
   * @param startDate Key property. See {@link RAssetSayValues.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetSayValues`.
   */
  delete(
    dataAreaId: string,
    analysisCode: string,
    startDate: Moment
  ): DeleteRequestBuilder<RAssetSayValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetSayValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetSayValues` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetSayValues<T>
  ): DeleteRequestBuilder<RAssetSayValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    analysisCode?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<RAssetSayValues<T>, T> {
    return new DeleteRequestBuilder<RAssetSayValues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetSayValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AnalysisCode: analysisCode!,
            StartDate: startDate!
          }
    );
  }
}
