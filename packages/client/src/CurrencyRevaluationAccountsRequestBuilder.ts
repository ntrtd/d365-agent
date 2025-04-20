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
import { CurrencyRevaluationAccounts } from './CurrencyRevaluationAccounts';
import { CurrencyGainLossAccountType } from './CurrencyGainLossAccountType';

/**
 * Request builder class for operations supported on the {@link CurrencyRevaluationAccounts} entity.
 */
export class CurrencyRevaluationAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyRevaluationAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyRevaluationAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyRevaluationAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyRevaluationAccounts<T>, T> {
    return new GetAllRequestBuilder<CurrencyRevaluationAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CurrencyRevaluationAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyRevaluationAccounts`.
   */
  create(
    entity: CurrencyRevaluationAccounts<T>
  ): CreateRequestBuilder<CurrencyRevaluationAccounts<T>, T> {
    return new CreateRequestBuilder<CurrencyRevaluationAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyRevaluationAccounts` entity based on its keys.
   * @param currencyCode Key property. See {@link CurrencyRevaluationAccounts.currencyCode}.
   * @param legalEntityId Key property. See {@link CurrencyRevaluationAccounts.legalEntityId}.
   * @param posting Key property. See {@link CurrencyRevaluationAccounts.posting}.
   * @returns A request builder for creating requests to retrieve one `CurrencyRevaluationAccounts` entity based on its keys.
   */
  getByKey(
    currencyCode: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    posting: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CurrencyGainLossAccountType'
    >
  ): GetByKeyRequestBuilder<CurrencyRevaluationAccounts<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyRevaluationAccounts<T>, T>(
      this.entityApi,
      {
        CurrencyCode: currencyCode,
        LegalEntityId: legalEntityId,
        Posting: posting
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyRevaluationAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyRevaluationAccounts`.
   */
  update(
    entity: CurrencyRevaluationAccounts<T>
  ): UpdateRequestBuilder<CurrencyRevaluationAccounts<T>, T> {
    return new UpdateRequestBuilder<CurrencyRevaluationAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyRevaluationAccounts`.
   * @param currencyCode Key property. See {@link CurrencyRevaluationAccounts.currencyCode}.
   * @param legalEntityId Key property. See {@link CurrencyRevaluationAccounts.legalEntityId}.
   * @param posting Key property. See {@link CurrencyRevaluationAccounts.posting}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRevaluationAccounts`.
   */
  delete(
    currencyCode: string,
    legalEntityId: string,
    posting: CurrencyGainLossAccountType
  ): DeleteRequestBuilder<CurrencyRevaluationAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyRevaluationAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRevaluationAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyRevaluationAccounts<T>
  ): DeleteRequestBuilder<CurrencyRevaluationAccounts<T>, T>;
  delete(
    currencyCodeOrEntity: any,
    legalEntityId?: string,
    posting?: CurrencyGainLossAccountType
  ): DeleteRequestBuilder<CurrencyRevaluationAccounts<T>, T> {
    return new DeleteRequestBuilder<CurrencyRevaluationAccounts<T>, T>(
      this.entityApi,
      currencyCodeOrEntity instanceof CurrencyRevaluationAccounts
        ? currencyCodeOrEntity
        : {
            CurrencyCode: currencyCodeOrEntity!,
            LegalEntityId: legalEntityId!,
            Posting: posting!
          }
    );
  }
}
