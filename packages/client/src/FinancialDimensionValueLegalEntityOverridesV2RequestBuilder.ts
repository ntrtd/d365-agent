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
import { FinancialDimensionValueLegalEntityOverridesV2 } from './FinancialDimensionValueLegalEntityOverridesV2';

/**
 * Request builder class for operations supported on the {@link FinancialDimensionValueLegalEntityOverridesV2} entity.
 */
export class FinancialDimensionValueLegalEntityOverridesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T> {
  /**
   * Returns a request builder for querying all `FinancialDimensionValueLegalEntityOverridesV2` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialDimensionValueLegalEntityOverridesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    FinancialDimensionValueLegalEntityOverridesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FinancialDimensionValueLegalEntityOverridesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   */
  create(
    entity: FinancialDimensionValueLegalEntityOverridesV2<T>
  ): CreateRequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T> {
    return new CreateRequestBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FinancialDimensionValueLegalEntityOverridesV2` entity based on its keys.
   * @param financialDimension Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.dimensionValue}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `FinancialDimensionValueLegalEntityOverridesV2` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    dimensionValue: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FinancialDimensionValueLegalEntityOverridesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<T>,
      T
    >(this.entityApi, {
      FinancialDimension: financialDimension,
      DimensionValue: dimensionValue,
      LegalEntityId: legalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   */
  update(
    entity: FinancialDimensionValueLegalEntityOverridesV2<T>
  ): UpdateRequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T> {
    return new UpdateRequestBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   * @param financialDimension Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.dimensionValue}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValueLegalEntityOverridesV2.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   */
  delete(
    financialDimension: string,
    dimensionValue: string,
    legalEntityId: string
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueLegalEntityOverridesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueLegalEntityOverridesV2` by taking the entity as a parameter.
   */
  delete(
    entity: FinancialDimensionValueLegalEntityOverridesV2<T>
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    dimensionValue?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverridesV2<T>, T> {
    return new DeleteRequestBuilder<
      FinancialDimensionValueLegalEntityOverridesV2<T>,
      T
    >(
      this.entityApi,
      financialDimensionOrEntity instanceof
      FinancialDimensionValueLegalEntityOverridesV2
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            DimensionValue: dimensionValue!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
