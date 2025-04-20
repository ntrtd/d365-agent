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
import { AssetConsumptionUnits } from './AssetConsumptionUnits';

/**
 * Request builder class for operations supported on the {@link AssetConsumptionUnits} entity.
 */
export class AssetConsumptionUnitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetConsumptionUnits<T>, T> {
  /**
   * Returns a request builder for querying all `AssetConsumptionUnits` entities.
   * @returns A request builder for creating requests to retrieve all `AssetConsumptionUnits` entities.
   */
  getAll(): GetAllRequestBuilder<AssetConsumptionUnits<T>, T> {
    return new GetAllRequestBuilder<AssetConsumptionUnits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetConsumptionUnits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetConsumptionUnits`.
   */
  create(
    entity: AssetConsumptionUnits<T>
  ): CreateRequestBuilder<AssetConsumptionUnits<T>, T> {
    return new CreateRequestBuilder<AssetConsumptionUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetConsumptionUnits` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetConsumptionUnits.dataAreaId}.
   * @param unitId Key property. See {@link AssetConsumptionUnits.unitId}.
   * @returns A request builder for creating requests to retrieve one `AssetConsumptionUnits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    unitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetConsumptionUnits<T>, T> {
    return new GetByKeyRequestBuilder<AssetConsumptionUnits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        UnitId: unitId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetConsumptionUnits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetConsumptionUnits`.
   */
  update(
    entity: AssetConsumptionUnits<T>
  ): UpdateRequestBuilder<AssetConsumptionUnits<T>, T> {
    return new UpdateRequestBuilder<AssetConsumptionUnits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetConsumptionUnits`.
   * @param dataAreaId Key property. See {@link AssetConsumptionUnits.dataAreaId}.
   * @param unitId Key property. See {@link AssetConsumptionUnits.unitId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetConsumptionUnits`.
   */
  delete(
    dataAreaId: string,
    unitId: string
  ): DeleteRequestBuilder<AssetConsumptionUnits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetConsumptionUnits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetConsumptionUnits` by taking the entity as a parameter.
   */
  delete(
    entity: AssetConsumptionUnits<T>
  ): DeleteRequestBuilder<AssetConsumptionUnits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    unitId?: string
  ): DeleteRequestBuilder<AssetConsumptionUnits<T>, T> {
    return new DeleteRequestBuilder<AssetConsumptionUnits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetConsumptionUnits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UnitId: unitId!
          }
    );
  }
}
