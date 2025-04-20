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
import { CostAccountingDataConnectorCostObjectDimensionMembers } from './CostAccountingDataConnectorCostObjectDimensionMembers';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorCostObjectDimensionMembers} entity.
 */
export class CostAccountingDataConnectorCostObjectDimensionMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  CostAccountingDataConnectorCostObjectDimensionMembers<T>,
  T
> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorCostObjectDimensionMembers` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorCostObjectDimensionMembers` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensionMembers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorCostObjectDimensionMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   */
  create(
    entity: CostAccountingDataConnectorCostObjectDimensionMembers<T>
  ): CreateRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  > {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorCostObjectDimensionMembers` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorDimensionName Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.dataConnectorDimensionName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorCostObjectDimensionMembers` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorDimensionName: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorDimensionName: dataConnectorDimensionName,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   */
  update(
    entity: CostAccountingDataConnectorCostObjectDimensionMembers<T>
  ): UpdateRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  > {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensionMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorDimensionName Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.dataConnectorDimensionName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorCostObjectDimensionMembers.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorDimensionName: string,
    surrogateKey: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorCostObjectDimensionMembers` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorCostObjectDimensionMembers<T>
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  >;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorDimensionName?: string,
    surrogateKey?: string
  ): DeleteRequestBuilder<
    CostAccountingDataConnectorCostObjectDimensionMembers<T>,
    T
  > {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorCostObjectDimensionMembers<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorCostObjectDimensionMembers
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorDimensionName: dataConnectorDimensionName!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
