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
import { CurrencyRevaluationAccountsV2 } from './CurrencyRevaluationAccountsV2';
import { CurrencyGainLossAccountType } from './CurrencyGainLossAccountType';

/**
 * Request builder class for operations supported on the {@link CurrencyRevaluationAccountsV2} entity.
 */
export class CurrencyRevaluationAccountsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyRevaluationAccountsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyRevaluationAccountsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
    return new GetAllRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CurrencyRevaluationAccountsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyRevaluationAccountsV2`.
   */
  create(
    entity: CurrencyRevaluationAccountsV2<T>
  ): CreateRequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
    return new CreateRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyRevaluationAccountsV2` entity based on its keys.
   * @param currencyCode Key property. See {@link CurrencyRevaluationAccountsV2.currencyCode}.
   * @param legalEntityId Key property. See {@link CurrencyRevaluationAccountsV2.legalEntityId}.
   * @param posting Key property. See {@link CurrencyRevaluationAccountsV2.posting}.
   * @returns A request builder for creating requests to retrieve one `CurrencyRevaluationAccountsV2` entity based on its keys.
   */
  getByKey(
    currencyCode: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    posting: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CurrencyGainLossAccountType'
    >
  ): GetByKeyRequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>(
      this.entityApi,
      {
        CurrencyCode: currencyCode,
        LegalEntityId: legalEntityId,
        Posting: posting
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyRevaluationAccountsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyRevaluationAccountsV2`.
   */
  update(
    entity: CurrencyRevaluationAccountsV2<T>
  ): UpdateRequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
    return new UpdateRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyRevaluationAccountsV2`.
   * @param currencyCode Key property. See {@link CurrencyRevaluationAccountsV2.currencyCode}.
   * @param legalEntityId Key property. See {@link CurrencyRevaluationAccountsV2.legalEntityId}.
   * @param posting Key property. See {@link CurrencyRevaluationAccountsV2.posting}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRevaluationAccountsV2`.
   */
  delete(
    currencyCode: string,
    legalEntityId: string,
    posting: CurrencyGainLossAccountType
  ): DeleteRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyRevaluationAccountsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyRevaluationAccountsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyRevaluationAccountsV2<T>
  ): DeleteRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>;
  delete(
    currencyCodeOrEntity: any,
    legalEntityId?: string,
    posting?: CurrencyGainLossAccountType
  ): DeleteRequestBuilder<CurrencyRevaluationAccountsV2<T>, T> {
    return new DeleteRequestBuilder<CurrencyRevaluationAccountsV2<T>, T>(
      this.entityApi,
      currencyCodeOrEntity instanceof CurrencyRevaluationAccountsV2
        ? currencyCodeOrEntity
        : {
            CurrencyCode: currencyCodeOrEntity!,
            LegalEntityId: legalEntityId!,
            Posting: posting!
          }
    );
  }
}
