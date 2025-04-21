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
import { CostAccountingDataConnectorStatisticalMeasures } from './CostAccountingDataConnectorStatisticalMeasures';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorStatisticalMeasures} entity.
 */
export class CostAccountingDataConnectorStatisticalMeasuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorStatisticalMeasures<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorStatisticalMeasures` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorStatisticalMeasures` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasures<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasures<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorStatisticalMeasures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   */
  create(
    entity: CostAccountingDataConnectorStatisticalMeasures<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasures<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasures<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorStatisticalMeasures` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorStatisticalMeasureConfigurationName Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.dataConnectorStatisticalMeasureConfigurationName}.
   * @param periodStartDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.periodStartDate}.
   * @param periodEndDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.periodEndDate}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.sourceIdentifier}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorStatisticalMeasures` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorStatisticalMeasureConfigurationName: DeserializedType<
      T,
      'Edm.String'
    >,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    sourceIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasures<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasures<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorStatisticalMeasureConfigurationName:
        dataConnectorStatisticalMeasureConfigurationName,
      PeriodStartDate: periodStartDate,
      PeriodEndDate: periodEndDate,
      SourceIdentifier: sourceIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   */
  update(
    entity: CostAccountingDataConnectorStatisticalMeasures<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasures<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasures<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorStatisticalMeasureConfigurationName Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.dataConnectorStatisticalMeasureConfigurationName}.
   * @param periodStartDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.periodStartDate}.
   * @param periodEndDate Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.periodEndDate}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorStatisticalMeasures.sourceIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorStatisticalMeasureConfigurationName: string,
    periodStartDate: Moment,
    periodEndDate: Moment,
    sourceIdentifier: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorStatisticalMeasures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasures` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorStatisticalMeasures<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorStatisticalMeasures<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorStatisticalMeasureConfigurationName?: string,
    periodStartDate?: Moment,
    periodEndDate?: Moment,
    sourceIdentifier?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasures<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasures<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorStatisticalMeasures
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorStatisticalMeasureConfigurationName:
              dataConnectorStatisticalMeasureConfigurationName!,
            PeriodStartDate: periodStartDate!,
            PeriodEndDate: periodEndDate!,
            SourceIdentifier: sourceIdentifier!
          }
    );
  }
}
