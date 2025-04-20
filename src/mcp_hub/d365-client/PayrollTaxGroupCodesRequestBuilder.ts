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
import { PayrollTaxGroupCodes } from './PayrollTaxGroupCodes';

/**
 * Request builder class for operations supported on the {@link PayrollTaxGroupCodes} entity.
 */
export class PayrollTaxGroupCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollTaxGroupCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollTaxGroupCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollTaxGroupCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollTaxGroupCodes<T>, T> {
    return new GetAllRequestBuilder<PayrollTaxGroupCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollTaxGroupCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollTaxGroupCodes`.
   */
  create(
    entity: PayrollTaxGroupCodes<T>
  ): CreateRequestBuilder<PayrollTaxGroupCodes<T>, T> {
    return new CreateRequestBuilder<PayrollTaxGroupCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollTaxGroupCodes` entity based on its keys.
   * @param taxGroupId Key property. See {@link PayrollTaxGroupCodes.taxGroupId}.
   * @param taxCodeId Key property. See {@link PayrollTaxGroupCodes.taxCodeId}.
   * @param taxCodeCountryRegionId Key property. See {@link PayrollTaxGroupCodes.taxCodeCountryRegionId}.
   * @returns A request builder for creating requests to retrieve one `PayrollTaxGroupCodes` entity based on its keys.
   */
  getByKey(
    taxGroupId: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    taxCodeCountryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollTaxGroupCodes<T>, T> {
    return new GetByKeyRequestBuilder<PayrollTaxGroupCodes<T>, T>(
      this.entityApi,
      {
        TaxGroupId: taxGroupId,
        TaxCodeId: taxCodeId,
        TaxCodeCountryRegionId: taxCodeCountryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollTaxGroupCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollTaxGroupCodes`.
   */
  update(
    entity: PayrollTaxGroupCodes<T>
  ): UpdateRequestBuilder<PayrollTaxGroupCodes<T>, T> {
    return new UpdateRequestBuilder<PayrollTaxGroupCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollTaxGroupCodes`.
   * @param taxGroupId Key property. See {@link PayrollTaxGroupCodes.taxGroupId}.
   * @param taxCodeId Key property. See {@link PayrollTaxGroupCodes.taxCodeId}.
   * @param taxCodeCountryRegionId Key property. See {@link PayrollTaxGroupCodes.taxCodeCountryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollTaxGroupCodes`.
   */
  delete(
    taxGroupId: string,
    taxCodeId: string,
    taxCodeCountryRegionId: string
  ): DeleteRequestBuilder<PayrollTaxGroupCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollTaxGroupCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollTaxGroupCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollTaxGroupCodes<T>
  ): DeleteRequestBuilder<PayrollTaxGroupCodes<T>, T>;
  delete(
    taxGroupIdOrEntity: any,
    taxCodeId?: string,
    taxCodeCountryRegionId?: string
  ): DeleteRequestBuilder<PayrollTaxGroupCodes<T>, T> {
    return new DeleteRequestBuilder<PayrollTaxGroupCodes<T>, T>(
      this.entityApi,
      taxGroupIdOrEntity instanceof PayrollTaxGroupCodes
        ? taxGroupIdOrEntity
        : {
            TaxGroupId: taxGroupIdOrEntity!,
            TaxCodeId: taxCodeId!,
            TaxCodeCountryRegionId: taxCodeCountryRegionId!
          }
    );
  }
}
