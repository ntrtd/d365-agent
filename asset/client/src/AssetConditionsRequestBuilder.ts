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
import { AssetConditions } from './AssetConditions';

/**
 * Request builder class for operations supported on the {@link AssetConditions} entity.
 */
export class AssetConditionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetConditions<T>, T> {
  /**
   * Returns a request builder for querying all `AssetConditions` entities.
   * @returns A request builder for creating requests to retrieve all `AssetConditions` entities.
   */
  getAll(): GetAllRequestBuilder<AssetConditions<T>, T> {
    return new GetAllRequestBuilder<AssetConditions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetConditions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetConditions`.
   */
  create(
    entity: AssetConditions<T>
  ): CreateRequestBuilder<AssetConditions<T>, T> {
    return new CreateRequestBuilder<AssetConditions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetConditions` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetConditions.dataAreaId}.
   * @param conditionCode Key property. See {@link AssetConditions.conditionCode}.
   * @returns A request builder for creating requests to retrieve one `AssetConditions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    conditionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetConditions<T>, T> {
    return new GetByKeyRequestBuilder<AssetConditions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConditionCode: conditionCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetConditions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetConditions`.
   */
  update(
    entity: AssetConditions<T>
  ): UpdateRequestBuilder<AssetConditions<T>, T> {
    return new UpdateRequestBuilder<AssetConditions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetConditions`.
   * @param dataAreaId Key property. See {@link AssetConditions.dataAreaId}.
   * @param conditionCode Key property. See {@link AssetConditions.conditionCode}.
   * @returns A request builder for creating requests that delete an entity of type `AssetConditions`.
   */
  delete(
    dataAreaId: string,
    conditionCode: string
  ): DeleteRequestBuilder<AssetConditions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetConditions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetConditions` by taking the entity as a parameter.
   */
  delete(
    entity: AssetConditions<T>
  ): DeleteRequestBuilder<AssetConditions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    conditionCode?: string
  ): DeleteRequestBuilder<AssetConditions<T>, T> {
    return new DeleteRequestBuilder<AssetConditions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetConditions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConditionCode: conditionCode!
          }
    );
  }
}
