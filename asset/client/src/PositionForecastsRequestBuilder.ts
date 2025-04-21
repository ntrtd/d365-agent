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
import { PositionForecasts } from './PositionForecasts';

/**
 * Request builder class for operations supported on the {@link PositionForecasts} entity.
 */
export class PositionForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `PositionForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `PositionForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<PositionForecasts<T>, T> {
    return new GetAllRequestBuilder<PositionForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionForecasts`.
   */
  create(
    entity: PositionForecasts<T>
  ): CreateRequestBuilder<PositionForecasts<T>, T> {
    return new CreateRequestBuilder<PositionForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionForecasts` entity based on its keys.
   * @param forecastPositionId Key property. See {@link PositionForecasts.forecastPositionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecasts.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecasts.budgetPlanScenarioName}.
   * @param costElementName Key property. See {@link PositionForecasts.costElementName}.
   * @param costElementDataAreaId Key property. See {@link PositionForecasts.costElementDataAreaId}.
   * @param costElementEffectiveDate Key property. See {@link PositionForecasts.costElementEffectiveDate}.
   * @param costElementExpirationDate Key property. See {@link PositionForecasts.costElementExpirationDate}.
   * @param costElementLineStartDate Key property. See {@link PositionForecasts.costElementLineStartDate}.
   * @param costElementLineEndDate Key property. See {@link PositionForecasts.costElementLineEndDate}.
   * @returns A request builder for creating requests to retrieve one `PositionForecasts` entity based on its keys.
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
  ): GetByKeyRequestBuilder<PositionForecasts<T>, T> {
    return new GetByKeyRequestBuilder<PositionForecasts<T>, T>(this.entityApi, {
      ForecastPositionId: forecastPositionId,
      BudgetPlanningProcessName: budgetPlanningProcessName,
      BudgetPlanScenarioName: budgetPlanScenarioName,
      CostElementName: costElementName,
      CostElementDataAreaId: costElementDataAreaId,
      CostElementEffectiveDate: costElementEffectiveDate,
      CostElementExpirationDate: costElementExpirationDate,
      CostElementLineStartDate: costElementLineStartDate,
      CostElementLineEndDate: costElementLineEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionForecasts`.
   */
  update(
    entity: PositionForecasts<T>
  ): UpdateRequestBuilder<PositionForecasts<T>, T> {
    return new UpdateRequestBuilder<PositionForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionForecasts`.
   * @param forecastPositionId Key property. See {@link PositionForecasts.forecastPositionId}.
   * @param budgetPlanningProcessName Key property. See {@link PositionForecasts.budgetPlanningProcessName}.
   * @param budgetPlanScenarioName Key property. See {@link PositionForecasts.budgetPlanScenarioName}.
   * @param costElementName Key property. See {@link PositionForecasts.costElementName}.
   * @param costElementDataAreaId Key property. See {@link PositionForecasts.costElementDataAreaId}.
   * @param costElementEffectiveDate Key property. See {@link PositionForecasts.costElementEffectiveDate}.
   * @param costElementExpirationDate Key property. See {@link PositionForecasts.costElementExpirationDate}.
   * @param costElementLineStartDate Key property. See {@link PositionForecasts.costElementLineStartDate}.
   * @param costElementLineEndDate Key property. See {@link PositionForecasts.costElementLineEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecasts`.
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
  ): DeleteRequestBuilder<PositionForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: PositionForecasts<T>
  ): DeleteRequestBuilder<PositionForecasts<T>, T>;
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
  ): DeleteRequestBuilder<PositionForecasts<T>, T> {
    return new DeleteRequestBuilder<PositionForecasts<T>, T>(
      this.entityApi,
      forecastPositionIdOrEntity instanceof PositionForecasts
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
