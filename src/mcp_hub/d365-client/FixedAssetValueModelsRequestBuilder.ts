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
import { FixedAssetValueModels } from './FixedAssetValueModels';

/**
 * Request builder class for operations supported on the {@link FixedAssetValueModels} entity.
 */
export class FixedAssetValueModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetValueModels<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetValueModels` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetValueModels` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetValueModels<T>, T> {
    return new GetAllRequestBuilder<FixedAssetValueModels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FixedAssetValueModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetValueModels`.
   */
  create(
    entity: FixedAssetValueModels<T>
  ): CreateRequestBuilder<FixedAssetValueModels<T>, T> {
    return new CreateRequestBuilder<FixedAssetValueModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetValueModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetValueModels.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetValueModels.fixedAssetNumber}.
   * @param valueModelId Key property. See {@link FixedAssetValueModels.valueModelId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetValueModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    valueModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetValueModels<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetValueModels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FixedAssetNumber: fixedAssetNumber,
        ValueModelId: valueModelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetValueModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetValueModels`.
   */
  update(
    entity: FixedAssetValueModels<T>
  ): UpdateRequestBuilder<FixedAssetValueModels<T>, T> {
    return new UpdateRequestBuilder<FixedAssetValueModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetValueModels`.
   * @param dataAreaId Key property. See {@link FixedAssetValueModels.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link FixedAssetValueModels.fixedAssetNumber}.
   * @param valueModelId Key property. See {@link FixedAssetValueModels.valueModelId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetValueModels`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string,
    valueModelId: string
  ): DeleteRequestBuilder<FixedAssetValueModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetValueModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetValueModels` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetValueModels<T>
  ): DeleteRequestBuilder<FixedAssetValueModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string,
    valueModelId?: string
  ): DeleteRequestBuilder<FixedAssetValueModels<T>, T> {
    return new DeleteRequestBuilder<FixedAssetValueModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetValueModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!,
            ValueModelId: valueModelId!
          }
    );
  }
}
