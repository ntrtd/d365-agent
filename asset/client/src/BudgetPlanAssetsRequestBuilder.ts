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
import { BudgetPlanAssets } from './BudgetPlanAssets';

/**
 * Request builder class for operations supported on the {@link BudgetPlanAssets} entity.
 */
export class BudgetPlanAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanAssets<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanAssets` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanAssets` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanAssets<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanAssets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanAssets`.
   */
  create(
    entity: BudgetPlanAssets<T>
  ): CreateRequestBuilder<BudgetPlanAssets<T>, T> {
    return new CreateRequestBuilder<BudgetPlanAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanAssets` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetPlanAssets.dataAreaId}.
   * @param assetId Key property. See {@link BudgetPlanAssets.assetId}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanAssets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanAssets<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanAssets<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AssetId: assetId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanAssets`.
   */
  update(
    entity: BudgetPlanAssets<T>
  ): UpdateRequestBuilder<BudgetPlanAssets<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAssets`.
   * @param dataAreaId Key property. See {@link BudgetPlanAssets.dataAreaId}.
   * @param assetId Key property. See {@link BudgetPlanAssets.assetId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAssets`.
   */
  delete(
    dataAreaId: string,
    assetId: string
  ): DeleteRequestBuilder<BudgetPlanAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAssets` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanAssets<T>
  ): DeleteRequestBuilder<BudgetPlanAssets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetId?: string
  ): DeleteRequestBuilder<BudgetPlanAssets<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanAssets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetPlanAssets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetId: assetId!
          }
    );
  }
}
