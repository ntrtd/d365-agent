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
import { TaxCodes } from './TaxCodes';

/**
 * Request builder class for operations supported on the {@link TaxCodes} entity.
 */
export class TaxCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCodes<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodes<T>, T> {
    return new GetAllRequestBuilder<TaxCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodes`.
   */
  create(entity: TaxCodes<T>): CreateRequestBuilder<TaxCodes<T>, T> {
    return new CreateRequestBuilder<TaxCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCodes.dataAreaId}.
   * @param taxCode Key property. See {@link TaxCodes.taxCode}.
   * @returns A request builder for creating requests to retrieve one `TaxCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxCodes<T>, T> {
    return new GetByKeyRequestBuilder<TaxCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxCode: taxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodes`.
   */
  update(entity: TaxCodes<T>): UpdateRequestBuilder<TaxCodes<T>, T> {
    return new UpdateRequestBuilder<TaxCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodes`.
   * @param dataAreaId Key property. See {@link TaxCodes.dataAreaId}.
   * @param taxCode Key property. See {@link TaxCodes.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodes`.
   */
  delete(
    dataAreaId: string,
    taxCode: string
  ): DeleteRequestBuilder<TaxCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodes` by taking the entity as a parameter.
   */
  delete(entity: TaxCodes<T>): DeleteRequestBuilder<TaxCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxCode?: string
  ): DeleteRequestBuilder<TaxCodes<T>, T> {
    return new DeleteRequestBuilder<TaxCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxCode: taxCode!
          }
    );
  }
}
