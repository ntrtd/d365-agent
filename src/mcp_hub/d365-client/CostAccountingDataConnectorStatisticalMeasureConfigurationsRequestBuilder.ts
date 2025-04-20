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
import { CostAccountingDataConnectorStatisticalMeasureConfigurations } from './CostAccountingDataConnectorStatisticalMeasureConfigurations';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorStatisticalMeasureConfigurations} entity.
 */
export class CostAccountingDataConnectorStatisticalMeasureConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorStatisticalMeasureConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorStatisticalMeasureConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorStatisticalMeasureConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   */
  create(
    entity: CostAccountingDataConnectorStatisticalMeasureConfigurations<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorStatisticalMeasureConfigurations` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureConfigurations.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorStatisticalMeasureConfigurations.name}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorStatisticalMeasureConfigurations` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   */
  update(
    entity: CostAccountingDataConnectorStatisticalMeasureConfigurations<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorStatisticalMeasureConfigurations.dataConnectorSystemInstanceSurrogateKey}.
   * @param name Key property. See {@link CostAccountingDataConnectorStatisticalMeasureConfigurations.name}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    name: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorStatisticalMeasureConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorStatisticalMeasureConfigurations<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorStatisticalMeasureConfigurations<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorStatisticalMeasureConfigurations
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            Name: name!
          }
    );
  }
}
