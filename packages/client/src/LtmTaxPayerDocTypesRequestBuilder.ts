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
import { LtmTaxPayerDocTypes } from './LtmTaxPayerDocTypes';

/**
 * Request builder class for operations supported on the {@link LtmTaxPayerDocTypes} entity.
 */
export class LtmTaxPayerDocTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmTaxPayerDocTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmTaxPayerDocTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmTaxPayerDocTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmTaxPayerDocTypes<T>, T> {
    return new GetAllRequestBuilder<LtmTaxPayerDocTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmTaxPayerDocTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmTaxPayerDocTypes`.
   */
  create(
    entity: LtmTaxPayerDocTypes<T>
  ): CreateRequestBuilder<LtmTaxPayerDocTypes<T>, T> {
    return new CreateRequestBuilder<LtmTaxPayerDocTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmTaxPayerDocTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmTaxPayerDocTypes.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerDocTypes.taxPayerTypeId}.
   * @param docTypeId Key property. See {@link LtmTaxPayerDocTypes.docTypeId}.
   * @returns A request builder for creating requests to retrieve one `LtmTaxPayerDocTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPayerTypeId: DeserializedType<T, 'Edm.String'>,
    docTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmTaxPayerDocTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmTaxPayerDocTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxPayerTypeId: taxPayerTypeId,
        DocTypeId: docTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmTaxPayerDocTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmTaxPayerDocTypes`.
   */
  update(
    entity: LtmTaxPayerDocTypes<T>
  ): UpdateRequestBuilder<LtmTaxPayerDocTypes<T>, T> {
    return new UpdateRequestBuilder<LtmTaxPayerDocTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerDocTypes`.
   * @param dataAreaId Key property. See {@link LtmTaxPayerDocTypes.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerDocTypes.taxPayerTypeId}.
   * @param docTypeId Key property. See {@link LtmTaxPayerDocTypes.docTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerDocTypes`.
   */
  delete(
    dataAreaId: string,
    taxPayerTypeId: string,
    docTypeId: string
  ): DeleteRequestBuilder<LtmTaxPayerDocTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerDocTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerDocTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmTaxPayerDocTypes<T>
  ): DeleteRequestBuilder<LtmTaxPayerDocTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPayerTypeId?: string,
    docTypeId?: string
  ): DeleteRequestBuilder<LtmTaxPayerDocTypes<T>, T> {
    return new DeleteRequestBuilder<LtmTaxPayerDocTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmTaxPayerDocTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPayerTypeId: taxPayerTypeId!,
            DocTypeId: docTypeId!
          }
    );
  }
}
