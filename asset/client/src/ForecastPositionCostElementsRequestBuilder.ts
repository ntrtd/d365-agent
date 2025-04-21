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
import { ForecastPositionCostElements } from './ForecastPositionCostElements';

/**
 * Request builder class for operations supported on the {@link ForecastPositionCostElements} entity.
 */
export class ForecastPositionCostElementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ForecastPositionCostElements<T>, T> {
  /**
   * Returns a request builder for querying all `ForecastPositionCostElements` entities.
   * @returns A request builder for creating requests to retrieve all `ForecastPositionCostElements` entities.
   */
  getAll(): GetAllRequestBuilder<ForecastPositionCostElements<T>, T> {
    return new GetAllRequestBuilder<ForecastPositionCostElements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ForecastPositionCostElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ForecastPositionCostElements`.
   */
  create(
    entity: ForecastPositionCostElements<T>
  ): CreateRequestBuilder<ForecastPositionCostElements<T>, T> {
    return new CreateRequestBuilder<ForecastPositionCostElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ForecastPositionCostElements` entity based on its keys.
   * @param costElementName Key property. See {@link ForecastPositionCostElements.costElementName}.
   * @param costElementDataAreaId Key property. See {@link ForecastPositionCostElements.costElementDataAreaId}.
   * @param effectiveDate Key property. See {@link ForecastPositionCostElements.effectiveDate}.
   * @param expirationDate Key property. See {@link ForecastPositionCostElements.expirationDate}.
   * @returns A request builder for creating requests to retrieve one `ForecastPositionCostElements` entity based on its keys.
   */
  getByKey(
    costElementName: DeserializedType<T, 'Edm.String'>,
    costElementDataAreaId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ForecastPositionCostElements<T>, T> {
    return new GetByKeyRequestBuilder<ForecastPositionCostElements<T>, T>(
      this.entityApi,
      {
        CostElementName: costElementName,
        CostElementDataAreaId: costElementDataAreaId,
        EffectiveDate: effectiveDate,
        ExpirationDate: expirationDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ForecastPositionCostElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ForecastPositionCostElements`.
   */
  update(
    entity: ForecastPositionCostElements<T>
  ): UpdateRequestBuilder<ForecastPositionCostElements<T>, T> {
    return new UpdateRequestBuilder<ForecastPositionCostElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ForecastPositionCostElements`.
   * @param costElementName Key property. See {@link ForecastPositionCostElements.costElementName}.
   * @param costElementDataAreaId Key property. See {@link ForecastPositionCostElements.costElementDataAreaId}.
   * @param effectiveDate Key property. See {@link ForecastPositionCostElements.effectiveDate}.
   * @param expirationDate Key property. See {@link ForecastPositionCostElements.expirationDate}.
   * @returns A request builder for creating requests that delete an entity of type `ForecastPositionCostElements`.
   */
  delete(
    costElementName: string,
    costElementDataAreaId: string,
    effectiveDate: Moment,
    expirationDate: Moment
  ): DeleteRequestBuilder<ForecastPositionCostElements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ForecastPositionCostElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ForecastPositionCostElements` by taking the entity as a parameter.
   */
  delete(
    entity: ForecastPositionCostElements<T>
  ): DeleteRequestBuilder<ForecastPositionCostElements<T>, T>;
  delete(
    costElementNameOrEntity: any,
    costElementDataAreaId?: string,
    effectiveDate?: Moment,
    expirationDate?: Moment
  ): DeleteRequestBuilder<ForecastPositionCostElements<T>, T> {
    return new DeleteRequestBuilder<ForecastPositionCostElements<T>, T>(
      this.entityApi,
      costElementNameOrEntity instanceof ForecastPositionCostElements
        ? costElementNameOrEntity
        : {
            CostElementName: costElementNameOrEntity!,
            CostElementDataAreaId: costElementDataAreaId!,
            EffectiveDate: effectiveDate!,
            ExpirationDate: expirationDate!
          }
    );
  }
}
