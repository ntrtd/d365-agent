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
import { BadDebtAccounts } from './BadDebtAccounts';

/**
 * Request builder class for operations supported on the {@link BadDebtAccounts} entity.
 */
export class BadDebtAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BadDebtAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `BadDebtAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `BadDebtAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<BadDebtAccounts<T>, T> {
    return new GetAllRequestBuilder<BadDebtAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BadDebtAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BadDebtAccounts`.
   */
  create(
    entity: BadDebtAccounts<T>
  ): CreateRequestBuilder<BadDebtAccounts<T>, T> {
    return new CreateRequestBuilder<BadDebtAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BadDebtAccounts` entity based on its keys.
   * @param company Key property. See {@link BadDebtAccounts.company}.
   * @returns A request builder for creating requests to retrieve one `BadDebtAccounts` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BadDebtAccounts<T>, T> {
    return new GetByKeyRequestBuilder<BadDebtAccounts<T>, T>(this.entityApi, {
      Company: company
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BadDebtAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BadDebtAccounts`.
   */
  update(
    entity: BadDebtAccounts<T>
  ): UpdateRequestBuilder<BadDebtAccounts<T>, T> {
    return new UpdateRequestBuilder<BadDebtAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BadDebtAccounts`.
   * @param company Key property. See {@link BadDebtAccounts.company}.
   * @returns A request builder for creating requests that delete an entity of type `BadDebtAccounts`.
   */
  delete(company: string): DeleteRequestBuilder<BadDebtAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BadDebtAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BadDebtAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: BadDebtAccounts<T>
  ): DeleteRequestBuilder<BadDebtAccounts<T>, T>;
  delete(companyOrEntity: any): DeleteRequestBuilder<BadDebtAccounts<T>, T> {
    return new DeleteRequestBuilder<BadDebtAccounts<T>, T>(
      this.entityApi,
      companyOrEntity instanceof BadDebtAccounts
        ? companyOrEntity
        : { Company: companyOrEntity! }
    );
  }
}
