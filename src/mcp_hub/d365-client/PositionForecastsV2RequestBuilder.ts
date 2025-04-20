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
import { PositionForecastsV2 } from './PositionForecastsV2';

/**
 * Request builder class for operations supported on the {@link PositionForecastsV2} entity.
 */
export class PositionForecastsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionForecastsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PositionForecastsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PositionForecastsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PositionForecastsV2<T>, T> {
    return new GetAllRequestBuilder<PositionForecastsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionForecastsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionForecastsV2`.
   */
  create(
    entity: PositionForecastsV2<T>
  ): CreateRequestBuilder<PositionForecastsV2<T>, T> {
    return new CreateRequestBuilder<PositionForecastsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionForecastsV2` entity based on its keys.
   * @param forecastPositionId Key property. See {@link PositionForecastsV2.forecastPositionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecastsV2.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecastsV2.budgetPlanScenarioName}.
   * @param costElementName Key property. See {@link PositionForecastsV2.costElementName}.
   * @param costElementDataAreaId Key property. See {@link PositionForecastsV2.costElementDataAreaId}.
   * @param costElementEffectiveDate Key property. See {@link PositionForecastsV2.costElementEffectiveDate}.
   * @param costElementExpirationDate Key property. See {@link PositionForecastsV2.costElementExpirationDate}.
   * @param costElementLineStartDate Key property. See {@link PositionForecastsV2.costElementLineStartDate}.
   * @param costElementLineEndDate Key property. See {@link PositionForecastsV2.costElementLineEndDate}.
   * @returns A request builder for creating requests to retrieve one `PositionForecastsV2` entity based on its keys.
   */
  getByKey(
    forecastPositionId: DeserializedType<T, 'Edm.String'>,
    budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>,
    budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>,
    costElementName: DeserializedType<T, 'Edm.String'>,
    costElementDataAreaId: DeserializedType<T, 'Edm.String'>,
    costElementEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costElementExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costElementLineStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costElementLineEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PositionForecastsV2<T>, T> {
    return new GetByKeyRequestBuilder<PositionForecastsV2<T>, T>(
      this.entityApi,
      {
        ForecastPositionId: forecastPositionId,
        BudgetPlanningProcessName: budgetPlanningProcessName,
        BudgetPlanScenarioName: budgetPlanScenarioName,
        CostElementName: costElementName,
        CostElementDataAreaId: costElementDataAreaId,
        CostElementEffectiveDate: costElementEffectiveDate,
        CostElementExpirationDate: costElementExpirationDate,
        CostElementLineStartDate: costElementLineStartDate,
        CostElementLineEndDate: costElementLineEndDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionForecastsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionForecastsV2`.
   */
  update(
    entity: PositionForecastsV2<T>
  ): UpdateRequestBuilder<PositionForecastsV2<T>, T> {
    return new UpdateRequestBuilder<PositionForecastsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionForecastsV2`.
   * @param forecastPositionId Key property. See {@link PositionForecastsV2.forecastPositionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecastsV2.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecastsV2.budgetPlanScenarioName}.
   * @param costElementName Key property. See {@link PositionForecastsV2.costElementName}.
   * @param costElementDataAreaId Key property. See {@link PositionForecastsV2.costElementDataAreaId}.
   * @param costElementEffectiveDate Key property. See {@link PositionForecastsV2.costElementEffectiveDate}.
   * @param costElementExpirationDate Key property. See {@link PositionForecastsV2.costElementExpirationDate}.
   * @param costElementLineStartDate Key property. See {@link PositionForecastsV2.costElementLineStartDate}.
   * @param costElementLineEndDate Key property. See {@link PositionForecastsV2.costElementLineEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecastsV2`.
   */
  delete(
    forecastPositionId: string,
    budgetPlanningProcessName: string,
    budgetPlanScenarioName: string,
    costElementName: string,
    costElementDataAreaId: string,
    costElementEffectiveDate: Moment,
    costElementExpirationDate: Moment,
    costElementLineStartDate: Moment,
    costElementLineEndDate: Moment
  ): DeleteRequestBuilder<PositionForecastsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionForecastsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecastsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PositionForecastsV2<T>
  ): DeleteRequestBuilder<PositionForecastsV2<T>, T>;
  delete(
    forecastPositionIdOrEntity: any,
    budgetPlanningProcessName?: string,
    budgetPlanScenarioName?: string,
    costElementName?: string,
    costElementDataAreaId?: string,
    costElementEffectiveDate?: Moment,
    costElementExpirationDate?: Moment,
    costElementLineStartDate?: Moment,
    costElementLineEndDate?: Moment
  ): DeleteRequestBuilder<PositionForecastsV2<T>, T> {
    return new DeleteRequestBuilder<PositionForecastsV2<T>, T>(
      this.entityApi,
      forecastPositionIdOrEntity instanceof PositionForecastsV2
        ? forecastPositionIdOrEntity
        : {
            ForecastPositionId: forecastPositionIdOrEntity!,
            BudgetPlanningProcessName: budgetPlanningProcessName!,
            BudgetPlanScenarioName: budgetPlanScenarioName!,
            CostElementName: costElementName!,
            CostElementDataAreaId: costElementDataAreaId!,
            CostElementEffectiveDate: costElementEffectiveDate!,
            CostElementExpirationDate: costElementExpirationDate!,
            CostElementLineStartDate: costElementLineStartDate!,
            CostElementLineEndDate: costElementLineEndDate!
          }
    );
  }
}
