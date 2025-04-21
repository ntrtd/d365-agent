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
import { CostAccountingDataConnectorBudgetEntries } from './CostAccountingDataConnectorBudgetEntries';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorBudgetEntries} entity.
 */
export class CostAccountingDataConnectorBudgetEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorBudgetEntries` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorBudgetEntries` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorBudgetEntries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorBudgetEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorBudgetEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorBudgetEntries`.
   */
  create(
    entity: CostAccountingDataConnectorBudgetEntries<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorBudgetEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorBudgetEntries` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntries.dataConnectorSystemInstanceSurrogateKey}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorBudgetEntries.sourceIdentifier}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorBudgetEntries` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    sourceIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorBudgetEntries<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SourceIdentifier: sourceIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorBudgetEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorBudgetEntries`.
   */
  update(
    entity: CostAccountingDataConnectorBudgetEntries<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorBudgetEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntries`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorBudgetEntries.dataConnectorSystemInstanceSurrogateKey}.
   * @param sourceIdentifier Key property. See {@link CostAccountingDataConnectorBudgetEntries.sourceIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntries`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    sourceIdentifier: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorBudgetEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorBudgetEntries` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorBudgetEntries<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    sourceIdentifier?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorBudgetEntries<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorBudgetEntries<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorBudgetEntries
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SourceIdentifier: sourceIdentifier!
          }
    );
  }
}
