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
import { Tax1099Fields } from './Tax1099Fields';
import { Tax1099Type } from './Tax1099Type';

/**
 * Request builder class for operations supported on the {@link Tax1099Fields} entity.
 */
export class Tax1099FieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Tax1099Fields<T>, T> {
  /**
   * Returns a request builder for querying all `Tax1099Fields` entities.
   * @returns A request builder for creating requests to retrieve all `Tax1099Fields` entities.
   */
  getAll(): GetAllRequestBuilder<Tax1099Fields<T>, T> {
    return new GetAllRequestBuilder<Tax1099Fields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Tax1099Fields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Tax1099Fields`.
   */
  create(entity: Tax1099Fields<T>): CreateRequestBuilder<Tax1099Fields<T>, T> {
    return new CreateRequestBuilder<Tax1099Fields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Tax1099Fields` entity based on its keys.
   * @param dataAreaId Key property. See {@link Tax1099Fields.dataAreaId}.
   * @param typeOfTax1099Form Key property. See {@link Tax1099Fields.typeOfTax1099Form}.
   * @param tax1099Box Key property. See {@link Tax1099Fields.tax1099Box}.
   * @returns A request builder for creating requests to retrieve one `Tax1099Fields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeOfTax1099Form: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.Tax1099Type'
    >,
    tax1099Box: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Tax1099Fields<T>, T> {
    return new GetByKeyRequestBuilder<Tax1099Fields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TypeOfTax1099Form: typeOfTax1099Form,
      Tax1099Box: tax1099Box
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Tax1099Fields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Tax1099Fields`.
   */
  update(entity: Tax1099Fields<T>): UpdateRequestBuilder<Tax1099Fields<T>, T> {
    return new UpdateRequestBuilder<Tax1099Fields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Tax1099Fields`.
   * @param dataAreaId Key property. See {@link Tax1099Fields.dataAreaId}.
   * @param typeOfTax1099Form Key property. See {@link Tax1099Fields.typeOfTax1099Form}.
   * @param tax1099Box Key property. See {@link Tax1099Fields.tax1099Box}.
   * @returns A request builder for creating requests that delete an entity of type `Tax1099Fields`.
   */
  delete(
    dataAreaId: string,
    typeOfTax1099Form: Tax1099Type,
    tax1099Box: string
  ): DeleteRequestBuilder<Tax1099Fields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Tax1099Fields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Tax1099Fields` by taking the entity as a parameter.
   */
  delete(entity: Tax1099Fields<T>): DeleteRequestBuilder<Tax1099Fields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeOfTax1099Form?: Tax1099Type,
    tax1099Box?: string
  ): DeleteRequestBuilder<Tax1099Fields<T>, T> {
    return new DeleteRequestBuilder<Tax1099Fields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Tax1099Fields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeOfTax1099Form: typeOfTax1099Form!,
            Tax1099Box: tax1099Box!
          }
    );
  }
}
