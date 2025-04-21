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
import { RoutePendingRouteCostCategoryUnitCosts } from './RoutePendingRouteCostCategoryUnitCosts';

/**
 * Request builder class for operations supported on the {@link RoutePendingRouteCostCategoryUnitCosts} entity.
 */
export class RoutePendingRouteCostCategoryUnitCostsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
  /**
   * Returns a request builder for querying all `RoutePendingRouteCostCategoryUnitCosts` entities.
   * @returns A request builder for creating requests to retrieve all `RoutePendingRouteCostCategoryUnitCosts` entities.
   */
  getAll(): GetAllRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
    return new GetAllRequestBuilder<
      RoutePendingRouteCostCategoryUnitCosts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RoutePendingRouteCostCategoryUnitCosts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   */
  create(
    entity: RoutePendingRouteCostCategoryUnitCosts<T>
  ): CreateRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
    return new CreateRequestBuilder<
      RoutePendingRouteCostCategoryUnitCosts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RoutePendingRouteCostCategoryUnitCosts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.dataAreaId}.
   * @param routeCostCategoryId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.routeCostCategoryId}.
   * @param costingVersionId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.costingVersionId}.
   * @param productionSiteId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.productionSiteId}.
   * @param effectiveDate Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `RoutePendingRouteCostCategoryUnitCosts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    routeCostCategoryId: DeserializedType<T, 'Edm.String'>,
    costingVersionId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
    return new GetByKeyRequestBuilder<
      RoutePendingRouteCostCategoryUnitCosts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RouteCostCategoryId: routeCostCategoryId,
      CostingVersionId: costingVersionId,
      ProductionSiteId: productionSiteId,
      EffectiveDate: effectiveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   */
  update(
    entity: RoutePendingRouteCostCategoryUnitCosts<T>
  ): UpdateRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
    return new UpdateRequestBuilder<
      RoutePendingRouteCostCategoryUnitCosts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   * @param dataAreaId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.dataAreaId}.
   * @param routeCostCategoryId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.routeCostCategoryId}.
   * @param costingVersionId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.costingVersionId}.
   * @param productionSiteId Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.productionSiteId}.
   * @param effectiveDate Key property. See {@link RoutePendingRouteCostCategoryUnitCosts.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   */
  delete(
    dataAreaId: string,
    routeCostCategoryId: string,
    costingVersionId: string,
    productionSiteId: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RoutePendingRouteCostCategoryUnitCosts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoutePendingRouteCostCategoryUnitCosts` by taking the entity as a parameter.
   */
  delete(
    entity: RoutePendingRouteCostCategoryUnitCosts<T>
  ): DeleteRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    routeCostCategoryId?: string,
    costingVersionId?: string,
    productionSiteId?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<RoutePendingRouteCostCategoryUnitCosts<T>, T> {
    return new DeleteRequestBuilder<
      RoutePendingRouteCostCategoryUnitCosts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RoutePendingRouteCostCategoryUnitCosts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RouteCostCategoryId: routeCostCategoryId!,
            CostingVersionId: costingVersionId!,
            ProductionSiteId: productionSiteId!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
