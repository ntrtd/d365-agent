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
import { CostAccountingTransferStatisticalMeasureBalances } from './CostAccountingTransferStatisticalMeasureBalances';

/**
 * Request builder class for operations supported on the {@link CostAccountingTransferStatisticalMeasureBalances} entity.
 */
export class CostAccountingTransferStatisticalMeasureBalancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingTransferStatisticalMeasureBalances<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingTransferStatisticalMeasureBalances` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingTransferStatisticalMeasureBalances` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingTransferStatisticalMeasureBalances<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingTransferStatisticalMeasureBalances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   */
  create(
    entity: CostAccountingTransferStatisticalMeasureBalances<T>
  ): CreateRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingTransferStatisticalMeasureBalances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingTransferStatisticalMeasureBalances` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorStatisticalMeasureConfigurationName Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.dataConnectorStatisticalMeasureConfigurationName}.
   * @param periodStartDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.periodStartDate}.
   * @param periodEndDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.periodEndDate}.
   * @param startDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.startDate}.
   * @param endDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.endDate}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingTransferStatisticalMeasureBalances` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorStatisticalMeasureConfigurationName: DeserializedType<
      T,
      'Edm.String'
    >,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingTransferStatisticalMeasureBalances<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorStatisticalMeasureConfigurationName:
        dataConnectorStatisticalMeasureConfigurationName,
      PeriodStartDate: periodStartDate,
      PeriodEndDate: periodEndDate,
      StartDate: startDate,
      EndDate: endDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   */
  update(
    entity: CostAccountingTransferStatisticalMeasureBalances<T>
  ): UpdateRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingTransferStatisticalMeasureBalances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorStatisticalMeasureConfigurationName Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.dataConnectorStatisticalMeasureConfigurationName}.
   * @param periodStartDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.periodStartDate}.
   * @param periodEndDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.periodEndDate}.
   * @param startDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.startDate}.
   * @param endDate Key property. See {@link CostAccountingTransferStatisticalMeasureBalances.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorStatisticalMeasureConfigurationName: string,
    periodStartDate: Moment,
    periodEndDate: Moment,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingTransferStatisticalMeasureBalances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingTransferStatisticalMeasureBalances` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingTransferStatisticalMeasureBalances<T>
  ): DeleteRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorStatisticalMeasureConfigurationName?: string,
    periodStartDate?: Moment,
    periodEndDate?: Moment,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<
    CostAccountingTransferStatisticalMeasureBalances<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingTransferStatisticalMeasureBalances<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingTransferStatisticalMeasureBalances
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorStatisticalMeasureConfigurationName:
              dataConnectorStatisticalMeasureConfigurationName!,
            PeriodStartDate: periodStartDate!,
            PeriodEndDate: periodEndDate!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
