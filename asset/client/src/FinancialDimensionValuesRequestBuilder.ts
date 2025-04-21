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
import { FinancialDimensionValues } from './FinancialDimensionValues';

/**
 * Request builder class for operations supported on the {@link FinancialDimensionValues} entity.
 */
export class FinancialDimensionValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialDimensionValues<T>, T> {
  /**
   * Returns a request builder for querying all `FinancialDimensionValues` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialDimensionValues` entities.
   */
  getAll(): GetAllRequestBuilder<FinancialDimensionValues<T>, T> {
    return new GetAllRequestBuilder<FinancialDimensionValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FinancialDimensionValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialDimensionValues`.
   */
  create(
    entity: FinancialDimensionValues<T>
  ): CreateRequestBuilder<FinancialDimensionValues<T>, T> {
    return new CreateRequestBuilder<FinancialDimensionValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FinancialDimensionValues` entity based on its keys.
   * @param financialDimension Key property. See {@link FinancialDimensionValues.financialDimension}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValues.legalEntityId}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValues.dimensionValue}.
   * @returns A request builder for creating requests to retrieve one `FinancialDimensionValues` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    dimensionValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FinancialDimensionValues<T>, T> {
    return new GetByKeyRequestBuilder<FinancialDimensionValues<T>, T>(
      this.entityApi,
      {
        FinancialDimension: financialDimension,
        LegalEntityId: legalEntityId,
        DimensionValue: dimensionValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialDimensionValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialDimensionValues`.
   */
  update(
    entity: FinancialDimensionValues<T>
  ): UpdateRequestBuilder<FinancialDimensionValues<T>, T> {
    return new UpdateRequestBuilder<FinancialDimensionValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValues`.
   * @param financialDimension Key property. See {@link FinancialDimensionValues.financialDimension}.
   * @param legalEntityId Key property. See {@link FinancialDimensionValues.legalEntityId}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValues.dimensionValue}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValues`.
   */
  delete(
    financialDimension: string,
    legalEntityId: string,
    dimensionValue: string
  ): DeleteRequestBuilder<FinancialDimensionValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValues` by taking the entity as a parameter.
   */
  delete(
    entity: FinancialDimensionValues<T>
  ): DeleteRequestBuilder<FinancialDimensionValues<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    legalEntityId?: string,
    dimensionValue?: string
  ): DeleteRequestBuilder<FinancialDimensionValues<T>, T> {
    return new DeleteRequestBuilder<FinancialDimensionValues<T>, T>(
      this.entityApi,
      financialDimensionOrEntity instanceof FinancialDimensionValues
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            LegalEntityId: legalEntityId!,
            DimensionValue: dimensionValue!
          }
    );
  }
}
