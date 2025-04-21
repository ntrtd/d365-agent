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
import { ConsolidateAccounts } from './ConsolidateAccounts';

/**
 * Request builder class for operations supported on the {@link ConsolidateAccounts} entity.
 */
export class ConsolidateAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsolidateAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `ConsolidateAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `ConsolidateAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<ConsolidateAccounts<T>, T> {
    return new GetAllRequestBuilder<ConsolidateAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsolidateAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsolidateAccounts`.
   */
  create(
    entity: ConsolidateAccounts<T>
  ): CreateRequestBuilder<ConsolidateAccounts<T>, T> {
    return new CreateRequestBuilder<ConsolidateAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsolidateAccounts` entity based on its keys.
   * @param consolidationAccountGroup Key property. See {@link ConsolidateAccounts.consolidationAccountGroup}.
   * @param chartOfAccounts Key property. See {@link ConsolidateAccounts.chartOfAccounts}.
   * @param mainAccount Key property. See {@link ConsolidateAccounts.mainAccount}.
   * @returns A request builder for creating requests to retrieve one `ConsolidateAccounts` entity based on its keys.
   */
  getByKey(
    consolidationAccountGroup: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    mainAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsolidateAccounts<T>, T> {
    return new GetByKeyRequestBuilder<ConsolidateAccounts<T>, T>(
      this.entityApi,
      {
        ConsolidationAccountGroup: consolidationAccountGroup,
        ChartOfAccounts: chartOfAccounts,
        MainAccount: mainAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConsolidateAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsolidateAccounts`.
   */
  update(
    entity: ConsolidateAccounts<T>
  ): UpdateRequestBuilder<ConsolidateAccounts<T>, T> {
    return new UpdateRequestBuilder<ConsolidateAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsolidateAccounts`.
   * @param consolidationAccountGroup Key property. See {@link ConsolidateAccounts.consolidationAccountGroup}.
   * @param chartOfAccounts Key property. See {@link ConsolidateAccounts.chartOfAccounts}.
   * @param mainAccount Key property. See {@link ConsolidateAccounts.mainAccount}.
   * @returns A request builder for creating requests that delete an entity of type `ConsolidateAccounts`.
   */
  delete(
    consolidationAccountGroup: string,
    chartOfAccounts: string,
    mainAccount: string
  ): DeleteRequestBuilder<ConsolidateAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsolidateAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsolidateAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: ConsolidateAccounts<T>
  ): DeleteRequestBuilder<ConsolidateAccounts<T>, T>;
  delete(
    consolidationAccountGroupOrEntity: any,
    chartOfAccounts?: string,
    mainAccount?: string
  ): DeleteRequestBuilder<ConsolidateAccounts<T>, T> {
    return new DeleteRequestBuilder<ConsolidateAccounts<T>, T>(
      this.entityApi,
      consolidationAccountGroupOrEntity instanceof ConsolidateAccounts
        ? consolidationAccountGroupOrEntity
        : {
            ConsolidationAccountGroup: consolidationAccountGroupOrEntity!,
            ChartOfAccounts: chartOfAccounts!,
            MainAccount: mainAccount!
          }
    );
  }
}
