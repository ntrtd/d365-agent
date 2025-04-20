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
import { CostAccountingDataConnectorCostObjectDimensions } from './CostAccountingDataConnectorCostObjectDimensions';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorCostObjectDimensions} entity.
 */
export class CostAccountingDataConnectorCostObjectDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorCostObjectDimensions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorCostObjectDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorCostObjectDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorCostObjectDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   */
  create(
    entity: CostAccountingDataConnectorCostObjectDimensions<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorCostObjectDimensions` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensions.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensions.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorCostObjectDimensions` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensions<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   */
  update(
    entity: CostAccountingDataConnectorCostObjectDimensions<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensions.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensions.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorCostObjectDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorCostObjectDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorCostObjectDimensions<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensions<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorCostObjectDimensions
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
