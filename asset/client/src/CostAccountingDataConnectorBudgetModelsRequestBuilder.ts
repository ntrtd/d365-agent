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
import { CostAccountingDataConnectorBudgetModels } from './CostAccountingDataConnectorBudgetModels';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorBudgetModels} entity.
 */
export class CostAccountingDataConnectorBudgetModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorBudgetModels` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorBudgetModels` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorBudgetModels<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorBudgetModels<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorBudgetModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorBudgetModels`.
   */
  create(
    entity: CostAccountingDataConnectorBudgetModels<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorBudgetModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorBudgetModels` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetModels.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorLegalEntityName Key property. See {@link CostAccountingDataConnectorBudgetModels.dataConnectorLegalEntityName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorBudgetModels.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorBudgetModels` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorLegalEntityName: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorBudgetModels<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorLegalEntityName: dataConnectorLegalEntityName,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorBudgetModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorBudgetModels`.
   */
  update(
    entity: CostAccountingDataConnectorBudgetModels<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorBudgetModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetModels`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetModels.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorLegalEntityName Key property. See {@link CostAccountingDataConnectorBudgetModels.dataConnectorLegalEntityName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorBudgetModels.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetModels`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorLegalEntityName: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetModels` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorBudgetModels<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorLegalEntityName?: string,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetModels<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorBudgetModels<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorBudgetModels
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorLegalEntityName: dataConnectorLegalEntityName!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
