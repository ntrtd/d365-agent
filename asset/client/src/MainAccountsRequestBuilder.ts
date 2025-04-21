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
import { MainAccounts } from './MainAccounts';

/**
 * Request builder class for operations supported on the {@link MainAccounts} entity.
 */
export class MainAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccounts<T>, T> {
    return new GetAllRequestBuilder<MainAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MainAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccounts`.
   */
  create(entity: MainAccounts<T>): CreateRequestBuilder<MainAccounts<T>, T> {
    return new CreateRequestBuilder<MainAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MainAccounts` entity based on its keys.
   * @param chartOfAccounts Key property. See {@link MainAccounts.chartOfAccounts}.
   * @param mainAccountId Key property. See {@link MainAccounts.mainAccountId}.
   * @returns A request builder for creating requests to retrieve one `MainAccounts` entity based on its keys.
   */
  getByKey(
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    mainAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MainAccounts<T>, T> {
    return new GetByKeyRequestBuilder<MainAccounts<T>, T>(this.entityApi, {
      ChartOfAccounts: chartOfAccounts,
      MainAccountId: mainAccountId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccounts`.
   */
  update(entity: MainAccounts<T>): UpdateRequestBuilder<MainAccounts<T>, T> {
    return new UpdateRequestBuilder<MainAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccounts`.
   * @param chartOfAccounts Key property. See {@link MainAccounts.chartOfAccounts}.
   * @param mainAccountId Key property. See {@link MainAccounts.mainAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccounts`.
   */
  delete(
    chartOfAccounts: string,
    mainAccountId: string
  ): DeleteRequestBuilder<MainAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccounts` by taking the entity as a parameter.
   */
  delete(entity: MainAccounts<T>): DeleteRequestBuilder<MainAccounts<T>, T>;
  delete(
    chartOfAccountsOrEntity: any,
    mainAccountId?: string
  ): DeleteRequestBuilder<MainAccounts<T>, T> {
    return new DeleteRequestBuilder<MainAccounts<T>, T>(
      this.entityApi,
      chartOfAccountsOrEntity instanceof MainAccounts
        ? chartOfAccountsOrEntity
        : {
            ChartOfAccounts: chartOfAccountsOrEntity!,
            MainAccountId: mainAccountId!
          }
    );
  }
}
