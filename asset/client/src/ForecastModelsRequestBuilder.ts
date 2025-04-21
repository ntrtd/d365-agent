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
import { ForecastModels } from './ForecastModels';

/**
 * Request builder class for operations supported on the {@link ForecastModels} entity.
 */
export class ForecastModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ForecastModels<T>, T> {
  /**
   * Returns a request builder for querying all `ForecastModels` entities.
   * @returns A request builder for creating requests to retrieve all `ForecastModels` entities.
   */
  getAll(): GetAllRequestBuilder<ForecastModels<T>, T> {
    return new GetAllRequestBuilder<ForecastModels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ForecastModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ForecastModels`.
   */
  create(
    entity: ForecastModels<T>
  ): CreateRequestBuilder<ForecastModels<T>, T> {
    return new CreateRequestBuilder<ForecastModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ForecastModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link ForecastModels.dataAreaId}.
   * @param modelId Key property. See {@link ForecastModels.modelId}.
   * @returns A request builder for creating requests to retrieve one `ForecastModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ForecastModels<T>, T> {
    return new GetByKeyRequestBuilder<ForecastModels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ModelId: modelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ForecastModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ForecastModels`.
   */
  update(
    entity: ForecastModels<T>
  ): UpdateRequestBuilder<ForecastModels<T>, T> {
    return new UpdateRequestBuilder<ForecastModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ForecastModels`.
   * @param dataAreaId Key property. See {@link ForecastModels.dataAreaId}.
   * @param modelId Key property. See {@link ForecastModels.modelId}.
   * @returns A request builder for creating requests that delete an entity of type `ForecastModels`.
   */
  delete(
    dataAreaId: string,
    modelId: string
  ): DeleteRequestBuilder<ForecastModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ForecastModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ForecastModels` by taking the entity as a parameter.
   */
  delete(entity: ForecastModels<T>): DeleteRequestBuilder<ForecastModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    modelId?: string
  ): DeleteRequestBuilder<ForecastModels<T>, T> {
    return new DeleteRequestBuilder<ForecastModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ForecastModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModelId: modelId!
          }
    );
  }
}
