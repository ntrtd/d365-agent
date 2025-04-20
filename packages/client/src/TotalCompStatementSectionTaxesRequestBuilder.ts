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
import { TotalCompStatementSectionTaxes } from './TotalCompStatementSectionTaxes';

/**
 * Request builder class for operations supported on the {@link TotalCompStatementSectionTaxes} entity.
 */
export class TotalCompStatementSectionTaxesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
  /**
   * Returns a request builder for querying all `TotalCompStatementSectionTaxes` entities.
   * @returns A request builder for creating requests to retrieve all `TotalCompStatementSectionTaxes` entities.
   */
  getAll(): GetAllRequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
    return new GetAllRequestBuilder<TotalCompStatementSectionTaxes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalCompStatementSectionTaxes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalCompStatementSectionTaxes`.
   */
  create(
    entity: TotalCompStatementSectionTaxes<T>
  ): CreateRequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
    return new CreateRequestBuilder<TotalCompStatementSectionTaxes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalCompStatementSectionTaxes` entity based on its keys.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionTaxes.statementSectionId}.
   * @param countryRegionId Key property. See {@link TotalCompStatementSectionTaxes.countryRegionId}.
   * @param taxGroupId Key property. See {@link TotalCompStatementSectionTaxes.taxGroupId}.
   * @param taxCodeId Key property. See {@link TotalCompStatementSectionTaxes.taxCodeId}.
   * @returns A request builder for creating requests to retrieve one `TotalCompStatementSectionTaxes` entity based on its keys.
   */
  getByKey(
    statementSectionId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    taxGroupId: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
    return new GetByKeyRequestBuilder<TotalCompStatementSectionTaxes<T>, T>(
      this.entityApi,
      {
        StatementSectionId: statementSectionId,
        CountryRegionId: countryRegionId,
        TaxGroupId: taxGroupId,
        TaxCodeId: taxCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalCompStatementSectionTaxes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalCompStatementSectionTaxes`.
   */
  update(
    entity: TotalCompStatementSectionTaxes<T>
  ): UpdateRequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
    return new UpdateRequestBuilder<TotalCompStatementSectionTaxes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionTaxes`.
   * @param statementSectionId Key property. See {@link TotalCompStatementSectionTaxes.statementSectionId}.
   * @param countryRegionId Key property. See {@link TotalCompStatementSectionTaxes.countryRegionId}.
   * @param taxGroupId Key property. See {@link TotalCompStatementSectionTaxes.taxGroupId}.
   * @param taxCodeId Key property. See {@link TotalCompStatementSectionTaxes.taxCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionTaxes`.
   */
  delete(
    statementSectionId: string,
    countryRegionId: string,
    taxGroupId: string,
    taxCodeId: string
  ): DeleteRequestBuilder<TotalCompStatementSectionTaxes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalCompStatementSectionTaxes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalCompStatementSectionTaxes` by taking the entity as a parameter.
   */
  delete(
    entity: TotalCompStatementSectionTaxes<T>
  ): DeleteRequestBuilder<TotalCompStatementSectionTaxes<T>, T>;
  delete(
    statementSectionIdOrEntity: any,
    countryRegionId?: string,
    taxGroupId?: string,
    taxCodeId?: string
  ): DeleteRequestBuilder<TotalCompStatementSectionTaxes<T>, T> {
    return new DeleteRequestBuilder<TotalCompStatementSectionTaxes<T>, T>(
      this.entityApi,
      statementSectionIdOrEntity instanceof TotalCompStatementSectionTaxes
        ? statementSectionIdOrEntity
        : {
            StatementSectionId: statementSectionIdOrEntity!,
            CountryRegionId: countryRegionId!,
            TaxGroupId: taxGroupId!,
            TaxCodeId: taxCodeId!
          }
    );
  }
}
