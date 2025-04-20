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
import { LtmTaxPayerTypes } from './LtmTaxPayerTypes';

/**
 * Request builder class for operations supported on the {@link LtmTaxPayerTypes} entity.
 */
export class LtmTaxPayerTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmTaxPayerTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmTaxPayerTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmTaxPayerTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmTaxPayerTypes<T>, T> {
    return new GetAllRequestBuilder<LtmTaxPayerTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmTaxPayerTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmTaxPayerTypes`.
   */
  create(
    entity: LtmTaxPayerTypes<T>
  ): CreateRequestBuilder<LtmTaxPayerTypes<T>, T> {
    return new CreateRequestBuilder<LtmTaxPayerTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmTaxPayerTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmTaxPayerTypes.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerTypes.taxPayerTypeId}.
   * @returns A request builder for creating requests to retrieve one `LtmTaxPayerTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPayerTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmTaxPayerTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmTaxPayerTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxPayerTypeId: taxPayerTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmTaxPayerTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmTaxPayerTypes`.
   */
  update(
    entity: LtmTaxPayerTypes<T>
  ): UpdateRequestBuilder<LtmTaxPayerTypes<T>, T> {
    return new UpdateRequestBuilder<LtmTaxPayerTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerTypes`.
   * @param dataAreaId Key property. See {@link LtmTaxPayerTypes.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerTypes.taxPayerTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerTypes`.
   */
  delete(
    dataAreaId: string,
    taxPayerTypeId: string
  ): DeleteRequestBuilder<LtmTaxPayerTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmTaxPayerTypes<T>
  ): DeleteRequestBuilder<LtmTaxPayerTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPayerTypeId?: string
  ): DeleteRequestBuilder<LtmTaxPayerTypes<T>, T> {
    return new DeleteRequestBuilder<LtmTaxPayerTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmTaxPayerTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPayerTypeId: taxPayerTypeId!
          }
    );
  }
}
