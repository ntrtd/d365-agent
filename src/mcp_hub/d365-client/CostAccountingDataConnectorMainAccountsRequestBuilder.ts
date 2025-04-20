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
import { CostAccountingDataConnectorMainAccounts } from './CostAccountingDataConnectorMainAccounts';

/**
 * Request builder class for operations supported on the {@link CostAccountingDataConnectorMainAccounts} entity.
 */
export class CostAccountingDataConnectorMainAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CostAccountingDataConnectorMainAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CostAccountingDataConnectorMainAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<
    CostAccountingDataConnectorMainAccounts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CostAccountingDataConnectorMainAccounts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostAccountingDataConnectorMainAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostAccountingDataConnectorMainAccounts`.
   */
  create(
    entity: CostAccountingDataConnectorMainAccounts<T>
  ): CreateRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T> {
    return new CreateRequestBuilder<
      CostAccountingDataConnectorMainAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostAccountingDataConnectorMainAccounts` entity based on its keys.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorMainAccounts.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorChartOfAccountsName Key property. See {@link CostAccountingDataConnectorMainAccounts.dataConnectorChartOfAccountsName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorMainAccounts.surrogateKey}.
   * @returns A request builder for creating requests to retrieve one `CostAccountingDataConnectorMainAccounts` entity based on its keys.
   */
  getByKey(
    dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>,
    dataConnectorChartOfAccountsName: DeserializedType<T, 'Edm.String'>,
    surrogateKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T> {
    return new GetByKeyRequestBuilder<
      CostAccountingDataConnectorMainAccounts<T>,
      T
    >(this.entityApi, {
      DataConnectorSystemInstanceSurrogateKey:
        dataConnectorSystemInstanceSurrogateKey,
      DataConnectorChartOfAccountsName: dataConnectorChartOfAccountsName,
      SurrogateKey: surrogateKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostAccountingDataConnectorMainAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostAccountingDataConnectorMainAccounts`.
   */
  update(
    entity: CostAccountingDataConnectorMainAccounts<T>
  ): UpdateRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T> {
    return new UpdateRequestBuilder<
      CostAccountingDataConnectorMainAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorMainAccounts`.
   * @param dataConnectorSystemInstanceSurrogateKey Key property. See {@link CostAccountingDataConnectorMainAccounts.dataConnectorSystemInstanceSurrogateKey}.
   * @param dataConnectorChartOfAccountsName Key property. See {@link CostAccountingDataConnectorMainAccounts.dataConnectorChartOfAccountsName}.
   * @param surrogateKey Key property. See {@link CostAccountingDataConnectorMainAccounts.surrogateKey}.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorMainAccounts`.
   */
  delete(
    dataConnectorSystemInstanceSurrogateKey: string,
    dataConnectorChartOfAccountsName: string,
    surrogateKey: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostAccountingDataConnectorMainAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostAccountingDataConnectorMainAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: CostAccountingDataConnectorMainAccounts<T>
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T>;
  delete(
    dataConnectorSystemInstanceSurrogateKeyOrEntity: any,
    dataConnectorChartOfAccountsName?: string,
    surrogateKey?: string
  ): DeleteRequestBuilder<CostAccountingDataConnectorMainAccounts<T>, T> {
    return new DeleteRequestBuilder<
      CostAccountingDataConnectorMainAccounts<T>,
      T
    >(
      this.entityApi,
      dataConnectorSystemInstanceSurrogateKeyOrEntity instanceof
      CostAccountingDataConnectorMainAccounts
        ? dataConnectorSystemInstanceSurrogateKeyOrEntity
        : {
            DataConnectorSystemInstanceSurrogateKey:
              dataConnectorSystemInstanceSurrogateKeyOrEntity!,
            DataConnectorChartOfAccountsName: dataConnectorChartOfAccountsName!,
            SurrogateKey: surrogateKey!
          }
    );
  }
}
