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
import { ConsolidateAccountGroups } from './ConsolidateAccountGroups';

/**
 * Request builder class for operations supported on the {@link ConsolidateAccountGroups} entity.
 */
export class ConsolidateAccountGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsolidateAccountGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ConsolidateAccountGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ConsolidateAccountGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ConsolidateAccountGroups<T>, T> {
    return new GetAllRequestBuilder<ConsolidateAccountGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConsolidateAccountGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsolidateAccountGroups`.
   */
  create(
    entity: ConsolidateAccountGroups<T>
  ): CreateRequestBuilder<ConsolidateAccountGroups<T>, T> {
    return new CreateRequestBuilder<ConsolidateAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsolidateAccountGroups` entity based on its keys.
   * @param consolidationAccountGroup Key property. See {@link ConsolidateAccountGroups.consolidationAccountGroup}.
   * @param chartOfAccounts Key property. See {@link ConsolidateAccountGroups.chartOfAccounts}.
   * @param mainAccount Key property. See {@link ConsolidateAccountGroups.mainAccount}.
   * @returns A request builder for creating requests to retrieve one `ConsolidateAccountGroups` entity based on its keys.
   */
  getByKey(
    consolidationAccountGroup: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    mainAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsolidateAccountGroups<T>, T> {
    return new GetByKeyRequestBuilder<ConsolidateAccountGroups<T>, T>(
      this.entityApi,
      {
        ConsolidationAccountGroup: consolidationAccountGroup,
        ChartOfAccounts: chartOfAccounts,
        MainAccount: mainAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConsolidateAccountGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsolidateAccountGroups`.
   */
  update(
    entity: ConsolidateAccountGroups<T>
  ): UpdateRequestBuilder<ConsolidateAccountGroups<T>, T> {
    return new UpdateRequestBuilder<ConsolidateAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsolidateAccountGroups`.
   * @param consolidationAccountGroup Key property. See {@link ConsolidateAccountGroups.consolidationAccountGroup}.
   * @param chartOfAccounts Key property. See {@link ConsolidateAccountGroups.chartOfAccounts}.
   * @param mainAccount Key property. See {@link ConsolidateAccountGroups.mainAccount}.
   * @returns A request builder for creating requests that delete an entity of type `ConsolidateAccountGroups`.
   */
  delete(
    consolidationAccountGroup: string,
    chartOfAccounts: string,
    mainAccount: string
  ): DeleteRequestBuilder<ConsolidateAccountGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsolidateAccountGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsolidateAccountGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ConsolidateAccountGroups<T>
  ): DeleteRequestBuilder<ConsolidateAccountGroups<T>, T>;
  delete(
    consolidationAccountGroupOrEntity: any,
    chartOfAccounts?: string,
    mainAccount?: string
  ): DeleteRequestBuilder<ConsolidateAccountGroups<T>, T> {
    return new DeleteRequestBuilder<ConsolidateAccountGroups<T>, T>(
      this.entityApi,
      consolidationAccountGroupOrEntity instanceof ConsolidateAccountGroups
        ? consolidationAccountGroupOrEntity
        : {
            ConsolidationAccountGroup: consolidationAccountGroupOrEntity!,
            ChartOfAccounts: chartOfAccounts!,
            MainAccount: mainAccount!
          }
    );
  }
}
