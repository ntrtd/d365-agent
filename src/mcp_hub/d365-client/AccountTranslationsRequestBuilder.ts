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
import { AccountTranslations } from './AccountTranslations';

/**
 * Request builder class for operations supported on the {@link AccountTranslations} entity.
 */
export class AccountTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `AccountTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `AccountTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<AccountTranslations<T>, T> {
    return new GetAllRequestBuilder<AccountTranslations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccountTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountTranslations`.
   */
  create(
    entity: AccountTranslations<T>
  ): CreateRequestBuilder<AccountTranslations<T>, T> {
    return new CreateRequestBuilder<AccountTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountTranslations` entity based on its keys.
   * @param mainAccount Key property. See {@link AccountTranslations.mainAccount}.
   * @param chartOfAccounts Key property. See {@link AccountTranslations.chartOfAccounts}.
   * @param language Key property. See {@link AccountTranslations.language}.
   * @returns A request builder for creating requests to retrieve one `AccountTranslations` entity based on its keys.
   */
  getByKey(
    mainAccount: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccountTranslations<T>, T> {
    return new GetByKeyRequestBuilder<AccountTranslations<T>, T>(
      this.entityApi,
      {
        MainAccount: mainAccount,
        ChartOfAccounts: chartOfAccounts,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountTranslations`.
   */
  update(
    entity: AccountTranslations<T>
  ): UpdateRequestBuilder<AccountTranslations<T>, T> {
    return new UpdateRequestBuilder<AccountTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountTranslations`.
   * @param mainAccount Key property. See {@link AccountTranslations.mainAccount}.
   * @param chartOfAccounts Key property. See {@link AccountTranslations.chartOfAccounts}.
   * @param language Key property. See {@link AccountTranslations.language}.
   * @returns A request builder for creating requests that delete an entity of type `AccountTranslations`.
   */
  delete(
    mainAccount: string,
    chartOfAccounts: string,
    language: string
  ): DeleteRequestBuilder<AccountTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: AccountTranslations<T>
  ): DeleteRequestBuilder<AccountTranslations<T>, T>;
  delete(
    mainAccountOrEntity: any,
    chartOfAccounts?: string,
    language?: string
  ): DeleteRequestBuilder<AccountTranslations<T>, T> {
    return new DeleteRequestBuilder<AccountTranslations<T>, T>(
      this.entityApi,
      mainAccountOrEntity instanceof AccountTranslations
        ? mainAccountOrEntity
        : {
            MainAccount: mainAccountOrEntity!,
            ChartOfAccounts: chartOfAccounts!,
            Language: language!
          }
    );
  }
}
