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
import { EngineeringProductCategoryAttributeDetailsValues } from './EngineeringProductCategoryAttributeDetailsValues';

/**
 * Request builder class for operations supported on the {@link EngineeringProductCategoryAttributeDetailsValues} entity.
 */
export class EngineeringProductCategoryAttributeDetailsValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringProductCategoryAttributeDetailsValues<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringProductCategoryAttributeDetailsValues` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductCategoryAttributeDetailsValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductCategoryAttributeDetailsValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductCategoryAttributeDetailsValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   */
  create(
    entity: EngineeringProductCategoryAttributeDetailsValues<T>
  ): CreateRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringProductCategoryAttributeDetailsValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductCategoryAttributeDetailsValues` entity based on its keys.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductCategoryName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductAttributeTypeName}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductAttributeName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductCategoryAttributeDetailsValues` entity based on its keys.
   */
  getByKey(
    engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>,
    engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringProductCategoryAttributeDetailsValues<T>,
      T
    >(this.entityApi, {
      EngineeringProductCategoryName: engineeringProductCategoryName,
      EngineeringProductAttributeTypeName: engineeringProductAttributeTypeName,
      EngineeringProductAttributeName: engineeringProductAttributeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   */
  update(
    entity: EngineeringProductCategoryAttributeDetailsValues<T>
  ): UpdateRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringProductCategoryAttributeDetailsValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductCategoryName}.
   * @param engineeringProductAttributeTypeName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductAttributeTypeName}.
   * @param engineeringProductAttributeName Key property. See {@link EngineeringProductCategoryAttributeDetailsValues.engineeringProductAttributeName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   */
  delete(
    engineeringProductCategoryName: string,
    engineeringProductAttributeTypeName: string,
    engineeringProductAttributeName: string
  ): DeleteRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryAttributeDetailsValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryAttributeDetailsValues` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductCategoryAttributeDetailsValues<T>
  ): DeleteRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  >;
  delete(
    engineeringProductCategoryNameOrEntity: any,
    engineeringProductAttributeTypeName?: string,
    engineeringProductAttributeName?: string
  ): DeleteRequestBuilder<
    EngineeringProductCategoryAttributeDetailsValues<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringProductCategoryAttributeDetailsValues<T>,
      T
    >(
      this.entityApi,
      engineeringProductCategoryNameOrEntity instanceof
      EngineeringProductCategoryAttributeDetailsValues
        ? engineeringProductCategoryNameOrEntity
        : {
            EngineeringProductCategoryName:
              engineeringProductCategoryNameOrEntity!,
            EngineeringProductAttributeTypeName:
              engineeringProductAttributeTypeName!,
            EngineeringProductAttributeName: engineeringProductAttributeName!
          }
    );
  }
}
