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
import { CostAccountingDataConnectorChartOfAccounts } from './CostAccountingDataConnectorChartOfAccounts';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorChartOfAccounts} entity.
 */
export class CostAccountingDataConnectorChartOfAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorChartOfAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorChartOfAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorChartOfAccounts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorChartOfAccounts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorChartOfAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   */
  create(
    entity: CostAccountingDataConnectorChartOfAccounts<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorChartOfAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorChartOfAccounts` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorChartOfAccounts.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorChartOfAccounts.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorChartOfAccounts` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorChartOfAccounts<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   */
  update(
    entity: CostAccountingDataConnectorChartOfAccounts<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorChartOfAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorChartOfAccounts.dataConnectorSystemInstanceSurrogateKey}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorChartOfAccounts.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorChartOfAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorChartOfAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorChartOfAccounts<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorChartOfAccounts<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorChartOfAccounts<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorChartOfAccounts
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
