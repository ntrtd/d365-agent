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
import { FinancialDimensionValueLegalEntityOverrides } from './FinancialDimensionValueLegalEntityOverrides';

/**
 * Request builder class for operations supported on the {@link FinancialDimensionValueLegalEntityOverrides} entity.
 */
export class FinancialDimensionValueLegalEntityOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `FinancialDimensionValueLegalEntityOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialDimensionValueLegalEntityOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<
    FinancialDimensionValueLegalEntityOverrides<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FinancialDimensionValueLegalEntityOverrides<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FinancialDimensionValueLegalEntityOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   */
  create(
    entity: FinancialDimensionValueLegalEntityOverrides<T>
  ): CreateRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T> {
    return new CreateRequestBuilder<
      FinancialDimensionValueLegalEntityOverrides<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FinancialDimensionValueLegalEntityOverrides` entity based on its keys.
   * @param financialDimension Key property. See {@link FinancialDimensionValueLegalEntityOverrides.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueLegalEntityOverrides.dimensionValue}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValueLegalEntityOverrides.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `FinancialDimensionValueLegalEntityOverrides` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    dimensionValue: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T> {
    return new GetByKeyRequestBuilder<
      FinancialDimensionValueLegalEntityOverrides<T>,
      T
    >(this.entityApi, {
      FinancialDimension: financialDimension,
      DimensionValue: dimensionValue,
      LegalEntityId: legalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   */
  update(
    entity: FinancialDimensionValueLegalEntityOverrides<T>
  ): UpdateRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T> {
    return new UpdateRequestBuilder<
      FinancialDimensionValueLegalEntityOverrides<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   * @param financialDimension Key property. See {@link FinancialDimensionValueLegalEntityOverrides.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueLegalEntityOverrides.dimensionValue}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValueLegalEntityOverrides.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   */
  delete(
    financialDimension: string,
    dimensionValue: string,
    legalEntityId: string
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueLegalEntityOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueLegalEntityOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: FinancialDimensionValueLegalEntityOverrides<T>
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    dimensionValue?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<FinancialDimensionValueLegalEntityOverrides<T>, T> {
    return new DeleteRequestBuilder<
      FinancialDimensionValueLegalEntityOverrides<T>,
      T
    >(
      this.entityApi,
      financialDimensionOrEntity instanceof
      FinancialDimensionValueLegalEntityOverrides
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            DimensionValue: dimensionValue!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
